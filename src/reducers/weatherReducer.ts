'use strict';
import {WEATHER} from '../actions/actionTypes';

const initialState = {
  weather: null,
  error: null,
};

export default function weatherReducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case WEATHER.FETCH_SUCCESS:
      return {...state, weather: action.payload, error: null};
    case WEATHER.FETCH_FAILURE:
      return {...state, weather: null, error: action.payload};
    default:
      return state;
  }
}
