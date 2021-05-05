/* Packages */
import React from 'react';

/* Components */
import ProjectImage from './ProjectImage';
import { Users } from '../../../components/users';
import { ReactSVG } from 'react-svg';

/* Assets */
import checkIcon from 'icons/check.svg';

export default function Project({ project, selectedProjects, updateSelectedProjects }) {
	/* Constants */
	const { slug, title, projectImages, users, author, id } = project;

	/* Render */
	return (
		<a
			href={`projects/${slug}`}
			title={title}
			className={`card card--link card--product ${selectedProjects.includes(id) && 'is-selected'}`}>
			<div className="card__select">
				<div
					className="card__select-toggle"
					onClick={(event) => {
						event.preventDefault();
						updateSelectedProjects(id);
					}}>
					<ReactSVG wrapper="svg" className="card__select-icon icon icon--8" src={checkIcon} />
				</div>
			</div>
			<ProjectImage {...{ projectImages }} />
			<div className="card-body">
				<div className="d-flex flex-column">
					<p className="mb-2">{title ? title : 'Add a nice title'}</p>
					<div className="d-flex align-items-center">
						<Users {...{ users, project: { author }, layout: 'minimal' }} />
					</div>
				</div>
			</div>
		</a>
	);
}
