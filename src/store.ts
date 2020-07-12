import AsyncStorage from '@react-native-community/async-storage';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Dispatch,
  MiddlewareAPI,
} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import appReducer from './reducers/appReducer';
import weatherReducer from './reducers/weatherReducer';
import sagas from './sagas/';

const appPersistConfig = {
  storage: AsyncStorage,
  key: 'app',
};

const weatherPersistConfig = {
  storage: AsyncStorage,
  key: 'weather',
};

export const reducers = {
  app: persistReducer(appPersistConfig, appReducer),
  weather: persistReducer(weatherPersistConfig, weatherReducer),
};

export const rootReducer = combineReducers(reducers);

const appMiddleware = (_store: MiddlewareAPI) => (next: Dispatch) => (
  action: any,
) => {
  //   var state = store.getState()
  //   switch (action.type) {
  //     case actions.ADD_TASK:
  //       *do something*
  //       break;
  //   }
  next(action);
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, appMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export const store = createStore(rootReducer, compose(...enhancers));

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);
