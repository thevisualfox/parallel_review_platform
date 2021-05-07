import axios from 'axios';

/* Add projectImage(s) | expects project id and array of images (blob) */
export const addProjectImages = async ({ projectId, images }) => {
	const params = new FormData();
	images.forEach((image) => params.append('images[]', image));

	const result = await axios.post(`/api/images/add/${projectId}`, params);
	return result?.data;
};

/* Delete projectImage(s) | expects project id and array of projectImageIds  */
export const deleteProjectImages = async ({ projectId, projectImageIds }) => {
	const params = new FormData();
	projectImageIds.forEach((id) => params.append('projectImages[]', id));

	const result = await axios.post(`/api/images/delete/${projectId}`, params);
	return result?.data;
};

/* Edit projectImage | expects formRef object and projectImage id  */
export const editProjectImage = async ({ formRef, id }) => {
	const params = new FormData(formRef.current);

	const result = await axios.post(`/api/images/edit/${id}`, params);
	return result?.data;
};
