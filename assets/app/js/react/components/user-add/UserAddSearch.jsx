/* Packages */
import React, { useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

/* Components */
import UserAddSearchResults from './UserAddSearchResults';
import { Users } from '../users';

/* Helpers */
import { isEmail, filterUsers } from '../../helpers';

/* Api */
import { addUser, fetchGobalUsers, QUERY_KEYS } from '../../api';

export default function UserAddSearch({ users, project, toggleBox }) {
	/* State */
	const [query, setQuery] = useState('');
	const [focusedUser, setFocusedUser] = useState(0);

	/* Queries */
	const { data: globalUsers = [], isLoading: globalUsersLoading } = useQuery(
		QUERY_KEYS.GLOBAL_USERS,
		fetchGobalUsers
	);

	/* Constants */
	const filteredUsers = filterUsers(globalUsers, users, query);

	/* Refs */
	const queryRef = useRef();

	/* Hooks */
	const queryClient = useQueryClient();

	/* Mutations */
	const addUserMutation = useMutation(addUser, {
		onSuccess: () => {
			queryClient.invalidateQueries([QUERY_KEYS.PROJECT_BY_ID, project.id]);
			queryClient.invalidateQueries(QUERY_KEYS.GLOBAL_USERS);

			queryRef.current.select();
			setQuery('');
		},
	});

	/* Callbacks */
	const handleChange = ({ target: { value } }) => setQuery(value);

	const handleOnKeyDown = (event) => {
		if (['Enter', 'Tab'].includes(event.key)) {
			event.preventDefault();

			if (query !== '' && focusedUser !== null) {
				const user = focusedUser in filteredUsers ? filteredUsers[focusedUser] : focusedUser;

				if (isEmail(user.email)) {
					addUserMutation.mutate({ projectId: project.id, email: user.email });
				}
			}
		}
	};

	const handleClick = (email) => {
		if (isEmail(email)) {
			addUserMutation.mutate({ projectId: project.id, email: email });
		}
	};

	/* Render */
	return (
		<div className="d-flex flex-column flex-grow-1">
			<Users {...{ users, project }} variant="interactive" size="xl" />
			<div className="position-relative">
				<label className="sr-only" htmlFor="userQuery">
					Search name or email
				</label>
				<input
					className="form-control form-control-sm form-control--search"
					id="userQuery"
					name="userQuery"
					placeholder="Search name or email"
					type="text"
					autoFocus
					value={query}
					onChange={handleChange}
					onKeyDown={handleOnKeyDown}
					autoComplete="off"
					ref={queryRef}
				/>
				<UserAddSearchResults
					{...{
						filteredUsers,
						query,
						handleClick,
						focusedUser,
						setFocusedUser,
						userMutationLoading: addUserMutation.isLoading,
						globalUsersLoading,
					}}
				/>
			</div>
			<div className="d-flex align-items-center mt-4">
				<a
					href="#"
					className="btn btn-link text--sm text-white text-decoration-underline text-muted--60"
					title="Remove all users">
					<span className="btn__text">Remove all users</span>
				</a>
				<button type="button" className="btn btn-sm btn-secondary ml-auto px-8" onClick={toggleBox}>
					<span className="btn__text">Done</span>
				</button>
			</div>
		</div>
	);
}
