/* Packages */
import React, { useContext, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useQueryClient } from 'react-query';

/* Components */
import { Modal, Button, UserAddSearch } from '../../../../components';

/* Assets */
import addUserIcon from 'icons/add_user.svg';

/* Context */
import { ReviewContext } from '../../../../context';

/* Api */
import { QUERY_KEYS } from '../../../../api';

/* Options */
import { modalOptions } from '.';

export default function ShareAction({ projectUsers, togglePaginationActive }) {
	/* Context */
	const { projectId } = useContext(ReviewContext);

	/* Hooks */
	const queryClient = useQueryClient();

	/* State */
	const [modalOpen, setModalOpen] = useState(false);

	/* Callbacks */
	const toggleModal = () => {
		togglePaginationActive();
		setModalOpen(!modalOpen);
	};

	const invalidateQueries = () => {
		queryClient.invalidateQueries([QUERY_KEYS.PROJECT_USERS, projectId]);
	};

	/* Render */
	return (
		<>
			<Button title="Share" extensionClasses="px-5" onClick={toggleModal}>
				<ReactSVG wrapper="svg" className="icon icon--12 mr-1" src={addUserIcon} />
			</Button>
			<Modal
				title="Select users"
				subtitle="Choose some users to collaborate with."
				{...{ modalOpen, toggleModal, ...modalOptions, extensionClasses: 'bar__modal bar__modal--right' }}>
				<UserAddSearch
					{...{ users: projectUsers, project: { id: projectId }, toggleModal, invalidateQueries }}
				/>
			</Modal>
		</>
	);
}
