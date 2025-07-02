<script lang="ts">
  let { colors = [], goAssignedColor } = $props();
  let dragInx: number = -1;
  let dragOverInx: number = $state(-1);

  function handleDragStart(e: Event, inx: number) {
    dragInx = inx;
  }

  function handleDragOver(e: Event, inx: number) {
    e.preventDefault();
    dragOverInx = inx;
  }

  function handleDrop(e: Event, targetInx: number) {
    e.preventDefault();

    if (dragInx === -1 || dragInx === targetInx) {
      dragInx = -1;
      dragOverInx = -1;
    }

    // Swap the colors
    const newColors = [...colors];
    const temp = newColors[dragInx];
    newColors[dragInx] = newColors[targetInx];
    newColors[targetInx] = temp;
    dragInx = -1;
    dragOverInx = -1;

    goAssignedColor(newColors);
  }
</script>

<div class="palette-container">
  {#each colors as c, inx}
    <div
      role="button"
      tabindex="0"
      class="color-tile {dragOverInx === inx ? 'drag-over' : ''}"
      draggable="true"
      ondragstart={(e) => handleDragStart(e, inx)}
      ondragover={(e) => handleDragOver(e, inx)}
      ondrop={(e) => handleDrop(e, inx)}
    >
      <div class="color-block" style="background-color: {c};"></div>
      <p class="color-label">{c}</p>
    </div>
  {/each}
</div>

<style>
  .palette-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
  }
  .color-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: grab;
  }

  .color-tile:active {
    cursor: grabbing;
    transform: scale(0.95);
  }

  .color-block {
    width: 100px;
    height: 50px;
    margin-bottom: 8px;
  }

  .color-label {
    margin: 0;
    font-size: 0.85rem;
    color: #333;
    user-select: none;
  }

  .drag-over {
    border: 2px dashed #333;
    background: #e0f7ff;
  }
</style>
