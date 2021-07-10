/* Packages */
import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useQueryClient } from 'react-query';

/* Components */
import { Modal, EditableBody } from '../../../../components';

/* Assets */
import editIcon from 'icons/edit.svg';

/* Api */
import { editProjectImage, QUERY_KEYS } from '../../../../api';

/* Options */
import { modalOptions } from '.';

export default function EditAction({ title, description, projectImageId, togglePaginationActive }) {
	/* Hooks */
	const queryClient = useQueryClient();

	/* State */
	const [modalOpen, setModalOpen] = useState(false);

	/* Callbacks */
	const toggleModal = () => {
		togglePaginationActive();
		setModalOpen(!modalOpen);
	};

	/* mutations */
	const mutationOnSuccess = () => {
		queryClient.invalidateQueries([QUERY_KEYS.PROJECT_IMAGE_BY_ID, Number(projectImageId)]);
	};

	/* Render */
	return (
		<>
			<button
				className={`bar__action-btn ${modalOpen && 'is-active'} btn btn-link text-rest`}
				onClick={toggleModal}>
				<ReactSVG wrapper="svg" className="icon icon--16" src={editIcon} />
			</button>
			<Modal
				{...{
					title: 'Editing image',
					subtitle: 'Save when ready',
					modalOpen: modalOpen,
					toggleModal: toggleModal,
					...modalOptions,
				}}>
				<EditableBody
					{...{
						toggleModal: toggleModal,
						fields: [
							{ name: 'title', defaultValue: title },
							{ name: 'description', defaultValue: description },
						],
						mutation: editProjectImage,
						mutationId: projectImageId,
						mutationOnSuccess: mutationOnSuccess,
					}}
				/>
			</Modal>
		</>
	);
}
