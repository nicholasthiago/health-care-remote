export async function getUsers() {
	return await fetch('/api/users')
	.then( data => data.json())
}

export async function getAppointments() {
	return await fetch('/api/users')
	.then( data => data.json())
}

export async function getPrescriptions() {
	return await fetch('/api/users')
	.then( data => data.json())
}