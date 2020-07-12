import {call, put, takeEvery} from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import {
  fetchWeatherFailure,
  fetchWeatherSuccess,
} from '../actions/weatherActions';
import API from '../lib/api';
import {BaseAction} from '../types';

function* fetchWeather(action: BaseAction) {
  try {
    const weatherData = yield call(API.fetchWeather, action.payload);
    yield put(fetchWeatherSuccess(weatherData));
  } catch (e) {
    yield put(fetchWeatherFailure(e.message));
  }
}

export default function* root() {
  yield takeEvery(types.WEATHER.FETCH, fetchWeather);
}
