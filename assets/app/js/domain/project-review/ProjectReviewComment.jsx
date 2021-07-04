/* Packages */
import React, { useState } from 'react';

/* Components*/
import { User, UserInfo } from '../../components';

export default function ProjectReviewComment({
	comment: content,
	commentIndex,
	globalUsers,
	setReplyToUser,
	renderAuthor = false,
}) {
	/* Contants */
	const { author, created, comment, comments } = content;

	/* State */
	const [showReplies, setShowReplies] = useState(false);

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
						user = globalUsers.find((user) => usersArray[commentIndex][0].includes(user.display));
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
			<div className="comment">
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
							<div
								className="ml-auto icon-wrapper icon-wrapper--secondary">
								<span className="text--sm text-secondary">{commentIndex + 1}</span>
							</div>
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
									{...{ comment, globalUsers, setReplyToUser, renderAuthor: true }}
								/>
							);
						})}
					</div>
				)}
			</div>
		</>
	);
}
