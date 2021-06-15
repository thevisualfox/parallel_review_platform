/* Packages */
import React, { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { MentionsInput, Mention } from 'react-mentions';
import { ReactSVG } from 'react-svg';

/* Assets */
import addUserIcon from 'icons/add_user.svg';

/* Components */
import { UserAvatar, UserInfo } from '../../components/users/User';

/* Services */
import styleMentions from './services/styleMention';

/* Api */
import { QUERY_KEYS, fetchGobalUsers } from '../../api';

export default function ProjectReviewCommentMentions({
	comment,
	setComment,
	mentions,
	setMentions,
	autoFocus = false,
}) {
	/* Queries */
	const { data: globalUsers = [] } = useQuery(QUERY_KEYS.GLOBAL_USERS, fetchGobalUsers);

	/* Refs */
	const mentionRef = useRef();

	/* Effects */
	useEffect(() => {
		if (mentions.length > 0 && mentionRef?.current) styleMentions(globalUsers, mentionRef.current);
	}, [mentions, mentionRef?.current]);

	/* Render */
	return (
		<>
			<MentionsInput
				value={comment}
				className="mentions"
				id="comment"
				name="comment"
				placeholder="Say something nice..."
				onChange={(event) => setComment(event.target.value)}
				onClick={() => styleMentions(globalUsers)}
				inputRef={mentionRef}
				autoFocus={autoFocus}>
				<Mention
					trigger="@"
					data={globalUsers}
					renderSuggestion={Suggestion}
					allowSpaceInQuery
					appendSpaceOnAdd
					className="mentions__mention"
					displayTransform={(_, name) => ` @${name} `}
					markup="@[__display__]{__id__}"
					onAdd={(id) => setMentions((mentions) => [...mentions, id])}
				/>
			</MentionsInput>
		</>
	);
}

/* Custom Suggestion */
const Suggestion = (entry, query, highlighted, index, focused) => (
	<div className="mention__suggestion vr-3">
		<button className={`user user--select user--xl ${focused && 'is-focused'}`} type="button">
			<div className="d-flex align-items-center">
				<UserAvatar {...entry} />
				<UserInfo {...entry} />
				<div className="user__add text-secondary rounded-circle ml-auto">
					<ReactSVG wrapper="svg" className="user__add-icon icon icon--12 text-secondary" src={addUserIcon} />
				</div>
			</div>
		</button>
	</div>
);
