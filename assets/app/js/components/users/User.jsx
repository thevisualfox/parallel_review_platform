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

export default function User({ user, project, variant = 'default', size = 'md' }) {
	/* Hooks */
	const queryClient = useQueryClient();

	/* Constants */
	const { id: projectId, author } = project ?? {};
	const { id: userId, email } = user ?? {};
	const isAuthor = email === author;

	/* Mutations */
	const deleteUserMutation = useMutation(deleteUser, {
		onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.PROJECT_BY_ID, projectId]),
	});

	/* Render */
	return (
		<div className={`user user--${size} user--${variant} ${isAuthor && 'user--author'}`}>
			<div className="d-flex align-items-center">
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
			</div>
			{isAuthor && (
				<div className="user__status user__status--leader">
					<ReactSVG wrapper="svg" className="user__status-icon icon text-tertiary mt-0" src={starIcon} />
				</div>
			)}
		</div>
	);
}

export const UserAvatar = ({ display, userColor, isLoading, children }) => {
	/* Constants */
	const userInitials = display.split(' ').map((word) => word[0].toUpperCase());

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

export const UserInfo = ({ title, subtitle, layout = 'vertical', size = 'lg' }) => (
	<div className={`user__info user__info--${layout} user__info--${size} ml-2`}>
		<p className="user__info-title mb-0">{title}</p>
		{subtitle && <p className="user__info-subtitle mb-0">{subtitle}</p>}
	</div>
);
