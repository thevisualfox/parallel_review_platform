/* Packages */
import React, { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { ReactSVG } from 'react-svg';
import { motion, AnimatePresence } from 'framer-motion';

/* Components*/
import { User, UserInfo } from '../../components';

/* Assets */
import checkIcon from 'icons/check.svg';

/* Api */
import { checkComment } from '../../api';

/* Animations */
import { SCALE_FADE } from '../../animations';

/* Context */
import { StaticContext } from '../../context';

export default function ProjectReviewComment({
	comment: content,
	commentIndex,
	projectUsers,
	setReplyToUser,
	renderAuthor = false,
	showInitialReplies = false,
	setCommentFocused = () => {},
}) {
	/* Context */
	const { userRole } = useContext(StaticContext);

	/* Contants */
	const { author, id, checked, created, comment, comments } = content;

	/* State */
	const [showReplies, setShowReplies] = useState(showInitialReplies);
	const [isChecked, setIsChecked] = useState(checked);

	/* Mutations */
	const checkCommentMutation = useMutation(checkComment);

	/* Render component */
	const renderComment = () => {
		const usersRegex = /@\[[^\]]*\]\{[0-9]+\}/gi;
		const usersArray = [...comment.matchAll(usersRegex)];
		const comments = comment.split(/@\[[^\]]*\]\{[0-9]+\}/gi);

		return (
			<p className="lh--md">
				{comments.map((comment, commentIndex) => {
					let user;

					if (commentIndex in usersArray) {
						user = projectUsers.find((user) => usersArray[commentIndex][0].includes(user.display));
					}

					return (
						<React.Fragment key={commentIndex}>
							<span className="comment__content">{`${comment} `}</span>{' '}
							{user && (
								<>
									<span
										className="comment__mention mentions__mention px-1"
										style={{ '--theme': user.userColor }}>
										<span>@{user.display}</span>
									</span>{' '}
								</>
							)}
						</React.Fragment>
					);
				})}
			</p>
		);
	};

	/* Render */
	return (
		<>
			<div
				className="comment"
				onMouseEnter={() => setCommentFocused(commentIndex)}
				onMouseLeave={() => setCommentFocused(null)}>
				{renderAuthor && (
					<div className="d-flex align-items-center mb-2">
						<User {...{ user: author }} />
						<UserInfo
							{...{
								title: author.display,
								subtitle: `/ ${author.organisation}`,
								layout: 'horizontal',
								size: 'sm',
							}}
						/>
						{typeof commentIndex !== 'undefined' && (
							<button
								className="btn btn-link ml-auto icon-wrapper icon-wrapper--hsl icon-wrapper--interactive text-decoration-none"
								style={{ '--theme': author.userColor }}
								onClick={() => {
									if (userRole !== 'admin') return;

									setIsChecked(!isChecked);
									checkCommentMutation.mutate({ commentId: id });
								}}>
								<AnimatePresence exitBeforeEnter>
									{isChecked && userRole === 'admin' ? (
										<motion.div key="checked" {...SCALE_FADE}>
											<ReactSVG wrapper="svg" className="icon icon--10" src={checkIcon} />
										</motion.div>
									) : (
										<motion.span key="not-checked" {...SCALE_FADE} className="text--xs">
											{commentIndex + 1}
										</motion.span>
									)}
								</AnimatePresence>
							</button>
						)}
					</div>
				)}
				{renderComment()}
				<div className="d-flex align-items-center mt-1">
					<p className="comment__created text-muted--60 mb-0 hr-2">{created}</p>
					<p className="comment__agree text-muted--60 mb-0 hr-2 font-weight-normal">7 agree</p>
					<button
						className="comment__reply-toggle btn btn-link text-muted--60 mb-0 hr-2 font-weight-normal"
						onClick={() => setReplyToUser(author)}>
						<span className="btn-text text-white">Reply</span>
					</button>
					{comments.length > 0 && (
						<button
							className="comment__replies-toggle btn btn-link text-muted--60 mb-0 hr-2 font-weight-normal ml-auto text-white"
							onClick={() => setShowReplies(!showReplies)}>
							{showReplies ? 'Hide' : 'Show'} {comments.length} replies
						</button>
					)}
				</div>
				{comments.length > 0 && showReplies && (
					<div className="comment__replies">
						{comments.map((comment) => {
							return (
								<ProjectReviewComment
									key={comment.id}
									{...{ comment, projectUsers, setReplyToUser, renderAuthor: true }}
								/>
							);
						})}
					</div>
				)}
			</div>
		</>
	);
}
