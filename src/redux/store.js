
import { configureStore } from '@reduxjs/toolkit';
import { userAuthFormReducer } from './reducers/login'


export const store = configureStore({
  reducer: {
  userAuthForm: userAuthFormReducer,
  }
});


