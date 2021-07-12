/* Packages */
import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useMutation, useQueryClient } from 'react-query';

/* Components */
import { Modal, DropzoneSingle, Button } from '../../../../components';

/* Assets */
import nextIcon from 'icons/next.svg';

/* Api */
import { nextPhase, QUERY_KEYS } from '../../../../api';

/* Options */
import { modalOptions } from '.';

export default function PhaseNextAction({ phaseId, projectImageId, togglePaginationActive }) {
	/* Hooks */
	const queryClient = useQueryClient();

	/* State */
	const [modalOpen, setModalOpen] = useState(false);
	const [images, setImages] = useState([]);

	/* Callbacks */
	const toggleModal = () => {
		togglePaginationActive();
		setModalOpen(!modalOpen);
	};

	/* Mutations */
	const nextPhaseMutation = useMutation(nextPhase, {
		onSuccess: () => {
			toggleModal();
			setImages([]);
			queryClient.invalidateQueries([QUERY_KEYS.PROJECT_IMAGE_BY_ID, Number(projectImageId)]);
		},
	});

	return (
		<>
			<button
				className={`bar__action-btn ${modalOpen && 'is-active'} btn btn-link text-rest`}
				onClick={toggleModal}>
				<ReactSVG wrapper="svg" className="icon icon--16" src={nextIcon} />
			</button>
			<Modal
				{...{
					title: 'Next phase',
					subtitle: 'Add a new image for the next phase',
					modalOpen: modalOpen,
					toggleModal: toggleModal,
					...modalOptions,
				}}>
				<div className="d-flex flex-column w-100">
					<DropzoneSingle {...{ images, setImages }} />
					<Button
						title="Next phase"
						onClick={() => nextPhaseMutation.mutate({ phaseId: phaseId, images: images })}
						extensionClasses="mt-3 w-50 mx-auto justify-content-center"
					/>
				</div>
			</Modal>
		</>
	);
}
