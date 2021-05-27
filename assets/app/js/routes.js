/* Pages */
import { ProjectOverview, ProjectDetail, ProjectReview, Login, Signup } from './pages';

export const ROUTES = {
	login: '/',
	signup: '/signup',
	projects: '/projects',
};

const routes = [
	{
		name: 'login',
		path: '/',
		component: Login,
	},
	{
		name: 'signup',
		path: '/signup',
		component: Signup,
	},
	{
		name: 'project-overview',
		path: '/projects',
		component: ProjectOverview,
	},
	{
		name: 'project-detail',
		path: '/projects/:id',
		component: ProjectDetail,
	},
	{
		name: 'project-review',
		path: '/projects/:id/review/:id',
		component: ProjectReview,
	},
];

export default routes;
