

declare type UserId = string;

declare type CardId = string;

/*
type CardComments = {
  user: UserId;
  comment: string;
  time: number;
}
*/

declare type Card = {
  id: CardId;
  content: string;
  author: UserId;
  likes: UserId[];
  favorites: UserId[];
  /*
  comments: CardComments[];
  */
}

declare const enum Alignment {
  LEFT = 'LEFT',
  CENTER = 'CENTER',
  RIGHT = 'RIGHT',
}


declare type BoardId = string;

declare type Board = {
  id: BoardId;
  name: string;
  fontSize: number;
  alignment: Alignment;
  cards: CardId[];
}

declare type RoomId = string;

declare const enum LikesPer {
  CARD = 'CARD',
  BOARD = 'BOARD',
  ROOM = 'ROOM',
}

declare type Room = {
  id: RoomId;
  name: string;
  boards: BoardId[];
  admin: string;

  favoritesAdminOnly: boolean;
  favoritesEnabled: boolean;

  likesEnabled: boolean;
  likesCount: number;
  likesPer: LikesPer;

  boardsAdminOnly: boolean;

  cardsAdminOnly: boolean;
}
