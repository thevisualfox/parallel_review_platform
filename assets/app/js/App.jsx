/* Packages */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';

/* Components */
import { PageLoader } from './common';
import { HeaderNavigation } from './components';

/* Routes */
import routes, { ROUTES } from './routes';

/* Context */
import StaticContext from './context';

/* Api */
import { fetchCurrentUser, QUERY_KEYS } from './api';

/* Helpers */
import { getRole } from './helpers';

/* Animations */
import { FADE_IN } from './common/animations';

export default function App() {
	/* Render */
	return (
		<Router>
			<RouterBody />
		</Router>
	);
}

const RouterBody = () => {
	/* State */
	const [currentUser, setCurrentUser] = useState();
	const [userRole, setUserRole] = useState([]);

	/* Constants */
	const userId = atob(window.location.search.replace('?', ''));

	/* Hooks */
	const location = useLocation();

	/* Queries */
	const { isLoading } = useQuery(QUERY_KEYS.CURRENT_USER, () => fetchCurrentUser({ userId }), {
		retry: false,
		onSuccess: (user) => {
			setCurrentUser(user);
			setUserRole(getRole(user));
		},
	});

	/* Render */
	return (
		<StaticContext.Provider value={{ currentUser, setCurrentUser, userRole }}>
			<AnimatePresence>
				{/* Show different headers based on route */}
				{![ROUTES.login, ROUTES.signup].includes(location.pathname) && <HeaderNavigation />}
			</AnimatePresence>
			<PageLoader {...{ isLoading }}>
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						{/* Redirect to /projects if a user is logged in */}
						{currentUser && location.pathname === ROUTES.login && <Redirect to={ROUTES.projects} />}

						{/* Redirect to /login if a user is not logged in on the /projects route */}
						{!currentUser && location.pathname === ROUTES.projects && <Redirect to={ROUTES.login} />}

						{/* Render routes */}
						{routes.map(({ path, component: Component, props }) => (
							<Route key={path} path={path} exact>
								<motion.div key={path} {...FADE_IN}>
									<Component {...{ ...props, currentUser, setCurrentUser, userRole, setUserRole }} />
								</motion.div>
							</Route>
						))}
					</Switch>
				</AnimatePresence>
			</PageLoader>

			{/* Toast */}
			<ToastContainer
				{...{
					hideProgressBar: true,
					newestOnTop: true,
					position: 'bottom-left',
					closeButton: false,
				}}
			/>
		</StaticContext.Provider>
	);
};
