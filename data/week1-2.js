/* Weeks 1–2: sounds, survival phrases, ser/estar, present tense */
PT.addWeek({
  n: 1,
  title: 'Sons e Sobrevivência',
  subtitle: 'Sounds & survival',
  goal: 'Pronounce Brazilian Portuguese correctly, greet people, introduce yourselves, use "ser", count and handle gender.',
  canDo: [
    'I can pronounce t/d before "i", the Brazilian R, lh, nh and nasal ão.',
    'I can greet someone and answer "Tudo bem?" naturally.',
    'I can introduce myself and my partner and say where we are from.',
    'I can say numbers 0–100 and understand a price in reais.',
  ],
  lessons: [
    {
      id: 'w1l1', kind: 'Pronunciation', title: 'The sounds of Brazil', minutes: 30,
      body: `
<p>Portuguese spelling is very regular once you know about 12 rules. Learn the sounds first, so that every word you pick up later sounds right in your head. Press 🔊 on every example and copy it out loud.</p>
<p class="tip">👆 <b>Tap the big letter</b> to hear the sound slowly on its own. <b>Tap the word</b> to hear it inside a real word. Repeat each one out loud 3 times.</p>
${PT.soundBoard('The 7 vowel sounds', [
  ['a', 'á', 'like "ah" in father', 'casa', 'house'],
  ['é', 'é', 'open "eh" as in bed', 'café', 'coffee'],
  ['ê', 'ê', 'closed "ay" (no glide)', 'você', 'you'],
  ['i', 'i', '"ee" as in see', 'vida', 'life'],
  ['ó', 'ó', 'open "aw" as in law', 'avó', 'grandma'],
  ['ô', 'ô', 'closed "oh" (no glide)', 'avô', 'grandpa'],
  ['u', 'u', '"oo" as in food', 'tudo', 'everything'],
])}
${PT.soundBoard('Unstressed endings', [
  ['-e', 'leite', 'final e → "ee"', 'leite', 'milk'],
  ['-o', 'carro', 'final o → "oo"', 'obrigado', 'thank you'],
  ['-a', 'casa', 'final a → soft "uh"', 'praia', 'beach'],
])}
${PT.soundBoard('Nasal vowels (air through the nose)', [
  ['ã', 'lã', 'nasal "ah"', 'maçã', 'apple'],
  ['ão', 'não', 'nasal "ow"', 'pão', 'bread'],
  ['ãe', 'mãe', 'nasal "ah-ee"', 'mãe', 'mother'],
  ['õe', 'põe', 'nasal "oy"', 'limões', 'lemons'],
  ['em', 'bem', 'nasal "ay"', 'também', 'also'],
  ['im', 'sim', 'nasal "ee"', 'sim', 'yes'],
  ['om', 'som', 'nasal "oh"', 'bom', 'good'],
  ['um', 'um', 'nasal "oo"', 'algum', 'some'],
])}
<h3>Consonant rules</h3>
${PT.table(['Spelling', 'Sounds like', 'Examples'], [
  ['final <b>-e</b>', '"ee"', 'leite (LAY-chee), sete, noite'],
  ['final <b>-o</b>', '"oo"', 'obrigad<b>o</b> (o-bree-GA-doo), carro'],
  ['<b>t / d</b> before an "ee" sound', '"ch" / "j"', '<b>t</b>ia (CHEE-a), <b>d</b>ia (JEE-a), cida<b>de</b> (see-DA-jee)'],
  ['<b>r</b> at the start, <b>rr</b>, r before a consonant', 'English <b>h</b>', '<b>R</b>io (HEE-oo), ca<b>rr</b>o (KA-hoo), po<b>r</b>ta'],
  ['single <b>r</b> between vowels', 'quick tap (like the "dd" in ladder)', 'ca<b>r</b>o, pa<b>r</b>a, Bra<b>s</b>il'],
  ['<b>lh</b>', '"ly" as in mi<b>lli</b>on', 'traba<b>lh</b>o, fi<b>lh</b>o'],
  ['<b>nh</b>', '"ny" as in ca<b>ny</b>on', 'vi<b>nh</b>o, ama<b>nh</b>ã'],
  ['<b>ç</b>', '"s"', 'almo<b>ç</b>o, a<b>ç</b>aí'],
  ['<b>l</b> at the end of a syllable', '"w"', 'Brasi<b>l</b> (bra-ZEEW), hote<b>l</b>'],
  ['<b>s</b> between vowels', '"z"', 'ca<b>s</b>a (KA-za)'],
  ['<b>ão, ã, õe, -m</b>', 'nasal (air through the nose)', 'p<b>ão</b>, m<b>ãe</b>, n<b>ão</b>, be<b>m</b>, si<b>m</b>'],
  ['accents', 'á é ó = open & stressed · â ê ô = closed & stressed', 'café, avó, você, avô'],
])}
<p class="tip">💡 In Rio, an <b>s</b> at the end of a syllable sounds like "sh": <i>mais</i> → "maish", <i>festa</i> → "FESH-ta".</p>
<p class="tip">💡 Men say <b>obrigado</b>, women say <b>obrigada</b>. It agrees with the speaker, not with the person you're thanking.</p>`,
      examples: [
        ['Bom dia!', 'Good morning!'], ['Boa noite!', 'Good evening / good night!'], ['Obrigado! / Obrigada!', 'Thank you! (said by a man / by a woman)'],
        ['Rio de Janeiro', 'HEE-oo jee zha-NAY-roo'], ['Eu não sei.', 'I don’t know.'], ['Um vinho, por favor.', 'A wine, please.'],
        ['Eu trabalho muito.', 'I work a lot.'], ['A cidade é linda.', 'The city is beautiful.'], ['Tem pão?', 'Is there bread?'], ['Amanhã à tarde.', 'Tomorrow afternoon.'],
      ],
      exercises: [
        { t: 'mc', q: 'How do Brazilians pronounce <b>dia</b> (day)?', o: ['DEE-a', 'JEE-a', 'DYE-a'], a: 1 },
        { t: 'mc', q: 'The R at the start of <b>Rio</b> sounds like…', o: ['the R in "red"', 'the H in "hello"', 'a rolled Spanish R'], a: 1 },
        { t: 'mc', q: 'The <b>lh</b> in <b>trabalho</b> sounds like…', o: ['"l" + "h"', '"ly" as in million', 'a plain "l"'], a: 1 },
        { t: 'mc', q: 'Your girlfriend wants to say thank you. She says…', o: ['Obrigado', 'Obrigada', 'Obrigados'], a: 1, why: 'The ending agrees with the speaker: women say obrigada.' },
        { t: 'mc', q: 'The final L in <b>Brasil</b> sounds like…', o: ['L', 'W', 'silent'], a: 1 },
        { t: 'mc', q: 'Which word has a nasal vowel?', o: ['mão', 'mala', 'massa'], a: 0 },
        { t: 'mc', q: '<b>noite</b> (night) sounds like…', o: ['NOY-tay', 'NOY-chee', 'NOYT'], a: 1 },
        { t: 'mc', q: '<b>casa</b> (house) sounds like…', o: ['KA-sa', 'KA-za', 'KA-sha'], a: 1 },
      ],
    },
    {
      id: 'w1l2', kind: 'Sentences', title: 'Greetings & introductions', minutes: 30,
      body: `
<p>Brazilians use <b>você</b> ("you") with almost everyone. With older people or to be respectful, use <b>o senhor</b> (to a man) or <b>a senhora</b> (to a woman).</p>
${PT.table(['Portuguese', 'Meaning', 'When'], [
  ['Oi! / Olá!', 'Hi! / Hello!', 'Oi is the everyday one'],
  ['Bom dia / Boa tarde / Boa noite', 'Good morning / afternoon / evening', 'noite starts around 6pm'],
  ['Tudo bem? / Tudo bom?', 'How’s it going? (lit. "all good?")', 'Answer: Tudo! / Tudo bem, e você?'],
  ['Prazer! / Muito prazer!', 'Nice to meet you!', 'when you meet someone'],
  ['Com licença', 'Excuse me', 'to pass someone or get attention'],
  ['Desculpa', 'Sorry', 'bumped into someone'],
  ['Por favor / Obrigado(a) / De nada', 'Please / Thank you / You’re welcome', ''],
  ['Tchau! / Até logo! / Até amanhã!', 'Bye! / See you later! / See you tomorrow!', ''],
])}
<p>To introduce people: <b>Esta é a minha namorada</b> (this is my girlfriend) / <b>Este é o meu namorado</b> (this is my boyfriend).</p>
<p class="tip">🇧🇷 Culture: in many cities people greet with a kiss on the cheek (one in São Paulo, two in Rio). A hug is fine too. Brazilians are warm, so expect personal questions.</p>`,
      examples: [
        ['Oi! Tudo bem?', 'Hi! How’s it going?'], ['Tudo ótimo, e você?', 'Great, and you?'], ['Como você se chama?', 'What’s your name?'],
        ['Meu nome é Lucas.', 'My name is Lucas.'], ['Muito prazer!', 'Very nice to meet you!'], ['De onde você é?', 'Where are you from?'],
        ['Eu sou dos Estados Unidos.', 'I’m from the United States.'], ['Esta é a minha namorada.', 'This is my girlfriend.'],
        ['Com licença.', 'Excuse me.'], ['Desculpa!', 'Sorry!'], ['De nada.', 'You’re welcome.'], ['Até amanhã!', 'See you tomorrow!'],
      ],
      exercises: [
        { t: 'mc', q: 'Someone says "Tudo bem?" The best reply is…', o: ['Tudo bem, e você?', 'De nada.', 'Com licença.'], a: 0 },
        { t: 'mc', q: 'You bump into someone on the street:', o: ['Desculpa!', 'Prazer!', 'Tchau!'], a: 0 },
        { t: 'mc', q: 'You need to squeeze past someone on the bus:', o: ['Com licença.', 'De nada.', 'Bom dia.'], a: 0 },
        { t: 'fill', q: 'Muito ___!', a: ['prazer'], en: 'Nice to meet you!' },
        { t: 'fill', q: 'Como você se ___?', a: ['chama'], en: 'What’s your name?' },
        { t: 'tr', en: 'Good afternoon!', a: ['Boa tarde!'] },
        { t: 'tr', en: 'Where are you from?', a: ['De onde você é?'] },
        { t: 'order', pt: 'Esta é a minha namorada', en: 'This is my girlfriend' },
        { t: 'order', pt: 'Eu sou dos Estados Unidos', en: 'I am from the United States' },
      ],
    },
    {
      id: 'w1l3', kind: 'Grammar', title: 'Pronouns & the verb SER', minutes: 30,
      body: `
<p><b>Ser</b> = "to be" for <b>permanent identity</b>: who or what something is, nationality, origin (<i>ser de</i>), profession, personality, time and dates.</p>
${PT.table(['Pronoun', 'SER', 'English'], [
  ['eu', '<b>sou</b>', 'I am'], ['você', '<b>é</b>', 'you are'], ['ele / ela', '<b>é</b>', 'he / she is'],
  ['a gente', '<b>é</b>', 'we are (informal, VERY common)'], ['nós', '<b>somos</b>', 'we are'],
  ['vocês', '<b>são</b>', 'you all are'], ['eles / elas', '<b>são</b>', 'they are'],
])}
<p class="tip">💡 <b>A gente</b> ("the people") is how Brazilians usually say "we" in conversation. It takes the <b>ele/ela</b> form of the verb: <i>A gente é americano.</i></p>
<p class="tip">💡 You'll hear <b>tu</b> in Rio, the South and the Northeast, often with the você verb form (<i>tu é</i>). Just use <b>você</b>.</p>
<p>Professions don't take an article: <b>Eu sou engenheiro.</b> (I'm an engineer.) Adjectives match gender: <i>americano / americana</i>.</p>`,
      examples: [
        ['Eu sou americano.', 'I’m American. (man)'], ['Eu sou americana.', 'I’m American. (woman)'], ['Ela é muito simpática.', 'She’s very nice.'],
        ['Nós somos turistas.', 'We are tourists.'], ['A gente é de Nova York.', 'We’re from New York.'], ['Vocês são brasileiros?', 'Are you (all) Brazilian?'],
        ['Ele é professor.', 'He is a teacher.'], ['Isso é muito caro!', 'That’s very expensive!'],
      ],
      exercises: [
        { t: 'fill', q: 'Eu ___ americano.', a: ['sou'], en: 'I am American.' },
        { t: 'fill', q: 'Ela ___ minha namorada.', a: ['é'], en: 'She is my girlfriend.' },
        { t: 'fill', q: 'Nós ___ turistas.', a: ['somos'], en: 'We are tourists.' },
        { t: 'fill', q: 'A gente ___ de Nova York.', a: ['é'], en: 'We are from New York.' },
        { t: 'fill', q: 'Vocês ___ brasileiros?', a: ['são'], en: 'Are you all Brazilian?' },
        { t: 'mc', q: '<b>A gente</b> means…', o: ['we (informal)', 'the people over there', 'you all'], a: 0 },
        { t: 'mc', q: 'Which verb form goes with <b>a gente</b>?', o: ['somos', 'é', 'são'], a: 1 },
        { t: 'tr', en: 'I am a teacher.', a: ['Eu sou professor.', 'Eu sou professora.', 'Sou professor.', 'Sou professora.'] },
        { t: 'order', pt: 'Ela é muito simpática', en: 'She is very nice' },
      ],
    },
    {
      id: 'w1l4', kind: 'Grammar', title: 'Gender, articles, plurals & numbers', minutes: 35,
      body: `
${PT.table(['', 'masculine', 'feminine'], [
  ['the (singular)', '<b>o</b> carro', '<b>a</b> casa'], ['the (plural)', '<b>os</b> carros', '<b>as</b> casas'],
  ['a / some', '<b>um</b> carro / <b>uns</b> carros', '<b>uma</b> casa / <b>umas</b> casas'],
])}
<p>Words ending in <b>-o</b> are usually masculine and words ending in <b>-a</b> are usually feminine. Common exceptions: <i>o dia, o problema, o mapa, a mão, a foto</i>. Adjectives usually go <b>after</b> the noun and agree with it: <i>o carro nov<b>o</b>, a casa nov<b>a</b>, as praias bonit<b>as</b></i>.</p>
<p><b>Plurals:</b> add -s. Words ending in <b>-ão</b> usually become <b>-ões</b> (avião → aviões), but some become -ães (pão → pães, alemão → alemães). <b>-l → -is</b> (hotel → hotéis, animal → animais). <b>-r/-z → -es</b> (bar → bares).</p>
${PT.table(['', '', '', ''], [
  ['0 zero', '1 um / uma', '2 dois / duas', '3 três'], ['4 quatro', '5 cinco', '6 seis', '7 sete'], ['8 oito', '9 nove', '10 dez', '11 onze'],
  ['12 doze', '13 treze', '14 catorze', '15 quinze'], ['16 dezesseis', '17 dezessete', '18 dezoito', '19 dezenove'],
  ['20 vinte', '21 vinte e um', '30 trinta', '40 quarenta'], ['50 cinquenta', '60 sessenta', '70 setenta', '80 oitenta'],
  ['90 noventa', '100 cem', '101 cento e um', '1000 mil'],
])}
<p class="tip">💡 In phone numbers, Brazilians often say <b>meia</b> for 6 (from "meia dúzia", half a dozen). Prices: R$ 25 = <b>vinte e cinco reais</b>, R$ 1 = <b>um real</b>.</p>`,
      examples: [
        ['o carro novo', 'the new car'], ['a casa nova', 'the new house'], ['os hotéis', 'the hotels'], ['Uma cerveja e dois cafés.', 'One beer and two coffees.'],
        ['Duas águas, por favor.', 'Two waters, please.'], ['Quanto custa?', 'How much is it?'], ['Vinte e cinco reais.', 'Twenty-five reais.'],
        ['Meu número é nove, meia, oito, dois.', 'My number is 9-6-8-2.'],
      ],
      exercises: [
        { t: 'fill', q: '___ praia', a: ['a'], en: 'the beach' },
        { t: 'fill', q: '___ dia', a: ['o'], en: 'the day' },
        { t: 'mc', q: 'The plural of <b>hotel</b> is…', o: ['hotels', 'hotéis', 'hoteles'], a: 1 },
        { t: 'mc', q: 'The plural of <b>pão</b> (bread) is…', o: ['pãos', 'pães', 'pões'], a: 1 },
        { t: 'mc', q: '<b>duas</b> means…', o: ['two (feminine)', 'twelve', 'second'], a: 0 },
        { t: 'mc', q: 'On the phone, Brazilians often say 6 as…', o: ['seis', 'meia', 'sexta'], a: 1 },
        { t: 'fill', q: 'A casa é ___.', a: ['nova'], en: 'The house is new.' },
        { t: 'tr', en: 'Two waters, please.', a: ['Duas águas, por favor.'] },
        { t: 'tr', en: 'twenty-five reais', a: ['vinte e cinco reais'] },
      ],
    },
  ],
  vocab: [
    ['oi', 'hi'], ['tchau', 'bye'], ['bom dia', 'good morning'], ['boa tarde', 'good afternoon'], ['boa noite', 'good evening / night'],
    ['tudo bem?', 'how’s it going?'], ['obrigado / obrigada', 'thank you'], ['por favor', 'please'], ['desculpa', 'sorry'], ['com licença', 'excuse me'],
    ['de nada', 'you’re welcome'], ['sim', 'yes'], ['não', 'no / not'], ['talvez', 'maybe'], ['a namorada', 'girlfriend'], ['o namorado', 'boyfriend'],
    ['o amigo / a amiga', 'friend'], ['o homem', 'man'], ['a mulher', 'woman / wife'], ['o nome', 'name'], ['a água', 'water'], ['o café', 'coffee'],
    ['a cerveja', 'beer'], ['a casa', 'house / home'], ['hoje', 'today'], ['amanhã', 'tomorrow'], ['ontem', 'yesterday'], ['aqui', 'here'],
    ['muito', 'very / a lot'], ['pouco', 'a little'], ['um / uma', 'one'], ['dois / duas', 'two'], ['três', 'three'], ['cinco', 'five'], ['dez', 'ten'],
    ['vinte', 'twenty'], ['cem', 'one hundred'], ['quanto custa?', 'how much is it?'],
  ],
  talk: [
    'Introduce yourself: your name, where you’re from, and introduce your partner (Esta é… / Este é…).',
    'Count from 1 to 30 out loud, then say your phone number using "meia" for 6.',
    'Greet three imaginary people: one in the morning, one in the afternoon, one at night. Ask "Tudo bem?" each time.',
  ],
  partner: [
    'Greet each other ONLY in Portuguese all day (Oi / Bom dia / Tudo bem?).',
    'Introduce each other to an imaginary Brazilian: "Esta é a minha namorada…" / "Este é o meu namorado…".',
    'Describe each other with ser: "Você é…" (simpático/a, engraçado/a, alto/a…).',
    'Price game: one says a number from 1 to 100, the other writes it down. Swap after 10.',
    'Pronunciation judge: read the week’s phrases to each other. Listen for t/d → "ch/j" and the H-sounding R.',
    'Coffee shop role-play: one is the barista, one is the customer. Swap.',
    'Checkpoint night: quiz each other on 20 flashcards.',
  ],
  immersion: [
    'Listen to "Garota de Ipanema" (Tom Jobim) and "Mas Que Nada" with the lyrics in front of you.',
    'Watch a Brazilian Portuguese YouTube lesson at 0.75× speed and just notice the sounds.',
  ],
});

PT.addWeek({
  n: 2,
  title: 'O Presente',
  subtitle: 'Present tense, ser vs estar',
  goal: 'Talk about your life in the present: regular verbs, questions and negatives, ser vs estar, ter and ir.',
  canDo: [
    'I can conjugate regular -ar, -er and -ir verbs in the present.',
    'I can ask questions with onde, quando, o que, quem, como, quanto, por que.',
    'I can choose between ser and estar and say how I feel (estar com fome…).',
    'I can say what I have, what there is (tem…?) and where I’m going.',
  ],
  lessons: [
    {
      id: 'w2l1', kind: 'Grammar', title: 'Regular -AR verbs', minutes: 30,
      body: `
<p>Most Portuguese verbs end in <b>-ar</b>. Drop the -ar and add the endings:</p>
${PT.table(['', 'FALAR (to speak)', 'ending'], [
  ['eu', 'fal<b>o</b>', '-o'], ['você / ele / ela / a gente', 'fal<b>a</b>', '-a'], ['nós', 'fal<b>amos</b>', '-amos'], ['vocês / eles / elas', 'fal<b>am</b>', '-am'],
])}
<p>In Brazil you really only need <b>three forms</b> for conversation: eu, você/a gente, and vocês/eles.</p>
<p>Useful -ar verbs: <i>morar</i> (to live), <i>trabalhar</i> (to work), <i>gostar de</i> (to like), <i>precisar de</i> (to need), <i>estudar</i>, <i>tomar</i> (to drink/take), <i>comprar</i> (to buy), <i>chegar</i> (to arrive), <i>viajar</i>, <i>andar</i> (to walk), <i>esperar</i> (to wait), <i>ficar</i> (to stay), <i>pegar</i> (to grab/catch), <i>pagar</i> (to pay).</p>
<p class="tip">💡 <b>Gostar</b> and <b>precisar</b> always take <b>de</b>: <i>Eu gosto <b>de</b> café. A gente precisa <b>de</b> um táxi.</i></p>`,
      examples: [
        ['Eu falo um pouco de português.', 'I speak a little Portuguese.'], ['Você fala inglês?', 'Do you speak English?'], ['A gente mora nos Estados Unidos.', 'We live in the United States.'],
        ['Ela trabalha muito.', 'She works a lot.'], ['Eu gosto de praia.', 'I like the beach.'], ['Nós precisamos de um táxi.', 'We need a taxi.'],
        ['Vocês viajam muito?', 'Do you travel a lot?'], ['Eu tomo café todo dia.', 'I drink coffee every day.'],
      ],
      exercises: [
        { t: 'fill', q: 'Eu ___ (falar) português.', a: ['falo'] },
        { t: 'fill', q: 'Ela ___ (trabalhar) aqui.', a: ['trabalha'] },
        { t: 'fill', q: 'Nós ___ (morar) nos Estados Unidos.', a: ['moramos'] },
        { t: 'fill', q: 'Eles ___ (gostar) de futebol.', a: ['gostam'] },
        { t: 'fill', q: 'A gente ___ (precisar) de ajuda.', a: ['precisa'] },
        { t: 'mc', q: 'Eu gosto ___ café.', o: ['de', 'a', 'em'], a: 0 },
        { t: 'tr', en: 'Do you speak English?', a: ['Você fala inglês?'] },
        { t: 'tr', en: 'I like the beach.', a: ['Eu gosto de praia.', 'Eu gosto da praia.', 'Gosto de praia.'] },
        { t: 'order', pt: 'Eu falo um pouco de português', en: 'I speak a little Portuguese' },
      ],
    },
    {
      id: 'w2l2', kind: 'Grammar', title: '-ER / -IR verbs, negatives & questions', minutes: 35,
      body: `
${PT.table(['', 'COMER (to eat)', 'ABRIR (to open)'], [
  ['eu', 'com<b>o</b>', 'abr<b>o</b>'], ['você / ele / a gente', 'com<b>e</b>', 'abr<b>e</b>'], ['nós', 'com<b>emos</b>', 'abr<b>imos</b>'], ['vocês / eles', 'com<b>em</b>', 'abr<b>em</b>'],
])}
<p>More: <i>beber</i> (drink), <i>entender</i> (understand), <i>aprender</i> (learn), <i>vender</i> (sell), <i>correr</i> (run), <i>assistir</i> (watch), <i>dividir</i> (split/share), <i>decidir</i>, <i>partir</i> (leave).</p>
<p><b>Negatives:</b> put <b>não</b> before the verb: <i>Eu <b>não</b> como carne.</i> Double negatives are correct: <i>Eu não como <b>nada</b></i> (I don't eat anything), <i>Não conheço <b>ninguém</b></i> (I don't know anyone).</p>
<p><b>Questions:</b> just raise your voice at the end: <i>Você fala inglês?</i></p>
${PT.table(['Question word', 'Meaning'], [
  ['o que', 'what'], ['quem', 'who'], ['onde', 'where'], ['quando', 'when'], ['como', 'how'], ['por que', 'why (answer: porque = because)'], ['quanto / quanta', 'how much'], ['qual', 'which / what (+ é)'],
])}
<p class="tip">💡 Brazilians often say "yes" by repeating the verb: <i>Você gosta? → <b>Gosto!</b></i> &nbsp;<i>Você entende? → <b>Entendo.</b></i></p>`,
      examples: [
        ['Eu não como carne.', 'I don’t eat meat.'], ['Você entende?', 'Do you understand?'], ['Não entendo.', 'I don’t understand.'],
        ['A loja abre às nove?', 'Does the store open at nine?'], ['O que você bebe?', 'What do you drink?'], ['Onde você mora?', 'Where do you live?'],
        ['Por que não?', 'Why not?'], ['Qual é o seu nome?', 'What’s your name?'],
      ],
      exercises: [
        { t: 'fill', q: 'Eu ___ (comer) peixe.', a: ['como'] },
        { t: 'fill', q: 'Você ___ (beber) cerveja?', a: ['bebe'] },
        { t: 'fill', q: 'Nós ___ (abrir) a janela.', a: ['abrimos'] },
        { t: 'fill', q: 'Eles não ___ (entender).', a: ['entendem'] },
        { t: 'mc', q: 'How do you say "where?"', o: ['Onde?', 'Quando?', 'Quem?'], a: 0 },
        { t: 'mc', q: '"Você gosta de açaí?" The most natural "yes":', o: ['Gosto!', 'Sim, eu sou.', 'Sim, de.'], a: 0 },
        { t: 'tr', en: 'I don’t understand.', a: ['Eu não entendo.', 'Não entendo.'] },
        { t: 'tr', en: 'What do you drink?', a: ['O que você bebe?'] },
        { t: 'order', pt: 'Eu não como carne', en: 'I don’t eat meat' },
      ],
    },
    {
      id: 'w2l3', kind: 'Grammar', title: 'SER vs ESTAR', minutes: 35,
      body: `
${PT.table(['', 'ESTAR', 'spoken'], [
  ['eu', '<b>estou</b>', 'tô'], ['você / ele / a gente', '<b>está</b>', 'tá'], ['nós', '<b>estamos</b>', 'tamo'], ['vocês / eles', '<b>estão</b>', 'tão'],
])}
<p><b>SER</b> = what something <i>is</i> (identity, origin, profession, character). <b>ESTAR</b> = how or where something is <i>right now</i> (feelings, temporary states, where a person or movable thing is).</p>
${PT.table(['SER', 'ESTAR'], [
  ['Ele <b>é</b> chato. (He’s an annoying person.)', 'Ele <b>está</b> chato hoje. (He’s being annoying today.)'],
  ['A comida <b>é</b> boa aqui. (The food here is good in general.)', 'A comida <b>está</b> ótima! (This food tastes great!)'],
  ['Eu <b>sou</b> americano.', 'Eu <b>estou</b> cansado.'],
])}
<p><b>Estar com</b> + noun = feelings: <i>estar com <b>fome</b></i> (hungry), <i>sede</i> (thirsty), <i>frio</i> (cold), <i>calor</i> (hot), <i>sono</i> (sleepy), <i>pressa</i> (in a hurry), <i>medo</i> (afraid).</p>
<p><b>Estar + -ndo</b> = "-ing": <i>Estou fala<b>ndo</b>, comendo, abrindo.</i></p>
<p>For where buildings and places are, Brazilians use <b>ficar</b>: <i>Onde <b>fica</b> o hotel?</i></p>`,
      examples: [
        ['Eu estou cansado.', 'I’m tired.'], ['Onde você está?', 'Where are you?'], ['Estou no hotel.', 'I’m at the hotel.'],
        ['A comida está ótima!', 'The food is great!'], ['Ele é legal.', 'He’s cool / nice.'], ['Estou falando com a minha namorada.', 'I’m talking with my girlfriend.'],
        ['Onde fica a praia?', 'Where is the beach?'], ['Tô com fome.', 'I’m hungry.'],
      ],
      exercises: [
        { t: 'fill', q: 'Eu ___ cansado.', a: ['estou', 'tô'], en: 'I am tired.' },
        { t: 'fill', q: 'Ela ___ americana.', a: ['é'], en: 'She is American.' },
        { t: 'fill', q: 'Nós ___ no restaurante.', a: ['estamos'], en: 'We are at the restaurant.' },
        { t: 'fill', q: 'A comida ___ deliciosa!', a: ['está', 'tá'], en: 'The food is delicious! (this meal)' },
        { t: 'fill', q: 'Eu ___ falando.', a: ['estou', 'tô'], en: 'I am speaking.' },
        { t: 'mc', q: 'Onde ___ o hotel? (most natural for a building)', o: ['fica', 'está', 'é'], a: 0, why: 'Ficar is the standard way to locate buildings and places. You will also hear "Onde é o hotel?".' },
        { t: 'mc', q: 'I’m hungry:', o: ['Estou com fome.', 'Sou com fome.', 'Estou fome.'], a: 0 },
        { t: 'tr', en: 'We are tired.', a: ['Nós estamos cansados.', 'Estamos cansados.', 'A gente está cansado.', 'A gente tá cansado.'] },
        { t: 'order', pt: 'Estou falando com a minha namorada', en: 'I am talking with my girlfriend' },
      ],
    },
    {
      id: 'w2l4', kind: 'Grammar', title: 'TER, IR & possessives', minutes: 35,
      body: `
${PT.table(['', 'TER (to have)', 'IR (to go)'], [
  ['eu', '<b>tenho</b>', '<b>vou</b>'], ['você / ele / a gente', '<b>tem</b>', '<b>vai</b>'], ['nós', '<b>temos</b>', '<b>vamos</b>'], ['vocês / eles', '<b>têm</b>', '<b>vão</b>'],
])}
<ul>
<li><b>Tem…?</b> = "Is there / Are there…?" <i>Tem Wi-Fi aqui? Tem uma farmácia perto?</i></li>
<li><b>Ter que</b> + verb = "have to": <i>Eu tenho que ir.</i></li>
<li><b>Vamos!</b> = "Let's go!" / "Let's…!"</li>
<li>Ir <b>para</b> (spoken <b>pra</b>) a place: <i>Vou pra praia. Vou pra casa.</i></li>
</ul>
${PT.table(['', 'masc. thing', 'fem. thing'], [
  ['my', 'meu', 'minha'], ['your', 'seu', 'sua'], ['our', 'nosso', 'nossa'],
  ['his', 'o … dele', 'a … dele'], ['her', 'o … dela', 'a … dela'],
])}
<p>The possessive agrees with the <b>thing</b>, not the owner: <i>a minha mala</i> (my suitcase), even if you're a man. For "his/her", Brazilians say <b>dele/dela</b> after the noun: <i>a mala <b>dela</b></i> = her suitcase. An article before possessives is common: <i>o meu passaporte</i>.</p>`,
      examples: [
        ['Eu tenho dois irmãos.', 'I have two brothers.'], ['Tem Wi-Fi aqui?', 'Is there Wi-Fi here?'], ['Eu tenho que ir.', 'I have to go.'],
        ['Vamos pra praia!', 'Let’s go to the beach!'], ['A gente vai pra casa.', 'We’re going home.'], ['Este é o meu passaporte.', 'This is my passport.'],
        ['A mala dela é azul.', 'Her suitcase is blue.'], ['Qual é o seu nome?', 'What is your name?'],
      ],
      exercises: [
        { t: 'fill', q: 'Eu ___ (ter) uma reserva.', a: ['tenho'] },
        { t: 'fill', q: '___ um mercado perto daqui?', a: ['tem'], en: 'Is there a market near here?' },
        { t: 'fill', q: 'Eu ___ (ir) para o Rio.', a: ['vou'] },
        { t: 'fill', q: 'Nós ___ (ir) à praia.', a: ['vamos'] },
        { t: 'mc', q: 'her suitcase', o: ['a mala dela', 'a mala sua', 'a dela mala'], a: 0 },
        { t: 'mc', q: '"Eu tenho que…" means…', o: ['I have to…', 'I have what…', 'I want to…'], a: 0 },
        { t: 'tr', en: 'I have to go.', a: ['Eu tenho que ir.', 'Tenho que ir.'] },
        { t: 'tr', en: 'Let’s go to the beach!', a: ['Vamos pra praia!', 'Vamos para a praia!', 'Vamos à praia!'] },
        { t: 'order', pt: 'A gente vai pra casa', en: 'We are going home' },
      ],
    },
  ],
  vocab: [
    ['falar', 'to speak'], ['morar', 'to live (reside)'], ['trabalhar', 'to work'], ['gostar de', 'to like'], ['precisar de', 'to need'],
    ['comprar', 'to buy'], ['pagar', 'to pay'], ['viajar', 'to travel'], ['comer', 'to eat'], ['beber', 'to drink'], ['entender', 'to understand'],
    ['abrir', 'to open'], ['ter', 'to have'], ['ir', 'to go'], ['estar', 'to be (state / location)'], ['ser', 'to be (identity)'], ['ficar', 'to stay / to be located'],
    ['cansado / cansada', 'tired'], ['feliz', 'happy'], ['estar com fome', 'to be hungry'], ['estar com sede', 'to be thirsty'], ['frio', 'cold'],
    ['calor', 'heat (it’s hot)'], ['a praia', 'beach'], ['a rua', 'street'], ['a cidade', 'city'], ['o aeroporto', 'airport'], ['o banheiro', 'bathroom'],
    ['o dinheiro', 'money'], ['a mala', 'suitcase'], ['onde', 'where'], ['quando', 'when'], ['o que', 'what'], ['quem', 'who'], ['por que / porque', 'why / because'],
    ['tem…?', 'is there…?'],
  ],
  talk: [
    'Describe your normal day: Eu trabalho…, Eu como…, Eu bebo…, À noite eu…',
    'Say how you feel today and where you are right now (estar), then what you are doing (estou + -ndo).',
    'Describe your family and your home with ter and ser.',
  ],
  partner: [
    'Ask each other 5 questions with question words (Onde você mora? O que você come?).',
    'Morning check-in: "Como você está hoje?" Answer with estar + an adjective.',
    'Ser vs estar game: one says a sentence in English, the other translates it, choosing ser or estar.',
    '"Tem…?" hunt: point at things in the house and ask "Tem…?" / "O que é isso?"',
    'Plan tomorrow together with ir: "Amanhã a gente vai…"',
    'Cook or eat dinner naming everything in Portuguese.',
    'Checkpoint night: 20 flashcards each, and the loser makes coffee.',
  ],
  immersion: [
    'Listen to one episode of a slow Brazilian Portuguese podcast (e.g., Speaking Brazilian). Aim for the gist.',
    'Switch your phone language to Português (Brasil).',
  ],
});
