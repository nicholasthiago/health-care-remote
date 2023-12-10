import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth'

export const store = () => {
	return configureStore({
		reducer: {
			authReducer,
		}
	})
}