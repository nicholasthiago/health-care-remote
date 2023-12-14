
"use client"
import 'app/globals.css'
import Link from 'next/link';

// Page : Home
export default function AddAppointments() {

    
	return (
		<div className="flex flex-col items-center justify-center p-24">
		<form className="w-full max-w-md">
		  <h1 className="text-xl font-bold mb-8">Enter Your Details</h1>
	  
		  <div className="mb-4 font-bold">
			<label className="block mb-2">Patient Name:</label>
			<input
			  className="border border-slate-500 px-4 py-2 rounded-xl w-full"
			  type="text"
			  
			/>
		  </div>
	  
		  <div className="mb-4 font-bold">
			<label className="block mb-2">Appointment Location:</label>
			<input
			  className="border border-slate-500 px-4 py-2 rounded-xl w-full"
			  type="text"
			  
			/>
		  </div>
	  
		  <div className="mb-4 font-bold">
			<label className="block mb-2">Appointment Time:</label>
			<input
			  className="border border-slate-500 px-4 py-2 rounded-xl w-full"
			  type="text"
			
			/>
		  </div>
	  
		  <div className="mb-4 font-bold">
			<label className="block mb-2">Appointment Date:</label>
			<input
			  className="border border-slate-500 px-4 py-2 rounded-xl w-full"
			  type="text"
			 
			/>
		  </div>
	  
		  <div className="mb-4 pt-4">
		<Link className="bg-hcblue rounded-lg font-bold text-white py-2 px-14" href={"/"}>Book</Link>
		  </div>
	  
		  
		</form>
	  </div>
	  
	);
};