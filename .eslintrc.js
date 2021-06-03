module.exports = {
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	rules: {
		'no-unused-vars': [
			'error',
			{
				args: 'none',
			},
		],
		'react/prop-types': [0],
		'no-console': 1,
		'no-undef': 1,
	},
	parser: 'babel-eslint',
	env: {
		browser: true,
		jquery: true,
		node: true,
		es6: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
