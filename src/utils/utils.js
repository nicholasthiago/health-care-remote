import Login from 'components/login';
import { users } from 'lib/data/data'

export function verifyLogIn ( userInput ) {

	const [ user, pswd ] = userInput;

	let response = Object.values(users).filter(e => e.healthNumber === user && e.password === pswd);

	console.log( 'response: ', response )

	if (response.length > 0) {
		return true

	} else {
		return false
	}
}

export function verifyAuth ( isAuth ) {
	if ( !isAuth ) {
		return <Login />
	} else {
		return true
	}
}