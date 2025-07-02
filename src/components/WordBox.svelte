<script lang="ts">
  let { words = [] } = $props();
</script>

<div style="display: flex; margin:auto;">
  {#each words as w}
    <div style="display: flex; flex-direction:column; align-items:center; text-align: center;">
      <div style="width: 100px; height: 50px;"></div>
      <p>{w}</p>
    </div>
  {/each}
</div>
