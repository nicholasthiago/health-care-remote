import { createSlice } from "@reduxjs/toolkit";
import { users } from 'lib/data/data'
import { verifyLogIn } from "utils/utils";

const initialState = {
	isAuth: false,
	userList: users,
	currUser: [],
}

export const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUsers: (state, action) => { return { ...state, userList: action.payload } },
		logOut: () => initialState,
		logIn: (state, action) => {
			const currUser = verifyLogIn(action.payload)

			if (currUser.length > 0) {
				return {
					...initialState,
					isAuth: true,
					currUser
				}
			} else {
				alert("Invalid Health number or password")
			}
		},
	},
})

export const { logIn, logOut, setUsers } = auth.actions
export default auth.reducer