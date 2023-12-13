
import ReduxProvider from 'lib/provider'
import Navbar from 'components/navbar'
import User from 'components/user'

export const metadata = {
	title: 'Health Care Remote',
	description: 'CPRG 306 - Final Project',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={'flex flex-col'} >
				<ReduxProvider>
					<Navbar />
					<User />
					{children}
				</ReduxProvider>
			</body>
		</html>
	)
}
