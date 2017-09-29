import * as React from 'react';
import LogIn from '../containers/LogIn';
import { LoadingIcon } from './Loading';
import Menu from '../containers/Menu';
import AccountManager from '../containers/AccountManager';
import Room from '../containers/Room';

import './Application.scss';


type ApplicationState = {
  [module: string]: JSX.Element;
}

type ApplicationProps = {
  editAccount: boolean;
  loggedIn: boolean;
  room: Room | null;
}

export default class Application extends React.PureComponent<ApplicationProps, ApplicationState> {

  state: ApplicationState = {
    AccountManager: <AccountManager />,
    Menu: <Menu />,
    LoadingIcon: <LoadingIcon
      key="LoadingIcon"
      success={false}
      hidden={false}
      error={false}
      background={false}
    />
  };

  render() {
    const { loggedIn, editAccount, room } = this.props;

    const {
      AccountManager,
      Menu,
      // LoadingIcon,
    } = this.state;

    let content: JSX.Element = <div></div>;

    if (!loggedIn) {
      content = <LogIn />;
    } else if (loggedIn && editAccount) {
      content = AccountManager;
    } else if (!!room) {
      content = <Room room={room} />;
    }

    return (
      <main className={`Application ${!!editAccount || !!room ? '--side-menu' : ''}`} >
        {loggedIn && Menu}
        {content}
      </main>
    );
  }
}
