export const USER_ROLES = {
	ADMIN: 'ROLE_ADMIN',
	USER: 'ROLE_USER',
	BASIC: 'ROLE_USER_BASIC',
};

export default function getRole({ roles }) {
	if (roles.includes(USER_ROLES.ADMIN)) return 'admin';
	if (roles.includes(USER_ROLES.BASIC)) return 'basic';
	if (roles.includes(USER_ROLES.USER)) return 'user';
}
