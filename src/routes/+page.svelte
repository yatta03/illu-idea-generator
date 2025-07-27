<script lang="ts">
  import { getRandomUrl } from "$lib/generateUrl";
  import { goto } from "$app/navigation";
  import LittleDonutBtn from "../components/LittleDonutBtn.svelte";

  const donutColors = ["#9cddc8", "#bfd8ad", "#ddd9ab", "#f7af63", "#633d2e"];
  function goRandom() {
    const key: string = getRandomUrl();
    goto(`./${key}`);
  }
</script>

<div class="tx-center center-v">
  <h1 class="title">Welcome to idea generator</h1>
  <div style="display: block; margin-bottom:12px;">
    <LittleDonutBtn colors={donutColors} {goRandom} isChangeColor={true} isChangeWord={true} />
  </div>
  <div class="tx-center">
    <button class="s-btn" onclick={goRandom}>Start</button>
  </div>
</div>

<style>
  .tx-center {
    display: flex;
    flex-direction: column;
    margin: auto;
    text-align: center;
  }
  .center-v {
    margin-top: 30vh;
  }
  .title {
    color: #633d2e;
    background-color: #bfd8ad;
    padding: 8px 8px 12px 8px;
    border-radius: 12px;
  }
  .s-btn {
    padding: 8px 12px;
    font-size: 22px;
    font-weight: bold;
    color: #9cddc8;
    background-color: #633d2e;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition:
      background-color 0.2s,
      transform 0.1s,
      box-shadow 0.2s;
  }

  .s-btn:hover {
    background-color: #4a3228;
  }

  .s-btn:active {
    transform: scale(0.97);
    background-color: #633d2e;
  }
</style>
