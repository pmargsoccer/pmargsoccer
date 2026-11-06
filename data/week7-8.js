/* Weeks 7–8: future subjunctive, hypotheticals, storytelling, slang; trip simulations */
PT.addWeek({
  n: 7,
  title: 'Rumo à Fluência',
  subtitle: 'Advanced structures & slang',
  goal: 'Use the structures that make you sound fluent: "quando eu for", "se eu fosse", "eu gostaria", tell long stories, and understand slang.',
  canDo: [
    'I can use the future subjunctive: quando a gente chegar, se você quiser…',
    'I can talk hypothetically: se eu tivesse…, eu faria / eu fazia…',
    'I can tell a 2-minute story with sequencing words.',
    'I can understand common slang (beleza, de boa, bora, rolê, saideira…).',
  ],
  lessons: [
    {
      id: 'w7l1', kind: 'Grammar', title: 'Future subjunctive: quando / se + future', minutes: 40,
      body: `
<p>This one is <b>very</b> common in Brazil. After <b>quando, se, assim que, enquanto, depois que, sempre que</b> when you talk about the future, use the future subjunctive.</p>
<p><b>Formation:</b> take the <b>eles</b> past form, drop <b>-ram</b>, and add: <b>-r</b> (eu/você), <b>-rmos</b> (nós), <b>-rem</b> (vocês/eles).</p>
${PT.table(['verb', 'eles (past)', 'eu / você', 'nós', 'vocês / eles'], [
  ['falar', 'fala<s>ram</s>', '<b>falar</b>', 'falarmos', 'falarem'], ['fazer', 'fize<s>ram</s>', '<b>fizer</b>', 'fizermos', 'fizerem'],
  ['ter', 'tive<s>ram</s>', '<b>tiver</b>', 'tivermos', 'tiverem'], ['ser / ir', 'fo<s>ram</s>', '<b>for</b>', 'formos', 'forem'],
  ['estar', 'estive<s>ram</s>', '<b>estiver</b>', 'estivermos', 'estiverem'], ['poder', 'pude<s>ram</s>', '<b>puder</b>', 'pudermos', 'puderem'],
  ['querer', 'quise<s>ram</s>', '<b>quiser</b>', 'quisermos', 'quiserem'], ['vir', 'vie<s>ram</s>', '<b>vier</b>', 'viermos', 'vierem'], ['ver', 'vi<s>ram</s>', '<b>vir</b>', 'virmos', 'virem'],
])}
<p class="tip">💡 Set phrases you'll hear daily: <b>Se Deus quiser</b> (God willing), <b>O que você quiser</b> (whatever you want), <b>Quando puder</b> (when you can), <b>Se precisar, me avisa</b> (if you need anything, let me know).</p>`,
      examples: [
        ['Quando a gente chegar, eu te ligo.', 'When we arrive, I’ll call you.'], ['Se você quiser, a gente vai.', 'If you want, we’ll go.'], ['Se tiver tempo, vamos à praia.', 'If there’s time, let’s go to the beach.'],
        ['Quando eu for ao Brasil, vou comer muita feijoada.', 'When I go to Brazil, I’m going to eat a lot of feijoada.'], ['Assim que puder, me manda uma mensagem.', 'As soon as you can, send me a message.'],
        ['Se Deus quiser!', 'God willing!'], ['Quando você estiver pronta, me avisa.', 'When you’re ready, let me know.'], ['Se precisar, me avisa.', 'If you need anything, let me know.'],
      ],
      exercises: [
        { t: 'fill', q: 'Quando a gente ___ (chegar), eu te ligo.', a: ['chegar'] },
        { t: 'fill', q: 'Se você ___ (querer), a gente vai.', a: ['quiser'] },
        { t: 'fill', q: 'Se ___ (ter) tempo, vamos à praia.', a: ['tiver'] },
        { t: 'fill', q: 'Quando eu ___ (ir) ao Brasil, vou comer feijoada.', a: ['for'] },
        { t: 'fill', q: 'Assim que você ___ (poder), me liga.', a: ['puder'] },
        { t: 'mc', q: 'Quando você ___ pronta, me avisa.', o: ['estiver', 'está', 'estava'], a: 0 },
        { t: 'tr', en: 'If you want, we can go.', a: ['Se você quiser, a gente pode ir.', 'Se você quiser, podemos ir.', 'Se quiser, a gente pode ir.', 'Se você quiser, nós podemos ir.'] },
        { t: 'order', pt: 'Quando a gente chegar eu te ligo', en: 'When we arrive, I’ll call you' },
      ],
    },
    {
      id: 'w7l2', kind: 'Grammar', title: 'Hypotheticals: se eu fosse… eu faria', minutes: 40,
      body: `
<p><b>Imperfect subjunctive</b> ("if I were / if I had"): take the <b>eles</b> past form, drop <b>-ram</b>, and add <b>-sse</b>.</p>
${PT.table(['verb', 'eu / você', 'nós', 'vocês / eles'], [
  ['falar', 'fala<b>sse</b>', 'falá<b>ssemos</b>', 'fala<b>ssem</b>'], ['ser / ir', 'fo<b>sse</b>', 'fô<b>ssemos</b>', 'fo<b>ssem</b>'], ['ter', 'tive<b>sse</b>', 'tivé<b>ssemos</b>', 'tive<b>ssem</b>'],
  ['poder', 'pude<b>sse</b>', 'pudé<b>ssemos</b>', 'pude<b>ssem</b>'], ['estar', 'estive<b>sse</b>', 'estivé<b>ssemos</b>', 'estive<b>ssem</b>'], ['fazer', 'fize<b>sse</b>', 'fizé<b>ssemos</b>', 'fize<b>ssem</b>'],
])}
<p><b>Conditional</b> ("would"): infinitive + <b>-ia</b>: <i>falaria, comeria, iria, seria, gostaria</i>. Irregular: fazer → <b>faria</b>, dizer → <b>diria</b>, trazer → <b>traria</b>.</p>
<p class="tip">💡 In casual speech, Brazilians often use the <b>imperfect</b> instead of the conditional: <i>Se eu tivesse dinheiro, eu compr<b>ava</b> uma casa aqui.</i> Both are correct.</p>
<p><b>Eu gostaria de…</b> (I would like…) is the most polite way to ask for something.</p>`,
      examples: [
        ['Se eu fosse você, eu iria.', 'If I were you, I’d go.'], ['Se eu tivesse mais tempo, ficaria mais uma semana.', 'If I had more time, I’d stay another week.'],
        ['Eu gostaria de um quarto com vista para o mar.', 'I’d like a room with an ocean view.'], ['O que você faria?', 'What would you do?'],
        ['Se a gente morasse no Rio, ia à praia todo dia.', 'If we lived in Rio, we’d go to the beach every day.'], ['Seria ótimo!', 'That would be great!'],
        ['Se eu pudesse, eu ficava aqui pra sempre.', 'If I could, I’d stay here forever.'],
      ],
      exercises: [
        { t: 'fill', q: 'Se eu ___ (ser) você, eu iria.', a: ['fosse'] },
        { t: 'fill', q: 'Se eu ___ (ter) dinheiro, compraria uma casa aqui.', a: ['tivesse'] },
        { t: 'fill', q: 'Eu ___ (gostar) de um quarto com vista para o mar.', a: ['gostaria'] },
        { t: 'fill', q: 'O que você ___ (fazer)?', a: ['faria'], en: 'What would you do?' },
        { t: 'mc', q: 'In "Se eu pudesse, eu ficava aqui", the word "ficava" is…', o: ['a casual conditional (would stay)', 'simple past (stayed once)', 'future'], a: 0 },
        { t: 'tr', en: 'That would be great!', a: ['Seria ótimo!'] },
        { t: 'tr', en: 'I would like a room with an ocean view.', a: ['Eu gostaria de um quarto com vista para o mar.', 'Gostaria de um quarto com vista para o mar.', 'Eu gostaria de um quarto com vista pro mar.'] },
        { t: 'order', pt: 'Se eu fosse você eu iria', en: 'If I were you, I would go' },
      ],
    },
    {
      id: 'w7l3', kind: 'Speaking', title: 'Storytelling', minutes: 35,
      body: `
${PT.table(['Sequence', ''], [
  ['primeiro', 'first'], ['depois', 'then / afterwards'], ['aí / então', 'and then / so'], ['logo depois', 'right after'], ['enquanto', 'while'],
  ['de repente', 'suddenly'], ['mais tarde', 'later'], ['no final / no fim', 'in the end'], ['finalmente', 'finally'],
])}
<p><b>Story recipe:</b> ① set the scene (imperfect: <i>era, estava, tinha, fazia</i>) → ② events (preterite: <i>fui, vi, aconteceu</i>) → ③ reaction (<i>foi incrível, fiquei com medo, a gente riu muito</i>).</p>
<blockquote>Era sábado e fazia muito calor. Primeiro, a gente foi pra praia. Depois, almoçamos num restaurante pequeno. Aí começou a chover! Enquanto a gente esperava, conhecemos um casal de Recife. No final, foi o melhor dia da viagem.</blockquote>
<p><b>Hooks to start a story:</b> <i>Você não vai acreditar no que aconteceu!</i> · <i>Aconteceu uma coisa engraçada…</i> · <i>Sabe o que aconteceu?</i></p>`,
      examples: [
        ['Era sábado e fazia muito calor.', 'It was Saturday and it was really hot.'], ['Primeiro, a gente foi pra praia.', 'First, we went to the beach.'], ['Depois, almoçamos num restaurante pequeno.', 'Then we had lunch at a small restaurant.'],
        ['Aí começou a chover!', 'And then it started to rain!'], ['Enquanto a gente esperava, conhecemos um casal de Recife.', 'While we were waiting, we met a couple from Recife.'],
        ['No final, foi o melhor dia da viagem.', 'In the end, it was the best day of the trip.'], ['Você não vai acreditar no que aconteceu!', 'You won’t believe what happened!'], ['Aconteceu uma coisa engraçada.', 'Something funny happened.'],
      ],
      exercises: [
        { t: 'mc', q: '"Aí" in a story usually means…', o: ['and then', 'there (only)', 'ouch'], a: 0 },
        { t: 'mc', q: 'Background descriptions in a story use…', o: ['the imperfect (era, estava, tinha)', 'the preterite (foi, esteve, teve)'], a: 0 },
        { t: 'fill', q: '___ a gente esperava, começou a chover.', a: ['enquanto'], en: 'While we were waiting, it started raining.' },
        { t: 'fill', q: 'De ___, a luz acabou.', a: ['repente'], en: 'Suddenly, the power went out.' },
        { t: 'fill', q: 'No ___, foi ótimo.', a: ['final', 'fim'], en: 'In the end, it was great.' },
        { t: 'tr', en: 'You won’t believe what happened!', a: ['Você não vai acreditar no que aconteceu!', 'Cê não vai acreditar no que aconteceu!'] },
        { t: 'order', pt: 'Depois almoçamos num restaurante pequeno', en: 'Then we had lunch at a small restaurant' },
        { t: 'order', pt: 'Aconteceu uma coisa engraçada', en: 'Something funny happened' },
      ],
    },
    {
      id: 'w7l4', kind: 'Speaking', title: 'Gírias: slang & regional flavor', minutes: 30,
      body: `
${PT.table(['Slang', 'Meaning'], [
  ['E aí? / E aí, beleza?', 'Hey, what’s up?'], ['cara / mano / meu', 'dude / bro (meu = São Paulo)'], ['de boa', 'chill, all good'], ['legal / massa / show / top', 'cool (massa = Northeast)'],
  ['valeu / falou', 'thanks / bye ("later")'], ['bora! / partiu!', 'let’s go!'], ['o rolê', 'outing / hangout'], ['a balada', 'night out / club'], ['a saideira', 'the last round (of drinks)'],
  ['que saco!', 'what a drag!'], ['mó…', 'super… (mó legal = super cool)'], ['tá ligado?', 'you know? / get it?'], ['fala sério!', 'come on! / no way!'],
  ['pô', 'man… / come on (Rio)'], ['zoar', 'to joke around / tease'], ['fica tranquilo / tranquila', 'don’t worry'],
])}
<p><b>Regional:</b> Rio (carioca): "sh" for s, <i>pô, mermão</i>. São Paulo (paulista): <i>meu, mano</i>. Northeast: <i>oxe / oxente</i> (whoa / what?!), <i>visse?</i> (you know?), <i>arretado</i> (awesome).</p>
<p class="tip">⚠️ <b>Ficar com alguém</b> often means to make out / hook up casually, not just "stay with someone". Context matters!</p>`,
      examples: [
        ['E aí, beleza?', 'Hey, what’s up?'], ['De boa!', 'All good!'], ['Bora pra praia?', 'Shall we go to the beach?'], ['Partiu balada!', 'Let’s hit the club!'],
        ['A saideira, por favor!', 'One last round, please!'], ['Que saco!', 'What a drag!'], ['Fala sério!', 'Come on!'], ['Essa festa tá mó legal.', 'This party is super cool.'],
        ['Valeu, falou!', 'Thanks, later!'], ['Fica tranquila, tá tudo certo.', 'Don’t worry, everything’s fine.'],
      ],
      exercises: [
        { t: 'mc', q: '"E aí, beleza?"', o: ['Hey, what’s up?', 'And there, beauty?', 'Where’s the beauty?'], a: 0 },
        { t: 'mc', q: '"A saideira"', o: ['the last round of drinks', 'the exit door', 'the check'], a: 0 },
        { t: 'mc', q: '"Bora!"', o: ['Let’s go!', 'Boring!', 'I’m bored'], a: 0 },
        { t: 'mc', q: '"Ficar com alguém" (careful!) often means…', o: ['to make out / hook up casually', 'to share a hotel room', 'to argue with someone'], a: 0 },
        { t: 'mc', q: '"De boa"', o: ['chill / all good', 'of good quality', 'tasty food'], a: 0 },
        { t: 'fill', q: 'E ___, beleza?', a: ['aí'], en: 'Hey, what’s up?' },
        { t: 'tr', en: 'Shall we go to the beach? (casual)', a: ['Bora pra praia?', 'Vamos pra praia?', 'Vamos para a praia?', 'Vamos à praia?'] },
        { t: 'order', pt: 'Essa festa tá mó legal', en: 'This party is super cool' },
      ],
    },
  ],
  vocab: [
    ['quando eu for…', 'when I go…'], ['se você quiser', 'if you want'], ['assim que', 'as soon as'], ['se Deus quiser', 'God willing'], ['me avisa', 'let me know'],
    ['eu gostaria de…', 'I would like…'], ['seria ótimo', 'that would be great'], ['se eu fosse você', 'if I were you'], ['se eu tivesse', 'if I had'],
    ['primeiro', 'first'], ['enquanto', 'while'], ['no final', 'in the end'], ['acontecer', 'to happen'], ['acreditar', 'to believe'], ['engraçado', 'funny'],
    ['pronto / pronta', 'ready'], ['mandar mensagem', 'to text'], ['a vista para o mar', 'ocean view'], ['cara', 'dude'], ['de boa', 'chill / all good'],
    ['bora!', 'let’s go!'], ['partiu!', 'let’s go! (off we go)'], ['o rolê', 'outing / hangout'], ['a balada', 'night out / club'], ['a saideira', 'last round'],
    ['que saco!', 'what a drag!'], ['fala sério!', 'come on! / no way!'], ['falou!', 'bye! later!'], ['e aí?', 'what’s up?'], ['tá ligado?', 'you know?'],
    ['fica tranquilo', 'don’t worry'], ['a feijoada', 'black bean & pork stew'],
  ],
  talk: [
    'Tell a 2-minute story about the best day of a past trip. Background → events → reaction.',
    'Answer: "O que você faria se ganhasse na loteria?" (What would you do if you won the lottery?)',
    'Describe your plans for Brazil with "Quando a gente chegar…", "Se tiver tempo…", "Assim que…".',
  ],
  partner: [
    '"Quando a gente for pro Brasil…" — take turns finishing the sentence, 10 times each.',
    '"O que você faria se…?" — ask each other 5 crazy hypotheticals.',
    'Story chain: build one story together, one sentence each, using aí / depois / de repente.',
    'Slang day: greet with "E aí, beleza?" and use 3 gírias each.',
    'Retell a movie you both know in Portuguese. Use the imperfect for scenes and the preterite for events.',
    'Make a voice note to each other in Portuguese (1 minute) describing your day.',
    'Checkpoint night: 15-minute no-English dinner conversation.',
  ],
  immersion: [
    'Watch a full episode of a Brazilian series WITHOUT subtitles. Rewatch 5 minutes with subtitles.',
    'Find a Brazilian creator talking about your interests (soccer, food, travel) and watch 3 videos.',
  ],
});

PT.addWeek({
  n: 8,
  title: 'Simulação: Brasil!',
  subtitle: 'Real-trip simulations & final exam',
  goal: 'Rehearse every situation of the trip until it feels automatic, and handle problems calmly.',
  canDo: [
    'I can get through immigration, buy a SIM card and check in at a hotel in Portuguese.',
    'I can make small talk with locals: where we’re from, how long we’ve been together, soccer…',
    'I can handle an emergency: pharmacy, doctor, lost items, police.',
    'I can have a 15-minute conversation without switching to English.',
  ],
  lessons: [
    {
      id: 'w8l1', kind: 'Role-play', title: 'Arrival: airport, SIM card & hotel', minutes: 35,
      body: `
<p>Read the dialogue, then use 🔊 + 🎙 to play both roles. Do it again tomorrow without looking.</p>
${PT.table(['', 'Dialogue'], [
  ['🛂 Agente', 'Boa tarde. Qual é o motivo da viagem?'], ['🙋 Você', 'Turismo. A gente vai ficar duas semanas.'], ['🛂 Agente', 'Onde vocês vão ficar?'], ['🙋 Você', 'Num hotel em Copacabana.'],
  ['📱 Loja', 'Pois não?'], ['🙋 Você', 'Eu queria um chip de celular com internet, por favor.'],
  ['🏨 Recepção', 'Boa noite! Posso ajudar?'], ['🙋 Você', 'Boa noite! A gente tem uma reserva no nome de Smith.'], ['🏨 Recepção', 'Perfeito. Documento, por favor.'], ['🙋 Você', 'Aqui está. Que horas é o check-out?'],
])}
<p class="tip">💡 <b>Pois não?</b> = "How can I help you?" (shop staff). It does NOT mean no!</p>`,
      examples: [
        ['Qual é o motivo da viagem?', 'What’s the purpose of your trip?'], ['Turismo. A gente vai ficar duas semanas.', 'Tourism. We’re staying two weeks.'], ['Pois não?', 'How can I help you?'],
        ['Eu queria um chip de celular com internet.', 'I’d like a SIM card with data.'], ['Quanto custa um táxi até Copacabana?', 'How much is a taxi to Copacabana?'],
        ['A gente tem uma reserva no nome de Smith.', 'We have a reservation under Smith.'], ['Que horas é o check-out?', 'What time is check-out?'],
        ['O ar-condicionado não está funcionando.', 'The A/C isn’t working.'], ['Pode chamar um táxi pra gente?', 'Can you call a taxi for us?'], ['Tem cofre no quarto?', 'Is there a safe in the room?'],
      ],
      exercises: [
        { t: 'mc', q: 'Immigration asks: "Qual é o motivo da viagem?"', o: ['Turismo.', 'Sim, obrigado.', 'Duas malas.'], a: 0 },
        { t: 'mc', q: 'A shop assistant says "Pois não?" They mean…', o: ['How can I help you?', 'No way.', 'We’re closed.'], a: 0 },
        { t: 'mc', q: '"O ar-condicionado não está funcionando"', o: ['The A/C isn’t working', 'The A/C is too cold', 'Turn on the A/C'], a: 0 },
        { t: 'fill', q: 'A gente vai ___ duas semanas.', a: ['ficar'], en: 'We’re staying two weeks.' },
        { t: 'fill', q: 'Eu queria um ___ de celular.', a: ['chip'], en: 'I’d like a SIM card.' },
        { t: 'tr', en: 'We have a reservation.', a: ['A gente tem uma reserva.', 'Nós temos uma reserva.', 'Temos uma reserva.'] },
        { t: 'tr', en: 'Can you call a taxi for us?', a: ['Pode chamar um táxi pra gente?', 'Você pode chamar um táxi pra gente?', 'Pode chamar um táxi para nós?', 'Você pode chamar um táxi para a gente?', 'Pode chamar um táxi para a gente?'] },
        { t: 'order', pt: 'Que horas é o check-out', en: 'What time is check-out?' },
      ],
    },
    {
      id: 'w8l2', kind: 'Role-play', title: 'Social life: small talk, beach, bar & soccer', minutes: 35,
      body: `
<p>Brazilians love to chat. Expect these questions, and have your answers ready:</p>
${PT.table(['They ask', 'You answer'], [
  ['Vocês são de onde?', 'A gente é dos Estados Unidos.'], ['Primeira vez no Brasil?', 'Sim! / Não, é a segunda vez.'], ['Há quanto tempo vocês estão juntos?', 'A gente está junto há … anos.'],
  ['Tá gostando do Brasil?', 'Tô amando! O povo é muito simpático.'], ['Pra que time você torce?', 'Eu torço pro … ! E você?'],
])}
<p><b>At the beach:</b> rent a <i>cadeira</i> (chair) and <i>guarda-sol</i> (umbrella) from a <i>barraca</i> (beach stall). <i>Quanto é o aluguel da cadeira?</i> Vendors walk by. Call them over with <i>Moço!</i></p>
<p><b>Soccer talk:</b> <i>Golaço!</i> (amazing goal) · <i>Foi pênalti!</i> · <i>O juiz roubou!</i> (the ref robbed us!) · <i>Que jogo!</i> · <i>Vamos ver um jogo no Maracanã?</i></p>`,
      examples: [
        ['Você é daqui?', 'Are you from here?'], ['Há quanto tempo vocês estão juntos?', 'How long have you been together?'], ['A gente está junto há três anos.', 'We’ve been together for three years.'],
        ['Pra que time você torce?', 'Which team do you support?'], ['Eu torço pro Flamengo!', 'I support Flamengo!'], ['Que golaço!', 'What a goal!'],
        ['Quanto é o aluguel da cadeira e do guarda-sol?', 'How much to rent a chair and umbrella?'], ['Mais uma rodada?', 'Another round?'],
        ['Vocês querem sair com a gente hoje à noite?', 'Do you want to go out with us tonight?'], ['Tô amando o Brasil!', 'I’m loving Brazil!'],
      ],
      exercises: [
        { t: 'mc', q: '"Pra que time você torce?"', o: ['Which team do you support?', 'Which team is playing?', 'What time is the game?'], a: 0 },
        { t: 'mc', q: '"Golaço!"', o: ['What a goal!', 'Big goalkeeper', 'Goal kick'], a: 0 },
        { t: 'fill', q: 'Eu ___ pro Flamengo.', a: ['torço'], en: 'I support Flamengo.' },
        { t: 'fill', q: 'A gente está junto ___ três anos.', a: ['há', 'faz'], en: 'We’ve been together for three years.' },
        { t: 'tr', en: 'Are you from here?', a: ['Você é daqui?', 'Vocês são daqui?'] },
        { t: 'tr', en: 'Do you want to go out with us tonight?', a: ['Vocês querem sair com a gente hoje à noite?', 'Você quer sair com a gente hoje à noite?', 'Vocês querem sair com a gente hoje?', 'Quer sair com a gente hoje à noite?'] },
        { t: 'order', pt: 'Há quanto tempo vocês estão juntos', en: 'How long have you been together?' },
      ],
    },
    {
      id: 'w8l3', kind: 'Role-play', title: 'Problems & emergencies', minutes: 30,
      body: `
${PT.table(['Number', 'Service'], [['<b>190</b>', 'Polícia (police)'], ['<b>192</b>', 'SAMU (ambulance)'], ['<b>193</b>', 'Bombeiros (fire department)']])}
${PT.table(['Situation', 'Say'], [
  ['Emergency', 'Socorro! (Help!) · Chama a polícia! · Chama uma ambulância!'], ['Feeling sick', 'Estou passando mal. · Preciso de um médico.'],
  ['Pharmacy', 'Tem algum remédio para dor de cabeça / dor de barriga / febre?'], ['Allergies', 'Sou alérgico / alérgica a…'],
  ['Lost', 'Perdi meu passaporte / meu celular. · Eu me perdi.'], ['Robbed', 'Fui assaltado / assaltada. · Roubaram meu celular.'], ['Help', 'Você pode me ajudar? · Onde fica o hospital mais próximo?'],
])}
<p class="tip">🇧🇷 Pharmacies (<i>farmácia, drogaria</i>) are on every corner and the pharmacists give advice. Keep your phone out of sight on busy streets and the beach.</p>`,
      examples: [
        ['Socorro!', 'Help!'], ['Chama a polícia!', 'Call the police!'], ['Preciso de um médico.', 'I need a doctor.'], ['Estou passando mal.', 'I’m feeling sick.'],
        ['Onde fica a farmácia mais próxima?', 'Where is the nearest pharmacy?'], ['Perdi meu passaporte.', 'I lost my passport.'], ['Roubaram meu celular.', 'They stole my phone.'],
        ['Minha namorada está com febre.', 'My girlfriend has a fever.'], ['Sou alérgico a camarão.', 'I’m allergic to shrimp.'], ['Tem algum remédio para dor de cabeça?', 'Do you have something for a headache?'],
      ],
      exercises: [
        { t: 'mc', q: 'The ambulance (SAMU) number in Brazil:', o: ['192', '190', '911'], a: 0 },
        { t: 'mc', q: '"Estou passando mal"', o: ['I’m feeling sick', 'I’m passing by', 'I’m failing school'], a: 0 },
        { t: 'fill', q: 'Preciso de um ___.', a: ['médico'], en: 'I need a doctor.' },
        { t: 'fill', q: '___ meu passaporte.', a: ['perdi'], en: 'I lost my passport.' },
        { t: 'fill', q: 'Sou ___ a camarão.', a: ['alérgico', 'alérgica'], en: 'I’m allergic to shrimp.' },
        { t: 'tr', en: 'Where is the nearest pharmacy?', a: ['Onde fica a farmácia mais próxima?', 'Onde é a farmácia mais próxima?', 'Onde tem uma farmácia perto daqui?'] },
        { t: 'tr', en: 'Help!', a: ['Socorro!'] },
        { t: 'order', pt: 'Onde fica a farmácia mais próxima', en: 'Where is the nearest pharmacy?' },
      ],
    },
    {
      id: 'w8l4', kind: 'Role-play', title: 'Romance, families & keep going', minutes: 30,
      body: `
${PT.table(['For each other', ''], [
  ['Você é o amor da minha vida.', 'You’re the love of my life.'], ['Você está linda / lindo hoje.', 'You look beautiful today.'], ['Vamos jantar fora hoje?', 'Shall we eat out tonight?'],
  ['Que lugar lindo!', 'What a beautiful place!'], ['Tira uma foto nossa?', 'Will you take a photo of us?'], ['Eu te amo muito.', 'I love you so much.'],
])}
${PT.table(['With hosts & new friends', ''], [
  ['Saúde!', 'Cheers! (also: bless you)'], ['Muito obrigado pela hospitalidade.', 'Thank you for your hospitality.'], ['Foi um prazer conhecer vocês.', 'It was a pleasure to meet you.'],
  ['A gente vai voltar, com certeza!', 'We’ll come back, for sure!'], ['Vamos manter contato!', 'Let’s keep in touch!'],
])}
<p><b>After the trip:</b> keep your flashcard reviews going (10 min/day), keep one Portuguese-only evening a week, and find a conversation partner online. You'll keep improving fast.</p>`,
      examples: [
        ['Você é o amor da minha vida.', 'You’re the love of my life.'], ['Eu te amo muito.', 'I love you so much.'], ['Você está linda hoje.', 'You look beautiful today.'],
        ['Vamos jantar fora hoje?', 'Shall we eat out tonight?'], ['Que lugar lindo!', 'What a beautiful place!'], ['Saúde!', 'Cheers!'],
        ['Muito obrigado pela hospitalidade.', 'Thank you very much for the hospitality.'], ['Foi um prazer conhecer vocês.', 'It was a pleasure to meet you all.'],
        ['A gente vai voltar, com certeza!', 'We’ll come back, for sure!'], ['Vamos manter contato!', 'Let’s keep in touch!'],
      ],
      exercises: [
        { t: 'mc', q: 'A toast before drinking:', o: ['Saúde!', 'Saudade!', 'Salve!'], a: 0 },
        { t: 'mc', q: '"Você está linda hoje"', o: ['You look beautiful today', 'You are beautiful forever', 'You were beautiful today'], a: 0 },
        { t: 'fill', q: 'Você é o amor da minha ___.', a: ['vida'] },
        { t: 'fill', q: 'Foi um ___ conhecer vocês.', a: ['prazer'] },
        { t: 'tr', en: 'Thank you for the hospitality.', a: ['Obrigado pela hospitalidade.', 'Obrigada pela hospitalidade.', 'Muito obrigado pela hospitalidade.', 'Muito obrigada pela hospitalidade.'] },
        { t: 'tr', en: 'We will come back, for sure!', a: ['A gente vai voltar, com certeza!', 'Nós vamos voltar, com certeza!', 'Vamos voltar, com certeza!', 'Com certeza a gente vai voltar!'] },
        { t: 'order', pt: 'Vamos jantar fora hoje', en: 'Shall we eat out tonight?' },
      ],
    },
  ],
  vocab: [
    ['o motivo da viagem', 'purpose of the trip'], ['a bagagem', 'luggage'], ['o chip', 'SIM card'], ['pois não?', 'how can I help you?'], ['o ar-condicionado', 'A/C'],
    ['o cofre', 'safe'], ['a toalha', 'towel'], ['a barraca', 'beach stall / tent'], ['a cadeira', 'chair'], ['o guarda-sol', 'beach umbrella'],
    ['o protetor solar', 'sunscreen'], ['torcer (pra)', 'to root for / support'], ['o time', 'team'], ['golaço!', 'what a goal!'], ['o juiz', 'referee / judge'],
    ['a rodada', 'round (of drinks)'], ['há … anos', 'for … years / … years ago'], ['socorro!', 'help!'], ['o médico', 'doctor'], ['a farmácia', 'pharmacy'],
    ['o remédio', 'medicine'], ['a dor de cabeça', 'headache'], ['a febre', 'fever'], ['alérgico a', 'allergic to'], ['estou passando mal', 'I feel sick'],
    ['perdi…', 'I lost…'], ['roubaram…', 'they stole…'], ['saúde!', 'cheers! / bless you!'], ['o amor da minha vida', 'the love of my life'],
    ['a hospitalidade', 'hospitality'], ['voltar', 'to come back'], ['manter contato', 'to keep in touch'],
  ],
  talk: [
    'Role-play immigration + hotel check-in from memory, both roles.',
    'Small talk with a local: answer "Vocês são de onde? Há quanto tempo estão juntos? Tá gostando do Brasil?" and ask them 3 questions back.',
    'Emergency drill: explain to a pharmacist that your partner has a fever and a headache since yesterday.',
  ],
  partner: [
    'Airport-to-hotel simulation: act it out in your living room, start to finish.',
    'Beach day simulation: rent chairs, order drinks, chat with a "local".',
    'Emergency drill: one plays the pharmacist or police officer, the other explains the problem.',
    'Watch a Brazilian soccer match together and comment ONLY in Portuguese.',
    'Portuguese-only day: from waking up to bedtime.',
    'Plan your full itinerary out loud in Portuguese, day by day.',
    'Final night: 20-minute conversation recorded. Compare it with your week-6 recording!',
  ],
  immersion: [
    'Watch a Brazilian travel vlog about the exact city you’re visiting, without subtitles.',
    'Call or video-chat with a Brazilian tutor or language-exchange partner (iTalki, Tandem, HelloTalk) for 30 minutes.',
  ],
});
