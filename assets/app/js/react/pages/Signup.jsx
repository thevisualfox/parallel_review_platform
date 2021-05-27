/* Packages */
import React, { useRef } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm, useWatch } from 'react-hook-form';

/* Api */
import { signup } from '../api';

/* Components */
import { Button } from '../elements';
import { Header, Background, Alert } from '../components';

/* Routes */
import { ROUTES } from '../routes';

/* Hooks */
import { usePageTitle } from '../hooks';

export default function Signup({ setCurrentUser }) {
	/* Refs */
	const formRef = useRef();

	/* Hooks */
	usePageTitle('Signup');
	const history = useHistory();

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({ reValidateMode: 'onChange', mode: 'onBlur' });

	const plainPassword = useWatch({
		control,
		name: 'plainPassword',
		defaultValue: '',
	});

	/* Mutations */
	const signupMutation = useMutation(signup, {
		onSuccess: (user) => {
			setCurrentUser(user);
			toast(<Alert message="Successfully logged in!" appearance="success" />);
			history.push(ROUTES.projects);
		},
		onError: (error) => {
			if (error.response.status === 500) {
				toast(<Alert message="This email is already in use!" appearance="error" />);

				formRef.current.reset();
			}
		},
	});

	const onSubmit = () => signupMutation.mutate({ formRef });

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
								onSubmit={handleSubmit(onSubmit)}
								noValidate>
								<div className="row gutters-2">
									<div className="col-12">
										<label className="sr-only" htmlFor="registration_form_username">
											Your name
										</label>
										<input
											type="text"
											id="registration_form_username"
											name="username"
											className={`form-control ${errors.username && 'is-invalid'}`}
											placeholder="Full name"
											{...register('username', {
												required: {
													value: true,
													message: 'Please enter a name',
												},
											})}
										/>
										{errors.username && (
											<div className="invalid-feedback">{errors.username.message}</div>
										)}
									</div>
									<div className="col-12">
										<label className="sr-only" htmlFor="registration_form_email">
											Email
										</label>
										<input
											type="text"
											id="registration_form_email"
											name="email"
											className={`form-control ${errors.email && 'is-invalid'}`}
											placeholder="Email"
											{...register('email', {
												required: {
													value: true,
													message: 'Please enter an email',
												},
											})}
										/>
										{errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
									</div>
									<div className="col-md-6">
										<label className="sr-only" htmlFor="registration_form_plainPassword">
											Password
										</label>
										<input
											type="password"
											id="registration_form_plainPassword"
											name="plainPassword"
											className={`form-control ${errors.password && 'is-invalid'}`}
											placeholder="Password"
											{...register('plainPassword', {
												required: {
													value: true,
													message: 'Please enter a password',
												},
												minLength: {
													value: 6,
													message: 'Please enter a password of atleast 6 characters',
												},
											})}
										/>
										{errors.plainPassword && (
											<div className="invalid-feedback">{errors.plainPassword.message}</div>
										)}
									</div>
									<div className="col-md-6">
										<label className="sr-only" htmlFor="login-confirm-password">
											Confirm password
										</label>
										<input
											type="password"
											className={`form-control ${errors.passwordConfirm && 'is-invalid'}`}
											id="login-confirm-password"
											placeholder="Confirm password"
											name="passwordConfirm"
											{...register('passwordConfirm', {
												required: {
													value: true,
													message: 'Please confirm your password',
												},
												validate: (value) =>
													value === plainPassword || 'The passwords do not match',
											})}
										/>
										{errors.passwordConfirm && (
											<div className="invalid-feedback">{errors.passwordConfirm.message}</div>
										)}
									</div>
								</div>
								<div className="row gutters-2">
									<div className="col-12 col-md-6">
										<Button
											{...{
												title: 'Sign up',
												theme: 'secondary',
												size: 'md',
												extensionClasses: 'btn-block justify-content-center',
												type: 'submit',
												isLoading: signupMutation.isLoading,
											}}
										/>
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
