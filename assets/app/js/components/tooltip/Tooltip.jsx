/* Packages */
import React from 'react';
import { Tooltip as Tippy } from 'react-tippy';

export default function Tooltip({ children, ...props }) {
	return (
		<Tippy
			position="top"
			animation="shift"
			duration={150}
			distance={15}
			arrow
			arrowSize="small"
			trigger="click"
			{...props}
			style={{ display: 'flex' }}>
			{children}
		</Tippy>
	);
}
