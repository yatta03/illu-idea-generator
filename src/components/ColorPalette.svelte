<script lang="ts">
  let { colors = [] } = $props();
</script>

<div style="display: flex;">
  {#each colors as c}
    <div style="display: flex; flex-direction:column; align-items:center;">
      <div style="width: 100px; height: 50px; background-color: {c};"></div>
      <p>{c}</p>
    </div>
  {/each}
</div>
