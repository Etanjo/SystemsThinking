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
    displayText: "I can't open my car",
    popupText: "I went to the parking lot after work to go home and my car's doors where locked"
  }
  export let patterns = {
    displayText: "I often can't find my keys",
  popupText: 'This is a common occurence. Twice a week (Tuesdays and Thursdays of course) my car keys disappear and then I find them in my locked car and i have to call a lock smith'
  }
  export let structures = {
    displayText: "I always put my keys in my pocket before i get into my car because its a push to start",
    popupText: "when ever I leave my house I put my car keys in my pocket and leave them there because my car is a push to start and its not needed for me to have my keys out to start my car." 
  }
  export let mentalModel = {
    displayText: "putting my keys in my pocket give them the chace to fall out when I am getting out of my car and locking it.",
    popupText: "Every week when I go into work and my car keys fall out of my pocket when I lock my because I use the lock buttons on the car door to lock my car and not my keys. when I'm at home my keys fall out of my pockets a lot and i always have to find. I really should buy pants with deeper pockets."
  }
  
</script>


<main>
  <Popup open = {eOpen} text = {events.popupText}/>
  <Event text = {events} on:click={()=>eOpen = !eOpen}/> 
  <label>Visible Events</label>
  <Popup open = {pOpen} text = {patterns.popupText}/>
  <Pattern text = {patterns} on:click={()=>pOpen = !pOpen}/> 
  <label>Patterns</label>
  <Popup open = {sOpen} text = {structures.popupText}/>
  <Structure text = {structures} on:click={()=>sOpen = !sOpen}/>
  <label>Structures</label>
  <Popup open = {mOpen} text = {mentalModel.popupText}/>
  <Mental text = {mentalModel} on:click={()=>mOpen = !mOpen}/>
  <label>Mental Models</label>
</main>

<style>
main{
  display: grid;
  grid-template-columns: min-content min-content min-content;
  justify-items: center;
  align-items: center;
  width: 100vw;
  position: absolute;
  left: 60px;
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