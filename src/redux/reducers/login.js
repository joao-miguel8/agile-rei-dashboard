import { createSlice } from "@reduxjs/toolkit";

export const userAuthForm = createSlice({
name: "userAuthForm",
initialState: {
emailInput: "",
passwordInput: "",
},
reducers: {
setEmail: (( state, email ) => {
state.emailInput = email.payload;
}),
setPassword: ((state, password) => {
state.passwordInput = password.payload;
}),
}
})


// export these to our redux store
export const { setEmail, setPassword } = userAuthForm.actions;
export const userAuthFormReducer = userAuthForm.reducer;


