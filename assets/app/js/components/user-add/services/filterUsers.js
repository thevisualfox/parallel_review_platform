export default function filterUsers(globalUsers, users, query) {
	const lowerQuery = query.toLowerCase();
	const existingUsersByEmail = users.map(({ email }) => email);

	let filteredUsers = globalUsers
		.filter(({ email }) => {
			/* Only return users that are not part of the project */
			return !existingUsersByEmail.includes(email);
		})
		.filter(({ email, display }) => {
			/* Only return users that match the query on email || display */
			return email.toLowerCase().includes(lowerQuery) || display.toLowerCase().includes(lowerQuery);
		});

	return filteredUsers;
}
