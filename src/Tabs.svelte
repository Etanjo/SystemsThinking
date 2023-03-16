<script>
  import Tab from './Tab.svelte'
  export let active
  export let onChangeTab
</script>

<Tab title = "display" top = 600 left = 603 active = {active=="display"} on:click={()=>{onChangeTab("display")}}/>
<Tab title = "edit" top = 600 left = 710 active = {active=="edit"} on:click={()=>{onChangeTab("edit")}}/>
<Tab title = "example" top = 600 left = 774 active = {active=="example"} on:click={()=>{onChangeTab("example")}}/>


<style>
  
</style>