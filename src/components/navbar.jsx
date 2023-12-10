"use client"
import Link from "next/link";
import style from 'styles/style'
import { logOut } from "lib/features/auth";
import { useAppDispatch } from "lib/hooks";

// Navbar component
const Navbar = () => {

	const dispatch = useAppDispatch();
	const handle_LogOut = () => dispatch( logOut());

	return (
		<nav className={ style.nav + ' px-6 py-4 bg-hcblue text-slate-100 font-medium'} >

			<Link className={'flex-1'} href={'/'}> {'Health Care Remote'} </Link>

			<div className={'flex flex-2 gap-6'}>

				{/* <Link className={ style.link } href={'/'}> {'Home'} </Link> */}
				<Link className={ style.link } href={'/appointments'	}> {'Appointments'	} </Link>
				<Link className={ style.link } href={'/emergency'		}> {'Emergency'		} </Link>
				<Link className={ style.link } href={'/prescriptions'	}> {'Prescriptions'	} </Link>
			</div>

			<button className={'flex-1 text-white px-2'} onMouseDown={() => handle_LogOut()}
			> {'Log Out'} </button>

		</nav>
	)
};

export default Navbar