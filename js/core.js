/* Fala, Brasil! — core: utilities, storage, program schedule, SRS, speech, activity timer */
(function () {
  const PT = (window.PT = { weeks: [] });
  PT.addWeek = (w) => { PT.weeks[w.n - 1] = w; };
  PT.table = (head, rows) =>
    `<table class="conj">${head ? `<thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead>` : ''}<tbody>${rows
      .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`)
      .join('')}</tbody></table>`;

  // Tappable sound tiles: [letter, sound-to-speak, label, example word, example meaning]
  PT.soundBoard = (title, tiles) =>
    `<h3>${title}</h3><div class="sound-board">${tiles
      .map(([v, sound, label, word, mean]) => `<div class="stile">
        <button class="sv" data-say="${sound}" data-slow="1" title="Play the sound">${v}</button>
        <span class="sl">${label}</span>
        <button class="sw" data-say="${word}" title="Play the word">🔊 ${word}</button>
        <small>${mean}</small></div>`)
      .join('')}</div>`;

  /* ---------------- utilities ---------------- */
  const U = (PT.u = {});
  U.esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  U.pad = (n) => String(n).padStart(2, '0');
  U.dateStr = (d) => `${d.getFullYear()}-${U.pad(d.getMonth() + 1)}-${U.pad(d.getDate())}`;
  U.today = () => U.dateStr(new Date());
  U.parse = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  U.addDays = (s, n) => { const d = U.parse(s); d.setDate(d.getDate() + n); return U.dateStr(d); };
  U.diffDays = (a, b) => Math.round((U.parse(b) - U.parse(a)) / 86400000);
  U.fmtDate = (s) => U.parse(s).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  U.stripAccents = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '');
  U.norm = (s, keepAccents = true) => {
    const t = String(s).toLowerCase().replace(/[.,!?¿¡;:"“”‘’'()…\-–—/]/g, ' ').replace(/\s+/g, ' ').trim();
    return keepAccents ? t : U.stripAccents(t);
  };
  U.lev = (a, b) => {
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  };
  U.sim = (a, b) => { a = U.norm(a, false); b = U.norm(b, false); const L = Math.max(a.length, b.length); return L ? 1 - U.lev(a, b) / L : 1; };
  U.shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  U.sample = (arr, n) => U.shuffle(arr).slice(0, n);
  U.clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  U.h = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };

  /* ---------------- storage (multi-profile, localStorage) ---------------- */
  const KEY = 'falabrasil.v1';
  const defaults = (name, startDate, tripDate) => ({
    id: 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
    name, startDate, tripDate,
    dailyGoal: 90, newPerDay: 15, ttsRate: 0.9, autoplay: true, reverse: false,
    done: {},     // itemId -> {date, score}
    cards: {},    // pt -> {ivl, ease, due, reps, lapses}
    days: {},     // date -> {min, cards, newCards, speak, talkSec, immersion, partner}
    canDo: {},    // week -> [bool]
  });
  PT.store = {
    data: null,
    load() {
      try { this.data = JSON.parse(localStorage.getItem(KEY)); } catch (e) { this.data = null; }
      if (!this.data || !this.data.profiles) this.data = { active: null, profiles: {} };
    },
    save() { localStorage.setItem(KEY, JSON.stringify(this.data)); },
    get s() { return this.data.profiles[this.data.active] || null; },
    list() { return Object.values(this.data.profiles); },
    create(name, startDate, tripDate) {
      const p = defaults(name, startDate, tripDate);
      this.data.profiles[p.id] = p; this.data.active = p.id; this.save(); return p;
    },
    switchTo(id) { if (this.data.profiles[id]) { this.data.active = id; this.save(); } },
    remove(id) {
      delete this.data.profiles[id];
      if (this.data.active === id) this.data.active = Object.keys(this.data.profiles)[0] || null;
      this.save();
    },
    importJSON(obj) {
      if (!obj || !obj.profiles) throw new Error('Not a Fala, Brasil! backup file');
      Object.values(obj.profiles).forEach((p) => { this.data.profiles[p.id] = Object.assign(defaults(p.name, p.startDate, p.tripDate), p); });
      if (!this.data.active) this.data.active = obj.active || Object.keys(this.data.profiles)[0];
      this.save();
    },
  };
  PT.day = (date = U.today(), s = PT.store.s) => {
    if (!s.days[date]) s.days[date] = { min: 0, cards: 0, newCards: 0, speak: 0, talkSec: 0, immersion: 0, partner: false };
    return s.days[date];
  };
  PT.addMinutes = (m) => { const d = PT.day(); d.min = Math.round((d.min + m) * 100) / 100; PT.store.save(); };

  /* ---------------- program schedule ----------------
     Each week = 7 items, one per day: 4 lessons, speaking lab, mixed drill, checkpoint. */
  PT.items = () => {
    const out = [];
    PT.weeks.forEach((w) => {
      w.lessons.forEach((l, i) => out.push({ id: l.id, week: w.n, type: 'lesson', title: l.title, kind: l.kind, href: `#/lesson/${l.id}`, mins: l.minutes || 30 }));
      out.push({ id: `w${w.n}lab`, week: w.n, type: 'lab', title: 'Speaking lab', kind: 'Speaking', href: `#/lab/${w.n}`, mins: 30 });
      out.push({ id: `w${w.n}drill`, week: w.n, type: 'drill', title: 'Mixed sentence drill', kind: 'Sentences', href: `#/drill/${w.n}`, mins: 25 });
      out.push({ id: `w${w.n}check`, week: w.n, type: 'check', title: w.n === 8 ? 'FINAL EXAM' : `Checkpoint ${w.n}`, kind: 'Test', href: `#/check/${w.n}`, mins: 30 });
    });
    return out;
  };
  PT.lesson = (id) => { for (const w of PT.weeks) for (const l of w.lessons) if (l.id === id) return { lesson: l, week: w }; return null; };
  PT.dayNum = (s = PT.store.s) => Math.max(1, U.diffDays(s.startDate, U.today()) + 1);
  PT.programDays = (s = PT.store.s) => Math.max(1, U.diffDays(s.startDate, s.tripDate));
  PT.daysToTrip = (s = PT.store.s) => U.diffDays(U.today(), s.tripDate);
  PT.nextItem = (s = PT.store.s) => PT.items().find((it) => !s.done[it.id]) || null;
  PT.doneCount = (s = PT.store.s) => PT.items().filter((it) => s.done[it.id]).length;
  PT.calendarWeek = (s = PT.store.s) => U.clamp(Math.ceil(PT.dayNum(s) / 7), 1, PT.weeks.length);
  PT.activeWeek = (s = PT.store.s) => { const n = PT.nextItem(s); return Math.max(PT.calendarWeek(s), n ? n.week : PT.weeks.length); };
  PT.schedule = (s = PT.store.s) => {
    // expected items done by end of today = dayNum (capped at total)
    const total = PT.items().length, expected = Math.min(PT.dayNum(s), total), done = PT.doneCount(s);
    return { total, expected, done, delta: done - expected };
  };
  PT.markDone = (id, score = null) => {
    const s = PT.store.s, prev = s.done[id];
    s.done[id] = { date: U.today(), score: prev && prev.score != null && score != null ? Math.max(prev.score, score) : score };
    PT.store.save();
  };
  PT.streak = (s = PT.store.s) => {
    let d = U.today(), n = 0;
    const active = (x) => s.days[x] && s.days[x].min >= 10;
    if (!active(d)) d = U.addDays(d, -1);
    while (active(d)) { n++; d = U.addDays(d, -1); }
    return n;
  };
  PT.totalMinutes = (s = PT.store.s) => Object.values(s.days).reduce((a, d) => a + (d.min || 0), 0);

  /* ---------------- spaced repetition (SM-2 style) ---------------- */
  PT.srs = {
    vocab(upToWeek) {
      const seen = new Set(), out = [];
      PT.weeks.slice(0, upToWeek).forEach((w) => w.vocab.forEach(([pt, en]) => { if (!seen.has(pt)) { seen.add(pt); out.push({ pt, en, week: w.n }); } }));
      return out;
    },
    allVocabMap() { const m = {}; PT.weeks.forEach((w) => w.vocab.forEach(([pt, en]) => { if (!m[pt]) m[pt] = { pt, en, week: w.n }; })); return m; },
    due(s = PT.store.s) {
      const t = U.today(), map = this.allVocabMap();
      return Object.entries(s.cards).filter(([pt, c]) => c.due <= t && map[pt]).map(([pt]) => map[pt]);
    },
    fresh(s = PT.store.s, extra = 0) {
      const left = Math.max(0, s.newPerDay - PT.day().newCards) + extra;
      return this.vocab(PT.activeWeek(s)).filter((v) => !s.cards[v.pt]).slice(0, left);
    },
    preview(c, g) {
      c = c || { ivl: 0, ease: 2.5 };
      if (g === 0) return 0;
      if (g === 1) return Math.max(1, Math.round(c.ivl * 1.2));
      if (g === 2) return c.ivl === 0 ? 1 : c.ivl === 1 ? 3 : Math.round(c.ivl * c.ease);
      return c.ivl === 0 ? 4 : Math.round(Math.max(c.ivl, 1) * c.ease * 1.3);
    },
    grade(pt, g, s = PT.store.s) {
      const isNew = !s.cards[pt];
      const c = s.cards[pt] || { ivl: 0, ease: 2.5, reps: 0, lapses: 0, due: U.today() };
      const ivl = this.preview(c, g);
      if (g === 0) { c.ease = Math.max(1.3, c.ease - 0.2); c.lapses++; }
      if (g === 1) c.ease = Math.max(1.3, c.ease - 0.15);
      if (g === 3) c.ease += 0.15;
      c.ivl = ivl; c.reps++; c.due = U.addDays(U.today(), ivl);
      s.cards[pt] = c;
      const d = PT.day(); d.cards++; if (isNew) d.newCards++;
      PT.store.save();
    },
    stats(s = PT.store.s) {
      const cs = Object.values(s.cards);
      return { seen: cs.length, solid: cs.filter((c) => c.ivl >= 7).length, total: this.vocab(PT.weeks.length).length };
    },
  };

  /* ---------------- speech: TTS + recognition ---------------- */
  PT.speech = {
    voice: null,
    init() {
      if (!('speechSynthesis' in window)) return;
      const pick = () => {
        const vs = speechSynthesis.getVoices();
        this.voice = vs.find((v) => v.lang === 'pt-BR' && /google|luciana|natural|online/i.test(v.name)) ||
          vs.find((v) => v.lang === 'pt-BR' || v.lang === 'pt_BR') || vs.find((v) => /^pt/i.test(v.lang)) || null;
      };
      pick(); speechSynthesis.onvoiceschanged = pick;
    },
    say(text, slow = false) {
      if (!('speechSynthesis' in window)) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text.replace(/\s*\/\s*/g, ', '));
      u.lang = 'pt-BR'; if (this.voice) u.voice = this.voice;
      const s = PT.store.s; u.rate = (s ? s.ttsRate : 0.9) * (slow ? 0.65 : 1);
      speechSynthesis.speak(u);
    },
    get canListen() { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); },
    recognizer(opts = {}) {
      const R = window.SpeechRecognition || window.webkitSpeechRecognition;
      const r = new R(); r.lang = 'pt-BR'; r.interimResults = !!opts.interim; r.continuous = !!opts.continuous; r.maxAlternatives = 5;
      return r;
    },
    listenOnce() {
      return new Promise((resolve, reject) => {
        const r = this.recognizer(); let got = false;
        r.onresult = (e) => { got = true; resolve(Array.from(e.results[0]).map((a) => a.transcript)); };
        r.onerror = (e) => reject(e.error || 'error');
        r.onend = () => { if (!got) reject('no-speech'); };
        r.start();
      });
    },
  };

  /* ---------------- activity timer: counts real study time ---------------- */
  PT.activity = {
    last: Date.now(), tracking: false,
    start() {
      ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach((e) => addEventListener(e, () => (this.last = Date.now()), { passive: true }));
      setInterval(() => {
        if (this.tracking && PT.store.s && document.visibilityState === 'visible' && Date.now() - this.last < 120000) PT.addMinutes(0.25);
      }, 15000);
    },
  };
})();
