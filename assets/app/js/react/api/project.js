import axios from "axios";

/* Fetch projects by user | expects user id */
export const fetchProjectsByUser = async ({ userId }) => {
	const result = await axios.get(`/api/projects/get/${userId}`);
	return result?.data;
};

/* Fetch projects by id | expects project id */
export const fetchProjectById = async ({ projectId }) => {
	const result = await axios.get(`/api/project/get/${projectId}`);
	return result?.data;
};

/* Add project */
export const addProject = async () => {
	const result = await axios.post('/api/projects/add');
	return result?.data;
};

/* Delete project(s) | expects array of projectIds  */
export const deleteProjects = async ({ projectIds }) => {
	const params = new FormData();
	projectIds.forEach((id) => params.append('projects[]', id));

	const result = await axios.post(`/api/projects/delete`, params);

	return result?.data;
};

/* Leave project(s) | expects array of projectIds and user id  */
export const leaveProjects = async ({ projectIds, userId }) => {
	const params = new FormData();
	projectIds.forEach((id) => params.append('projects[]', id));

	const result = await axios.post(`/api/projects/leave/${userId}`, params);

	return result?.data;
};

/* Edit project | expects formData object and project id  */
export const editProject = async ({ formRef, projectId }) => {
	const params = new FormData(formRef.current);

	const result = await axios.post(`/api/projects/edit/${projectId}`, params);
	return result?.data;
};
