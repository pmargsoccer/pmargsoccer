/* Weeks 5–6: imperfect, pronouns, comparisons; real spoken Portuguese, imperative, subjunctive, opinions */
PT.addWeek({
  n: 5,
  title: 'Contando Histórias',
  subtitle: 'Imperfect, pronouns, comparisons',
  goal: 'Describe the past (how things were) vs events (what happened), use object pronouns the Brazilian way, compare things.',
  canDo: [
    'I can describe my childhood and past habits with the imperfect.',
    'I can choose between preterite and imperfect in a story.',
    'I can say "I love you", "call me", "help me", "come with me" naturally.',
    'I can compare things: bigger, better, the best, as … as.',
  ],
  lessons: [
    {
      id: 'w5l1', kind: 'Grammar', title: 'The imperfect: how things used to be', minutes: 35,
      body: `
${PT.table(['', 'FALAR', 'COMER / ABRIR'], [
  ['eu', 'fal<b>ava</b>', 'com<b>ia</b> / abr<b>ia</b>'], ['você / ele / a gente', 'fal<b>ava</b>', 'com<b>ia</b> / abr<b>ia</b>'],
  ['nós', 'fal<b>ávamos</b>', 'com<b>íamos</b> / abr<b>íamos</b>'], ['vocês / eles', 'fal<b>avam</b>', 'com<b>iam</b> / abr<b>iam</b>'],
])}
<p>Only 4 irregular verbs: <b>ser → era</b>, <b>ter → tinha</b>, <b>vir → vinha</b>, <b>pôr → punha</b>. (Estar is regular: <i>estava</i>.)</p>
<p>Use it for:</p>
<ul><li><b>Habits</b> ("used to"): <i>Quando eu era criança, eu jogava futebol.</i></li>
<li><b>Descriptions & background</b>: <i>O hotel era lindo. Fazia calor.</i></li>
<li><b>Ongoing actions</b> (estava + -ndo): <i>Eu estava dormindo quando você ligou.</i></li>
<li><b>Age & time in the past</b>: <i>Eu tinha vinte anos. Eram dez horas.</i></li>
<li><b>Politeness</b>: <i>Eu queria…</i> (I'd like…)</li></ul>`,
      examples: [
        ['Quando eu era criança, eu jogava futebol.', 'When I was a kid, I used to play soccer.'], ['A gente morava perto da praia.', 'We used to live near the beach.'],
        ['Estava chovendo.', 'It was raining.'], ['O hotel era lindo.', 'The hotel was beautiful.'], ['Eu tinha vinte anos.', 'I was twenty years old.'],
        ['Ela sempre comia açaí.', 'She always used to eat açaí.'], ['Eu estava dormindo quando você ligou.', 'I was sleeping when you called.'],
      ],
      exercises: [
        { t: 'fill', q: 'Quando eu ___ (ser) criança, eu morava em Boston.', a: ['era'] },
        { t: 'fill', q: 'Eu ___ (jogar) futebol todo dia.', a: ['jogava'] },
        { t: 'fill', q: 'Nós ___ (morar) perto da praia.', a: ['morávamos'] },
        { t: 'fill', q: 'Ela ___ (ter) um cachorro.', a: ['tinha'] },
        { t: 'fill', q: 'Eu ___ (estar) dormindo.', a: ['estava', 'tava'] },
        { t: 'mc', q: 'The imperfect is used for…', o: ['habits and descriptions in the past', 'single completed actions', 'future plans'], a: 0 },
        { t: 'tr', en: 'It was raining.', a: ['Estava chovendo.', 'Tava chovendo.'] },
        { t: 'order', pt: 'Quando eu era criança eu jogava futebol', en: 'When I was a kid, I used to play soccer' },
      ],
    },
    {
      id: 'w5l2', kind: 'Grammar', title: 'Preterite vs imperfect', minutes: 35,
      body: `
<p>Think of a film: the <b>imperfect</b> is the <b>background</b> (scenery, what was going on, habits), and the <b>preterite</b> is the <b>event</b> that happens (a single snapshot, finished).</p>
${PT.table(['Imperfect (background / habit)', 'Preterite (event)'], [
  ['Eu <b>estava</b> na praia…', '…quando <b>começou</b> a chover.'], ['<b>Fazia</b> calor,', 'então a gente <b>foi</b> nadar.'], ['Todo verão eu <b>ia</b> pra casa da minha avó.', 'Ano passado eu <b>fui</b> pro Brasil.'],
])}
<p><b>Signal words.</b> Preterite: <i>ontem, uma vez, de repente, em 2020, semana passada</i>. Imperfect: <i>sempre, todo dia, quando eu era…, antigamente, enquanto</i>.</p>
<p class="tip">💡 <b>conhecer</b> in the preterite = "met (for the first time)": <i>Eu <b>conheci</b> a minha namorada numa festa.</i></p>`,
      examples: [
        ['Eu estava no bar quando ele chegou.', 'I was at the bar when he arrived.'], ['Fazia calor, então a gente foi à praia.', 'It was hot, so we went to the beach.'],
        ['Todo verão eu ia pra casa da minha avó.', 'Every summer I used to go to my grandma’s.'], ['Ontem eu fui ao mercado.', 'Yesterday I went to the market.'],
        ['Era meia-noite quando a festa acabou.', 'It was midnight when the party ended.'], ['Eu conheci a minha namorada numa festa.', 'I met my girlfriend at a party.'],
      ],
      exercises: [
        { t: 'mc', q: 'Ontem eu ___ ao cinema.', o: ['fui', 'ia'], a: 0 },
        { t: 'mc', q: 'Quando eu era criança, eu ___ muito.', o: ['nadava', 'nadei'], a: 0 },
        { t: 'mc', q: 'Eu ___ dormindo quando o telefone tocou.', o: ['estava', 'estive'], a: 0 },
        { t: 'mc', q: 'De repente, ___ a chover.', o: ['começou', 'começava'], a: 0 },
        { t: 'mc', q: '"Eu conheci ela numa festa" means…', o: ['I met her at a party', 'I used to know her at a party'], a: 0 },
        { t: 'fill', q: 'Fazia calor, então a gente ___ (ir) à praia.', a: ['foi'] },
        { t: 'tr', en: 'When I was a child, I lived in Texas.', a: ['Quando eu era criança, eu morava no Texas.', 'Quando eu era criança, morava no Texas.'] },
        { t: 'order', pt: 'Eu conheci a minha namorada numa festa', en: 'I met my girlfriend at a party' },
      ],
    },
    {
      id: 'w5l3', kind: 'Grammar', title: 'Object pronouns, Brazilian style', minutes: 35,
      body: `
<p>Textbooks teach <i>o/a/lo/la</i>. Real Brazilian speech is much simpler:</p>
${PT.table(['', 'spoken Brazil', 'example'], [
  ['me', '<b>me</b>', 'Ele <b>me</b> ligou. / <b>Me</b> liga!'], ['you', '<b>te</b> (even with você!)', 'Eu <b>te</b> amo. Eu <b>te</b> espero.'],
  ['him / her', '<b>ele / ela</b> after the verb', 'Eu vi <b>ele</b> ontem.'], ['us', '<b>a gente</b> / <b>nos</b>', 'Ela ajudou <b>a gente</b>.'],
  ['to me / for me', '<b>pra mim</b>', 'Isso é <b>pra mim</b>?'], ['to you / for you', '<b>pra você</b> / <b>te</b>', 'Eu <b>te</b> mando a foto.'],
])}
<p><b>Placement:</b> in Brazil the pronoun goes <b>before</b> the main verb, even at the start of a sentence: <i><b>Me</b> dá um minuto. Você pode <b>me</b> ajudar?</i></p>
<p><b>With "com":</b> <b>comigo</b> (with me), <b>com você / contigo</b> (with you), <b>com a gente</b> (with us).</p>`,
      examples: [
        ['Eu te amo.', 'I love you.'], ['Me liga mais tarde!', 'Call me later!'], ['Você pode me ajudar?', 'Can you help me?'], ['Eu vi ele ontem.', 'I saw him yesterday.'],
        ['Ela me disse que sim.', 'She told me yes.'], ['Isso é pra você.', 'This is for you.'], ['Vem comigo!', 'Come with me!'], ['A gente te espera aqui.', 'We’ll wait for you here.'],
        ['Me empresta o carregador?', 'Can you lend me the charger?'],
      ],
      exercises: [
        { t: 'mc', q: 'I love you (to your partner):', o: ['Eu te amo.', 'Eu amo te.', 'Eu amo-você.'], a: 0 },
        { t: 'mc', q: 'Come with me!', o: ['Vem comigo!', 'Vem com eu!', 'Vem com mim!'], a: 0 },
        { t: 'fill', q: 'Você pode ___ ajudar?', a: ['me'], en: 'Can you help me?' },
        { t: 'fill', q: 'Isso é pra ___.', a: ['mim'], en: 'This is for me.' },
        { t: 'fill', q: 'Eu ___ espero aqui.', a: ['te'], en: 'I’ll wait for you here.' },
        { t: 'tr', en: 'Call me later!', a: ['Me liga mais tarde!', 'Me ligue mais tarde!', 'Liga pra mim mais tarde!'] },
        { t: 'tr', en: 'Can you help me?', a: ['Você pode me ajudar?', 'Pode me ajudar?'] },
        { t: 'order', pt: 'A gente te espera aqui', en: 'We will wait for you here' },
      ],
    },
    {
      id: 'w5l4', kind: 'Grammar', title: 'Comparisons & reflexive verbs', minutes: 30,
      body: `
${PT.table(['Pattern', 'Example'], [
  ['mais … (do) que', 'Essa praia é <b>mais</b> bonita <b>do que</b> aquela.'], ['menos … (do) que', 'Aqui é <b>menos</b> caro <b>que</b> lá.'],
  ['tão … quanto', 'Ela é <b>tão</b> alta <b>quanto</b> eu.'], ['o/a mais …', 'o bar <b>mais</b> legal da cidade'], ['-íssimo', 'lind<b>íssimo</b>, car<b>íssimo</b> (super beautiful, super expensive)'],
])}
<p>Irregular: <b>bom → melhor</b> (better / best), <b>ruim → pior</b>, <b>grande → maior</b>, <b>pequeno → menor</b>.</p>
<p><b>Reflexive verbs</b> use me / se / nos: <i>Eu <b>me</b> chamo…, A gente <b>se</b> vê!, Você <b>se</b> lembra?, Eu <b>me</b> perdi</i> (I got lost), <i>Ela <b>se</b> sente melhor</i>.</p>`,
      examples: [
        ['São Paulo é maior que o Rio.', 'São Paulo is bigger than Rio.'], ['Essa praia é mais bonita do que aquela.', 'This beach is prettier than that one.'], ['A comida aqui é melhor!', 'The food here is better!'],
        ['Ela é tão alta quanto eu.', 'She’s as tall as me.'], ['Esse é o melhor bar da cidade.', 'This is the best bar in the city.'], ['Lindíssimo!', 'Gorgeous!'],
        ['A gente se vê amanhã.', 'See you tomorrow.'], ['Eu me perdi.', 'I got lost.'], ['Você se lembra de mim?', 'Do you remember me?'],
      ],
      exercises: [
        { t: 'fill', q: 'Essa praia é ___ bonita do que aquela.', a: ['mais'], en: 'more' },
        { t: 'fill', q: 'A comida aqui é ___!', a: ['melhor'], en: 'better' },
        { t: 'mc', q: 'as tall as', o: ['tão alto quanto', 'mais alto quanto', 'tanto alto como'], a: 0 },
        { t: 'mc', q: '"Eu me perdi"', o: ['I got lost', 'I lost it', 'I lost myself in love'], a: 0 },
        { t: 'fill', q: 'A gente ___ vê amanhã.', a: ['se'] },
        { t: 'tr', en: 'This is the best bar in the city.', a: ['Esse é o melhor bar da cidade.', 'Este é o melhor bar da cidade.'] },
        { t: 'order', pt: 'Você se lembra de mim', en: 'Do you remember me?' },
      ],
    },
  ],
  vocab: [
    ['a criança', 'child'], ['o cachorro', 'dog'], ['chover', 'to rain'], ['jogar', 'to play (games / sports)'], ['ligar', 'to call / to turn on'],
    ['ajudar', 'to help'], ['esperar', 'to wait / to hope'], ['lembrar (de)', 'to remember'], ['perder', 'to lose / to miss (a bus)'], ['encontrar', 'to find / to meet up'],
    ['conheci', 'I met (for the first time)'], ['era', 'was (description)'], ['tinha', 'had / there was'], ['estava', 'was (state)'], ['maior', 'bigger'],
    ['menor', 'smaller'], ['melhor', 'better / best'], ['pior', 'worse / worst'], ['mais', 'more'], ['menos', 'less'], ['bonito / bonita', 'pretty / handsome'],
    ['lindo / linda', 'beautiful'], ['caro', 'expensive'], ['barato', 'cheap'], ['quente', 'hot'], ['devagar', 'slowly'], ['comigo', 'with me'], ['pra mim', 'for me'],
    ['eu te amo', 'I love you'], ['me liga', 'call me'], ['todo dia', 'every day'], ['de repente', 'suddenly'], ['o verão', 'summer'], ['a avó', 'grandmother'],
    ['a mãe / o pai', 'mother / father'], ['a família', 'family'], ['eu me perdi', 'I got lost'],
  ],
  talk: [
    'Describe your childhood: where you lived, what you used to do, what you were like (imperfect).',
    'Tell the story of how you two met: set the scene (imperfect), then what happened (preterite).',
    'Compare your hometown with Rio or São Paulo: bigger, more expensive, better…',
  ],
  partner: [
    'Childhood swap: each tells 5 things "Quando eu era criança, eu…"',
    'Tell each other how you met. Your partner corrects preterite/imperfect.',
    'Pronoun day: use "me", "te", "comigo", "pra você" as much as possible (Me passa o sal?).',
    'Compare things in the house: "O seu café é melhor que o meu."',
    'Describe a past trip together: where you were, what the weather was like, what you did.',
    'Watch 10 minutes of a Brazilian show together, then retell what happened in Portuguese.',
    'Checkpoint night: one minute each telling a story without English.',
  ],
  immersion: [
    'Watch "Cidade de Deus" or another Brazilian film with Portuguese subtitles (in two parts is fine).',
    'Pick a Brazilian YouTuber you like and watch 2 videos without English subtitles.',
  ],
});

PT.addWeek({
  n: 6,
  title: 'Falando de Verdade',
  subtitle: 'Real spoken Portuguese',
  goal: 'Sound natural: conversation fillers, commands and requests, the present subjunctive, and giving opinions and feelings.',
  canDo: [
    'I can use tô, tá, cê, pra, né, tipo, então, aí in conversation.',
    'I can ask for repetition, clarification, and how to say something.',
    'I can make polite requests and understand commands and signs.',
    'I can say I hope / want / maybe with the subjunctive (Tomara que…).',
    'I can give my opinion and talk about feelings (saudade, animado…).',
  ],
  lessons: [
    {
      id: 'w6l1', kind: 'Speaking', title: 'Conversation glue: how Brazilians really talk', minutes: 30,
      body: `
${PT.table(['Written', 'Spoken'], [
  ['estou / está / estamos', '<b>tô / tá / tamo</b>'], ['você', '<b>cê</b>'], ['para / para o / para a', '<b>pra / pro / pra</b>'], ['vamos embora', '<b>bora</b>'], ['não é?', '<b>né?</b>'],
])}
${PT.table(['Filler / reaction', 'Meaning'], [
  ['então…', 'so…'], ['aí…', 'and then…'], ['tipo…', 'like…'], ['né?', 'right? isn’t it?'], ['sabe?', 'you know?'], ['pois é', 'yeah, exactly / I know, right'],
  ['nossa!', 'wow!'], ['caramba!', 'damn! wow!'], ['sério?', 'seriously?'], ['que legal!', 'how cool!'], ['beleza', 'OK / cool'], ['valeu!', 'thanks!'],
  ['imagina!', 'don’t mention it / no way'], ['com certeza', 'for sure'], ['ué?', 'huh? (surprised / confused)'],
])}
<p><b>Survival strategies</b> (use these whenever you get stuck, and never switch to English!):</p>
<ul><li><i>Como se diz "sunscreen" em português?</i> How do you say…?</li><li><i>O que significa "…"?</i> What does … mean?</li>
<li><i>Pode repetir, por favor?</i> Can you repeat?</li><li><i>Mais devagar, por favor.</i> Slower, please.</li><li><i>Eu ainda tô aprendendo.</i> I'm still learning.</li></ul>`,
      examples: [
        ['Tô cansado, né?', 'I’m tired, you know?'], ['Cê vai pra festa?', 'Are you going to the party?'], ['Nossa, que legal!', 'Wow, how cool!'], ['Pois é…', 'Yeah, I know…'],
        ['Valeu, cara!', 'Thanks, man!'], ['Beleza, até mais!', 'Cool, see you!'], ['Como se diz "sunscreen" em português?', 'How do you say "sunscreen" in Portuguese?'],
        ['Pode repetir, por favor?', 'Can you repeat, please?'], ['Mais devagar, por favor.', 'Slower, please.'], ['Eu ainda tô aprendendo.', 'I’m still learning.'],
      ],
      exercises: [
        { t: 'mc', q: '"Valeu!" means…', o: ['Thanks!', 'It’s worth it!', 'Goodbye forever'], a: 0 },
        { t: 'mc', q: '"Tô" = ', o: ['estou', 'todo', 'tomo'], a: 0 },
        { t: 'mc', q: 'Someone thanks you. A warm Brazilian reply:', o: ['Imagina!', 'Nossa!', 'Ué!'], a: 0 },
        { t: 'mc', q: '"Nossa!" on its own expresses…', o: ['surprise (wow!)', 'ownership (ours)', 'agreement'], a: 0 },
        { t: 'tr', en: 'Can you repeat, please?', a: ['Pode repetir, por favor?', 'Você pode repetir, por favor?'] },
        { t: 'tr', en: 'Slower, please.', a: ['Mais devagar, por favor.'] },
        { t: 'order', pt: 'Como se diz isso em português', en: 'How do you say this in Portuguese?' },
      ],
    },
    {
      id: 'w6l2', kind: 'Grammar', title: 'Commands, requests & signs', minutes: 30,
      body: `
<p>In everyday Brazilian speech, a command to <i>você</i> usually uses the <b>normal present form</b>:</p>
${PT.table(['Spoken (casual)', 'Standard / polite / signs', 'Meaning'], [
  ['Fala!', 'Fale', 'Speak! / Say it!'], ['Olha!', 'Olhe', 'Look!'], ['Espera!', 'Espere', 'Wait!'], ['Vem!', 'Venha', 'Come!'], ['Faz isso', 'Faça isso', 'Do this'],
  ['Não esquece!', 'Não esqueça!', 'Don’t forget!'],
])}
<p><b>Softening a request</b> (from casual to very polite): <i>Me dá… → Você pode…? → Você poderia…? → Será que dá pra…?</i></p>
<p><b>Signs:</b> <i>Empurre</i> = Push · <i>Puxe</i> = Pull (careful, it looks like "push"!) · <i>Entrada / Saída</i> = Entrance / Exit · <i>Proibido fumar</i> = No smoking</p>`,
      examples: [
        ['Olha isso!', 'Look at this!'], ['Espera um pouco!', 'Wait a bit!'], ['Vem cá!', 'Come here!'], ['Fala sério!', 'Come on! / Get serious!'], ['Me dá um minuto.', 'Give me a minute.'],
        ['Não esquece o passaporte!', 'Don’t forget the passport!'], ['Você poderia tirar uma foto da gente?', 'Could you take a photo of us?'], ['Será que dá pra mudar de mesa?', 'Would it be possible to change tables?'],
      ],
      exercises: [
        { t: 'mc', q: '"Puxe" on a door means…', o: ['Pull', 'Push', 'Locked'], a: 0 },
        { t: 'mc', q: '"Vem cá!"', o: ['Come here!', 'I’m coming!', 'Come back tomorrow'], a: 0 },
        { t: 'mc', q: 'The most polite request:', o: ['Você poderia tirar uma foto da gente?', 'Tira uma foto!', 'Foto!'], a: 0 },
        { t: 'fill', q: '___ um pouco!', a: ['espera', 'espere'], en: 'Wait a bit!' },
        { t: 'fill', q: 'Não ___ o passaporte!', a: ['esquece', 'esqueça'], en: 'Don’t forget the passport!' },
        { t: 'tr', en: 'Could you take a photo of us?', a: ['Você poderia tirar uma foto da gente?', 'Você pode tirar uma foto da gente?', 'Pode tirar uma foto da gente?', 'Você poderia tirar uma foto nossa?'] },
        { t: 'order', pt: 'Será que dá pra mudar de mesa', en: 'Would it be possible to change tables?' },
      ],
    },
    {
      id: 'w6l3', kind: 'Grammar', title: 'The present subjunctive: hopes & wishes', minutes: 40,
      body: `
<p>Use the subjunctive after expressions of <b>hope, wish, doubt, emotion</b> and some conjunctions, usually with <b>que</b>.</p>
<p><b>Formation:</b> take the <b>eu</b> present form, drop the -o, and switch the vowel: <b>-ar → -e</b>, <b>-er/-ir → -a</b>.</p>
${PT.table(['verb', 'eu (present)', 'subjunctive (eu / você)', 'vocês / eles'], [
  ['falar', 'falo', 'fal<b>e</b>', 'fal<b>em</b>'], ['comer', 'como', 'com<b>a</b>', 'com<b>am</b>'], ['fazer', 'faço', 'faç<b>a</b>', 'faç<b>am</b>'],
  ['ter', 'tenho', 'tenh<b>a</b>', 'tenh<b>am</b>'], ['vir', 'venho', 'venh<b>a</b>', 'venh<b>am</b>'], ['poder', 'posso', 'poss<b>a</b>', 'poss<b>am</b>'],
  ['chegar', 'chego', 'cheg<b>ue</b>', 'cheg<b>uem</b>'],
])}
<p><b>Irregulars:</b> ser → <b>seja</b>, estar → <b>esteja</b>, ir → <b>vá</b>, saber → <b>saiba</b>, querer → <b>queira</b>, dar → <b>dê</b>, haver → <b>haja</b>.</p>
<p><b>Triggers:</b> <i>espero que</i> (I hope), <i>quero que</i> (I want … to), <i>tomara que</i> (hopefully!), <i>talvez</i> (maybe), <i>é importante que</i>, <i>antes que</i> (before), <i>para que</i> (so that), <i>embora</i> (although), <i>caso</i> (in case).</p>`,
      examples: [
        ['Espero que você goste!', 'I hope you like it!'], ['Tomara que faça sol amanhã.', 'Hopefully it’s sunny tomorrow.'], ['Quero que você conheça a minha família.', 'I want you to meet my family.'],
        ['Talvez seja melhor pegar um Uber.', 'Maybe it’s better to get an Uber.'], ['É importante que a gente chegue cedo.', 'It’s important that we arrive early.'],
        ['Tomara que não chova!', 'Hopefully it doesn’t rain!'], ['Seja bem-vinda!', 'Welcome! (to a woman)'], ['Caso precise, me liga.', 'In case you need anything, call me.'],
      ],
      exercises: [
        { t: 'fill', q: 'Espero que você ___ (gostar).', a: ['goste'] },
        { t: 'fill', q: 'Tomara que não ___ (chover).', a: ['chova'] },
        { t: 'fill', q: 'Quero que você ___ (vir) comigo.', a: ['venha'] },
        { t: 'fill', q: 'Talvez ___ (ser) melhor.', a: ['seja'] },
        { t: 'fill', q: 'É importante que a gente ___ (chegar) cedo.', a: ['chegue'] },
        { t: 'mc', q: '"Tomara que…" means…', o: ['Hopefully… / I hope…', 'Take it that…', 'Tomorrow that…'], a: 0 },
        { t: 'tr', en: 'I hope you like it!', a: ['Espero que você goste!', 'Tomara que você goste!'] },
        { t: 'order', pt: 'Tomara que faça sol amanhã', en: 'Hopefully it is sunny tomorrow' },
      ],
    },
    {
      id: 'w6l4', kind: 'Speaking', title: 'Opinions, feelings & saudade', minutes: 30,
      body: `
${PT.table(['Opinions', ''], [
  ['Eu acho que sim / não.', 'I think so / I don’t think so.'], ['Na minha opinião…', 'In my opinion…'], ['Pra mim…', 'For me… / To me…'],
  ['Eu concordo / Eu discordo.', 'I agree / I disagree.'], ['Depende.', 'It depends.'], ['Eu prefiro … a …', 'I prefer … to …'], ['Tanto faz.', 'I don’t mind / either one.'],
  ['Eu adoro… / Eu odeio…', 'I love… / I hate…'],
])}
${PT.table(['Feelings', ''], [
  ['Estou com saudade (de você).', 'I miss you. (saudade = longing)'], ['Que saudade!', 'I miss it/you so much!'], ['Estou animado / animada!', 'I’m excited!'],
  ['Estou com vergonha.', 'I’m embarrassed / shy.'], ['Fiquei feliz / triste.', 'It made me happy / sad.'], ['Que pena!', 'What a pity!'], ['Que bom!', 'That’s great!'],
])}
<p class="tip">⚠️ <b>False friend:</b> <i>excitado</i> means sexually aroused! For "excited", say <b>animado</b>. Others: <i>pretender</i> = to intend, <i>assistir</i> = to watch, <i>esquisito</i> = weird, <i>atualmente</i> = currently, <i>puxar</i> = to pull.</p>`,
      examples: [
        ['Eu acho que sim.', 'I think so.'], ['Eu acho que não.', 'I don’t think so.'], ['Na minha opinião, o Rio é a cidade mais bonita do mundo.', 'In my opinion, Rio is the most beautiful city in the world.'],
        ['Eu prefiro praia a montanha.', 'I prefer the beach to the mountains.'], ['Tanto faz.', 'I don’t mind.'], ['Estou com saudade de você.', 'I miss you.'],
        ['Estou muito animado com a viagem!', 'I’m really excited about the trip!'], ['Que pena!', 'What a pity!'], ['Depende.', 'It depends.'],
      ],
      exercises: [
        { t: 'mc', q: 'I’m excited about the trip!', o: ['Estou animado com a viagem!', 'Estou excitado com a viagem!'], a: 0, why: '"Excitado" has a sexual meaning. Always use animado/animada.' },
        { t: 'mc', q: '"Tanto faz"', o: ['Whatever / I don’t mind', 'Too much', 'So many'], a: 0 },
        { t: 'mc', q: '"Saudade" is…', o: ['missing / longing for someone or something', 'a kind of salad', 'sadness about the weather'], a: 0 },
        { t: 'fill', q: 'Eu ___ que sim.', a: ['acho'], en: 'I think so.' },
        { t: 'fill', q: 'Eu ___ praia a montanha.', a: ['prefiro'], en: 'I prefer the beach to the mountains.' },
        { t: 'tr', en: 'I miss you.', a: ['Estou com saudade de você.', 'Tô com saudade de você.', 'Estou com saudades de você.', 'Sinto sua falta.', 'Que saudade de você.'] },
        { t: 'order', pt: 'Na minha opinião o Rio é a cidade mais bonita do mundo', en: 'In my opinion, Rio is the most beautiful city in the world' },
      ],
    },
  ],
  vocab: [
    ['tô / tá', 'I am / it is (spoken)'], ['cê', 'you (spoken)'], ['pra', 'for / to (spoken)'], ['né?', 'right? isn’t it?'], ['tipo', 'like… (filler)'],
    ['então', 'so / then'], ['beleza', 'OK / cool'], ['valeu!', 'thanks!'], ['imagina!', 'don’t mention it'], ['nossa!', 'wow!'], ['pois é', 'yeah, exactly'],
    ['sério?', 'seriously?'], ['que legal!', 'how cool!'], ['com certeza', 'for sure'], ['pode repetir?', 'can you repeat?'], ['mais devagar', 'slower'],
    ['como se diz…?', 'how do you say…?'], ['olha!', 'look!'], ['espera!', 'wait!'], ['vem cá!', 'come here!'], ['empurre / puxe', 'push / pull'],
    ['tomara que…', 'hopefully…'], ['espero que…', 'I hope that…'], ['talvez', 'maybe (+ subjunctive)'], ['seja', 'be (subjunctive of ser)'],
    ['eu acho que…', 'I think that…'], ['eu concordo', 'I agree'], ['eu prefiro', 'I prefer'], ['tanto faz', 'I don’t mind'], ['depende', 'it depends'],
    ['a saudade', 'longing / missing'], ['animado / animada', 'excited'], ['que pena!', 'what a pity!'], ['a viagem', 'trip'], ['o sol / a chuva', 'sun / rain'],
  ],
  talk: [
    'Give your opinion on 3 things: your city, Brazilian food, and soccer. Use "Eu acho que…", "Na minha opinião…".',
    'Say 5 hopes for the trip using "Tomara que…" and "Espero que…".',
    'Explain a word you don’t know without using it (circumlocution): "É uma coisa que…"',
  ],
  partner: [
    'Filler challenge: have a 5-minute chat where each of you must use né, tipo, então and nossa.',
    'English is banned for 1 hour. If stuck, ask "Como se diz…?"',
    'Polite request day: "Você poderia…?" for everything.',
    'Hope list: each says 5 "Tomara que…" sentences about the trip.',
    'Debate night: pick a silly topic (pizza with pineapple?) and argue in Portuguese.',
    'Feelings check-in: "Hoje eu fiquei feliz porque…" / "Hoje eu fiquei com raiva porque…"',
    'Checkpoint night: 10-minute conversation, no English, record it on your phone.',
  ],
  immersion: [
    'Listen to a full Brazilian podcast episode for natives (any topic you like) and note 5 fillers.',
    'Watch a Brazilian comedy sketch channel (e.g., Porta dos Fundos) with Portuguese subtitles.',
  ],
});
