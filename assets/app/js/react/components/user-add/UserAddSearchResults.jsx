/* Packages */
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuery } from 'react-query';

/* Animations */
import { FADE_IN } from '../../common/animations';

/* Components */
import { UserSelect } from '../users';

/* Api calls */
import { fetchGobalUsers, QUERY_KEYS } from '../../project-overview/api';

/* Helpers */
import filterUsers from '../../helpers/filterUsers';

export default function UserAddSearchResults({
	users,
	query,
	handleClick,
	focusedUser,
	setFocusedUser,
	userMutationLoading,
}) {
	/* Queries */
	const { data: globalUsers = [], isLoading: globalUsersLoading } = useQuery(
		QUERY_KEYS.GLOBAL_USERS,
		fetchGobalUsers
	);

	/* Constants */
	const filteredUsers = filterUsers(globalUsers, users, query);

    /* State */
	const [hoveredUser, setHoveredUser] = useState(false);

	/* Effects */
	useEffect(() => {
		if (filteredUsers.length > 0 && !userMutationLoading) {
			setFocusedUser(filteredUsers[0]);
		}
	}, [filteredUsers]);

	/* Render filtered results */
	const filteredResults = () => {
		const newUser = { email: query, username: 'New user', userColor: '#CC25E8' };

		if (filteredUsers.length > 0) {
			return filteredUsers.map((user) => (
				<motion.li {...FADE_IN} key={user.id} className="list__item vr-3">
					<UserSelect
						{...{ user, handleClick, setFocusedUser, setHoveredUser }}
						isFocused={user.email === focusedUser?.email && query && !hoveredUser}
						isLoading={userMutationLoading}
					/>
				</motion.li>
			));
		}

		if (!globalUsersLoading) {
			return (
				<motion.li {...FADE_IN} key="New user" className="list__item is-focused vr-3">
					<UserSelect
						{...{ user: newUser, handleClick, setFocusedUser, setHoveredUser }}
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
			{query && (
				<motion.ul {...FADE_IN} className="box__list list">
					{filteredResults()}
				</motion.ul>
			)}
		</AnimatePresence>
	);
}
