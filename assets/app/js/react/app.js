/* Packages */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

/* Components */
import routes from './routes';

/* Client */
const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

/* Render */
const appNode = document.getElementById('app');
if (appNode !== null) {
	render(
		<QueryClientProvider {...{ client }}>
			<Router>
				<Switch>
					{routes.map(({ path, page: Page, props }) => (
						<Route key={path} path={path}>
							<Page {...props} />
						</Route>
					))}
				</Switch>
			</Router>
		</QueryClientProvider>,
		appNode
	);
}
