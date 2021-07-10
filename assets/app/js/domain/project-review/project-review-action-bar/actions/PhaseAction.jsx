/* Packages */
import React, { useContext, useState } from 'react';
import { ReactSVG } from 'react-svg';

/* Components */
import { Modal } from '../../../../components';

/* Assets */
import chevronIcon from 'icons/chevron.svg';
import checkIcon from 'icons/check.svg';

/* Context */
import { ReviewContext } from '../../../../context';

/* Options */
import { modalOptions } from '.';

export default function PhaseAction({ allPhases, phaseNumber, userRole, togglePaginationActive }) {
	/* State */
	const [modalOpen, setModalOpen] = useState(false);

	/* Context */
	const { activePhase = allPhases[allPhases.length - 1], setActivePhase } = useContext(ReviewContext);

	/* Callbacks */
	const toggleModal = () => {
		if (userRole !== 'admin') return;

		togglePaginationActive();
		setModalOpen(!modalOpen);
	};

	const navigateToPhase = (phase) => {
		setActivePhase(phase);
		toggleModal();
	};

	/* Render */
	return (
		<>
			<button
				className={`btn btn-link btn--modal text-reset d-flex align-items-center ${modalOpen && 'is-active'}`}
				onClick={toggleModal}>
				<p className="text--xs text-muted--70 mb-0">Phase {phaseNumber}</p>
				{userRole === 'admin' && (
					<ReactSVG wrapper="svg" className="icon icon--8 text-muted--50  ml-1" src={chevronIcon} />
				)}
			</button>
			<Modal
				{...{
					title: 'Choose phase',
					subtitle: 'Navigate to selected phase',
					modalOpen: modalOpen,
					toggleModal: toggleModal,
					...modalOptions,
					extensionClasses: 'bar__modal bar__modal--left',
				}}>
				<div className="d-flex align-items-center mt-2">
					{allPhases.map((phase, phaseIndex) => (
						<button
							key={phaseIndex}
							className="btn btn-link icon-wrapper icon-wrapper--interactive icon-wrapper--secondary hr-2 text-decoration-none"
							style={{ '--size': 35 }}
							onClick={() => navigateToPhase(phase)}>
							{activePhase === phase ? (
								<ReactSVG wrapper="svg" className="icon icon--12 text-secondary" src={checkIcon} />
							) : (
								<span className="text-secondary">{phaseIndex + 1}</span>
							)}
						</button>
					))}
				</div>
			</Modal>
		</>
	);
}
