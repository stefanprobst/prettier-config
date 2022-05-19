const config = {
  endOfLine: "lf",
  printWidth: 100,
  proseWrap: "always",
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  overrides: [
    {
      files: ["content/**/*.@(md|mdx)"],
      options: {
        proseWrap: "always",
        singleQuote: false,
      },
    },
    {
      files: ["content/**/*.yml"],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ["*.svg"],
      options: {
        parser: "html",
      },
    },
  ],
};

module.exports = config;
