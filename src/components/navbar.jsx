import Link from "next/link";
import style from 'styles/style'


const Navbar = () => {
	return (
		<nav className={ style.nav + ' px-6 py-4 bg-hcblue text-slate-100 font-medium'} >

			<Link className={'flex-1'} href={'/'}> {'Health Care Remote'} </Link>

			<div className={'flex flex-auto gap-6'}>

				{/* <Link className={ style.link } href={'/'}> {'Home'} </Link> */}
				<Link className={ style.link } href={'/appointments'	}> {'Appointments'	} </Link>
				<Link className={ style.link } href={'/emergency'		}> {'Emergency'		} </Link>
				<Link className={ style.link } href={'/prescriptions'	}> {'Prescriptions'	} </Link>
			</div>

		</nav>
	)
};

export default Navbar