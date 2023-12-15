// appointments.js

import clientPromise from "lib/mongodb";

export default async function handler(req, res) {

	const client = await clientPromise;
	const db = client.db("health-app");

	switch (req.method) {

		case "GET":
			const appointments = await db.collection("appointments").find({}).toArray();
			res.json({ status: 200, data: appointments });
			break;

		case "POST":
			let myPost = await db.collection("appointments").insertOne(req.body);
			res.json(myPost);
			break;
	}
}