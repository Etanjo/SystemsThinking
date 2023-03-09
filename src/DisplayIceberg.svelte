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

  export let events = {
    displayText: "I can't find my car",
    popupText: ''
  }
  export let patterns = {
    displayText: "My car keeps going missing!!",
    popupText: ' '
  }
  export let structures = {
    displayText: 'People want cool, expensive cars like the one I have!!  ',
    popupText: ' '
  }
  export let mentalModel = {
    displayText: "Having an expensive car is often seen as a status symbol, which means you're better to be around!!!! ",
    popupText: ' '
  }
  
</script>


<main>
  <Popup open = {eOpen}/>
  <Event text = {events} on:click={()=>eOpen = !eOpen}/> 
  <label>Visible Events</label>
  <Popup open = {pOpen} />
  <Pattern text = {patterns} on:click={()=>pOpen = !pOpen}/> 
  <label>Patterns</label>
  <Popup open = {sOpen}/>
  <Structure text = {structures} on:click={()=>sOpen = !sOpen}/>
  <label>Structures</label>
  <Popup open = {mOpen}/>
  <Mental text = {mentalModel} on:click={()=>mOpen = !mOpen}/>
  <label>Mental Models</label>
</main>

<style>
main{
  display: grid;
  grid-template-columns: min-content min-content min-content;
  justify-content: center;
  justify-items: center;
  align-items: center;
  /*display: flex;
  flex-direction: column;
  align-items: center;*/
  width: 100vw;
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