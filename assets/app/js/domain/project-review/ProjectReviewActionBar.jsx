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

/* Context */
import { ReviewContext, StaticContext } from '../../context';

/* Api */
import { editProjectImage, nextPhase, QUERY_KEYS } from '../../api';

/* Animations */
import { SCALE_IN_UP } from '../../animations';

export default function ProjectReviewActionBar({
	allImages,
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
								<p className="text--sm mb-0">Project</p>
								<ReactSVG
									wrapper="svg"
									className="icon icon--8 text-white text-muted--50 mx-1"
									src={chevronIcon}
								/>
								<p className="text--sm mb-0 text-truncate" style={{ maxWidth: 120 }}>
									{title}
								</p>
							</div>
							<div className="d-flex align-items-center">
								<p className="text--xs text-muted--70 mb-0">
									{allImages.indexOf(Number(projectImageId)) + 1} of {allImages.length}
								</p>
								<span className="mx-1 text-muted--20">/</span>
								<p className="text--xs text-muted--70 mb-0">Phase {phaseNumber}</p>
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
								{userRole === 'admin' && <PhaseAction {...{ phaseId, projectImageId }} />}
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

const EditAction = ({ title, description, projectImageId }) => {
	/* Hooks */
	const queryClient = useQueryClient();

	/* State */
	const [editModalOpen, setEditModalOpen] = useState(false);

	/* Callbacks */
	const toggleEditModal = () => setEditModalOpen(!editModalOpen);

	/* mutations */
	const mutationOnSuccess = () => {
		queryClient.invalidateQueries([QUERY_KEYS.PROJECT_IMAGE_BY_ID, Number(projectImageId)]);
	};

	/* Render */
	return (
		<>
			<button
				className={`bar__action-btn ${editModalOpen && 'is-active'} btn btn-link text-rest`}
				onClick={toggleEditModal}>
				<ReactSVG wrapper="svg" className="icon icon--16" src={editIcon} />
			</button>
			<Modal
				{...{
					title: 'Editing image',
					subtitle: 'Save when ready',
					modalOpen: editModalOpen,
					toggleModal: toggleEditModal,
					renderOnBody: false,
					center: false,
					extensionClasses: 'bar__modal',
					customAnimation: SCALE_IN_UP,
				}}>
				<EditableBody
					{...{
						toggleModal: toggleEditModal,
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

const PhaseAction = ({ phaseId, projectImageId }) => {
	/* Hooks */
	const queryClient = useQueryClient();

	/* State */
	const [phaseModalOpen, setPhaseModalOpen] = useState(false);
	const [images, setImages] = useState([]);

	/* Callbacks */
	const togglePhaseModal = () => setPhaseModalOpen(!phaseModalOpen);

	/* Mutations */
	const nextPhaseMutation = useMutation(nextPhase, {
		onSuccess: () => {
			togglePhaseModal();
			setImages([]);
			queryClient.invalidateQueries([QUERY_KEYS.PROJECT_IMAGE_BY_ID, Number(projectImageId)]);
		},
	});

	return (
		<>
			<button
				className={`bar__action-btn ${phaseModalOpen && 'is-active'} btn btn-link text-rest`}
				onClick={togglePhaseModal}>
				<ReactSVG wrapper="svg" className="icon icon--16" src={nextIcon} />
			</button>
			<Modal
				{...{
					title: 'Next phase',
					subtitle: 'Add a new image for the next phase',
					modalOpen: phaseModalOpen,
					toggleModal: togglePhaseModal,
					renderOnBody: false,
					center: false,
					extensionClasses: 'bar__modal',
					customAnimation: SCALE_IN_UP,
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
