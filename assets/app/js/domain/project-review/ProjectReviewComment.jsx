/* Packages */
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { FADE_IN_UP } from '../../animations';

/* Components */
import { User } from '../../components';

/* Domain */
import ProjectReviewMarker from './ProjectReviewMarker';

/* Assets */
import closeIcon from 'icons/close.svg';

/* Services */
import { calcCommentPos } from './services';

/* Hooks */
import { useCloseOnEsc } from '../../hooks';

export default function ProjectReviewComment({ id, author, commentIndex, position, toggleCommentAddOpen, ...rest }) {
	/* Constants */
	const { xPercent, yPercent } = position;

	/* State */
	const [commentOpen, setCommentOpen] = useState(false);

	/* Callbacks */
	const toggleComment = () => {
		if (!commentOpen) toggleCommentAddOpen();
		setCommentOpen(!commentOpen);
	};

	/* Hooks */
	useCloseOnEsc(commentOpen, setCommentOpen);

	/* Render */
	return (
		<ProjectReviewMarker
			{...{ xPercent, yPercent, author, commentIndex: commentIndex + 1, commentOpen, toggleComment }}>
			<AnimatePresence>
				{commentOpen && <Comment key={id} {...{ author, commentOpen, toggleComment, position, ...rest }} />}
			</AnimatePresence>
		</ProjectReviewMarker>
	);
}

const Comment = ({ comment, author, created, toggleComment, position, reviewRef, globalUsers }) => {
	/* State */
	const [transformedPos, setTransformedPos] = useState(position);

	/* Refs */
	const boxRef = useRef();

	/* Effects */
	useEffect(() => {
		if (position) {
			setTransformedPos(() => {
				position.reviewPos = reviewRef.current.getBoundingClientRect();
				return calcCommentPos(boxRef, position);
			});
		}
	}, [position]);

	const renderComment = () => {
		const usersRegex = /@\[[^\]]*\]\{[0-9]+\}/gi;
		const usersArray = [...comment.matchAll(usersRegex)];
		const comments = comment.split(/@\[[^\]]*\]\{[0-9]+\}/gi);

		return (
			<p>
				{comments.map((comment, commentIndex) => {
					let user;

					if (commentIndex in usersArray) {
						user = globalUsers.find((user) => usersArray[commentIndex][0].includes(user.display));
					}

					return (
						<>
							<span key={comment}>{`${comment} `}</span>{' '}
							{user && (
								<>
									<span
										key={user.id}
										className="mentions__mention px-1"
										style={{ '--theme': user.userColor }}>
										<span>@{user.display}</span>
									</span>{' '}
								</>
							)}
						</>
					);
				})}
			</p>
		);
	};

	/* Render */
	return (
		<motion.div
			className="review__custom-modal custom-modal"
			style={{ '--left': transformedPos.left, '--top': transformedPos.top }}>
			<motion.div key="custom-modal-content" className="custom-modal__content border p-5" {...FADE_IN_UP(50)}>
				<div className="custom-modal__header d-flex align-items-start">
					<div className="d-flex align-items-center w-100">
						<User {...{ user: author }} size="xl" />
						<div className="d-flex flex-column w-100 ml-2">
							<div className="d-flex align-items-center">
								<p className="text--lg mb-0">{author.display}</p>
								<button
									type="button"
									className="custom-modal__close btn btn-link ml-auto"
									onClick={toggleComment}>
									<ReactSVG wrapper="svg" className="icon icon--12" src={closeIcon} />
								</button>
							</div>
							<p className="text-muted--60 mb-0 text--sm">{author.organisation}</p>
						</div>
					</div>
				</div>
				<div className="custom-modal__body d-flex mt-4">
					<div className="d-flex flex-column">
						{renderComment()}
						<div className="d-flex align-items-center mt-2">
							<p className="text-muted--60 mb-0 hr-2 text--sm">{created}</p>
							<p className="text-muted--60 mb-0 hr-2 text--sm font-weight-normal">7 agree</p>
							<button className="btn btn-link text-muted--60 mb-0 hr-2 text--sm font-weight-normal">
								<span className="btn-text text-white">Reply</span>
							</button>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};
