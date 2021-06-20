const USER_ROLES = {
	ROLE_ADMIN: 'ROLE_ADMIN',
	ROLE_USER: 'ROLE_USER',
	ROLE_USER_BASIC: 'ROLE_USER_BASIC',
};

export default function getRole({ roles }) {
	if (roles.includes(USER_ROLES.ROLE_ADMIN)) return 'admin';
	if (roles.includes(USER_ROLES.ROLE_USER_BASIC)) return 'basic';
	if (roles.includes(USER_ROLES.ROLE_USER)) return 'user';
}
