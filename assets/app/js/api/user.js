import axios from 'axios';

/* Fetch current (logged in) user | expects user id */
export const fetchCurrentUser = async ({ userId }) => {
	let url = '/api/users/get';
	if (userId) url = `${url}/${userId}`;

	const result = await axios.get(url);
	return result?.data;
};

/* Fetch all users in db */
export const fetchGobalUsers = async () => {
	const result = await axios.get('/api/users/get/all');
	return result?.data;
};

/* Add user to project | expects project id and user email */
export const addUser = async ({ projectId, email }) => {
	const result = await axios.post(`/api/users/add/${projectId}`, {
		email: email,
		referer: window.location.pathname.replace('/', ''),
	});
	return result?.data;
};

/* Delete user from project | expects project id and user id */
export const deleteUser = async ({ projectId, userId }) => {
	const result = await axios.post(`/api/users/delete/${projectId}`, { userId });
	return result?.data;
};
