<script>
 import ExampleIceberg from './ExampleIceberg.svelte'
  import EditIceberg from './EditIceberg.svelte'
  import DisplayIceberg from './DisplayIceberg.svelte'
  export let active = 'display'
  import Tabs from "./Tabs.svelte"
</script>

<main>
  <h1>Iceberg Model</h1>
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
  @import url('https://fonts.googleapis.com/css2?family=Iceberg&display=swap');

  main {
    background-image: url("icebergbg.jpg");
    background-repeat: no-repeat;
       background-size: contain;
    background-position-y: -200px;
  height: 980px;
    width: 1500px;
  }
  h1 {
    font-family: 'Iceberg', cursive;
    text-align: center;
    color: #D7F6FE;
    
  }
</style>