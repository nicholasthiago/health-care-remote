
"use client"
import 'app/globals.css'
import Link from 'next/link';
import Loading from 'components/loading';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from 'lib/hooks';
import { appointmentFields, doctorNames, specialties } from 'lib/data/appointments';
import { newAppointment } from 'lib/features/appoinments';
import { getDate } from 'utils/utils';

// Page : Home
const NewAppointments = () => {

	const initialData = {
		"appointmentId": "",
		"doctor": "Dr. Smith",
		"specialty": "Cardiology",
		"date": getDate(),
		"time": getDate( true ),
		"location": "Virtual Consultation"
	}

	const router = useRouter()
	const dispatch = useAppDispatch()
	const [item, setItem] = useState( initialData )

	const isAuth = useAppSelector((state) => state.authReducer.isAuth)
	const currUser = useAppSelector((state) => state.authReducer.currUser) || []

	useEffect(() => {
		if (!isAuth) { router.push('/') }

	}, [isAuth]) // eslint-disable-line react-hooks/exhaustive-deps

	const handle_Input = (label, value) => {
		let newItem = {
			...item,
			[label]: value
		}

		setItem(newItem)
	}

	const handle_Submit = () => {

		if ( Object.keys(item).length < 5 ) {
			alert('Some fields are missing')
		} else {
			dispatch(newAppointment([currUser[0]?.healthNumber, item]))
			router.push('/appointment-list')
		}
	}


	const render_Field = (label, type, key) => {
		const s = {
			wrapper: 'flex flex-row capitalize justify-between',
			label: 'w-1/3 px-4 py-0 my-1 rounded-sm w-1/4',
			input: 'w-2/3 px-4 py-2 my-1 rounded-sm shadow-sm',
		}

		switch (type) {

			case 'select': let data = (label === "doctor") ? doctorNames : specialties
				return (
					<span className={s.wrapper} key={key}>
						<label className={s.label + ' w-'}> {label + ':'} </label>
						<select className={s.input} id={label} name={label}
							placeholder={label}
							onInput={e => handle_Input(label, e.target.value)}
						> {Object.values(data).map((e, i) => <option key={i} value={e}> {e} </option>)}
						</select>
					</span>
				)

			default: return (
				<span className={s.wrapper} key={key}>
					<label className={s.label}> {label + ':'} </label>
					<input className={s.input} id={label} name={label} type={type}
						placeholder={label}
						onInput={e => handle_Input(label, e.target.value)}
					/>
				</span>
			)
		}
	}

	const render_Form = () => {
		return Object.entries(appointmentFields).map(([label, type], key) => {
			return render_Field(label, type, key)
		})
	}


	if (!isAuth) {
		return <Loading />
	} else {

		const btnStyle = 'bg-hcblue rounded-sm font-bold text-white mt-8 py-3 px-14 text-center'

		return (
			<div className="flex flex-col items-center justify-center p-24">
				<h1 className="text-xl font-bold mb-8">Enter Your Details</h1>

				<div className={'flex flex-col gap-4 w-3/5'}>
					{render_Form()}
				</div>

				<button className={btnStyle} onMouseDown={() => handle_Submit()}
				//href={"/appointment-list"}
				>{'Book Appointment'}</button>


			</div>

		)
	}
}

export default NewAppointments