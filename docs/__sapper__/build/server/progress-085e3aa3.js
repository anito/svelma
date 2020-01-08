'use strict';

var __chunk_1 = require('./chunk-6a657c50.js');
var __chunk_2 = require('./chunk-32179e67.js');
var __chunk_3 = require('./chunk-64057023.js');
require('clipboard');
require('./chunk-e9912fa5.js');
var __chunk_5 = require('./chunk-b4c70e0c.js');

/* src/routes/components/progress.svelte generated by Svelte v3.9.1 */

const Progress_1 = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

  const types = ['is-primary', 'is-success', 'is-danger', 'is-warning', 'is-info', 'is-link'];
  const progresses = Array(6).fill(0);

  function update() {
    types.forEach((type, i) => {
      progresses[i] = Math.floor(Math.random() * 100);
    });
  }
  
  __chunk_1.onMount(() => {
    update();
  });

	return `${__chunk_1.validate_component(__chunk_3.DocHeader, 'DocHeader').$$render($$result, { title: "Hero", subtitle: "Hero headers" }, {}, {})}

	${__chunk_1.validate_component(__chunk_5.Example, 'Example').$$render($$result, { code: `<script>
  import { fade } from 'svelte/transition'

  const types = ['is-primary', 'is-success', 'is-danger', 'is-warning', 'is-info', 'is-link']
  let type = 'is-primary'

  function update() {
    types.forEach((type, i) => {
      progresses[i] = Math.floor(Math.random() * 100)
    })
  }
  
  onMount(() => {
    update()
  })
</script>

<button class="button is-primary" on:click={update}>Update</button>

<br />
<br />

{#each types as type, i}
  <Progress {type} value={progresses[i]} duration={i * 200} max="100"></Progress>
{/each}

<br>
<br>

<p class="title is-5">Indeterminate (no value)</p>
<Progress max="100"></Progress>` }, {}, {
		default: () => `
	  `,
		preview: () => `<div slot="preview">
	    <button class="button is-primary">Update</button>

	    <br>
	    <br>

	    ${__chunk_1.each(types, (type, i) => `${__chunk_1.validate_component(__chunk_2.Progress, 'Progress').$$render($$result, {
		type: type,
		value: progresses[i],
		duration: i * 200,
		max: "100"
	}, {}, {})}`)}

	    <br>
	    <br>
	    
	    <p class="title is-5">Indeterminate (no value)</p>
	    ${__chunk_1.validate_component(__chunk_2.Progress, 'Progress').$$render($$result, { max: "100" }, {}, {})}
	  </div>
	`
	})}`;
});

exports.default = Progress_1;
//# sourceMappingURL=progress-085e3aa3.js.map
