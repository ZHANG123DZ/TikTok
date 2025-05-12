import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import registerReducer from '../features/register/registerSlice';
import loginReducer from '../features/login/loginSlice';
import authReducer from '../features/auth/authSlice';
import modalReducer from '../features/modalContent/modalContentSlice';
import urlReducer from '../features/url/urlSlice';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['isAuth', 'isLoading', 'currentUser'],
};

const urlConfig = {
  key: 'url',
  storage,
};

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  auth: persistReducer(authConfig, authReducer),
  modal: modalReducer,
  url: persistReducer(urlConfig, urlReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export const persistor = persistStore(store);
export default store;
