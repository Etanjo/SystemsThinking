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
  <Tabs {active} onChangeTab={(v)=>{active=v}}/>
</main>

<style>
  main {
    background-image: url("icebergbg.jpg");
    background-repeat: no-repeat;
       background-size: contain;
    background-position-y: -70px;
    height: 980px;
    width: 1500px;
  }
</style>