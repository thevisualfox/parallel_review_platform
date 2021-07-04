/* Packages */
import React, { useRef, useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';

/* Domain */
import ProjectReviewMarker from './ProjectReviewMarker';
import ProjectReviewCommentModal from './ProjectReviewCommentModal';
import ProjectReviewCommentAdd from './ProjectReviewCommentAdd';
import ProjectReviewActionBar from './ProjectReviewActionBar';
import ProjectReviewPagination from './ProjectReviewPagination';
import ProjectReviewCommentPanel from './ProjectReviewCommentPanel';

/* Components */
import { SecurityModal } from '../../components';

/* Api */
import { fetchGobalUsers, QUERY_KEYS } from '../../api';

/* Context */
import { StaticContext } from '../../context';

/* Animations */
import { SLIDE_IN } from '../../animations';

/* Global */
const cursorOffset = 10;

export default function ProjectReviewCanvas({ title, phases = [], ...rest }) {
	/* Queries */
	const { data: globalUsers = [] } = useQuery(QUERY_KEYS.GLOBAL_USERS, fetchGobalUsers);

	/* Constants */
	const { image, id: phaseId, comments, phase } = phases[phases.length - 1] || {};

	/* Hooks */
	const { currentUser } = useContext(StaticContext);

	/* Refs */
	const reviewRef = useRef();

	/* State */
	const [markerPos, setMarkerPos] = useState();
	const [securityModalOpen, setSecurityModalOpen] = useState(false);
	const [commentsPanelOpen, setCommentsPanelOpen] = useState(false);

	/* Callbacks */
	const toggleCommentAddOpen = () => setMarkerPos(null);
	const toggleCommentsPanel = () => setCommentsPanelOpen(!commentsPanelOpen);

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
		<motion.div layout className="review position-relative mx-n12 mb-3 mt-n10">
			<motion.div
				className="review__image-wrapper position-relative"
				ref={reviewRef}
				initial={{ width: '100%' }}
				animate={{
					width: commentsPanelOpen ? `calc(100% - 400px)` : '100%',
					transition: commentsPanelOpen ? SLIDE_IN.animate.transition : SLIDE_IN.exit.transition,
				}}>
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
				</AnimatePresence>
				<SecurityModal {...{ securityModalOpen, setSecurityModalOpen }} />
				<ProjectReviewPagination {...rest} />
			</motion.div>
			<ProjectReviewActionBar {...{ ...rest, title, phase, commentsPanelOpen, toggleCommentsPanel }} />
			<AnimatePresence>
				{commentsPanelOpen && (
					<ProjectReviewCommentPanel {...{ comments, commentsPanelOpen, toggleCommentsPanel, globalUsers }} />
				)}
			</AnimatePresence>
		</motion.div>
	);
}
