"use client"
import 'app/globals.css'
import ItemList from 'components/item-list';
import Loading from 'components/loading';
import { getList } from 'lib/features/prescriptions';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from 'lib/hooks';

// Page : Prescriptions
const Prescriptions = () => {

	const dispatch = useAppDispatch();
	const router = useRouter()

	const isAuth = useAppSelector((state) => state.authReducer.isAuth)
	const currUser = useAppSelector((state) => state.authReducer.currUser) || []
	const userPrescription = useAppSelector((state) => state.prescriptionReducer.userPrescription)

	useEffect(() => {
		dispatch(getList(currUser[0]?.healthNumber))

		if ( !isAuth ) { router.push('/') }
	},[isAuth])

	// if (!useAuthVerify()) {
	if (!isAuth) {
		return <Loading />
	} else {
		return (
			<div className={'flex min-h-fit min-w-screen justify-center flex-col self-center items-start py-12 px-16 mx-auto'}>
				<h1 className={'font-bold text-xl text-gray-800 px-6 pb-8'}> {'Prescriptions'} </h1>

				<ItemList data={userPrescription} />
			</div>
		)
	}
}

export default Prescriptions