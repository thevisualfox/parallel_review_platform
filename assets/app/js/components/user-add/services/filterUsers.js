export default function filterUsers(globalUsers, users, query) {
    const lowerQuery = query.toLowerCase();
    const existingUsersByEmail = users.map(({ email }) => email);

    let filteredUsers = globalUsers
        .filter(({ email }) => {
            /* Only return users that are not part of the project */
            return !existingUsersByEmail.includes(email);
        })
        .filter(({ email, username }) => {
            /* Only return users that match the query on email || username */
            return email.toLowerCase().includes(lowerQuery) || username.toLowerCase().includes(lowerQuery);
        });

    return filteredUsers;
}
