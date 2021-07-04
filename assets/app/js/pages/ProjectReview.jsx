/* Packages */
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

/* Components */
import { PageLoader, PageWrapper } from '../components';

/* Domain */
import { ProjectReviewCanvas } from '../domain/project-review';

/* Api */
import { fetchProjectImageById, QUERY_KEYS } from '../api';

/* Hooks */
import { usePageTitle } from '../hooks';

/* Context */
import { ReviewContext } from '../context';

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
		<ReviewContext.Provider value={{ projectId: data?.parentId, projectImageId }}>
			<PageWrapper>
				<PageLoader {...{ isLoading }}>
					<ProjectReviewCanvas {...data} />
				</PageLoader>
			</PageWrapper>
		</ReviewContext.Provider>
	);
}
