"use client"

import { mainOptions } from "lib/data/data";
import MenuItem from "./menu-item";
import { useAppSelector } from "lib/hooks";

// Page : Main
const Main = () => {

	const currUser = useAppSelector((state) => state.authReducer.currUser )

	const render_MainOptions = () => {
		return Object.values(mainOptions).map( (e,key) => {
			return <MenuItem key={key} item={e} />
		})
	}

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