
import { configureStore } from '@reduxjs/toolkit';
import { userAuthFormReducer } from './reducers/login'
import { propertiesReducer } from './reducers/properties';


export const store = configureStore({
  reducer: {
  userAuthForm: userAuthFormReducer,
  propertiesList: propertiesReducer,
  }
});


