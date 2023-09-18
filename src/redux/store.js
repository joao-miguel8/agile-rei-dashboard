import { configureStore } from "@reduxjs/toolkit";
import { userAuthFormReducer } from "./reducers/login";
import { propertiesReducer } from "./reducers/properties";
import { searchBarReducer } from "./reducers/searchBar";

export const store = configureStore({
	reducer: {
		userAuthForm: userAuthFormReducer,
		propertiesList: propertiesReducer,
		searchBar: searchBarReducer,
	},
});
