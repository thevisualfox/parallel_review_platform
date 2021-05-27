/* Packages */
import React, { useRef } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

/* Api */
import { signup } from '../api';

/* Components */
import { Header, Background } from '../components';

/* Routes */
import { ROUTES } from '../routes';

export default function Signup({ setCurrentUser }) {
	/* Refs */
	const formRef = useRef();

	/* Hooks */
	const history = useHistory();

	/* Mutations */
	const signupMutation = useMutation(signup, {
		onSuccess: (user) => {
			setCurrentUser(user);
			history.push(ROUTES.projects);
		},
		onError: (error) => console.log(error.response.data.error) /* TODO: add error signup */,
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
							<h1 className="text-uppercase text-white mb-0">Sign up</h1>
							<p className="text-muted--70 text-white mb-6">Sign up with your e-mail and password</p>
							<form
								ref={formRef}
								className="panel__form form mt-6"
								onSubmit={(event) => {
									event.preventDefault();
									signupMutation.mutate({ formRef });
								}}>
								<div className="row gutters-2">
									<div className="col-12">
										<label className="sr-only" htmlFor="registration_form_username">
											Your name
										</label>

										<input
											type="text"
											id="registration_form_username"
											name="registration_form[username]"
											required="required"
											maxLength="255"
											className="form-control"
											placeholder="Full name"
										/>
									</div>
									<div className="col-12">
										<label className="sr-only" htmlFor="registration_form_email">
											Email
										</label>

										<input
											type="text"
											id="registration_form_email"
											name="registration_form[email]"
											required="required"
											maxLength="180"
											className="form-control"
											placeholder="Email"
										/>
									</div>
									<div className="col-md-6">
										<label className="sr-only" htmlFor="registration_form_plainPassword">
											Email
										</label>

										<input
											type="password"
											id="registration_form_plainPassword"
											name="registration_form[plainPassword]"
											required="required"
											className="form-control"
											placeholder="Password"
											data-parsley-equalto="#login-confirm-password"
										/>
									</div>
									<div className="col-md-6">
										<label className="sr-only" htmlFor="login-confirm-password">
											Confirm password
										</label>
										<input
											type="password"
											className="form-control"
											id="login-confirm-password"
											placeholder="Confirm password"
											data-parsley-equalto="#registration_form_plainPassword"
											required=""
										/>
									</div>
								</div>
								<div className="row gutters-2">
									<div className="col-12 col-md-6">
										<button type="submit" className="btn btn-secondary btn-block">
											<span className="btn__text">Sign up</span>
										</button>
									</div>
									<div className="col-12 col-md-6">
										<Link
											className="btn btn-outline-white btn-block"
											to={ROUTES.login}
											title="sign up">
											<span className="btn__text">Login</span>
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
