<script>
  export let title = ""
  export let top = 0
  export let left = 0
</script>

<h1 style = "top: {top}px; left: {left}px;">{title}</h1>

<style>
  h1{
    border: solid 1px black;
    position: absolute;
    padding: 5px;
  }
</style>