/* Packages */
import React, { useContext, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuery } from 'react-query';

/* Components */
import { ProjectResults, ProjectAdd } from '../components/project-overview';

/* Animations */
import { FADE_IN } from '../common/animations';

/* Context */
import StaticContext from '../context';

/* Api */
import { fetchProjectsByUser, QUERY_KEYS } from '../api';

export default function ProjectOverview({ currentUserLoading }) {
	/* State */
	const [newProjectId, setNewProjectId] = useState();

	/* Hooks */
	const { currentUser, userRole } = useContext(StaticContext);

	/* Constants */
	const userId = currentUser?.id ? currentUser.id : atob(location.search.replace('?', ''));

	/* Queries */
	const { isLoading: projectsLoading, data = {} } = useQuery(
		QUERY_KEYS.PROJECT_BY_USER,
		() => fetchProjectsByUser({ userId }),
		{
			enabled: !!userId,
		}
	);

	/* Constants  */
	const { projects = [] } = data;
	const isLoading = currentUserLoading || projectsLoading;

	/* Render */
	return (
		<>
			<AnimatePresence>
				{isLoading && (
					<motion.div {...FADE_IN}>
						<LinearProgress color="secondary" />
					</motion.div>
				)}
			</AnimatePresence>
			{userRole === 'admin' && <ProjectAdd {...{ setNewProjectId }} />}
			<ProjectResults {...{ projects, newProjectId, isLoading }} />
		</>
	);
}
