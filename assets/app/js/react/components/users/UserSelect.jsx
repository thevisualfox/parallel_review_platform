/* Packages */
import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AnimatePresence } from 'framer-motion';
import { ReactSVG } from 'react-svg';

/* Assets */
import addUserIcon from 'icons/add_user.svg';

/* Components */
import { UserAvatar, UserInfo } from './User';

/* Animations */
import AnimationWrapper, { SCALE_FADE } from '../../common/animations';

export default function UserSelect({ user, handleClick, isFocused, setFocusedUser, setHoveredUser, isLoading }) {
	/* Effects */
	useEffect(() => {
		isFocused && setFocusedUser(user);
	}, [isFocused]);

	useEffect(() => {
		return () => {
			setFocusedUser(null);
			setHoveredUser(false);
		};
	}, []);

	/* Callbacks */
	const handleStatus = (action) => {
		setFocusedUser(action === 'enter' ? user : null);
		setHoveredUser(action === 'enter');
	};

	/* Render */
	return (
		<button
			className={`user user--select ${isFocused && 'is-focused'} user--xl`}
			onClick={() => handleClick(user.email)}
			onMouseEnter={() => handleStatus('enter')}
			onMouseLeave={() => handleStatus('leave')}>
			<div className="d-flex align-items-center">
				<UserAvatar {...user} />
				<UserInfo {...user} />
				<div className="user__add text-secondary rounded-circle ml-auto">
					<UserStatus loading={isLoading && isFocused} />
				</div>
			</div>
		</button>
	);
}

const UserStatus = ({ loading }) => (
	<AnimatePresence>
		{loading ? (
			<AnimationWrapper key="loader" className="position-absolute d-flex" {...SCALE_FADE}>
				<CircularProgress color="inherit" size={12} />
			</AnimationWrapper>
		) : (
			<AnimationWrapper key="default" className="position-absolute d-flex" {...SCALE_FADE}>
				<ReactSVG wrapper="svg" className="user__add-icon icon icon--12 text-secondary" src={addUserIcon} />
			</AnimationWrapper>
		)}
	</AnimatePresence>
);
