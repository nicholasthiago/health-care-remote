import { filterList } from "utils/utils";
import { createSlice } from "@reduxjs/toolkit";
import prescriptionList from "lib/data/prescriptions";

const initialState = {
	prescriptionList: prescriptionList,
	userPrescription: []
}

export const prescription = createSlice({
	name: "prescriptions",
	initialState,
	reducers: {
		setPrescriptions: (state, action) => { return { ...state, prescriptionList: action.payload } },
		getList: (state, action) => {
			const list = filterList( action.payload, prescriptionList )

			return { ...state, userPrescription: list }
		},
	},
})

export const { getList, setPrescriptions } = prescription.actions
export default prescription.reducer