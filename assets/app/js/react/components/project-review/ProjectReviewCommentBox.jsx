/* Packages */
import React, { useContext, useRef } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useMutation, useQueryClient } from 'react-query';

/* Components */
import { Box } from '../../common';
import { Button } from '../../elements';

/* Context */
import StaticContext from '../../context';

/* Helpers */
import { calcBoxPos } from '../../helpers';

/* Api */
import { addComment } from '../../api/comment';
import { QUERY_KEYS } from '../../api';

export default function ProjectReviewCommentBox({ markerPos, boxOpen, toggleBox, phaseId, projectImageId }) {
	/* Refs */
	const formRef = useRef();
	const boxRef = useRef();

	/* Constants */
	const title = 'Add a comment';
	const position = calcBoxPos(boxRef, markerPos);

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
		<span>
			Comment or <span className="text-secondary"> @mention </span> someone
		</span>
	);

	/* Render */
	return (
		<Box renderOnBody={false} {...{ title, SubtitleComponent, boxOpen, toggleBox, position, user, boxRef }}>
			<form
				ref={formRef}
				className="d-flex flex-column align-items-center flex-grow-1"
				onSubmit={(event) => {
					event.preventDefault();
					addCommentMutation.mutate({ formRef, userId: user.id, phaseId, position });
				}}>
				<label className="sr-only" htmlFor="comment">
					{title}
				</label>
				<TextareaAutosize
					className="form-control form-control-sm form-control--text"
					id="comment"
					name="comment"
					type="text"
					placeholder="Say something nice..."
					autoFocus
				/>
				<Button title="Submit" extensionClasses="mt-4 w-50 justify-content-center" type="submit" />
			</form>
		</Box>
	);
}
