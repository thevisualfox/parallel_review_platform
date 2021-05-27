/* Packages */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';

/* Components */
import { PageLoader } from './common';

/* Routes */
import routes from './routes';

/* Context */
import StaticContext from './context';

/* Api */
import { fetchCurrentUser, QUERY_KEYS } from './api';

/* Helpers */
import { getRole } from './helpers';

export default function App() {
	/* State */
	const [currentUser, setCurrentUser] = useState();
	const [userRole, setUserRole] = useState([]);

	/* Constants */
	const userId = atob(location.search.replace('?', ''));

	/* Queries */
	const { isLoading } = useQuery(QUERY_KEYS.CURRENT_USER, () => fetchCurrentUser({ userId }), {
		enabled: !['/', '/signup'].includes(location.pathname),
		onSuccess: (user) => {
			setCurrentUser(user);
			setUserRole(getRole(user));
		},
	});

	/* Render */
	return (
		<Router>
			<Switch>
				<StaticContext.Provider value={{ currentUser, userRole }}>
					<PageLoader {...{ isLoading }}>
						{routes.map(({ path, component: Component, props }) => (
							<Route key={path} path={path} exact>
								<Component {...{ ...props, currentUser, setCurrentUser }} />
							</Route>
						))}
					</PageLoader>
					<ToastContainer
						{...{ hideProgressBar: true, newestOnTop: true, position: 'bottom-left', closeButton: false }}
					/>
				</StaticContext.Provider>
			</Switch>
		</Router>
	);
}
