import { connect } from 'react-redux';
import { map, filter, reduce, find } from 'pura/array';
import Card from '../components/Card';
import { State } from '../state';

import {
  $user,
} from '../state/auth';

import {
  editCard,
  $editCard,
} from '../state/ui';

import {
  updateCard,
  deleteCard,
  $card,
  $board,
} from '../state/data';

const mapStateToProps = (state: State, ownProps: { card: Card, board: Board, room: Room }) => {
  const { card, board, room } = ownProps;
  const user = $user(state);
  let canFavorite = false;
  let canLike = false;
  if (user) {
    switch (room.likesPer) {
      case LikesPer.CARD:
        canLike = true;
        break;
      case LikesPer.BOARD:
        canLike = card.likes.indexOf(user.uid) !== -1 ||
          filter(
            map(board.cards || [], id => {
              const card = $card(state)(id);
              return card && card.likes.indexOf(user.uid) !== -1;
            })
          ).length < room.likesCount;
        break;
      case LikesPer.ROOM:
        canLike = card.likes.indexOf(user.uid) !== -1 ||
          reduce(
            room.boards || [],
            (total, boardId) => {
              const board = $board(state)(boardId);
              return board
                ? total + filter(
                  map(board.cards || [], id => {
                    const card = $card(state)(id);
                    return card && card.likes.indexOf(user.uid) !== -1;
                  })
                ).length
                : total
            },
            0,
          ) < room.likesCount;
        break;
    }
    canFavorite = card.favorites.indexOf(user.uid) !== -1 || !find(
      board.cards || [],
      id => {
        const card = $card(state)(id);
        return !!card && card.favorites.indexOf(user.uid) === -1;
      }
    );
  }

  return {
    card,
    user,
    canEdit: !!user && (card.author === user.uid || room.admin === user.uid),
    canFavorite,
    canLike,
    style: {
      fontSize: board.fontSize,
      textAlign: board.alignment.toLowerCase() as ('left' | 'center' | 'right'),
    },
    editCard: $editCard(state),
    showFavorite: room.favoritesEnabled,
    showLike: room.likesEnabled,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateCard: (card: Card) =>
    updateCard(dispatch)(card)
      .then(() => editCard(dispatch)(null)),
  deleteCard: deleteCard(dispatch),
  updateEditCard: editCard(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);

