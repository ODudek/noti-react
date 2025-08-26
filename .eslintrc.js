module.exports = {
	env: {
		browser: true,
		commonjs: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react'],
	settings: {
		react: {
			pragma: 'React',
			version: '16.5.2',
			flowVersion: '0.53',
		},
		propWrapperFunctions: ['forbidExtraProps'],
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-unexpected-multiline': 0,
	},
};
