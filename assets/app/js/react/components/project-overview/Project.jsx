/* Packages */
import React from 'react';
import { Link } from 'react-router-dom';

/* Components */
import { ProjectImage } from './';
import { Users } from '../users';
import { ReactSVG } from 'react-svg';

/* Assets */
import checkIcon from 'icons/check.svg';

export default function Project({ project, selected, updateSelected }) {
	/* Constants */
	const { title, projectImages, users, author, id } = project;

	/* Render */
	return (
		<Link
			to={`projects/${id}`}
			title={title}
			className={`card card--link card--product ${selected.includes(id) && 'is-selected'}`}>
			<ProjectImage {...{ projectImages }} />
			<div className="card-body">
				<div className="d-flex flex-column">
					<p className="mb-2">{title ? title : 'Add a nice title'}</p>
					<div className="d-flex align-items-center">
						<Users {...{ users, project: { author }, layout: 'minimal' }} />
					</div>
				</div>
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
