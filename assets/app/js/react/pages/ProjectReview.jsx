/* Packages */
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import LinearProgress from '@material-ui/core/LinearProgress';

/* Animations */
import { FADE_IN } from '../common/animations';

/* Api */
import { fetchProjectImageById, QUERY_KEYS } from '../api';

/* Helpers */
import { updatePageTitle } from '../helpers';
import { ProjectReviewHeader } from '../components/project-review';

/* Components */

export default function ProjectReview({ currentUserLoading }) {
	/* Hooks */
	const { id: projectImageId } = useParams();

	/* Queries */
	const { isLoading: projectImageLoading, data = {} } = useQuery(
		[QUERY_KEYS.PROJECT_BY_ID, parseInt(projectImageId)],
		() => fetchProjectImageById({ projectImageId }),
		{
			onSuccess: ({ title }) => updatePageTitle(title),
		}
	);

	/* Constants  */
	const isLoading = currentUserLoading || projectImageLoading;

	return (
		<>
			<AnimatePresence>
				{isLoading ? (
					<motion.div {...FADE_IN}>
						<LinearProgress color="secondary" />
					</motion.div>
				) : (
					<ProjectReviewHeader {...data} />
				)}
			</AnimatePresence>
		</>
	);
}
