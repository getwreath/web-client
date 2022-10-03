import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const body = await request.formData();
	// await logIn(body);
	return redirect('/');
}

export const meta: MetaFunction = () => {
	return {
		title: 'New Person',
	};
};

export default function AddPerson() {
	return (
		<div>
			<h1>New Person</h1>

			<form method="post" action="/person">
				<div>
					<label htmlFor="given-name">
						<div id="given-name-label">Given Name</div>
						<input aria-labelledby="given-name-label" id="given-name" name="given-name" type="text" />
					</label>
				</div>

				<div>
					<label htmlFor="middle-name">
						<div id="middle-name-label">Middle Name</div>
						<input aria-labelledby="middle-name-label" id="middle-name" name="middle-name" type="text" />
					</label>
				</div>

				<div>
					<label htmlFor="family-name">
						<div id="family-name-label">Family Name</div>
						<input aria-labelledby="family-name-label" id="family-name" name="family-name" type="text" />
					</label>
				</div>


				<button type="submit">Save Person</button>
			</form>
		</div>
	);
}
