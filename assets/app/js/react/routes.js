/* Pages */
import { ProjectOverview, ProjectDetail } from './pages';

const routes = [
	{
		name: 'project-overview',
		path: '/projects',
		page: ProjectOverview,
	},
	{
		name: 'project-detail',
		path: '/projects/:id',
		page: ProjectDetail,
	},
];

export default routes;
