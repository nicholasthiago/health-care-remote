/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		MONGODB_URI: 'mongodb+srv://healthuser:healthy@health-app.pu46ok3.mongodb.net/?retryWrites=true&w=majority',
	},
}

module.exports = nextConfig