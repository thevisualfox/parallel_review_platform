/* Packages */
import React from 'react';

export default function ProjectReviewCanvas({ title, image }) {
	/* render */
	return (
		<div className="mx-n12 mb-n12 mt-12">
			<img className="img fluid w-100" src={image} srcSet={`${image} 2x`} alt={title}  />
		</div>
	);
}
