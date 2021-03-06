/* Packages */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { motion } from 'framer-motion';
import { ReactSVG } from 'react-svg';

/* Components */
import { Button, User } from '../../components';

/* Domain */
import ProjectReviewCommentMentions from './ProjectReviewCommentMentions';

/* Assets */
import closeIcon from 'icons/close.svg';

/* Services */
import { calcCommentPos } from './services';

/* Context */
import StaticContext from '../../context/mainContext';

/* Api */
import { QUERY_KEYS, addComment } from '../../api';

/* Animations */
import { FADE_IN_UP } from '../../animations';

/* Hooks */
import { useCloseOnEsc } from '../../hooks';

/* Context */
import { ReviewContext } from '../../context';

export default function ProjectReviewCommentAdd({ markerPos, phaseId, toggleCommentAddOpen }) {
	/* Refs */
	const formRef = useRef();
	const inputRef = useRef();
	const modalRef = useRef();

	/* Constants */
	const { left = '30px', top = '30px' } = calcCommentPos(modalRef, markerPos);

	/* State */
	const [comment, setComment] = useState('');
	const [mentions, setMentions] = useState([]);

	/* Effects */
	useEffect(() => {
		inputRef?.current?.focus();
	}, [markerPos]);

	/* Hooks */
	useCloseOnEsc(markerPos, toggleCommentAddOpen);
	const { currentUser: user } = useContext(StaticContext);
	const queryClient = useQueryClient();
	const { projectImageId } = useContext(ReviewContext);

	/* Mutations */
	const addCommentMutation = useMutation(addComment, {
		onSuccess: () => {
			queryClient.invalidateQueries([QUERY_KEYS.PROJECT_IMAGE_BY_ID, parseInt(projectImageId)]);
			toggleCommentAddOpen();
		},
	});

	/* Render */
	return (
		<motion.div
			layout
			transition={{ duration: 0.1 }}
			ref={modalRef}
			className="review__custom-modal custom-modal"
			style={{ '--left': left, '--top': top }}>
			<motion.div key="custom-modal-content" className="custom-modal__content border p-5" {...FADE_IN_UP(50)}>
				<div className="custom-modal__header d-flex align-items-start">
					<div className="d-flex align-items-center w-100">
						<User {...{ user }} size="xl" />
						<div className="d-flex flex-column w-100 ml-3">
							<div className="d-flex align-items-center">
								<p className="text--lg mb-0 lh--md">Add a comment</p>
								<button
									type="button"
									className="custom-modal__close btn btn-link ml-auto"
									onClick={toggleCommentAddOpen}>
									<ReactSVG wrapper="svg" className="icon icon--12" src={closeIcon} />
								</button>
							</div>
							<p className="mb-0 text--md lh--md">
								<span className="text-muted--60">Comment or</span>
								<span className="text-secondary"> @mention </span>{' '}
								<span className="text-muted--60">someone</span>
							</p>
						</div>
					</div>
				</div>
				<div className="custom-modal__body d-flex mt-4">
					<form
						ref={formRef}
						className="d-flex flex-column align-items-center flex-grow-1"
						onSubmit={(event) => {
							event.preventDefault();
							if (comment.length > 0) {
								addCommentMutation.mutate({
									userId: user.id,
									phaseId: phaseId,
									comment: comment.trim(),
									mentioned: mentions,
									position: markerPos,
								});
							}
						}}>
						<label className="sr-only" htmlFor="comment">
							Add a comment
						</label>
						<div className="position-relative w-100">
							<ProjectReviewCommentMentions
								{...{ inputRef, comment, setComment, mentions, setMentions, autoFocus: true }}
							/>
							<Button
								extensionClasses="form-control-btn"
								type="submit"
								contentType="icon"
								theme="default"
								{...{ isLoading: addCommentMutation.isLoading }}
							/>
						</div>
					</form>
				</div>
			</motion.div>
		</motion.div>
	);
}
