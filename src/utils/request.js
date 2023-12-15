export async function getUsers() {
	return await fetch('/api/users')
		.then(data => data.json())
}

export async function getAppointments() {
	return await fetch('/api/appointments')
		.then(data => data.json())
}

export async function getPrescriptions() {
	return await fetch('/api/prescriptions')
		.then(data => data.json())
}

export async function addUser(user) {

	return await fetch('/api/users', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user),
	});
};

export async function addAppointment(appointment) {

	return await fetch('/api/appointments', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(appointment),
	});
};