<script>
  import Tab from './Tab.svelte'
  export let active
  export let onChangeTab
</script>

<Tab title = "display" top = 775 left = 767 active = {active=="display"} on:click={()=>{onChangeTab("display")}}/>
<Tab title = "edit" top = 775 left = 900 active = {active=="edit"} on:click={()=>{onChangeTab("edit")}}/>


<style>
  
</style>