/* Packages */
import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMutation, useQueryClient } from 'react-query';

/* Components */
import { Project } from './';
import { ActionMenu } from '../action-menu';

/* Animations */
import { FADE_IN, STAGGER_UP } from '../../common/animations';

/* Assets */
import closeIcon from 'icons/close.svg';
import leaveIcon from 'icons/leave.svg';
import archiveIcon from 'icons/archive.svg';

/* Hooks */
import { useSelection } from '../../hooks';

/* Api */
import { deleteProjects, leaveProjects, QUERY_KEYS } from '../../api';

/* Context */
import StaticContext from '../../context';

export default function ProjectResults({ projects, newProjectId }) {
	/* Hooks */
	const { selected, updateSelected, resetSelected } = useSelection();
	const { currentUser } = useContext(StaticContext);
	const queryClient = useQueryClient();

	/* Mutations */
	const leaveProjectsMutation = useMutation(leaveProjects, {
		onSuccess: () => {
			queryClient.invalidateQueries(QUERY_KEYS.PROJECT_BY_USER);
			resetSelected();
		},
	});

	const deleteProjectsMutation = useMutation(deleteProjects, {
		onSuccess: () => {
			queryClient.invalidateQueries(QUERY_KEYS.PROJECT_BY_USER);
			resetSelected();
		},
	});

	const actions = [
		{
			title: 'Leave',
			theme: 'warning',
			hasPermission: ['user', 'basic'],
			icon: leaveIcon,
			mutation: () => leaveProjectsMutation.mutate({ projectIds: selected, userId: currentUser.id }),
			isLoading: leaveProjectsMutation.isLoading,
		},
		{
			title: 'Archive',
			theme: 'secondary',
			hasPermission: ['admin'],
			icon: archiveIcon,
		},
		{
			title: 'Remove',
			theme: 'danger',
			hasPermission: ['admin'],
			icon: closeIcon,
			iconSize: 10,
			mutation: () => deleteProjectsMutation.mutate({ projectIds: selected }),
			isLoading: deleteProjectsMutation.isLoading,
		},
	];

	/* Render */
	return (
		<>
			<h1 className="h5 text-white mb-6">Your projects</h1>
			<AnimatePresence>
				{projects.length === 0 && (
					<motion.p {...FADE_IN} className="text-white mb-0 position-absolute">
						{`You don't have any projects yet`}
					</motion.p>
				)}
			</AnimatePresence>
			<div className={`row row--equalized gutters-5 ${selected.length > 0 && 'has-selections'}`}>
				<AnimatePresence>
					{projects
						.filter((project) => project.id !== newProjectId)
						.map((project, projectIndex) => (
							<motion.div
								{...STAGGER_UP(projectIndex)}
								key={project.id}
								className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2"
								layout>
								<Project {...{ project, selected, updateSelected }} />
							</motion.div>
						))}
				</AnimatePresence>
			</div>
			<AnimatePresence>
				{selected.length > 0 && <ActionMenu {...{ selected, resetSelected, actions }} />}
			</AnimatePresence>
		</>
	);
}
