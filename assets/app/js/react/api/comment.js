import axios from 'axios';

/* Add comment | expects phase id, user id and formRef obect */
export const addComment = async ({ formRef, phaseId, userId, position }) => {
	const params = new FormData(formRef.current);
	params.append('userId', userId);
	params.append('positionX', position.xPercent);
	params.append('positionY', position.yPercent);

	const result = await axios.post(`/api/comments/add/${phaseId}`, params);
	return result?.data;
};
