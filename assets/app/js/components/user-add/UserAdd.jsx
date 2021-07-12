/* Packages */
import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useQueryClient } from 'react-query';

/* Components */
import { Modal, UserAddSearch } from '../../components';

/* Assets */
import addUserIcon from 'icons/add_user.svg';

/* Api */
import { QUERY_KEYS } from '../../api';

export default function UserAdd({ users, project }) {
	/* State */
	const [modalOpen, setModalOpen] = useState(false);

	/* Hooks */
	const queryClient = useQueryClient();

	/* Callbacks */
	const toggleModal = () => setModalOpen(!modalOpen);

	const invalidateQueries = () => {
		queryClient.invalidateQueries([QUERY_KEYS.PROJECT_BY_ID, project.id]);
		queryClient.invalidateQueries(QUERY_KEYS.GLOBAL_USERS);
	};

	/* Render */
	return (
		<div className="position-relative ml-2">
			<button className="btn btn-link user user--lg user--add" type="button" onClick={toggleModal}>
				<span className="user__avatar">
					<div className="user__initials">
						<ReactSVG wrapper="svg" className="user__icon icon icon--12 mt-0" src={addUserIcon} />
					</div>
				</span>
			</button>
			<Modal
				title="Select users"
				subtitle="Choose some users to collaborate with."
				{...{ modalOpen, toggleModal }}>
				<UserAddSearch {...{ users, project, toggleModal, invalidateQueries }} />
			</Modal>
		</div>
	);
}
