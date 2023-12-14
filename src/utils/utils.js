"use client"
import { users } from '../lib/data/data'
import { useRouter } from 'next/navigation';
import { useAppSelector } from 'lib/hooks';
import appointmentList from 'lib/data/appointments';


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

function renderOptions(options) {
	return Object.values(options).map((e, i) => {
		<option key={i} value={e}> {e} </option>
	})
}

export function dynamicInput(label, type, data = []) {
	switch (type) {

		case 'select': return (
			<span>
				<label for={label}> {label} </label>
				<select id={label} name={label} placeholder={label}>
					{renderOptions(data)}
				</select>
			</span>
		)

		default: return (
			<span>
				<label for={label}> {label} </label>
				<input id={label} name={label} type={type} placeholder={label} />
			</span>
		)
	}
}

export function countItems(list, count = 0) {
	Object.values(list).map(e => count = count + e.length)

	return count
}

export function getDate(time = false, response) {
	const now = new Date()

	if (!time) {
		return response = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDay()}`
	} else {
		return response = `${now.getHours()}:${now.getMinutes()}`
	}
}