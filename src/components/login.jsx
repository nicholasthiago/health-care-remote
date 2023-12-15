"use client"
// Login Component

import { createUser, logIn, setUsers } from "lib/features/auth";
import { useAppDispatch } from "lib/hooks";
import { useEffect, useState } from "react";
import { addUser, getUsers } from "utils/request";
import Form from "./form";
import { initialUser, userFields } from "lib/data/users";
import { useRouter } from "next/navigation";
import { randomNumber } from "utils/utils";

function Login() {

	const [user, setuser] = useState('')
	const [pswd, setPswd] = useState('')
	const [newHN, setNewHN] = useState('')
	const [login, setLogin] = useState(true)
	const [newUser, setnewUser] = useState(initialUser)

	const style = {
		input: 'px-4 py-3 my-1 rounded-sm shadow-sm',
		btnGren: 'bg-hcgren text-slate-50 font-semibold rounded-sm px-6 py-2',
		btnBlue: 'bg-hcblue text-slate-50 font-semibold rounded-sm px-6 py-2',
		btnXtra: 'underline text-md mt-4'
	}

	const router = useRouter()
	const dispatch = useAppDispatch()

	const handle_LogIn = () => {
		const userInput = [user, pswd]
		dispatch(logIn(userInput))
	};

	useEffect(() => {
		let mounted = true;
		getUsers().then(data => {
			if (mounted) {
				dispatch(setUsers(data))
			}
		})
		return () => mounted = false;
	})

	const render_Log = () => {
		return (
			<div className={'flex flex-col shadow-lg px-16 py-12 gap-4'}>
				<h3> {'Login'} </h3>

				<div className={'flex flex-col gap-3 w-64'}>

					{(newHN.length > 0) ? <h4> {'Your Health Number: ' + newHN} </h4> : null}

					<input className={style.input} type={'text'} placeholder={'username'} onInput={e => setuser(e.target.value)} />
					<input className={style.input} type={'password'} placeholder={'password'} onInput={e => setPswd(e.target.value)} />

					<button className={style.btnGren}
						onMouseDown={() => handle_LogIn()}
					> {'Log In'} </button>

					<button className={style.btnXtra}
						onMouseDown={() => setLogin(false)}
					> {'Register'} </button>

				</div>
			</div>
		)
	}

	const handle_Input = (label, value) => {
		let newItem = {
			...newUser,
			[label]: value
		}

		console.log(newItem)
		setnewUser(newItem)
	}

	const handle_Submit = (user) => {
		const userID = 'HN' + randomNumber(6)
		user = newUser
		user.healthNumber = userID

		setNewHN(userID)
		addUser(user)

		dispatch(createUser(user))
		setLogin(true)
		router.push('/')
	}

	const render_Reg = () => {
		return (
			<div className={'flex flex-col shadow-lg px-16 py-12 gap-4'}>
				<h3> {'Login'} </h3>

				<div className={'flex flex-col gap-3 w-64'}>

					<Form fields={userFields} handle_Input={handle_Input} labeled={false} />

					<button className={style.btnBlue}
						onMouseDown={() => handle_Submit()}
					> {'Register'} </button>

					<button className={style.btnXtra}
						onMouseDown={() => setLogin(true)}
					> {'Log In'} </button>

				</div>
			</div>
		)
	}

	return (login) ? render_Log() : render_Reg()
}

export default Login