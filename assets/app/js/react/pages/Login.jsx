/* Packages */
import React, { useRef } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

/* Api */
import { login } from '../api';

/* Components */
import { Alert, Header, Background } from '../components';

/* Routes */
import { ROUTES } from '../routes';

export default function Login({ setCurrentUser, setMessages }) {
	/* Refs */
	const formRef = useRef();

	/* Hooks */
	const history = useHistory();

	/* Mutations */
	const loginMutation = useMutation(login, {
		onSuccess: (user) => {
			setCurrentUser(user);
			history.push(ROUTES.projects);
		},
		onError: (error) => {
			if (error?.response?.data?.error) {
				toast(<Alert message={error.response.data.error} appearance="error" />);
			}
		},
	});

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
							<p className="text-muted--70 text-white">Login with your e-mail and password</p>
							<form
								ref={formRef}
								className="panel__form form mt-6"
								onSubmit={(event) => {
									event.preventDefault();
									loginMutation.mutate({ formRef });
								}}>
								<div className="row gutters-2">
									<div className="col-12">
										<label className="sr-only" htmlFor="inputEmail">
											Email
										</label>
										<input
											type="email"
											className="form-control"
											id="inputEmail"
											name="email"
											placeholder="Email"
											autoFocus
											required
										/>
									</div>
									<div className="col-12">
										<label className="sr-only" htmlFor="inputPassword">
											Password
										</label>
										<input
											type="password"
											className="form-control"
											id="inputPassword"
											name="password"
											placeholder="Password"
											required
										/>
									</div>
								</div>
								<div className="row gutters-2">
									<div className="col-12 col-md-6">
										<button type="submit" className="btn btn-secondary btn-block">
											<span className="btn__text">Log in</span>
										</button>
									</div>
									<div className="col-12 col-md-6">
										<Link
											className="btn btn-outline-white btn-block"
											to={ROUTES.signup}
											title="sign up">
											<span className="btn__text">Sign up</span>
										</Link>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
