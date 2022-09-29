import type { LoaderFunction, MetaFunction } from "@remix-run/node";
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

export const meta: MetaFunction = () => {
	return {
		title: 'Search Wreath',
	};
};

export default function Search() {
	const results = useLoaderData();

	return (
		<div>
			<h1>Search</h1>

			<form method="get" action="/search">
				<input aria-label="Search" id="search" name="search" type="search" />

				<button type="submit">Search</button>

				<details>
					<summary>Advanced Search</summary>

					<fieldset>
						<legend>Type</legend>

						<div><label><input name="type" type="checkbox" value="person" /><span>Person</span></label></div>
						<div><label><input name="type" type="checkbox" value="pet" /><span>Pet</span></label></div>
					</fieldset>
				</details>
			</form>

			<ol>
				{results.map((result) => (
					<li key={result.id}>{result.label}</li>
				))}
			</ol>
		</div>
	);
}
