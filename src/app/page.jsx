"use client"
import 'app/globals.css'
import Main from 'components/main'
import Login from 'components/login'
import { useEffect } from 'react'
import { useAppSelector } from 'lib/hooks'
import { setAppointments } from 'lib/features/appoinments'
import { setPrescriptions } from 'lib/features/prescriptions'
import { getAppointments, getPrescriptions } from 'utils/request'

// Main Page Component
export default function Home() {

	const isAuth = useAppSelector((state) => state.authReducer.isAuth)

	return (
		<main className="flex min-h-fit flex-col items-center justify-start p-12">
			{(!isAuth) ? <Login /> : <Main />}
		</main>
	)
}