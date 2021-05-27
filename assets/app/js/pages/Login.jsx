/* Packages */
import React, { useRef } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

/* Api */
import { login } from '../api';

/* Components */
import { Alert, Header, Background } from '../components';
import { Button } from '../elements';

/* Routes */
import { ROUTES } from '../routes';

/* Hooks */
import { usePageTitle } from '../hooks';

export default function Login({ setCurrentUser }) {
	/* Refs */
	const formRef = useRef();

	/* Hooks */
	usePageTitle('Login');
	const history = useHistory();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ reValidateMode: 'onChange', mode: 'onBlur' });

	/* Mutations */
	const loginMutation = useMutation(login, {
		onSuccess: (user) => {
			setCurrentUser(user);
			toast(<Alert message="Successfully logged in!" appearance="success" />);
			history.push(ROUTES.projects);
		},
		onError: (error) => {
			toast(
				<Alert
					message={
						error?.response?.data?.error ? 'Email/password combination not found!' : 'Something went wrong!'
					}
					appearance="error"
				/>
			);

			errors.email = { message: 'Email/password combination not found' };
			errors.password = { message: 'Email/password combination not found' };
		},
	});

	const onSubmit = () => loginMutation.mutate({ formRef });

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
							<form
								ref={formRef}
								className="panel__form form"
								onSubmit={handleSubmit(onSubmit)}
								noValidate>
								<div className="row gutters-2">
									<div className="col-12">
										<label className="sr-only" htmlFor="inputEmail">
											Email
										</label>
										<input
											type="email"
											className={`form-control ${errors.email && 'is-invalid'}`}
											id="inputEmail"
											name="email"
											placeholder="Email"
											autoFocus
											{...register('email', {
												required: true,
											})}
										/>
										{errors.email && (
											<div className="invalid-feedback">
												{errors.email?.message
													? errors.email.message
													: 'Please enter a valid email'}
											</div>
										)}
									</div>
									<div className="col-12">
										<label className="sr-only" htmlFor="inputPassword">
											Password
										</label>
										<input
											type="password"
											className={`form-control ${errors.password && 'is-invalid'}`}
											id="inputPassword"
											name="password"
											placeholder="Password"
											{...register('password', { required: true })}
										/>
										{errors.password && (
											<div className="invalid-feedback">
												{errors.password?.message
													? errors.password.message
													: 'Please enter a password'}
											</div>
										)}
									</div>
								</div>
								<div className="row gutters-2">
									<div className="col-12 col-md-6">
										<Button
											{...{
												title: 'Log in',
												theme: 'secondary',
												size: 'md',
												extensionClasses: 'btn-block justify-content-center',
												type: 'submit',
												isLoading: loginMutation.isLoading,
											}}
										/>
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
