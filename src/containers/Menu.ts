import { connect } from 'react-redux'
import Menu from '../components/Menu';
import { State } from '../state';
import {
  editAccount,
  selectRoom,
} from '../state/ui';
import { User, $user } from '../state/auth';
import {
  createRoom,
  fetchCompleteRoom,
} from '../state/data';


const mapStateToProps = (state: State) => {
  const user = $user(state);
  return {
    user,
    rooms: !user ? {} : user.rooms,
    visible: true,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  editAccount: editAccount(dispatch),
  selectRoom: (roomId: string) =>
    fetchCompleteRoom(dispatch)(roomId)
      .then(() => selectRoom(dispatch)(roomId)),
  createRoom: (user: User) =>
    createRoom(dispatch)(user, { name: 'New Room' })
      .then((key: string) => selectRoom(dispatch)(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
