/* Packages */
import React, { useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

/* Components */
import { User, Button } from '../../components';

/* Context */
import { StaticContext, ReviewContext } from '../../context';

/* Domain */
import ProjectReviewCommentMentions from './ProjectReviewCommentMentions';

/* Api */
import { addReply, QUERY_KEYS } from '../../api';

export default function ProjectReviewCommentReply({ replyTo, commentId }) {
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
			<hr className="my-3" />
			<User {...{ user: currentUser, showInfo: 'horizontal' }} />
			<ProjectReviewCommentMentions {...{ comment: reply, setComment: setReply, mentions, setMentions }} />
			<Button
				title="Submit"
				extensionClasses="mt-3 w-50 justify-content-center align-self-center"
				type="submit"
				{...{ isLoading: addReplyMutation.isLoading }}
			/>
		</form>
	);
}
