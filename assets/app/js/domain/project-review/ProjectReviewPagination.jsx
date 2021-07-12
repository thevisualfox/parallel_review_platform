/* Packages */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { motion } from 'framer-motion';

/* Context */
import { ReviewContext } from '../../context';

/* Assets */
import chevronIcon from 'icons/chevron.svg';

/* Hooks */
import { useEventListener } from '../../hooks';

/* Animation */
import { FADE_IN } from '../../animations';

export default function ProjectReviewPagination({ allImages }) {
	/* Hooks */
	useEventListener('keyup', handleKeyUp);
	const history = useHistory();

	/* Context */
	const { projectImageId } = useContext(ReviewContext);

	/* Constants */
	const currentImage = allImages.indexOf(Number(projectImageId));
	const prevImage = allImages[currentImage === 0 ? allImages.length - 1 : currentImage - 1];
	const nextImage = allImages[currentImage === allImages.length - 1 ? 0 : currentImage + 1];

	function handleKeyUp(event) {
		if (event.key === 'ArrowLeft' && prevImage) navigate('prev');
		if (event.key === 'ArrowRight' && nextImage) navigate('next');
	}

	const navigate = (direction) => {
		if (direction === 'prev') history.push(prevImage.toString());
		if (direction === 'next') history.push(nextImage.toString());
	};

	return (
		allImages.length > 1 && (
			<motion.div key="pagination" {...FADE_IN} className="pagination">
				<div className="pagination__btn-wrapper pagination__btn-wrapper--prev">
					<button
						className="pagination__btn pagination__btn--prev btn btn-link text-reset"
						type="button"
						onClick={() => navigate('prev')}>
						<ReactSVG wrapper="svg" className="pagination__icon icon icon--12" src={chevronIcon} />
					</button>
				</div>
				<div className="pagination__btn-wrapper pagination__btn-wrapper--next">
					<button
						className="pagination__btn pagination__btn--next btn btn-link text-reset"
						type="button"
						onClick={() => navigate('next')}>
						<ReactSVG wrapper="svg" className="pagination__icon icon icon--12" src={chevronIcon} />
					</button>
				</div>
			</motion.div>
		)
	);
}
