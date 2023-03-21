<script>
  import ExampleIceberg from './ExampleIceberg.svelte'
  import EditIceberg from './EditIceberg.svelte'
  import DisplayIceberg from './DisplayIceberg.svelte'
  export let active = 'display'
  import Tabs from "./Tabs.svelte"
</script>

<main>
  <surface></surface>
  <ocean></ocean>
  <deep></deep>
  <deeper></deeper>
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
  h1 {
    font-family: 'Iceberg', cursive;
    text-align: center;
    color: black;
    position: absolute;
    left: 42%;
    top: 5%;
    font-size: 48px;
  }

  main {
    width: 100%;
    height: 100%;
  }

  surface {
    height: 30%;
    width: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    background-image: linear-gradient(180deg, skyblue, lightskyblue);
  }

  ocean {
    height: 10%;
    width: 100%;
    position: absolute;
    top: 30%;
    left: 0%;
    background-image: linear-gradient(180deg, cadetblue, cadetblue);
  }

  deep {
    background-image: linear-gradient(180deg, cadetblue, darkcyan);
    position: absolute;
    width: 100%;
    height: 15%;
    left: 0%;
    top: 40%;
  }

  deeper {
    background-image: linear-gradient(180deg, darkcyan, darkslateblue);
    position: absolute;
    width: 100%;
    height: 45%;
    left: 0%;
    top: 55%;
  }
</style>