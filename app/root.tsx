import type { MetaFunction } from "@remix-run/node";
import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Wreath",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<nav>
					<Link to="/">Wreath</Link>
				</nav>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
