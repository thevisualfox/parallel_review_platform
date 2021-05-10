/* Packages */
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';

/* Components */
import { ProjectResults, ProjectAdd } from '../components/project-overview';
import { PageLoader } from '../common';

/* Context */
import StaticContext from '../context';

/* Api */
import { fetchProjectsByUser, QUERY_KEYS } from '../api';

export default function ProjectOverview({ currentUserLoading }) {
	/* State */
	const [newProjectId, setNewProjectId] = useState();

	/* Hooks */
	const { currentUser, userRole } = useContext(StaticContext);

	/* Constants */
	const userId = currentUser?.id ? currentUser.id : atob(location.search.replace('?', ''));

	/* Queries */
	const { isLoading: projectsLoading, data = {} } = useQuery(
		QUERY_KEYS.PROJECT_BY_USER,
		() => fetchProjectsByUser({ userId }),
		{
			enabled: !!userId,
		}
	);

	/* Constants  */
	const { projects = [] } = data;
	const isLoading = currentUserLoading || projectsLoading;

	/* Render */
	return (
		<PageLoader {...{ isLoading }}>
			{userRole === 'admin' && <ProjectAdd {...{ setNewProjectId }} />}
			<ProjectResults {...{ projects, newProjectId }} />
		</PageLoader>
	);
}
