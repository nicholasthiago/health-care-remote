"use client"

import 'app/globals.css'
import Main from 'components/main'
import Login from 'components/login'
import ReduxProvider from 'lib/provider'
import { useAppSelector } from 'lib/hooks'

// Main Page Component
export default function MyApp() {

	const isAuth = useAppSelector((state) => state.authReducer.isAuth)

	return (
		<ReduxProvider>
			<main className="flex min-h-fit flex-col items-center justify-start p-12">
				{(!isAuth) ? <Login /> : <Main />}
			</main>
		</ReduxProvider>
	)
}