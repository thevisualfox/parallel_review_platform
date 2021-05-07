/* Packages */
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMutation, useQueryClient } from 'react-query';

/* Assets */
import deleteIcon from 'icons/close.svg';

/* Animations */
import { STAGGER_UP } from '../../common/animations';

/* Components */
import ProjectDetailImage from './ProjectDetailImage';
import { ActionMenu } from '../action-menu';

/* Hooks */
import { useSelection } from '../../hooks';

/* Api calls */
import { deleteProjectImages, QUERY_KEYS } from '../../api';

export default function ProjectDetailImages({ projectImages, projectId }) {
	/* Hooks */
	const { selected, updateSelected, resetSelected } = useSelection();
	const queryClient = useQueryClient();

	/* Mutations */
	const deleteProjectImagesMutation = useMutation(deleteProjectImages, {
		onSuccess: () => {
			queryClient.invalidateQueries([QUERY_KEYS.PROJECT_BY_ID, projectId]);
			resetSelected();
		},
	});

	/* Constants */
	const actions = [
		{
			title: 'Remove',
			theme: 'danger',
			hasPermission: ['admin'],
			icon: deleteIcon,
			iconSize: 10,
			mutation: () => deleteProjectImagesMutation.mutate({ projectId, projectImageIds: selected }),
			isLoading: deleteProjectImagesMutation.isLoading,
		},
	];

	return (
		<>
			<div className={`row row--equalized gutters-5 mt-6 ${selected.length > 0 && 'has-selections'}`}>
				<AnimatePresence>
					{projectImages.map((projectImage, projectImageIndex) => (
						<motion.div
							{...STAGGER_UP(projectImageIndex)}
							key={projectImage.id}
							className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2"
							layout>
							<ProjectDetailImage {...{ projectImage, selected, updateSelected }} />
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
