import { get } from 'pura/object';


export type UI = {
  editAccount: boolean;
  selectedRoom: string | null;
  card: Card | null;
  board: Board | null;
  room: Room | null;
}

/* Action Types */
const enum Type {
  EDIT_ACCOUNT = 'EDIT_ACCOUNT',
  SELECT_ROOM = 'SELECT_ROOM',
  EDIT_ROOM = 'EDIT_ROOM',
  EDIT_BOARD = 'EDIT_BOARD',
  EDIT_CARD = 'EDIT_CARD',
}

/* Actions */
type EditAccount = Action<Type.EDIT_ACCOUNT, { show: boolean }>;
type SelectRoom = Action<Type.SELECT_ROOM, { id: string }>;
type EditRoom = Action<Type.EDIT_ROOM, { room: Room | null }>;
type EditBoard = Action<Type.EDIT_BOARD, { board: Board | null }>;
type EditCard = Action<Type.EDIT_CARD, { card: Card | null }>;

/* Action Creator */
const editAccountAC: ActionCreator<EditAccount> =
  ({ show }) => ({
    type: Type.EDIT_ACCOUNT,
    show
  });
const selectRoomAC: ActionCreator<SelectRoom> =
  ({ id }) => ({
    type: Type.SELECT_ROOM,
    id,
  });
const editRoomAC: ActionCreator<EditRoom> =
  ({ room }) => ({
    type: Type.EDIT_ROOM,
    room,
  });
const editBoardAC: ActionCreator<EditBoard> =
  ({ board }) => ({
    type: Type.EDIT_BOARD,
    board,
  });
const editCardAC: ActionCreator<EditCard> =
  ({ card }) => ({
    type: Type.EDIT_CARD,
    card,
  });

/* Requests */
export const editAccount =
  (dispatch: Dispatch) =>
    (show: boolean) =>
      Promise.resolve(dispatch(editAccountAC({ show })));

export const selectRoom =
  (dispatch: Dispatch) =>
    (id: string) =>
      Promise.resolve(dispatch(selectRoomAC({ id })));

export const editRoom =
  (dispatch: Dispatch) =>
    (room: Room | null) =>
      Promise.resolve(dispatch(editRoomAC({ room })));

export const editBoard =
  (dispatch: Dispatch) =>
    (board: Board | null) =>
      Promise.resolve(dispatch(editBoardAC({ board })));

export const editCard =
  (dispatch: Dispatch) =>
    (card: Card | null) =>
      Promise.resolve(dispatch(editCardAC({ card })));

type UIActions =
  EditAccount |
  SelectRoom |
  EditRoom |
  EditBoard |
  EditCard;

export const defaultState =
  (): UI => ({
    editAccount: false,
    selectedRoom: null,
    card: null,
    board: null,
    room: null,
  });

/* Reducer */
export const reducer =
  (state: UI = defaultState(), action: UIActions) => {
    switch (action.type) {
      case Type.EDIT_ACCOUNT: return Object.assign(
        {},
        state,
        { editAccount: action.show },
      );
      case Type.EDIT_ROOM: return Object.assign(
        {},
        state,
        { room: Object.assign(Object.create(null), action.room) },
      );
      case Type.EDIT_BOARD: return Object.assign(
        {},
        state,
        { board: Object.assign(Object.create(null), action.board) },
      );
      case Type.EDIT_CARD: return Object.assign(
        {},
        state,
        { card: Object.assign(Object.create(null), action.card) },
      );
      case Type.SELECT_ROOM: return Object.assign(
        {},
        state,
        { selectedRoom: action.id },
      );
    }
    return state;
  };

/* Selectors */
export const $editAccount =
  (state: { ui: UI }) =>
    get<boolean>(
      state,
      'ui.editAccount',
      false,
    );
export const $selectRoom =
  (state: { ui: UI }) =>
    get<string | null>(
      state,
      'ui.selectedRoom',
      null,
    );
export const $editRoom =
  (state: { ui: UI }) =>
    get<Room | null>(
      state,
      'ui.room',
      null,
    );
export const $editBoard =
  (state: { ui: UI }) =>
    get<Board | null>(
      state,
      'ui.board',
      null,
    );
export const $editCard =
  (state: { ui: UI }) =>
    get<Card | null>(
      state,
      'ui.card',
      null,
    );
