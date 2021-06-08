/* Packages */
import React, { useContext, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

/* Components */
import { Box, Button } from '../../components';

/* Domain */
import ProjectReviewCommentMentions from './ProjectReviewCommentMentions';

/* Services */
import { calcCommentPos } from './services';

/* Context */
import StaticContext from '../../context/mainContext';

/* Api */
import { QUERY_KEYS, addComment } from '../../api';

export default function ProjectReviewCommentBox({ markerPos, boxOpen, toggleBox, phaseId, projectImageId }) {
	/* Refs */
	const formRef = useRef();
	const boxRef = useRef();

	/* State */
	const [comment, setComment] = useState('');
	const [mentions, setMentions] = useState([]);

	/* Constants */
	const title = 'Add a comment';
	const position = calcCommentPos(boxRef, markerPos);

	/* Hooks */
	const { currentUser: user } = useContext(StaticContext);
	const queryClient = useQueryClient();

	/* Mutations */
	const addCommentMutation = useMutation(addComment, {
		onSuccess: () => {
			queryClient.invalidateQueries([QUERY_KEYS.PROJECT_IMAGE_BY_ID, parseInt(projectImageId)]);
			toggleBox();
		},
	});

	/* Components */
	const SubtitleComponent = () => (
		<span className="mt-1 text--md">
			Comment or <span className="text-secondary"> @mention </span> someone
		</span>
	);

	/* Render */
	return (
		<Box
			renderOnBody={false}
			extensionClasses="review__box"
			{...{ title, SubtitleComponent, boxOpen, toggleBox, position, user, boxRef }}>
			<form
				ref={formRef}
				className="d-flex flex-column align-items-center flex-grow-1"
				onSubmit={(event) => {
					event.preventDefault();
					addCommentMutation.mutate({
						userId: user.id,
						phaseId: phaseId,
						comment: comment.trim(),
						mentioned: mentions,
						position: markerPos,
					});
				}}>
				<label className="sr-only" htmlFor="comment">
					{title}
				</label>
				<div className="position-relative w-100">
					<ProjectReviewCommentMentions {...{ comment, setComment, mentions, setMentions }} />
				</div>
				<Button
					title="Submit"
					extensionClasses="mt-4 w-50 justify-content-center"
					type="submit"
					{...{ isLoading: addCommentMutation.isLoading }}
				/>
			</form>
		</Box>
	);
}
