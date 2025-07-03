<script lang="ts">
  let { words = [] } = $props();
</script>

<div class="word-container">
  {#each words as w}
    <div class="word-tile">
      <p>{w}</p>
    </div>
  {/each}
</div>

<style>
  .word-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .word-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-inline: 20px;
    font-size: 0.85rem;
    color: #333;
    user-select: none;
  }
</style>
