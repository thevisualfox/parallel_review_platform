/* Packages */
import React from 'react';
import { Link } from 'react-router-dom';

/* Components */
import { ReactSVG } from 'react-svg';

/* Assets */
import checkIcon from 'icons/check.svg';

export default function ProjectDetailImage({ projectImage, selected, updateSelected }) {
	/* Constants */
	const { id, title, image } = projectImage;

	/* Render */
	return (
		<Link
			to={`${title}`}
			title={title}
			className={`card card--link card--product ${selected.includes(id) && 'is-selected'}`}>
			<div className="card__image border m-2">
				<img className="card-img-top" src={image} srcSet={`${image} 2x`} alt={title} />
			</div>
			<div className="card-body">
				<p className="mb-2">{title}</p>
			</div>
			<div className="card__select">
				<div
					className="card__select-toggle"
					onClick={(event) => {
						event.preventDefault();
						updateSelected(id);
					}}>
					<ReactSVG wrapper="svg" className="card__select-icon icon icon--8" src={checkIcon} />
				</div>
			</div>
		</Link>
	);
}
