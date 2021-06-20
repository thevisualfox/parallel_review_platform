/* Packages */
import React, { useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

/* Components */
import { Alert, Button } from '..';

/* Api */
import { login, QUERY_KEYS } from '../../api';

/* Hooks */
import { usePageTitle } from '../../hooks';

/* Routes */
import { ROUTES } from '../../routes';

export default function LoginForm({ currentUser, toggleModal, showSignup = true }) {
	/* Refs */
	const formRef = useRef();

	/* Hooks */
	usePageTitle('Login');
	const queryClient = useQueryClient();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ reValidateMode: 'onChange', mode: 'onBlur' });

	/* Mutations */
	const loginMutation = useMutation(login, {
		onSuccess: (user) => {
			queryClient.invalidateQueries(QUERY_KEYS.CURRENT_USER);

			if (currentUser) toggleModal();

			toast(<Alert message="Successfully logged in!" appearance="success" />);
		},
		onError: (error) => {
			toast(
				<Alert
					message={
						error?.response?.data?.error ? 'Email/password combination not found!' : 'Something went wrong!'
					}
					appearance="danger"
				/>
			);

			errors.email = { message: 'Email/password combination not found' };
			errors.password = { message: 'Email/password combination not found' };
		},
	});

	const onSubmit = () => loginMutation.mutate({ formRef });

	return (
		<form ref={formRef} className="panel__form form" onSubmit={handleSubmit(onSubmit)} noValidate>
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
							{errors.email?.message ? errors.email.message : 'Please enter a valid email'}
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
							{errors.password?.message ? errors.password.message : 'Please enter a password'}
						</div>
					)}
				</div>
			</div>
			<div className="row gutters-2">
				<div className="col-12 col-md">
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
				{showSignup && (
					<div className="col-12 col-md">
						<Link className="btn btn-outline-white btn-block" to={ROUTES.signup} title="sign up">
							<span className="btn__text">Sign up</span>
						</Link>
					</div>
				)}
			</div>
		</form>
	);
}
