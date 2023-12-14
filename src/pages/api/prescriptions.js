// prescriptions.js

import clientPromise from "lib/mongodb";

export default async function handler(req, res) {

	const client = await clientPromise;
	const db = client.db("health-app");

	switch (req.method) {

		case "GET":
			const prescriptions = await db.collection("prescriptions").find({}).toArray();
			res.json({ status: 200, data: prescriptions });
			break;
	}
}