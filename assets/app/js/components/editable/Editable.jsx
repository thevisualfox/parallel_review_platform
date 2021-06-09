/* Packages */
import React, { useContext, useState } from 'react';
import { ReactSVG } from 'react-svg';

/* Components */
import { Modal } from '../../components';

/* Domain */
import EditableBody from './EditableBody';

/* Assets */
import editIcon from 'icons/edit.svg';

/* Context */
import StaticContext from '../../context/mainContext';

export default function Editable({ inputType, children, ...rest }) {
	/* State */
	const [modalOpen, setModalOpen] = useState(false);

	/* Hooks */
	const { userRole } = useContext(StaticContext);

	/* Constants */
	const title = `Editing ${inputType}`;
	const subtitle = `Save when ready`;

	/* Callbacks */
	const toggleModal = () => setModalOpen(!modalOpen);

	/* Render */
	return (
		<div className="editable d-flex align-items-center position-relative">
			<div className="editable__content">{children}</div>
			{userRole === 'admin' && (
				<>
					<button
						className="editable__toggle btn btn-link icon-wrapper icon-wrapper--secondary icon-wrapper--interactive stretched-link ml-3"
						onClick={toggleModal}
						style={{ '--size': 25 }}>
						<ReactSVG wrapper="svg" className="icon icon--10 text-secondary" src={editIcon} />
					</button>
					<Modal {...{ title, subtitle, modalOpen, toggleModal }}>
						<EditableBody {...{ title, inputType, toggleModal, ...rest }} />
					</Modal>
				</>
			)}
		</div>
	);
}
