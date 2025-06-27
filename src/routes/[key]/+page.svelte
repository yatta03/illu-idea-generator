<script lang="ts">
  import { goto } from "$app/navigation";
  import { getRandomUrl } from "$lib/generateUrl";
  import ColorPalette from "../../components/ColorPalette.svelte";
  import WordBox from "../../components/WordBox.svelte";

  const { data } = $props();
  const colors = $derived(data.colors || []);
  const words = $derived(data.words || []);
  const paletteInx = $derived(data.paletteInx);
  const wordInxes = $derived(data.wordInxes);

  function goRandom(isChangeColor = true, isChangeWord = true) {
    const key: string = getRandomUrl(isChangeColor, isChangeWord, paletteInx, wordInxes);
    goto(`./${key}`);
  }
</script>

<button onclick={() => goRandom(true, true)}>regenerate all</button>
<button onclick={() => goRandom(true, false)}>click for palette</button>
<ColorPalette {colors} />

<button onclick={() => goRandom(false, true)}>click for words</button>
<WordBox {words} />
