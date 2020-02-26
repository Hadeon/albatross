import React, { Component } from 'react';
import {
  StatusBar
} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './_store/configureStore';

import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content"/>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation/>
        </PersistGate>
      </Provider>
    )
  }
}

export default App;