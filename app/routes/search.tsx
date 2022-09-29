import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
	return json([
		{ id: '1', name: 'First Person' },
		{ id: '2', name: 'Second Person' },
		{ id: '3', name: 'Third Person' },
		{ id: '4', name: 'Fourth Person' },
	]);
}

export default function Search() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
			<h1>Search</h1>

			<input type="text" />
		</div>
	);
}
