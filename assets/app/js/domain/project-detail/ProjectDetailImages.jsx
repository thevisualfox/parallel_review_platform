/* Packages */
import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMutation, useQueryClient } from 'react-query';

/* Components */
import { Dropzone, ActionMenu } from '../../components';

/* Domain */
import ProjectDetailImage from './ProjectDetailImage';

/* Assets */
import deleteIcon from 'icons/close.svg';

/* Animations */
import { STAGGER_UP } from '../../animations';

/* Context */
import StaticContext from '../../context/mainContext';

/* Api */
import { deleteProjectImages, QUERY_KEYS } from '../../api';

/* Hooks */
import { useSelection } from '../../hooks';

export default function ProjectDetailImages({ projectImages, projectId }) {
	/* Hooks */
	const { selected, updateSelected, resetSelected } = useSelection();
	const queryClient = useQueryClient();
	const { userRole } = useContext(StaticContext);

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
			<div className={`${selected.length > 0 && 'has-selections'}`}>
				{userRole === 'admin' ? (
					<Dropzone {...{ projectId, projectImages, positition: 'right' }}>
						{() => <Images {...{ projectImages, projectId, selected, updateSelected }} />}
					</Dropzone>
				) : (
					<div className="row gutters-5">
						<Images {...{ projectImages, projectId, selected, updateSelected }} />
					</div>
				)}
			</div>
			<AnimatePresence>
				{selected.length > 0 && <ActionMenu {...{ selected, resetSelected, actions }} />}
			</AnimatePresence>
		</>
	);
}

const Images = ({ projectImages, projectId, selected, updateSelected }) => {
	return (
		<AnimatePresence>
			{projectImages.map((projectImage, projectImageIndex) => (
				<motion.div
					{...STAGGER_UP(projectImageIndex)}
					key={projectImage.id}
					className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2"
					layout>
					<ProjectDetailImage {...{ projectImage, projectId, selected, updateSelected }} />
				</motion.div>
			))}
		</AnimatePresence>
	);
};
