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

export default function BrowsePeopleAndPets() {
	const peopleAndPets = useLoaderData();

	return (
		<div>
			<h1>People & Pets</h1>

			<ol>
				{peopleAndPets.map((personOrPet) => (
					<li key={personOrPet.id}>{personOrPet.name}</li>
				))}
			</ol>
		</div>
	);
}
