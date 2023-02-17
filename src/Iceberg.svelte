<script>
  import Event from './Event.svelte'
  import Mental from './MentalModel.svelte'
  import Pattern from './Pattern.svelte'
  import Structure from './Structure.svelte'

  export let events = {
    displayText: ' ',
    popupText: ''
  }
  export let patterns = {
    displayText: "My car keeps going missing!!",
    popupText: ' '
  }
  export let structures = {
    displayText: ' ',
    popupText: ' '
  }
  export let mentalModel = {
    displayText: ' ',
    popupText: ' '
  }
  
</script>


<main>
  <Event/> 
  <label>Visible Events</label>
  <Pattern text = {patterns}/> 
  <label>Patterns</label>
  <Structure/>
  <label>Structures</label>
  <Mental/>
  <label>Mental Models</label>
</main>

<style>
main{
  display: grid;
  grid-template-columns: min-content min-content;
  justify-content: center;
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