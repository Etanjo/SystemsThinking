<script>
  import ExampleIceberg from './ExampleIceberg.svelte'
  import EditIceberg from './EditIceberg.svelte'
  import DisplayIceberg from './DisplayIceberg.svelte'
  export let active = 'display'
  import Tabs from "./Tabs.svelte"
  let blur = true
  function moveWater(){
    blur = false
  }
</script>

<main>
  <surface></surface>
  <ocean></ocean>
  <deep></deep>
  <deeper></deeper>
  <h1>Iceberg Model</h1>

  {#if active == 'example'}
    <ExampleIceberg {blur}/>
  {:else if active == 'display'}
    <DisplayIceberg {blur}/>
  {:else if active == 'edit'}
    <EditIceberg/>
  {/if}
  <Tabs {active} onChangeTab={(v)=>{active=v}}/>
  <div class="topWater" on:click={moveWater} class:clickable={blur}></div>
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
  .topWater{
    filter: blur(5px);
    top: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    position: absolute;
    left: 0;
    pointer-events: none;
  }
  .clickable{
    pointer-events:all;
  }
</style>