import { createSlice } from "@reduxjs/toolkit";

export const propertiesList = createSlice({
	name: "propertyCardData",
	initialState: {
		properties: [],
	},
	reducers: {
		setProperties: (state, properties) => {
			state.properties = properties.payload;
		},
	},
});

export const { setProperties } = propertiesList.actions;
export const propertiesReducer = propertiesList.reducer;

export const selectProperties = state => state.propertiesList.properties;
