import 'app/globals.css'
import Navbar from 'components/navbar'
import User from 'components/user'
import ReduxProvider from 'lib/provider'


export default function Layout({ children }) {
	return (
		<ReduxProvider>
			<Navbar />
			<User />
			{children}
		</ReduxProvider>
	)
}