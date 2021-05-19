/* Packages */
import React, { useState } from 'react';

/* Components */
import { Box } from '../../common';
import ProjectReviewMarker from './ProjectReviewMarker';

export default function ProjectReviewComment({ author, comment, position }) {
	/* State */
	const [boxOpen, setBoxOpen] = useState(false);

	/* Callbacks */
	const toggleBox = () => setBoxOpen(!boxOpen);

	/* Render */
	return (
		<div onMouseEnter={toggleBox} onMouseLeave={toggleBox}>
			<ProjectReviewMarker {...{ xPercent: position.x, yPercent: position.y, author }} />
			<Comment {...{ comment, author, boxOpen, toggleBox, position }} />
		</div>
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
