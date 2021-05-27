/* Packages */
import React from 'react';
import { ReactSVG } from 'react-svg';
import { useMutation, useQueryClient } from 'react-query';

/* Components */
import { LoadingWrapper } from '../../components';

/* Assets */
import starIcon from 'icons/star.svg';
import deleteIcon from 'icons/delete.svg';

/* Api */
import { deleteUser, QUERY_KEYS } from '../../api';

export default function User({ user, project = {}, variant = 'default', size = 'md' }) {
	/* Hooks */
	const queryClient = useQueryClient();

	/* Constants */
	const { id: projectId, author } = project;
	const { id: userId, email } = user;

	const isAuthor = email === author;
	const classes = ['user', `user--${size}`, `user--${variant}`, isAuthor && 'user--author'].join(' ');

	/* Mutations */
	const deleteUserMutation = useMutation(deleteUser, {
		onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.PROJECT_BY_ID, projectId]),
	});

	/* Render */
	return (
		<div className={classes}>
			<UserAvatar isLoading={deleteUserMutation.isLoading} {...user}>
				{variant === 'interactive' && !isAuthor && (
					<button
						className="user__action btn btn-link p-0"
						type="button"
						onClick={() => deleteUserMutation.mutate({ projectId, userId })}>
						<ReactSVG wrapper="svg" className="user__action-icon icon icon--14" src={deleteIcon} />
					</button>
				)}
			</UserAvatar>
			{isAuthor && (
				<div className="user__status user__status--leader">
					<ReactSVG wrapper="svg" className="user__status-icon icon text-tertiary mt-0" src={starIcon} />
				</div>
			)}
		</div>
	);
}

export const UserAvatar = ({ username, userColor, isLoading, children }) => {
	/* Constants */
	const userInitials = username.split(' ').map((word) => word[0].toUpperCase());

	/* Render */
	return (
		<div className="user__avatar" style={{ '--theme': userColor }}>
			<LoadingWrapper loading={isLoading} loaderSize={16}>
				<span className="user__initials">{userInitials}</span>
				{children}
			</LoadingWrapper>
		</div>
	);
};

export const UserInfo = ({ username, email }) => (
	<div className="d-flex flex-column ml-3">
		<p className="mb-0">{username}</p>
		<p className="text-muted--60 text--xs">{email}</p>
	</div>
);
