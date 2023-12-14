import { countItems, filterList } from "utils/utils";
import { createSlice } from "@reduxjs/toolkit";
import appointmentList from "lib/data/appointments";

const initialState = {
	appointmentCount: countItems(appointmentList),
	appointmentList: appointmentList,
	userAppointment: []
}

export const appointment = createSlice({
	name: "appointments",
	initialState,
	reducers: {
		getList: (state, action) => {
			const list = filterList( action.payload, state.appointmentList )

			return { ...state, userAppointment: list }
		},
		newAppointment: (state,action) => {
			let [ hnumber, newItem ] = action.payload

			const appointmentId = `AD0${(countItems(state.appointmentList) + 1)}`
			const userList	= [...state.appointmentList[hnumber], {...newItem, appointmentId }]
			const newList	= {...state.appointmentList, [hnumber]: userList }

			return { ...state, appointmentList: newList, userAppointment: userList }
		},
	},
})

export const { getList, newAppointment } = appointment.actions
export default appointment.reducer