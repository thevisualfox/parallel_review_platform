/* Packages */
import React, { useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuery } from 'react-query';

/* Components */
import { ProjectResults } from './project';
import { ProjectAdd } from './project-add';

/* Animations */
import { FADE_IN } from '../../common/animations';

/* Context */
import StaticContext from '../context';

/* Api calls */
import { fetchProjectsByUser, QUERY_KEYS } from '../api';

/* Global constants */
import { USER_ROLES } from '../constants';

export default function ProjectOverview() {
	/* State */
	const [currentUser, setCurrentUser] = useState([]);
	const [newProjectId, setNewProjectId] = useState();

	/* Constants */
	const userId = atob(location.search.replace('?', ''));
	const isAdmin = currentUser?.roles?.includes(USER_ROLES.ROLE_ADMIN);

	/* Hooks */
	const { isLoading: projectsLoading, data = {} } = useQuery(
		QUERY_KEYS.PROJECT_BY_USER,
		() => fetchProjectsByUser({ userId }),
		{
			onSuccess: ({ user }) => setCurrentUser(user),
		}
	);

	/* Constants  */
	const { projects = [] } = data;

	/* Render */
	return (
		<StaticContext.Provider value={{ currentUser }}>
			<AnimatePresence>
				{projectsLoading && (
					<motion.div {...FADE_IN}>
						<LinearProgress color="secondary" />
					</motion.div>
				)}
			</AnimatePresence>
			{isAdmin && <ProjectAdd {...{ setNewProjectId }} />}
			<ProjectResults {...{ projects, newProjectId, projectsLoading }} />
		</StaticContext.Provider>
	);
}
