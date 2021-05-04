/* Packages */
import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { AnimatePresence } from 'framer-motion';
import { useMutation, useQuery, useQueryClient } from 'react-query';

/* Components */
import { ProjectModal } from '../modals';

/* Assets */
import addProjectIcon from 'icons/add_project.svg';

/* Api calls */
import { addProject, QUERY_KEYS, editProject, fetchProjectById } from '../../api';

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
			setProjectId(null);
			invalidateProject();
		}
	};

	const updateProject = (formRef) => editMutation.mutate({ formRef, projectId });
	const invalidateProject = () => queryClient.invalidateQueries(QUERY_KEYS.PROJECT_BY_USER);

	/* Render */
	return (
		<article className="card card--link h-100 mb-0" style={{ minHeight: 427 }}>
			<div className="card-body d-flex align-items-center justify-content-center p-10">
				<button
					className="btn btn-link text-decoration-none stretched-link"
					onClick={toggleModal}
					type="button">
					<span className="btn-text d-flex flex-column align-items-center text-white text-muted--40">
						<ReactSVG wrapper="svg" className="icon icon--48" src={addProjectIcon} />
						<span className="text--sm mt-1">Add more projects</span>
					</span>
				</button>
			</div>
			<AnimatePresence>
				{modalOpen && <ProjectModal {...{ project, updateProject, toggleModal }} />}
			</AnimatePresence>
		</article>
	);
}
