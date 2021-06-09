/* Packages */
import React from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

/* Domain */
import ModalHeader from './ModalHeader';

/* Animations */
import { FADE_IN, FADE_IN_UP } from '../../animations';

/* Hooks */
import { useCloseOnEsc } from '../../hooks';

export default function Modal({
	title,
	subtitle,
	modalOpen,
	toggleModal,
	children,
	renderOnBody = true,
	extensionClasses,
	components = {},
}) {
	/* Constants */
	const { HeaderComponent = ModalHeader } = components;

	/* Hooks */
	useCloseOnEsc(modalOpen, toggleModal);

	const render = () => (
		<AnimatePresence>
			{modalOpen && (
				<div className={`custom-modal custom-modal--center ${extensionClasses}`}>
					<motion.div className="custom-modal-overlay" {...FADE_IN} onClick={toggleModal} />
					<motion.div
						key="custom-modal-content"
						className="custom-modal__content border p-5"
						{...FADE_IN_UP()}>
						<HeaderComponent {...{ title, subtitle, toggleModal }} />
						<div className="custom-modal__body d-flex mt-4">{children}</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);

	/* Render */
	if (renderOnBody) {
		return createPortal(render(), document.body);
	}

	return render();
}
