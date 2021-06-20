/* Packages */
import React from 'react';

/* Components */
import { Header, Background, LoginForm } from '../components';

export default function Login() {
	/* Render */
	return (
		<>
			<Header />
			<main className="main-content">
				<Background />
				<div className="pane">
					<div className="pane__panel panel panel--login">
						<div className="panel__body">
							<h1 className="text-uppercase text-white mb-0">Login</h1>
							<p className="text-muted--70 text-white mb-6">Login with your e-mail and password</p>
							<LoginForm />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
