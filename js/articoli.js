// ══════════════════════════════════════════════════════
// CATEGORIE
// ══════════════════════════════════════════════════════
const CATEGORIE = {
  'Culture':        { colore: 'red',  emoji: '🎭', sottocategorie: ['Cinema', 'Arte', 'Musica', 'Letteratura'] },
  'Identità Umane': { colore: 'gold', emoji: '👤', sottocategorie: ['Interviste', 'Biografie', 'Ritratti'] },
  'Estetiche':      { colore: 'cyan', emoji: '✦',  sottocategorie: ['Moda', 'Sottoculture', 'Trend', 'Stili'] },
  'Visioni':        { colore: 'pink', emoji: '🌐', sottocategorie: ['Reportage', 'Viaggi', 'Fotografia', 'Architettura'] },
  'Redazione':      { colore: 'gold', emoji: '◆',  sottocategorie: ['Editoriale', 'Annunci'] },
};

// ══════════════════════════════════════════════════════
// COLLABORATORI
// ══════════════════════════════════════════════════════
const COLLABORATORI = {
  'la-redazione': {
    id: 'la-redazione',
    nome: 'Geo-POPlitica',
    cliccabile: false,
    foto: null,
    bio: '',
    siti: [],
    contatti: []
  },
  'alfredo-rossi': {
    id: 'alfredo-rossi',
    nome: 'Alfredo Rossi',
    foto: null,
    bio: 'Giornalista culturale e critico cinematografico. Ha collaborato con diverse testate italiane e internazionali. Appassionato di cinema del Medio Oriente e dell\'Asia centrale.',
    siti: [{ label: 'alfredorossi.it', url: 'https://alfredorossi.it' }],
    contatti: [{ label: '@alfredo_rossi', url: 'https://instagram.com/alfredo_rossi' }]
  },
  'beppe-baci': {
    id: 'beppe-baci',
    nome: 'Beppe Baci',
    foto: null,
    bio: 'Studioso di culture urbane e street art. Viaggiatore seriale, ha documentato scene artistiche in oltre 30 paesi. Scrive di estetica pop e sottoculture.',
    siti: [],
    contatti: [{ label: '@beppebaci', url: 'https://instagram.com/beppebaci' }]
  },
  'carl-camus': {
    id: 'carl-camus',
    nome: 'Carl Camus',
    foto: null,
    bio: 'Musicologo e ricercatore. Si occupa di musica popolare asiatica e delle sue contaminazioni globali. Vive tra Parigi e Taipei.',
    siti: [{ label: 'carlcamus.fr', url: 'https://carlcamus.fr' }],
    contatti: [{ label: '@carlcamus', url: 'https://instagram.com/carlcamus' }]
  },
};

// ══════════════════════════════════════════════════════
// TEMI
// ══════════════════════════════════════════════════════
const TEMI = {
  chiaro: {
    bg: '#f5f0e8', ink: '#0a0a0a', accent: '#e8232a',
    accentAlt: '#00b4d8', border: 'rgba(10,10,10,0.15)',
    tickerBg: '#e8232a',
    logoGeo: '#0a0a0a',      /* GEO- nero su sfondo crema */
    logoLitica: '#0a0a0a'    /* LITICA nero su sfondo crema */
  },
  scuro: {
    bg: '#0a0a0a', ink: '#f5f0e8', accent: '#c41e3a',
    accentAlt: '#2a9d5c', border: 'rgba(245,240,232,0.15)',
    tickerBg: '#c41e3a',
    logoGeo: '#f5f0e8',      /* GEO- bianco su sfondo nero */
    logoLitica: '#f5f0e8'    /* LITICA bianco su sfondo nero */
  }
};

// ══════════════════════════════════════════════════════
// MANIFESTO — testo condiviso tra tutti i numeri
// ══════════════════════════════════════════════════════
const MANIFESTO_HTML = `
  <p><strong>Oltre la mappa dei poteri:</strong> Non guardiamo ai confini come linee di divisione, ma come punti di osservazione. Non ci occupiamo di cronaca dei conflitti, ma di <em>checkpoint</em> culturali.</p>
  <p><strong><s>Soft</s> Solo Power:</strong> Agli Stati la seduzione strategica, a noi l'eros della scoperta. Uno sguardo attento e curioso su colpi di genio e destini comuni: che sia un film d'autore o un mero trend globale, è lì che le persone si riconoscono e si incontrano.</p>
  <p><strong>Il dato an/altropologico:</strong> Non cerchiamo nei popoli <em>il motore della forza</em>; ci appassiona l'energia creativa, la radice comune e le sue ramificazioni.</p>
  <p><strong>La Geo-POPlitica è POP!</strong> Popolare, appartiene ai popoli. È <em>naïf</em>, <em>d'essai</em>, talvolta clandestina. Vogliamo farla emergere, celebrarla.</p>
`;

// ══════════════════════════════════════════════════════
// NUMERI
// ══════════════════════════════════════════════════════
const NUMERI = [

  // ── NUMERO 1 ──────────────────────────────────────
  {
    numero: 1,
    anno: 2026,
    mese: 'Aprile',
    tema: 'chiaro',
    titoloCover: 'Il mondo non è mai stato così <em>complicato.</em><br>Né così interessante.',
    kickerCover: '◆ Copertina — Numero Uno',
    descCover: 'I ponti culturali tra i checkpoint. La nostra bussola per guardare il mondo senza smettere di viverlo.',
    tickerVoci: [
      'Arte come resistenza',
      'La moda di Teheran dopo le sanzioni',
      'K-Pop e diplomazia coreana',
      'Il calcio come soft power',
      'Bollywood tra nazionalismo e globalizzazione',
      'I ponti culturali tra i check point',
    ],
    articoli: [
      {
        id: 'n1-editoriale',
        paese: '🌍 Ovunque',
        categoria: 'Redazione',
        sottocategoria: 'Editoriale',
        autore: 'la-redazione',
        titolo: 'Il mondo non è mai stato così complicato. Né così interessante.',
        anteprima: 'I ponti culturali tra i checkpoint. La nostra bussola per guardare il mondo senza smettere di viverlo.',
        testo: `<p class="art-occhiello">I ponti culturali tra i checkpoint. La nostra bussola per guardare il mondo senza smettere di viverlo.</p>
<p>Questo è un esempio.</p>
`,
        immagine: null
      },
      {
        id: 'cercasi-collaboratori',
        paese: '🌍 Ovunque',
        categoria: 'Redazione',
        sottocategoria: 'Annunci',
        autore: 'la-redazione',
        titolo: 'A.A.A. Cercasi Persone da ogni <i>checkpoint</i>!',
        anteprima: 'Chiamata alle menti, ai sensi, ai cuori.',
        testo: `<p class="art-occhiello">Chiamata alle menti, ai sensi, ai cuori.</p>

<p>Geo-POPlitica nasce come progetto collettivo. Cerchiamo persone che ne condividono l'urgenza e che amano scrivere, fotografare, disegnare, viaggiare e mostrare il proprio sguardo sul mondo.</p>

<p>Parlaci un po' di te, condividi qualcosa di quello che fai tramite un link al tuo sito, blog o account social pubblico (non usare allegati), e facci sapere cosa ti piacerebbe realizzare. C'è un luogo sotto i riflettori dell'attualità che vorresti raccontare dalla tua angolazione?</p>

<p>Abbiamo quattro aree tematiche tra cui muoverci con comodità. Ad esempio:</p>

<p><strong>1. Culture: patrimonio e nuove forme espressive.</strong><br>
Dall'eredità delle grandi tradizioni artistico-culturali alle scene underground globali.<br>
Hai visto qualcosa che ti ha colpito (un film, un concerto, una mostra) e sai perché conta? Questo è il posto giusto.</p>

<p><strong>2. Identità Umane: il volto.</strong><br>
Ritratti d'autore, monografie, interviste: chi i luoghi li abita, li sogna e ci lega a loro.</p>

<p><strong>3. Estetiche: lo stile della strada.</strong><br>
Il "gusto" di un'epoca, il trend del momento, le forme che verranno.<br>
Sei affascinato dal ritorno dei vestiti tradizionali in Cina? Hai catalogato il packaging dei 7-Eleven in Giappone?</p>

<p><strong>4. Visioni dal Mondo: lo sguardo e il luogo.</strong><br>
Racconti, reportage fotografici, diari di viaggio, vite da <em>expat</em>, atmosfere dal mondo. Puoi mescolare i generi ed essere soggettivo.</p>

<p>Collaboriamo per passione e non per compenso, ma ci teniamo a farlo bene. Ci prendiamo il tempo di leggere tutto quello che riceviamo. Se troviamo il posto giusto per un tuo progetto inedito, ti scriviamo.</p>

<p>Scrivici: <a href="mailto:collaborazioni@geo-poplitica.com" class="btn-link" style="display:inline;padding:4px 10px;">collaborazioni@geo-poplitica.com</a></p>`,
        immagine: null
      },
      {
        id: 'iran-kiarostami',
        paese: '🇮🇷 Iran',
        categoria: 'Culture',
        sottocategoria: 'Cinema',
        autore: 'alfredo-rossi',
        titolo: 'Il fiore della poesia iraniana',
        anteprima: 'Abbas Kiarostami è uno dei più grandi poeti del cinema mondiale. "Dov\'è la casa del mio amico?" (1987) — un bambino, un quaderno, una strada di montagna — celebra qualcosa che non ha bisogno di traduzioni: il senso dell\'amicizia.',
        testo: `<p class="art-occhiello">Abbas Kiarostami è uno dei più grandi poeti del cinema mondiale. &quot;Dov'è la casa del mio amico?&quot; (1987) — un bambino, un quaderno, una strada di montagna — celebra qualcosa che non ha bisogno di traduzioni: il senso dell'amicizia.</p>
<p>Questo è un esempio.</p>
`,
        immagine: null
      },
      {
        id: 'russia-moda-underground',
        paese: '🇷🇺 Russia',
        categoria: 'Estetiche',
        sottocategoria: 'Sottoculture',
        autore: 'beppe-baci',
        titolo: 'La moda russa sotto embargo: nasce un underground estetico',
        anteprima: 'Senza Chanel, senza Zara. Come il lusso proibito ha generato una scena fashion clandestina e ferocemente creativa.',
        testo: `<p class="art-occhiello">Senza Chanel, senza Zara. Come il lusso proibito ha generato una scena fashion clandestina e ferocemente creativa.</p>
<p>Questo è un esempio.</p>
`,
        immagine: null
      },
      {
        id: 'cina-hanfu',
        paese: '🇨🇳 Cina',
        categoria: 'Estetiche',
        sottocategoria: 'Trend',
        autore: 'carl-camus',
        titolo: 'Hanfu: il revival del costume antico come soft nationalism',
        anteprima: 'Milioni di giovani cinesi si vestono come l\'antica dinastia Tang. Nostalgia innocente o progetto identitario?',
        testo: `<p class="art-occhiello">Milioni di giovani cinesi si vestono come l'antica dinastia Tang. Nostalgia innocente o progetto identitario?</p>
<p>Questo è un esempio.</p>
`,
        immagine: null
      },
      {
        id: 'brasile-street-art',
        paese: '🇧🇷 Brasile',
        categoria: 'Culture',
        sottocategoria: 'Arte',
        autore: 'beppe-baci',
        titolo: 'Street art ad Avenida Paulista: i muri parlano',
        anteprima: 'Il più grande canvas a cielo aperto del Sudamerica racconta anni di polarizzazione in colori saturi.',
        testo: `<p class="art-occhiello">Il più grande canvas a cielo aperto del Sudamerica racconta anni di polarizzazione in colori saturi.</p>
<p>Questo è un esempio.</p>
`,
        immagine: null
      },
      {
        id: 'ucraina-eurovision',
        paese: '🇺🇦 Ucraina',
        categoria: 'Culture',
        sottocategoria: 'Musica',
        autore: 'carl-camus',
        titolo: 'Eurovision come campo di battaglia simbolico',
        anteprima: 'Kalush Orchestra non era un\'eccezione. Come il pop ucraino è diventato il vettore più potente di cultura dal 2022.',
        testo: `<p class="art-occhiello">Kalush Orchestra non era un'eccezione. Come il pop ucraino è diventato il vettore più potente di cultura dal 2022.</p>
<p>Questo è un esempio.</p>
`,
        immagine: null
      },
      {
        id: 'venezuela-caracas-reportage',
        paese: '🇻🇪 Venezuela',
        categoria: 'Visioni',
        sottocategoria: 'Reportage',
        autore: 'beppe-baci',
        titolo: 'Caracas non dorme. Nemmeno la sua musica.',
        anteprima: 'Un viaggio tra i barrios della capitale venezuelana alla ricerca di quello che nessun telegiornale racconta: la bellezza ostinata di una cultura che non si è mai fermata.',
        testo: `<p class="art-occhiello">Un viaggio tra i barrios della capitale venezuelana alla ricerca di quello che nessun telegiornale racconta: la bellezza ostinata di una cultura che non si è mai fermata.</p>
<div class="reportage">

<div class="r-section-title">I. Questo è un esempio</div>
<p>Questo è un esempio.</p>
<div class="r-foto-dx">
  <div class="r-testo"><p>Questo è un esempio.</p></div>
  <div class="r-foto-col">
    <div class="r-foto-placeholder r-fp-caldo">Questo è un esempio</div>
    <div class="r-foto-caption"><span>Questo è un esempio.</span><span>Foto: Geo-POPlitica</span></div>
  </div>
</div>

<div class="r-section-title">II. Questo è un esempio</div>
<div class="r-nota-margine">
  <span class="r-nota-label">Da sapere</span>
  <p>Questo è un esempio.</p>
</div>
<p>Questo è un esempio.</p>
<div class="r-pullquote">
  <p>Questo è un esempio.</p>
  <cite>— Questo è un esempio</cite>
</div>
<div class="r-foto-sx">
  <div class="r-foto-col">
    <div class="r-foto-placeholder r-fp-scuro">Questo è un esempio</div>
    <div class="r-foto-caption"><span>Questo è un esempio.</span><span>Foto: Geo-POPlitica</span></div>
  </div>
  <div class="r-testo"><p>Questo è un esempio.</p></div>
</div>

<div class="r-section-title">III. Questo è un esempio</div>
<p>Questo è un esempio.</p>
<div class="r-foto-feature">
  <div class="r-foto-placeholder r-fp-scuro" style="height:340px">Questo è un esempio</div>
  <div class="r-foto-overlay">
    <div class="r-overlay-title">Questo è un esempio</div>
    <div class="r-overlay-caption"><span>Questo è un esempio.</span><span>Foto: Geo-POPlitica</span></div>
  </div>
</div>
<p>Questo è un esempio.</p>

<div class="r-section-title">IV. Questo è un esempio</div>
<div class="r-foto-doppia">
  <div class="r-foto-item">
    <div class="r-foto-placeholder r-fp-verde" style="height:200px">Questo è un esempio</div>
    <div class="r-foto-caption"><span>Questo è un esempio.</span><span>Geo-POPlitica</span></div>
  </div>
  <div class="r-foto-item">
    <div class="r-foto-placeholder r-fp-caldo" style="height:200px">Questo è un esempio</div>
    <div class="r-foto-caption"><span>Questo è un esempio.</span><span>Geo-POPlitica</span></div>
  </div>
</div>
<p>Questo è un esempio.</p>

<div class="r-section-title">V. Questo è un esempio</div>
<div class="r-foto-dx">
  <div class="r-testo"><p>Questo è un esempio.</p></div>
  <div class="r-foto-col">
    <div class="r-foto-placeholder r-fp-cielo" style="height:220px">Questo è un esempio</div>
    <div class="r-foto-caption"><span>Questo è un esempio.</span><span>Foto: Geo-POPlitica</span></div>
  </div>
</div>

</div>`,
        immagine: null
      }
    ]
  },

  // ── NUMERO 2 ── (per rimuoverlo: cancella da qui...)
  {
    numero: 2,
    anno: 2026,
    mese: 'Maggio',
    tema: 'scuro',
    titoloCover: 'La stessa radice.<br>Due fiori <em>diversissimi.</em>',
    kickerCover: '◆ Copertina — Numero Due',
    descCover: 'Cina e Taiwan: due culture che condividono la stessa origine e l\'hanno fatta fiorire in direzioni opposte. Non chi ha ragione — ma cosa ha prodotto questa tensione.',
    visualeCover: 'specchio',
    tickerVoci: [
      'Hanfu e identità',
      'Il rap censurato di Pechino',
      'Taipei indie scene',
      'Bubble tea come cultura',
      'Cinema tra due sponde',
      'Edward Yang e la nostalgia',
    ],
    articoli: [
      {
        id: 'n2-editoriale',
        paese: '🌍 Ovunque',
        categoria: 'Redazione',
        sottocategoria: 'Editoriale',
        autore: 'la-redazione',
        titolo: 'La stessa radice. Due fiori diversissimi.',
        anteprima: 'Cina e Taiwan: due culture che condividono la stessa origine e l\'hanno fatta fiorire in direzioni opposte. Non chi ha ragione — ma cosa ha prodotto questa tensione.',
        testo: `<p class="art-occhiello">Cina e Taiwan: due culture che condividono la stessa origine e l'hanno fatta fiorire in direzioni opposte. Non chi ha ragione — ma cosa ha prodotto questa tensione.</p>
<p>Questo è un esempio.</p>
`,
        immagine: null
      },
      {
        id: 'taipei-indie-music',
        paese: '🇹🇼 Taiwan',
        categoria: 'Culture',
        sottocategoria: 'Musica',
        autore: 'carl-camus',
        titolo: 'Taipei indie: la scena che il continente non può copiare',
        anteprima: 'Piccoli club, testi in taiwanese, nessun algoritmo di stato. La musica indipendente di Taipei è forse la più libera dell\'Asia orientale.',
        testo: `<p class="art-occhiello">Piccoli club, testi in taiwanese, nessun algoritmo di stato. La musica indipendente di Taipei è forse la più libera dell'Asia orientale.</p>
<p>Questo è un esempio.</p>
`,
        immagine: null
      },
      {
        id: 'cina-hanfu-n2',
        paese: '🇨🇳 Cina',
        categoria: 'Estetiche',
        sottocategoria: 'Trend',
        autore: 'carl-camus',
        titolo: 'Hanfu: il costume antico come identità pop',
        anteprima: 'Milioni di giovani cinesi si vestono come l\'antica dinastia Tang. Quello che emerge è genuinamente pop — un\'estetica comune che attraversa tutta una generazione.',
        testo: `<p class="art-occhiello">Milioni di giovani cinesi si vestono come l'antica dinastia Tang. Quello che emerge è genuinamente pop — un'estetica comune che attraversa tutta una generazione.</p>
<p>Questo è un esempio.</p>
`,
        immagine: null
      },
      {
        id: 'cina-rap-underground',
        paese: '🇨🇳 Cina',
        categoria: 'Culture',
        sottocategoria: 'Musica',
        autore: 'beppe-baci',
        titolo: 'Il rap censurato di Pechino: esiste e resiste',
        anteprima: 'Distribuito via WeChat, venduto in chiavette USB. La scena hip-hop cinese underground è viva, feroce, e non chiede permesso.',
        testo: `<p class="art-occhiello">Distribuito via WeChat, venduto in chiavette USB. La scena hip-hop cinese underground è viva, feroce, e non chiede permesso.</p>
<p>Questo è un esempio.</p>
`,
        immagine: null
      },
      {
        id: 'taiwan-edward-yang',
        paese: '🇹🇼 Taiwan',
        categoria: 'Culture',
        sottocategoria: 'Cinema',
        autore: 'alfredo-rossi',
        titolo: 'Edward Yang e la malinconia di Taipei',
        anteprima: 'Yi Yi (2000) — tre generazioni, una città che cambia, la domanda più semplice del mondo: perché siamo qui?',
        testo: `<p class="art-occhiello">Yi Yi (2000) — tre generazioni, una città che cambia, la domanda più semplice del mondo: perché siamo qui?</p>
<p>Questo è un esempio.</p>
`,
        immagine: null
      },
      {
        id: 'taiwan-bubble-tea',
        paese: '🇹🇼 Taiwan',
        categoria: 'Estetiche',
        sottocategoria: 'Trend',
        autore: 'alfredo-rossi',
        titolo: 'Bubble tea: come una bevanda diventa cultura globale',
        anteprima: 'Nata a Taipei negli anni \'80, oggi è ovunque. Il bubble tea è forse il più riuscito caso di soft power involontario della storia recente.',
        testo: `<p class="art-occhiello">Nata a Taipei negli anni '80, oggi è ovunque. Il bubble tea è forse il più riuscito caso di soft power involontario della storia recente.</p>
<p>Questo è un esempio.</p>
`,
        immagine: null
      }
    ]
  }
  // ...fino a qui per rimuovere il numero 2)
];
