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
	center = true,
	extensionClasses,
	components = {},
	customAnimation,
}) {
	/* Constants */
	const { HeaderComponent = ModalHeader } = components;
	const animation = customAnimation ?? FADE_IN_UP();

	/* Hooks */
	useCloseOnEsc(modalOpen, toggleModal);

	const render = () => (
		<AnimatePresence>
			{modalOpen && (
				<div className={`custom-modal ${center && 'custom-modal--center'} ${extensionClasses}`}>
					{renderOnBody && <motion.div className="custom-modal-overlay" {...FADE_IN} onClick={toggleModal} />}
					<motion.div key="custom-modal-content" className="custom-modal__content border p-5" {...animation}>
						<HeaderComponent {...{ title, subtitle, toggleModal }} />
						<div className="custom-modal__body d-flex mt-2">{children}</div>
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
