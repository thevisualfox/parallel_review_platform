/* Packages */
import React, { useRef, useState } from 'react';

export default function ProjectReviewCanvas({ title, phases = [] }) {
	/* Constants */
	const { image } = phases[phases.length - 1] || {};

	/* Refs */
	const reviewRef = useRef();

	/* stage */
	const [position, setPosition] = useState();

	/* Callbacks */
	const addComment = ({ clientX, clientY }) => {
		const { top } = reviewRef?.current.getBoundingClientRect();
		const cursorOffset = 10;

		setPosition({ x: clientX - cursorOffset, y: clientY - top - cursorOffset });
	};

	/* render */
	return (
		<div ref={reviewRef} className="review position-relative mx-n12 mb-n12 mt-12">
			<img
				className="review__image img-fluid w-100"
				src={image}
				srcSet={`${image} 2x`}
				alt={title}
				onClick={addComment}
			/>
			{position && (
				<div
					className="icon-wrapper icon-wrapper--secondary"
					style={{
						position: 'absolute',
						top: position.y,
						left: position.x,
					}}></div>
			)}
		</div>
	);
}
