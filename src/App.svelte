<script>
 import ExampleIceberg from './ExampleIceberg.svelte'
  import EditIceberg from './EditIceberg.svelte'
  import DisplayIceberg from './DisplayIceberg.svelte'
  export let active = 'edit'
</script>

<main>
  {#if active == 'example'}
<ExampleIceberg/>
  {:else if active == 'display'}
  <DisplayIceberg/>
  {:else if active == 'edit'}
    <EditIceberg/>
  {/if}
</main>

<style>

</style>
