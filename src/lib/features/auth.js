import { createSlice } from "@reduxjs/toolkit";
import { users } from 'lib/data/data'
import { verifyLogIn } from "utils/utils";

const initialState = {
	isAuth: false,
	users: users,
	currUser: [],
}

export const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logOut: () => initialState,
		logIn: ( state, action ) => {
			const currUser = verifyLogIn( action.payload )

			if ( currUser.length > 0 ) {
				return {
					...initialState,
					isAuth: true,
					currUser
				}
			} else {
				alert( "Invalid Health number or password" )
			}
		},
	},
})

export const { logIn, logOut } = auth.actions
export default auth.reducer