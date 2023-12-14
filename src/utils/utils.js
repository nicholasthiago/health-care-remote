"use client"
import { users } from '../lib/data/data'
import { useRouter } from 'next/navigation';
import { useAppSelector } from 'lib/hooks';

export function useAuthVerify() {

	const router = useRouter()
	const isAuth = useAppSelector((state) => state.authReducer.isAuth)

	if (!isAuth) {
		router.push('/')
		return false

	} else {
		return true
	}
}

export function verifyLogIn(userInput) {

	const [user, pswd] = userInput;

	let response = Object.values(users).filter(e => e.healthNumber === user && e.password === pswd);

	// console.log('response: ', response)

	if (response.length > 0) {
		return response

	} else {
		return false
	}
}

export function filterList(filter, list) {

	if (list[filter]) {
		return list[filter]
	} else {
		return null
	}
}