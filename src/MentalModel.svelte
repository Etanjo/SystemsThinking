<script>
  import Popup from './Popup.svelte'
  let open = false
    export let text = {
    displayText: 'Bozo',
    popupText: ' '
  }
    import Textbox from './Textbox.svelte'
  export let editable = false

</script>

<main>

  <div id='trapezoid' on:click>
      <Textbox editable = {editable} bind:text={text.displayText} on:keyup></Textbox>
    </div>
</main>

<style>
  #trapezoid {
    text-align: center;
      border-bottom: 200px solid #D7F6FE;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      height: 0;
      width: 200px;
      color: #303633;
      font-family: 'PT Sans';
      position: relative;;
  }
      #trapezoid::after{
    content: ' ';
    display: block;
    position: absolute;
    height: 5px;
    width: 250px;
    position: absolute;
    top: 198px;
    background-color: #033860;
    left:-25px;
      z-index: 2;
  }
</style>