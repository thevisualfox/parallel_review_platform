/* Packages */
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

/* Components */
import { PageLoader } from '../common';

/* Api */
import { fetchProjectImageById, QUERY_KEYS } from '../api';

/* Helpers */
import { updatePageTitle } from '../helpers';

/* Components */
import { ProjectReviewCanvas, ProjectReviewHeader } from '../components/project-review';

export default function ProjectReview() {
	/* Hooks */
	const { id: projectImageId } = useParams();

	/* Queries */
	const { isLoading, data = {} } = useQuery(
		[QUERY_KEYS.PROJECT_IMAGE_BY_ID, parseInt(projectImageId)],
		() => fetchProjectImageById({ projectImageId }),
		{
			onSuccess: ({ title }) => updatePageTitle(title),
		}
	);

	/* Render */
	return (
		<PageLoader {...{ isLoading }}>
			<ProjectReviewHeader {...data} />
			<ProjectReviewCanvas {...{ ...data, projectImageId }} />
		</PageLoader>
	);
}
