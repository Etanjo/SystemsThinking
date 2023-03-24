<script>
  export let blur
  import Popup from './Popup.svelte'
  let open = false
   export let text = {
    displayText: 'Hello!',
    popupText: '' 
  }
  import Textbox from './Textbox.svelte'
  export let editable = false
</script>

<main>

  <div id = 'trapezoid' on:click class:blur>
  <Textbox editable = {editable} bind:text={text.displayText} on:keyup></Textbox>
  </div>
</main>

<style>
  #trapezoid {
    text-align: center;
        border-bottom: 150px solid #D7F6FE;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      height: 0;
      width: 150px;
      color: #303633;
      font-family: 'PT Sans';
      position: relative;;
  }
    #trapezoid::after{
    content: ' ';
    display: block;
    position: absolute;
    height: 5px;
    width: 200px;
    position: absolute;
    top: 148px;
    background-color: #033860;
    left:-25px;
      z-index: 2;
  }
  .blur{
    filter: blur(5px);
  }
  div{
    transition: filter 1000ms
  }
</style>