/* Packages */
import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useMutation, useQuery, useQueryClient } from 'react-query';

/* Domain */
import { ProjectSlideIn } from './';

/* Animations */
import { SCALE_FADE } from '../../animations';

/* Assets */
import addProjectIcon from 'icons/add_project.svg';

/* Api */
import { addProject, QUERY_KEYS, editProject, fetchProjectById } from '../../api';

export default function ProjectAdd({ setNewProjectId }) {
	/* State */
	const [projectId, setProjectId] = useState(null);
	const [slideInOpen, setSlideInOpen] = useState(false);

	/* Hooks */
	const queryClient = useQueryClient();

	/* Queries */
	const { data: project } = useQuery([QUERY_KEYS.PROJECT_BY_ID, projectId], () => fetchProjectById({ projectId }), {
		enabled: !!projectId,
	});

	useEffect(() => {
		setNewProjectId(projectId);
	}, [projectId]);

	/* Mutations */
	const addMutation = useMutation(addProject, {
		onSuccess: ({ id }) => setProjectId(id),
	});

	const editMutation = useMutation(editProject, {
		onSuccess: () => invalidateProject(),
	});

	/* Callbacks */
	const toggleSlideIn = () => {
		setSlideInOpen(!slideInOpen);

		/* Mutate on modal open */
		if (!slideInOpen) addMutation.mutate();

		/* Reset id on close modal */
		if (slideInOpen) {
			setTimeout(() => {
				setProjectId(null);
			}, 250);

			invalidateProject();
		}
	};

	const updateProject = (formRef) => editMutation.mutate({ formRef, id: projectId });
	const invalidateProject = () => queryClient.invalidateQueries(QUERY_KEYS.PROJECT_BY_USER);

	/* Render */
	return (
		<>
			<motion.button
				{...SCALE_FADE}
				key="add-project"
				type="button"
				className="icon-wrapper icon-wrapper--interactive icon-wrapper--secondary btn btn-link btn--add btn--add-right"
				style={{ '--size': 75 }}
				onClick={toggleSlideIn}>
				<ReactSVG wrapper="svg" className="icon icon--30 text-secondary" src={addProjectIcon} />
			</motion.button>
			<AnimatePresence>
				{slideInOpen && <ProjectSlideIn {...{ project, updateProject, toggleSlideIn }} />}
			</AnimatePresence>
		</>
	);
}
