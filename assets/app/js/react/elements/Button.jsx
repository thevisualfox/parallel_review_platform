/* Components */
import { motion } from 'framer-motion';
import React from 'react';
import { LoadingWrapper } from '../common';

export default function Button({
	title,
	type = 'button',
	theme = 'secondary',
	size = 'sm',
	extensionClasses = '',
	onClick = () => {},
	isLoading = false,
}) {
	/* Render */
	return (
		<motion.button
			layout
			className={`btn btn-${size} btn-${theme} ${extensionClasses} d-flex align-items-center`}
			{...{ type, onClick }}
			style={{ height: 35 }}>
			<LoadingWrapper
				loading={isLoading}
				loaderSize={16}
				classes={{ loaderClasses: 'position-absolute d-flex text-secondary' }}>
				<span className="btn__text">{title}</span>
			</LoadingWrapper>
		</motion.button>
	);
}
