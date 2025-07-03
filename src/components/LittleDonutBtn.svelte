<script lang="ts">
  let { colors = [], goRandom, isChangeColor, isChangeWord } = $props();
  let isHover = $state(false);
  let isClickAnimating = $state(false);

  function handleClickDonut() {
    isClickAnimating = true;
    goRandom(isChangeColor, isChangeWord);

    setTimeout(() => {
      isClickAnimating = false;
    }, 800);
  }
</script>

<svg
  width="61.995"
  height="63.822"
  viewBox="0 -5 16.403 25.886"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns="http://www.w3.org/2000/svg"
  style="
    --color1: {colors[0]};
    --color2: {colors[1]};
    --color3: {colors[2]};
    --color4: {colors[3]};
    --color5: {colors[4]};
  "
  class="little-donut"
  role="button"
  tabindex="0"
  onmouseenter={() => {
    isHover = true;
  }}
  onmouseleave={() => {
    isHover = false;
  }}
  onclick={handleClickDonut}
  onkeydown={(e) => {
    if (e.key === "Enter" || e.key === " ") handleClickDonut();
  }}
>
  <g transform="matrix(.12217 0 0 .14175 -101.663 -110.18)">
    <rect x="0" y="0" width="150" height="120" fill="transparent" />
    <g id="shadow" class="origin-center {isClickAnimating ? 'rotate-once' : isHover ? 'rotate-hover' : ''}">
      <path
        style="display:inline;fill:var(--color2);fill-opacity:1;stroke:none;stroke-width:4.07218;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal"
        d="M890.526 778.937c-20.903.517-34.958 7.208-44.059 18.024 10.167 7.438 4.307 19.323 4.307 19.323s11.78-7.045 18.426 1.533 4.229 2.45 11.781 2.756c3.645.148 5.18 3.08 5.792 6.072 25.23 2.53 39.473 1.175 36.547 12.054-3.075 11.433-15.371 22.865-25.62 15.59-5.53-3.926-11.208-7.398-14.3-12.13-1.561 1.035-3.709 1.954-6.647 2.616-13.593 3.064-22.656 9.497-26.885 1.838-2.571-4.656-11.284-2.405-17.72.076 2.255 30.571 34.094 49.692 68.626 49.692 36.894 0 64.564-19.746 65.59-54.044 1.024-34.298-14.347-56.124-75.838-63.4"
      />
    </g>
    <g id="donut" class="origin-center {isClickAnimating ? 'rotate-once' : isHover ? 'rotate-hover' : ''}">
      <path
        style="display:inline;fill:var(--color4);fill-opacity:1;stroke:var(--color5);stroke-width:3.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:normal"
        d="M890.212 779.058c-13.429 0-30.279 4.301-43.932 18.285 3.502 7.545 5.179 11.891 5.179 11.891s10.488-6.184 16.404 1.346 3.765 2.151 10.489 2.42c3.244.13 4.611 2.703 5.156 5.33 22.462 2.221 35.142 1.031 32.537 10.582-2.737 10.036-13.685 20.072-22.809 13.686-4.923-3.446-9.978-6.495-12.73-10.649-1.39.909-3.303 1.716-5.918 2.297-12.102 2.69-20.17 8.337-23.936 1.613-2.289-4.087-10.045-2.11-15.775.067 2.008 26.837 30.353 43.623 61.096 43.623 32.846 0 57.48-17.334 58.392-47.444.913-30.109-15.988-53.048-64.153-53.047"
      />
      <path
        style="display:inline;fill:var(--color5);fill-opacity:1;stroke:var(--color5);stroke-width:3.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
        d="M912.178 787.104a49 49 0 0 0-3.639.023c-6.052.249-13.194 1.468-21.234 3.008-7.513.413-14.49-2.861-23.887-.95-6.234 1.268-11.959 20.05-11.959 20.05s10.488-6.185 16.404 1.345 3.765 2.151 10.489 2.42c3.244.13 4.611 2.703 5.156 5.33 22.462 2.221 35.142 1.031 32.537 10.582-2.737 10.036-13.685 20.072-22.809 13.686-4.923-3.446-9.978-6.495-12.73-10.649-1.39.909-3.303 1.716-5.918 2.297-12.102 2.69-20.17 8.337-23.936 1.613-.497-.888-1.253-1.49-2.19-1.865 1.907 10.136 14.62 7.39 19.683 13.621 5.93 7.3 5.474 20.073 20.529 23.723s21.898-3.65 35.584-8.668 14.142-5.93 18.248-22.354c4.106-16.423-.002-15.055-7.3-19.617-7.3-4.562-1.37-10.947-6.388-23.72-2.744-6.986-8.49-9.607-16.64-9.876"
      />
      <path
        style="display:inline;fill:var(--color3);fill-opacity:1;stroke:var(--color5);stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
        d="M853.08 800.652c-10.593-7.802-11.77 4.32-11.458 6.56 1.339 9.64 9.692 6.237 9.868 9.227s1.622 3.661 8.705 5.462c11.174 2.842 21.718-.984 22.317-4.07-.382-2.958-.463-4.683-4.16-4.831-6.724-.269-1.377.256-7.294-7.274s-18.758 1.552-18.758 1.552 4.305-4.03.78-6.626"
      />
      <path
        style="display:inline;fill:var(--color1);fill-opacity:1;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
        d="M857.895 859.958c6.465-6.465 15.213-2.662 6.846 2.282-8.368 4.945-14.453 4.945-6.846-2.282"
        id="a"
      />
      <use
        xlink:href="#a"
        transform="rotate(-50.737 883.488 817.312)"
        style="fill:var(--color1);fill-opacity:1;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
      />
      <use
        xlink:href="#a"
        transform="rotate(75.803 903.5 899.673)"
        style="fill:var(--color1);fill-opacity:1;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
      />
      <use
        xlink:href="#a"
        transform="rotate(21.416 1004.409 1033.963)"
        style="fill:var(--color1);fill-opacity:1;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
      />
      <use
        xlink:href="#a"
        transform="translate(28.886 -74.744)"
        style="fill:var(--color1);fill-opacity:1;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
      />
      <use
        xlink:href="#a"
        transform="rotate(-45.513 842.28 838.652)"
        style="fill:var(--color1);fill-opacity:1;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
      />
      <use
        xlink:href="#a"
        transform="rotate(66.599 911.42 849.123)"
        style="fill:var(--color1);fill-opacity:1;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
      />
      <use
        xlink:href="#a"
        transform="translate(56.317 -66.138)"
        style="fill:var(--color1);fill-opacity:1;stroke:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
      />
    </g>
  </g>
</svg>

<style>
  /* set origin to center of element */
  .origin-center {
    transform-box: fill-box;
  }

  .little-donut:hover {
    cursor: pointer;
  }

  /* This class will make it spin continuously */
  .rotate-hover {
    animation: rotateInf 2s linear infinite;
    transform-origin: center;
  }

  @keyframes rotateInf {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* This class triggers a single 360 spin */
  .rotate-once {
    animation: rotateOnce 0.8s ease-out forwards;
    transform-box: fill-box;
    transform-origin: center;
  }

  @keyframes rotateOnce {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
