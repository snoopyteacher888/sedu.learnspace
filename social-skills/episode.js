/* ================= 完整版單集（樣本：情境 5 被笑的時候） =================
 * 影片約 3～4 分鐘：情境開場 → 喬治這樣做 → 倒帶：喬治的心裡話 → 策略加油站（跟著一起做）
 *                 → 換個方式做 → 換個地方也能用 → 口訣和本週挑戰
 * 課堂模式：在 4 個討論點自動暫停提問。
 * 看完影片：8 個小任務（基礎版 2 選 1、進階版 3～4 選 1），最後是心情溫度計和「我的冷靜方法」，沒有對錯。
 * 解說都由喬治自己說（不加新角色）；旁白用 nar 的聲音。
 *
 * 一個鏡頭（shot）：
 *   img 畫格（依序播放）；cap 旁白；say 說的話；think 心裡想；
 *   mode：'memory' 倒帶畫面、'split' 心裡想的 vs 大家看到的、'breathe' 跟著深呼吸、
 *         'along' 一起說、'card' 換個地方的小卡、'sum' 口訣；step 策略編號；pause 討論點 */
(function () {
  var EP = {};
  EP.laugh = {
    chapters: ['情境開場', '喬治這樣做', '倒帶：喬治的心裡話', '策略加油站', '換個方式做', '換個地方也能用', '口訣和本週挑戰'],
    chain: ['停', '深呼吸', '說「我不喜歡」', '找老師'],
    challenge: '這個星期，被笑或很生氣的時候，試一次「停、深呼吸、說出來」。',
    shots: [
      { ch: 0, img: [1], cap: '國語課，大家輪流站起來念課文。' },
      { ch: 0, img: [2], say: [['le', '小狗在草地上跑來跑去……']] },
      { ch: 0, img: [3], cap: '念到一半，喬治卡住了。', think: [['le', '這個字怎麼念？']] },
      { ch: 1, img: [4], say: [['wei', '哈哈哈！他念不出來！']] },
      { ch: 1, img: [5, 6], think: [['le', '他在笑我！好丟臉！']] },
      { ch: 1, img: [7], cap: '喬治的臉好熱，拳頭握得好緊。' },
      { ch: 1, img: [18, 19], say: [['le', '你再笑！我打你喔！']] },
      { ch: 1, img: [20], say: [['tea', '喬治，停下來！']] },
      { ch: 1, img: [21], cap: '喬治差一點就打人，同學都嚇到了。' },
      { ch: 1, img: [21], pause: { q: '喬治現在的心情怎麼樣？你從哪裡看出來的？', hint: '很生氣、很丟臉。他的臉很紅、拳頭握緊、往前衝。' } },
      { ch: 2, img: [7], mode: 'memory', say: [['le', '等一下，我們倒帶回去看看。']] },
      { ch: 2, img: [4], mode: 'memory', say: [['le', '大偉笑我的時候，其實我心裡覺得好丟臉，好怕大家覺得我很笨。']] },
      { ch: 2, img: [6], mode: 'memory', say: [['le', '我的臉變好熱、心跳好快、拳頭一直握緊。這是我的身體在說：我生氣了！']] },
      { ch: 2, img: [19], mode: 'split', split: ['我好丟臉、好難過。', '喬治好兇，要打人。'], say: [['le', '可是大家看不到我心裡在想什麼，只看到我要打人。']] },
      { ch: 2, img: [19], mode: 'split', split: ['我好丟臉、好難過。', '喬治好兇，要打人。'], pause: { q: '喬治心裡想的，和大家看到的，有什麼不一樣？', hint: '喬治心裡是丟臉、難過，可是大家只看到他很兇、要打人。' } },
      { ch: 3, img: [8], step: 1, say: [['le', '所以我學會了三招。第一招：停！身體先不要動，把手放下來。']] },
      { ch: 3, img: [9], step: 1, say: [['le', '你也試試看：把手放在腿上，停住不動。']] },
      { ch: 3, img: [10], step: 2, say: [['le', '第二招：深呼吸。我們一起做。']] },
      { ch: 3, img: [10], step: 2, mode: 'breathe', cycles: 3 },
      { ch: 3, img: [11], step: 2, say: [['le', '吐完氣，肩膀放鬆了，心跳也慢下來了。']] },
      { ch: 3, img: [12, 13], step: 3, say: [['le', '第三招：看著對方，說出來。']] },
      { ch: 3, img: [13], step: 3, mode: 'along', along: '我不喜歡你這樣笑我。', say: [['le', '我們一起說一次：']] },
      { ch: 3, img: [15], step: 4, say: [['le', '如果他還是一直笑，就去找老師幫忙。']] },
      { ch: 3, img: [15], pause: { q: '你生氣的時候，身體會有什麼感覺？', hint: '臉變熱、心跳變快、想大叫、拳頭握緊……每個人都不一樣。' } },
      { ch: 4, img: [2, 3], cap: '我們再看一次。這一次，喬治用了三招。' },
      { ch: 4, img: [4], say: [['wei', '哈哈哈！他念不出來！']] },
      { ch: 4, img: [5, 6, 7], think: [['le', '好生氣……停！先不要動。']] },
      { ch: 4, img: [8, 9, 10, 11], cap: '喬治慢慢吸氣、吐氣，讓自己冷靜下來。' },
      { ch: 4, img: [12, 13], say: [['le', '大偉，我不喜歡你這樣笑我。']] },
      { ch: 4, img: [14], say: [['wei', '對不起，我不該笑你。']] },
      { ch: 4, img: [15, 16], say: [['le', '老師，剛剛他笑我，我有一點難過。'], ['tea', '謝謝你告訴我，你做得很好。']] },
      { ch: 4, img: [17], cap: '喬治拿好課本，繼續念下去。' },
      { ch: 4, img: [30], say: [['tea', '念錯沒關係，大家都在學習。']] },
      { ch: 4, img: [30], pause: { q: '這一次喬治做了哪些事？結果有什麼不一樣？', hint: '停下來、深呼吸、說出不喜歡、找老師。大家沒有吵架，課也可以繼續上。' } },
      { ch: 5, img: [31], mode: 'card', card: ['✨', '這三招，在別的地方也可以用'], say: [['le', '這三招，在別的地方也可以用喔！']] },
      { ch: 5, img: [31], mode: 'card', card: ['🏠', '在家裡，弟弟笑你畫得很醜'], say: [['le', '在家裡，弟弟笑我畫得很醜，我也可以先停、深呼吸，再說：「我不喜歡你這樣笑我。」']] },
      { ch: 5, img: [31], mode: 'card', card: ['⚽', '下課玩遊戲輸了，同學笑你'], say: [['le', '下課玩遊戲輸了，被同學笑的時候，也可以先停下來、深呼吸，需要的話就去找老師。']] },
      { ch: 6, img: [31], mode: 'sum', say: [['le', '記住口訣：停、深呼吸、說「我不喜歡」、找老師。']] },
      { ch: 6, img: [31], mode: 'card', card: ['🏅', '本週挑戰：被笑或很生氣的時候，試一次「停、深呼吸、說出來」'], say: [['le', '這個星期，我們一起試試看！']] }
    ],
    /* 小任務：b 基礎版、a 進階版；o 選項 [文字, 圖（畫格號碼或表情）, 對不對]；h 答錯的提示；why 答對的說明 */
    tasks: [
      { kind: '選做法', img: 4, q: '大偉笑喬治，喬治好生氣。他可以怎麼做？',
        b: [['衝過去打他', 19, 0], ['先停下來，深呼吸', 10, 1]],
        a: [['衝過去打他', 19, 0], ['罵回去：「你才笨！」', 23, 0], ['先停下來，深呼吸，再說「我不喜歡」', 10, 1], ['一直生氣，不理任何人', 7, 0]],
        h: '想一想口訣：停、深呼吸、說「我不喜歡」。', why: '生氣是正常的，先停下來、深呼吸，就不會傷害別人。' },
      { kind: '表情配對', img: 6, q: '大偉笑喬治的時候，喬治覺得怎麼樣？',
        b: [['很開心', '😄', 0], ['又丟臉又生氣', '😣', 1]],
        a: [['很開心', '😄', 0], ['很無聊', '🥱', 0], ['又丟臉又生氣', '😣', 1], ['很想睡覺', '😴', 0]],
        h: '看看喬治的眉毛和拳頭。', why: '眉頭皺起來、拳頭握緊，喬治又丟臉又生氣。' },
      { kind: '猜猜心裡話', img: 7, q: '喬治想打人的時候，心裡其實在想什麼？',
        b: [['我好丟臉、好難過', '💭', 1], ['我想去玩球', '⚽', 0]],
        a: [['我好丟臉、好難過', '💭', 1], ['我想去玩球', '⚽', 0], ['我覺得念課文好無聊', '📖', 0]],
        h: '喬治倒帶的時候說過：他其實覺得……', why: '喬治心裡是丟臉、難過，只是用了生氣的方式表現出來。' },
      { kind: '別人看到的', img: 19, q: '喬治心裡很難過，可是大家看到的是什麼？',
        b: [['喬治好兇，要打人', 19, 1], ['喬治很難過', 6, 0]],
        a: [['喬治好兇，要打人', 19, 1], ['喬治很難過', 6, 0], ['喬治在念課文', 2, 0]],
        h: '大家看不到心裡想的，只看得到做了什麼。', why: '心裡的想法別人看不到，用說的，別人才會懂。' },
      { kind: '步驟排序', q: '把喬治的三招照順序排好。按一按，排出第一、第二、第三。',
        b: ['停', '深呼吸', '說「我不喜歡」'], a: ['停', '深呼吸', '說「我不喜歡」', '找老師'],
        h: '先讓身體停住，再深呼吸，最後用說的。', why: '停、深呼吸、說出來，順序完全正確！' },
      { kind: '對還是不對', img: 13, q: '喬治看著大偉說：「我不喜歡你這樣笑我。」這樣做好嗎？',
        b: [['好', '⭕', 1], ['不好', '❌', 0]], a: [['好', '⭕', 1], ['不好', '❌', 0]],
        h: '喬治有沒有打人、罵人？', why: '喬治用說的說出心情，沒有傷害別人。' },
      { kind: '換個地方', q: '在家裡，弟弟笑你畫得很醜，你很生氣。你可以怎麼做？',
        b: [['把弟弟的畫撕掉', '✂️', 0], ['先深呼吸，說「我不喜歡你這樣笑我」', '🌬️', 1]],
        a: [['把弟弟的畫撕掉', '✂️', 0], ['推弟弟一下', '✋', 0], ['先深呼吸，說「我不喜歡你這樣笑我」', '🌬️', 1], ['一直哭，不理任何人', '😭', 0]],
        h: '在家裡也可以用三招。', why: '在家裡也可以用：停、深呼吸、說出來。' },
      { kind: '我的感受', q: '被笑的時候，你的心情溫度計會到哪裡？', feel: 1 }
    ]
  };
  window.EPISODES = EP;
})();

/* ================= 播放器 ================= */
var EPS = { sc: -1, i: 0, playing: false, tok: 0, t: [], classroom: true, tab: 'video', level: 'b', task: 0, score: [], tries: 0, seq: [] };
try { var cm = localStorage.getItem('ep-classroom'); if (cm !== null) EPS.classroom = cm === '1'; var lv = localStorage.getItem('ep-level'); if (lv) EPS.level = lv; } catch (e) {}
function epData() { return SCENES[state.sc].ep; }
function epClear() { EPS.tok++; EPS.t.forEach(clearTimeout); EPS.t = []; stopAll(); }
function epLater(fn, ms) { var tok = EPS.tok; EPS.t.push(setTimeout(function () { if (tok === EPS.tok) fn(); }, ms)); }
function epVoice(list, done) {
  /* list：[角色, 文字]；nar＝旁白 */
  var segs = list.map(function (x) {
    var who = x[0], t = dot(x[1]), sx = who === 'nar' ? 'f' : sexOf(SCENES[state.sc].cast[who] || { kind: 'kid' });
    return [t, sx, who];
  });
  speakSeq(segs, done);
}
function epSayBtn(t) { return '<button class="say" data-ept="' + esc(t) + '" aria-label="念出來">🔊</button>'; }
document.addEventListener('click', function (e) {
  var b = e.target.closest && e.target.closest('[data-ept]');
  if (!b) return; e.preventDefault(); e.stopPropagation(); stopAll(); epVoice([['nar', b.dataset.ept]]);
}, true);

function renderEpisode() {
  var s = SCENES[state.sc], ep = s.ep;
  if (EPS.sc !== state.sc) { EPS.sc = state.sc; EPS.i = 0; EPS.tab = 'video'; EPS.task = 0; EPS.score = []; }
  $('#main').innerHTML =
    '<div class="bar2"><button class="btn sm" id="back">← 情境列表</button><h2>情境 ' + (state.sc + 1) + '　' + esc(s.title) + '<span class="epbadge">完整版</span></h2>' +
    '<span class="note on-bg" id="voice-note" style="margin:0">' + voiceNote() + '</span>' +
    '<button class="btn sm" id="tts" aria-pressed="' + state.tts + '">' + (state.tts ? '🔊 語音：開' : '🔇 語音：關') + '</button></div>' +
    '<ol class="steps ep3">' + [['video', '①看影片', '喬治的故事'], ['tasks', '②小任務', '點一點、選一選'], ['mine', '③我的方法', '口訣和本週挑戰']].map(function (x) {
      return '<li><button data-tab="' + x[0] + '" data-label="' + x[1].slice(1) + '"' + (EPS.tab === x[0] ? ' aria-current="step"' : '') + '><b>' + x[1] + '</b><span>' + x[2] + '</span></button></li>';
    }).join('') + '</ol><div id="epbody"></div>';
  $('#back').onclick = function () { epClear(); state.view = 'list'; render(); };
  $('#tts').onclick = function (e) {
    state.tts = !state.tts; try { localStorage.setItem('le-tts', state.tts ? '1' : '0'); } catch (err) {}
    e.currentTarget.textContent = state.tts ? '🔊 語音：開' : '🔇 語音：關'; e.currentTarget.setAttribute('aria-pressed', state.tts);
    if (!state.tts) stopAll();
  };
  document.querySelectorAll('.ep3 button').forEach(function (b) { b.onclick = function () { epClear(); EPS.tab = b.dataset.tab; renderEpisode(); }; });
  if (EPS.tab === 'video') epVideo(); else if (EPS.tab === 'tasks') epTasks(); else epMine();
}

/* ---------- ① 影片 ---------- */
function epVideo() {
  var ep = epData();
  $('#epbody').innerHTML =
    '<div class="chaps" id="chaps">' + ep.chapters.map(function (c, k) { return '<button data-ch="' + k + '">' + esc(c) + '</button>'; }).join('') + '</div>' +
    '<div class="stage anim ep" id="stage"><div class="aframe"></div><span class="tag" id="tag"></span><span class="count" id="cnt"></span><div class="epprog"><i id="prog"></i></div></div>' +
    '<div class="row ctrl"><button class="btn" id="eprev">⏮ 上一段</button><button class="btn primary" id="eplay">▶ 播放</button><button class="btn" id="enext">下一段 ⏭</button>' +
    '<span class="spacer"></span><label class="tog"><input type="checkbox" id="ecm"' + (EPS.classroom ? ' checked' : '') + '> 課堂模式（討論點自動暫停）</label></div>' +
    '<section class="panel green" id="eppanel"><h3><span class="dot" style="background:var(--green)"></span><span style="flex:1">看影片</span></h3>' +
    '<p class="lead">影片約 4 分鐘。開著「課堂模式」，影片會在 4 個討論點停下來，讓大家說說看。看完後到「②小任務」。</p>' +
    '<div class="row"><span class="spacer"></span><button class="btn go" id="totask">看完了，去做小任務 →</button></div></section>';
  $('#chaps').querySelectorAll('button').forEach(function (b) { b.onclick = function () { var k = +b.dataset.ch; epGo(ep.shots.findIndex(function (x) { return x.ch === k; }), true); }; });
  $('#eplay').onclick = function () { if (EPS.playing) epPause(); else { if (EPS.i >= ep.shots.length - 1 && EPS.done) EPS.i = 0; epPlay(); } };
  $('#eprev').onclick = function () { epGo(epChapterStart(-1), EPS.playing); };
  $('#enext').onclick = function () { epGo(epChapterStart(1), EPS.playing); };
  $('#ecm').onchange = function () { EPS.classroom = this.checked; try { localStorage.setItem('ep-classroom', this.checked ? '1' : '0'); } catch (e) {} };
  $('#totask').onclick = function () { epClear(); EPS.tab = 'tasks'; renderEpisode(); };
  EPS.playing = false; EPS.done = false;
  epShow(EPS.i, true);
}
function epChapterStart(dir) {
  var sh = epData().shots, ch = sh[EPS.i].ch, target = Math.max(0, Math.min(epData().chapters.length - 1, ch + dir));
  if (dir < 0 && sh.findIndex(function (x) { return x.ch === ch; }) < EPS.i) target = ch;
  return sh.findIndex(function (x) { return x.ch === target; });
}
function epGo(i, play) { epClear(); EPS.i = i; EPS.done = false; if (play) epPlay(); else { EPS.playing = false; epShow(i, false); epBtn(); } }
function epBtn() { var b = $('#eplay'); if (b) b.textContent = EPS.playing ? '⏸ 暫停' : (EPS.done ? '↺ 從頭播放' : '▶ 播放'); }
function epPause() { epClear(); EPS.playing = false; epBtn(); }
function epPlay() { EPS.playing = true; epBtn(); epRun(EPS.i); }
function epRun(i) {
  var sh = epData().shots;
  if (i >= sh.length) { EPS.playing = false; EPS.done = true; epBtn(); return; }
  EPS.i = i;
  var shot = sh[i];
  if (shot.pause && !EPS.classroom) { epRun(i + 1); return; }
  epShow(i, false);
  var tok = EPS.tok;
  epPerform(shot, function () { if (tok !== EPS.tok || !EPS.playing) return; epLater(function () { epRun(i + 1); }, 700); });
}
/* 畫面：畫格依序淡入＋慢慢推近（鏡頭感），疊上旁白、對話、特別效果 */
function epShow(i, instant) {
  var s = SCENES[state.sc], ep = s.ep, shot = ep.shots[i], st = $('#stage');
  if (!st) return;
  st.className = 'stage anim ep' + (shot.mode === 'memory' || shot.mode === 'split' ? ' memory' : '');
  st.querySelectorAll('.ov').forEach(function (x) { x.remove(); });
  var html = '';
  if (shot.cap) html += '<div class="cap ov">' + esc(shot.cap) + '</div>';
  var lines = (shot.say || []).map(function (b) { return '<p class="ln"><b>' + esc(s.cast[b[0]].name) + '</b>' + esc(b[1]) + '</p>'; })
    .concat((shot.think || []).map(function (b) { return '<p class="ln think"><b>' + esc(s.cast[b[0]].name) + '心裡想</b>' + esc(b[1]) + '</p>'; }));
  if (lines.length) html += '<div class="subs ov">' + lines.join('') + '</div>';
  if (shot.mode === 'memory' || shot.mode === 'split') html += '<span class="rewind ov">⏪ 倒帶：喬治的心裡話</span>';
  if (shot.mode === 'split') html += '<div class="split ov"><div class="sl"><b>喬治心裡想的</b>' + esc(shot.split[0]) + '</div><div class="sr"><b>大家看到的</b>' + esc(shot.split[1]) + '</div></div>';
  if (shot.step) html += '<div class="stepcard ov">' + ep.chain.map(function (c, k) { return '<span class="' + (k + 1 === shot.step ? 'on' : k + 1 < shot.step ? 'done' : '') + '"><i>' + (k + 1) + '</i>' + esc(c) + '</span>'; }).join('') + '</div>';
  if (shot.mode === 'breathe') html += '<div class="breathe ov"><div class="bc" id="bc"><span id="bt">準備</span></div><p id="bn">跟著圓圈一起呼吸</p></div>';
  if (shot.mode === 'along') html += '<div class="along ov"><small>一起說說看</small><p id="alt">' + esc(shot.along) + '</p></div>';
  if (shot.mode === 'card') html += '<div class="gcard ov"><span>' + shot.card[0] + '</span><p>' + esc(shot.card[1]) + '</p></div>';
  if (shot.mode === 'sum') html += '<div class="sumcard ov"><b>我可以怎麼做</b>' + ep.chain.map(function (c, k) { return '<span><i>' + (k + 1) + '</i>' + esc(c) + '</span>'; }).join('') + '</div>';
  if (shot.pause) html += '<div class="pausecard ov"><small>✋ 停一下，說說看</small><p>' + esc(shot.pause.q) + '</p>' +
    '<div class="row"><button class="btn sm" id="phint">看提示</button>' + epSayBtn(shot.pause.q) + '<span class="spacer"></span><button class="btn go" id="pgo">繼續看 ▶</button></div><p class="ph" id="ph" hidden>💡 ' + esc(shot.pause.hint) + '</p></div>';
  st.insertAdjacentHTML('beforeend', html);
  var tag = st.querySelector('#tag'); tag.className = 'tag ' + (shot.ch === 1 ? 'red' : shot.ch === 4 ? 'green' : 'yellow'); tag.textContent = ep.chapters[shot.ch];
  st.querySelector('#cnt').textContent = '第 ' + (shot.ch + 1) + ' 段 / ' + ep.chapters.length;
  $('#prog').style.width = (i / (ep.shots.length - 1) * 100) + '%';
  document.querySelectorAll('#chaps button').forEach(function (b) { b.classList.toggle('on', +b.dataset.ch === shot.ch); });
  if (shot.pause) {
    $('#phint').onclick = function () { $('#ph').hidden = false; epVoice([['nar', shot.pause.hint]]); };
    $('#pgo').onclick = function () { epClear(); EPS.i = i + 1; epPlay(); };
  }
  /* 畫格 */
  var key = shot.img.join(','), box = st.querySelector('.aframe');
  if (st._k === key && !instant) return;
  st._k = key;
  shot.img.forEach(function (n, k) {
    epLater(function () {
      var im = document.createElement('img'); im.alt = ''; im.src = animSrc(s, n);
      im.style.setProperty('--kx', ((n * 37) % 7 - 3) + '%'); im.style.setProperty('--ky', ((n * 53) % 5 - 2) + '%');
      if (instant && k === 0) im.className = 'on'; box.appendChild(im);
      requestAnimationFrame(function () { requestAnimationFrame(function () { im.className = 'on'; }); });
      epLater(function () { while (box.children.length > 2) box.removeChild(box.firstElementChild); }, 900);
    }, k * 900);
  });
}
/* 這個鏡頭要做的事：念台詞、跟著深呼吸、一起說、討論暫停 */
function epPerform(shot, done) {
  var minMs = shot.img.length * 900 + 600, t0 = Date.now();
  var finish = function () { epLater(done, Math.max(0, minMs - (Date.now() - t0))); };
  var lines = [];
  if (shot.cap) lines.push(['nar', shot.cap]);
  (shot.say || []).forEach(function (b) { lines.push([b[0], b[1]]); });
  (shot.think || []).forEach(function (b) { lines.push([b[0], b[1]]); });
  if (shot.pause) { EPS.playing = false; epBtn(); epVoice([['nar', '停一下，說說看。' + shot.pause.q]]); return; }
  if (shot.mode === 'breathe') { epBreathe(shot.cycles || 3, done); return; }
  if (shot.mode === 'along') {
    epVoice(lines, function () {
      var p = $('#alt'); if (p) p.classList.add('glow');
      epLater(function () { epVoice([['le', shot.along]], finish); }, 4200);
    });
    return;
  }
  if (!lines.length) { finish(); return; }
  epVoice(lines, finish);
}
function epBreathe(n, done) {
  var k = 0;
  (function cycle() {
    if (k >= n) { var bt = $('#bt'); if (bt) bt.textContent = '很好！'; epLater(done, 900); return; }
    var bc = $('#bc'), bt = $('#bt'), bn = $('#bn');
    if (!bc) return;
    bn.textContent = '第 ' + (k + 1) + ' 次，共 ' + n + ' 次';
    bc.className = 'bc in'; bt.textContent = '吸氣'; epVoice([['le', '吸氣']]);
    epLater(function () { bc.className = 'bc out'; bt.textContent = '吐氣'; epVoice([['le', '吐氣']]); epLater(function () { k++; cycle(); }, 4200); }, 4200);
  })();
}

/* ---------- ② 小任務 ---------- */
function epTasks() {
  var ep = epData(), tasks = ep.tasks;
  if (EPS.task >= tasks.length) { epResult(); return; }
  var t = tasks[EPS.task], s = SCENES[state.sc], lv = EPS.level;
  var opts = t[lv] || t.b, html = '';
  html += '<div class="tbar"><span class="tprog">' + tasks.map(function (x, k) { return '<i class="' + (k < EPS.task ? 'done' : k === EPS.task ? 'on' : '') + '"></i>'; }).join('') + '</span>' +
    '<span class="spacer"></span><label class="tog">難度：<select id="lvl"><option value="b"' + (lv === 'b' ? ' selected' : '') + '>基礎版（2 選 1）</option><option value="a"' + (lv === 'a' ? ' selected' : '') + '>進階版</option></select></label></div>';
  html += '<section class="panel yellow tcard"><small class="tkind">任務 ' + (EPS.task + 1) + '／' + tasks.length + '・' + t.kind + '</small>' +
    '<h3><span style="flex:1">' + esc(t.q) + '</span>' + epSayBtn(t.q) + '</h3>';
  if (t.img) html += '<img class="timg" src="' + animSrc(s, t.img) + '" alt="">';
  if (t.feel) html += epFeelHtml();
  else if (t.kind === '步驟排序') {
    var items = opts.slice(), order = items.map(function (x, k) { return k; });
    for (var k = order.length - 1; k > 0; k--) { var j = (k * 7 + EPS.task) % (k + 1); var tmp = order[k]; order[k] = order[j]; order[j] = tmp; }
    if (order.every(function (x, k) { return x === k; })) order.reverse();
    html += '<div class="slots">' + items.map(function (x, k) { return '<span class="slot" data-k="' + k + '">' + (k + 1) + '</span>'; }).join('') + '</div>' +
      '<div class="opts seq">' + order.map(function (k) { return '<button class="opt" data-v="' + k + '"><span>' + esc(items[k]) + '</span></button>'; }).join('') + '</div>' +
      '<div class="row"><button class="btn sm" id="sreset">↺ 重排</button></div>';
  } else {
    html += '<div class="opts tg' + (opts.length > 2 ? ' four' : '') + '">' + opts.map(function (o, k) {
      var pic = typeof o[1] === 'number' ? '<img src="' + animSrc(s, o[1]) + '" alt="">' : '<span class="emo">' + o[1] + '</span>';
      return '<div class="tw"><button class="opt to" data-k="' + k + '">' + pic + '<span>' + esc(o[0]) + '</span></button>' + epSayBtn(o[0]) + '</div>';
    }).join('') + '</div>';
  }
  html += '<p class="fb" id="tfb" hidden></p><div class="row"><span class="spacer"></span><button class="btn go" id="tnext" hidden>下一題 →</button></div></section>';
  $('#epbody').innerHTML = html;
  $('#lvl').onchange = function () { EPS.level = this.value; try { localStorage.setItem('ep-level', this.value); } catch (e) {} epTasks(); };
  EPS.tries = 0; EPS.seq = [];
  var fb = $('#tfb'), next = $('#tnext');
  var right = function (msg) {
    fb.hidden = false; fb.className = 'fb ok'; fb.textContent = '⭐ ' + msg; next.hidden = false;
    if (EPS.score[EPS.task] === undefined) EPS.score[EPS.task] = EPS.tries === 0 ? 1 : 0;
    stopAll(); epVoice([['nar', '答對了！' + msg]]);
  };
  var wrong = function () {
    EPS.tries++; fb.hidden = false; fb.className = 'fb no'; fb.textContent = '再想一想：' + t.h;
    stopAll(); epVoice([['nar', '再想一想。' + t.h]]);
  };
  next.onclick = function () { stopAll(); EPS.task++; epTasks(); window.scrollTo(0, 0); };
  if (t.feel) { epFeelBind(function () { next.hidden = false; EPS.score[EPS.task] = null; }); return; }
  if (t.kind === '步驟排序') {
    var fill = function () {
      document.querySelectorAll('.slot').forEach(function (sl, k) { sl.textContent = EPS.seq[k] !== undefined ? opts[EPS.seq[k]] : (k + 1); sl.classList.toggle('full', EPS.seq[k] !== undefined); });
      document.querySelectorAll('.seq .opt').forEach(function (b) { b.disabled = EPS.seq.indexOf(+b.dataset.v) >= 0; });
    };
    document.querySelectorAll('.seq .opt').forEach(function (b) {
      b.onclick = function () {
        EPS.seq.push(+b.dataset.v); fill(); stopAll(); epVoice([['nar', opts[+b.dataset.v]]]);
        if (EPS.seq.length === opts.length) {
          if (EPS.seq.every(function (v, k) { return v === k; })) right(t.why);
          else { wrong(); epLater(function () { EPS.seq = []; fill(); }, 1600); }
        }
      };
    });
    $('#sreset').onclick = function () { EPS.seq = []; fill(); };
    return;
  }
  document.querySelectorAll('.to').forEach(function (b) {
    b.onclick = function () {
      var o = opts[+b.dataset.k];
      document.querySelectorAll('.to').forEach(function (x) { x.classList.remove('ok', 'no'); });
      b.classList.add(o[2] ? 'ok' : 'no');
      if (o[2]) { right(t.why); document.querySelectorAll('.to').forEach(function (x) { x.disabled = true; }); } else wrong();
    };
  });
}
var FEEL = [['平靜', '#9DC6A6', '😌'], ['有點煩', '#D9D28A', '😕'], ['生氣', '#E8B57A', '😠'], ['很生氣', '#E0906A', '😡'], ['氣炸了', '#C8664F', '🤯']];
var CALM = [['🌬️', '深呼吸'], ['🔢', '數到十'], ['🥤', '喝口水'], ['🪑', '去安全的地方坐一下'], ['🟢', '捏捏小球'], ['🗣️', '跟大人說']];
function epMineData() { try { return JSON.parse(localStorage.getItem('ep-mine-' + SCENES[state.sc].id) || '{}') || {}; } catch (e) { return {}; } }
function epMineSave(d) { try { localStorage.setItem('ep-mine-' + SCENES[state.sc].id, JSON.stringify(d)); } catch (e) {} }
function epFeelHtml() {
  var d = epMineData();
  return '<div class="thermo">' + FEEL.map(function (f, k) { return '<button class="th' + (d.feel === k ? ' on' : '') + '" data-f="' + k + '" style="--c:' + f[1] + '"><span>' + f[2] + '</span>' + f[0] + '</button>'; }).join('') + '</div>' +
    '<h3 style="margin-top:16px"><span style="flex:1">我的冷靜方法：我要用哪一個？（可以選很多個）</span>' + epSayBtn('我的冷靜方法：我要用哪一個？') + '</h3>' +
    '<div class="calm">' + CALM.map(function (c, k) { return '<button class="cm' + ((d.calm || []).indexOf(k) >= 0 ? ' on' : '') + '" data-c="' + k + '"><span>' + c[0] + '</span>' + c[1] + '</button>'; }).join('') + '</div>' +
    '<p class="note" style="margin-top:10px">這一題沒有標準答案，每個人都不一樣。</p>';
}
function epFeelBind(ok) {
  var d = epMineData();
  document.querySelectorAll('.th').forEach(function (b) { b.onclick = function () { d.feel = +b.dataset.f; epMineSave(d); document.querySelectorAll('.th').forEach(function (x) { x.classList.toggle('on', x === b); }); stopAll(); epVoice([['nar', FEEL[d.feel][0]]]); if (ok) ok(); }; });
  document.querySelectorAll('.cm').forEach(function (b) { b.onclick = function () { var k = +b.dataset.c; d.calm = d.calm || []; var at = d.calm.indexOf(k); if (at >= 0) d.calm.splice(at, 1); else { d.calm.push(k); stopAll(); epVoice([['nar', CALM[k][1]]]); } epMineSave(d); b.classList.toggle('on', at < 0); if (ok) ok(); }; });
}
function epResult() {
  var ep = epData(), got = EPS.score.filter(function (x) { return x === 1; }).length, total = ep.tasks.filter(function (t) { return !t.feel; }).length;
  var stars = got >= total - 1 ? 3 : got >= total - 3 ? 2 : 1;
  state.rate[SCENES[state.sc].id] = Math.max(state.rate[SCENES[state.sc].id] || 0, stars); storeChecks();
  var sheet = got >= total - 1 ? '進階（自己寫一寫）' : got >= total - 3 ? '一般（圈一圈、寫一寫）' : '圈選為主';
  $('#epbody').innerHTML = '<section class="panel green result"><div class="medal">🏅</div><h3>冷靜小勇士！</h3>' +
    '<p class="stars big">' + '★★★'.slice(0, stars) + '<span>' + '★★★'.slice(stars) + '</span></p>' +
    '<p>第一次就答對 ' + got + ' 題，共 ' + total + ' 題。</p><p class="note">給老師：建議學習單用「' + sheet + '」的方式完成。</p>' +
    '<div class="row"><button class="btn" id="again">再做一次</button><span class="spacer"></span><button class="btn go" id="tomine">看我的方法和本週挑戰 →</button></div></section>';
  stopAll(); epVoice([['nar', '你是冷靜小勇士！']]);
  $('#again').onclick = function () { EPS.task = 0; EPS.score = []; epTasks(); };
  $('#tomine').onclick = function () { EPS.tab = 'mine'; renderEpisode(); };
}

/* ---------- ③ 我的方法 ---------- */
function epMine() {
  var ep = epData(), d = epMineData(), days = ['一', '二', '三', '四', '五'];
  d.week = d.week || [];
  $('#epbody').innerHTML = '<section class="panel green"><h3><span class="dot" style="background:var(--green)"></span><span style="flex:1">我可以怎麼做</span>' + epSayBtn('我可以怎麼做：' + ep.chain.join('，')) + '</h3>' +
    chain(ep.chain, 'big') +
    '<h3 style="margin-top:18px"><span style="flex:1">我的心情溫度計和冷靜方法</span></h3>' + epFeelHtml() +
    '<h3 style="margin-top:18px"><span style="flex:1">🏅 本週挑戰</span>' + epSayBtn(ep.challenge) + '</h3><p class="lead">' + esc(ep.challenge) + '</p>' +
    '<div class="week">' + days.map(function (x, k) { return '<button class="wk' + (d.week[k] ? ' on' : '') + '" data-w="' + k + '">星期' + x + '<span>' + (d.week[k] ? '✔' : '') + '</span></button>'; }).join('') + '</div>' +
    '<p class="note" style="margin-top:8px">做到了，就在那一天按一下。</p>' +
    '<div class="row" style="margin-top:12px"><button class="btn" id="rew">再看一次影片</button><span class="spacer"></span>' +
    (state.sc < SCENES.length - 1 ? '<button class="btn go" id="nextsc">下一個情境 →</button>' : '') + '</div></section>';
  epFeelBind();
  document.querySelectorAll('.wk').forEach(function (b) { b.onclick = function () { var k = +b.dataset.w; d.week[k] = !d.week[k]; epMineSave(d); b.classList.toggle('on', !!d.week[k]); b.querySelector('span').textContent = d.week[k] ? '✔' : ''; }; });
  $('#rew').onclick = function () { EPS.tab = 'video'; EPS.i = 0; renderEpisode(); };
  if ($('#nextsc')) $('#nextsc').onclick = function () { epClear(); openScene(state.sc + 1); };
}

/* 接上：有完整版的情境，打開就是完整版 */
SCENES.forEach(function (s) { if (window.EPISODES[s.id]) s.ep = window.EPISODES[s.id]; });
/* 情境列表在這個檔案載入前就畫好了：重畫一次，才會顯示「完整版」 */
if (state.view === 'list') render();
