"use client"
import 'app/globals.css'
import Link from 'next/link'
import Loading from 'components/loading'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAppSelector } from 'lib/hooks'

// Page : Home
const Emergency = () => {
	
	const router = useRouter()
	const isAuth = useAppSelector((state) => state.authReducer.isAuth)

	useEffect(() => {
		if ( !isAuth ) { router.push('/') }

	}, [isAuth]) // eslint-disable-line react-hooks/exhaustive-deps


	if (!isAuth) {
		return <Loading />
	} else {
		return (
			<div className="flex min-h-fit flex-col items-center justify-between py-12 px-16">

				<h1 className={'font-bold text-2xl mb-4'}> {'Emergency Appointment'} </h1>

				<div className={'flex flex-col items-center'}>

					<span className={'flex flex-col gap-2 items-start'} >
						{'To ensure a smooth and effective consultation, we recommend the following:'}

						<p><strong> {'Be Prepared:'}				</strong></p> {"Have your health information, symptoms, and any relevant details ready before the call begins. This will help our doctors better understand your situation and provide accurate advice."}
						<p><strong> {'Wear Adequate Clothing:'}		</strong></p> {"Although it's a virtual consultation, being appropriately dressed helps create a professional and comfortable environment for both you and the doctor."}
						<p><strong> {'Choose a Quiet Location:'}	</strong></p> {"Find a quiet and private place where you can speak openly without disturbances. This ensures that you can discuss your health concerns with the doctor without any interruptions."}
						<p><strong> {'Check Your Tech:'}			</strong></p> {"Make sure your device (phone, tablet, or computer) is fully charged and has a stable internet connection. This ensures a seamless video or audio call experience."}
						<p><strong> {'Test Your Audio and Video:'}	</strong></p> {"Before the call, check that your microphone and camera are working correctly. This ensures that you can both speak and listen clearly during the consultation."}
					</span>

					<Link href={'/on-line'}
						className={'bg-hcgren text-slate-50 px-10 py-3 rounded-md font-semibold text-xl my-6'}
					> {'Get in the line'} </Link>

					<p className={''}> {'Remember, our goal is to provide you with convenient and accessible healthcare. If you have any questions or concerns, feel free to reach out to our support team.'}</p>
				</div>

			</div>
		)
	}
}

export default Emergency