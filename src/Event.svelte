<script>
  import Popup from './Popup.svelte'
  export let popUpText
  let open = false
</script>
<div>
  <p>
    <!--<slot/>-->
    This is text
  </p>
  {#if open}
    <Popup><p>{popUpText}</p></Popup>
  {/if}
</div>
<style>
  p{
    color: #303633;
  }
</style>