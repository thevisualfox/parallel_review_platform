/* Packages */
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { motion } from 'framer-motion';

/* Components */
import { Editable } from '../editable';

/* Assets */
import checkIcon from 'icons/check.svg';

/* Animations */
import { FADE_IN } from '../../common/animations';
import { editProjectImage } from '../../api';

export default function ProjectDetailImage({ projectImage, projectId, selected, updateSelected }) {
	/* Constants */
	const { id: projectImageId, title, image } = projectImage;

	/* Render */
	return (
		<article className={`card card--link card--product ${selected.includes(projectImageId) && 'is-selected'}`}>
			<Link to={`/projects/${projectId}/review/${projectImageId}`} title={title}>
				<div className="card__image border m-2">
					<img className="card-img-top" src={image} srcSet={`${image} 2x`} alt={title} />
				</div>
			</Link>
			<div className="card-body">
				<Editable
					inputType="title"
					projectId={projectId}
					content={title}
					mutation={editProjectImage}
					mutationId={projectImageId}>
					<motion.p {...FADE_IN} className="mb-0">
						{title}
					</motion.p>
				</Editable>
			</div>
			<div className="card__select">
				<div
					className="card__select-toggle"
					onClick={(event) => {
						event.preventDefault();
						updateSelected(projectImageId);
					}}>
					<ReactSVG wrapper="svg" className="card__select-icon icon icon--8" src={checkIcon} />
				</div>
			</div>
		</article>
	);
}
