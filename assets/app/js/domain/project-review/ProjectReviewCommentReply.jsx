/* Packages */
import React, { useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

/* Components */
import { User, Button } from '../../components';
import { UserInfo } from '../../components/users/User';

/* Context */
import { StaticContext, ReviewContext } from '../../context';

/* Domain */
import ProjectReviewCommentMentions from './ProjectReviewCommentMentions';

/* Api */
import { addReply, QUERY_KEYS } from '../../api';

export default function ProjectReviewCommentReply({ replyTo, commentId, setReplyToUser }) {
	/* State */
	const [reply, setReply] = useState(`@[${replyTo.display}]{${replyTo.id}} `);
	const [mentions, setMentions] = useState([replyTo.id]);

	/* Hooks */
	const { currentUser } = useContext(StaticContext);
	const queryClient = useQueryClient();
	const { projectImageId } = useContext(ReviewContext);

	/* Mutations */
	const addReplyMutation = useMutation(addReply, {
		onSuccess: () => {
			queryClient.invalidateQueries([QUERY_KEYS.PROJECT_IMAGE_BY_ID, parseInt(projectImageId)]);
			setReplyToUser(null);
		},
	});

	/* Render */
	return (
		<form
			className="reply"
			onSubmit={(event) => {
				event.preventDefault();
				addReplyMutation.mutate({
					commentId: commentId,
					reply: reply,
					mentioned: mentions,
				});
			}}>
			<div className="d-flex align-items-center">
				<User {...{ user: currentUser }} />
				<UserInfo
					{...{
						title: currentUser.display,
						subtitle: `/ ${currentUser.organisation}`,
						layout: 'horizontal',
						size: 'sm',
					}}
				/>
			</div>
			<div className="position-relative">
				<ProjectReviewCommentMentions {...{ comment: reply, setComment: setReply, mentions, setMentions }} />
				<Button
					extensionClasses="form-control-btn"
					type="submit"
					contentType="icon"
					theme="default"
					{...{ isLoading: addReplyMutation.isLoading }}
				/>
			</div>
		</form>
	);
}
