/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  // @ts-ignore
  organizeImportsSkipDestructiveCodeActions: false,
};

module.exports = config;
