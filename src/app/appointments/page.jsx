"use client"
import 'app/globals.css'
import Link from 'next/link';
import Loading from 'components/loading';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from 'lib/hooks';

// Page : Home
const Appointments = () => {

	const router = useRouter()

	const isAuth = useAppSelector((state) => state.authReducer.isAuth)

	useEffect(() => {

		if (!isAuth) { router.push('/') }

	}, [isAuth]) // eslint-disable-line react-hooks/exhaustive-deps

	if (!isAuth) {
		return <Loading />
	} else {

		return (
			<div className="flex  flex-col items-center justify-between p-24">
				<h1 className='font-bold text-2xl  pb-8'> Appointments </h1>

				<div className="flex">
					<div className='flex mb-4 pt-4 pr-8'>
						<Link className={"bg-hcblue rounded-md font-bold text-white py-2 px-9"} href={"/new-appointment"}>Book Appointment</Link>
					</div>

					<div className='flex mb-4 pt-4 pr-8'>
						<Link className={"bg-hcblue rounded-md font-bold text-white py-2 px-6"} href={"/appointment-list"}>Previous Appointments</Link>
					</div>
				</div>


			</div>
		)
	}
};

export default Appointments