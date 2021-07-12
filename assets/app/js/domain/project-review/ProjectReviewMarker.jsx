/* Packages */
import React, { useContext } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { motion } from 'framer-motion';

/* Animations */
import { SCALE_FADE } from '../../animations';

/* Context */
import StaticContext from '../../context/mainContext';

/* Components */
import { Tooltip } from '../../components';

export default function ProjectReviewMarker({
	xPercent,
	yPercent,
	author,
	commentIndex,
	commentOpen,
	toggleComment,
	commentFocused,
	children,
}) {
	/* Hooks */
	const { currentUser } = useContext(StaticContext);

	/* Constants */
	const user = author ? author : currentUser;
	const label = (commentIndex ?? 0) + 1;

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
				<Tooltip
					title={author?.display ?? 'Add comment'}
					open={(commentFocused ?? false) === commentIndex ?? false}>
					<motion.button
						{...SCALE_FADE}
						className="review__marker icon-wrapper icon-wrapper--secondary btn btn-link text-reset"
						style={{ '--theme': `${user.userColor}` }}
						onClick={toggleComment}>
						{label && <span className="text--xs">{label}</span>}
					</motion.button>
				</Tooltip>
				<div>{children}</div>
			</motion.div>
		</ClickAwayListener>
	);
}
