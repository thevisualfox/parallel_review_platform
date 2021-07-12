import axios from 'axios';

/* Add comment | expects phase id, user id and formRef obect */
export const addComment = async ({ phaseId, userId, comment, mentioned, position }) => {
	const params = new FormData();

	params.append('userId', userId);
	params.append('comment', comment);
	params.append('positionX', position.xPercent);
	params.append('positionY', position.yPercent);
	params.append('referer', window.location.pathname.replace('/', ''));

	if (mentioned.length) {
		params.append('mentioned[]', mentioned);
	}

	const result = await axios.post(`/api/comments/add/${phaseId}`, params);
	return result?.data;
};

/* Add reply | expects commentId id, reply and mentioned array */
export const addReply = async ({ commentId, reply, mentioned }) => {
	const params = new FormData();

	params.append('reply', reply);
	params.append('referer', window.location.pathname.replace('/', ''));

	if (mentioned.length) {
		params.append('mentioned[]', mentioned);
	}

	const result = await axios.post(`/api/comments/reply/${commentId}`, params);
	return result?.data;
};

/* Check comment | expects commentId  */
export const checkComment = async ({ commentId }) => {
	const result = await axios.post(`/api/comments/check/${commentId}`);
	return result?.data;
};
