/* Packages */
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/* Animations */
import { FADE_IN } from '../../common/animations';

/* Components */
import { UserSelect } from '../users';

export default function UserAddSearchResults({
	filteredUsers,
	query,
	handleClick,
	focusedUser,
	setFocusedUser,
	userMutationLoading,
	globalUsersLoading,
}) {
	/* Render filtered results */
	const results = () => {
		const newUser = { email: query, username: 'New user', userColor: '#CC25E8' };

		if (filteredUsers.length > 0) {
			return filteredUsers.map((user, userIndex) => (
				<motion.li {...FADE_IN} key={user.id} className="list__item vr-3">
					<UserSelect
						{...{ user, userIndex, handleClick, setFocusedUser }}
						isFocused={userIndex === focusedUser && query}
						isLoading={userMutationLoading}
					/>
				</motion.li>
			));
		}

		if (!globalUsersLoading) {
			return (
				<motion.li {...FADE_IN} key="New user" className="list__item is-focused vr-3">
					<UserSelect
						{...{ user: newUser, handleClick, setFocusedUser }}
						isFocused={query.length}
						isLoading={userMutationLoading}
					/>
				</motion.li>
			);
		}
	};

	/* Render */
	return (
		<AnimatePresence>
			{query !== '' && (
				<motion.ul {...FADE_IN} className="box__list list">
					{results()}
				</motion.ul>
			)}
		</AnimatePresence>
	);
}
