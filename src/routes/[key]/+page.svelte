<script lang="ts">
  import { goto } from "$app/navigation";
  import { encodeUrl, getRandomUrl } from "$lib/generateUrl";
  import ColorPalette from "../../components/ColorPalette.svelte";
  import WordBox from "../../components/WordBox.svelte";
  import PaletteVisual from "../../components/PaletteVisual.svelte";
  import LittleDonutBtn from "../../components/LittleDonutBtn.svelte";

  const { data } = $props();
  const colors = $derived(data.colors || []);
  const words = $derived(data.words || []);
  const wordInxes = $derived(data.wordInxes);

  function goRandom(isChangeColor = true, isChangeWord = true) {
    const key: string = getRandomUrl(isChangeColor, isChangeWord, colors, wordInxes);
    goto(`./${key}`);
  }

  function goAssignedColor(newColors: string[]) {
    const key: string = encodeUrl(newColors, wordInxes);
    goto(`./${key}`);
  }
</script>

<PaletteVisual {colors} {goRandom} />
<div class="bg" style="--color5:{colors[4]};">
  <div
    class="lrmargin-box"
    style="
    --color1: {colors[0]};"
  >
    <div class="fw-container">
      <div class="content">
        <ColorPalette {colors} {goAssignedColor} />
      </div>
      <div class="side-btn-container">
        <LittleDonutBtn {colors} {goRandom} isChangeColor={true} isChangeWord={false} />
      </div>
    </div>

    <div class="fw-container">
      <div class="content">
        <WordBox {words} />
      </div>
      <div class="side-btn-container">
        <LittleDonutBtn {colors} {goRandom} isChangeColor={false} isChangeWord={true} />
      </div>
    </div>
  </div>
</div>

<style>
  .bg {
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: -318.75px;
    background-color: color-mix(in srgb, var(--color5) 60%, transparent);
  }
  .fw-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    max-width: 90%;
    flex-wrap: nowrap;
    margin-bottom: 50px;
  }
  .lrmargin-box {
    z-index: 1;
    min-width: 75%;
    margin: 280px auto 20px auto;
    border-radius: 8px;
    box-shadow: 0 2px 6px var(--color1);
    background-color: #fff;
  }
  .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }
  .side-btn-container {
    margin-left: 20px;
  }
</style>
