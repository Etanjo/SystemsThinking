<script>
export let open = false

</script>

<main>
   <div class:open> Pop up</div>
</main>

<style>
 div{
   opacity: 0;
   pointer-events: none;
   transition: all 200ms;
 }
  div.open{
    opacity: 1;
    pointer-events: all;
    
  }
</style>