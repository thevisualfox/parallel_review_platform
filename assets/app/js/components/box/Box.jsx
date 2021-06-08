/* Packages */
import React from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactSVG } from 'react-svg';

/* Components */
import { User } from '../../components';

/* Animations */
import { FADE_IN, FADE_IN_UP } from '../../animations';

/* Assets */
import closeIcon from 'icons/close.svg';

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
	const { left = 0, top = 0 } = position;
	const animation = animate ? { ...FADE_IN_UP } : {};

	/* TODO: escape event listener */
	const render = () => (
		<AnimatePresence>
			{boxOpen && (
				<motion.div
					ref={boxRef}
					transition={{ duration: 0.2 }}
					className={`box ${renderOnBody && 'box--center'} ${extensionClasses}`}
					style={{ '--left': left, '--top': top }}>
					{renderOnBody && <motion.div className="box-overlay" {...FADE_IN} onClick={toggleBox} />}
					<motion.div key="box-content" className="box__content border p-5" {...animation}>
						<div className="box__header d-flex align-items-start">
							<div className="d-flex align-items-center w-100">
								{user && <User {...{ user }} size="xl" />}
								<div className={`d-flex flex-column w-100 ${user && 'ml-2'}`}>
									<div className="d-flex align-items-center">
										<p className="text--lg mb-0">{title}</p>
										<button
											type="button"
											className="custom-modal__close btn btn-link ml-auto"
											onClick={toggleBox}>
											<ReactSVG wrapper="svg" className="icon icon--12" src={closeIcon} />
										</button>
									</div>
									{(SubtitleComponent || subtitle) && (
										<p className="text-muted--60 mb-0 text--sm">
											{SubtitleComponent ? <SubtitleComponent /> : subtitle}
										</p>
									)}
								</div>
							</div>
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
