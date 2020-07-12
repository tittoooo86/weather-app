'use strict';
import {WEATHER} from '../actions/actionTypes';

const initialState = {
  weather: null,
};

export default function weatherReducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case WEATHER.FETCH_SUCCESS:
      return {...state, weather: action.payload};
    default:
      return state;
  }
}
