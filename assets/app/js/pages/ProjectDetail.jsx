/* Packages */
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

/* Components */
import { PageLoader, PageWrapper } from '../components';

/* Domain */
import { ProjectDetailHeader, ProjectDetailImages } from '../domain/project-detail';

/* Api */
import { fetchProjectById, QUERY_KEYS } from '../api';

/* Hooks */
import { usePageTitle } from '../hooks';

export default function ProjectDetail() {
	/* Queries */
	const { id: projectId } = useParams();
	const { isLoading, data = {} } = useQuery([QUERY_KEYS.PROJECT_BY_ID, parseInt(projectId)], () =>
		fetchProjectById({ projectId })
	);

	/* Hooks */
	usePageTitle(data?.title, [data]);

	/* Constants  */
	const { title, description, users, id, author, email, projectImages } = data;

	/* Render */
	return (
		<PageWrapper>
			<PageLoader {...{ isLoading }}>
				<ProjectDetailHeader {...{ title, description, users, id, author, email }} />
				<ProjectDetailImages {...{ projectImages, projectId: id }} />
			</PageLoader>
		</PageWrapper>
	);
}
