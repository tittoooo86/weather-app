import {action} from 'typesafe-actions';

import {WeatherData} from '../types';
import * as types from './actionTypes';

export const fetchWeatherSuccess = (payload: WeatherData) =>
  action(types.WEATHER.FETCH_SUCCESS, payload);

export const fetchWeatherFailure = (payload: string) =>
  action(types.WEATHER.FETCH_FAILURE, payload);

export const fetchWeather = (payload: string) =>
  action(types.WEATHER.FETCH, payload);
