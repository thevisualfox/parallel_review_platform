import axios from 'axios';

export const QUERY_KEYS = {
	CURRENT_USER: 'current_user',
	PROJECT_BY_USER: 'project_by_user',
	PROJECT_BY_ID: 'project_by_id',
	GLOBAL_USERS: 'global_users',
};

/* Project related calls */
export const fetchProjectsByUser = async ({ userId }) => {
	const result = await axios.get(`/api/projects/get/${userId}`);
	return result?.data;
};

export const fetchProjectById = async ({ projectId }) => {
	const result = await axios.get(`/api/project/get/${projectId}`);
	return result?.data;
};

export const addProject = async () => {
	const result = await axios.post('/api/projects/add');
	return result?.data;
};

export const deleteProjects = async ({ projectIds }) => {
	const params = new FormData();
	projectIds.forEach((id) => params.append('projects[]', id));

	const result = await axios.post(`/api/projects/delete`, params);

	return result?.data;
};

export const leaveProjects = async ({ projectIds, userId }) => {
	const params = new FormData();
	projectIds.forEach((id) => params.append('projects[]', id));

	const result = await axios.post(`/api/projects/leave/${userId}`, params);

	return result?.data;
};

export const editProject = async ({ formRef, projectId }) => {
	const params = new FormData(formRef.current);

	const result = await axios.post(`/api/projects/edit/${projectId}`, params);
	return result?.data;
};

/* Project image related calls */
export const addProjectImages = async ({ projectId, images }) => {
	const params = new FormData();
	images.forEach((image) => params.append('images[]', image));

	const result = await axios.post(`/api/images/add/${projectId}`, params);
	return result?.data;
};

export const deleteProjectImages = async ({ projectId, id }) => {
	const result = await axios.post(`/api/images/delete/${projectId}`, { id });
	return result?.data;
};

/* User related calls */
export const fetchCurrentUser = async ({ userId }) => {
	let url = '/api/users/get';
	if (userId) url = `${url}/${userId}`;

	const result = await axios.get(url);
	return result?.data;
};

export const fetchGobalUsers = async () => {
	const result = await axios.get('/api/users/get/all');
	return result?.data;
};

export const addUser = async ({ projectId, email }) => {
	const result = await axios.post(`/api/users/add/${projectId}`, { email });
	return result?.data;
};

export const deleteUser = async ({ projectId, userId }) => {
	const result = await axios.post(`/api/users/delete/${projectId}`, { userId });
	return result?.data;
};
