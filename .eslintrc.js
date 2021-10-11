module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"eol-last": 1,
		"no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
		"import/default": "off",
		"import/order": [
			"error",
			{
				groups: [
					["external", "builtin"], 
					"internal", 
					["parent", "sibling", "index"]
				],
				"newlines-between": "always",
			},
		],
	},
	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			typescript: {},
		},
	},
};
