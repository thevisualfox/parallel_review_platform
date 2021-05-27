/* Packages */
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CircularProgress from '@material-ui/core/CircularProgress';

/* Animations */
import { SCALE_FADE } from '../../animations';

export default function LoadingWrapper({ loading, children, loaderSize = 40, classes = {} }) {
	/* Constants */
	const { loaderClasses = 'position-absolute d-flex', defaultClasses = '' } = classes;

	/* Render */
	return (
		<AnimatePresence initial={false}>
			{loading ? (
				<motion.div key="loader" className={loaderClasses} {...SCALE_FADE}>
					<CircularProgress color="inherit" size={loaderSize} />
				</motion.div>
			) : (
				<motion.div key="default" className={defaultClasses} {...SCALE_FADE}>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
}
