/* Packages */
import React, { useEffect, useRef, useState } from 'react';

/* Components */
import { Box } from '../../components';

/* Domain */
import ProjectReviewMarker from './ProjectReviewMarker';

/* Services */
import calcCommentPos from './services/calcCommentPos';

export default function ProjectReviewComment({ author, comment, position, commentIndex, reviewRef }) {
	/* Constants */
	const { xPercent, yPercent } = position;
	/* State */
	const [boxOpen, setBoxOpen] = useState(false);

	/* Callbacks */
	const toggleBox = () => setBoxOpen(!boxOpen);

	/* Render */
	return (
		<ProjectReviewMarker {...{ xPercent, yPercent, author, commentIndex, toggleComment: toggleBox }}>
			<Comment {...{ comment, author, boxOpen, toggleBox, position, reviewRef }} />
		</ProjectReviewMarker>
	);
}

const Comment = ({ comment, author, boxOpen, toggleBox, position, reviewRef }) => {
	/* Constants */
	const title = author.username;
	const subtitle = author.email;

	/* State */
	const [transformedPos, setTransformedPos] = useState(position);

	/* Refs */
	const boxRef = useRef();

	/* Effects */
	useEffect(() => {
		if (position) {
			setTransformedPos(() => {
				position.reviewPos = reviewRef.current.getBoundingClientRect();
				return calcCommentPos(boxRef, position);
			});
		}
	}, [position]);

	/* Render */
	return (
		<Box
			renderOnBody={false}
			animate={false}
			extensionClasses="review__box"
			{...{ title, subtitle, boxOpen, toggleBox, user: author, position: transformedPos, boxRef }}>
			{comment}
		</Box>
	);
};
