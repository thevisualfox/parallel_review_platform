/* Packages */
import React, { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

/* Components */
import ProjectReviewMarker from './ProjectReviewMarker';
import ProjectReviewComment from './ProjectReviewComment';

/* Context */
import ProjectReviewCommentBox from './ProjectReviewCommentBox';

/* Global */
const cursorOffset = 6;

export default function ProjectReviewCanvas({ title, phases = [], projectImageId }) {
	/* Constants */
	const { image, id: phaseId, comments } = phases[phases.length - 1] || {};

	/* Refs */
	const reviewRef = useRef();

	/* State */
	const [markerPos, setMarkerPos] = useState();
	const [boxOpen, setBoxOpen] = useState(false);

	/* Callbacks */
	const toggleBox = () => {
		setBoxOpen(!boxOpen);
		setTimeout(() => setMarkerPos(null), 250);
	};

	const posMarker = ({ clientX, clientY }) => {
		const reviewPos = reviewRef?.current.getBoundingClientRect();

		setMarkerPos(() => {
			const x = clientX - cursorOffset;
			const y = clientY - reviewPos.top - cursorOffset;
			const xPercent = ((clientX - cursorOffset) / reviewPos.width) * 100;
			const yPercent = ((clientY - reviewPos.top - cursorOffset) / reviewPos.height) * 100;

			return { x, y, xPercent, yPercent, reviewPos };
		});

		setBoxOpen(true);
	};

	/* render */
	return (
		<div ref={reviewRef} className="review position-relative mx-n12 mb-n12 mt-12">
			<img
				className="review__image img-fluid w-100"
				src={image}
				srcSet={`${image} 2x`}
				alt={title}
				onClick={posMarker}
			/>
			<AnimatePresence>{markerPos && <ProjectReviewMarker {...{ ...markerPos }} />}</AnimatePresence>
			{markerPos && <ProjectReviewCommentBox {...{ markerPos, boxOpen, toggleBox, phaseId, projectImageId }} />}
			{comments.length > 0 &&
				comments.map((comment, commentIndex) => <ProjectReviewComment key={commentIndex} {...comment} />)}
		</div>
	);
}
