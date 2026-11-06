/* Weeks 3–4: irregular verbs, future, prepositions, past tense, restaurant & getting around */
PT.addWeek({
  n: 3,
  title: 'Construindo Frases',
  subtitle: 'Irregular verbs, plans & prepositions',
  goal: 'Use the most common irregular verbs, talk about plans with "vou + verb", and glue sentences together with prepositions.',
  canDo: [
    'I can use fazer, querer, poder, saber, dizer, ver, vir, sair, trazer and conhecer in the present.',
    'I can order politely with "Eu queria…" and ask permission with "Posso…?"',
    'I can talk about plans: "Amanhã a gente vai…"',
    'I can use no/na/do/da/pra correctly.',
  ],
  lessons: [
    {
      id: 'w3l1', kind: 'Grammar', title: 'Irregular verbs I: fazer, querer, poder, saber, dizer', minutes: 35,
      body: `
${PT.table(['', 'eu', 'você / ele / a gente', 'nós', 'vocês / eles'], [
  ['FAZER (do/make)', 'faço', 'faz', 'fazemos', 'fazem'], ['QUERER (want)', 'quero', 'quer', 'queremos', 'querem'],
  ['PODER (can)', 'posso', 'pode', 'podemos', 'podem'], ['SABER (know a fact / how to)', 'sei', 'sabe', 'sabemos', 'sabem'],
  ['DIZER (say)', 'digo', 'diz', 'dizemos', 'dizem'],
])}
<ul>
<li><b>Posso…?</b> = May I…? <i>Posso pagar com cartão?</i></li>
<li><b>Pode…?</b> = Can you…? <i>Pode repetir?</i></li>
<li><b>Eu queria…</b> = I'd like… (more polite than "eu quero"). Use it in shops and restaurants.</li>
<li><b>Sei lá.</b> = "Dunno." (very common) &nbsp;·&nbsp; <b>O que você faz?</b> = What do you do (for work)?</li>
</ul>`,
      examples: [
        ['O que você faz?', 'What do you do?'], ['Eu quero um café.', 'I want a coffee.'], ['Eu queria uma mesa para dois.', 'I’d like a table for two.'],
        ['Posso pagar com cartão?', 'Can I pay by card?'], ['Você sabe onde fica?', 'Do you know where it is?'], ['Eu não sei.', 'I don’t know.'],
        ['Ele diz que é perto.', 'He says it’s close.'], ['A gente faz tudo junto.', 'We do everything together.'],
      ],
      exercises: [
        { t: 'fill', q: 'Eu ___ (querer) uma água.', a: ['quero'] },
        { t: 'fill', q: '___ (poder) pagar com cartão?', a: ['posso'], en: 'May I pay by card?' },
        { t: 'fill', q: 'Eu não ___ (saber).', a: ['sei'] },
        { t: 'fill', q: 'O que você ___ (fazer)?', a: ['faz'] },
        { t: 'fill', q: 'Nós ___ (poder) ir amanhã.', a: ['podemos'] },
        { t: 'mc', q: 'The most polite way to order at a restaurant:', o: ['Eu queria um suco, por favor.', 'Eu quero suco!', 'Dá suco.'], a: 0 },
        { t: 'tr', en: 'Do you know where the beach is?', a: ['Você sabe onde fica a praia?', 'Você sabe onde é a praia?', 'Sabe onde fica a praia?'] },
        { t: 'order', pt: 'Posso pagar com cartão', en: 'Can I pay by card?' },
      ],
    },
    {
      id: 'w3l2', kind: 'Grammar', title: 'Irregular verbs II & saber vs conhecer', minutes: 35,
      body: `
${PT.table(['', 'eu', 'você / ele / a gente', 'nós', 'vocês / eles'], [
  ['VER (see)', 'vejo', 'vê', 'vemos', 'veem'], ['VIR (come)', 'venho', 'vem', 'vimos', 'vêm'], ['DAR (give)', 'dou', 'dá', 'damos', 'dão'],
  ['SAIR (go out/leave)', 'saio', 'sai', 'saímos', 'saem'], ['TRAZER (bring)', 'trago', 'traz', 'trazemos', 'trazem'], ['CONHECER (know/meet)', 'conheço', 'conhece', 'conhecemos', 'conhecem'],
])}
<p><b>Saber</b> = know a fact or how to do something: <i>Eu sei nadar. Você sabe onde fica?</i><br>
<b>Conhecer</b> = know a person or a place (be familiar with it): <i>Você conhece o Rio?</i> (= Have you been to Rio?)</p>
<p class="tip">💡 <b>Dá pra…?</b> ("Is it possible to…?") is everywhere: <i>Dá pra ir a pé?</i> (Can you walk there?) <i>Não dá.</i> (It's not possible / no can do.)</p>`,
      examples: [
        ['Eu vejo o mar daqui.', 'I can see the sea from here.'], ['Você vem com a gente?', 'Are you coming with us?'], ['Eu saio às oito.', 'I leave at eight.'],
        ['Pode trazer a conta?', 'Can you bring the check?'], ['Você conhece São Paulo?', 'Have you been to São Paulo?'], ['Eu conheço um bar ótimo.', 'I know a great bar.'],
        ['Dá pra ir a pé?', 'Can we walk there?'], ['Não dá.', 'It’s not possible.'],
      ],
      exercises: [
        { t: 'fill', q: 'Eu ___ (sair) do hotel às nove.', a: ['saio'] },
        { t: 'fill', q: 'Você ___ (vir) com a gente?', a: ['vem'] },
        { t: 'fill', q: 'Eu ___ (conhecer) o Rio.', a: ['conheço'] },
        { t: 'fill', q: 'Eu ___ (ver) o mar.', a: ['vejo'] },
        { t: 'mc', q: 'I know how to swim:', o: ['Eu sei nadar.', 'Eu conheço nadar.'], a: 0 },
        { t: 'mc', q: '"Dá pra ir a pé?" means…', o: ['Can we walk there?', 'Give me a foot?', 'Can you walk me?'], a: 0 },
        { t: 'tr', en: 'Have you been to Salvador? (Do you know Salvador?)', a: ['Você conhece Salvador?'] },
        { t: 'order', pt: 'Você vem com a gente', en: 'Are you coming with us?' },
      ],
    },
    {
      id: 'w3l3', kind: 'Grammar', title: 'The future: VOU + verb', minutes: 30,
      body: `
<p>The easiest future, and the one Brazilians actually use: <b>ir (present) + infinitive</b>.</p>
${PT.table(['', '', ''], [
  ['eu <b>vou</b> comer', 'I’m going to eat', ''], ['você / a gente <b>vai</b> viajar', 'you / we are going to travel', ''], ['nós <b>vamos</b> sair', 'we’re going to go out', ''], ['vocês / eles <b>vão</b> chegar', 'they’re going to arrive', ''],
])}
${PT.table(['Time words', ''], [
  ['agora', 'now'], ['daqui a pouco', 'in a little while'], ['mais tarde', 'later'], ['hoje à noite', 'tonight'], ['amanhã de manhã', 'tomorrow morning'],
  ['no sábado', 'on Saturday'], ['semana que vem', 'next week'], ['mês que vem', 'next month'], ['daqui a duas semanas', 'two weeks from now'],
])}
<p class="tip">💡 Brazilians use "ir + ir" without problems: <i>Eu vou ir</i> sounds fine in speech, but <i>Eu vou</i> is enough.</p>`,
      examples: [
        ['Eu vou viajar para o Brasil.', 'I’m going to travel to Brazil.'], ['A gente vai chegar no sábado.', 'We’re arriving on Saturday.'], ['Vamos comer agora?', 'Shall we eat now?'],
        ['O que você vai fazer amanhã?', 'What are you going to do tomorrow?'], ['Vou te ligar mais tarde.', 'I’ll call you later.'], ['Daqui a pouco.', 'In a little while.'],
        ['Mês que vem, a gente vai estar no Rio.', 'Next month we’ll be in Rio.'], ['Hoje eu não vou beber.', 'I’m not going to drink today.'],
      ],
      exercises: [
        { t: 'fill', q: 'Eu ___ viajar amanhã.', a: ['vou'] },
        { t: 'fill', q: 'A gente ___ chegar no sábado.', a: ['vai'] },
        { t: 'fill', q: 'Vocês ___ comer aqui?', a: ['vão'] },
        { t: 'mc', q: '"Daqui a pouco" means…', o: ['in a little while', 'a little from here', 'a bit far'], a: 0 },
        { t: 'mc', q: '"Semana que vem" means…', o: ['next week', 'last week', 'this week'], a: 0 },
        { t: 'tr', en: 'We are going to travel to Brazil.', a: ['Nós vamos viajar para o Brasil.', 'A gente vai viajar para o Brasil.', 'Vamos viajar para o Brasil.', 'A gente vai viajar pro Brasil.', 'Nós vamos viajar pro Brasil.'] },
        { t: 'tr', en: 'What are you going to do tomorrow?', a: ['O que você vai fazer amanhã?'] },
        { t: 'order', pt: 'O que você vai fazer amanhã', en: 'What are you going to do tomorrow?' },
      ],
    },
    {
      id: 'w3l4', kind: 'Grammar', title: 'Prepositions, contractions & "this/that"', minutes: 35,
      body: `
${PT.table(['', '+ o', '+ a', '+ os', '+ as'], [
  ['<b>em</b> (in/at/on)', 'no', 'na', 'nos', 'nas'], ['<b>de</b> (of/from)', 'do', 'da', 'dos', 'das'], ['<b>a</b> (to)', 'ao', 'à', 'aos', 'às'],
  ['<b>por</b> (through/by)', 'pelo', 'pela', 'pelos', 'pelas'], ['<b>para</b> → spoken <b>pra</b>', 'pro', 'pra', 'pros', 'pras'],
])}
<p>Also: <i>em + um = <b>num</b>, em + uma = <b>numa</b>; de + ele = <b>dele</b>; de + este = <b>deste</b></i>.</p>
<p><i>Estou <b>no</b> hotel. Ela é <b>da</b> Bahia. Eu gosto <b>do</b> Brasil. Vou <b>pra</b> praia. Às oito.</i></p>
${PT.table(['near me', 'near you', 'over there'], [
  ['este / esta / isto', 'esse / essa / isso', 'aquele / aquela / aquilo'],
])}
<p class="tip">💡 In speech, Brazilians mostly use <b>esse/essa/isso</b> for both "this" and "that". <b>Isso!</b> on its own means "Exactly!"</p>`,
      examples: [
        ['Estou no hotel.', 'I’m at the hotel.'], ['Ela está na praia.', 'She’s at the beach.'], ['Ele é da Bahia.', 'He’s from Bahia.'],
        ['Vou pra praia.', 'I’m going to the beach.'], ['Eu gosto muito do Brasil.', 'I really like Brazil.'], ['A gente passou pela praia.', 'We went by the beach.'],
        ['Quanto custa isso?', 'How much is this?'], ['Aquele restaurante é ótimo.', 'That restaurant over there is great.'], ['Isso!', 'Exactly!'],
      ],
      exercises: [
        { t: 'fill', q: 'Estou ___ hotel.', a: ['no'], en: 'em + o' },
        { t: 'fill', q: 'Ela é ___ Bahia.', a: ['da'], en: 'de + a' },
        { t: 'fill', q: 'Eu gosto ___ Brasil.', a: ['do'], en: 'de + o' },
        { t: 'fill', q: 'Vou ___ praia.', a: ['pra', 'para a', 'à'], en: 'to the beach (informal)' },
        { t: 'mc', q: 'em + uma =', o: ['numa', 'nua', 'enuma'], a: 0 },
        { t: 'mc', q: 'In conversation, "Isso!" on its own often means…', o: ['Exactly! / That’s it!', 'This one?', 'Bless you!'], a: 0 },
        { t: 'tr', en: 'How much is this?', a: ['Quanto custa isso?', 'Quanto é isso?', 'Quanto custa isto?'] },
        { t: 'order', pt: 'Eu gosto muito do Brasil', en: 'I really like Brazil' },
      ],
    },
  ],
  vocab: [
    ['fazer', 'to do / to make'], ['querer', 'to want'], ['poder', 'can / to be able'], ['saber', 'to know (a fact / how to)'], ['conhecer', 'to know (a person / place)'],
    ['dizer', 'to say'], ['ver', 'to see'], ['vir', 'to come'], ['sair', 'to go out / to leave'], ['trazer', 'to bring'], ['eu queria…', 'I’d like…'],
    ['posso…?', 'may I…?'], ['dá pra…?', 'is it possible to…?'], ['agora', 'now'], ['depois', 'after / later'], ['mais tarde', 'later'], ['daqui a pouco', 'in a little while'],
    ['cedo', 'early'], ['tarde', 'late / afternoon'], ['sempre', 'always'], ['nunca', 'never'], ['às vezes', 'sometimes'], ['a semana', 'week'],
    ['o fim de semana', 'weekend'], ['semana que vem', 'next week'], ['sábado', 'Saturday'], ['domingo', 'Sunday'], ['segunda-feira', 'Monday'], ['sexta-feira', 'Friday'],
    ['a comida', 'food'], ['o frango', 'chicken'], ['a carne', 'meat'], ['o peixe', 'fish'], ['arroz e feijão', 'rice and beans'], ['o pão de queijo', 'cheese bread'],
    ['o suco', 'juice'], ['o sorvete', 'ice cream'], ['isso', 'this / that'],
  ],
  talk: [
    'Say 6 things you want to do in Brazil: Eu quero… / A gente vai…',
    'Describe your plans for next weekend with "vou + verb" and time words.',
    'Ask 5 polite questions with "Posso…?", "Pode…?" and "Você sabe…?"',
  ],
  partner: [
    'Ask each other "O que você vai fazer amanhã?" Answer with at least 3 plans.',
    'Polite request day: every request to each other starts with "Pode…?" or "Posso…?"',
    'Saber vs conhecer quiz: take turns asking "Você sabe…?" or "Você conhece…?"',
    'Plan your first day in Brazil together, entirely in Portuguese.',
    'Describe where things are in your home: no quarto, na cozinha, do lado da…',
    'Order food delivery or a meal while narrating it in Portuguese.',
    'Checkpoint night: quiz each other on irregular verbs (eu form!).',
  ],
  immersion: [
    'Watch one episode of a Brazilian show with Portuguese subtitles (e.g., Sintonia or Coisa Mais Linda).',
    'Find a pão de queijo recipe video in Portuguese and cook along.',
  ],
});

PT.addWeek({
  n: 4,
  title: 'O Passado & a Viagem',
  subtitle: 'Past tense, restaurants, getting around',
  goal: 'Tell what happened (preterite) and handle the core travel situations: restaurants, directions, time, hotels and Uber.',
  canDo: [
    'I can say what I did yesterday with regular and irregular past verbs (fui, fiz, tive…).',
    'I can order a full meal, ask for the check and pay.',
    'I can ask for and understand simple directions.',
    'I can tell the time and check in at a hotel.',
  ],
  lessons: [
    {
      id: 'w4l1', kind: 'Grammar', title: 'Past tense (preterite): regular verbs', minutes: 35,
      body: `
${PT.table(['', 'FALAR', 'COMER', 'ABRIR'], [
  ['eu', 'fal<b>ei</b>', 'com<b>i</b>', 'abr<b>i</b>'], ['você / ele / a gente', 'fal<b>ou</b>', 'com<b>eu</b>', 'abr<b>iu</b>'],
  ['nós', 'fal<b>amos</b>', 'com<b>emos</b>', 'abr<b>imos</b>'], ['vocês / eles', 'fal<b>aram</b>', 'com<b>eram</b>', 'abr<b>iram</b>'],
])}
<p>Used for <b>finished actions</b>: "I spoke", "I ate". The <i>nós</i> form looks like the present, and context tells them apart.</p>
<p>Spelling changes in the <i>eu</i> form keep the sound: chegar → <b>cheguei</b>, pagar → <b>paguei</b>, ficar → <b>fiquei</b>, começar → <b>comecei</b>.</p>
${PT.table(['Time words', ''], [['ontem', 'yesterday'], ['anteontem', 'the day before yesterday'], ['ontem à noite', 'last night'], ['semana passada', 'last week'], ['ano passado', 'last year'], ['há dois dias / faz dois dias', 'two days ago']])}
<p class="tip">💡 <b>Gostei!</b> (I liked it!) and <b>Gostou?</b> (Did you like it?) will come up all the time.</p>`,
      examples: [
        ['Ontem eu falei com a minha mãe.', 'Yesterday I spoke with my mom.'], ['Você comeu?', 'Did you eat?'], ['A gente chegou ontem à noite.', 'We arrived last night.'],
        ['Eu paguei a conta.', 'I paid the check.'], ['Eles abriram a loja.', 'They opened the store.'], ['Eu fiquei no hotel.', 'I stayed at the hotel.'],
        ['Gostei muito!', 'I liked it a lot!'], ['Você gostou?', 'Did you like it?'],
      ],
      exercises: [
        { t: 'fill', q: 'Ontem eu ___ (falar) com ele.', a: ['falei'] },
        { t: 'fill', q: 'Você ___ (comer) bem?', a: ['comeu'] },
        { t: 'fill', q: 'Eles ___ (abrir) a porta.', a: ['abriram'] },
        { t: 'fill', q: 'Eu ___ (chegar) às dez.', a: ['cheguei'] },
        { t: 'fill', q: 'Ano passado nós ___ (viajar) muito.', a: ['viajamos'] },
        { t: 'mc', q: '"Gostei!" means…', o: ['I liked it!', 'I like it!', 'I will like it!'], a: 0 },
        { t: 'tr', en: 'Did you like it?', a: ['Você gostou?', 'Gostou?'] },
        { t: 'order', pt: 'A gente chegou ontem à noite', en: 'We arrived last night' },
      ],
    },
    {
      id: 'w4l2', kind: 'Grammar', title: 'Past tense: the irregular all-stars', minutes: 40,
      body: `
${PT.table(['', 'eu', 'você / ele', 'nós', 'vocês / eles'], [
  ['SER & IR (was / went)', 'fui', 'foi', 'fomos', 'foram'], ['TER (had)', 'tive', 'teve', 'tivemos', 'tiveram'], ['ESTAR (was)', 'estive', 'esteve', 'estivemos', 'estiveram'],
  ['FAZER (did)', 'fiz', 'fez', 'fizemos', 'fizeram'], ['PODER (could)', 'pude', 'pôde', 'pudemos', 'puderam'], ['QUERER (wanted)', 'quis', 'quis', 'quisemos', 'quiseram'],
  ['DIZER (said)', 'disse', 'disse', 'dissemos', 'disseram'], ['VER (saw)', 'vi', 'viu', 'vimos', 'viram'], ['VIR (came)', 'vim', 'veio', 'viemos', 'vieram'],
  ['DAR (gave)', 'dei', 'deu', 'demos', 'deram'], ['TRAZER (brought)', 'trouxe', 'trouxe', 'trouxemos', 'trouxeram'],
])}
<p><b>Ser</b> and <b>ir</b> share the same past forms, and context decides: <i>Eu <b>fui</b> à praia</i> (I went) vs <i><b>Foi</b> ótimo!</i> (It was great!).</p>
<p class="tip">💡 Learn the <b>eu</b> and <b>ele/você</b> forms first. They cover about 90% of storytelling.</p>`,
      examples: [
        ['Foi ótimo!', 'It was great!'], ['Eu fui à praia ontem.', 'I went to the beach yesterday.'], ['Ela teve um dia longo.', 'She had a long day.'],
        ['Onde você esteve?', 'Where have you been?'], ['O que vocês fizeram ontem?', 'What did you guys do yesterday?'], ['Eu não pude ir.', 'I couldn’t go.'],
        ['Ele disse que sim.', 'He said yes.'], ['Você viu isso?', 'Did you see that?'], ['Eles vieram de carro.', 'They came by car.'],
      ],
      exercises: [
        { t: 'fill', q: 'Ontem eu ___ (ir) à praia.', a: ['fui'] },
        { t: 'fill', q: 'A viagem ___ (ser) ótima.', a: ['foi'] },
        { t: 'fill', q: 'O que você ___ (fazer)?', a: ['fez'] },
        { t: 'fill', q: 'Eu ___ (ter) um problema.', a: ['tive'] },
        { t: 'fill', q: 'Ela ___ (dizer) que não.', a: ['disse'] },
        { t: 'fill', q: 'Nós ___ (ver) o jogo.', a: ['vimos'] },
        { t: 'mc', q: '"Eu fui" can mean…', o: ['I went / I was', 'I go', 'I will be'], a: 0 },
        { t: 'tr', en: 'It was great!', a: ['Foi ótimo!'] },
        { t: 'order', pt: 'O que vocês fizeram ontem', en: 'What did you guys do yesterday?' },
      ],
    },
    {
      id: 'w4l3', kind: 'Sentences', title: 'At the restaurant', minutes: 30,
      body: `
${PT.table(['Step', 'Say'], [
  ['Arrive', 'Boa noite! Uma mesa para dois, por favor.'], ['Get the menu', 'Pode trazer o cardápio, por favor?'], ['Call the waiter', 'Moço! / Moça! (or raise your hand). Garçom is OK but less warm.'],
  ['Order', 'Eu vou querer… / Para mim, um… / Eu queria…'], ['Ask', 'Tem opção vegetariana? / O que você recomenda? / Serve quantas pessoas?'],
  ['Special requests', 'Sem gelo / sem cebola / bem passado (well done) / ao ponto (medium)'], ['Compliment', 'Estava delicioso!'],
  ['Pay', 'A conta, por favor. / Aceita cartão? / Dá pra dividir a conta?'],
])}
<p class="tip">🇧🇷 Culture: a 10% <b>serviço</b> (tip) is usually already on the bill. <b>Comida a quilo</b> restaurants charge by the weight of your plate. A <b>rodízio</b> (often at a churrascaria) is all-you-can-eat, served at the table. Many dishes serve two (<i>serve duas pessoas</i>), so ask before you order two! You'll be asked <i>crédito ou débito?</i> and Pix is everywhere.</p>`,
      examples: [
        ['Uma mesa para dois, por favor.', 'A table for two, please.'], ['Pode trazer o cardápio, por favor?', 'Could you bring the menu, please?'],
        ['Eu vou querer o frango.', 'I’ll have the chicken.'], ['Para mim, um suco de laranja.', 'For me, an orange juice.'], ['Sem gelo, por favor.', 'No ice, please.'],
        ['Tem opção vegetariana?', 'Is there a vegetarian option?'], ['Serve quantas pessoas?', 'How many people does it serve?'], ['Estava delicioso!', 'It was delicious!'],
        ['A conta, por favor.', 'The check, please.'], ['Dá pra dividir a conta?', 'Can we split the check?'],
      ],
      exercises: [
        { t: 'mc', q: 'To get the waiter’s attention politely:', o: ['Moço, por favor!', 'Ei, você!', 'Psiu, garçom!'], a: 0, why: 'Moço / Moça (young man / young woman) is the warm, polite way to call staff.' },
        { t: 'mc', q: 'At a "comida a quilo" restaurant…', o: ['you pay by the weight of your plate', 'it’s all-you-can-eat meat', 'you must order a kilo'], a: 0 },
        { t: 'fill', q: 'Eu vou ___ o peixe.', a: ['querer'], en: 'I’ll have the fish.' },
        { t: 'fill', q: '___ gelo, por favor.', a: ['sem'], en: 'No (without) ice, please.' },
        { t: 'tr', en: 'The check, please.', a: ['A conta, por favor.'] },
        { t: 'tr', en: 'A table for two, please.', a: ['Uma mesa para dois, por favor.', 'Mesa para dois, por favor.', 'Uma mesa pra dois, por favor.'] },
        { t: 'order', pt: 'Tem opção vegetariana', en: 'Is there a vegetarian option?' },
        { t: 'order', pt: 'Dá pra dividir a conta', en: 'Can we split the check?' },
      ],
    },
    {
      id: 'w4l4', kind: 'Sentences', title: 'Getting around: directions, time, hotel, Uber', minutes: 35,
      body: `
${PT.table(['Directions', ''], [
  ['Onde fica…?', 'Where is…?'], ['É longe? / É perto daqui?', 'Is it far? / Is it near here?'], ['Vire à direita / à esquerda', 'Turn right / left'],
  ['Siga reto', 'Go straight'], ['na esquina', 'at the corner'], ['do lado de…', 'next to…'], ['em frente a…', 'in front of / across from…'], ['uns cinco minutos a pé', 'about five minutes on foot'],
])}
${PT.table(['Time', ''], [
  ['Que horas são?', 'What time is it?'], ['É uma hora.', 'It’s one o’clock.'], ['São duas e meia.', 'It’s 2:30.'], ['São três e quinze.', 'It’s 3:15.'],
  ['meio-dia / meia-noite', 'noon / midnight'], ['A que horas…?', 'At what time…?'], ['às oito', 'at eight'],
])}
<p><b>Hotel:</b> <i>Tenho uma reserva no nome de…</i> · <i>A que horas é o café da manhã?</i> · <i>Pode guardar as malas?</i> (Can you hold our bags?)<br>
<b>Uber / taxi:</b> <i>Você é o motorista do Uber?</i> · <i>Pode parar aqui, por favor.</i> · <i>Pode ligar o ar?</i> (Can you turn on the A/C?)</p>`,
      examples: [
        ['Onde fica o metrô?', 'Where is the subway?'], ['É longe daqui?', 'Is it far from here?'], ['É perto, uns cinco minutos a pé.', 'It’s close, about five minutes on foot.'],
        ['Vire à direita.', 'Turn right.'], ['Siga reto até a esquina.', 'Go straight to the corner.'], ['Que horas são?', 'What time is it?'], ['São duas e meia.', 'It’s two thirty.'],
        ['Tenho uma reserva no nome de Smith.', 'I have a reservation under Smith.'], ['A que horas é o café da manhã?', 'What time is breakfast?'], ['Pode parar aqui, por favor.', 'You can stop here, please.'],
      ],
      exercises: [
        { t: 'mc', q: '"Vire à esquerda"', o: ['Turn left', 'Turn right', 'Go straight'], a: 0 },
        { t: 'mc', q: '"São duas e meia"', o: ['It’s 2:30', 'It’s 2:15', 'It’s 12:30'], a: 0 },
        { t: 'fill', q: 'É ___ daqui?', a: ['longe'], en: 'Is it far from here?' },
        { t: 'fill', q: 'A que ___ é o café da manhã?', a: ['horas'], en: 'What time is breakfast?' },
        { t: 'tr', en: 'Where is the subway?', a: ['Onde fica o metrô?', 'Onde é o metrô?', 'Onde está o metrô?'] },
        { t: 'tr', en: 'Turn right.', a: ['Vire à direita.', 'Vira à direita.', 'Vira na direita.'] },
        { t: 'order', pt: 'Pode parar aqui por favor', en: 'You can stop here, please' },
      ],
    },
  ],
  vocab: [
    ['a conta', 'the check / bill'], ['o cardápio', 'menu'], ['a mesa', 'table'], ['moço / moça', 'waiter / waitress (way to call)'], ['o gelo', 'ice'],
    ['sem', 'without'], ['com', 'with'], ['o cartão', 'card'], ['delicioso', 'delicious'], ['estava delicioso', 'it was delicious'], ['a esquerda', 'left'],
    ['a direita', 'right'], ['reto', 'straight ahead'], ['a esquina', 'corner'], ['perto', 'near'], ['longe', 'far'], ['a pé', 'on foot'], ['o metrô', 'subway'],
    ['o ônibus', 'bus'], ['a reserva', 'reservation'], ['o quarto', 'room / bedroom'], ['a chave', 'key'], ['o café da manhã', 'breakfast'], ['o almoço', 'lunch'],
    ['o jantar', 'dinner'], ['que horas são?', 'what time is it?'], ['meio-dia', 'noon'], ['meia-noite', 'midnight'], ['semana passada', 'last week'],
    ['ano passado', 'last year'], ['fui', 'I went / I was'], ['foi ótimo', 'it was great'], ['fiz', 'I did / made'], ['tive', 'I had'], ['gostei', 'I liked it'],
  ],
  talk: [
    'Tell what you did yesterday from morning to night (preterite!).',
    'Role-play ordering a full dinner for two: arrive, order drinks, food, dessert, pay.',
    'Give directions from your home to the nearest coffee shop.',
  ],
  partner: [
    'Dinner debrief: each of you says 5 things you did today (Eu fui…, Eu fiz…, Eu comi…).',
    'Restaurant role-play at home: one is the waiter (moço/moça), one the customer. Swap.',
    'Directions game: one hides an object, the other gives directions in Portuguese (vire à direita…).',
    'Ask each other the time randomly all day: "Que horas são?"',
    'Hotel check-in role-play, including a problem (no reservation, broken A/C…).',
    'Tell each other the story of how you met, in the past tense, as simply as you can.',
    'Checkpoint night: quiz each other on irregular past verbs.',
  ],
  immersion: [
    'Watch a Brazilian food or street-food video and write down 10 food words you hear.',
    'Listen to a Portuguese podcast episode while walking. Replay one minute 3 times.',
  ],
});
