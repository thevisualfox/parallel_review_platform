/* Packages */
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { FADE_IN_UP } from '../../animations';

/* Components */
import { User } from '../../components';

/* Domain */
import ProjectReviewMarker from './ProjectReviewMarker';
import ProjectReviewComment from './ProjectReviewComment';
import ProjectReviewCommentReply from './ProjectReviewCommentReply';

/* Assets */
import closeIcon from 'icons/close.svg';

/* Services */
import { calcCommentPos } from './services';

/* Hooks */
import { useCloseOnEsc } from '../../hooks';

export default function ProjectReviewCommentModal({ comment, commentIndex, toggleCommentAddOpen, ...rest }) {
	/* Constants */
	const { position, author, id } = comment;
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
				{commentOpen && <CommentBox key={id} {...{ comment, toggleComment, ...rest }} />}
			</AnimatePresence>
		</ProjectReviewMarker>
	);
}

const CommentBox = ({ comment, toggleComment, reviewRef, ...rest }) => {
	/* Constants */
	const { position, author } = comment;

	/* State */
	const [transformedPos, setTransformedPos] = useState(position);
	const [replyToUser, setReplyToUser] = useState();

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

	/* Render */
	return (
		<motion.div
			className="review__custom-modal custom-modal"
			style={{ '--left': transformedPos.left, '--top': transformedPos.top }}>
			<motion.div key="custom-modal-content" className="custom-modal__content border p-5" {...FADE_IN_UP(50)}>
				<div className="custom-modal__header d-flex align-items-start">
					<div className="d-flex align-items-center w-100">
						<User {...{ user: author }} size="xl" />
						<div className="d-flex flex-column w-100 ml-3">
							<div className="d-flex align-items-center">
								<p className="text--lg mb-0 lh--md">{author.display}</p>
								<button
									type="button"
									className="custom-modal__close btn btn-link ml-auto"
									onClick={toggleComment}>
									<ReactSVG wrapper="svg" className="icon icon--12" src={closeIcon} />
								</button>
							</div>
							<p className="text-muted--60 mb-0 text--sm lh--xs">{author.organisation}</p>
						</div>
					</div>
				</div>
				<div className="custom-modal__body d-flex mt-4">
					<div className="d-flex flex-column w-100">
						<ProjectReviewComment {...{ comment, setReplyToUser, ...rest }} />
						{replyToUser && (
							<ProjectReviewCommentReply
								{...{
									replyTo: replyToUser,
									commentId: comment.id,
									setReplyToUser: setReplyToUser,
								}}
							/>
						)}
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};
