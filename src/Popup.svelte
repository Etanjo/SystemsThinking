<script>
  import Textbox from './Textbox.svelte'
export let open = false
export let text = {
  displayText: "",
  popupText: ""
}
export let editable = false
</script>

<main>
   <div class:open>
     <Textbox editable = {editable} bind:text={text.popupText}></Textbox>
   </div>
</main>

<style>
 div{
   opacity: 0;
   pointer-events: none;
   transition: all 200ms;
   width: 500px;
   height: 80px;
   overflow-y: auto;
   color: #303633;
   border: 2px solid #033860;
   border-radius: 3px;
   background-color: #D7F6FE;
   padding: 1px;
   
 }
  div::-webkit-scrollbar-track{
    background: #D7F6FE;
  }
  div.open{
    opacity: 1;
    pointer-events: all;
    
  }
</style>