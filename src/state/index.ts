import { combineReducers, createStore } from 'redux';

import {
  reducer as auth,
  defaultState as defaultAuthState,
  Auth,
} from './auth';
import {
  reducer as ui,
  defaultState as defaultUIState,
  UI,
} from './ui';
import {
  reducer as data,
  defaultState as defaultDataState,
  Data,
} from './data';

export type State = {
  auth: Auth,
  ui: UI,
  data: Data,
};

const defaultState: State = {
  ui: defaultUIState(),
  auth: defaultAuthState(),
  data: defaultDataState(),
};

const state = createStore<State>(
  combineReducers<State>({
    auth,
    ui,
    data,
  }),
  defaultState,
);

export default state;
