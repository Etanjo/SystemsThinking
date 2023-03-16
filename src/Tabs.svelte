<script>
  import Tab from './Tab.svelte'
  export let active
  export let onChangeTab
</script>

<Tab title = "display" top = 600 left = 193 active = {active=="display"} on:click={()=>{onChangeTab("display")}}/>
<Tab title = "edit" top = 600 left = 300 active = {active=="edit"} on:click={()=>{onChangeTab("edit")}}/>
<Tab title = "example" top = 600 left = 364 active = {active=="example"} on:click={()=>{onChangeTab("example")}}/>


<style>
  
</style>