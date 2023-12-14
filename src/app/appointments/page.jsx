"use client"
import 'app/globals.css'
import Link from 'next/link';

// Page : Home
const Appointments = () => {

	return (
		<div className="flex  flex-col items-center justify-between p-24">
			<h1 className='font-bold text-2xl  pb-8'> Appointments </h1>

			<div className="flex">
  <div className='flex mb-4 pt-4 pr-8'>
    <Link className="bg-hcblue rounded-lg font-bold text-white py-2 px-9" href={"/addAppointment"}>Book Appointment</Link>
  </div>

  <div className='flex mb-4 pt-4 pr-8'>
    <Link className="bg-hcblue rounded-lg font-bold text-white py-2 px-6" href={"/appointmentList"}>Previous Appointments</Link>
  </div>
</div>


		</div>
	)
};

export default Appointments