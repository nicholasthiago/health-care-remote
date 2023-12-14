"use client"
import 'app/globals.css'
import ItemList from 'components/item-list';
import { getList } from 'lib/features/prescriptions';
import { useAppDispatch, useAppSelector } from 'lib/hooks';
import { useEffect } from 'react';
import { useAuthVerify } from 'utils/utils';

// Page : Prescriptions
const Prescriptions = () => {

	const dispatch = useAppDispatch();

	const currUser = useAppSelector((state) => state.authReducer.currUser) || []
	const userPrescription = useAppSelector((state) => state.prescriptionReducer.userPrescription)

	useEffect(() => {
		dispatch(getList(currUser[0]?.healthNumber))
	})

	return (
		<div className={'flex min-h-fit min-w-screen justify-center flex-col self-center items-start py-12 px-16 mx-auto'}>
			{(useAuthVerify()) ? (
				<>
					<h1 className={'font-bold text-xl text-gray-800 px-6 pb-8'}> {'Prescriptions'} </h1>
					<ItemList data={userPrescription} />
				</>
			) : null}
		</div>
	)
}

export default Prescriptions