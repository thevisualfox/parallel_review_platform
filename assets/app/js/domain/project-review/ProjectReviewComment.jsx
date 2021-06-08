/* Packages */
import React, { useEffect, useRef, useState } from 'react';

/* Components */
import { Box } from '../../components';

/* Domain */
import ProjectReviewMarker from './ProjectReviewMarker';

/* Services */
import { calcCommentPos } from './services';

export default function ProjectReviewComment({ author, comment, position, commentIndex, reviewRef, globalUsers }) {
	/* Constants */
	const { xPercent, yPercent } = position;
	/* State */
	const [boxOpen, setBoxOpen] = useState(false);

	/* Callbacks */
	const toggleBox = () => setBoxOpen(!boxOpen);

	/* Render */
	return (
		<ProjectReviewMarker {...{ xPercent, yPercent, author, commentIndex, toggleComment: toggleBox }}>
			{boxOpen && <Comment {...{ comment, author, boxOpen, toggleBox, position, reviewRef, globalUsers }} />}
		</ProjectReviewMarker>
	);
}

const Comment = ({ comment, author, boxOpen, toggleBox, position, reviewRef, globalUsers }) => {
	/* Constants */
	const title = author.display;
	const subtitle = author.organisation;

	/* State */
	const [transformedPos, setTransformedPos] = useState(position);

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

	const renderComment = () => {
		const usersRegex = /@\[[^\]]*\]\{[0-9]+\}/gi;
		const usersArray = [...comment.matchAll(usersRegex)];
		const comments = comment.split(/@\[[^\]]*\]\{[0-9]+\}/gi);

		return (
			<p>
				{comments.map((comment, commentIndex) => {
					let user;

					if (commentIndex in usersArray) {
						user = globalUsers.find((user) => usersArray[commentIndex][0].includes(user.display));
					}

					return (
						<>
							<span key={comment}>{`${comment} `}</span>{' '}
							{user && (
								<>
									<span
										key={user.id}
										className="mentions__mention px-1"
										style={{ '--theme': user.userColor }}>
										<span>@{user.display}</span>
									</span>{' '}
								</>
							)}
						</>
					);
				})}
			</p>
		);
	};

	/* Render */
	return (
		<Box
			renderOnBody={false}
			animate={false}
			extensionClasses="review__box"
			{...{ title, subtitle, boxOpen, toggleBox, user: author, position: transformedPos, boxRef }}>
			<div className="d-flex flex-column">
				{renderComment()}
				<div className="d-flex align-items-center mt-2">
					<p className="text-muted--60 mb-0 hr-2 text--sm">3 days ago</p>
					<p className="text-muted--80 mb-0 hr-2 text--sm">7 people agree</p>
					<p className="text-muted--80 mb-0 hr-2 text--sm">reply</p>
				</div>
			</div>
		</Box>
	);
};
