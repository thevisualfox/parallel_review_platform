import axios from 'axios';

/* Signup to platform | expects formRef object */
export const signup = async ({ formRef }) => {
	const params = new FormData(formRef.current);
	const result = await axios.post('/api/signup', params);

	return result?.data;
};

/* Login to platform | expects formRef object */
export const login = async ({ formRef }) => {
	const params = new FormData(formRef.current);

	const result = await axios.post('/api/login', {
		email: params.get('email'),
		password: params.get('password'),
	});

	return result?.data;
};

/* Logout from platform */
export const logout = async () => {
	const result = await axios.get('/api/logout');
	return result?.data;
};
