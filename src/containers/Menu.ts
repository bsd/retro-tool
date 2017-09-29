import { connect } from 'react-redux'
import Menu from '../components/Menu';
import { State } from '../state';
import {
  updateVisitInput,
  editAccount,
  selectRoom,
  $visitInput,
} from '../state/ui';
import { User, $user } from '../state/auth';
import {
  createRoom,
  fetchCompleteRoom,
  selectVisitRoom,
} from '../state/data';


const mapStateToProps = (state: State) => {
  const user = $user(state);
  return {
    user,
    rooms: !user ? {} : user.rooms,
    visitingRooms: !user ? {} : user.visitingRooms || {},
    visitInput: $visitInput(state),
    visible: true,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  editAccount: editAccount(dispatch),
  updateVisitInput: updateVisitInput(dispatch),
  selectRoom: (roomId: string) =>
    fetchCompleteRoom(dispatch)(roomId)
      .then(() => selectRoom(dispatch)(roomId)),
  createRoom: (user: User) =>
    createRoom(dispatch)(user, { name: 'New Room' })
      .then((key: string) => selectRoom(dispatch)(key)),
  selectVisitRoom: (roomId: string, user: User) =>
    selectVisitRoom(dispatch)(roomId, user)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
