<script>
  export let title = ""
  export let top = 0
  export let left = 0
  export let active = false
  
</script>

<style>
  h1{
    border: solid 3px #033860;
    background-color: #D7F6FE;
    position: absolute;
    padding: 5px;
    color: #303633;
    width: 120px;
    text-align: center;
  }
  h1:hover{
    background-color: #aec8cf;
  }
  h1:active{
    background-color: #94aab0;
  }
</style>

{#if active == false}
  <h1 on:click style = "top: {top}px; left: {left}px; font-weight:50">{title}</h1>
{:else}
  <h1 on:click style = "top: {top}px; left: {left}px;;">{title}</h1>
{/if}