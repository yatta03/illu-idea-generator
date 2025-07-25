# idea generator

想測試看看 svelte + github action 部署網站而生出的小專案  
網址：[https://yatta03.github.io/illu-idea-generator/](https://yatta03.github.io/illu-idea-generator/)

## 功能

隨機產生插畫靈感，包含顏色組合和字詞

- 顏色
  - 5 色一組 (use [nice-color-palettes](https://github.com/Experience-Monks/nice-color-palettes/tree/master))，可拖曳更改排列，點擊複製色號
  - 插圖視覺化色票組合
- 字詞
  - 目前是隨機 3 詞 (sample from predefined array)，待改
  - 可能更改方向有從更大的字詞庫取詞、從小說、歌詞取短句，或加入 LLM 來產生詞彙或短句等等

## 架構

### svelte

palette words 會被處理成 url 可表示的形式，目前做法簡單又暴力（word 轉成 array index，palette 直接用色號）

```
└── 📁src
    └── 📁components
        ├── 拆分出來的components
    └── 📁lib
        ├── generateUrl.ts  -> url encode/decode, generate
        ├── palette.ts      -> palette access
        ├── word.ts         -> word access (to be extended)
    └── 📁routes
        └── 📁[key]
            ├── +page.svelte
            ├── +page.ts    -> parse key
        ├── +layout.svelte
        ├── +page.svelte
    └── app.html
```

### deploy

利用 [svelte static adapter](https://svelte.dev/docs/kit/adapter-static)，見 [config](./svelte.config.js)  
github action 的部分見 [deploy.yml](./.github/workflows/deploy.yml)
