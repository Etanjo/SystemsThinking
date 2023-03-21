<script>
  import Event from './Event.svelte'
  import Mental from './MentalModel.svelte'
  import Pattern from './Pattern.svelte'
  import Structure from './Structure.svelte'
  import Popup from './Popup.svelte'

  let eOpen = false
  let pOpen = false
  let sOpen = false
  let mOpen = false

  let text

  import {globalText} from './store.js'
  globalText.subscribe(value => {
		text = value;
	})
  
</script>



<main>
  <Popup open = {eOpen} text = {text.events}/>
  <Event text = {text.events} on:click={()=>eOpen = !eOpen}/> 
  <label>Visible Events</label>
  <Popup open = {pOpen} text = {text.patterns}/>
  <Pattern text = {text.patterns} on:click={()=>pOpen = !pOpen}/> 
  <label>Patterns</label>
  <Popup open = {sOpen} text = {text.structures}/>
  <Structure text = {text.structures} on:click={()=>sOpen = !sOpen}/>
  <label>Structures</label>
  <Popup open = {mOpen} text = {text.mentalModel}/>
  <Mental text = {text.mentalModel} on:click={()=>mOpen = !mOpen}/>
  <label>Mental Models</label>
</main>


<style>
main{
  display: grid;
  grid-template-columns: min-content min-content min-content;
  /*justify-content: center;*/
  justify-items: center;
  align-items: center;
  /*display: flex;
  flex-direction: column;
  align-items: center;*/
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