/* Packages */
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/* Components */
import { UserSelect } from '../../components';

/* Animations */
import { FADE_IN } from '../../animations';

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
		const newUser = { email: query, display: 'New user', userColor: '291, 81%, 53%' };

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
						{...{ user: newUser, userIndex: newUser, handleClick, setFocusedUser }}
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
