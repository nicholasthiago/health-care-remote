"use client"

import { mainOptions } from "lib/data/users";
import MenuItem from "./menu-item";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import { getAppointments, getPrescriptions } from "utils/request";
import { setAppointments } from "lib/features/appoinments";
import { setPrescriptions } from "lib/features/prescriptions";
import { useEffect } from "react";

// Page : Main
const Main = () => {

	const dispatch = useAppDispatch()
	const currUser = useAppSelector((state) => state.authReducer.currUser )

	const render_MainOptions = () => {
		return Object.values(mainOptions).map( (e,key) => {
			return <MenuItem key={key} item={e} />
		})
	}

	useEffect(() => {
		let mounted = true;

		getAppointments().then(	data => (mounted) ? dispatch(setAppointments(data)) : null)
		getPrescriptions().then(data => (mounted) ? dispatch(setPrescriptions(data)) : null)

		return () => mounted = false;
	})

	return (
		<div className={'flex flex-col items-start justify-start py-4 gap-6'}>

			<h1> {'Welcome, ' + currUser[0].name.split(' ')[0] } </h1>

			<div className={'flex flex-row gap-4'}>
				{render_MainOptions()}
			</div>

		</div>
	)
};

export default Main