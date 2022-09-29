import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const body = await request.formData();
	// await logIn(body);
	return redirect('/');
}

export default function LogIn() {
	return (
		<div>
			<h1>Log In</h1>
			<form method="post" action="/login">
				<div>
					<label htmlFor="email">
						<div id="email-label">Email</div>
						<input aria-labelledby="email-label" id="email" name="email" type="text" />
					</label>
				</div>

				<div>
					<label htmlFor="password">
						<div id="password-label">Password</div>
						<input aria-labelledby="password-label" id="password" name="password" type="password" />
					</label>
				</div>

				<button type="submit">Log In</button>
			</form>
		</div>
	);
}
