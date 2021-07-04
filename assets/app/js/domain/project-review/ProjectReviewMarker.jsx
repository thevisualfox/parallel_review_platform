/* Packages */
import React, { useContext } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { motion } from 'framer-motion';

/* Animations */
import { SCALE_FADE } from '../../animations';

/* Context */
import StaticContext from '../../context/mainContext';

export default function ProjectReviewMarker({
	xPercent,
	yPercent,
	author,
	commentIndex,
	commentOpen,
	toggleComment,
	children,
}) {
	/* Hooks */
	const { currentUser } = useContext(StaticContext);
	const user = author ? author : currentUser;

	/* Render */
	return (
		<ClickAwayListener
			onClickAway={() => {
				if (commentOpen) toggleComment();
			}}>
			<motion.div
				layout
				transition={{ duration: 0.1 }}
				className="review__interaction"
				style={{
					'--x': xPercent,
					'--y': yPercent,
				}}>
				<motion.button
					{...SCALE_FADE}
					className="review__marker icon-wrapper icon-wrapper--secondary btn btn-link text-reset"
					style={{ '--theme': `${user.userColor}` }}
					onClick={toggleComment}>
					{commentIndex && <span className="text--xs">{commentIndex}</span>}
				</motion.button>
				<div>{children}</div>
			</motion.div>
		</ClickAwayListener>
	);
}
