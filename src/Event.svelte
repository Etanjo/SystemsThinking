<script>
 export let text = {
    displayText: 'text is you',
    popupText: ' '
  }
     import Textbox from './Textbox.svelte'
  export let editable = false
</script>
<div class="wrap" on:click>
  <div id='triangle'>
  </div>
  <div class="text" >
      <Textbox editable = {editable} bind:text={text.displayText}></Textbox>
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
  #triangle::after{
    content: ' ';
    display: block;
    position: absolute;
    height: 5px;
    width: 100px;
    position: absolute;
    top: 98px;
    background-color: #033860;
    left:-50px;
    z-index: 4;
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