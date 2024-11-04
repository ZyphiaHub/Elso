import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
		  // optional configuration for GitHub Pages
		  fallback: '200.html'
		}),
		paths: {
		  base: '/Elso'
		}
	  }
};

export default config;
