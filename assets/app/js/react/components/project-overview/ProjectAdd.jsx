/* Packages */
import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useMutation, useQuery, useQueryClient } from 'react-query';

/* Components */
import { ProjectModal } from './';

/* Assets */
import addProjectIcon from 'icons/add_project.svg';

/* Api */
import { addProject, QUERY_KEYS, editProject, fetchProjectById } from '../../api';

/* Animations */
import { SCALE_FADE } from '../../common/animations';

export default function ProjectAdd({ setNewProjectId }) {
	/* State */
	const [projectId, setProjectId] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);

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
	const toggleModal = () => {
		setModalOpen(!modalOpen);

		/* Mutate on modal open */
		if (!modalOpen) addMutation.mutate();

		/* Reset id on close modal */
		if (modalOpen) {
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
				className="icon-wrapper icon-wrapper--interactive icon-wrapper--secondary btn btn-link btn--project-add"
				style={{ '--size': '75px' }}
				onClick={toggleModal}>
				<ReactSVG wrapper="svg" className="icon icon--30 text-secondary" src={addProjectIcon} />
			</motion.button>
			<AnimatePresence>
				{modalOpen && <ProjectModal {...{ project, updateProject, toggleModal }} />}
			</AnimatePresence>
		</>
	);
}
