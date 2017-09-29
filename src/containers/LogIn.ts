import { connect } from 'react-redux'
import LogIn from '../components/LogIn';
import { State } from '../state';

import {
  $authError,
  $authLoading,

  logIn,
  createAccount,
  updateAccount,
} from '../state/auth';

const mapStateToProps = (state: State) => ({
  error: $authError(state),
  loading: $authLoading(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logIn: (email: string, password: string) => logIn(dispatch)({ email, password }),
  createAccount: (email: string, password: string, displayName: string, photoURL: string) =>
    createAccount(dispatch)({ email, password })
      .then(() => updateAccount(dispatch)({ displayName, photoURL })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogIn);
