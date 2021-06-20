/* Packages */
import React, { useRef, useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useQuery } from 'react-query';

/* Domain */
import ProjectReviewMarker from './ProjectReviewMarker';
import ProjectReviewCommentModal from './ProjectReviewCommentModal';
import ProjectReviewCommentAdd from './ProjectReviewCommentAdd';

/* Components */
import { SecurityModal } from '../../components';

/* Api */
import { fetchGobalUsers, QUERY_KEYS } from '../../api';

/* Context */
import { StaticContext } from '../../context';

/* Global */
const cursorOffset = 10;

export default function ProjectReviewCanvas({ title, phases = [] }) {
	/* Queries */
	const { data: globalUsers = [] } = useQuery(QUERY_KEYS.GLOBAL_USERS, fetchGobalUsers);

	/* Constants */
	const { image, id: phaseId, comments } = phases[phases.length - 1] || {};

	/* Hooks */
	const { currentUser } = useContext(StaticContext);

	/* Refs */
	const reviewRef = useRef();

	/* State */
	const [markerPos, setMarkerPos] = useState();
	const [securityModalOpen, setSecurityModalOpen] = useState(false);

	/* Callbacks */
	const toggleCommentAddOpen = () => setMarkerPos(null);

	const posMarker = ({ clientX, clientY }) => {
		if (!currentUser.authenticated) {
			setSecurityModalOpen(true);
			return;
		}

		const reviewPos = reviewRef?.current.getBoundingClientRect();

		setMarkerPos(() => {
			const xPercent = ((clientX - cursorOffset) / reviewPos.width) * 100;
			const yPercent = ((clientY - reviewPos.top - cursorOffset) / reviewPos.height) * 100;

			return { xPercent, yPercent, reviewPos };
		});
	};

	/* render */
	return (
		<div ref={reviewRef} className="review position-relative mx-n12 mb-n12 mt-12">
			<img
				className="review__image img-fluid w-100"
				src={image.original}
				srcSet={`${image.original} 2x`}
				alt={title}
				onClick={posMarker}
			/>
			{comments?.map((comment, commentIndex) => (
				<ProjectReviewCommentModal
					key={comment.id}
					{...{ comment, commentIndex, reviewRef, globalUsers, toggleCommentAddOpen }}
				/>
			))}
			<AnimatePresence>
				{markerPos && (
					<ProjectReviewMarker {...{ ...markerPos }}>
						<ProjectReviewCommentAdd {...{ markerPos, phaseId, toggleCommentAddOpen }} />
					</ProjectReviewMarker>
				)}
				<SecurityModal {...{ securityModalOpen, setSecurityModalOpen }} />
			</AnimatePresence>
		</div>
	);
}
