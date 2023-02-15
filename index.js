/** @type {import('prettier').Config} */
const config = {
	endOfLine: "lf",
	printWidth: 100,
	proseWrap: "always",
	semi: true,
	singleQuote: false,
	// Used to calculate print width.
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
	overrides: [
		{
			files: ["*.svg"],
			options: {
				parser: "html",
			},
		},
		{
			files: ["*.vue"],
			options: {
				htmlWhitespaceSensitivity: "ignore",
			},
		},
		{
			files: [".changeset/*.md"],
			options: {
				proseWrap: "never",
			},
		},
	],
};

module.exports = config;
