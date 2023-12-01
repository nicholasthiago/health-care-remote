import 'app/globals.css'
import Navbar from 'components/navbar'

const MyApp = (props) => {
	const { Component, pageProps, children } = props;

	return (
		<section>
			<Navbar />
			{children}
			<Component {...pageProps} />
		</section>
	);

}
export default MyApp