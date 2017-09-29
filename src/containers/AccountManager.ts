import { connect } from 'react-redux'
import AccountManager from '../components/AccountManager';
import { State } from '../state';
import {
  $user,
  $authError,
  updateAccount,
  logOut,
  deleteAccount,
} from '../state/auth';

const mapStateToProps = (state: State) => ({
  user: $user(state),
  error: $authError(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateAccount: updateAccount(dispatch),
  logOut: logOut(dispatch),
  deleteAccount: deleteAccount(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountManager);
