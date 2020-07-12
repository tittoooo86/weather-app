import {action} from 'typesafe-actions';

import {AppReducerState} from '../reducers/appReducer';
import * as types from './actionTypes';

export const setStoreState = (state?: Partial<AppReducerState>) =>
  action(types.APP.SET_STORE_STATE, state);
