/* Packages */
import React, { useContext } from 'react';
import { ReactSVG } from 'react-svg';

/* Components */
import { User } from '../../../components';

/* Domain */
import { EditAction, PhaseAction, PhaseNextAction, ShareAction } from './actions';

/* Assets */
import commentIcon from 'icons/comment.svg';

/* Context */
import { ReviewContext, StaticContext } from '../../../context';

export default function ProjectReviewActionBar({
	allImages,
	allPhases,
	title,
	description,
	phaseNumber,
	phaseId,
	commentsPanelOpen,
	toggleCommentsPanel,
	projectUsers,
	togglePaginationActive,
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
						<div className="col-4 d-flex align-items-center">
							<User {...{ user: currentUser, size: 'lg' }} />
							<div className="d-flex flex-column ml-3">
								<div className="d-flex align-items-center lh--sm">
									<p className="text--sm mb-0 text-truncate" style={{ maxWidth: 120 }}>
										{title}
									</p>
								</div>
								<div className="d-flex align-items-center lh--sm">
									<p className="text--xs text-muted--70 mb-0">
										{allImages.indexOf(Number(projectImageId)) + 1} of {allImages.length}
									</p>
									<span className="mx-1 text-muted--20">/</span>
									<PhaseAction {...{ allPhases, phaseNumber, userRole, togglePaginationActive }} />
								</div>
							</div>
						</div>
						<div className="col-auto d-flex align-items-center">
							<div className="position-relative hr-2">
								{userRole === 'admin' && (
									<EditAction {...{ title, description, projectImageId, togglePaginationActive }} />
								)}
							</div>
							<button
								className={`bar__action-btn ${
									commentsPanelOpen && 'is-active'
								} btn btn-link text-rest hr-2`}
								onClick={toggleCommentsPanel}>
								<ReactSVG wrapper="svg" className="icon icon--16" src={commentIcon} />
							</button>
							<div className="position-relative hr-2">
								{userRole === 'admin' && (
									<PhaseNextAction {...{ phaseId, projectImageId, togglePaginationActive }} />
								)}
							</div>
						</div>
						<div className="col-4 d-flex justify-content-end">
							{userRole === 'admin' && <ShareAction {...{ projectUsers, togglePaginationActive }} />}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
