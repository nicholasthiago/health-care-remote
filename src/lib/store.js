import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { middleware } from './features/middleware'
import authReducer from './features/auth'


export const store = () => {
	return configureStore({
		reducer: { authReducer },
		middleware: ( getDefaultMiddleware ) => {
			return getDefaultMiddleware().concat( middleware )
		},
	})
}