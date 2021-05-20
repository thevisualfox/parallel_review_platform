/* Packages */
import React from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactSVG } from 'react-svg';

/* Animations */
import { FADE_IN, FADE_IN_UP } from './animations';

/* Assets */
import closeIcon from 'icons/close.svg';

/* Components */
import { User } from '../components/users';

export default function Box({
	title,
	subtitle,
	SubtitleComponent,
	boxOpen,
	toggleBox,
	children,
	user,
	position = {},
	renderOnBody = true,
	boxRef,
	extensionClasses,
	animate = true,
}) {
	/* Constants */
	const { x = 0, y = 0 } = position;
	const animation = animate ? { ...FADE_IN_UP } : {};

	/* TODO: escape event listener */
	const render = () => (
		<AnimatePresence>
			{boxOpen && (
				<motion.div
					ref={boxRef}
					layout
					transition={{ duration: 0.2 }}
					className={`box ${renderOnBody && 'box--center'} ${extensionClasses}`}
					style={{ '--x': x, '--y': y }}>
					{renderOnBody && <motion.div className="box-overlay" {...FADE_IN} onClick={toggleBox} />}
					<motion.div key="box-content" className="box__content border p-5" {...animation}>
						<div className="box__header d-flex align-items-start">
							<div className="d-flex align-items-center">
								{user && <User {...{ user }} size="xl" />}
								<div className={`d-flex flex-column ${user && 'ml-3'}`}>
									<p className="text--lg mb-0">{title}</p>
									{(SubtitleComponent || subtitle) && (
										<p className="text-muted--60 mb-0">
											{SubtitleComponent ? <SubtitleComponent /> : subtitle}
										</p>
									)}
								</div>
							</div>
							<button
								type="button"
								className="custom-modal__close btn btn-link ml-auto"
								onClick={toggleBox}>
								<ReactSVG wrapper="svg" className="icon icon--12" src={closeIcon} />
							</button>
						</div>
						<div className="box__body d-flex mt-4">{children}</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);

	/* Render */
	if (renderOnBody) {
		return createPortal(render(), document.body);
	}

	return render();
}
