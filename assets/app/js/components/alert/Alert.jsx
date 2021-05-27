/* Packages */
import React from 'react';
import { ReactSVG } from 'react-svg';

/* Assts */
import closeIcon from 'icons/close-white.svg';
import warningIcon from 'icons/warning.svg';
import errorIcon from 'icons/danger.svg';
import successIcon from 'icons/success.svg';

export default function Alert({ message, appearance, closeToast }) {
	/* Constants */
	const appearanceTypes = {
		warning: {
			title: 'Warning',
			icon: warningIcon,
		},
		danger: {
			title: 'Error',
			icon: errorIcon,
		},
		success: {
			title: 'Success',
			icon: successIcon,
		},
	};

	/* Render */
	return (
		<div className="alert alert--notification" role="alert" data-alert>
			<div className="d-flex align-items-center w-100">
				<div className={`alert__icon-wrapper alert__icon-wrapper--${appearance} mr-2`}>
					<ReactSVG
						wrapper="svg"
						className="alert__icon icon icon--12"
						src={appearanceTypes[appearance].icon}
					/>
				</div>
				<p className="mb-0">{appearanceTypes[appearance].title}</p>
				<button className="alert__btn btn btn-link ml-auto" type="button" onClick={closeToast}>
					<ReactSVG wrapper="svg" className="icon icon--10" src={closeIcon} />
				</button>
			</div>
			<span className="alert__message text--xs text-muted--70 mr-lg-8">{message}</span>
		</div>
	);
}
