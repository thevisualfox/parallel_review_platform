/* Packages */
import React from 'react';

/* Components */
import { Header, Background, SignupForm } from '../components';

export default function Signup() {
	/* Render */
	return (
		<>
			<Header />
			<main className="main-content">
				<Background />
				<div className="pane">
					<div className="pane__panel panel panel--login">
						<div className="panel__body">
							<h1 className="text-uppercase text-white mb-0">Sign up</h1>
							<p className="text-muted--70 text-white mb-6">Sign up with your e-mail and password</p>
							<SignupForm />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
