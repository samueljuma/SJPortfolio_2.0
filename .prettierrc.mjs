/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  printWidth: 100,
  // prettier-plugin-tailwindcss must be last to compose with other plugins
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
};
