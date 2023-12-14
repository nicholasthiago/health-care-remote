"use client"
import 'app/globals.css'
import Loading from 'components/loading';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from 'lib/hooks';
import { getList } from 'lib/features/appoinments';
import ItemList from 'components/item-list';
import Link from 'next/link';

// Page : Home
const AppointmentList = () => {

	const router = useRouter()
	const dispatch = useAppDispatch()

	const isAuth = useAppSelector((state) => state.authReducer.isAuth)
	const currUser = useAppSelector((state) => state.authReducer.currUser) || []
	const userAppointment = useAppSelector((state) => state.appoinmentReducer.userAppointment)

	useEffect(() => {
		dispatch(getList(currUser[0]?.healthNumber))

		if (!isAuth) { router.push('/') }

	}, [isAuth]) // eslint-disable-line react-hooks/exhaustive-deps

	if (!isAuth) {
		return <Loading />
	} else {
		console.log(  )
		return (
			<div className={'flex min-h-fit min-w-screen justify-center flex-col self-center items-start py-12 px-16 mx-auto'}>
				<h1 className={'font-bold text-xl text-gray-800 px-6 pb-8'}> {'Appointments'} </h1>

				<Link className={"bg-hcblue rounded-lg font-bold text-white py-2 px-9"} href={"/new-appointment"}>Book Appointment</Link>

				<ItemList data={userAppointment} />
			</div>
		)
	}
}

export default AppointmentList