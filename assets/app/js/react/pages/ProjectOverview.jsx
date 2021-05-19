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

export default function ProjectOverview() {
	/* State */
	const [newProjectId, setNewProjectId] = useState();

	/* Hooks */
	const { currentUser, userRole } = useContext(StaticContext);

	/* Constants */
	const userId = currentUser?.id ? currentUser.id : atob(location.search.replace('?', ''));

	/* Queries */
	const { isLoading, data: projects = [] } = useQuery(
		QUERY_KEYS.PROJECT_BY_USER,
		() => fetchProjectsByUser({ userId }),
		{
			enabled: !!userId,
		}
	);

	/* Render */
	return (
		<PageLoader {...{ isLoading }}>
			{userRole === 'admin' && <ProjectAdd {...{ setNewProjectId }} />}
			<ProjectResults {...{ projects, newProjectId }} />
		</PageLoader>
	);
}
