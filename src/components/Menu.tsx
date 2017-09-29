import * as React from 'react';
import { map } from 'pura/array';
import { User } from '../state/auth';
import { Button } from './Input';

import './Menu.scss';

type Menu = {
  (props: {
    visible: boolean;
    user: User | null;
    rooms: User["rooms"];
    editAccount: (show: boolean) => void;
    selectRoom: (roomId: string) => void;
    createRoom: (user: User) => void;
  }): JSX.Element;
}

const Menu: Menu = ({ user, rooms, visible, editAccount, selectRoom, createRoom }) => (
  <menu className={`Menu ${visible ? '--visible' : '--hidden'}`}>
    {user && (
      <div className="Menu-User">
        <div className="Menu-User-pic">
          <img src={user.photoURL || undefined} />
        </div>
        <h1>{user.displayName || ''}</h1>
        <Button
          label="Edit Account"
          onClick={() => editAccount(true)}
        />
      </div>
    )}
    {user && <ul className="Menu-RoomList">
      <h3>Room List</h3>
      {map(
        Object.keys(rooms),
        (id: string) => <li
          key={id}
          onClick={() => {
            editAccount(false);
            selectRoom(id);
          }}
        >{rooms[id as string]}</li>
      )}
      <Button
        label="Create Room"
        onClick={() => createRoom(user)}
      />
    </ul>}
  </menu>
);


export default Menu;
