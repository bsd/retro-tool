import { map, forEach, filter } from 'pura/array';
import { get } from 'pura/object';
import { User } from './auth';
import { fetchData, setData, removeData, } from './api';
import { fetchAccountData } from '../state/auth';

export const enum Views {
  MENU = 'MENU',
  ACCOUNT_MANAGER = 'ACCOUNT_MANAGER',
  CHARACTER_CREATOR = 'CHARACTER_CREATOR',
  CHARACTER_SHEET = 'CHARACTER_SHEET',
}

export type Data = {
  rooms: { [roomId: string]: Room; };
  boards: { [boardId: string]: Board; };
  cards: { [cardId: string]: Card; };
  requests: number;
  error: ErrorResponse | null;
}

/* Action Types */
const enum Type {
  DATA_REQUEST = 'DATA_REQUEST',

  CREATE_ROOM_SUCCESS = 'CREATE_ROOM_SUCCESS',
  CREATE_ROOM_ERROR = 'CREATE_ROOM_ERROR',
  CREATE_BOARD_SUCCESS = 'CREATE_BOARD_SUCCESS',
  CREATE_BOARD_ERROR = 'CREATE_BOARD_ERROR',
  CREATE_CARD_SUCCESS = 'CREATE_CARD_SUCCESS',
  CREATE_CARD_ERROR = 'CREATE_CARD_ERROR',

  FETCH_ROOM_SUCCESS = 'FETCH_ROOM_SUCCESS',
  FETCH_ROOM_ERROR = 'FETCH_ROOM_ERROR',
  FETCH_ROOMS_SUCCESS = 'FETCH_ROOMS_SUCCESS',
  FETCH_ROOMS_ERROR = 'FETCH_ROOMS_ERROR',
  FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS',
  FETCH_BOARD_ERROR = 'FETCH_BOARD_ERROR',
  FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS',
  FETCH_BOARDS_ERROR = 'FETCH_BOARDS_ERROR',
  FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS',
  FETCH_CARD_ERROR = 'FETCH_CARD_ERROR',
  FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS',
  FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR',

  UPDATE_ROOM_SUCCESS = 'UPDATE_ROOM_SUCCESS',
  UPDATE_ROOM_ERROR = 'UPDATE_ROOM_ERROR',
  UPDATE_BOARD_SUCCESS = 'UPDATE_BOARD_SUCCESS',
  UPDATE_BOARD_ERROR = 'UPDATE_BOARD_ERROR',
  UPDATE_CARD_SUCCESS = 'UPDATE_CARD_SUCCESS',
  UPDATE_CARD_ERROR = 'UPDATE_CARD_ERROR',

  DELETE_ROOM_SUCCESS = 'DELETE_ROOM_SUCCESS',
  DELETE_ROOM_ERROR = 'DELETE_ROOM_ERROR',
  DELETE_BOARD_SUCCESS = 'DELETE_BOARD_SUCCESS',
  DELETE_BOARD_ERROR = 'DELETE_BOARD_ERROR',
  DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS',
  DELETE_CARD_ERROR = 'DELETE_CARD_ERROR',
}

/* Actions */
type dataRequest = Action<Type.DATA_REQUEST, {}>;

type createRoomSuccess = Action<Type.CREATE_ROOM_SUCCESS, { rooms: { [roomId: string]: Room; } }>;
type createRoomError = ActionError<Type.CREATE_ROOM_ERROR>;

type createBoardSuccess = Action<Type.CREATE_BOARD_SUCCESS, { boards: { [boardId: string]: Board; } }>;
type createBoardError = ActionError<Type.CREATE_BOARD_ERROR>;

type createCardSuccess = Action<Type.CREATE_CARD_SUCCESS, { cards: { [cardId: string]: Card; } }>;
type createCardError = ActionError<Type.CREATE_CARD_ERROR>;


type fetchRoomSuccess = Action<Type.FETCH_ROOM_SUCCESS, { rooms: { [roomId: string]: Room; } }>;
type fetchRoomError = ActionError<Type.FETCH_ROOM_ERROR>;
type fetchRoomsSuccess = Action<Type.FETCH_ROOMS_SUCCESS, { rooms: { [roomId: string]: Room; } }>;
type fetchRoomsError = ActionError<Type.FETCH_ROOMS_ERROR>;

type fetchBoardSuccess = Action<Type.FETCH_BOARD_SUCCESS, { boards: { [boardId: string]: Board; } }>;
type fetchBoardError = ActionError<Type.FETCH_BOARD_ERROR>;
type fetchBoardsSuccess = Action<Type.FETCH_BOARDS_SUCCESS, { boards: { [boardId: string]: Board; } }>;
type fetchBoardsError = ActionError<Type.FETCH_BOARDS_ERROR>;

type fetchCardSuccess = Action<Type.FETCH_CARD_SUCCESS, { cards: { [cardId: string]: Card; } }>;
type fetchCardError = ActionError<Type.FETCH_CARD_ERROR>;
type fetchCardsSuccess = Action<Type.FETCH_CARDS_SUCCESS, { cards: { [cardId: string]: Card; } }>;
type fetchCardsError = ActionError<Type.FETCH_CARDS_ERROR>;

type updateRoomSuccess = Action<Type.UPDATE_ROOM_SUCCESS, { rooms: { [roomId: string]: Room; } }>;
type updateRoomError = ActionError<Type.UPDATE_ROOM_ERROR>;

type updateBoardSuccess = Action<Type.UPDATE_BOARD_SUCCESS, { boards: { [boardId: string]: Board; } }>;
type updateBoardError = ActionError<Type.UPDATE_BOARD_ERROR>;

type updateCardSuccess = Action<Type.UPDATE_CARD_SUCCESS, { cards: { [cardId: string]: Card; } }>;
type updateCardError = ActionError<Type.UPDATE_CARD_ERROR>;

type deleteRoomSuccess = Action<Type.DELETE_ROOM_SUCCESS, { id: string }>;
type deleteRoomError = ActionError<Type.DELETE_ROOM_ERROR>;

type deleteBoardSuccess = Action<Type.DELETE_BOARD_SUCCESS, { id: string }>;
type deleteBoardError = ActionError<Type.DELETE_BOARD_ERROR>;

type deleteCardSuccess = Action<Type.DELETE_CARD_SUCCESS, { id: string }>;
type deleteCardError = ActionError<Type.DELETE_CARD_ERROR>;

type DataActions =
  dataRequest |

  createRoomSuccess |
  createRoomError |
  createBoardSuccess |
  createBoardError |
  createCardSuccess |
  createCardError |

  fetchRoomSuccess |
  fetchRoomError |
  fetchRoomsSuccess |
  fetchRoomsError |
  fetchBoardSuccess |
  fetchBoardError |
  fetchBoardsSuccess |
  fetchBoardsError |
  fetchCardSuccess |
  fetchCardError |
  fetchCardsSuccess |
  fetchCardsError |

  updateRoomSuccess |
  updateRoomError |
  updateBoardSuccess |
  updateBoardError |
  updateCardSuccess |
  updateCardError |

  deleteRoomSuccess |
  deleteRoomError |
  deleteBoardSuccess |
  deleteBoardError |
  deleteCardSuccess |
  deleteCardError;

/* Action Creator */
const dataRequest: dataRequest = { type: Type.DATA_REQUEST };

// create
const createRoomSuccess: ActionCreator<createRoomSuccess> =
  ({ rooms }) => ({
    type: Type.CREATE_ROOM_SUCCESS,
    rooms,
  });
const createRoomError: ActionCreator<createRoomError> =
  ({ message }) => ({
    type: Type.CREATE_ROOM_ERROR,
    message,
  });


const createBoardSuccess: ActionCreator<createBoardSuccess> =
  ({ boards }) => ({
    type: Type.CREATE_BOARD_SUCCESS,
    boards,
  });
const createBoardError: ActionCreator<createBoardError> =
  ({ message }) => ({
    type: Type.CREATE_BOARD_ERROR,
    message,
  });


const createCardSuccess: ActionCreator<createCardSuccess> =
  ({ cards }) => ({
    type: Type.CREATE_CARD_SUCCESS,
    cards,
  });
const createCardError: ActionCreator<createCardError> =
  ({ message }) => ({
    type: Type.CREATE_CARD_ERROR,
    message,
  });

// fetch
const fetchRoomSuccess: ActionCreator<fetchRoomSuccess> =
  ({ rooms }) => ({
    type: Type.FETCH_ROOM_SUCCESS,
    rooms,
  });
const fetchRoomError: ActionCreator<fetchRoomError> =
  ({ message }) => ({
    type: Type.FETCH_ROOM_ERROR,
    message,
  });
const fetchRoomsSuccess: ActionCreator<fetchRoomsSuccess> =
  ({ rooms }) => ({
    type: Type.FETCH_ROOMS_SUCCESS,
    rooms,
  });
const fetchRoomsError: ActionCreator<fetchRoomsError> =
  ({ message }) => ({
    type: Type.FETCH_ROOMS_ERROR,
    message,
  });


const fetchBoardSuccess: ActionCreator<fetchBoardSuccess> =
  ({ boards }) => ({
    type: Type.FETCH_BOARD_SUCCESS,
    boards,
  });
const fetchBoardError: ActionCreator<fetchBoardError> =
  ({ message }) => ({
    type: Type.FETCH_BOARD_ERROR,
    message,
  });
const fetchBoardsSuccess: ActionCreator<fetchBoardsSuccess> =
  ({ boards }) => ({
    type: Type.FETCH_BOARDS_SUCCESS,
    boards,
  });
const fetchBoardsError: ActionCreator<fetchBoardsError> =
  ({ message }) => ({
    type: Type.FETCH_BOARDS_ERROR,
    message,
  });


const fetchCardSuccess: ActionCreator<fetchCardSuccess> =
  ({ cards }) => ({
    type: Type.FETCH_CARD_SUCCESS,
    cards,
  });
const fetchCardError: ActionCreator<fetchCardError> =
  ({ message }) => ({
    type: Type.FETCH_CARD_ERROR,
    message,
  });
const fetchCardsSuccess: ActionCreator<fetchCardsSuccess> =
  ({ cards }) => ({
    type: Type.FETCH_CARDS_SUCCESS,
    cards,
  });
const fetchCardsError: ActionCreator<fetchCardsError> =
  ({ message }) => ({
    type: Type.FETCH_CARDS_ERROR,
    message,
  });

// UPDATE
const updateRoomSuccess: ActionCreator<updateRoomSuccess> =
  ({ rooms }) => ({
    type: Type.UPDATE_ROOM_SUCCESS,
    rooms,
  });
const updateRoomError: ActionCreator<updateRoomError> =
  ({ message }) => ({
    type: Type.UPDATE_ROOM_ERROR,
    message,
  });


const updateBoardSuccess: ActionCreator<updateBoardSuccess> =
  ({ boards }) => ({
    type: Type.UPDATE_BOARD_SUCCESS,
    boards,
  });
const updateBoardError: ActionCreator<updateBoardError> =
  ({ message }) => ({
    type: Type.UPDATE_BOARD_ERROR,
    message,
  });


const updateCardSuccess: ActionCreator<updateCardSuccess> =
  ({ cards }) => ({
    type: Type.UPDATE_CARD_SUCCESS,
    cards,
  });
const updateCardError: ActionCreator<updateCardError> =
  ({ message }) => ({
    type: Type.UPDATE_CARD_ERROR,
    message,
  });

// DELETE
const deleteRoomSuccess: ActionCreator<deleteRoomSuccess> =
  ({ id }) => ({
    type: Type.DELETE_ROOM_SUCCESS,
    id,
  });
const deleteRoomError: ActionCreator<deleteRoomError> =
  ({ message }) => ({
    type: Type.DELETE_ROOM_ERROR,
    message,
  });


const deleteBoardSuccess: ActionCreator<deleteBoardSuccess> =
  ({ id }) => ({
    type: Type.DELETE_BOARD_SUCCESS,
    id,
  });
const deleteBoardError: ActionCreator<deleteBoardError> =
  ({ message }) => ({
    type: Type.DELETE_BOARD_ERROR,
    message,
  });


const deleteCardSuccess: ActionCreator<deleteCardSuccess> =
  ({ id }) => ({
    type: Type.DELETE_CARD_SUCCESS,
    id,
  });
const deleteCardError: ActionCreator<deleteCardError> =
  ({ message }) => ({
    type: Type.DELETE_CARD_ERROR,
    message,
  });

/* Requests */
export const createRoom =
  (dispatch: Dispatch) =>
    (user: User, settings: { name: string } & Partial<Room>) => {
      dispatch(dataRequest);
      const ref = firebase.database().ref('rooms').push();
      const key = ref.key;
      if (key && user) {
        const room: Room = Object.assign({
          id: key,
          name: '',
          boards: [] as BoardId[],
          admin: user.uid,

          favoritesAdminOnly: false,
          favoritesEnabled: true,

          likesEnabled: true,
          likesCount: 1,
          likesPer: LikesPer.CARD,

          boardsAdminOnly: true,

          cardsAdminOnly: false,
        }, settings);

        return setData(`users/${user.uid}/rooms/${key}`, room.name)
          .then(() => setData(`rooms/${key}`, room))
          .then(() => fetchCompleteRoom(dispatch)(key))
          .then(() => fetchAccountData(dispatch)(user))
          .then(() => {
            dispatch(createRoomSuccess({ rooms: { [room.id]: room } }));
            return room;
          })
          .catch(error => dispatch(createRoomError(error)));
      } else if (!key) {
        return Promise.resolve(
          dispatch(createRoomError({ message: 'Unable to create unique key.' }))
        );
      } else if (!user) {
        return Promise.resolve(
          dispatch(createRoomError({ message: 'Not logged in.' }))
        );
      } else {
        return Promise.resolve(
          dispatch(createRoomError({ message: 'unknown error in createRoom' }))
        );
      }
    };

export const createBoard =
  (dispatch: Dispatch) =>
    (user: User, room: Room, settings: { name: string } & Partial<Board>) => {
      dispatch(dataRequest);
      const ref = firebase.database().ref('boards').push();
      const key = ref.key;
      if (key && user) {
        const board: Board = Object.assign({
          id: key,
          name: '',
          fontSize: 16,
          alignment: Alignment.LEFT,
          cards: [],
        }, settings);

        return setData(`boards/${key}`, board)
          .then(() => setData(`rooms/${room.id}/boards`, [...(room.boards || []), key]))
          .then(() => fetchCompleteRoom(dispatch)(room.id))
          .then(() => {
            dispatch(createBoardSuccess({ boards: { [board.id]: board } }));
            return board;
          })
          .catch(error => dispatch(createBoardError(error)));
      } else if (!key) {
        return Promise.resolve(
          dispatch(createBoardError({ message: 'Unable to create unique key.' }))
        );
      } else if (!user) {
        return Promise.resolve(
          dispatch(createBoardError({ message: 'Not logged in.' }))
        );
      } else {
        return Promise.resolve(
          dispatch(createBoardError({ message: 'unknown error in createBoard' }))
        );
      }
    };

export const createCard =
  (dispatch: Dispatch) =>
    (user: User, board: Board) => {
      dispatch(dataRequest);
      const ref = firebase.database().ref('cards').push();
      const key = ref.key;
      if (key && user) {
        const card: Card = Object.assign({
          id: key,
          author: user.uid,
          content: '',
          likes: [],
          favorites: [],
        });

        return setData(`cards/${key}`, card)
          .then(() => setData(`boards/${board.id}/cards`, [...(board.cards || []), key]))
          .then(() => fetchBoard(dispatch)(board.id))
          .then(() => {
            dispatch(createCardSuccess({ cards: { [card.id]: card } }));
            return card;
          })
          .catch(error => dispatch(createCardError(error)));
      } else if (!key) {
        return Promise.resolve(
          dispatch(createCardError({ message: 'Unable to create unique key.' }))
        );
      } else if (!user) {
        return Promise.resolve(
          dispatch(createCardError({ message: 'Not logged in.' }))
        );
      } else {
        return Promise.resolve(
          dispatch(createCardError({ message: 'unknown error in createCard' }))
        );
      }
    };

export const fetchRoom =
  (dispatch: Dispatch) =>
    (id: string): Promise<Room> => (
      dispatch(dataRequest),
      fetchData<Room>(`rooms/${id}`)
        .then((room) => {
          dispatch(fetchRoomSuccess({ rooms: { [room.id]: room } }));
          return room;
        })
        .catch(error => {
          console.error(error);
          dispatch(fetchRoomError(error));
          return {};
        })
    );

export const fetchRooms =
  (dispatch: Dispatch) =>
    (ids: string[]) => (
      dispatch(dataRequest),
      Promise.all(map(ids, id => fetchData<Room>(`rooms/${id}`)))
        .then((roomsData) => {
          const rooms: { [roomId: string]: Room } = {};
          forEach(roomsData, room => rooms[room.id] = room);
          dispatch(fetchRoomsSuccess({ rooms }));
          return rooms;
        })
        .catch(error => {
          console.error(error);
          dispatch(fetchRoomsError(error));
          return {};
        })
    );

export const fetchBoard =
  (dispatch: Dispatch) =>
    (id: string): Promise<Board> => (
      dispatch(dataRequest),
      fetchData<Board>(`boards/${id}`)
        .then((board) => {
          dispatch(fetchBoardSuccess({ boards: { [board.id]: board } }));
          return board;
        })
        .catch(error => {
          console.error(error);
          dispatch(fetchBoardError(error));
          return {};
        })
    );

export const fetchBoards =
  (dispatch: Dispatch) =>
    (ids: string[]): Promise<{ [boardId: string]: Board }> => (
      dispatch(dataRequest),
      Promise.all(map(ids, id => fetchData<Board>(`boards/${id}`)))
        .then((boardsData) => {
          const boards: { [boardId: string]: Board } = {};
          forEach(filter(boardsData), board => boards[board.id] = board);
          dispatch(fetchBoardsSuccess({ boards }));
          return boards;
        })
        .catch(error => {
          console.error(error);
          dispatch(fetchBoardsError(error));
          return {};
        })
    );

export const fetchCard =
  (dispatch: Dispatch) =>
    (id: string): Promise<Card> => (
      dispatch(dataRequest),
      fetchData<Card>(`cards/${id}`)
        .then((card) => {
          dispatch(fetchCardSuccess({
            cards: {
              [card.id]: Object.assign({
                favorites: [],
                likes: [],
              }, card)
            }
          }));
          return card;
        })
        .catch(error => {
          console.error(error);
          dispatch(fetchCardError(error));
          return {};
        })
    );

export const fetchCards =
  (dispatch: Dispatch) =>
    (ids: string[]): Promise<{ [cardId: string]: Card }> => (
      dispatch(dataRequest),
      Promise.all(map(ids, id => fetchData<Card>(`cards/${id}`)))
        .then((cardsData) => {
          const cards: { [cardId: string]: Card } = {};
          forEach(filter(cardsData), card => cards[card.id] = Object.assign({ favorites: [], likes: [] }, card));
          dispatch(fetchCardsSuccess({ cards }));
          return cards;
        })
        .catch(error => {
          console.error(error);
          dispatch(fetchCardsError(error));
          return {};
        })
    );

export const fetchCompleteRoom =
  (dispatch: Dispatch) =>
    (id: string) => (
      dispatch(dataRequest),
      fetchRoom(dispatch)(id)
        .then(({ boards }) => fetchBoards(dispatch)(boards || []))
        .then((boards) => {
          const cardIds = ([] as CardId[]).concat(...Object.values(boards).map(({ cards }) => cards));
          return fetchCards(dispatch)(cardIds);
        })
    );

export const updateRoom =
  (dispatch: Dispatch) =>
    (room: Room, user: User) => (
      dispatch(dataRequest),
      setData<string>(`users/${user.uid}/rooms/${room.id}`, room.name)
        .then(() => setData<Room>(`rooms/${room.id}`, room))
        .then(() => fetchData<Room>(`rooms/${room.id}`))
        .then((room: Room) => dispatch(updateRoomSuccess({ rooms: { [room.id]: room } })))
        .then(() => fetchCompleteRoom(dispatch)(room.id))
        .then(() => fetchAccountData(dispatch)(user))
        .then(() => room)
        .catch(error => {
          console.error(error);
          dispatch(updateRoomError(error));
          return {};
        })
    );

export const updateBoard =
  (dispatch: Dispatch) =>
    (board: Board) => (
      dispatch(dataRequest),
      setData(`boards/${board.id}`, board)
        .then(() => fetchData<Board>(`boards/${board.id}`))
        .then((board) => {
          dispatch(updateBoardSuccess({ boards: { [board.id]: board } }));
          return board;
        })
        .catch(error => {
          console.error(error);
          dispatch(updateBoardError(error));
          return {};
        })
    );

export const updateCard =
  (dispatch: Dispatch) =>
    (card: Card) => (
      dispatch(dataRequest),
      setData(`cards/${card.id}`, card)
        .then(() => fetchData(`cards/${card.id}`))
        .then((card) => {
          dispatch(updateCardSuccess({ cards: { [card.id]: Object.assign({ favorites: [], likes: [] }, card) } }));
          return card;
        })
        .catch(error => {
          console.error(error);
          dispatch(updateCardError(error));
          return {};
        })
    );

export const deleteRoom =
  (dispatch: Dispatch) =>
    (room: Room, user: User) => (
      dispatch(dataRequest),
      removeData(`rooms/${room.id}`)
        .then(() => removeData(`users/${user.uid}/rooms/${room.id}`))
        .then(() => dispatch(deleteRoomSuccess({ id: room.id })))
        .catch(error => {
          console.error(error);
          dispatch(deleteRoomError(error));
          return {};
        })
    );

export const deleteBoard =
  (dispatch: Dispatch) =>
    (board: Board, room: Room) => (
      dispatch(dataRequest),
      removeData(`boards/${board.id}`)
        .then(() => dispatch(deleteBoardSuccess({ id: board.id })))
        .then(() => setData(`rooms/${room.id}/boards`, filter(room.boards || [], id => board.id !== id)))
        .then(() => fetchCompleteRoom(dispatch)(room.id))
        .catch(error => {
          console.error(error);
          dispatch(deleteBoardError(error));
          return {};
        })
    );

export const deleteCard =
  (dispatch: Dispatch) =>
    (card: Card, board: Board) => (
      dispatch(dataRequest),
      removeData(`cards/${card.id}`)
        .then(() => dispatch(deleteCardSuccess({ id: card.id })))
        .then(() => setData(`boards/${board.id}/cards`, filter(board.cards || [], id => card.id === id)))
        .catch(error => {
          console.error(error);
          dispatch(deleteCardError(error));
          return {};
        })
    );

export const selectVisitRoom =
  (dispatch: Dispatch) =>
    (roomId: string, user: User) => (
      dispatch(dataRequest),
      fetchData<Room>(`rooms/${roomId}`)
        .then((room: Room) => setData<string>(`users/${user.uid}/visitingRooms/${room.id}`, room.name))
        .then(() => fetchCompleteRoom(dispatch)(roomId))
        .then(() => fetchAccountData(dispatch)(user))
        .catch(error => {
          console.error(error);
          dispatch(updateRoomError(error));
          return {};
        })
    );

export const defaultState =
  (): Data => ({
    rooms: {},
    boards: {},
    cards: {},
    requests: 0,
    error: null,
  });

/* Reducer */
export const reducer =
  (state: Data = defaultState(), action: DataActions) => {
    switch (action.type) {
      case Type.DATA_REQUEST: return Object.assign(
        {},
        state,
        { requests: state.requests + 1 }
      );

      case Type.CREATE_ROOM_SUCCESS:
      case Type.FETCH_ROOM_SUCCESS:
      case Type.FETCH_ROOMS_SUCCESS:
      case Type.UPDATE_ROOM_SUCCESS: return Object.assign(
        {},
        state,
        {
          error: null,
          requests: state.requests - 1,
          rooms: Object.assign(
            state.rooms,
            action.rooms
          )
        }
      );

      case Type.CREATE_BOARD_SUCCESS:
      case Type.FETCH_BOARD_SUCCESS:
      case Type.FETCH_BOARDS_SUCCESS:
      case Type.UPDATE_BOARD_SUCCESS: return Object.assign(
        {},
        state,
        {
          error: null,
          requests: state.requests - 1,
          boards: Object.assign(
            state.boards,
            action.boards
          )
        }
      );

      case Type.CREATE_CARD_SUCCESS:
      case Type.FETCH_CARD_SUCCESS:
      case Type.FETCH_CARDS_SUCCESS:
      case Type.UPDATE_CARD_SUCCESS: return Object.assign(
        {},
        state,
        {
          error: null,
          requests: state.requests - 1,
          cards: Object.assign(
            state.cards,
            action.cards
          )
        }
      );

      case Type.DELETE_ROOM_SUCCESS:
        delete state.rooms[action.id];
        return Object.assign(
          {},
          state,
          {
            error: null,
            requests: state.requests - 1,
            rooms: state.rooms,
          }
        );
      case Type.DELETE_BOARD_SUCCESS:
        delete state.boards[action.id];
        return Object.assign(
          {},
          state,
          {
            error: null,
            requests: state.requests - 1,
            boards: state.boards,
          }
        );

      case Type.DELETE_CARD_SUCCESS:
        delete state.cards[action.id];
        return Object.assign(
          {},
          state,
          {
            error: null,
            requests: state.requests - 1,
            cards: state.cards,
          }
        );

      case Type.CREATE_ROOM_ERROR:
      case Type.CREATE_BOARD_ERROR:
      case Type.CREATE_CARD_ERROR:

      case Type.FETCH_ROOM_ERROR:
      case Type.FETCH_ROOMS_ERROR:
      case Type.FETCH_BOARD_ERROR:
      case Type.FETCH_BOARDS_ERROR:
      case Type.FETCH_CARD_ERROR:
      case Type.FETCH_CARDS_ERROR:

      case Type.UPDATE_ROOM_ERROR:
      case Type.UPDATE_BOARD_ERROR:
      case Type.UPDATE_CARD_ERROR:

      case Type.DELETE_ROOM_ERROR:
      case Type.DELETE_BOARD_ERROR:
      case Type.DELETE_CARD_ERROR: return Object.assign(
        {},
        state,
        {
          requests: state.requests - 1,
          error: action
        }
      )
    }
    return state;
  };

/* Selectors */
export const $room =
  (state: { data: Data }) =>
    (id: string) =>
      get<Room | null>(
        state,
        `data.rooms.${id}`,
        null,
      );

export const $board =
  (state: { data: Data }) =>
    (id: string) =>
      get<Board | null>(
        state,
        `data.boards.${id}`,
        null,
      );

export const $card =
  (state: { data: Data }) =>
    (id: string) =>
      get<Card | null>(
        state,
        `data.cards.${id}`,
        null,
      );

export const $dataError =
  (state: { data: Data }) =>
    () =>
      get<ErrorResponse | null>(
        state,
        `data.error`,
        null,
      );
