/* Packages */
import React, { useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuery } from 'react-query';

/* Components */
import { ProjectResults } from './project';
import { ProjectAdd } from './project-add';

/* Animations */
import { FADE_IN, STAGGER_UP } from '../../common/animations';

/* Context */
import StaticContext from '../context';

/* Api calls */
import { fetchProjectsByUser, QUERY_KEYS } from '../api';

/* Global constants */
import { USER_ROLES } from '../constants';

export default function ProjectOverview() {
	/* State */
	const [currentUserRoles, setCurrentUserRoles] = useState([]);
	const [newProjectId, setNewProjectId] = useState();

	/* Constants */
	const userId = atob(location.search.replace('?', ''));
	const isAdmin = currentUserRoles.includes(USER_ROLES.ROLE_ADMIN);

	/* Hooks */
	const { isLoading: projectsLoading, data = {} } = useQuery(
		QUERY_KEYS.PROJECT_BY_USER,
		() => fetchProjectsByUser({ userId }),
		{
			onSuccess: ({ user }) => setCurrentUserRoles(user.roles),
		}
	);

	/* Constants  */
	const { projects = [] } = data;

	/* Render */
	return (
		<StaticContext.Provider value={{ currentUserRoles }}>
			<AnimatePresence>
				{projectsLoading && (
					<motion.div {...FADE_IN}>
						<LinearProgress color="secondary" />
					</motion.div>
				)}
			</AnimatePresence>
			<ProjectResults {...{ projects, newProjectId }}>
				{isAdmin && !projectsLoading && (
					<motion.div
						layout
						{...STAGGER_UP(projects.length)}
						key="add-project"
						className="col-12 col-md-6 col-lg-4 col-xl-3">
						<ProjectAdd {...{ setNewProjectId }} />
					</motion.div>
				)}
				<div className="col-12">
					<AnimatePresence>
						{!isAdmin && !projectsLoading && projects.length === 0 && (
							<motion.p {...STAGGER_UP()} className="text-white" layout>
								{`You don't have any projects yet`}
							</motion.p>
						)}
					</AnimatePresence>
				</div>
			</ProjectResults>
		</StaticContext.Provider>
	);
}
