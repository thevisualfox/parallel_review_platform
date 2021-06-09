/* Packages */
import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';

/* Components */
import { Modal, UserAddSearch } from '../../components';

/* Assets */
import addUserIcon from 'icons/add_user.svg';

export default function UserAdd({ users, project }) {
	/* State */
	const [modalOpen, setModalOpen] = useState(false);

	/* Callbacks */
	const toggleModal = () => setModalOpen(!modalOpen);

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
				<UserAddSearch {...{ users, project, toggleModal }} />
			</Modal>
		</div>
	);
}
