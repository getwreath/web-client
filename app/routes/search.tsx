import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
	return json([
		{ id: '1', label: 'First Item' },
		{ id: '2', label: 'Second Item' },
		{ id: '3', label: 'Third Item' },
		{ id: '4', label: 'Fourth Item' },
	]);
}

export default function Search() {
	const results = useLoaderData();

	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
			<h1>Search</h1>

			<input type="text" />

			<ol>
				{results.map((result) => (
					<li key={result.id}>{result.label}</li>
				))}
			</ol>
		</div>
	);
}
