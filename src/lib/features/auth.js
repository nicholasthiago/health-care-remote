import { createSlice } from "@reduxjs/toolkit";
import { users } from 'lib/data/users'
import { randomNumber, verifyLogIn } from "utils/utils";

const initialState = {
	isAuth: false,
	currUser: {},
	userList: users,
}

export const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUsers: (state, action) => { return { ...state, userList: action.payload.data }},
		createUser: (state,action) => {
			let newUser = action.payload

			const userID = 'HN' + randomNumber(6)
			newUser.healthNumber = userID

			return { ...state, userList: [...state.userList, newUser] }
		},
		logOut: () => initialState,
		logIn: (state, action) => {
			const currUser = verifyLogIn(action.payload)

			if (currUser.length > 0) {
				return {
					...state,
					isAuth: true,
					currUser
				}
			} else {
				alert("Invalid Health number or password")
			}
		},
	},
})

export const { logIn, logOut, setUsers, createUser } = auth.actions
export default auth.reducer