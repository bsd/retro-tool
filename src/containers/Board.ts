import { connect } from 'react-redux';
import { map, filter } from 'pura/array';
import Board from '../components/Board';
import { State } from '../state';

import {
  $user,
  User,
} from '../state/auth';

import {
  editBoard,
  editCard,
  $editBoard,
} from '../state/ui';

import {
  updateBoard,
  deleteBoard,
  createCard,
  $card,
} from '../state/data';

const mapStateToProps = (state: State, ownProps: { board: Board, room: Room }) => {
  const { board, room } = ownProps;
  const user = $user(state);
  return {
    board,
    room,
    user,
    canEdit: !!user && room.admin === user.uid,
    editBoard: $editBoard(state),
    cards: filter(map(board.cards || [], $card(state))) as Card[],
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateBoard: (board: Board) =>
    updateBoard(dispatch)(board)
      .then(() => editBoard(dispatch)(null)),
  deleteBoard: deleteBoard(dispatch),
  updateEditBoard: editBoard(dispatch),
  createCard: (user: User, board: Board) => createCard(dispatch)(user, board).then((card: Card) => editCard(dispatch)(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
