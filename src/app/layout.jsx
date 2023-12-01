import Navbar from 'components/navbar'
import './globals.css'

export const metadata = {
	title: 'Health Care Remote',
	description: 'CPRG 306 - Final Project',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
