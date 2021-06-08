import axios from 'axios';

/* Add comment | expects phase id, user id and formRef obect */
export const addComment = async ({ phaseId, userId, comment, mentioned, position }) => {
	const params = new FormData();

	params.append('userId', userId);
	params.append('comment', comment);
	params.append('mentioned[]', mentioned);
	params.append('positionX', position.xPercent);
	params.append('positionY', position.yPercent);
	params.append('referer', window.location.pathname.replace('/', ''));

	const result = await axios.post(`/api/comments/add/${phaseId}`, params);
	return result?.data;
};
