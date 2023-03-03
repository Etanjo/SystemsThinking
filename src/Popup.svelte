<script lang="ts">
  export let name = "click to open!"
  let open = false
  let seen = false
function popUp () {
  if (!seen) {seen = true}
  open = !open;
}
</script>

<main>
  <article class:open on:click={popUp}>
    <h4>{name}</h4>
    <div class = openpopup>
       <span class:visible={seen && !open}>Patterns</span>
    </div>   
</main>

<style>
  span {
   opacity: 0;
   transition: opacity 500ms;

 } 
  .openpopup {
     color: black;
    font-family: 'PT Sans Narrow', sans-serif;
    font-size: 30px;
    text-align: center;
    background-color: red;
    margin-top: -70px;
    margin-bottom: -30px;
    padding: 70px;
  }
      h4 {
      color: white;
      font-size: 35px;
         font-family: 'PT Sans Narrow', sans-serif;
      text-align: center;
      padding: px;
      margin: -20px;
    }
</style>