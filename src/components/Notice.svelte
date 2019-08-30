<script context="module">
  export function filterProps(props) {
    const { active, type, position, duration } = props
    return { active, type, position, duration }
  }
  export const notices = {}
</script>

<script>
  import { createEventDispatcher, onDestroy, onMount } from 'svelte'
  import { fly, fade } from 'svelte/transition'

  const dispatch = createEventDispatcher()

  export let active = true
  export let type = 'is-dark'
  export let position = 'is-top'
  export let duration = 2000
  export let transitionOut = true

  let el
  let parent
  let timer
  const div = () => document.createElement('div')

  $: transitionY = ~position.indexOf('is-top') ? -200 : 200

  export function close() {
    active = false
  }

  function remove() {
    clearTimeout(timer)

    // Just making sure
    active = false

    dispatch('destroyed')
  }

  function setupContainers() {
    if (!notices.topLeft) {
      notices.topLeft = div()
      notices.topLeft.className = 'notices is-top-left'
      document.body.appendChild(notices.topLeft)
    }
    if (!notices.top) {
      notices.top = div()
      notices.top.className = 'notices is-top'
      document.body.appendChild(notices.top)
    }
    if (!notices.topRight) {
      notices.topRight = div()
      notices.topRight.className = 'notices is-top-right'
      document.body.appendChild(notices.topRight)
    }
    if (!notices.bottomRight) {
      notices.bottomRight = div()
      notices.bottomRight.className = 'notices is-bottom-right'
      document.body.appendChild(notices.bottomRight)
    }
    if (!notices.bottom) {
      notices.bottom = div()
      notices.bottom.className = 'notices is-bottom'
      document.body.appendChild(notices.bottom)
    }
    if (!notices.bottomLeft) {
      notices.bottomLeft = div()
      notices.bottomLeft.className = 'notices is-bottom-left'
      document.body.appendChild(notices.bottomLeft)
    }
  }

  function chooseParent() {
    let div, divName = position.replace('is-', '').replace(/-([a-z])/g, g => g[1].toUpperCase() )
    if(div = notices[divName]) div.insertAdjacentElement('afterbegin', el)
  }

  onMount(() => {
    setupContainers()
    chooseParent()

    timer = setTimeout(() => {
      close()
    }, duration)
  })
</script>

<style lang="scss">
  :global(.notice) {
    display: inline-flex;
    pointer-events: auto;

    &.is-top,
    &.is-bottom {
      align-self: center;
    }

    &.is-top-left,
    &.is-bottom-left {
      align-self: flex-start;
    }

    &.is-top-right,
    &.is-bottom-right {
      align-self: flex-end;
    }
  }

  :global(.notices) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    padding: 3em;
    z-index: 1000;
    pointer-events: none;
    display: flex;

    &[class*=is-top] {
      flex-direction: column;
    }

    &[class*=is-bottom] {
      flex-direction: column-reverse;
    }

    [class*='has-background-'] .text {
      color: transparent !important;
      filter: invert(1) brightness(2.5) grayscale(1) contrast(9);
      background: inherit;
      background-clip: text !important;
      -webkit-background-clip: text !important;
    }
  }
</style>

{#if active}
  <div
    class="notice {position}"
    aria-hidden={!active}
    in:fly={{ y: transitionY }}
    out:fade={{ duration: transitionOut ? 400 : 0 }}
    on:outroend={remove}
    bind:this={el}>

    <slot />
  </div>
{/if}
