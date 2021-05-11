/* Packages */
import React, { useContext, useRef, useState } from 'react';
import { TextareaAutosize } from '@material-ui/core';
import { motion } from 'framer-motion';

/* Animations */
import { SCALE_FADE } from '../../common/animations';

/* Components */
import { Box } from '../../common';

/* Helpers */
import { calcBoxPosition } from '../../helpers';

/* Context */
import StaticContext from '../../context';
import { Button } from '../../elements';

export default function ProjectReviewCanvas({ title, phases = [] }) {
	/* Constants */
	const { image } = phases[phases.length - 1] || {};

	/* Refs */
	const reviewRef = useRef();

	/* State */
	const [commentPosition, setCommentPosition] = useState();
	const [commentBoxOpen, setCommentBoxOpen] = useState(false);

	/* Callbacks */
	const toggleCommentBox = () => {
		setCommentBoxOpen(!commentBoxOpen);
		setCommentPosition(null);
	};

	const openCommentBox = ({ clientX, clientY }) => {
		const { top } = reviewRef?.current.getBoundingClientRect();

		setCommentPosition({ x: clientX, y: clientY - top, offset: top });
		setCommentBoxOpen(true);
	};

	/* render */
	return (
		<div ref={reviewRef} className="review position-relative mx-n12 mb-n12 mt-12">
			<img
				className="review__image img-fluid w-100"
				src={image}
				srcSet={`${image} 2x`}
				alt={title}
				onClick={openCommentBox}
			/>
			{commentPosition && <Marker {...{ ...commentPosition }} />}
			<CommentBox {...{ ...commentPosition, commentBoxOpen, toggleCommentBox }} />
		</div>
	);
}

const Marker = ({ x, y }) => {
	/* Hooks */
	const { currentUser } = useContext(StaticContext);

	/* Constants */
	const cursorOffset = 6;

	/* Render */
	return (
		<motion.div
			key={[x, y]}
			{...SCALE_FADE}
			className="review__marker icon-wrapper icon-wrapper--secondary"
			style={{
				'--x': x - cursorOffset,
				'--y': y - cursorOffset,
				'--theme': `${currentUser.userColor}`,
				'--size': 13,
			}}
		/>
	);
};

const CommentBox = ({ x, y, offset, commentBoxOpen: boxOpen, toggleCommentBox: toggleBox }) => {
	/* Constants */
	const title = 'Add a comment';
	const position = calcBoxPosition(x, y, offset);

	/* Refs */
	const formRef = useRef();

	/* Hooks */
	const { currentUser: user } = useContext(StaticContext);

	/* Components */
	const SubtitleComponent = () => (
		<span>
			Comment or <span className="text-secondary"> @mention </span> someone
		</span>
	);

	/* Render */
	return (
		<Box renderOnBody={false} {...{ title, SubtitleComponent, boxOpen, toggleBox, position, user }}>
			<form
				ref={formRef}
				className="d-flex flex-column align-items-center flex-grow-1"
				onSubmit={(event) => {
					event.preventDefault();
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
};
