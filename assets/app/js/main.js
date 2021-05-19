// CSS
import '../scss/main.scss';

// Pollyfils
import 'regenerator-runtime/runtime';

// Core
import './validation';
import './alert';

// Plugins
import './objectfit';

/* Packages */
import React from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

/* Components */
import App from './react/App';

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
			<App />
		</QueryClientProvider>,
		appNode
	);
}
