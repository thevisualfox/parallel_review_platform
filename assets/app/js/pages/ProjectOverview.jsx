/* Packages */
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';

/* Components */
import { PageLoader, PageWrapper } from '../components';

/* Domain */
import { ProjectResults, ProjectAdd } from '../domain/project-overview';

/* Context */
import StaticContext from '../context/mainContext';

/* Api */
import { fetchProjectsByUser, QUERY_KEYS } from '../api';

/* Hooks */
import { usePageTitle } from '../hooks';

export default function ProjectOverview() {
	/* State */
	const [newProjectId, setNewProjectId] = useState();

	/* Hooks */
	usePageTitle('Projects');
	const { currentUser, userRole } = useContext(StaticContext);

	/* Queries */
	const { isLoading, data: projects = [] } = useQuery(
		QUERY_KEYS.PROJECT_BY_USER,
		() => fetchProjectsByUser({ userId: currentUser?.id }),
		{
			enabled: !!currentUser?.id,
		}
	);

	/* Render */
	return (
		<PageWrapper>
			<PageLoader {...{ isLoading }}>
				{userRole === 'admin' && <ProjectAdd {...{ setNewProjectId }} />}
				<ProjectResults {...{ projects, newProjectId }} />
			</PageLoader>
		</PageWrapper>
	);
}
