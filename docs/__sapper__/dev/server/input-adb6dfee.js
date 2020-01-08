'use strict';

var __chunk_1 = require('./chunk-7f071dbf.js');
var __chunk_2 = require('./chunk-1959450c.js');
var __chunk_3 = require('./chunk-8c7fa0c8.js');
require('clipboard');
var __chunk_4 = require('./chunk-14459e5a.js');
var __chunk_5 = require('./chunk-64148feb.js');
var __chunk_6 = require('./chunk-58469ebb.js');

/* src/routes/components/input.svelte generated by Svelte v3.16.7 */

async function preload() {
	const res = await this.fetch(`components/input.json`);
	const jsdoc = await res.json();
	return { jsdoc };
}

const Input_1 = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { jsdoc } = $$props;

	let bound = {
		name: "Rich Harris",
		email: "rich@",
		username: "richie55",
		password: "secret123"
	};

	if ($$props.jsdoc === void 0 && $$bindings.jsdoc && jsdoc !== void 0) $$bindings.jsdoc(jsdoc);
	let $$settled;
	let $$rendered;

	do {
		$$settled = true;

		$$rendered = `${__chunk_1.validate_component(__chunk_3.DocHeader, "DocHeader").$$render(
			$$result,
			{
				title: "Input",
				subtitle: "User input controls"
			},
			{},
			{}
		)}

<p class="${"content"}">
  Mostly just wraps <code>${__chunk_1.escape(`<input>`)}</code>  and <code>${__chunk_1.escape(`<textarea>`)}</code> so additional Bulma features can be bound easily.
</p>

<br>

${__chunk_1.validate_component(__chunk_5.Example, "Example").$$render(
			$$result,
			{
				code: `<script>
  import { Input } from 'svelma'
</script>

<Input type="text" placeholder="Text input" />
`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render($$result, { type: "text", placeholder: "Text input" }, {}, {})}
  </div>`,
				default: () => `
  
`
			}
		)}

<br>

<p class="${"title is-4"}">Types and colors</p>

<p class="${"content"}">Wrap with <a href="${"components/field"}"><strong>Field</strong></a> for additional features</p>

${__chunk_1.validate_component(__chunk_5.Example, "Example").$$render(
			$$result,
			{
				code: `<script>
  import { Field, Input } from 'svelma'

  let bound = {
    name: 'Rich Harris',
    email: 'rich@',
    username: 'richie55',
    password: 'secret123',
  }
</script>

<Field label="Name">
  <Input type="text" bind:value={bound.name} placeholder="Text input" />
</Field>

<Field label="Email" type="is-danger" message="Invalid email"> 
  <Input type="email" bind:value={bound.email} maxlength="30" />
</Field>

<Field label="Username" type="is-success" message="Username available"> 
  <Input type="email" bind:value={bound.username} />
</Field>

<Field label="Password"> 
  <Input type="password" bind:value={bound.password} passwordReveal={true} />
</Field>

<Field label="Textarea"> 
  <Input type="textarea" maxlength="200" />
</Field>
`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    ${__chunk_1.validate_component(__chunk_4.Codeview, "Codeview").$$render($$result, { lang: "js", showCopy: false }, {}, {
					default: () => `
// Bound values
${__chunk_1.escape(JSON.stringify(bound, null, 2))}
    `
				})}

    <br>

    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render($$result, { label: "Name" }, {}, {
					default: () => `
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render(
						$$result,
						{
							type: "text",
							placeholder: "Text input",
							value: bound.name
						},
						{
							value: $$value => {
								bound.name = $$value;
								$$settled = false;
							}
						},
						{}
					)}
    `
				})}

    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render(
					$$result,
					{
						label: "Email",
						type: "is-danger",
						message: "Invalid email"
					},
					{},
					{
						default: () => ` 
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render(
							$$result,
							{
								type: "email",
								maxlength: "30",
								value: bound.email
							},
							{
								value: $$value => {
									bound.email = $$value;
									$$settled = false;
								}
							},
							{}
						)}
    `
					}
				)}

    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render(
					$$result,
					{
						label: "Username",
						type: "is-success",
						message: "Username available"
					},
					{},
					{
						default: () => ` 
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render(
							$$result,
							{ type: "email", value: bound.username },
							{
								value: $$value => {
									bound.username = $$value;
									$$settled = false;
								}
							},
							{}
						)}
    `
					}
				)}

    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render($$result, { label: "Password" }, {}, {
					default: () => ` 
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render(
						$$result,
						{
							type: "password",
							passwordReveal: true,
							value: bound.password
						},
						{
							value: $$value => {
								bound.password = $$value;
								$$settled = false;
							}
						},
						{}
					)}
    `
				})}

    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render($$result, { label: "Textarea" }, {}, {
					default: () => ` 
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render($$result, { type: "textarea", maxlength: "200" }, {}, {})}
    `
				})}
  </div>`,
				default: () => `
  
`
			}
		)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">States, plus more styles</p>

${__chunk_1.validate_component(__chunk_5.Example, "Example").$$render(
			$$result,
			{
				code: `<script>
  import { Field, Input } from 'svelma'
</script>

<Field>
  <Input placeholder="No label" />
</Field>

<Field label="Rounded">
  <Input class="is-rounded" placeholder="Rounded" />
</Field>

<Field label="Info" type="is-info"> 
  <Input placeholder="Info" />
</Field>

<Field label="Warning" type="is-warning"> 
  <Input placeholder="Warning" />
</Field>

<Field label="Disabled"> 
  <Input placeholder="Disabled" disabled />
</Field>

<Field label="Loading">
  <Input placeholder="Loading" loading />
</Field>`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render($$result, {}, {}, {
					default: () => `
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render($$result, { placeholder: "No label" }, {}, {})}
    `
				})}

    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render($$result, { label: "Rounded" }, {}, {
					default: () => `
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render(
						$$result,
						{
							class: "is-rounded",
							placeholder: "Rounded"
						},
						{},
						{}
					)}
    `
				})}

    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render($$result, { label: "Info", type: "is-info" }, {}, {
					default: () => ` 
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render($$result, { placeholder: "Info" }, {}, {})}
    `
				})}

    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render($$result, { label: "Warning", type: "is-warning" }, {}, {
					default: () => ` 
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render($$result, { placeholder: "Warning" }, {}, {})}
    `
				})}

    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render($$result, { label: "Disabled" }, {}, {
					default: () => ` 
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render($$result, { placeholder: "Disabled", disabled: true }, {}, {})}
    `
				})}

    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render($$result, { label: "Loading" }, {}, {
					default: () => `
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render($$result, { placeholder: "Loading", loading: true }, {}, {})}
    `
				})}
  </div>`,
				default: () => `
  
`
			}
		)}

<hr class="${"is-medium"}">

<p class="${"title is-4"}">Sizes</p>

${__chunk_1.validate_component(__chunk_5.Example, "Example").$$render(
			$$result,
			{
				code: `<script>
  import { Field, Input } from 'svelma'
</script>

<Field>
  <Input placeholder="Small" size="is-small" />
</Field>

<Field>
  <Input placeholder="Default" />
</Field>

<Field>
  <Input placeholder="Medium" size="is-medium" />
</Field>

<Field>
  <Input placeholder="Large" size="is-large" />
</Field>`
			},
			{},
			{
				preview: () => `<div slot="${"preview"}">
    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render($$result, {}, {}, {
					default: () => `
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render($$result, { placeholder: "Small", size: "is-small" }, {}, {})}
    `
				})}

    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render($$result, {}, {}, {
					default: () => `
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render($$result, { placeholder: "Default" }, {}, {})}
    `
				})}

    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render($$result, {}, {}, {
					default: () => `
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render($$result, { placeholder: "Medium", size: "is-medium" }, {}, {})}
    `
				})}

    ${__chunk_1.validate_component(__chunk_2.Field, "Field").$$render($$result, {}, {}, {
					default: () => `
      ${__chunk_1.validate_component(__chunk_2.Input, "Input").$$render($$result, { placeholder: "Large", size: "is-large" }, {}, {})}
    `
				})}
  </div>`,
				default: () => `
  
`
			}
		)}

${__chunk_1.validate_component(__chunk_6.JSDoc, "JSDoc").$$render($$result, { jsdoc }, {}, {})}`;
	} while (!$$settled);

	return $$rendered;
});

exports.default = Input_1;
exports.preload = preload;
