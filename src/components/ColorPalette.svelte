<script lang="ts">
  let { colors = [], goAssignedColor } = $props();
  let dragInx: number = -1;
  let dragOverInx: number = $state(-1);

  let isCopied: boolean = $state(false);

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

  // copy color code
  function cpClipboard(e: Event) {
    let val: string | null = e.target?.textContent;
    console.log("copied ", val);
    if (val !== null) {
      navigator.clipboard.writeText(val);
      isCopied = true;
    } else {
      return;
    }
  }
  function cpHoverLeave() {
    isCopied = false;
  }
  function isLightColor(hex: string) {
    hex = hex.replace("#", "");
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((c) => c + c)
        .join("");
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    console.log(luminance);
    return luminance < 0.6;
  }

  let tooltipLight: boolean = $derived(isLightColor(colors[0]));
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
      <button class="tooltip" onclick={(e) => cpClipboard(e)} onmouseleave={cpHoverLeave}>
        <p class="color-label">{c}</p>
        <p class="tooltiptext {tooltipLight ? 'tooltipLight' : ''}">
          {#if isCopied}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16"
              ><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                fill={colors[0]}
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              /></svg
            >
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16"
              ><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                fill={colors[0]}
                d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"
              /></svg
            >
          {/if}
        </p>
      </button>
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

  /* tooltip from w3schools */
  .tooltip {
    position: relative;
    display: inline-block;
    border: none;
    background-color: #fff;
    cursor: pointer;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 80px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    margin-left: -45px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .tooltip .tooltiptext.tooltipLight {
    background-color: #fff;
    border: 1px solid #555;
  }
  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
    transform: rotate(180deg);
  }
  .tooltip .tooltiptext.tooltipLight::after {
    border-color: #555 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
</style>
