import { merge, get } from 'pura/object';
import { fetchData } from './api';

/* State */
export type UserData = {
  rooms: { [roomId: string]: string };
  visitingRooms: { [roomId: string]: string };
}

export type User = {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
} & UserData;

export type Auth = {
  currentUser: string | null;
  users: { [userId: string]: User };
  requests: number;
  error: ErrorResponse | null;
};


/* Action Types */
const enum Type {
  AUTH_REQUEST = 'AUTH_REQUEST',

  LOG_IN_SUCCESS = 'LOG_IN_SUCCESS',
  LOG_IN_ERROR = 'LOG_IN_ERROR',

  LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS',
  LOG_OUT_ERROR = 'LOG_OUT_ERROR',

  CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS',
  CREATE_ACCOUNT_ERROR = 'CREATE_ACCOUNT_ERROR',

  UPDATE_ACCOUNT_SUCCESS = 'UPDATE_ACCOUNT_SUCCESS',
  UPDATE_ACCOUNT_ERROR = 'UPDATE_ACCOUNT_ERROR',

  DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS',
  DELETE_ACCOUNT_ERROR = 'DELETE_ACCOUNT_ERROR',

  UPDATE_ACCOUNT_DATA_SUCCESS = 'UPDATE_ACCOUNT_DATA_SUCCESS',
  UPDATE_ACCOUNT_DATA_ERROR = 'UPDATE_ACCOUNT_DATA_ERROR',
}

/* Actions */
type AuthRequest = Action<Type.AUTH_REQUEST, {}>;
type LogInSuccess = Action<Type.LOG_IN_SUCCESS, { user: User }>;
type LogInError = ActionError<Type.LOG_IN_ERROR>;
type LogOutSuccess = Action<Type.LOG_OUT_SUCCESS, {}>;
type LogOutError = ActionError<Type.LOG_OUT_ERROR>;
type CreateAccountSuccess = Action<Type.CREATE_ACCOUNT_SUCCESS, { user: User }>;
type CreateAccountError = ActionError<Type.CREATE_ACCOUNT_ERROR>;
type UpdateAccountSuccess = Action<Type.UPDATE_ACCOUNT_SUCCESS, { user: Partial<User> }>;
type UpdateAccountError = ActionError<Type.UPDATE_ACCOUNT_ERROR>;
type DeleteAccountSuccess = Action<Type.DELETE_ACCOUNT_SUCCESS, {}>;
type DeleteAccountError = ActionError<Type.DELETE_ACCOUNT_ERROR>;
type UpdateAccountDataSuccess = Action<Type.UPDATE_ACCOUNT_DATA_SUCCESS, UserData>;
type UpdateAccountDataError = ActionError<Type.UPDATE_ACCOUNT_DATA_ERROR>;

type AuthAction =
  AuthRequest |
  LogInSuccess |
  LogInError |
  LogOutSuccess |
  LogOutError |
  CreateAccountSuccess |
  CreateAccountError |
  UpdateAccountSuccess |
  UpdateAccountError |
  DeleteAccountSuccess |
  DeleteAccountError |
  UpdateAccountDataSuccess |
  UpdateAccountDataError;

/* Action Creator */

const authRequest = { type: Type.AUTH_REQUEST };

const logInSuccess: ActionCreator<LogInSuccess> =
  ({ user }) => ({
    type: Type.LOG_IN_SUCCESS,
    user,
  });

const logInError: ActionCreator<LogInError> =
  ({ message }) => ({
    type: Type.LOG_IN_ERROR,
    message,
  });

const logOutSuccess: ActionCreator<LogOutSuccess> =
  () => ({
    type: Type.LOG_OUT_SUCCESS,
    user: null,
  });

const logOutError: ActionCreator<LogOutError> =
  ({ message }) => ({
    type: Type.LOG_OUT_ERROR,
    message,
  });

const createAccountSuccess: ActionCreator<CreateAccountSuccess> =
  ({ user }) => ({
    type: Type.CREATE_ACCOUNT_SUCCESS,
    user,
  });

const createAccountError: ActionCreator<CreateAccountError> =
  ({ message }) => ({
    type: Type.CREATE_ACCOUNT_ERROR,
    message,
  });

const updateAccountSuccess: ActionCreator<UpdateAccountSuccess> =
  ({ user }) => ({
    type: Type.UPDATE_ACCOUNT_SUCCESS,
    user,
  });

const updateAccountError: ActionCreator<UpdateAccountError> =
  ({ message }) => ({
    type: Type.UPDATE_ACCOUNT_ERROR,
    message,
  });

const deleteAccountSuccess: ActionCreator<DeleteAccountSuccess> =
  () => ({
    type: Type.DELETE_ACCOUNT_SUCCESS,
    user: null,
  });

const deleteAccountError: ActionCreator<DeleteAccountError> =
  ({ message }) => ({
    type: Type.DELETE_ACCOUNT_ERROR,
    message,
  });

const updateAccountDataSuccess: ActionCreator<UpdateAccountDataSuccess> =
  ({ rooms, visitingRooms }) => ({
    type: Type.UPDATE_ACCOUNT_DATA_SUCCESS,
    rooms, visitingRooms
  });

const updateAccountDataError: ActionCreator<UpdateAccountDataError> =
  ({ message }) => ({
    type: Type.UPDATE_ACCOUNT_DATA_ERROR,
    message,
  });


/* Requests */
export const logIn: SingleRequest<{ email: string, password: string }> =
  dispatch =>
    ({ email, password }) =>
      (
        dispatch(authRequest),
        firebase.auth()
          .signInWithEmailAndPassword(email, password)
          .then(user =>
            fetchData(`users/${user.uid}`)
              .then(userData => dispatch(logInSuccess({ user: Object.assign(user, userData || { rooms: [] }) })))
              .catch(error => {
                console.error(error);
                dispatch(logInError(error))
              })
          )
          .catch(error => {
            console.error(error);
            dispatch(logInError(error))
          })
      );

export const logOut: SingleRequest<{}> =
  dispatch =>
    () =>
      (
        dispatch(authRequest),
        firebase.auth()
          .signOut()
          .then(() => dispatch(logOutSuccess({ user: null })))
          .catch(error => {
            console.error(error);
            dispatch(logOutError(error))
          })
      );

export const createAccount: SingleRequest<{ email: string, password: string }> =
  dispatch =>
    ({ email, password }) =>
      (
        dispatch(authRequest),
        firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user =>
            fetchData(`users/${user.uid}`)
              .then(userData => dispatch(createAccountSuccess({ user: Object.assign(user, userData || { rooms: [] }) })))
          )
          .catch(error => {
            console.error(error);
            dispatch(createAccountError(error))
          })
      );

export const updateAccount: SingleRequest<{
  displayName?: string,
  password?: string,
  email?: string,
  photoURL?: string,
}> =
  dispatch =>
    update => {
      dispatch(authRequest);
      const user = firebase.auth().currentUser;
      if (user) {
        const { displayName, photoURL } = merge<firebase.User>(user, update);

        return Promise.all([
          update.email ? user.updateEmail(update.email) : null,
          update.password ? user.updatePassword(update.password) : null,
          user.updateProfile({ displayName, photoURL })
        ])
          .then(() => dispatch(updateAccountSuccess({
            user: firebase.auth().currentUser as any, // this is hack because of null vs undefined
          })))
          .catch(error => {
            console.error(error);
            dispatch(updateAccountError(error))
          })
      } else {
        dispatch(updateAccountError({ message: 'Not Logged In' }));
        return Promise.resolve(undefined);
      }
    };

export const deleteAccount: SingleRequest<{}> =
  dispatch =>
    () => {
      dispatch(authRequest);
      const user = firebase.auth().currentUser;
      if (user) {
        return user
          .delete()
          .then(() => dispatch(deleteAccountSuccess({ user: null })))
          .catch(error => {
            console.error(error);
            dispatch(deleteAccountError(error))
          })
      } else {
        return Promise.resolve(
          dispatch(logOutError({ message: 'Must be logged in to delete an Account' }))
        );
      }
    };

export const fetchAccountData: SingleRequest<{ uid: User["uid"] }> =
  dispatch =>
    ({ uid }) =>
      (
        dispatch(authRequest),
        fetchData<UserData>(`users/${uid}`)
          .then(userData => dispatch(updateAccountDataSuccess(userData)))
          .catch(error => {
            console.error(error);
            dispatch(updateAccountDataError(error))
          })
      );


/* Reducer */
export const defaultState =
  (): Auth => ({
    requests: 0,
    currentUser: null,
    users: {},
    error: null,
  });

export const reducer =
  (state: Auth = defaultState(), action: AuthAction) => {
    let currentUser;
    switch (action.type) {
      case Type.AUTH_REQUEST: return Object.assign(
        {},
        state,
        { requests: ++state.requests },
      );
      case Type.LOG_IN_SUCCESS:
      case Type.CREATE_ACCOUNT_SUCCESS: return Object.assign(
        {},
        state,
        {
          requests: --state.requests,
          currentUser: action.user.uid,
          users: { [action.user.uid]: action.user },
          error: null
        },
      );
      case Type.UPDATE_ACCOUNT_SUCCESS:
        return Object.assign(
          {},
          state,
          {
            requests: --state.requests,
            users: { [state.currentUser || '']: action.user as User },
            error: null,
          }
        );
      case Type.LOG_OUT_SUCCESS:
      case Type.DELETE_ACCOUNT_SUCCESS: return Object.assign(
        {},
        state,
        {
          requests: --state.requests,
          currentUser: null,
          users: {},
          error: null,
        }
      );
      case Type.UPDATE_ACCOUNT_DATA_SUCCESS:
        currentUser = state.users[state.currentUser || ''];
        return Object.assign(
          {},
          state,
          {
            requests: --state.requests,
            users: Object.assign(
              {},
              state.users,
              {
                [state.currentUser || '']: Object.assign(
                  currentUser,
                  { rooms: action.rooms },
                ),
              },
            )
          }
        );
      case Type.LOG_IN_ERROR:
      case Type.LOG_OUT_ERROR:
      case Type.CREATE_ACCOUNT_ERROR:
      case Type.UPDATE_ACCOUNT_ERROR:
      case Type.DELETE_ACCOUNT_ERROR:
      case Type.UPDATE_ACCOUNT_DATA_ERROR: return Object.assign(
        {},
        state,
        {
          requests: --state.requests,
          error: action,
        }
      );
    }
    return state;
  };


/* Selectors */
export const $user =
  (state: { auth: Auth }): User | null =>
    get(
      state,
      `auth.users.${get(state, 'auth.currentUser', null)}`,
      null
    );

export const $authError =
  (state: { auth: Auth }): ErrorResponse | null =>
    get(state, 'auth.error', null);

export const $authLoading =
  (state: { auth: Auth }): boolean =>
    state.auth.requests > 0;
