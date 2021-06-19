/* {ackages */
import React, { useRef } from 'react';
import { ReactSVG } from 'react-svg';

/* Components */
import { LoadingWrapper } from '../../components';

/* Assets */
import checkIcon from 'icons/check-circle.svg';

export default function Button({
	title,
	type = 'button',
	theme = 'secondary',
	size = 'sm',
	extensionClasses = '',
	onClick = () => {},
	isLoading = false,
	contentType = 'text',
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
			{contentType === 'text' ? <Text {...{ title, isLoading }} /> : <Icon {...{ isLoading }} />}
		</button>
	);
}

const Text = ({ title, isLoading }) => (
	<LoadingWrapper
		loading={isLoading}
		loaderSize={16}
		classes={{ loaderClasses: 'position-absolute d-flex text-secondary' }}>
		<span className="btn__text">{title}</span>
	</LoadingWrapper>
);

const Icon = ({ isLoading }) => (
	<div className="icon-wrapper icon-wrapper--secondary icon-wrapper--interactive">
		<LoadingWrapper
			loading={isLoading}
			loaderSize={14}
			classes={{ loaderClasses: 'position-absolute d-flex text-secondary', defaultClasses: 'd-flex' }}>
			<ReactSVG wrapper="svg" className="alert__icon icon icon--14 text-secondary" src={checkIcon} />
		</LoadingWrapper>
	</div>
);
