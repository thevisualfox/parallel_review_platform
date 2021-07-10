/* Packages */
import React, { useEffect, useState } from 'react';
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
	const [activePhase, setActivePhase] = useState();

	/* Queries */
	const { id: projectImageId } = useParams();
	const { isLoading, data, refetch } = useQuery(
		[QUERY_KEYS.PROJECT_IMAGE_BY_ID, parseInt(projectImageId)],
		() => fetchProjectImageById({ projectImageId, phaseId: activePhase }),
		{
			refetchInterval: 10000,
		}
	);

	/* Effects */
	useEffect(() => {
		if (activePhase) refetch({ projectImage: projectImageId, phaseId: activePhase });
	}, [activePhase]);

	/* Hooks */
	usePageTitle(data?.title, [data]);

	/* Render */
	return (
		<ReviewContext.Provider value={{ projectId: data?.parentId, projectImageId, activePhase, setActivePhase }}>
			<PageWrapper>
				<PageLoader {...{ isLoading }}>
					<ProjectReviewCanvas {...data} />
				</PageLoader>
			</PageWrapper>
		</ReviewContext.Provider>
	);
}
