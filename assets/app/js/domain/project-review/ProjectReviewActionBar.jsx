/* Packages */
import React, { useContext, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useMutation, useQueryClient } from 'react-query';

/* Components */
import { User, Modal, EditableBody, DropzoneSingle, Button } from '../../components';

/* Assets */
import chevronIcon from 'icons/chevron.svg';
import editIcon from 'icons/edit.svg';
import nextIcon from 'icons/next.svg';
import commentIcon from 'icons/comment.svg';
import checkIcon from 'icons/check.svg';

/* Context */
import { ReviewContext, StaticContext } from '../../context';

/* Api */
import { editProjectImage, nextPhase, QUERY_KEYS } from '../../api';

/* Animations */
import { SCALE_IN_UP } from '../../animations';

/* Global */
const modalOptions = {
	renderOnBody: false,
	center: false,
	extensionClasses: 'bar__modal',
	customAnimation: SCALE_IN_UP(20),
};

export default function ProjectReviewActionBar({
	allImages,
	allPhases,
	title,
	description,
	phaseNumber,
	phaseId,
	commentsPanelOpen,
	toggleCommentsPanel,
}) {
	/* Context */
	const { currentUser, userRole } = useContext(StaticContext);

	/* Context */
	const { projectImageId } = useContext(ReviewContext);

	/* Render */
	return (
		<>
			<div className="bar bar--review">
				<div className="container-fluid">
					<div className="row gutters-0 justify-content-between align-items-center">
						<div className="col-4 d-flex flex-column">
							<div className="d-flex align-items-center">
								<p className="text--sm mb-0 text-truncate" style={{ maxWidth: 120 }}>
									{title}
								</p>
							</div>
							<div className="d-flex align-items-center">
								<p className="text--xs text-muted--70 mb-0">
									{allImages.indexOf(Number(projectImageId)) + 1} of {allImages.length}
								</p>
								<span className="mx-1 text-muted--20">/</span>
								<PhaseAction {...{ allPhases, phaseNumber, userRole }} />
							</div>
						</div>
						<div className="col-auto d-flex align-items-center">
							<div className="position-relative hr-2">
								{userRole === 'admin' && <EditAction {...{ title, description, projectImageId }} />}
							</div>
							<button
								className={`bar__action-btn ${
									commentsPanelOpen && 'is-active'
								} btn btn-link text-rest hr-2`}
								onClick={toggleCommentsPanel}>
								<ReactSVG wrapper="svg" className="icon icon--16" src={commentIcon} />
							</button>
							<div className="position-relative hr-2">
								{userRole === 'admin' && <PhaseNextAction {...{ phaseId, projectImageId }} />}
							</div>
						</div>
						<div className="col-4 d-flex justify-content-end">
							<User {...{ user: currentUser, size: 'lg' }} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

const PhaseAction = ({ allPhases, phaseNumber, userRole }) => {
	/* State */
	const [modalOpen, setModalOpen] = useState(false);

	/* Context */
	const { activePhase, setActivePhase } = useContext(ReviewContext);

	/* Callbacks */
	const toggleModal = () => {
		if (userRole !== 'admin') return;

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
								<ReactSVG wrapper="svg" className="icon icon--12" src={checkIcon} />
							) : (
								<span className="text-secondary">{phaseIndex + 1}</span>
							)}
						</button>
					))}
				</div>
			</Modal>
		</>
	);
};

const EditAction = ({ title, description, projectImageId }) => {
	/* Hooks */
	const queryClient = useQueryClient();

	/* State */
	const [modalOpen, setModalOpen] = useState(false);

	/* Callbacks */
	const toggleModal = () => setModalOpen(!modalOpen);

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
};

const PhaseNextAction = ({ phaseId, projectImageId }) => {
	/* Hooks */
	const queryClient = useQueryClient();

	/* State */
	const [modalOpen, setModalOpen] = useState(false);
	const [images, setImages] = useState([]);

	/* Callbacks */
	const toggleModal = () => setModalOpen(!modalOpen);

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
};
