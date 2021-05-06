/* Packages */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from 'react-query';

/* Components */
import routes from './routes';

/* Context */
import StaticContext from './context';

/* Api calls */
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
	const { isLoading: currentUserLoading } = useQuery(QUERY_KEYS.CURRENT_USER, () => fetchCurrentUser({ userId }), {
		onSuccess: ({ user }) => {
			setCurrentUser(user);
			setUserRole(getRole(user));
		},
	});

	/* Render */
	return (
		<Router>
			<Switch>
				<StaticContext.Provider value={{ currentUser, userRole }}>
					{routes.map(({ path, page: Page, props }) => (
						<Route key={path} path={path} exact>
							<Page {...{ ...props, currentUserLoading }} />
						</Route>
					))}
				</StaticContext.Provider>
			</Switch>
		</Router>
	);
}
