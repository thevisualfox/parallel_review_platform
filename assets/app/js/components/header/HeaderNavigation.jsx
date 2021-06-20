/* Packages */
import React, { useContext } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* Components */
import { Alert } from '../../components';

/* Animations */
import { FADE_IN } from '../../animations';

/* Context */
import StaticContext from '../../context/mainContext';

/* Api */
import { logout } from '../../api/security';

/* Routes */
import { ROUTES } from '../../routes';

export default function HeaderNavigation() {
	/* Hooks */
	const history = useHistory();
	const { setCurrentUser } = useContext(StaticContext);

	/* Mutations */
	const logoutMutation = useMutation(logout, {
		onSuccess: () => {
			history.push(ROUTES.login);
			setCurrentUser(null);
			sessionStorage.removeItem('userId');

			toast(<Alert message={'Successfully logged out!'} appearance="success" />);
		},
		onError: () => toast(<Alert message={'Something went wrong!'} appearance="danger" />),
	});

	/* Render */
	return (
		<motion.header className="main-header main-header--projects" {...FADE_IN}>
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
		</motion.header>
	);
}
