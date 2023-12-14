import { configureStore } from '@reduxjs/toolkit'
import { middleware } from './features/middleware'
import authReducer from 'lib/features/auth'
import prescriptionReducer from 'lib/features/prescriptions'
import appoinmentReducer from './features/appoinments'


export const store = () => {
	return configureStore({
		reducer: {
			authReducer,
			appoinmentReducer,
			prescriptionReducer
		},
		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware().concat(middleware)
		},
	})
}