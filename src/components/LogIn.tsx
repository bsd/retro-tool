import * as React from 'react';
import { TextInput, Button, CheckBox } from './Input'
import { LoadingIcon } from './Loading';

import './LogIn.scss';

type LogInState = {
  email: string;
  password: string;
  displayName: string;
  photoURL: string;
  hasAccount: boolean;
  rememberMe: boolean;
}

type LogInProps = {
  error: ErrorResponse | null;
  loading: boolean;
  logIn: (email: string, password: string) => Promise<void>;
  createAccount: (
    email: string,
    password: string,
    displayName: string,
    photoURL: string,
  ) => Promise<void>;
}

export default class LogIn extends React.Component<LogInProps, LogInState> {

  state = {
    email: '',
    password: '',
    displayName: '',
    photoURL: '',
    hasAccount: true,
    rememberMe: false,
  };

  componentDidMount() {
    const email = sessionStorage.getItem('email') || '';
    const password = sessionStorage.getItem('password') || '';
    this.setState({ email, password });
  }

  authRequest() {
    const {
      email, password,
      displayName, photoURL,
      hasAccount,
    } = this.state;
    const { logIn, createAccount } = this.props;

    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);

    return (
      hasAccount ?
        logIn(email, password) :
        createAccount(email, password, displayName, photoURL)
    );

  }

  render() {
    const {
      email, password,
      displayName, photoURL,
      hasAccount, rememberMe,
    } = this.state;

    const { error, loading } = this.props;

    return (
      <div className="LogIn" >
        <TextInput
          label={"email"}
          value={email}
          onChange={value => this.setState({ email: value })}
        />
        <TextInput
          label="password"
          value={password}
          onChange={value => this.setState({ password: value })}
          type={'password'}
        />
        {!hasAccount && <TextInput
          label="Username"
          value={displayName}
          onChange={value => this.setState({ displayName: value })}
        />}
        {!hasAccount && <TextInput
          label="Profile Pic"
          value={photoURL}
          onChange={value => this.setState({ photoURL: value })}
        />}
        {error && <i>{error.message}</i>}
        <CheckBox
          label="Have Account:"
          checked={hasAccount}
          onChange={value => this.setState({ hasAccount: value })}
        />
        <CheckBox
          label="Remember Me:"
          checked={rememberMe}
          onChange={value => this.setState({ rememberMe: value })}
        />
        <Button
          label={hasAccount ? 'Log In' : 'Create Account'}
          onClick={() => this.authRequest()}
        />
        <LoadingIcon
          error={!!error}
          background
          hidden={!loading}
          success={!loading && !error}
        />
      </div>
    );
  }
}
