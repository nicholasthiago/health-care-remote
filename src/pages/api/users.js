// users.js

import clientPromise from "lib/mongodb";

export default async function handler(req, res) {

	const client = await clientPromise;
	const db = client.db("health-app");

	switch (req.method) {

		case "GET":
			const users = await db.collection("users").find({}).toArray();
			res.json({ status: 200, data: users });
			break;
	}
}