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

/* Api calls */
import { fetchProjectsByUser, QUERY_KEYS } from '../api';

export default function ProjectOverview() {
	/* State */
	const [isAdmin, setIsAdmin] = useState(false);
	const [newProjectId, setNewProjectId] = useState();
	const userId = atob(location.search.replace('?', ''));

	/* Hooks */
	const { isLoading: projectsLoading, data = {} } = useQuery(
		QUERY_KEYS.PROJECT_BY_USER,
		() => fetchProjectsByUser({ userId }),
		{
			onSuccess: ({ user }) => setIsAdmin(user.roles.includes('ROLE_ADMIN')),
		}
	);

	/* Constants  */
	const { projects = [] } = data;

	/* Render */
	return (
		<>
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
		</>
	);
}
