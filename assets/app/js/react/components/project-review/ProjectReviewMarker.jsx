/* Packages */
import React, { useContext } from 'react';
import { motion } from 'framer-motion';

/* Context */
import StaticContext from '../../context';

/* Animations */
import { SCALE_FADE } from '../../common/animations';

export default function ProjectReviewMarker({ xPercent, yPercent, author }) {
	/* Hooks */
	const { currentUser } = useContext(StaticContext);
	const user = author ? author : currentUser;

	/* Render */
	return (
		<motion.div
			key={[xPercent, yPercent]}
			{...SCALE_FADE}
			className="review__marker icon-wrapper icon-wrapper--secondary"
			style={{
				'--x': xPercent,
				'--y': yPercent,
				'--theme': `${user.userColor}`,
				'--size': 13,
			}}
		/>
	);
}
