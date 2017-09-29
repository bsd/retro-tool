import * as React from 'react';
import { map } from 'pura/array';
import { User } from '../state/auth';
import { Button, TextInput, NumberInput } from '../components/Input';
import Card from '../containers/Card';

import './Board.scss';

type BoardElement = {
  (props: {
    room: Room;
    board: Board;
    cards: Card[];
    user: User | null;
    editBoard: Board | null;
    canEdit: boolean;
    updateEditBoard: (board: Board) => void;
    updateBoard: (board: Board) => void;
    deleteBoard: (board: Board, room: Room) => void;
    createCard: (user: User, board: Board) => void;
  }): JSX.Element;
}


const Board: BoardElement =
  ({ cards, board, room, user, editBoard, canEdit, updateEditBoard, updateBoard, deleteBoard, createCard }) => (
    <div className="Board">
      <div className="Board-Header">
        <h3>{board.name}</h3>
        {canEdit && (!editBoard || editBoard.id !== board.id )&& <Button
          label="Edit"
          onClick={() => updateEditBoard(Object.assign({}, board))}
        />}
      </div>
      {editBoard && editBoard.id === board.id
        ? <div className="Board-Editor">
          <select
            value={editBoard.alignment}
            onChange={e => updateEditBoard(Object.assign(
              {},
              editBoard,
              { alignment: e.target.value }
            ))}
          >
            <option value={Alignment.LEFT} >Align Text Left</option>
            <option value={Alignment.CENTER} >Align Text Center</option>
            <option value={Alignment.RIGHT} >Align Text Right</option>
          </select>
          <TextInput
            label="Name"
            value={editBoard.name}
            onChange={
              (name) => updateEditBoard(Object.assign(
                {},
                editBoard,
                { name }
              ))
            }
          />
          <NumberInput
            label="Font Size"
            value={editBoard.fontSize}
            onChange={
              (fontSize) => updateEditBoard(Object.assign(
                {},
                editBoard,
                { fontSize }
              ))
            }
          />
          <Button
            label="Update Board"
            onClick={() => updateBoard(editBoard)}
          />
          <Button
            label="Delete Board"
            onClick={() => deleteBoard(board, room)}
          />
        </div>
        : <div className="Board-Cards">
          {map(cards, card => <Card key={card.id} card={card} board={board} room={room} />)}
          {user && <Button
            label="Add Card"
            onClick={() => createCard(user, board)}
          />}
        </div>
      }
    </div>
  )


export default Board;
