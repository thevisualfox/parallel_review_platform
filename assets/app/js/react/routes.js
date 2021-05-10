/* Pages */
import { ProjectOverview, ProjectDetail, ProjectReview } from './pages';

const routes = [
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
