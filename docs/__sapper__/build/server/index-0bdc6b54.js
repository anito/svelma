'use strict';

var __chunk_1 = require('./chunk-6a657c50.js');

/* src/routes/blog/index.svelte generated by Svelte v3.9.1 */

const css = {
	code: "ul.svelte-4fatyy{margin:0 0 1em 0;line-height:1.5}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport function preload({ params, query }) {\\n\\t\\treturn this.fetch(`blog.json`).then(r => r.json()).then(posts => {\\n\\t\\t\\treturn { posts };\\n\\t\\t});\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let posts;\\n</script>\\n\\n<style>\\n\\tul {\\n\\t\\tmargin: 0 0 1em 0;\\n\\t\\tline-height: 1.5;\\n\\t}\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvYmxvZy9pbmRleC5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtDQUNDO0VBQ0MsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvcm91dGVzL2Jsb2cvaW5kZXguc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiXG5cdHVsIHtcblx0XHRtYXJnaW46IDAgMCAxZW0gMDtcblx0XHRsaW5lLWhlaWdodDogMS41O1xuXHR9XG4iXX0= */</style>\\n\\n<svelte:head>\\n\\t<title>Blog</title>\\n</svelte:head>\\n\\n<h1>Recent posts</h1>\\n\\n<ul>\\n\\t{#each posts as post}\\n\\t\\t<!-- we're using the non-standard `rel=prefetch` attribute to\\n\\t\\t\\t\\ttell Sapper to load the data for the page as soon as\\n\\t\\t\\t\\tthe user hovers over the link or taps it, instead of\\n\\t\\t\\t\\twaiting for the 'click' event -->\\n\\t\\t<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>\\n\\t{/each}\\n</ul>\"],\"names\":[],\"mappings\":\"AAaC,EAAE,cAAC,CAAC,AACH,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACjB,WAAW,CAAE,GAAG,AACjB,CAAC\"}"
};

function preload({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

const Index = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { posts } = $$props;

	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);

	$$result.css.add(css);

	return `${($$result.head += `<title>Blog</title>`, "")}

	<h1>Recent posts</h1>

	<ul class="svelte-4fatyy">
		${__chunk_1.each(posts, (post) => `
			<li><a rel="prefetch" href="blog/${__chunk_1.escape(post.slug)}">${__chunk_1.escape(post.title)}</a></li>`)}
	</ul>`;
});

exports.default = Index;
exports.preload = preload;
//# sourceMappingURL=index-0bdc6b54.js.map
