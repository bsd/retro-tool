import * as React from 'react';
import { map } from 'pura/array';
import { User } from '../state/auth';
import { Button, TextInput } from './Input';

import './Menu.scss';

type Menu = {
  (props: {
    visible: boolean;
    user: User | null;
    rooms: User["rooms"];
    visitInput: string;
    visitingRooms: User["visitingRooms"];
    editAccount: (show: boolean) => void;
    selectRoom: (roomId: string) => void;
    createRoom: (user: User) => void;
    updateVisitInput: (visitInput: string) => void;
  }): JSX.Element;
}

const Menu: Menu = ({ user, rooms, visitInput, visitingRooms, visible, editAccount, selectRoom, createRoom, updateVisitInput }) => (
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
    {(user && Object.keys(visitingRooms).length) && <ul className="Menu-RoomList">
      <h3>Visting rooms</h3>
      {map(
        Object.keys(visitingRooms),
        (id: string) => <li
          key={id}
          onClick={() => {
            editAccount(false);
            selectRoom(id);
          }}
        >{visitingRooms[id]}</li>
      )}
    </ul>}
    <TextInput
      label="Room Id"
      className="Menu-VisitInput"
      value={visitInput}
      onChange={value => updateVisitInput(value)}
    />
    <Button
      label="Join Room"
    />
  </menu>
);


export default Menu;
