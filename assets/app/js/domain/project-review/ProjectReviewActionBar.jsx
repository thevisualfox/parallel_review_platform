/* Packages */
import React, { useContext, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useQueryClient } from 'react-query';

/* Components */
import { Button, User, Modal, EditableBody } from '../../components';

/* Assets */
import chevronIcon from 'icons/chevron.svg';
import editIcon from 'icons/edit.svg';
import commentIcon from 'icons/comment.svg';

/* Context */
import { ReviewContext, StaticContext } from '../../context';

/* Api */
import { editProjectImage, QUERY_KEYS } from '../../api';

export default function ProjectReviewActionBar({ title, description, phase, commentsPanelOpen, toggleCommentsPanel }) {
	/* State */
	const [editModalOpen, setEditModalOpen] = useState(false);

	/* Hooks */
	const queryClient = useQueryClient();

	/* Context */
	const { currentUser, userRole } = useContext(StaticContext);
	const { projectImageId } = useContext(ReviewContext);

	/* Callbacks */
	const toggleEditModal = () => setEditModalOpen(!editModalOpen);

	const mutationOnSuccess = () => {
		queryClient.invalidateQueries([QUERY_KEYS.PROJECT_IMAGE_BY_ID, Number(projectImageId)]);
	};

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
								<p className="text--xs text-muted--70 mb-0">1 of 2</p>
								<span className="mx-1 text-muted--20">/</span>
								<p className="text--xs text-muted--70 mb-0">Phase {phase}</p>
							</div>
						</div>
						<div className="col-auto d-flex align-items-center">
							<div className="position-relative hr-2">
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
										extensionClasses: 'bar__edit-modal',
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
							</div>
							<button
								className={`bar__action-btn ${
									commentsPanelOpen && 'is-active'
								} btn btn-link text-rest hr-2`}
								onClick={toggleCommentsPanel}>
								<ReactSVG wrapper="svg" className="icon icon--16" src={commentIcon} />
							</button>
						</div>
						<div className="col-4 d-flex justify-content-end">
							<User {...{ user: currentUser, size: 'lg' }} />
							{userRole === 'admin' && (
								<Button title="Next phase" type="button" extensionClasses="ml-2 px-4" />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
