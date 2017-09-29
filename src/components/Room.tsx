import * as React from 'react';
import { map } from 'pura/array';
import { User } from '../state/auth';
import Board from '../containers/Board';
import {
  Button,
  TextInput,
  NumberInput,
  CheckBox,
} from '../components/Input';

import './Room.scss';

type RoomElement = {
  (props: {
    room: Room;
    editRoom: Room | null;
    boards: Board[];
    user: User | null,
    canAddBoard: boolean;
    createBoard: (user: User, room: Room, settings: { name: string; } & Partial<Board>) => void;
    updateRoom: (room: Room, user: User) => void;
    deleteRoom: (room: Room) => void;
    updateEditRoom: (room: Room) => void;
  }): JSX.Element;
}

const Room: RoomElement =
  ({ room, editRoom, boards, user, canAddBoard, createBoard, updateRoom, deleteRoom, updateEditRoom }) => (
    <div className="Room">
      <header>
        <h2>{room.name}</h2>
        <Button
          label="Edit Room"
          onClick={() => updateEditRoom(Object.assign({}, room))}
        />
      </header>
      {!editRoom || editRoom.id !== room.id
        ? <div className="Room-Boards">
          {map(boards, board => <Board key={board.id} board={board} room={room} />)}
          {(canAddBoard && user) && <Button
            label="Add Board"
            onClick={() => createBoard(user, room, { name: 'New Board' })}
          />}
        </div>
        : <div className="Room-Editor">
          <TextInput
            label="Room Name"
            value={editRoom.name}
            onChange={name =>
              updateEditRoom(Object.assign(
                {},
                editRoom,
                { name }
              ))
            }
          />
          <h3>Favorites</h3>
          <CheckBox
            label="Enabled"
            onChange={favoritesEnabled =>
              updateEditRoom(Object.assign(
                {},
                editRoom,
                { favoritesEnabled }
              ))
            }
            checked={editRoom.favoritesEnabled}
          />
          <CheckBox
            label="Admin only"
            onChange={favoritesAdminOnly =>
              updateEditRoom(Object.assign(
                {},
                editRoom,
                { favoritesAdminOnly }
              ))
            }
            checked={editRoom.favoritesAdminOnly}
          />
          <h3>Likes</h3>
          <CheckBox
            label="Enabled"
            onChange={likesEnabled =>
              updateEditRoom(Object.assign(
                {},
                editRoom,
                { likesEnabled }
              ))
            }
            checked={editRoom.likesEnabled}
          />
          <NumberInput
            label="Number of Likes"
            onChange={likesCount =>
              updateEditRoom(Object.assign(
                {},
                editRoom,
                { likesCount }
              ))
            }
            value={editRoom.likesCount}
          />
          <select
            value={editRoom.likesPer}
            onChange={e =>
              updateEditRoom(Object.assign(
                {},
                editRoom,
                { likesPer: e.target.value }
              ))
            }
          >
            <option value={LikesPer.CARD} >Likes Per Card</option>
            <option value={LikesPer.BOARD} >Likes Per Board</option>
            <option value={LikesPer.ROOM} >Likes Per Room</option>
          </select>
          <h3>Boards</h3>
          <CheckBox
            label="Admin only"
            onChange={boardsAdminOnly =>
              updateEditRoom(Object.assign(
                {},
                editRoom,
                { boardsAdminOnly }
              ))
            }
            checked={editRoom.boardsAdminOnly}
          />
          <h3>Cards</h3>
          <CheckBox
            label="Admin only"
            onChange={cardsAdminOnly =>
              updateEditRoom(Object.assign(
                {},
                editRoom,
                { cardsAdminOnly }
              ))
            }
            checked={editRoom.cardsAdminOnly}
          />
          <Button
            label="Update Room"
            onClick={() => user && updateRoom(editRoom, user)}
          />
          <Button
            label="Delete Room"
            onClick={() => deleteRoom(editRoom)}
          />
        </div>}
    </div>
  );

export default Room;
