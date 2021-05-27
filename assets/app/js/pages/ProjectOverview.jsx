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

/* Hooks */
import { usePageTitle } from '../hooks';

/* Hocs */
import PageWrapper from '../hocs/PageWrapper';

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
