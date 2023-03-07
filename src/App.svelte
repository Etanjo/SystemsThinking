<script>
 import ExampleIceberg from './ExampleIceberg.svelte'
  import EditIceberg from './EditIceberg.svelte'
  import DisplayIceberg from './DisplayIceberg.svelte'
  export let active = 'display'
  import Tabs from "./Tabs.svelte"
</script>

<main>
  {#if active == 'example'}
    <ExampleIceberg/>
  {:else if active == 'display'}
    <DisplayIceberg/>
  {:else if active == 'edit'}
    <EditIceberg/>
  {/if}
  <Tabs/>
</main>

<style>

</style>
