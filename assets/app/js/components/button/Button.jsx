/* {ackages */
import React, { useRef } from 'react';

/* Components */
import { LoadingWrapper } from '../../components';

export default function Button({
	title,
	type = 'button',
	theme = 'secondary',
	size = 'sm',
	extensionClasses = '',
	onClick = () => {},
	isLoading = false,
}) {
	/* Refs */
	const buttonRef = useRef();

	/* Constants */
	const buttonHeight = buttonRef.current?.getBoundingClientRect().height;

	/* Render */
	return (
		<button
			ref={buttonRef}
			className={`btn btn-${size} btn-${theme} ${extensionClasses} d-flex align-items-center`}
			style={{ height: buttonHeight }}
			{...{ type, onClick }}>
			<LoadingWrapper
				loading={isLoading}
				loaderSize={16}
				classes={{ loaderClasses: 'position-absolute d-flex text-secondary' }}>
				<span className="btn__text">{title}</span>
			</LoadingWrapper>
		</button>
	);
}
