# 四德學輔班學習樂園

網址：https://snoopyteacher888.github.io/sedu.learnspace/

- `index.html`：首頁（選科目）。點進科目後在同一個網址、同一個分頁裡顯示，上方有「🏠 回學習樂園」。
- `social-skills/`：社會技巧「阿樂的社會技巧教室」（6 個情境：看一看 → 停！想一想 → 選一選 → 換個方式 → 換我練）。

## 新增或開放一個科目

打開 `index.html`，找到 `var GROUPS = [`，把該科目的 `url: null` 改成網站位置，例如：

```js
{ id: 'math-5', name: '五年級數學', ic: '📐', color: '#2A63A8', url: '../math-5/' },
```

`url` 是 `null` 的科目會顯示「準備中」。
