<script>
  import Tab from './Tab.svelte'
  export let active
  export let onChangeTab
</script>

<Tab title = "display" top = 600 left = 503 active = {active=="display"} on:click={()=>{onChangeTab("display")}}/>
<Tab title = "edit" top = 600 left = 635 active = {active=="edit"} on:click={()=>{onChangeTab("edit")}}/>
<Tab title = "example" top = 600 left = 767 active = {active=="example"} on:click={()=>{onChangeTab("example")}}/>


<style>
  
</style>