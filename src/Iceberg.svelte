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
  <div><Event/> <label>Visible Events</label></div>
  <div><Pattern text = {patterns}/> <label>Patterns</label></div>
  <div><Structure/><label>Structures</label></div>
  <div><Mental/><label>Mental Models</label></div>
</main>

<style>
main{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}
  div{
   display: flex;
    align-items: center;
  }
  label{
    color: #303633;
  }
</style>