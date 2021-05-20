/* Packages */
import React, { useContext } from 'react';
import { motion } from 'framer-motion';

/* Context */
import StaticContext from '../../context';

/* Animations */
import { SCALE_FADE } from '../../common/animations';

export default function ProjectReviewMarker({ xPercent, yPercent, author, commentIndex, children }) {
	/* Hooks */
	const { currentUser } = useContext(StaticContext);
	const user = author ? author : currentUser;

	/* Render */
	return (
		<motion.div
			layout
			transition={{ duration: 0.2 }}
			className="review__interaction"
			style={{
				'--x': xPercent,
				'--y': yPercent,
			}}>
			<motion.div
				{...SCALE_FADE}
				className="review__marker icon-wrapper icon-wrapper--secondary"
				style={{ '--theme': `${user.userColor}` }}>
				{commentIndex && <span>{commentIndex + 1}</span>}
				{children}
			</motion.div>
		</motion.div>
	);
}
