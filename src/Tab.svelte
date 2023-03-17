<script>
  export let title = ""
  export let top = 0
  export let left = 0
  export let active
  
</script>

<h1 on:click style = "top: {top}px; left: {left}px;">{title}</h1>

<style>
  h1{
    border: solid 3px #033860;
    background-color: #D7F6FE;
    position: absolute;
    padding: 5px;
    color: #303633;
  }
  h1:hover{
    background-color: #aec8cf;
  }
  h1:active{
    background-color: #94aab0;
  }
</style>