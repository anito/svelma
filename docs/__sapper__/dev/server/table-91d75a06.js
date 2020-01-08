'use strict';

var __chunk_1 = require('./chunk-7f071dbf.js');
require('./chunk-1959450c.js');
var __chunk_3 = require('./chunk-8c7fa0c8.js');
require('clipboard');
require('./chunk-14459e5a.js');
var __chunk_5 = require('./chunk-8cfb2d5d.js');

/* src/routes/bulma/table.svelte generated by Svelte v3.16.7 */

const Table = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let loading = false;
	let users = [];
	const titleize = s => s.replace(/^([a-z])/, (_, r) => r.toUpperCase());

	async function update() {
		loading = true;
		users = [];
		users = (await (await fetch("https://randomuser.me/api/?results=10")).json()).results;
		loading = false;
	}

	__chunk_1.onMount(() => update());

	return `${__chunk_1.validate_component(__chunk_3.DocHeader, "DocHeader").$$render(
		$$result,
		{
			title: "Tables",
			subtitle: "Pretty HTML tables"
		},
		{},
		{}
	)}

${__chunk_1.validate_component(__chunk_5.Example, "Example").$$render(
		$$result,
		{
			code: `<script>
  let loading = false
  let users = []

  const titleize = s => s.replace(/^([a-z])/, (_, r) => r.toUpperCase())

  async function update() {
    loading = true

    users = []
    users = (await (await fetch('https://randomuser.me/api/?results=10')).json()).results

    loading = false
  }

  onMount(() => update())
</script>

<button class="button is-primary" on:click={update}>Update</button>
<button class="button is-primary" on:click={() => users = []}>No Data</button>

<br>
<br>

<table class="table is-fullwidth">
  <thead>
    <tr>
      <th></th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>City</th>
      <th>State</th>
    </tr>
  </thead>
  <tbody>
    {#each users as user}
      <tr>
        <td><figure class="image"><img class="is-rounded" src="{user.picture.thumbnail}" alt=""></figure></td>
        <td>{titleize(user.name.first)}</td>
        <td>{titleize(user.name.last)}</td>
        <td>{titleize(user.location.city)}</td>
        <td>{titleize(user.location.state)}</td>
      </tr>
    {:else}
      {#if !loading}
        <tr>
          <td colspan="5">
            <section class="section">
              <div class="content has-text-grey has-text-centered">
                <p><i class="far fa-3x fa-frown"></i></p>
                <p>No data</p>
              </div>
            </section>
          </td>
        </tr>
      {/if}
    {/each}
  </tbody>
</table>`
		},
		{},
		{
			preview: () => `<div slot="${"preview"}">
    <button class="${"button is-primary"}">Update</button>
    <button class="${"button is-primary"}">No Data</button>

    <br>
    <br>

    <table class="${"table is-fullwidth"}">
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        ${users.length
			? __chunk_1.each(users, user => `<tr>
            <td><figure class="${"image"}"><img class="${"is-rounded"}"${__chunk_1.add_attribute("src", user.picture.thumbnail, 0)} alt="${""}"></figure></td>
            <td>${__chunk_1.escape(titleize(user.name.first))}</td>
            <td>${__chunk_1.escape(titleize(user.name.last))}</td>
            <td>${__chunk_1.escape(titleize(user.location.city))}</td>
            <td>${__chunk_1.escape(titleize(user.location.state))}</td>
          </tr>`)
			: `${!loading
				? `<tr>
              <td colspan="${"5"}">
                <section class="${"section"}">
                  <div class="${"content has-text-grey has-text-centered"}">
                    <p><i class="${"far fa-3x fa-frown"}"></i></p>
                    <p>No data</p>
                  </div>
                </section>
              </td>
            </tr>`
				: ``}`}
      </tbody>
    </table>
  </div>`,
			default: () => `
  
`
		}
	)}`;
});

exports.default = Table;
