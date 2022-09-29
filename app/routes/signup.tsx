import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
	const url = new URL(request.url);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const code = url.searchParams.get('code');

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const body = await request.formData();
	// await signUp(body);
	return redirect('/');
}

export const meta: MetaFunction = () => {
	return {
		title: 'Sign Up for Wreath',
	};
};

export default function SignUp() {
	return (
		<div>
			<h1>Sign Up</h1>

			<form method="post" action="/signup">
				<div>
					<label htmlFor="signup-code">
						<div id="signup-code-label">Sign Up Code</div>
						<input aria-labelledby="signup-code-label" id="signup-code" name="signup-code" type="text" />
					</label>
				</div>

				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
}
