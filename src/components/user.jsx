"use client"
import { useAppSelector } from 'lib/hooks'


// User Component
const User = () => {

	const isAuth = useAppSelector((state) => state.authReducer.isAuth )
	const currUser = useAppSelector((state) => state.authReducer.currUser )

	return (
		( isAuth ) ?
		<span className={'bg-hcgren flex flex-row text-slate-50 font-semibold gap-8 py-1 px-4'}>
			<h4> { 'HN: ' + currUser[0].healthNumber } </h4>
			<h4> { 'user: ' + currUser[0].name } </h4>
			<h4> { 'email: ' + currUser[0].email } </h4>
		</span> : null
	)
}
export default User