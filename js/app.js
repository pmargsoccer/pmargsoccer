/* Fala, Brasil! — views & router */
(function () {
  const { u: U, store, srs, speech } = PT;
  const $main = () => document.getElementById('main');
  const S = () => store.s;
  const icon = { lesson: '📘', lab: '🗣', drill: '🧩', check: '🏁' };
  const kindIcon = { Grammar: '📘', Sentences: '✍️', Pronunciation: '👄', Speaking: '🗣', 'Role-play': '🎭', Test: '🏁' };

  /* ---------------- router ---------------- */
  const routes = {
    '': viewToday, today: viewToday, plan: viewPlan, lesson: viewLesson, lab: viewLab, drill: viewDrill, check: viewCheck,
    cards: viewCards, speak: viewSpeak, progress: viewProgress, settings: viewSettings,
  };
  function render() {
    speech.say && 'speechSynthesis' in window && speechSynthesis.cancel();
    const [name, arg] = location.hash.replace(/^#\/?/, '').split('/');
    if (!S()) return viewOnboarding();
    document.body.classList.remove('onboarding');
    PT.activity.tracking = !['progress', 'settings', 'plan'].includes(name);
    document.querySelectorAll('nav.tabs a').forEach((a) => a.classList.toggle('active', a.dataset.r === (name || 'today')));
    renderHeader();
    (routes[name] || viewToday)(arg);
    window.scrollTo(0, 0);
  }
  addEventListener('hashchange', render);

  function renderHeader() {
    const s = S(), dn = PT.dayNum(s), total = PT.programDays(s), left = PT.daysToTrip(s);
    document.getElementById('hdr-info').innerHTML = `
      <span>Dia <b>${dn}</b>/${total}</span>
      <span>${left > 0 ? `✈️ <b>${left}</b> dias` : left === 0 ? '✈️ <b>Hoje!</b>' : '🇧🇷 Boa viagem!'}</span>
      <span>🔥 <b>${PT.streak(s)}</b></span>
      <a href="#/settings" class="who">${U.esc(s.name)}</a>`;
  }

  /* ---------------- helpers ---------------- */
  const itemStatus = (it) => { const d = S().done[it.id]; return d ? `<span class="done">✓${d.score != null ? ` ${Math.round(d.score * 100)}%` : ''}</span>` : ''; };
  const scheduledDate = (idx) => U.addDays(S().startDate, idx);
  function scheduleBadge() {
    const sc = PT.schedule();
    if (sc.done >= sc.total) return '<span class="pill good">Program complete 🎉</span>';
    if (sc.delta >= 0) return `<span class="pill good">On track${sc.delta > 0 ? ` · ${sc.delta} day${sc.delta > 1 ? 's' : ''} ahead` : ''}</span>`;
    if (sc.delta === -1) return '<span class="pill mid">Today’s session is waiting</span>';
    return `<span class="pill bad">${-sc.delta - 1} day${-sc.delta - 1 > 1 ? 's' : ''} behind · do 2 sessions today to catch up</span>`;
  }
  const ring = (val, goal, label) => {
    const p = U.clamp(val / goal, 0, 1), r = 42, c = 2 * Math.PI * r;
    return `<svg class="ring" viewBox="0 0 100 100"><circle r="${r}" cx="50" cy="50" class="bg"/><circle r="${r}" cx="50" cy="50" class="fg" stroke-dasharray="${c * p} ${c}"/>
      <text x="50" y="48">${Math.round(val)}</text><text x="50" y="64" class="sm">${label}</text></svg>`;
  };

  /* ---------------- onboarding ---------------- */
  function viewOnboarding() {
    document.body.classList.add('onboarding');
    const t = U.today();
    $main().innerHTML = `
      <section class="card hero">
        <h1>Fala, Brasil! 🇧🇷</h1>
        <p>An 8-week Brazilian Portuguese plan: <b>grammar → sentences → speaking → fluency</b>, built around your trip.</p>
        <ul class="bullets"><li>One 60–90 min session a day: flashcards, a lesson, speaking reps, immersion and a couples challenge.</li>
        <li>Speech recognition scores your pronunciation (use Chrome or Edge).</li>
        <li>Progress is tracked on this device. Each of you gets your own profile, and you can export a backup in Settings.</li></ul>
        <form id="ob" class="form">
          <label>Your name <input name="name" required placeholder="e.g. Phil"></label>
          <label>Start date <input type="date" name="start" value="${t}" required></label>
          <label>Trip date (departure) <input type="date" name="trip" value="${U.addDays(t, 60)}" required></label>
          <button class="primary big">Começar! →</button>
        </form>
        ${store.list().length ? '' : '<p class="hint">Your girlfriend can add her own profile later in ⚙ Settings, or open the site on her phone.</p>'}
      </section>`;
    document.getElementById('ob').onsubmit = (e) => {
      e.preventDefault();
      const f = new FormData(e.target);
      store.create(f.get('name').trim(), f.get('start'), f.get('trip'));
      location.hash = '#/today'; render();
    };
  }

  /* ---------------- today ---------------- */
  function viewToday() {
    const s = S(), d = PT.day(), next = PT.nextItem(), dn = PT.dayNum();
    const wk = PT.weeks[(next ? next.week : PT.weeks.length) - 1];
    const dow = ((dn - 1) % 7) + 1;
    const due = srs.due().length, fresh = srs.fresh().length;
    const cardsDone = due === 0 && fresh === 0;
    const speakGoal = 20, talkMin = Math.round(d.talkSec / 60);
    const partner = wk.partner[(dow - 1) % wk.partner.length];
    const imm = wk.immersion[(dn - 1) % wk.immersion.length];
    const items = PT.items(), idx = next ? items.indexOf(next) : -1;
    const sessionDone = next && s.done[items[idx - 1]?.id]?.date === U.today();

    $main().innerHTML = `
      <section class="card today-hero">
        <div class="today-top">
          ${ring(d.min, s.dailyGoal, `/ ${s.dailyGoal} min`)}
          <div>
            <h2>${next ? `Semana ${wk.n}: ${U.esc(wk.title)}` : 'Program complete! 🎉'}</h2>
            <p class="sub">${U.esc(wk.subtitle)}</p>
            ${scheduleBadge()}
          </div>
        </div>
      </section>
      <h3 class="sect">Hoje · ${U.fmtDate(U.today())}</h3>
      <ol class="tasks">
        <li class="${cardsDone ? 'ok' : ''}"><a href="#/cards">
          <span class="ti">🃏</span><span class="tt"><b>Flashcards</b><small>${cardsDone ? `Done: ${d.cards} reviews today` : `${due} due · ${fresh} new`}</small></span><span class="go">›</span></a></li>
        ${next ? `<li class="${sessionDone ? 'ok' : ''} main-task"><a href="${next.href}">
          <span class="ti">${icon[next.type]}</span><span class="tt"><b>${U.esc(next.title)}</b><small>Main session · ${next.kind} · ~${next.mins} min${sessionDone ? ' · today’s already done ✓, this one is a bonus' : ''}</small></span><span class="go">›</span></a></li>` : ''}
        <li class="${d.speak >= speakGoal ? 'ok' : ''}"><a href="#/speak">
          <span class="ti">🎙</span><span class="tt"><b>Speaking reps</b><small>${d.speak}/${speakGoal} reps · ${talkMin} min free talk</small></span><span class="go">›</span></a></li>
        <li class="${d.immersion >= 15 ? 'ok' : ''}"><div class="row-task">
          <span class="ti">🎧</span><span class="tt"><b>Immersion</b><small>${U.esc(imm)}</small><small>${d.immersion} min logged today</small></span>
          <span class="btns"><button data-imm="10">+10</button><button data-imm="20">+20</button></span></div></li>
        <li class="${d.partner ? 'ok' : ''}"><div class="row-task">
          <span class="ti">💑</span><span class="tt"><b>Couples challenge</b><small>${U.esc(partner)}</small></span>
          <span class="btns"><button data-partner>${d.partner ? '✓ Done' : 'Did it'}</button></span></div></li>
      </ol>
      ${behindList()}
      <section class="card week-goal"><h3>This week’s goal</h3><p>${U.esc(wk.goal)}</p>
        <ul class="cando">${wk.canDo.map((c) => `<li>${U.esc(c)}</li>`).join('')}</ul></section>`;

    $main().querySelectorAll('[data-imm]').forEach((b) => (b.onclick = () => { const m = +b.dataset.imm; d.immersion += m; PT.addMinutes(m); viewToday(); renderHeader(); }));
    $main().querySelector('[data-partner]').onclick = () => { if (!d.partner) { d.partner = true; PT.addMinutes(15); } viewToday(); };
  }
  function behindList() {
    const sc = PT.schedule(); if (sc.delta >= -1) return '';
    const items = PT.items().filter((it) => !S().done[it.id]).slice(0, Math.min(-sc.delta, 4));
    return `<section class="card"><h3>Catch-up queue</h3><ul class="plain">${items.map((it) => `<li><a href="${it.href}">${icon[it.type]} W${it.week} · ${U.esc(it.title)}</a></li>`).join('')}</ul></section>`;
  }

  /* ---------------- plan ---------------- */
  function viewPlan() {
    const s = S(), items = PT.items(), next = PT.nextItem(), cw = PT.calendarWeek();
    $main().innerHTML = `<h2>O Plano · 8 semanas</h2>
      <p class="sub">One item per day. Grammar comes first, then sentences, then speaking, then real-trip simulations. ${scheduleBadge()}</p>
      ${PT.weeks.map((w) => {
        const wi = items.filter((it) => it.week === w.n), dn = wi.filter((it) => s.done[it.id]).length;
        const ck = s.done[`w${w.n}check`];
        return `<details class="card week" ${w.n === (next ? next.week : 8) ? 'open' : ''}>
          <summary><span class="wn">${w.n}</span><span class="wt"><b>${U.esc(w.title)}</b><small>${U.esc(w.subtitle)}</small></span>
            <span class="wp">${dn}/7${ck ? ` · ${ck.score >= 0.8 ? '✅' : '⚠️'} ${Math.round(ck.score * 100)}%` : ''}${w.n === cw ? ' · <b>this week</b>' : ''}</span></summary>
          <p>${U.esc(w.goal)}</p>
          <ol class="items">${wi.map((it) => {
            const i = items.indexOf(it);
            return `<li class="${s.done[it.id] ? 'ok' : ''} ${next && next.id === it.id ? 'next' : ''}"><a href="${it.href}">
              <span class="ti">${it.type === 'lesson' ? kindIcon[it.kind] || '📘' : icon[it.type]}</span>
              <span class="tt"><b>${U.esc(it.title)}</b><small>Day ${i + 1} · ${U.fmtDate(scheduledDate(i))} · ${it.kind}</small></span>${itemStatus(it)}</a></li>`;
          }).join('')}</ol></details>`;
      }).join('')}`;
  }

  /* ---------------- lesson ---------------- */
  function viewLesson(id) {
    const f = PT.lesson(id); if (!f) return viewPlan();
    const { lesson: l, week: w } = f, done = S().done[id];
    $main().innerHTML = `
      <a class="back" href="#/plan">‹ Plan</a>
      <article class="card lesson">
        <p class="kicker">${kindIcon[l.kind] || ''} Semana ${w.n} · ${l.kind} · ~${l.minutes} min ${done ? `· <span class="done">✓ best ${Math.round((done.score || 0) * 100)}%</span>` : ''}</p>
        <h2>${U.esc(l.title)}</h2>
        <div class="body">${l.body}</div>
        <h3>Examples: listen and repeat each one out loud</h3>
        <ul class="examples">${l.examples.map(([pt, en]) => `<li>${PT.audioBtn(pt)}<span><b>${U.esc(pt)}</b><small>${U.esc(en)}</small></span></li>`).join('')}</ul>
        <div class="row"><button class="primary big" id="start">Practice: ${l.exercises.length} exercises →</button></div>
      </article>
      <div id="stage"></div>`;
    document.getElementById('start').onclick = () => {
      const stage = document.getElementById('stage');
      document.querySelector('.lesson').classList.add('collapsed');
      PT.runExercises(stage, U.shuffle(l.exercises), {
        title: l.title,
        onDone: (res) => {
          const score = res.filter(Boolean).length / res.length;
          stage.innerHTML = `<section class="card"><h3>Step 2 · Say it: ${l.examples.length} phrases</h3><p class="hint">Listen 🔊, then press 🎙 and repeat. Try to hit 85%+ on each.</p><div id="sp"></div>
            <div class="row"><button class="primary big" id="fin">Finish lesson (${Math.round(score * 100)}%) ✓</button></div></section>`;
          PT.speakList(document.getElementById('sp'), l.examples);
          document.getElementById('fin').onclick = () => { PT.markDone(id, score); resultCard(score, id); };
          stage.scrollIntoView({ behavior: 'smooth' });
        },
      });
      stage.scrollIntoView({ behavior: 'smooth' });
    };
  }
  function resultCard(score, id, extra = '') {
    const nxt = PT.nextItem();
    $main().innerHTML = `<section class="card result">
      <div class="big-score ${score >= 0.8 ? 'good' : score >= 0.6 ? 'mid' : 'bad'}">${Math.round(score * 100)}%</div>
      <h2>${score >= 0.9 ? 'Mandou bem! 🔥' : score >= 0.7 ? 'Muito bom! 👏' : 'Bom esforço! 💪'}</h2>
      ${extra}
      <p>${score < 0.7 ? 'Redo this one tomorrow before moving on. Repetition is how it sticks.' : 'Saved to your progress.'}</p>
      <div class="row">${nxt ? `<a class="btn primary" href="${nxt.href}">Next: ${U.esc(nxt.title)} →</a>` : ''}<a class="btn ghost" href="#/today">Back to today</a></div></section>`;
    renderHeader();
  }

  /* ---------------- speaking lab ---------------- */
  function weekPhrases(w) { return w.lessons.flatMap((l) => l.examples); }
  function viewLab(n) {
    const w = PT.weeks[+n - 1]; if (!w) return viewPlan();
    let reps = 0, talks = 0;
    const need = 15;
    $main().innerHTML = `<a class="back" href="#/plan">‹ Plan</a>
      <section class="card"><p class="kicker">🗣 Semana ${w.n} · Speaking lab · ~30 min</p><h2>Speaking lab: ${U.esc(w.title)}</h2>
        <p>Part 1: shadow the week’s phrases (aim for ${need}+ good reps). Part 2: talk freely on at least one prompt for 60+ seconds.</p>
        <div class="lab-status"></div></section>
      <h3 class="sect">Part 1 · Shadowing</h3><div id="sp" class="card"></div>
      <h3 class="sect">Part 2 · Free talk</h3><div id="talks"></div>
      <div class="row"><button class="primary big" id="fin" disabled>Finish lab ✓</button></div>`;
    const status = () => {
      $main().querySelector('.lab-status').innerHTML = `<span class="pill ${reps >= need ? 'good' : 'mid'}">${reps}/${need} reps</span> <span class="pill ${talks ? 'good' : 'mid'}">${talks}/1 free talk</span>`;
      document.getElementById('fin').disabled = !(reps >= need && talks >= 1);
    };
    PT.speakList(document.getElementById('sp'), weekPhrases(w), { onRep: (r) => { reps = r; status(); } });
    const tc = document.getElementById('talks');
    w.talk.forEach((p) => { const box = document.createElement('div'); tc.appendChild(box); PT.freeTalk(box, p, { onDone: ({ secs }) => { if (secs >= 45) talks++; status(); } }); });
    status();
    document.getElementById('fin').onclick = () => { PT.markDone(`w${w.n}lab`, null); resultCard(1, `w${w.n}lab`, `<p>${reps} reps + ${talks} free-talk session${talks > 1 ? 's' : ''}.</p>`); };
  }

  /* ---------------- drill & checkpoint ---------------- */
  const exOf = (w) => w.lessons.flatMap((l) => l.exercises);
  function viewDrill(n) {
    const w = PT.weeks[+n - 1]; if (!w) return viewPlan();
    const earlier = PT.weeks.slice(0, w.n - 1).flatMap(exOf);
    const list = U.shuffle([...U.sample(exOf(w), 15), ...U.sample(earlier, 5)]);
    $main().innerHTML = `<a class="back" href="#/plan">‹ Plan</a><section class="card"><p class="kicker">🧩 Semana ${w.n} · Mixed drill</p>
      <h2>Mixed sentence drill</h2><p>${list.length} exercises: this week’s material shuffled, plus a few from earlier weeks so you don’t forget them. Tip: say every answer out loud.</p></section><div id="stage"></div>`;
    PT.runExercises(document.getElementById('stage'), list, { title: 'Drill', onDone: (res) => { const sc = res.filter(Boolean).length / res.length; PT.markDone(`w${w.n}drill`, sc); resultCard(sc); } });
  }
  function viewCheck(n) {
    const w = PT.weeks[+n - 1]; if (!w) return viewPlan();
    const final = w.n === PT.weeks.length;
    const list = final ? U.sample(PT.weeks.flatMap(exOf), 25) : U.sample(exOf(w), 12);
    const prev = S().done[`w${w.n}check`];
    $main().innerHTML = `<a class="back" href="#/plan">‹ Plan</a><section class="card"><p class="kicker">🏁 Semana ${w.n}</p>
      <h2>${final ? 'FINAL EXAM: everything' : `Checkpoint ${w.n}`}</h2>
      <p>${list.length} questions. <b>80%</b> = pass. ${prev ? `Previous best: <b>${Math.round(prev.score * 100)}%</b>.` : ''} After the questions you'll rate this week's can-do statements honestly. Those ratings are your real fluency tracker.</p>
      <div class="row"><button class="primary big" id="go">Start</button></div></section><div id="stage"></div>`;
    document.getElementById('go').onclick = () => {
      document.getElementById('go').remove();
      const stage = document.getElementById('stage');
      PT.runExercises(stage, list, {
        title: final ? 'Final exam' : `Checkpoint ${w.n}`,
        onDone: (res) => {
          const sc = res.filter(Boolean).length / res.length;
          const cd = S().canDo[w.n] || [];
          stage.innerHTML = `<section class="card"><h3>Score: ${Math.round(sc * 100)}% ${sc >= 0.8 ? '✅ pass' : '⚠️ below 80%'}</h3>
            <p>Now be honest. Tick only what you could do <b>right now, with a real Brazilian</b>:</p>
            <ul class="cando-check">${w.canDo.map((c, k) => `<li><label><input type="checkbox" data-k="${k}" ${cd[k] ? 'checked' : ''}> ${U.esc(c)}</label></li>`).join('')}</ul>
            <div class="row"><button class="primary big" id="save">Save checkpoint</button></div></section>`;
          document.getElementById('save').onclick = () => {
            S().canDo[w.n] = w.canDo.map((_, k) => stage.querySelector(`[data-k="${k}"]`).checked);
            PT.markDone(`w${w.n}check`, sc);
            resultCard(sc, null, sc >= 0.8 ? '<p>Checkpoint passed. Next week unlocked on your tracker.</p>' : '<p>Below 80%. Retake it after redoing your weakest lesson (see Progress → weak spots).</p>');
          };
        },
      });
    };
  }

  /* ---------------- flashcards ---------------- */
  function viewCards() {
    const s = S();
    let queue = U.shuffle(srs.due()).concat(srs.fresh());
    let flipped = false;
    const draw = () => {
      if (!queue.length) {
        const st = srs.stats();
        $main().innerHTML = `<section class="card result"><h2>Cartas: tudo feito! ✓</h2>
          <p>${PT.day().cards} reviews today · ${st.seen}/${st.total} words started · ${st.solid} solid (7+ day interval)</p>
          <div class="row"><button class="ghost" id="more">Learn 10 more new words</button><a class="btn primary" href="#/today">Back to today</a></div></section>`;
        document.getElementById('more').onclick = () => { queue = srs.fresh(S(), 10); if (!queue.length) alert('No more new words available yet. They unlock week by week.'); draw(); };
        return;
      }
      const c = queue[0], st = s.cards[c.pt], isNew = !st;
      const front = s.reverse ? c.en : c.pt, back = s.reverse ? c.pt : c.en;
      $main().innerHTML = `
        <div class="ex-head"><span>🃏 ${queue.length} left</span><span>${isNew ? '<span class="pill mid">new</span>' : `<span class="pill">interval ${st.ivl}d</span>`}</span></div>
        <section class="card flash ${flipped ? 'flipped' : ''}">
          <div class="front">${U.esc(front)} ${s.reverse ? '' : PT.audioBtn(c.pt)}</div>
          ${flipped ? `<div class="back">${U.esc(back)} ${s.reverse ? PT.audioBtn(c.pt) : ''}</div><div class="wk">Semana ${c.week}</div>` : '<p class="hint">Say it out loud, then reveal.</p>'}
        </section>
        <div class="row grades">${flipped
          ? ['Again', 'Hard', 'Good', 'Easy'].map((g, k) => { const iv = srs.preview(st, k); return `<button class="g${k}" data-g="${k}">${g}<small>${iv === 0 ? '<1d' : iv + 'd'}</small></button>`; }).join('')
          : '<button class="primary big" id="flip">Show answer (space)</button>'}</div>
        <p class="hint center">Keys: space = flip · 1-4 = grade</p>`;
      if (!flipped && !s.reverse && s.autoplay) speech.say(c.pt);
      if (flipped && s.reverse && s.autoplay) speech.say(c.pt);
      const f = document.getElementById('flip'); if (f) f.onclick = () => { flipped = true; draw(); };
      $main().querySelectorAll('[data-g]').forEach((b) => (b.onclick = () => grade(+b.dataset.g)));
    };
    const grade = (g) => {
      const c = queue.shift(); srs.grade(c.pt, g);
      if (g === 0) queue.splice(Math.min(queue.length, 3), 0, c);
      flipped = false; draw(); renderHeader();
    };
    document.onkeydown = (e) => {
      if (!location.hash.startsWith('#/cards') || /input|textarea/i.test(e.target.tagName)) return;
      if (e.code === 'Space') { e.preventDefault(); if (!flipped && queue.length) { flipped = true; draw(); } }
      if (flipped && ['1', '2', '3', '4'].includes(e.key)) grade(+e.key - 1);
    };
    draw();
  }

  /* ---------------- speak (free practice) ---------------- */
  function viewSpeak(n) {
    const aw = PT.activeWeek(), wn = U.clamp(+n || aw, 1, PT.weeks.length), w = PT.weeks[wn - 1];
    const d = PT.day();
    $main().innerHTML = `<h2>🎙 Speaking practice</h2>
      <p class="sub">Today: <b>${d.speak}</b> reps · <b>${Math.round(d.talkSec / 60)}</b> min free talk. ${speech.canListen ? '' : '<br><span class="notice">Use Chrome or Edge to get pronunciation scores.</span>'}</p>
      <div class="chips">${PT.weeks.map((x) => `<a class="chip ${x.n === wn ? 'on' : ''}" href="#/speak/${x.n}">S${x.n}</a>`).join('')}</div>
      <h3 class="sect">Free talk · Semana ${wn}</h3><div id="talks"></div>
      <h3 class="sect">Shadowing · ${U.esc(w.title)}</h3><div class="card" id="sp"></div>`;
    const tc = document.getElementById('talks');
    w.talk.forEach((p) => { const b = document.createElement('div'); tc.appendChild(b); PT.freeTalk(b, p); });
    PT.speakList(document.getElementById('sp'), weekPhrases(w));
  }

  /* ---------------- progress ---------------- */
  function viewProgress() {
    const s = S(), items = PT.items(), st = srs.stats(), sc = PT.schedule();
    const totalMin = PT.totalMinutes(), targetMin = s.dailyGoal * PT.programDays();
    const speakTotal = Object.values(s.days).reduce((a, d) => a + (d.speak || 0), 0);
    const talkTotal = Math.round(Object.values(s.days).reduce((a, d) => a + (d.talkSec || 0), 0) / 60);
    const passed = PT.weeks.filter((w) => (s.done[`w${w.n}check`]?.score || 0) >= 0.8).length;
    const levels = [[2, 'A1', 'Survival: greetings, basic needs'], [4, 'A2', 'Travel-ready: restaurants, directions, past tense'], [6, 'B1−', 'Conversational: opinions, stories, real speech'], [8, 'B1', 'Independent: handle the whole trip in Portuguese']];
    const level = levels.filter(([w]) => (s.done[`w${w}check`]?.score || 0) >= 0.8).pop();
    const weak = items.filter((it) => it.type === 'lesson' && s.done[it.id] && s.done[it.id].score < 0.7);

    // heatmap over program days
    const days = PT.programDays();
    const cells = Array.from({ length: days }, (_, i) => {
      const dt = U.addDays(s.startDate, i), m = s.days[dt]?.min || 0, r = m / s.dailyGoal;
      const lv = m === 0 ? 0 : r < 0.34 ? 1 : r < 0.67 ? 2 : r < 1 ? 3 : 4;
      return `<span class="hm l${lv} ${dt === U.today() ? 'now' : ''} ${dt > U.today() ? 'future' : ''}" title="${dt}: ${Math.round(m)} min"></span>`;
    }).join('');

    const others = store.list().filter((p) => p.id !== s.id);
    $main().innerHTML = `<h2>📈 Progresso</h2>
      <div class="stats">
        <div class="stat"><b>${Math.round((totalMin / 60) * 10) / 10}h</b><small>of ${Math.round(targetMin / 60)}h target</small></div>
        <div class="stat"><b>${sc.done}/${sc.total}</b><small>sessions done</small></div>
        <div class="stat"><b>${PT.streak()}</b><small>day streak 🔥</small></div>
        <div class="stat"><b>${st.seen}</b><small>words started (${st.solid} solid)</small></div>
        <div class="stat"><b>${speakTotal}</b><small>speaking reps</small></div>
        <div class="stat"><b>${talkTotal}m</b><small>free talk</small></div>
      </div>
      <section class="card"><h3>Schedule</h3><p>${scheduleBadge()} Expected by today: ${sc.expected} sessions · done: ${sc.done}.</p>
        <div class="heatmap">${cells}</div><p class="hint">Each square is one day from ${U.fmtDate(s.startDate)} to ${U.fmtDate(s.tripDate)}. Darker = closer to your ${s.dailyGoal}-min goal.</p></section>
      <section class="card"><h3>Estimated level: ${level ? `<span class="pill good">${level[1]}</span> ${level[2]}` : '<span class="pill">pre-A1</span> pass Checkpoint 2 to reach A1'}</h3>
        <ol class="ladder">${levels.map(([w, l, d]) => `<li class="${(s.done[`w${w}check`]?.score || 0) >= 0.8 ? 'ok' : ''}"><b>${l}</b> · pass checkpoint ${w} · ${d}</li>`).join('')}</ol></section>
      <section class="card"><h3>By week</h3><table class="conj prog"><thead><tr><th>Week</th><th>Lessons</th><th>Lab</th><th>Drill</th><th>Checkpoint</th><th>Can-do</th></tr></thead><tbody>
        ${PT.weeks.map((w) => {
          const ls = w.lessons.filter((l) => s.done[l.id]).length, ck = s.done[`w${w.n}check`], dr = s.done[`w${w.n}drill`], cd = (s.canDo[w.n] || []).filter(Boolean).length;
          return `<tr><td>${w.n}. ${U.esc(w.title)}</td><td>${ls}/4</td><td>${s.done[`w${w.n}lab`] ? '✓' : '–'}</td><td>${dr ? Math.round(dr.score * 100) + '%' : '–'}</td>
            <td>${ck ? `${ck.score >= 0.8 ? '✅' : '⚠️'} ${Math.round(ck.score * 100)}%` : '–'}</td><td>${cd}/${w.canDo.length}</td></tr>`;
        }).join('')}</tbody></table></section>
      ${weak.length ? `<section class="card"><h3>Weak spots: redo these</h3><ul class="plain">${weak.map((it) => `<li><a href="${it.href}">${U.esc(it.title)}: ${Math.round(s.done[it.id].score * 100)}%</a></li>`).join('')}</ul></section>` : ''}
      ${others.length ? `<section class="card"><h3>💑 Couple scoreboard</h3><table class="conj prog"><thead><tr><th></th><th>Hours</th><th>Sessions</th><th>Streak</th><th>Words</th><th>Checkpoints</th></tr></thead><tbody>
        ${[s, ...others].map((p) => `<tr><td><b>${U.esc(p.name)}</b></td><td>${Math.round((PT.totalMinutes(p) / 60) * 10) / 10}</td><td>${PT.doneCount(p)}</td><td>${PT.streak(p)}</td>
          <td>${Object.keys(p.cards).length}</td><td>${PT.weeks.filter((w) => (p.done[`w${w.n}check`]?.score || 0) >= 0.8).length}</td></tr>`).join('')}</tbody></table></section>` : ''}
      <p class="hint">Checkpoints passed: ${passed}/8.</p>`;
  }

  /* ---------------- settings ---------------- */
  function viewSettings() {
    const s = S();
    $main().innerHTML = `<h2>⚙ Configurações</h2>
      <form class="card form" id="sf">
        <label>Name <input name="name" value="${U.esc(s.name)}"></label>
        <label>Start date <input type="date" name="startDate" value="${s.startDate}"></label>
        <label>Trip date <input type="date" name="tripDate" value="${s.tripDate}"></label>
        <label>Daily goal (minutes) <input type="number" name="dailyGoal" min="15" max="300" value="${s.dailyGoal}"></label>
        <label>New flashcards per day <input type="number" name="newPerDay" min="0" max="50" value="${s.newPerDay}"></label>
        <label>Voice speed <input type="range" name="ttsRate" min="0.5" max="1.2" step="0.05" value="${s.ttsRate}"> <button type="button" class="ghost" data-say="Olá! Tudo bem? Eu estou aprendendo português.">Test voice</button></label>
        <label class="chk"><input type="checkbox" name="autoplay" ${s.autoplay ? 'checked' : ''}> Auto-play Portuguese audio</label>
        <label class="chk"><input type="checkbox" name="reverse" ${s.reverse ? 'checked' : ''}> Flashcards English → Portuguese (harder, better for speaking)</label>
        <button class="primary">Save</button>
        <p class="hint">Voice: ${speech.voice ? U.esc(speech.voice.name + ' (' + speech.voice.lang + ')') : 'no Portuguese voice found. Install a pt-BR voice in your OS settings.'} · Speech recognition: ${speech.canListen ? 'available ✓' : 'not available (use Chrome / Edge)'}</p>
      </form>
      <section class="card"><h3>Profiles</h3>
        <ul class="plain">${store.list().map((p) => `<li>${p.id === s.id ? '● ' : ''}<b>${U.esc(p.name)}</b> ${p.id !== s.id ? `<button class="ghost" data-sw="${p.id}">Switch</button>` : '(active)'} <button class="ghost danger" data-del="${p.id}">Delete</button></li>`).join('')}</ul>
        <form id="add" class="row"><input name="n" placeholder="Partner’s name" required><button class="primary">+ Add profile</button></form>
        <p class="hint">Profiles live on this device. To sync between phones, export here and import on the other device.</p></section>
      <section class="card"><h3>Backup</h3><div class="row"><button class="ghost" id="exp">⬇ Export progress</button>
        <label class="btn ghost">⬆ Import<input type="file" id="imp" accept=".json" hidden></label></div></section>`;
    document.getElementById('sf').onsubmit = (e) => {
      e.preventDefault();
      const f = new FormData(e.target);
      Object.assign(s, { name: f.get('name').trim() || s.name, startDate: f.get('startDate'), tripDate: f.get('tripDate'), dailyGoal: +f.get('dailyGoal'), newPerDay: +f.get('newPerDay'), ttsRate: +f.get('ttsRate'), autoplay: !!f.get('autoplay'), reverse: !!f.get('reverse') });
      store.save(); render();
    };
    $main().querySelector('[name=ttsRate]').oninput = (e) => { s.ttsRate = +e.target.value; };
    $main().querySelectorAll('[data-sw]').forEach((b) => (b.onclick = () => { store.switchTo(b.dataset.sw); render(); }));
    $main().querySelectorAll('[data-del]').forEach((b) => (b.onclick = () => { const p = store.data.profiles[b.dataset.del]; if (confirm(`Delete ${p.name}'s profile and ALL their progress?`)) { store.remove(p.id); location.hash = '#/today'; render(); } }));
    document.getElementById('add').onsubmit = (e) => { e.preventDefault(); const n = new FormData(e.target).get('n').trim(); store.create(n, s.startDate, s.tripDate); render(); };
    document.getElementById('exp').onclick = () => {
      const blob = new Blob([JSON.stringify(store.data, null, 1)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `fala-brasil-backup-${U.today()}.json`; a.click();
    };
    document.getElementById('imp').onchange = async (e) => {
      try { store.importJSON(JSON.parse(await e.target.files[0].text())); alert('Imported ✓'); render(); } catch (err) { alert('Import failed: ' + err.message); }
    };
  }

  /* ---------------- boot ---------------- */
  store.load(); speech.init(); PT.activity.start(); render();
})();
