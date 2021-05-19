/* Packages */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from 'react-query';

/* Components */
import routes from './routes';
import { PageLoader } from './common';

/* Context */
import StaticContext from './context';

/* Api */
import { fetchCurrentUser, QUERY_KEYS } from './api';

/* Helpers */
import { getRole } from './helpers';

export default function App() {
	/* State */
	const [currentUser, setCurrentUser] = useState([]);
	const [userRole, setUserRole] = useState([]);

	/* Constants */
	const userId = atob(location.search.replace('?', ''));

	/* Queries */
	const { isLoading } = useQuery(QUERY_KEYS.CURRENT_USER, () => fetchCurrentUser({ userId }), {
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
								<Component {...{ ...props }} />
							</Route>
						))}
					</PageLoader>
				</StaticContext.Provider>
			</Switch>
		</Router>
	);
}
