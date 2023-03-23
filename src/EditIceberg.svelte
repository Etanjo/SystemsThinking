<script>
  import Event from './Event.svelte'
  import Mental from './MentalModel.svelte'
  import Pattern from './Pattern.svelte'
  import Structure from './Structure.svelte'
  import Popup from './Popup.svelte'
  import {globalText} from './store.js'
  import {forceUpdate} from './store.js'

  let text
  globalText.subscribe(value => {
		text = value;
	})

  
</script>


<main>
  <Popup open = true text = {$globalText.events} editable = true on:keyup ={()=>forceUpdate()}/>
  <Event text = {text.events} editable = true on:keyup ={()=>forceUpdate()}/> 
  <label>Visible Events</label>
  <Popup open = true text = {text.patterns} editable = true on:keyup ={()=>forceUpdate()}/>
  <Pattern text = {text.patterns} editable = true on:keyup ={()=>forceUpdate()}/> 
  <label>Patterns</label>
  <Popup open = true text = {text.structures} editable = true on:keyup ={()=>forceUpdate()}/>
  <Structure text = {text.structures} editable = true on:keyup ={()=>forceUpdate()}/>
  <label>Structures</label>
  <Popup open = true text = {text.mentalModel} editable = true on:keyup ={()=>forceUpdate()}/>
  <Mental text = {text.mentalModel} editable = true on:keyup ={()=>forceUpdate()}/>
  <label>Mental Models</label>
  </main>


<style>
main{
  display: grid;
  grid-template-columns: min-content min-content min-content;
  justify-items: center;
  align-items: center;
  width: 70%;
  position: absolute;
  left: 17%;
  top: 20%;
}


  main :global(*:nth-child(odd)){
    justify-self:center
  }
  
  div{
  position: relative;
    
  }
  label{
    color: #303633;
    display: block;
    align-self: center;
  }
  Event{
    z-index:4;
  }
  Pattern{
    z-index:3;
  }
  Structure{
    z-index: 2;
  }
</style>