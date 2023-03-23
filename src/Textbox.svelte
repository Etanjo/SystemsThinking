<script>
 export let editable = false
  export let text
</script>

{#if !editable}
  <div>{@html text}</div>
{:else}  
<div contenteditable  bind:innerHTML={text} on:keyup>  </div>
{/if}