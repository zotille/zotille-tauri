import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts}",
    contentPath(import.meta.url, 'svelte')
  ],
  theme: {
    extend: {},
  },
  plugins: [skeleton({
    // NOTE: each theme included will increase the size of your CSS bundle
    themes: [themes.cerberus]
  })],
};