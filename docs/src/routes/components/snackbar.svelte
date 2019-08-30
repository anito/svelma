<script context="module">
  export async function preload() {
    const res = await this.fetch(`components/snackbar.json`);
    const jsdoc = await res.json();

    return { jsdoc };
  }
</script>

<script>
  import { Button, Snackbar } from 'svelma'
  import DocHeader from '../../components/DocHeader.svelte'
  import Example from '../../components/Example.svelte'
  import JSDoc from '../../components/JSDoc.svelte'

  export let jsdoc

  function open(props) {
    let defaults = { message: 'I am a Snackbar' }
    props = Object.assign(defaults, props)
    Snackbar.create(props)
  }
</script>

<style>
.buttons {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>

<DocHeader title="Snackbar" subtitle="Bigger than a toast, smaller than a dialog" />

<Example code={`<script>
  import { Button, Snackbar } from 'svelma'

  function open(props) {
    let defaults = { message: 'I am a Snackbar' }
    props = Object.assign(defaults, props)
    Snackbar.create(props)
  }
</script>

<Button on:click={open}>Default Snackbar</Button>
<Button type="is-success" on:click={() => open({ message: 'Success', type: 'is-success', position: 'is-bottom-left', duration: 1000 })}>Successs</Button>
<Button type="is-danger" on:click={() => open({ message: 'Danger', type: 'is-danger', actionText: 'retry', position: 'is-top-left' })}>Top Left</Button>
<Button type="is-primary" on:click={() => open({ message: 'Customized Background', background: 'has-background-grey-lighter', position: 'is-bottom'  })}>Custom Background</Button>`}>
  <div slot="preview">
    <div class="buttons">
      <Button on:click={open}>Default Snackbar</Button>
      <Button type="is-success" on:click={() => open({ message: 'Success', type: 'is-success', position: 'is-bottom-left', duration: 1000 })}>Successs</Button>
      <Button type="is-danger" on:click={() => open({ message: 'Danger', type: 'is-danger', actionText: 'retry', position: 'is-top-left' })}>Top Left</Button>
      <Button type="is-primary" on:click={() => open({ message: 'Customized Background', background: 'has-background-grey-lighter', position: 'is-bottom'  })}>Custom Background</Button>
    </div>
  </div>
</Example>


<JSDoc {jsdoc} />