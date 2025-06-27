<script lang="ts">
  let { words = [] } = $props();
</script>

<div style="display: flex;">
  {#each words as w}
    <div style="display: flex; flex-direction:column; align-items:center;">
      <div style="width: 100px; height: 50px;"></div>
      <p>{w}</p>
    </div>
  {/each}
</div>
