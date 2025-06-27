<script lang="ts">
  import { getRandomUrl } from "$lib/generateUrl";
  import { goto } from "$app/navigation";

  function goRandom() {
    const key: string = getRandomUrl();
    goto(`./${key}`);
  }
</script>

<h1>Welcome to idea generator</h1>
<button onclick={goRandom}>Start</button>
