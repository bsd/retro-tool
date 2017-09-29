import { connect } from 'react-redux';
import { map, filter } from 'pura/array';
import Room from '../components/Room';
import { State } from '../state';

import {
  $user,
  User,
} from '../state/auth';

import {
  editRoom,
  $editRoom,
} from '../state/ui';

import {
  createBoard,
  updateRoom,
  deleteRoom,
  $board,
} from '../state/data';

const mapStateToProps = (state: State, ownProps: { room: Room }) => {
  const { room } = ownProps;
  const user = $user(state);

  return {
    room,
    user,
    canAddBoard: !room.boardsAdminOnly || !!user && user.uid === room.admin,
    canEdit: !!user && room.admin === user.uid,
    editRoom: $editRoom(state),
    boards: filter(map(room.boards || [], $board(state))) as Board[],
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createBoard: createBoard(dispatch),
  updateRoom: (room: Room, user: User) =>
    updateRoom(dispatch)(room, user)
      .then(() => editRoom(dispatch)(null)),
  deleteRoom: deleteRoom(dispatch),
  updateEditRoom: editRoom(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Room);
