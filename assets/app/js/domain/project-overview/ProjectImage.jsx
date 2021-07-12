/* Packages */
import React from 'react';
import { ReactSVG } from 'react-svg';

/* Assets */
import addImageIcon from 'icons/add_image.svg';

/* Components */
import { Image } from '../../components';

export default function ProjectImage({ projectImages }) {
	/* Constants */
	const { phase = {}, title } = projectImages[0] || {};

	/* Render */
	return (
		<div className="card__image border m-2">
			{phase.image && (
				<Image
					className="card-img-top"
					src={phase.image.thumbnail}
					srcSet={`${phase.image.thumbnailRetina} 2x`}
					alt={title}
				/>
			)}
			{!phase.image && <ReactSVG wrapper="svg" className="icon icon--48 text-muted--40" src={addImageIcon} />}
		</div>
	);
}
