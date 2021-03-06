/* Packages */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* Animations */
import { FADE_IN } from '../../animations';

/* Routes */
import { ROUTES } from '../../routes';

export default function Header() {
	/* Render */
	return (
		<motion.header className="main-header" {...FADE_IN}>
			<div className="container-fluid px-5 pt-5 px-lg-6 pt-lg-6 px-xl-12 pt-xl-12">
				<div className="main-header__logo logo">
					<Link className="logo__link text-reset" to={ROUTES.login} title="Parallel Dashboard">
						<h2 className="logo__title text-uppercase mb-0">Parallel</h2>
						<p className="logo__subtitle text-uppercase font-weight-light mt-n1">Dashboard</p>
					</Link>
				</div>
			</div>
		</motion.header>
	);
}
