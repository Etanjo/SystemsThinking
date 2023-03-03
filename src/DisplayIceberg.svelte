<script>
  import Event from './Event.svelte'
  import Mental from './MentalModel.svelte'
  import Pattern from './Pattern.svelte'
  import Structure from './Structure.svelte'

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
  <Event text = {events}/> 
  <label>Visible Events</label>
  <Pattern text = {patterns}/> 
  <label>Patterns</label>
  <Structure text = {structures}/>
  <label>Structures</label>
  <Mental text = {mentalModel}/>
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