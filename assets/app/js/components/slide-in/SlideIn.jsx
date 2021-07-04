/* Packages */
import React from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

/* Animations */
import { FADE_IN, TRANSFORM_UP } from '../../animations';

export default function SlideIn({ toggleSlideIn, children, domElement, variant = 'default' }) {
	const render = () => (
		<div key="slide-in" className={`slide-in slide-in--${variant}`}>
			<motion.div className="slide-in__overlay" onClick={toggleSlideIn} {...FADE_IN} />
			<motion.article key="slide-in__content" className="slide-in__content" {...TRANSFORM_UP}>
				<div className="container-fluid d-flex flex-grow-1">{children}</div>
			</motion.article>
		</div>
	);

	/* Render */
	if (domElement) {
		return createPortal(render(), domElement);
	}

	return render();
}
