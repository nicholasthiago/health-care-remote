"use client"
import Link from "next/link";
import style from 'styles/style'
import { logOut } from "lib/features/auth";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import { mainOptions } from "lib/data/data";



// Navbar component
const Navbar = () => {

	const dispatch = useAppDispatch();
	const isAuth = useAppSelector((state) => state.authReducer.isAuth)

	const handle_LogOut = () => dispatch(logOut());

	const render_mainOptions = () => {
		return (mainOptions).map((e, key) => {
			return (
				<Link key={key} className={style.link} href={e.href}> {e.title} </Link>
			)
		})

	}

	return (
		<nav className={style.nav + ' min-w-screen px-6 py-4 bg-hcblue text-slate-100 font-medium'} >

			<Link className={'flex-1 text-xl'} href={'/'}> {'Health Care Remote'} </Link>

			<div className={'flex flex-2 gap-6'}>

				{render_mainOptions()}
			</div>

			{(isAuth) ?
				<button className={'flex-1 text-white px-2'}
					onMouseDown={() => handle_LogOut()}
				> {'Log Out'} </button> : null
			}

		</nav>
	)
};

export default Navbar