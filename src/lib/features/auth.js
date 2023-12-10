import { createSlice } from "@reduxjs/toolkit";
import { users } from 'lib/data/data'
import { verifyLogIn } from "utils/utils";

const initialState = {
	isAuth: false,
	users: users,
	currUser: {},
}

export const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logOut: () => initialState,
		logIn: ( state, action ) => {
			if ( verifyLogIn( action.payload )) {
				return {
					...initialState,
					isAuth: true,
					currUser: action.payload,
				}
			}
		},
	},
})

export const { logIn, logOut } = auth.actions
export default auth.reducer