/* Packages */
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

/* Components */
import { PageLoader } from '../common';

/* Api */
import { fetchProjectById, QUERY_KEYS } from '../api';

/* Components */
import { ProjectDetailHeader, ProjectDetailImages } from '../components/project-detail';

/* Hooks */
import { usePageTitle } from '../hooks';

/* Hocs */
import PageWrapper from '../hocs/PageWrapper';

export default function ProjectDetail() {
	/* Queries */
	const { isLoading, data = {} } = useQuery([QUERY_KEYS.PROJECT_BY_ID, parseInt(projectId)], () =>
		fetchProjectById({ projectId })
	);

	/* Hooks */
	usePageTitle(data?.title, [data]);
	const { id: projectId } = useParams();

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
