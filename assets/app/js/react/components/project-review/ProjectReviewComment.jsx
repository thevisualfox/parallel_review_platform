/* Packages */
import React, { useState } from 'react';

/* Components */
import { Box } from '../../common';
import ProjectReviewMarker from './ProjectReviewMarker';

export default function ProjectReviewComment({ author, comment, position, commentIndex }) {
	/* State */
	const [boxOpen, setBoxOpen] = useState(true);

	/* Callbacks */
	const toggleBox = () => setBoxOpen(!boxOpen);

	/* Render */
	return (
		<ProjectReviewMarker {...{ xPercent: position.x, yPercent: position.y, author, commentIndex }}>
			<Comment {...{ comment, author, boxOpen, toggleBox, position }} />
		</ProjectReviewMarker>
	);
}

const Comment = ({ comment, author, boxOpen, toggleBox, position }) => {
	/* Constants */
	const title = author.username;
	const subtitle = author.email;

	/* Render */
	return (
		<Box renderOnBody={false} {...{ title, subtitle, boxOpen, toggleBox, user: author, position }}>
			{comment}
		</Box>
	);
};
