<script>
  import Tab from './Tab.svelte'
  export let active
  export let onChangeTab
</script>

<Tab title = "display" top = 600 left = 238 change="display" active = {active=="display"} on:click={()=>{onChangeTab("display")}}/>
<Tab title = "test" top = 600 left = 300 change="edit" active = {active}/>
<Tab title = "test" top = 600 left = 362 change="example" active = {active}/>


<style>
  
</style>