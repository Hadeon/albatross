import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';

import authReducer from '../_reducers/authReducers';
import AsyncStorage from '@react-native-community/async-storage';


const rootReducer = combineReducers(
  { 
    authReducer: authReducer 
  }
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'authReducer'
  ]
  // blacklist: [

  // ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(
    createLogger()
  )
);

let persistor = persistStore(store);

export { store, persistor};