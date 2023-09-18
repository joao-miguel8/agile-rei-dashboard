import { createSlice } from "@reduxjs/toolkit";

const searchBar = createSlice({
	name: "searchBar",
	initialState: {
		searchInputValue: "",
	},
	reducers: {
		setSearchInputValue: (state, action) => {
			state.searchInputValue = action.payload;
		},
	},
});

export const { setSearchInputValue } = searchBar.actions;
export const searchBarReducer = searchBar.reducer;

export const searchInputValue = state => state.searchBar.searchInputValue;
