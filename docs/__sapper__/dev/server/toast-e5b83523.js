'use strict';

var __chunk_1 = require('./chunk-7f071dbf.js');
var __chunk_2 = require('./chunk-1959450c.js');
var __chunk_3 = require('./chunk-8c7fa0c8.js');
require('clipboard');
require('./chunk-14459e5a.js');
var __chunk_5 = require('./chunk-8cfb2d5d.js');
var __chunk_6 = require('./chunk-58469ebb.js');

/* src/routes/components/toast.svelte generated by Svelte v3.16.7 */

const css = {
	code: ".buttons.svelte-3pxc2m{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}",
	map: "{\"version\":3,\"file\":\"toast.svelte\",\"sources\":[\"toast.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n  export async function preload() {\\n    const res = await this.fetch(`components/toast.json`);\\n    const jsdoc = await res.json();\\n\\n    return { jsdoc };\\n  }\\n</script>\\n\\n<script>\\n  import { Button, Toast } from 'svelma'\\n  import DocHeader from '../../components/DocHeader.svelte'\\n  import Example from '../../components/Example.svelte'\\n  import JSDoc from '../../components/JSDoc.svelte'\\n\\n  export let jsdoc\\n\\n  function open(type, position, background) {\\n    Toast.create({ message: 'I am a toast', type, position, background })\\n  }\\n</script>\\n\\n<style>\\n.buttons {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: start;\\n      -ms-flex-pack: start;\\n          justify-content: flex-start;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n}\\n\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvY29tcG9uZW50cy90b2FzdC5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixvQkFBYTtFQUFiLGFBQWE7RUFDYix1QkFBMkI7TUFBM0Isb0JBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixtQkFBZTtNQUFmLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL3JvdXRlcy9jb21wb25lbnRzL3RvYXN0LnN2ZWx0ZSIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */</style>\\n\\n<DocHeader title=\\\"Toast\\\" subtitle=\\\"Toasty notifications\\\" />\\n\\n<Example code={`<script>\\n  import { Button, Toast } from 'svelma'\\n\\n  function open(type, position) {\\n    Toast.create({ message: 'I am a toast', type, position })\\n  }\\n</script>\\n\\n<Button on:click={() => open()}>Toast</Button>\\n<Button type=\\\"is-success\\\" on:click={() => open('is-success')}>Success</Button>\\n<Button type=\\\"is-danger\\\" on:click={() => open('is-danger', 'is-bottom-right')}>Bottom Right</Button>\\n<Button type=\\\"is-primary\\\" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>Custom Background</Button>`}>\\n  <div slot=\\\"preview\\\">\\n    <div class=\\\"buttons\\\">\\n      <Button on:click={() => open()}>Toast</Button>\\n      <Button type=\\\"is-success\\\" on:click={() => open('is-success')}>Success</Button>\\n      <Button type=\\\"is-danger\\\" on:click={() => open('is-danger', 'is-bottom-right')}>Bottom Right</Button>\\n      <Button type=\\\"is-primary\\\" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>Custom Background</Button>\\n    </div>\\n  </div>\\n</Example>\\n\\n<JSDoc {jsdoc} />\"],\"names\":[],\"mappings\":\"AAuBA,QAAQ,cAAC,CAAC,AACR,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,WAAW,CACpB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,KAAK,CACnB,aAAa,CAAE,KAAK,CAChB,eAAe,CAAE,UAAU,CACnC,aAAa,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,AACrB,CAAC\"}"
};

async function preload() {
	const res = await this.fetch(`components/toast.json`);
	const jsdoc = await res.json();
	return { jsdoc };
}

const Toast_1 = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { jsdoc } = $$props;
	if ($$props.jsdoc === void 0 && $$bindings.jsdoc && jsdoc !== void 0) $$bindings.jsdoc(jsdoc);
	$$result.css.add(css);

	return `${__chunk_1.validate_component(__chunk_3.DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Toast",
			subtitle: "Toasty notifications"
		},
		{},
		{}
	)}

${__chunk_1.validate_component(__chunk_5.Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  import { Button, Toast } from 'svelma'

  function open(type, position) {
    Toast.create({ message: 'I am a toast', type, position })
  }
</script>

<Button on:click={() => open()}>Toast</Button>
<Button type="is-success" on:click={() => open('is-success')}>Success</Button>
<Button type="is-danger" on:click={() => open('is-danger', 'is-bottom-right')}>Bottom Right</Button>
<Button type="is-primary" on:click={() => open('is-primary', 'is-top', 'has-background-grey-lighter')}>Custom Background</Button>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    <div class="${"buttons svelte-3pxc2m"}">
      ${__chunk_1.validate_component(__chunk_2.Button, "Button").$$render($$result, {}, {}, { default: () => `Toast` })}
      ${__chunk_1.validate_component(__chunk_2.Button, "Button").$$render($$result, { type: "is-success" }, {}, { default: () => `Success` })}
      ${__chunk_1.validate_component(__chunk_2.Button, "Button").$$render($$result, { type: "is-danger" }, {}, { default: () => `Bottom Right` })}
      ${__chunk_1.validate_component(__chunk_2.Button, "Button").$$render($$result, { type: "is-primary" }, {}, { default: () => `Custom Background` })}
    </div>
  </div>`,
			default: () => `
  
`
		}
	)}

${__chunk_1.validate_component(__chunk_6.JSDoc, "JSDoc").$$render($$result, { jsdoc }, {}, {})}`;
});

exports.default = Toast_1;
exports.preload = preload;
