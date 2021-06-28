/* Packages */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';

/* Components */
import { HeaderNavigation, PageLoader } from './components';

/* Services */
import { getRole } from './services';

/* Animations */
import { FADE_IN } from './animations';

/* Context */
import StaticContext from './context/mainContext';

/* Api */
import { fetchCurrentUser, QUERY_KEYS } from './api';

/* Routes */
import routes, { ROUTES } from './routes';

/* Hooks */
import { useStorage } from './hooks';

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

	/* Hooks */
	const [userId] = useStorage('userId', atob(window.location.search.replace('?', '')));
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
				{![ROUTES.login, ROUTES.signup].includes(location.pathname) && !location.pathname.includes('review') && <HeaderNavigation />}
			</AnimatePresence>
			<PageLoader {...{ isLoading }}>
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						{/* Redirect to /projects if a user is logged in */}
						{currentUser && [ROUTES.login, ROUTES.signup].includes(location.pathname) && (
							<Redirect to={ROUTES.projects} />
						)}

						{/* Redirect to /login if a user is not logged in on the /projects route */}
						{!currentUser && location.pathname.includes(ROUTES.projects) && <Redirect to={ROUTES.login} />}

						{/* Render routes */}
						{routes.map(({ path, component: Component, props }) => (
							<Route key={path} path={path} exact>
								<motion.div key={path} {...FADE_IN}>
									<Component {...{ ...props, currentUser, userRole }} />
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
