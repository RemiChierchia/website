import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
		adapter: adapter()
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};
