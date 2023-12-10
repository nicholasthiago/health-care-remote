"use client"
import Login from "components/login"
import Main from "components/main"
import { useAppSelector } from "lib/hooks"


// Main Page Component
export default function Home() {

	const isAuth = useAppSelector((state) => state.authReducer.isAuth )

	return (
		<main className="flex min-h-screen flex-col items-center justify-start p-24">
			{( !isAuth ) ? <Login /> : <Main /> }
		</main>
	)
}