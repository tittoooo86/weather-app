import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import SplashScreen from 'react-native-splash-screen';

import App from './App';
import {persistor, store} from './store';

export default class Root extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  public render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<View />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}
