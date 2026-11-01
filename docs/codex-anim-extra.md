# 給 Codex 的指令：補畫社會技巧動畫的「被拒絕」畫面

**使用方法**：把下面「指令」整段複製，貼給 Codex。

---

## 指令

請在 GitHub 倉庫 `snoopyteacher888/sedu.learnspace` 的 **`animation-assets-original` 分支**補畫社會技巧動畫的關鍵畫面。

**重要：所有工作都在 `animation-assets-original` 分支上做，不要推到 `main`。** 原始 PNG 很大，`main` 是網站用的，放進去會讓網站超過 GitHub Pages 的大小上限。開始前請先執行 `git checkout animation-assets-original`。

**背景**
`animation-assets-original` 分支的 `social-skills/animation-assets/` 已經有 13 個情境、每個情境 31 張關鍵畫面。網站原本的情境 4 和情境 10，在「正確做法」的最後還有一段「如果同學說不行／不想聊，該怎麼辦」，但目前的 31 張裡沒有這一段。請各補 3 張。

**畫風和角色：一定要和現有畫面完全一致**
- 先打開並參考同一個資料夾裡現有的畫面，沿用一模一樣的場景、機位、焦段、光線和角色外型。
  - 情境 4 參考 `S04_join_Frame_17.png` 和 `S04_join_Frame_30.png`
  - 情境 10 參考 `S10_friend_Frame_17.png` 和 `S10_friend_Frame_30.png`
- 角色設定請照 `social-skills/animation-assets/frame-list.json` 裡的 `cast`。喬治穿暖橘色上衣、灰藍長褲；小晴棕色及肩髮、粉色上衣；阿明黑色短髮、鼠尾草綠上衣；小如深棕低雙馬尾、淺藍上衣。
- 溫暖日系手繪動畫風格，16:9 橫式，和現有圖片差不多大（約 1672 × 941）。
- 畫面裡不要有文字、對話框、漫畫符號或浮水印。上方約 20% 保留給網站放旁白。
- 表情自然，被拒絕的一方是平靜接受，不是難過大哭；拒絕的一方是友善地說，不是兇。

**要畫的 6 張**

情境 4「我也想一起玩」（操場邊，小晴和阿明在傳球）
- `S04_join_Frame_32.png`：喬治站在球場邊，舉起一隻手詢問；阿明抱著球，表情友善但有點為難。
- `S04_join_Frame_33.png`：阿明微笑、輕輕搖手，表示「我們快玩完了，下次好嗎」；小晴站在旁邊。
- `S04_join_Frame_34.png`：喬治點頭、輕鬆揮手說「好，那下次」，轉身走向畫面左側的步道；兩位同學也揮手。

情境 10「同學不理我」（操場旁樹蔭長椅，小如坐著看書）
- `S10_friend_Frame_32.png`：喬治站在長椅旁和小如說話；小如把書抱在胸前，表情平靜，表示想自己看書。
- `S10_friend_Frame_33.png`：喬治點頭表示了解，保持距離；遠處的阿明出現在畫面左後方。
- `S10_friend_Frame_34.png`：阿明向喬治揮手邀他一起玩，喬治轉身走向阿明；小如繼續安心看書。

**放進倉庫**
1. 確認目前在 `animation-assets-original` 分支，把 6 張 PNG 放在 `social-skills/animation-assets/S04_join/` 和 `social-skills/animation-assets/S10_friend/`，檔名照上面寫的。
2. 在 `frame-list.json` 的 `frames` 陣列加上這 6 張的資料：`kind` 寫 `"twist"`，`action` 寫上面的動作描述。
3. commit 訊息寫「補畫情境 4、10 被拒絕時的畫面」，推到 **`animation-assets-original` 分支**（`git push origin animation-assets-original`）。**不要推到 `main`，也不要開 PR 合併到 `main`。**
4. 推完告訴老師，老師再請 Claude 把這 6 張轉成網頁用的壓縮版，接進網站的動畫裡。
