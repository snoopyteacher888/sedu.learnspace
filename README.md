# 四德學輔班學習樂園

網址：https://snoopyteacher888.github.io/sedu.learnspace/

- `index.html`：首頁（選科目）。點進科目後在同一個網址、同一個分頁裡顯示，上方有「🏠 回學習樂園」。
- 三年級數學：另一個 repo [`nani-math-3`](https://github.com/snoopyteacher888/nani-math-3)（南一版三上，數學跑跑樂園：跑酷複習遊戲）。網址 https://snoopyteacher888.github.io/nani-math-3/
- 五、六年級數學：[`hanlin-math-5`](https://github.com/snoopyteacher888/hanlin-math-5)、[`hanlin-math-6`](https://github.com/snoopyteacher888/hanlin-math-6)（翰林版五上、六上；和三年級共用同一套程式，在 `nani-math-3` 改好再同步）。
- `social-skills/`：社會技巧「和喬治一起練習相處」（13 個情境：看一看 → 停！想一想 → 選一選 → 換個方式 → 換我練）。

## 手機版／網頁版
第一次進首頁會先選「📱 手機版」或「💻 網頁版」，之後首頁上方可以切換。設定存在 localStorage 的 `sedu:device`（同一個 github.io 網址底下的國語、數學網站都讀得到），打開科目時也會在網址加上 `?device=phone` 或 `?device=web`。

## 新增或開放一個科目

打開 `index.html`，找到 `var GROUPS = [`，把該科目的 `url: null` 改成網站位置，例如：

```js
{ id: 'math-5', name: '五年級數學', ic: '📐', color: '#2A63A8', url: '../math-5/' },
```

`url` 是 `null` 的科目會顯示「準備中」。
