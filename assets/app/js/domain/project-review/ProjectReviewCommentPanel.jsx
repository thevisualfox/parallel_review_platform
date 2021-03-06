/* Packages */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactSVG } from 'react-svg';

/* Domain */
import ProjectReviewComment from './ProjectReviewComment';
import ProjectReviewCommentReply from './ProjectReviewCommentReply';

/* Animations */
import { SLIDE_IN } from '../../animations';

/* Assets */
import closeIcon from 'icons/close.svg';

/* Hooks */
import { useCloseOnEsc } from '../../hooks';

export default function ProjectReviewCommentPanel({
	comments,
	commentsPanelOpen,
	toggleCommentsPanel,
	projectUsers,
	setCommentFocused,
}) {
	/* Hooks */
	useCloseOnEsc(commentsPanelOpen, toggleCommentsPanel);

	/* Render */
	return (
		<motion.div {...SLIDE_IN} className="panel panel--comments">
			<div className="panel__body">
				<div className="d-flex align-items-baseline justify-content-between mb-6">
					<h5 className="text-capitalize">All comments</h5>
					<button type="button" className="panel__close btn btn-link ml-auto" onClick={toggleCommentsPanel}>
						<ReactSVG wrapper="svg" className="icon icon--12" src={closeIcon} />
					</button>
				</div>
				<div className="d-flex flex-column w-100">
					{comments?.map((comment, commentIndex) => {
						return (
							<CommentWithReply
								key={commentIndex}
								{...{ comment, commentIndex, projectUsers, setCommentFocused }}
							/>
						);
					})}
					{comments.length === 0 && <p className="text-muted--70">No comments yet</p>}
				</div>
			</div>
		</motion.div>
	);
}

const CommentWithReply = ({ comment, commentIndex, projectUsers, setCommentFocused }) => {
	/* State */
	const [replyToUser, setReplyToUser] = useState();

	return (
		<>
			<ProjectReviewComment
				{...{ comment, commentIndex, setReplyToUser, renderAuthor: true, projectUsers, setCommentFocused }}
			/>
			{replyToUser && (
				<ProjectReviewCommentReply
					{...{
						replyTo: replyToUser,
						commentId: comment.id,
						setReplyToUser: setReplyToUser,
					}}
				/>
			)}
		</>
	);
};
