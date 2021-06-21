/* Packages */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

/* Assets */
import chevronIcon from 'icons/chevron.svg';

/* Hooks */
import useEventListener from '../../hooks/useEventListener';

export default function ProjectReviewPagination({ phase, prevImage, nextImage }) {
	/* Hooks */
	const history = useHistory();
	useEventListener('keyup', handleKeyUp);

	function handleKeyUp(event) {
		if (event.key === 'ArrowLeft' && prevImage) history.push(prevImage.toString());
		if (event.key === 'ArrowRight' && nextImage) history.push(nextImage.toString());
	}

	/* Render */
	return (
		<div className="bar bar--pagination">
			<div className="container-fluid">
				<div className="row">
					<div className="col-4 d-flex justify-content-start">
						{prevImage && (
							<Link
								className="bar__btn btn btn-link text-reset d-flex align-items-center"
								to={prevImage.toString()}>
								<div className="icon-wrapper icon-wrapper--interactive icon-wrapper--secondary mr-2">
									<ReactSVG
										className="icon icon--10 icon--reversed text-secondary"
										src={chevronIcon}
									/>
								</div>
								<span className="btn-text text-white text-muted--70">Previous image</span>
							</Link>
						)}
					</div>
					<div className="col-4 d-flex justify-content-center">
						<p className="text-muted--70">Phase {phase}</p>
					</div>
					<div className="col-4 d-flex justify-content-end">
						{nextImage && (
							<Link
								className="bar__btn btn btn-link text-reset d-flex align-items-center"
								to={nextImage.toString()}>
								<span className="btn-text text-white text-muted--70">Next image</span>
								<div className="icon-wrapper icon-wrapper--interactive icon-wrapper--secondary ml-2">
									<ReactSVG className="icon icon--10 text-secondary" src={chevronIcon} />
								</div>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
