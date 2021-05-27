/* Packages */
import React from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

/* Api */
import { logout } from '../../api/security';

/* Routes */
import { ROUTES } from '../../routes';

export default function HeaderNavigation() {
	/* Hooks */
	const history = useHistory();

	/* Mutations */
	const logoutMutation = useMutation(logout, {
		onSuccess: () => history.push(ROUTES.login),
		onError: (error) => console.log(error.response.data.error) /* TODO: add error logout */,
	});

	/* Render */
	return (
		<header className="main-header main-header--projects">
			<div className="container-fluid">
				<div className="main-header__wrapper d-flex align-items-end">
					<div className="main-header__logo logo">
						<Link className="logo__link text-reset" to={ROUTES.projects} title="Parallel Dashboard">
							<h2 className="logo__title text-uppercase text-white mb-0">Parallel</h2>
							<p className="logo__subtitle text-uppercase text-white font-weight-light mt-n1">
								Dashboard
							</p>
						</Link>
					</div>
					<div className="main-header__nav ml-auto">
						<ul className="nav nav--primary">
							<li className="nav-item">
								<button
									href="{{ path('app_logout') }}"
									title="Logout"
									className="nav-link btn btn-link text-reset"
									onClick={() => logoutMutation.mutate()}>
									<span className="nav-text">Logout</span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}
