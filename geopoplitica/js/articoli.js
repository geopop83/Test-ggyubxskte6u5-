const NUMERI = [
  {
    numero: 1,
    anno: 2026,
    mese: "Aprile",
    titolo: "Il mondo non è mai stato così complicato. Né così interessante.",
    articoli: [
      {
        id: "iran-kiarostami",
        paese: "🇮🇷 Iran",
        categoria: "Cinema",
        categoriaColore: "red",
        titolo: "Il fiore della poesia iraniana",
        anteprima: "Abbas Kiarostami è uno dei più grandi poeti del cinema mondiale. \"Dov'è la casa del mio amico?\" (1987) — un bambino, un quaderno, una strada di montagna — celebra qualcosa che non ha bisogno di traduzioni: il senso dell'amicizia.",
        testo: `<p>Abbas Kiarostami è uno dei più grandi poeti del cinema mondiale. <em>Dov'è la casa del mio amico?</em> (1987) è un film che si porta dentro senza sforzo.</p>
        <p>Un bambino ha preso per errore il quaderno del compagno di banco. Sa che se l'altro si presenta a scuola senza quaderno verrà bocciato. Decide di restituirglielo. La strada è lunga, gli adulti non ascoltano, il sole tramonta.</p>
        <p>Non c'è nessun messaggio politico esplicito. C'è un bambino che vuole bene al suo amico. È quella semplicità che commuove — e che non ha bisogno di traduzioni.</p>
        <p>Kiarostami appartiene alla grande tradizione poetica iraniana — quella di Hafez, di Rumi, di Sa'di — trasportata sullo schermo con una leggerezza che sembra facile e non lo è per niente.</p>
        <p><strong>Il film è disponibile gratuitamente su YouTube.</strong></p>
        <p><a href="https://youtu.be/5E9ImxdOz7s?is=X2TMFHY0qnOfWMDX" target="_blank" class="btn-link">▶ Guarda su YouTube →</a></p>`,
        link: "https://youtu.be/5E9ImxdOz7s?is=X2TMFHY0qnOfWMDX",
        linkLabel: "Guarda su YouTube →",
        immagine: null
      },
      {
        id: "russia-moda-underground",
        paese: "🇷🇺 Russia",
        categoria: "Moda",
        categoriaColore: "default",
        titolo: "La moda russa sotto embargo: nasce un underground estetico",
        anteprima: "Senza Chanel, senza Zara. Come il lusso proibito ha generato una scena fashion clandestina e ferocemente creativa.",
        testo: `<p>Quando i grandi marchi occidentali hanno chiuso i battenti in Russia, qualcosa di inaspettato è successo: non il vuoto, ma la creatività.</p>
        <p>Una generazione di stilisti russi, costretta a reinventarsi senza riferimenti internazionali, ha iniziato a guardare dentro — al folklore, all'avanguardia sovietica, alle nonne dei villaggi.</p>
        <p>Il risultato è una scena fashion clandestina, distribuita via Telegram, venduta in appartamenti privati, fotografata in cortili di Mosca e San Pietroburgo. Nessun negozio. Nessuna sfilata ufficiale. Solo il passaparola e un'estetica feroce.</p>
        <p>È pop nel senso più vero del termine — appartiene al popolo, nasce dalla strada, non chiede permesso.</p>`,
        immagine: null
      },
      {
        id: "cina-hanfu",
        paese: "🇨🇳 Cina",
        categoria: "Cultura",
        categoriaColore: "red",
        titolo: "Hanfu: il revival del costume antico come soft nationalism",
        anteprima: "Milioni di giovani cinesi si vestono come l'antica dinastia Tang. Nostalgia innocente o progetto identitario?",
        testo: `<p>Nelle strade di Chengdu, Xi'an, Pechino, sempre più spesso si vedono ragazze con abiti di seta ricamata, maniche ampie, acconciature elaborate. Non sono figuranti di un museo — sono TikToker, studenti universitari, impiegati nel giorno libero.</p>
        <p>L'Hanfu — il costume tradizionale delle etnie Han — è diventato un fenomeno di massa. Community online con milioni di iscritti, festival, negozi dedicati, tutorial di make-up in stile Tang.</p>
        <p>La domanda che ci facciamo non è se sia bello — lo è, innegabilmente. La domanda è cosa significa quando un paese di 1,4 miliardi di persone decide di riscoprire simultaneamente lo stesso vestito.</p>
        <p>Nostalgia? Identità? Politica culturale? Probabilmente tutte e tre. E probabilmente non importa, perché quello che emerge è qualcosa di genuinamente pop — milioni di persone che si riconoscono in un'estetica comune.</p>`,
        immagine: null
      },
      {
        id: "brasile-street-art",
        paese: "🇧🇷 Brasile",
        categoria: "Arte",
        categoriaColore: "cyan",
        titolo: "Street art ad Avenida Paulista: i muri parlano",
        anteprima: "Il più grande canvas a cielo aperto del Sudamerica racconta anni di polarizzazione in colori saturi.",
        testo: `<p>Avenida Paulista è il chilometro più denso del Brasile — banche, musei, manifestazioni, McDonald's, tutto insieme. E sui suoi muri, la storia recente del paese si racconta in colori acrilici.</p>
        <p>I graffiti brasiliani non sono decorazione — sono archivio. Ogni strato di pittura copre il precedente ma non lo cancella del tutto. Graffiando con le unghie trovi anni di voci sovrapposte.</p>
        <p>Quello che colpisce non è la presa di posizione — ogni writer ha la sua — ma la vitalità. La quantità di energia creativa che un paese mette sui suoi muri è proporzionale a quanto ha da dire.</p>
        <p>Il Brasile ha moltissimo da dire.</p>`,
        immagine: null
      },
      {
        id: "ucraina-eurovision",
        paese: "🇺🇦 Ucraina",
        categoria: "Musica",
        categoriaColore: "gold",
        titolo: "Eurovision come campo di battaglia simbolico",
        anteprima: "Kalush Orchestra non era un'eccezione. Come il pop ucraino è diventato il vettore più potente di cultura dal 2022.",
        testo: `<p>Nel maggio 2022, tre mesi dopo l'inizio dell'invasione su larga scala, la Kalush Orchestra saliva sul palco di Eurovision con un mix di hip-hop e musica folk ucraina. Vincevano con un margine storico, grazie al televoto popolare.</p>
        <p>Era pop nel senso più letterale — musica del popolo, votata dal popolo. Ma era anche qualcosa di più: un documento culturale in tempo reale.</p>
        <p>Da allora il fenomeno non si è fermato. Artisti ucraini cantano in ucraino dove prima cantavano in russo. La lingua è diventata atto culturale prima ancora che politico.</p>
        <p>Quello che emerge — e che ci interessa — è la vitalità. La cultura non aspetta la pace per esistere. Spesso è esattamente il contrario.</p>`,
        immagine: null
      }
    ]
  }
];
