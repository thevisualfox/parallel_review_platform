module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    rules: {
        'no-unused-vars': [
            'error', {
                'args': 'none'
            }
        ],
        'react/prop-types': [0],
        'no-console': process.env.NODE_ENV === 'development' ? 1 : 2
    },
    parser: 'babel-eslint',
    env: {
        browser: true,
        jquery: true,
        node: true
    },
    settings: {
		react: {
			version: 'detect'
		}
	}
};
