<script>
  import Event from './Event.svelte'
  import Mental from './MentalModel.svelte'
  import Pattern from './Pattern.svelte'
  import Structure from './Structure.svelte'
</script>


<main>
  <div><Event/> <label>Visible Events</label></div>
  <div><Pattern/> <label>Patterns</label></div>
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