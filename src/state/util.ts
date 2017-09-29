import { map } from 'pura/array';
import { fetchData } from './api';

export const makeReducer =
  <state, data>(type: string, reducer: Reducer<state, data>) =>
    (state: state, action: Action<string, data>): Partial<state> =>
      action.type === type ? reducer(state, action) || {} : {};

export const makeErrorCreator =
  (type: string) =>
    (message: string) =>
      ({ type, message });

export const makeDataCreator =
  <Data>(type: string, prop: string) =>
    (data: Data) =>
      ({ type, [prop]: data });

export const createFetch =
  <type>(path: string, successAC: (data: { [TypeId: string]: type }) => Action<string, any>, errorAC: (message: string) => ErrorResponse) =>
    (dispatch: Dispatch) =>
      () =>
        fetchData(path)
          .then((value: { [key: string]: type; }) => dispatch(successAC(value)))
          .catch(error => dispatch(errorAC(error.message)));

export const createSingleFetch =
  <type>(path: string, successAC: (data: { [TypeId: string]: type }) => Action<string, any>, errorAC: (message: string) => ErrorResponse, defaultValue?: type) =>
    (dispatch: Dispatch) =>
      (id: string) =>
        fetchData(`${path}/${id}`)
          .then((value: type) => dispatch(successAC({ [id]: defaultValue ? Object.assign(defaultValue, value) : value })))
          .catch(error => dispatch(errorAC(error.message)));

export const createMultiFetch =
  <typeId extends string, type>(path: string, successAC: (data: { [TypeId: string]: type }) => Action<string, any>, errorAC: (message: string) => ErrorResponse) =>
    (dispatch: Dispatch) =>
      (ids: typeId[]): Promise<void> => {
        const result: { [key: string]: type; } = {};

        return Promise.all(map(
          ids,
          (id: typeId) => fetchData(`${path}/${id}`)
            .then((value: type) => result[id] = value)
        ))
          .then(() => dispatch(successAC(result)))
          .catch(error => dispatch(errorAC(error.message)));

      }
