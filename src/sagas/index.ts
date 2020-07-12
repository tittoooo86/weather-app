import {all} from 'redux-saga/effects';
import weather from './weatherSagas';

export default function* root() {
  yield all([weather()]);
}
