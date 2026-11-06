/* Fala, Brasil! — exercise engine, shadowing (speech recognition) and free-talk components */
(function () {
  const { u: U, speech } = PT;
  const say = (t, slow) => speech.say(t, slow);
  PT.audioBtn = (pt) => `<button class="icon" data-say="${U.esc(pt)}" title="Listen">🔊</button>`;
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-say]');
    if (b) { e.preventDefault(); say(b.dataset.say, b.dataset.slow === '1'); }
  });

  const fullSentence = (ex) => {
    if (ex.t === 'fill') return ex.q.replace('___', ex.a[0]).replace(/\s*\([^)]*\)/g, '');
    if (ex.t === 'tr') return ex.a[0];
    if (ex.t === 'order') return ex.pt;
    return null;
  };
  // returns {ok, note}
  function checkText(input, answers, fuzzy) {
    const n = U.norm(input), na = U.norm(input, false);
    for (const a of answers) if (U.norm(a) === n) return { ok: true };
    for (const a of answers) if (U.norm(a, false) === na) return { ok: true, note: `Watch the accents: <b>${U.esc(a)}</b>` };
    if (fuzzy) {
      let best = 0, bestA = answers[0];
      for (const a of answers) { const s = U.sim(a, input); if (s > best) { best = s; bestA = a; } }
      if (best >= 0.9) return { ok: true, note: `Small typo — it's <b>${U.esc(bestA)}</b>` };
    }
    return { ok: false };
  }

  /* runExercises(el, list, {onDone(results[]), title}) */
  PT.runExercises = function (el, list, opts = {}) {
    let i = 0;
    const results = [];
    const step = () => {
      if (i >= list.length) return opts.onDone && opts.onDone(results);
      const ex = list[i];
      el.innerHTML = `
        <div class="ex-head"><span>${U.esc(opts.title || 'Practice')} · ${i + 1}/${list.length}</span>
          <span class="score">${results.filter(Boolean).length} ✓</span></div>
        <div class="bar"><div style="width:${(i / list.length) * 100}%"></div></div>
        <div class="ex card"></div>`;
      render(el.querySelector('.ex'), ex);
    };
    const finish = (box, ok, note, ex) => {
      results.push(ok);
      const pt = fullSentence(ex);
      const fb = U.h(`<div class="feedback ${ok ? 'good' : 'bad'}">
          <div><b>${ok ? 'Certo! ✓' : 'Quase… ✗'}</b> ${note || ''}</div>
          ${pt ? `<div class="answer">${PT.audioBtn(pt)} ${U.esc(pt)}</div>` : ''}
          ${ex.why ? `<div class="why">${ex.why}</div>` : ''}
          <div class="row">${!ok && ex.t === 'tr' ? '<button class="ghost" data-override>I was right</button>' : ''}
          <button class="primary" data-next>Continue →</button></div></div>`);
      box.appendChild(fb);
      box.querySelectorAll('input,textarea,button.opt,.tok').forEach((x) => (x.disabled = true));
      if (pt && PT.store.s.autoplay) say(pt);
      const ov = fb.querySelector('[data-override]');
      if (ov) ov.onclick = () => { results[results.length - 1] = true; ov.remove(); fb.className = 'feedback good'; fb.querySelector('b').textContent = 'Counted as correct ✓'; };
      const nx = fb.querySelector('[data-next]');
      nx.focus();
      nx.onclick = () => { i++; step(); };
    };

    function render(box, ex) {
      if (ex.t === 'mc') {
        const order = U.shuffle(ex.o.map((_, k) => k));
        box.innerHTML = `<p class="q">${ex.q}</p><div class="opts">${order.map((k) => `<button class="opt" data-k="${k}">${U.esc(ex.o[k])}</button>`).join('')}</div>`;
        box.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
          const ok = +b.dataset.k === ex.a;
          b.classList.add(ok ? 'right' : 'wrong');
          box.querySelector(`.opt[data-k="${ex.a}"]`).classList.add('right');
          finish(box, ok, ok ? '' : `Answer: <b>${U.esc(ex.o[ex.a])}</b>`, ex);
        }));
      } else if (ex.t === 'fill') {
        const [pre, post] = ex.q.split('___');
        box.innerHTML = `<p class="hint">Fill in the blank</p>
          <p class="q fill">${U.esc(pre)}<input autocomplete="off" autocapitalize="off" spellcheck="false" size="${Math.max(4, ex.a[0].length + 1)}">${U.esc(post || '')}</p>
          ${ex.en ? `<p class="en">${U.esc(ex.en)}</p>` : ''}
          <div class="row"><button class="primary" data-check>Check</button></div>`;
        const inp = box.querySelector('input');
        inp.focus();
        const go = () => { if (!inp.value.trim()) return; const r = checkText(inp.value, ex.a, false); finish(box, r.ok, r.ok ? r.note || '' : `Answer: <b>${U.esc(ex.a[0])}</b>`, ex); box.querySelector('[data-check]').remove(); };
        box.querySelector('[data-check]').onclick = go;
        inp.onkeydown = (e) => { if (e.key === 'Enter') go(); };
      } else if (ex.t === 'tr') {
        box.innerHTML = `<p class="hint">Translate into Portuguese</p><p class="q">${U.esc(ex.en)}</p>
          <textarea rows="2" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escreva em português…"></textarea>
          <div class="row">${speech.canListen ? '<button class="ghost" data-mic>🎙 Say it</button>' : ''}<button class="primary" data-check>Check</button></div>`;
        const ta = box.querySelector('textarea');
        ta.focus();
        const go = () => { if (!ta.value.trim()) return; const r = checkText(ta.value, ex.a, true); finish(box, r.ok, r.ok ? r.note || '' : `Expected: <b>${U.esc(ex.a[0])}</b>`, ex); box.querySelector('.row').remove(); };
        box.querySelector('[data-check]').onclick = go;
        ta.onkeydown = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); go(); } };
        const mic = box.querySelector('[data-mic]');
        if (mic) mic.onclick = async () => {
          mic.textContent = '🎙 Listening…';
          try { const alts = await speech.listenOnce(); let best = alts[0]; let bs = 0; alts.forEach((a) => ex.a.forEach((x) => { const s = U.sim(a, x); if (s > bs) { bs = s; best = a; } })); ta.value = best; PT.day().speak++; PT.store.save(); }
          catch (e) { /* ignore */ }
          mic.textContent = '🎙 Say it';
        };
      } else if (ex.t === 'order') {
        const words = ex.pt.replace(/[.,!?]/g, '').split(/\s+/);
        let pool = words.map((w, k) => ({ w, k }));
        let shuffled = U.shuffle(pool);
        if (words.length > 1) while (shuffled.every((x, k) => x.k === k)) shuffled = U.shuffle(pool);
        const chosen = [];
        box.innerHTML = `<p class="hint">Put the words in order</p><p class="q">${U.esc(ex.en)}</p>
          <div class="built"></div><div class="pool"></div>
          <div class="row"><button class="ghost" data-reset>Reset</button><button class="primary" data-check>Check</button></div>`;
        const built = box.querySelector('.built'), poolEl = box.querySelector('.pool');
        const draw = () => {
          built.innerHTML = chosen.map((t, k) => `<button class="tok" data-b="${k}">${U.esc(t.w)}</button>`).join('') || '<span class="placeholder">tap the words below…</span>';
          poolEl.innerHTML = shuffled.map((t, k) => (chosen.includes(t) ? `<button class="tok ghosted" disabled>${U.esc(t.w)}</button>` : `<button class="tok" data-p="${k}">${U.esc(t.w)}</button>`)).join('');
          built.querySelectorAll('[data-b]').forEach((b) => (b.onclick = () => { chosen.splice(+b.dataset.b, 1); draw(); }));
          poolEl.querySelectorAll('[data-p]').forEach((b) => (b.onclick = () => { chosen.push(shuffled[+b.dataset.p]); draw(); }));
        };
        draw();
        box.querySelector('[data-reset]').onclick = () => { chosen.length = 0; draw(); };
        box.querySelector('[data-check]').onclick = () => {
          if (chosen.length < words.length) return;
          const ok = U.norm(chosen.map((t) => t.w).join(' ')) === U.norm(words.join(' '));
          finish(box, ok, '', ex); box.querySelector('.row').remove();
        };
      }
    }
    step();
  };

  /* ---------- Shadowing list: listen, repeat, get scored by speech recognition ---------- */
  function diffWords(target, heard) {
    const hs = new Set(U.norm(heard, false).split(' '));
    return target.split(/\s+/).map((w) => (hs.has(U.norm(w, false)) || !U.norm(w, false) ? `<span>${U.esc(w)}</span>` : `<span class="miss">${U.esc(w)}</span>`)).join(' ');
  }
  PT.speakList = function (el, pairs, opts = {}) {
    let reps = 0;
    const onRep = () => { reps++; PT.day().speak++; PT.store.save(); opts.onRep && opts.onRep(reps); };
    el.innerHTML = `${speech.canListen ? '' : '<p class="notice">Speech recognition isn’t available in this browser (use Chrome or Edge for scoring). You can still listen, repeat out loud and tap ✓.</p>'}
      <ul class="speak-list">${pairs.map(([pt, en], k) => `
        <li data-k="${k}">
          <div class="pt">${U.esc(pt)}</div><div class="en">${U.esc(en)}</div>
          <div class="ctl">${PT.audioBtn(pt)}<button class="icon" data-say="${U.esc(pt)}" data-slow="1" title="Slow">🐢</button>
          ${speech.canListen ? '<button class="mic">🎙 Repeat</button>' : '<button class="mic">✓ Said it</button>'}</div>
          <div class="res"></div>
        </li>`).join('')}</ul>`;
    el.querySelectorAll('li').forEach((li) => {
      const [pt] = pairs[+li.dataset.k];
      const btn = li.querySelector('.mic'), res = li.querySelector('.res');
      btn.onclick = async () => {
        if (!speech.canListen) { onRep(); li.classList.add('ok'); return; }
        btn.disabled = true; btn.textContent = '🎙 Listening…'; res.innerHTML = '';
        try {
          const alts = await speech.listenOnce();
          let best = alts[0], bs = -1; alts.forEach((a) => { const s = U.sim(pt, a); if (s > bs) { bs = s; best = a; } });
          const pct = Math.round(bs * 100);
          const cls = bs >= 0.85 ? 'good' : bs >= 0.6 ? 'mid' : 'bad';
          const label = bs >= 0.85 ? 'Ótimo!' : bs >= 0.6 ? 'Quase!' : 'Tenta de novo';
          res.innerHTML = `<span class="pill ${cls}">${label} ${pct}%</span> <span class="heard">heard: “${U.esc(best)}”</span><div class="diff">${diffWords(pt, best)}</div>`;
          if (bs >= 0.6) { onRep(); li.classList.add('ok'); }
        } catch (e) {
          res.innerHTML = `<span class="pill bad">${e === 'not-allowed' ? 'Microphone blocked — allow mic access' : 'Didn’t catch that — try again'}</span>`;
        }
        btn.disabled = false; btn.textContent = '🎙 Repeat';
      };
    });
  };

  /* ---------- Free talk: speak continuously on a prompt, get a transcript + word count ---------- */
  PT.freeTalk = function (el, prompt, opts = {}) {
    let rec = null, active = false, start = 0, finalText = '', timer = null;
    el.innerHTML = `<div class="talk card">
      <p class="q">${U.esc(prompt)}</p>
      <p class="hint">Aim for 60+ seconds. Don’t stop to fix mistakes — keep talking, use “é…”, “tipo…”, “então…”.</p>
      <div class="row"><button class="primary" data-go>🎙 Start talking</button><span class="clock">0:00</span><span class="wc"></span></div>
      <div class="transcript"></div></div>`;
    const go = el.querySelector('[data-go]'), clock = el.querySelector('.clock'), tr = el.querySelector('.transcript'), wc = el.querySelector('.wc');
    const tick = () => { const s = Math.floor((Date.now() - start) / 1000); clock.textContent = `${Math.floor(s / 60)}:${U.pad(s % 60)}`; };
    const stop = () => {
      active = false; clearInterval(timer); if (rec) try { rec.stop(); } catch (e) {}
      const secs = Math.round((Date.now() - start) / 1000);
      const words = finalText.trim() ? finalText.trim().split(/\s+/).length : 0;
      go.textContent = '🎙 Again';
      const d = PT.day(); d.talkSec += secs; PT.store.save();
      wc.textContent = speech.canListen ? `${words} words · ${secs}s` : `${secs}s`;
      opts.onDone && opts.onDone({ secs, words, text: finalText });
    };
    go.onclick = () => {
      if (active) return stop();
      active = true; start = Date.now(); finalText = ''; tr.textContent = ''; wc.textContent = '';
      go.textContent = '■ Stop'; timer = setInterval(tick, 500);
      if (!speech.canListen) { tr.innerHTML = '<span class="hint">No speech recognition here — talk out loud anyway, then press Stop.</span>'; return; }
      const begin = () => {
        rec = speech.recognizer({ continuous: true, interim: true });
        rec.onresult = (e) => {
          let interim = '';
          for (let k = e.resultIndex; k < e.results.length; k++) {
            if (e.results[k].isFinal) finalText += e.results[k][0].transcript + ' ';
            else interim += e.results[k][0].transcript;
          }
          tr.innerHTML = `${U.esc(finalText)}<span class="interim">${U.esc(interim)}</span>`;
        };
        rec.onerror = (e) => { if (e.error === 'not-allowed') { tr.textContent = 'Microphone blocked — allow mic access.'; stop(); } };
        rec.onend = () => { if (active) try { begin(); } catch (e) {} };
        rec.start();
      };
      begin();
    };
  };
})();
