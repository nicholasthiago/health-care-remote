import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth'
import { middleware } from './features/middleware'

export const store = () => {
	return configureStore({
		reducer: {
			authReducer,
		},
		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware().concat(middleware)
		},
	})
}