/* Packages */
import React from 'react';
import { ReactSVG } from 'react-svg';

/* Assets */
import closeIcon from 'icons/close.svg';

export default function ModalHeader({ title, subtitle, toggleModal }) {
	/* Render */
	return (
		<div className="custom-modal__header d-flex align-items-start">
			<div className="d-flex align-items-center w-100">
				<div className="d-flex flex-column w-100">
					<div className="d-flex align-items-center">
						<p className="custom-modal__title">{title}</p>
						<button
							type="button"
							className="custom-modal__close btn btn-link ml-auto"
							onClick={toggleModal}>
							<ReactSVG wrapper="svg" className="icon icon--12" src={closeIcon} />
						</button>
					</div>
					{subtitle && <p className="custom-modal__subtitle">{subtitle}</p>}
				</div>
			</div>
		</div>
	);
}
