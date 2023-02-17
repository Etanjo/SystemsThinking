<script>
  import Popup from './Popup.svelte'
  export let popUpText
  let open = false
</script>
<div class="wrap">
  <div id='triangle'>
  </div>
  <div class="text">
    <p>
      <!--<slot/>-->
      This is text
    </p>
    {#if open}
      <Popup><p>{popUpText}</p></Popup>
    {/if}
  </div>
</div>
<style>
  .wrap{
    display: grid;
    place-content: center;
    position:relative;
    height:100px;
  }
  #triangle{
    border-top-color: transparent;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #D7F6FE;
    position: absolute;
  }
  .text{
    position:relative;
    text-align: center;
    margin-top: calc(100px*0.325);
    width: 50px;
  }
  p{
    color: #303633;
  }
</style>