/* Packages */
import React, { useEffect } from 'react';
import { ReactSVG } from 'react-svg';

/* Domain */
import { UserAvatar, UserInfo } from './User';

/* Assets */
import addUserIcon from 'icons/add_user.svg';

export default function UserSelect({ user, userIndex, handleClick, isFocused, setFocusedUser, isLoading }) {
	/* Effects */
	useEffect(() => {
		isFocused && setFocusedUser(userIndex);
	}, [isFocused]);

	useEffect(() => {
		return () => setFocusedUser(0);
	}, []);

	/* Callbacks */
	const handleStatus = (action) => {
		setFocusedUser(action === 'enter' ? userIndex : 0);
	};

	/* Render */
	return (
		<button
			className={`user user--select ${isFocused && 'is-focused'} user--xl`}
			onClick={() => handleClick(user)}
			onMouseEnter={() => handleStatus('enter')}
			onMouseLeave={() => handleStatus('leave')}
			type="button">
			<div className="d-flex align-items-center">
				<UserAvatar isLoading={isLoading && isFocused} {...user} />
				<UserInfo
					{...{
						title: user.display,
						subtitle: user.organisation ? user.organisation : 'No organisation',
					}}
				/>
				<div className="user__add text-secondary rounded-circle ml-auto">
					<ReactSVG wrapper="svg" className="user__add-icon icon icon--12 text-secondary" src={addUserIcon} />
				</div>
			</div>
		</button>
	);
}
