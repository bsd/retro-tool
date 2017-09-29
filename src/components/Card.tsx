import * as React from 'react';
import { User } from '../state/auth';
import { Button } from '../components/Input';

import './Card.scss';

type CardElement = {
  (props: {
    card: Card;
    board: Board;
    style: {
      fontSize: number;
      textAlign: 'left' | 'center' | 'right';
    };
    editCard: Card | null;
    canEdit: boolean;
    user: User | null,
    showFavorite: boolean;
    canFavorite: boolean;
    showLike: boolean;
    canLike: boolean;
    updateEditCard: (card: Card) => void;
    updateCard: (card: Card) => void;
    deleteCard: (card: Card, board: Board) => void;
  }): JSX.Element;
}


const Card: CardElement =
  ({ card, board, style, editCard, canEdit, user, showFavorite, canFavorite, showLike, canLike, updateEditCard, updateCard, deleteCard }) => (
    <div className={`Card ${editCard && editCard.id === card.id ? '--flipped' : ''}`} style={style} >
      <div className="Card-Front">
        <p>{card.content}</p>
        <div className="Card-Menu">
          {showFavorite && user && <div
            onClick={canFavorite ? () => {
              const index = card.favorites.indexOf(user.uid);
              const favorites = [...card.favorites];
              if (index === -1) {
                favorites.push(user.uid);
              } else {
                favorites.splice(index, 1);
              }
              updateCard(Object.assign({}, card, { favorites }));
            } : undefined}
            className={`Card-Favorite ${canFavorite ? '--can-favorite' : ''}`}
          >{card.favorites.length}</div>
          }
          {canEdit && <Button label="Edit" className="Card-Edit" onClick={() => updateEditCard(Object.assign({}, card))} />}
          {showLike && user && <div
            onClick={canLike ? () => {
              const index = card.likes.indexOf(user.uid);
              const likes = [...card.likes];
              if (index === -1) {
                likes.push(user.uid);
              } else {
                likes.splice(index, 1);
              }
              updateCard(Object.assign({}, card, { likes }));
            } : undefined}
            className={`Card-Like ${canLike ? '--can-like' : ''}`}
          >{card.likes.length}</div>
          }
        </div>
      </div>
      <div className="Card-Back">
        {editCard && card.id === editCard.id && [
          <textarea
            key="Editor"
            onChange={(e) =>
              updateEditCard(Object.assign(
                {},
                editCard,
                { content: e.target.value },
              ))
            }
            value={editCard.content}
          />,
          <div key="Card-Menu" className="Card-Menu">
            <Button
              label="Publish"
              className="Card-Publish"
              onClick={() => updateCard(editCard)}
            />
            <Button
              label="Delete"
              className="Card-Delete"
              onClick={() => deleteCard(card, board)}
            />
          </div>
        ]
        }
      </div>
    </div>
  );

export default Card;
