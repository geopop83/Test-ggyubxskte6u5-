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
<p>Il mondo non è mai stato così complicato. Né così interessante.</p>
<p>Partiamo da questa contraddizione — e ne facciamo la nostra bussola. Geo-POPlitica nasce per chi vuole capire il mondo senza smettere di viverlo. Per chi crede che un film, un abito, una canzone, un murales possano dire più di mille analisi geopolitiche.</p>
<p>Il nostro scopo è mostrare la vasta gamma di sfumature del mondo alla luce degli eventi moderni — i ponti culturali tra i check point. Non prendiamo posizione sui conflitti. Non giudichiamo i governi. Usiamo gli eventi come fonte di luce per far emergere quello che esiste da sempre: la creatività dei popoli, la loro bellezza, la loro irriducibile umanità.</p>
<p>In questo primo numero troverete cinema iraniano e moda clandestina russa, street art brasiliana e pop ucraino, costume cinese e resistenza culturale. Cinque paesi, cinque storie, una sola radice.</p>
<p>È POP. È popolare. Appartiene a tutti.</p>
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
Sei interessato al ritorno dei vestiti tradizionali in Cina? Hai catalogato il packaging dei 7-Eleven in Giappone?</p>

<p><strong>4. Visioni dal Mondo: lo sguardo e il luogo.</strong><br>
Racconti in prosa, reportage fotografici, atmosfere dal mondo. Puoi mescolare i generi ed essere soggettivo.</p>

<p><em>Le categorie sono confini che si mescolano tra loro, non sentirti in gabbia.</em></p>

<p>Collaboriamo per passione e non per compenso, ma ci teniamo a farlo bene. Ci prendiamo il tempo di leggere tutto quello che riceviamo. Se tra di noi è colpo di fulmine, ti contatteremo.</p>

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
<p>Abbas Kiarostami è uno dei più grandi poeti del cinema mondiale. <em>Dov'è la casa del mio amico?</em> (1987) è un film che si porta dentro senza sforzo.</p>
<p>Un bambino ha preso per errore il quaderno del compagno di banco. Sa che se l'altro si presenta a scuola senza quaderno verrà bocciato. Decide di restituirglielo. La strada è lunga, gli adulti non ascoltano, il sole tramonta.</p>
<p>Non c'è nessun messaggio politico esplicito. C'è un bambino che vuole bene al suo amico. È quella semplicità che commuove — e che non ha bisogno di traduzioni.</p>
<p>Kiarostami appartiene alla grande tradizione poetica iraniana — quella di Hafez, di Rumi, di Sa'di — trasportata sullo schermo con una leggerezza che sembra facile e non lo è per niente.</p>
<p><strong>Il film è disponibile gratuitamente su YouTube.</strong></p>
<p><a href="https://youtu.be/5E9ImxdOz7s?is=X2TMFHY0qnOfWMDX" target="_blank" class="btn-link">▶ Guarda su YouTube →</a></p>`,
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
<p>Quando i grandi marchi occidentali hanno chiuso i battenti in Russia, qualcosa di inaspettato è successo: non il vuoto, ma la creatività.</p>
<p>Una generazione di stilisti russi, costretta a reinventarsi senza riferimenti internazionali, ha iniziato a guardare dentro — al folklore, all'avanguardia sovietica, alle nonne dei villaggi.</p>
<p>Il risultato è una scena fashion clandestina, distribuita via Telegram, venduta in appartamenti privati, fotografata in cortili di Mosca e San Pietroburgo. Nessun negozio. Nessuna sfilata ufficiale. Solo il passaparola e un'estetica feroce.</p>
<p>È pop nel senso più vero del termine — appartiene al popolo, nasce dalla strada, non chiede permesso.</p>`,
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
<p>Nelle strade di Chengdu, Xi'an, Pechino, sempre più spesso si vedono ragazze con abiti di seta ricamata, maniche ampie, acconciature elaborate. Non sono figuranti di un museo — sono TikToker, studenti universitari, impiegati nel giorno libero.</p>
<p>L'Hanfu — il costume tradizionale delle etnie Han — è diventato un fenomeno di massa. Community online con milioni di iscritti, festival, negozi dedicati, tutorial di make-up in stile Tang.</p>
<p>Quello che emerge — e che ci interessa — è qualcosa di genuinamente pop — milioni di persone che si riconoscono in un'estetica comune.</p>`,
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
<p>Avenida Paulista è il chilometro più denso del Brasile — banche, musei, manifestazioni, McDonald's, tutto insieme. E sui suoi muri, la storia recente del paese si racconta in colori acrilici.</p>
<p>I graffiti brasiliani non sono decorazione — sono archivio. Ogni strato di pittura copre il precedente ma non lo cancella del tutto.</p>
<p>Il Brasile ha moltissimo da dire.</p>`,
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
<p>Nel maggio 2022, tre mesi dopo l'inizio dell'invasione su larga scala, la Kalush Orchestra saliva sul palco di Eurovision con un mix di hip-hop e musica folk ucraina. Vincevano con un margine storico.</p>
<p>Da allora il fenomeno non si è fermato. Artisti ucraini cantano in ucraino dove prima cantavano in russo. La lingua è diventata atto culturale prima ancora che politico.</p>
<p>La cultura non aspetta la pace per esistere. Spesso è esattamente il contrario.</p>`,
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
        testo: `
<div class="reportage">

<p class="art-occhiello">Un viaggio tra i barrios della capitale venezuelana alla ricerca di quello che nessun telegiornale racconta: la bellezza ostinata di una cultura che non si è mai fermata.</p>

<div class="r-section-title">I. L'arrivo</div>

<p>L'aereo atterra a Maiquetía alle tre di pomeriggio, quando il caldo è già una presenza fisica. L'aeroporto Simon Bolívar è un brulichio di carrelli, valigie tirate con lo spago, bambini che dormono sulle spalle dei padri. Fuori, Caracas aspetta in fondo alla montagna.</p>

<div class="r-foto-dx">
  <div class="r-testo">
    <p>La strada che scende verso la città è una delle più cinematografiche del continente — tunnel, curve cieche, il mare azzurro che scompare alle spalle mentre davanti emergono i blocchi grigi del barrio La Vega, abbarbicati alla collina come se la gravità fosse solo un consiglio.</p>
    <p>Il mio taxista si chiama Ramón. Guida da trent'anni. "Caracas è come un bolero," dice, "devi conoscerne il ritmo o ti perdi."</p>
  </div>
  <div class="r-foto-col">
    <div class="r-foto-placeholder r-fp-caldo">foto: ramón al volante, caracas attraverso il finestrino</div>
    <div class="r-foto-caption"><span>Ramón, tassista da trent'anni.</span><span>Foto: B. Baci</span></div>
  </div>
</div>

<div class="r-section-title">II. Il Sistema</div>

<div class="r-nota-margine">
  <span class="r-nota-label">Da sapere</span>
  <p>El Sistema fu fondato nel 1975 da José Antonio Abreu con undici bambini in un garage. Oggi conta oltre 400.000 allievi in tutto il Venezuela.</p>
</div>

<p>Ogni venezolano lo conosce. Il Sistema — il programma di orchestre giovanili fondato da José Antonio Abreu nel 1975 — è probabilmente la più grande storia di riscatto culturale del Novecento. Trecentomila bambini, centinaia di orchestre, sparsi in tutto il paese. Gustavo Dudamel è il suo figlio più famoso.</p>
<p>Ma quello che i giornali non raccontano è che il Sistema non si è mai fermato. Neanche durante le crisi più dure, neanche quando gli stipendi degli insegnanti valevano meno di un caffè.</p>

<div class="r-pullquote">
  <p>Non suoniamo perché le cose vanno bene. Suoniamo perché le cose devono andare bene.</p>
  <cite>— Maestro Luis Rodrigo, nucleo di Petare</cite>
</div>

<div class="r-foto-sx">
  <div class="r-foto-col">
    <div class="r-foto-placeholder r-fp-scuro">foto: sala prove petare — bambini con violini</div>
    <div class="r-foto-caption"><span>Nucleo di Petare, sala prove.</span><span>Foto: B. Baci</span></div>
  </div>
  <div class="r-testo">
    <p>María José ha dodici anni e suona la viola nell'orchestra del nucleo di Petare — il barrio più grande di Caracas. Me la presentano in una sala prove che odora di umidità e resina.</p>
    <p>Fuori, la città rumoreggia. Dentro, lei suona uno studio di Bartók con una concentrazione che fa quasi paura.</p>
  </div>
</div>

<div class="r-section-title">III. Salsa, joropo e trap</div>

<p>La notte a Caracas ha una sua logica. Il centro storico si svuota presto, ma i barrios si animano dopo le dieci. In una plaza di Chacao, un sound system spara reggaeton a volume industriale. A cento metri, una band suona joropo con un basso elettrico e una drum machine.</p>

<div class="r-foto-feature">
  <div class="r-foto-placeholder r-fp-scuro" style="height:340px">foto: sessione notturna a chacao — musicisti, luci, movimento</div>
  <div class="r-foto-overlay">
    <div class="r-overlay-title">La notte di Chacao: il joropo incontra l'elettronica</div>
    <div class="r-overlay-caption"><span>Plaza Altamira, Chacao. Ore 23:00.</span><span>Foto: B. Baci</span></div>
  </div>
</div>

<p>Questa è la cosa che stupisce di Caracas: non la crisi, che è reale e devastante, ma la capacità di tenere insieme mondi che altrove starebbero a distanza siderale. La tradizione e il moderno. Il colto e il popolare. Il lutto e la festa.</p>

<div class="r-section-title">IV. I murales di Caracas</div>

<div class="r-foto-doppia">
  <div class="r-foto-item">
    <div class="r-foto-placeholder r-fp-verde" style="height:200px">foto: murale di san agustín</div>
    <div class="r-foto-caption"><span>Murale di San Agustín. Autore anonimo.</span><span>B. Baci</span></div>
  </div>
  <div class="r-foto-item">
    <div class="r-foto-placeholder r-fp-caldo" style="height:200px">foto: dettaglio murale — volti e mani</div>
    <div class="r-foto-caption"><span>Dettaglio. Pennellate larghe, colori saturi.</span><span>B. Baci</span></div>
  </div>
</div>

<p>In un vicolo di San Agustín, un murale lungo venti metri raffigura una festa: tamburi, danza, cibo, bambini che corrono. È bello in modo disarmante. Chi l'ha dipinto non ha lasciato il nome. Non importa — il quartiere è il suo nome.</p>

<div class="r-section-title">V. La partenza</div>

<div class="r-foto-dx">
  <div class="r-testo">
    <p>Quando riparto, all'alba, la città è già sveglia. Un fruttivendolo sistema le sue manghe in piramide perfetta. Dalla finestra aperta di un palazzo, qualcuno suona la tromba.</p>
    <p>Non so se suona per mestiere, per gioia, per abitudine o per necessità. Probabilmente tutte e quattro le cose insieme.</p>
    <p>Caracas non dorme. E la sua musica nemmeno.</p>
  </div>
  <div class="r-foto-col">
    <div class="r-foto-placeholder r-fp-cielo" style="height:220px">foto: alba su caracas — fruttivendolo, luce bassa</div>
    <div class="r-foto-caption"><span>Alba su Caracas. Ore 5:40.</span><span>Foto: B. Baci</span></div>
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
<p>Due caratteri. Una linea di mezzo. Un punto di luce al centro.</p>
<p>中 — Zhōng. Il carattere della Cina. Letteralmente "paese di mezzo", "terra centrale". Un nome che dice tutto su come una civiltà vede se stessa nel mondo.</p>
<p>台 — Tái. L'abbreviazione di Taiwan, 台灣. Due sillabe che contengono decenni di storia non risolta.</p>
<p>Questo numero non prende posizione su quella storia. La usa come fonte di luce — esattamente come facciamo sempre — per far emergere quello che esiste da sempre, indipendentemente da chi governa e da quali confini tracciano le mappe: la creatività, la bellezza, l'identità di due culture che condividono una radice e l'hanno fatta fiorire in direzioni diversissime.</p>
<p>Troverete musica indie di Taipei e rap clandestino di Pechino. Troverete il cinema di Edward Yang e la filosofia pop del bubble tea. Troverete l'Hanfu — milioni di giovani cinesi che si rivestono di dinastia Tang.</p>
<p>La stessa radice. Due fiori diversissimi. Entrambi bellissimi.</p>
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
<p>Taipei ha una scena musicale indie che non somiglia a nessun'altra in Asia. Piccoli club nel distretto di Da'an, etichette indipendenti, testi in taiwanese.</p>
<p>La libertà qui non è una posa. È strutturale. E si sente in ogni canzone.</p>`,
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
<p>Il fenomeno Hanfu non si ferma. Cresce, si ramifica, si globalizza. Su TikTok i video in costume Tang raccolgono decine di milioni di visualizzazioni.</p>
<p>Quello che ci interessa non è la dimensione politica — è l'energia creativa. Milioni di persone che cercano un'estetica in cui riconoscersi. È pop nel senso più puro.</p>`,
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
<p>Esiste una scena rap cinese che non vedrete mai su Douyin. Si distribuisce via WeChat, si vende in chiavette USB fuori dai concerti.</p>
<p>È clandestina non per scelta romantica ma per necessità. E proprio per questo è tra le più interessanti del mondo.</p>`,
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
<p><em>Yi Yi</em> dura quasi tre ore. Non ne senti una. Edward Yang ti porta dentro una famiglia di Taipei negli anni '90 con una delicatezza che non dimentichi.</p>
<p>Il bambino della famiglia, Yang-Yang, fotografa la nuca delle persone. Vuole mostrar loro quello che non riescono a vedere da soli. È la definizione più bella che conosca di cosa fa il cinema.</p>`,
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
<p>Nessuno ha pianificato il successo globale del bubble tea. È partito da un mercato di Taichung negli anni '80, è diventato il simbolo di una generazione, poi di un'intera cultura.</p>
<p>Oggi ci sono più bubble tea shop che McDonald's in molte città europee. È pop nel senso più letterale.</p>`,
        immagine: null
      }
    ]
  }
  // ...fino a qui per rimuovere il numero 2)
];
