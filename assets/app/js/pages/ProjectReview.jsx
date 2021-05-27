/* Packages */
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

/* Components */
import { PageLoader, PageWrapper } from '../components';

/* Domain */
import { ProjectReviewCanvas, ProjectReviewHeader } from '../domain/project-review';

/* Api */
import { fetchProjectImageById, QUERY_KEYS } from '../api';

/* Hooks */
import { usePageTitle } from '../hooks';

export default function ProjectReview() {
	/* Queries */
	const { id: projectImageId } = useParams();
	const { isLoading, data = {} } = useQuery([QUERY_KEYS.PROJECT_IMAGE_BY_ID, parseInt(projectImageId)], () =>
		fetchProjectImageById({ projectImageId })
	);

	/* Hooks */
	usePageTitle(data?.title, [data]);

	/* Render */
	return (
		<PageWrapper>
			<PageLoader {...{ isLoading }}>
				<ProjectReviewHeader {...data} />
				<ProjectReviewCanvas {...{ ...data, projectImageId }} />
			</PageLoader>
		</PageWrapper>
	);
}
