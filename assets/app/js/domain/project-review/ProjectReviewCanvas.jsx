/* Packages */
import React, { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

/* Domain */
import ProjectReviewMarker from './ProjectReviewMarker';
import ProjectReviewComment from './ProjectReviewComment';
import ProjectReviewCommentBox from './ProjectReviewCommentBox';

/* Global */
const cursorOffset = 10;

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
		setMarkerPos(null);
	};

	const posMarker = ({ clientX, clientY }) => {
		const reviewPos = reviewRef?.current.getBoundingClientRect();

		setMarkerPos(() => {
			const xPercent = ((clientX - cursorOffset) / reviewPos.width) * 100;
			const yPercent = ((clientY - reviewPos.top - cursorOffset) / reviewPos.height) * 100;

			return { xPercent, yPercent, reviewPos };
		});

		setBoxOpen(true);
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
			{comments.length > 0 &&
				comments.map((comment, commentIndex) => (
					<ProjectReviewComment key={commentIndex} {...{ ...comment, commentIndex, reviewRef }} />
				))}
			<AnimatePresence>
				{markerPos && (
					<ProjectReviewMarker {...{ ...markerPos }}>
						<ProjectReviewCommentBox {...{ markerPos, boxOpen, toggleBox, phaseId, projectImageId }} />
					</ProjectReviewMarker>
				)}
			</AnimatePresence>
		</div>
	);
}
