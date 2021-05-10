/* Packages */
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

/* Components */
import { PageLoader } from '../common';

/* Api */
import { fetchProjectById, QUERY_KEYS } from '../api';

/* Helpers */
import { updatePageTitle } from '../helpers';

/* Components */
import { ProjectDetailHeader, ProjectDetailImages } from '../components/project-detail';

export default function ProjectDetail({ currentUserLoading }) {
	/* Hooks */
	const { id: projectId } = useParams();

	/* Queries */
	const { isLoading: projectLoading, data = {} } = useQuery(
		[QUERY_KEYS.PROJECT_BY_ID, parseInt(projectId)],
		() => fetchProjectById({ projectId }),
		{
			onSuccess: ({ title }) => updatePageTitle(title),
		}
	);

	/* Constants  */
	const { title, description, users, id, author, email, projectImages } = data;
	const isLoading = currentUserLoading || projectLoading;

	/* Render */
	return (
		<PageLoader {...{ isLoading }}>
			<ProjectDetailHeader {...{ title, description, users, id, author, email }} />
			<ProjectDetailImages {...{ projectImages, projectId: id }} />
		</PageLoader>
	);
}
