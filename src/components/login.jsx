"use client"
// Login Component

import { logIn, setUsers } from "lib/features/auth";
import { useAppDispatch } from "lib/hooks";
import { useEffect, useState } from "react";
import { getUsers } from "utils/request";

function Login() {

	const [user, setuser] = useState('')
	const [pswd, setPswd] = useState('')

	const style = {
		input: 'px-4 py-3 my-1 rounded-sm shadow-sm',
		btnGren: 'bg-hcgren text-slate-50 font-semibold rounded-sm px-6 py-2',
	}

	const dispatch = useAppDispatch();

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

	return (
		<div className={'flex flex-col shadow-lg px-16 py-12 gap-4'}>
			<h3> {'Login'} </h3>

			<div className={'flex flex-col gap-3 w-64'}>

				<input className={style.input} type={'text'} placeholder={'username'} onInput={e => setuser(e.target.value)} />
				<input className={style.input} type={'password'} placeholder={'password'} onInput={e => setPswd(e.target.value)} />

				<button className={style.btnGren}
					onMouseDown={() => handle_LogIn()}
				> {'Log In'} </button>

			</div>
		</div>
	)
}

export default Login