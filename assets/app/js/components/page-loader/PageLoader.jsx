/* Packages */
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

/* Animations */
import { FADE_IN } from '../../animations';

export default function PageLoader({ isLoading, children }) {
	/* Render */
	return (
		<AnimatePresence>
			{isLoading ? (
				<motion.div {...FADE_IN}>
					<LinearProgress color="secondary" />
				</motion.div>
			) : (
				<div key="children">{children}</div>
			)}
		</AnimatePresence>
	);
}
