import { countItems, filterList } from "utils/utils";
import { createSlice } from "@reduxjs/toolkit";
import appointmentList from "lib/data/appointments";
import { addAppointment } from "utils/request";

const initialState = {
	appointmentCount: countItems(appointmentList),
	appointmentList: appointmentList,
	userAppointment: []
}

export const appointment = createSlice({
	name: "appointments",
	initialState,
	reducers: {
		setAppointments: (state, action) => { return { ...state, appointmentList: action.payload.data[0] } },
		getList: (state, action) => {
			const list = filterList( action.payload, state.appointmentList )

			return { ...state, userAppointment: list }
		},
		newAppointment: (state,action) => {
			let [ hnumber, newItem ] = action.payload

			console.log( state.appointmentList )

			const appointmentId = `AP0${(countItems(state.appointmentList) + 1)}`
			const userList	= [...state.appointmentList[hnumber], {...newItem, appointmentId }]
			const newList	= {...state.appointmentList, [hnumber]: userList }

			// addAppointment(userList)
			return { ...state, appointmentList: newList, userAppointment: userList }
		},
	},
})

export const { getList, newAppointment, setAppointments } = appointment.actions
export default appointment.reducer