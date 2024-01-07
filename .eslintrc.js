module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: ['plugin:react/recommended', 'plugin:i18next/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
	rules: {
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.tsx'] }
		],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		semi: 'off',
		indent: 'off',
		'no-tabs': 'off',
		'comma-dangle': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'react/jsx-indent': 'off',
		'object-curly-newline': 'off',
		'arrow-body-style': 'off',
		'import/order': 'off',
		'spaced-comment': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'i18next/no-literal-string': [
			'warn',
			{
				markupOnly: true,
				ignoreAttribute: ['data-testid', 'to']
			}
		]
	},
	globals: {
		__IS_DEV__: true
	},
	overrides: [
		{
			files: ['**/src/**/*.test.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off'
			}
		}
	]
}
