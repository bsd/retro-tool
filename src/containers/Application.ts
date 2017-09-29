import { connect } from 'react-redux'
import Application from '../components/Application';
import { State } from '../state';
import { $editAccount, $selectRoom } from '../state/ui';
import { $user } from '../state/auth';
import { $room } from '../state/data';

export default connect(
  (state: State) => ({
    editAccount: $editAccount(state),
    loggedIn: !!$user(state),
    room: $room(state)($selectRoom(state) || '')
  }),
  () => ({}),
)(Application);
