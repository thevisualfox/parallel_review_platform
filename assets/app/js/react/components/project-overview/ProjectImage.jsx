/* Packages */
import React from 'react';
import { ReactSVG } from 'react-svg';

/* Assets */
import addImageIcon from 'icons/add_image.svg';

export default function ProjectImage({ projectImages }) {
	/* Constants */
	const { phases = [], title } = projectImages[0] || {};
	const { image } = phases[phases.length - 1] || {};

	/* Render */
	return (
		<div className="card__image border m-2">
			{image && <img className="card-img-top" src={image} srcSet={`${image} 2x`} alt={title} />}
			{!image && <ReactSVG wrapper="svg" className="icon icon--48 text-muted--40" src={addImageIcon} />}
		</div>
	);
}
