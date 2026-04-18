// ══════════════════════════════════════════════════════
// MOBILE MENU
// ══════════════════════════════════════════════════════
function toggleMobileMenu() {
  const menu = document.getElementById('nav-mobile-menu');
  if (menu) menu.classList.toggle('open');
}
function closeMobileMenu() {
  const menu = document.getElementById('nav-mobile-menu');
  if (menu) menu.classList.remove('open');
}
// Close menu when tapping outside
document.addEventListener('click', (e) => {
  const menu = document.getElementById('nav-mobile-menu');
  if (!menu) return;
  if (!menu.contains(e.target) && !e.target.closest('.nav-hamburger')) {
    menu.classList.remove('open');
  }
});

// ══════════════════════════════════════════════════════
// HISTORY — gestione pulsante indietro browser
// ══════════════════════════════════════════════════════
let _paginaCorrente = 'page-home';
let _temaCorrente   = 'chiaro';

function mostraPagina(id, pushState = true) {
  document.querySelectorAll('.pagina').forEach(p => p.style.display = 'none');
  const pagina = document.getElementById(id);
  if (pagina) {
    pagina.style.display = 'block';
    pagina.classList.add('page-enter');
    setTimeout(() => pagina.classList.remove('page-enter'), 400);
  }
  if (pushState && id !== _paginaCorrente) {
    history.pushState({ pagina: id, tema: _temaCorrente }, '', '');
  }
  _paginaCorrente = id;
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// FIX 12: quando si torna indietro col browser, riapplica il tema corretto
window.addEventListener('popstate', (e) => {
  const stato = e.state || {};
  const id    = stato.pagina || 'page-home';
  const tema  = stato.tema   || 'chiaro';
  applicaTema(tema);
  // Se torniamo alla home, ri-renderizziamo completamente per avere tutto il tema giusto
  if (id === 'page-home') {
    renderHome(false); // false = non fare pushState
  } else {
    mostraPagina(id, false);
  }
});

// ══════════════════════════════════════════════════════
// TEMA
// ══════════════════════════════════════════════════════
function applicaTema(nometema) {
  _temaCorrente = nometema;
  const t = TEMI[nometema] || TEMI.chiaro;
  const r = document.documentElement.style;
  r.setProperty('--bg',         t.bg);
  r.setProperty('--ink',        t.ink);
  r.setProperty('--accent',     t.accent);
  r.setProperty('--accent-alt', t.accentAlt);
  r.setProperty('--border',     t.border);
  document.querySelector('.ticker-wrap').style.background = t.tickerBg;
  document.querySelector('.masthead').style.background = t.bg;
  document.querySelector('footer').style.background    = t.bg;
  // Logo: GEO- e LITICA cambiano colore per tema, POP rimane sempre rosso+glitch
  document.querySelectorAll('.logo-geo,.logo-litica').forEach(el => {
    el.style.color = t.logoGeo;
  });
}

// ══════════════════════════════════════════════════════
// ICONE PAESE
// ══════════════════════════════════════════════════════
const ICONE_PAESE = {
  'n1-editoriale':               '🌍',
  'n2-editoriale':               '🌍',
  'cercasi-collaboratori':       '🌍',
  'iran-kiarostami':             '🇮🇷',
  'russia-moda-underground':     '🇷🇺',
  'cina-hanfu':                  '🇨🇳',
  'brasile-street-art':          '🇧🇷',
  'ucraina-eurovision':          '🇺🇦',
  'venezuela-caracas-reportage': '🇻🇪',
  'taipei-indie-music':          '🇹🇼',
  'cina-hanfu-n2':               '🇨🇳',
  'cina-rap-underground':        '🇨🇳',
  'taiwan-edward-yang':          '🇹🇼',
  'taiwan-bubble-tea':           '🧋',
};

// ══════════════════════════════════════════════════════
// STATISTICHE
// ══════════════════════════════════════════════════════
function statsNumero(numero) {
  const articoliReali = numero.articoli.filter(a => a.categoria !== 'Redazione');
  const paesi = [...new Set(articoliReali.map(a => a.paese))];
  return { paesi: paesi.length, articoli: articoliReali.length };
}

// ══════════════════════════════════════════════════════
// VISUAL COVER
// ══════════════════════════════════════════════════════
function htmlGlobo(num) {
  return `
    <div class="globe-container">
      <div class="globe"></div>
      <div class="globe-ring"></div>
      <div class="globe-ring-2"></div>
    </div>
    <div class="pop-el">POP!</div>
    <div class="pop-el">BREAKING</div>
    <div class="pop-el">TREND →</div>
    <div class="pop-el">Num.0${num}</div>`;
}

function htmlSpecchio() {
  return `
    <div class="mirror-container">
      <div class="orbit"></div>
      <div class="orbit orbit-2"></div>
      <div class="dividing-line"></div>
      <div class="char-left">中</div>
      <div class="char-right">台</div>
      <div class="center-dot"></div>
      <div class="country-label label-cina">Cina 中</div>
      <div class="country-label label-taiwan">台 Taiwan</div>
      <div class="mirror-rect"></div>
    </div>
    <div class="pop-el-dark">分</div>`;
}

function htmlMiniGlobo() {
  return `<div class="mini-globe"></div>`;
}
function htmlMiniSpecchio() {
  return `<div class="mini-specchio">
    <span style="color:#c41e3a;font-size:2rem;font-family:serif;text-shadow:0 0 10px rgba(196,30,58,0.5)">中</span>
    <span style="color:#2a9d5c;font-size:2rem;font-family:serif;text-shadow:0 0 10px rgba(42,157,92,0.5)">台</span>
  </div>`;
}

// ══════════════════════════════════════════════════════
// CARD HTML
// ══════════════════════════════════════════════════════
function cardHTML(a, includiRedazione = false) {
  if (!includiRedazione && a.categoria === 'Redazione') return '';
  const cat    = CATEGORIE[a.categoria] || {};
  const autore = a.autore ? COLLABORATORI[a.autore] : null;
  return `
    <article class="card" onclick="apriArticolo('${a.id}')">
      <div class="card-icon">${ICONE_PAESE[a.id] || '🌍'}</div>
      <div class="card-tags">
        <span class="tag ${cat.colore || ''}">${a.categoria}</span>
        <span class="tag-sub">${a.sottocategoria || ''}</span>
      </div>
      <h3>${a.titolo}</h3>
      <p>${a.anteprima}</p>
      ${autore ? `<span class="card-autore" onclick="event.stopPropagation();apriAutore('${autore.id}')">— ${autore.nome}</span>` : ''}
      <span class="card-link">Leggi →</span>
    </article>`;
}

// ══════════════════════════════════════════════════════
// RENDER CARD GRID con empty state
// ══════════════════════════════════════════════════════
function renderCardGrid(articoli, includiRedazione, scrollToGrid = false) {
  const grid = document.getElementById('card-grid');
  const html  = articoli.map(a => cardHTML(a, includiRedazione)).join('');
  if (!html.trim()) {
    grid.innerHTML = `<div class="empty-state">Nessun articolo disponibile in questa sezione</div>`;
  } else {
    grid.innerHTML = html;
  }
  // Scrolla alla card grid solo se esplicitamente richiesto (filtro sezione)
  if (scrollToGrid) {
    setTimeout(() => {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
}

// ══════════════════════════════════════════════════════
// RENDER HOME
// ══════════════════════════════════════════════════════
function renderHome(pushState = true) {
  const numero = NUMERI[NUMERI.length - 1];
  const numeroPrecedente = NUMERI.length > 1 ? NUMERI[NUMERI.length - 2] : null;
  applicaTema(numero.tema || 'chiaro');

  document.getElementById('numero-info').innerHTML =
    `Anno I — N°${numero.numero}<br>${numero.mese} ${numero.anno}<br><span class="freq-label">Frequenza <br class="freq-br">Randomica</span><br>Gratis`;

  // Ticker
  const voci = [...numero.tickerVoci, ...numero.tickerVoci];
  document.querySelector('.ticker').innerHTML = voci.map(v => `<span>${v}</span>`).join('');

  // Visual cover
  document.getElementById('cover-visual').innerHTML =
    numero.visualeCover === 'specchio' ? htmlSpecchio() : htmlGlobo(numero.numero);

  document.getElementById('cover-kicker').textContent  = numero.kickerCover;
  document.getElementById('cover-headline').innerHTML  = numero.titoloCover;
  document.getElementById('cover-desc').textContent    = numero.descCover;

  // Manifesto
  const mEl = document.getElementById('manifesto-text');
  if (mEl) mEl.innerHTML = MANIFESTO_HTML;

  // Stats
  const stats = statsNumero(numero);
  document.getElementById('stat-paesi').textContent    = stats.paesi;
  document.getElementById('stat-articoli').textContent = stats.articoli;

  // Colonna sinistra
  const colLeft = document.getElementById('col-left');
  colLeft.innerHTML = '';

  if (numeroPrecedente) {
    const editorialePrecedente = numeroPrecedente.articoli.find(a => a.sottocategoria === 'Editoriale') || numeroPrecedente.articoli[0];
    const imgSrc = `immagini/copertina-n${numeroPrecedente.numero}-preview.jpg`;
    const fallback = numeroPrecedente.visualeCover === 'specchio'
      ? `<div class="mini-specchio"><span style="color:#c41e3a;font-size:2rem;font-family:serif;">中</span><span style="color:#2a9d5c;font-size:2rem;font-family:serif;">台</span></div>`
      : `<div class="mini-globe"></div>`;

    colLeft.innerHTML = `
      <div class="prev-numero" onclick="renderArchivio(null, null, ${numeroPrecedente.numero})">
        <div class="prev-numero-label">◀ Nel numero precedente</div>
        <div class="prev-numero-visual">
          <img src="${imgSrc}" alt="Copertina N°${numeroPrecedente.numero}"
               onerror="this.parentNode.innerHTML='${fallback.replace(/'/g,'&apos;').replace(/"/g,'&quot;')}'" >
        </div>
        <div class="prev-numero-info">
          <span class="tag gold">Redazione</span>
          <p class="prev-titolo">${editorialePrecedente ? editorialePrecedente.titolo : ''}</p>
          <p>${editorialePrecedente ? editorialePrecedente.anteprima.substring(0, 120) + '...' : ''}</p>
        </div>
      </div>`;
  } else {
    // Nessun numero precedente — articolo cercasi
    const speciale = numero.articoli.find(a => a.id === 'cercasi-collaboratori');
    if (speciale) {
      colLeft.innerHTML = `
        <div class="side-article" onclick="apriArticolo('cercasi-collaboratori')">
          <span class="tag gold">Redazione</span>
          <h3>${speciale.titolo}</h3>
          <p>${speciale.anteprima}</p>
        </div>`;
    }
  }

  // 3D FIX: rende l'editoriale di copertina cliccabile dalla home
  // Aggiungi click handler al cover-text
  const coverText = document.getElementById('cover-text-wrap');
  if (coverText) {
    const editoriale = numero.articoli.find(a => a.sottocategoria === 'Editoriale');
    if (editoriale) {
      coverText.style.cursor = 'pointer';
      coverText.onclick = () => apriArticolo(editoriale.id);
    }
  }

  // Card grid — no Redazione, no scroll
  renderCardGrid(numero.articoli, false, false);
  aggiornaSezioniBar('Tutti');

  if (pushState) {
    mostraPagina('page-home');
  } else {
    document.querySelectorAll('.pagina').forEach(p => p.style.display = 'none');
    document.getElementById('page-home').style.display = 'block';
    _paginaCorrente = 'page-home';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

// ══════════════════════════════════════════════════════
// SEZIONI BAR
// ══════════════════════════════════════════════════════
function aggiornaSezioniBar(attiva) {
  document.querySelectorAll('.section-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === attiva);
  });
}

function filtraSezione(categoria, el) {
  aggiornaSezioniBar(categoria);
  if (categoria === 'Tutti') {
    const numero = NUMERI[NUMERI.length - 1];
    renderCardGrid(numero.articoli, false, true);
    return;
  }
  const numero   = NUMERI[NUMERI.length - 1];
  const filtered = numero.articoli.filter(a => a.categoria === categoria);
  renderCardGrid(filtered, true, true);
}

// ══════════════════════════════════════════════════════
// APRI ARTICOLO
// ══════════════════════════════════════════════════════
function apriArticolo(id) {
  let articolo = null, numeroRif = null;
  NUMERI.forEach(n => {
    const found = n.articoli.find(a => a.id === id);
    if (found) { articolo = found; numeroRif = n; }
  });
  if (!articolo) return;

  const cat    = CATEGORIE[articolo.categoria] || {};
  const autore = articolo.autore ? COLLABORATORI[articolo.autore] : null;

  // Salva la pagina da cui si apre l'articolo per il tasto indietro
  const paginaProvenienza = _paginaCorrente;

  function tornaIndietro() {
    if (paginaProvenienza === 'page-archivio') {
      // Riapre l'archivio scrollando in cima
      renderArchivio();
    } else {
      // Torna alla home scrollando in cima
      renderHome();
    }
  }

  document.getElementById('articolo-contenuto').innerHTML = `
    <div class="articolo-back" onclick="(${tornaIndietro.toString()})()">← Indietro</div>
    <div class="articolo-meta">
      <span class="tag ${cat.colore || ''}">${articolo.categoria}</span>
      <span class="tag-sub">${articolo.sottocategoria || ''}</span>
      <span class="articolo-paese-label">${articolo.paese} — N°${numeroRif.numero} ${numeroRif.mese} ${numeroRif.anno}</span>
    </div>
    <h1 class="articolo-titolo">${articolo.titolo}</h1>
    <hr class="articolo-divider">
    ${articolo.immagine ? `<img class="articolo-immagine" src="immagini/${articolo.immagine}" alt="${articolo.titolo}">` : ''}
    <div class="articolo-body">${articolo.testo}</div>
    ${autore ? `
    <div class="articolo-firma">
      <hr class="articolo-divider" style="margin-top:32px;">
      <span class="firma-label">Scritto da</span>
      <span class="firma-nome" onclick="apriAutore('${autore.id}')">${autore.nome}</span>
    </div>` : ''}
  `;

  applicaTema('chiaro');
  mostraPagina('page-articolo');
}

// ══════════════════════════════════════════════════════
// ARCHIVIO
// ══════════════════════════════════════════════════════
function renderArchivio(filtroCategoria = null, filtroSotto = null, scrollANumero = null) {
  applicaTema('chiaro');
  const wrap = document.getElementById('archivio-contenuto');
  const catUsate = [...new Set(NUMERI.flatMap(n => n.articoli.map(a => a.categoria)))];
  const ultimoNumero = NUMERI[NUMERI.length - 1];

  let html = `<div class="archivio-wrap">
    <div class="archivio-titolo">Archivio</div>
    <div class="archivio-sub">Tutti i numeri · Tutti gli articoli</div>
    <div class="categorie-bar">
      <button class="cat-btn ${!filtroCategoria ? 'active' : ''}" onclick="renderArchivio(null)">Tutti</button>
      ${catUsate.map(c => {
        const cat = CATEGORIE[c] || {};
        return `<button class="cat-btn ${filtroCategoria===c?'active':''}" onclick="renderArchivio('${c}')">${cat.emoji||''} ${c}</button>`;
      }).join('')}
    </div>`;

  if (filtroCategoria && CATEGORIE[filtroCategoria]) {
    const sottoUsate = [...new Set(
      NUMERI.flatMap(n => n.articoli
        .filter(a => a.categoria === filtroCategoria)
        .map(a => a.sottocategoria)
      ).filter(Boolean)
    )];
    if (sottoUsate.length > 1) {
      html += `<div class="categorie-bar" style="margin-top:-16px">
        <button class="cat-btn ${!filtroSotto?'active':''}" onclick="renderArchivio('${filtroCategoria}',null)">Tutti</button>
        ${sottoUsate.map(s=>`<button class="cat-btn ${filtroSotto===s?'active':''}" onclick="renderArchivio('${filtroCategoria}','${s}')">${s}</button>`).join('')}
      </div>`;
    }
  }

  NUMERI.slice().reverse().forEach(n => {
    let articoliFiltrati = n.articoli;
    if (filtroCategoria) articoliFiltrati = articoliFiltrati.filter(a => a.categoria === filtroCategoria);
    if (filtroSotto)     articoliFiltrati = articoliFiltrati.filter(a => a.sottocategoria === filtroSotto);

    const idSezione = `archivio-numero-${n.numero}`;
    const isUltimo  = n.numero === ultimoNumero.numero;

    const coverLink = isUltimo
      ? `<a class="archivio-cover-link" href="#" onclick="renderHome(); return false;">Apri copertina N°${n.numero} →</a>`
      : `<a class="archivio-cover-link" href="archivio/numero-${n.numero}/index.html" target="_blank">Apri copertina N°${n.numero} →</a>`;

    html += `
      <div class="archivio-numero" id="${idSezione}">
        <div class="archivio-numero-header">
          <span class="archivio-numero-label">N°${n.numero}</span>
          <span class="archivio-numero-data">${n.mese} ${n.anno}</span>
        </div>
        <div class="archivio-cover-link-wrap">${coverLink}</div>
        <div class="archivio-lista">
          ${articoliFiltrati.map(a => {
            const cat    = CATEGORIE[a.categoria] || {};
            const autore = a.autore ? COLLABORATORI[a.autore] : null;
            return `
            <div class="archivio-card" onclick="apriArticolo('${a.id}')">
              <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px;">
                <span class="tag ${cat.colore||''}">${a.categoria}</span>
                <span class="tag-sub">${a.sottocategoria||''}</span>
              </div>
              <h4>${a.titolo}</h4>
              <p>${a.anteprima.substring(0,110)}...</p>
              ${autore ? `<span class="archivio-autore" onclick="event.stopPropagation();apriAutore('${autore.id}')">— ${autore.nome}</span>` : ''}
            </div>`;
          }).join('')}
        </div>
      </div>`;
  });

  html += `</div>`;
  wrap.innerHTML = html;
  mostraPagina('page-archivio');

  // FIX 6: scrolla all'header del numero (N° X / data) non agli articoli
  if (scrollANumero) {
    setTimeout(() => {
      const el = document.getElementById(`archivio-numero-${scrollANumero}`);
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }, 150);
  }
}

// ══════════════════════════════════════════════════════
// PERSONE
// ══════════════════════════════════════════════════════
function renderPersone() {
  applicaTema('chiaro');
  const ordinati = Object.values(COLLABORATORI).sort((a,b) => a.nome.localeCompare(b.nome));
  document.getElementById('team-contenuto').innerHTML = `
    <div class="archivio-wrap">
      <div class="archivio-titolo">Persone</div>
      <div class="archivio-sub">Tutte le persone che scrivono, fotografano e raccontano per Geo-POPlitica</div>
      <div class="team-lista">
        ${ordinati.map(c => `
          <div class="team-card" onclick="apriAutore('${c.id}')">
            <div class="team-avatar">${c.foto
              ? `<img src="immagini/${c.foto}" alt="${c.nome}">`
              : `<div class="team-avatar-placeholder">${c.nome.charAt(0)}</div>`}</div>
            <div class="team-info">
              <div class="team-nome">${c.nome}</div>
              <div class="team-bio-breve">${c.bio.substring(0,100)}...</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
  mostraPagina('page-team');
}

// ══════════════════════════════════════════════════════
// PAGINA AUTORE
// ══════════════════════════════════════════════════════
function apriAutore(id) {
  const autore = COLLABORATORI[id];
  if (!autore) return;
  applicaTema('chiaro');

  const articoliAutore = [];
  NUMERI.forEach(n => {
    n.articoli.forEach(a => {
      if (a.autore === id) articoliAutore.push({ ...a, numeroRif: n });
    });
  });

  document.getElementById('autore-contenuto').innerHTML = `
    <div class="autore-back" onclick="renderPersone()">← Torna alle persone</div>
    <div class="autore-header">
      <div class="autore-foto">
        ${autore.foto
          ? `<img src="immagini/${autore.foto}" alt="${autore.nome}">`
          : `<div class="autore-foto-placeholder">${autore.nome.charAt(0)}</div>`}
      </div>
      <div class="autore-details">
        <h1 class="autore-nome">${autore.nome}</h1>
        <p class="autore-bio">${autore.bio}</p>
        ${autore.siti.length ? `<div class="autore-links"><span class="autore-links-label">Siti:</span>${autore.siti.map(s=>`<a href="${s.url}" target="_blank" class="autore-link">${s.label}</a>`).join('')}</div>` : ''}
        ${autore.contatti.length ? `<div class="autore-links"><span class="autore-links-label">Contatti:</span>${autore.contatti.map(c=>`<a href="${c.url}" target="_blank" class="autore-link">${c.label}</a>`).join('')}</div>` : ''}
      </div>
    </div>
    <hr class="articolo-divider" style="margin:32px 0">
    <div class="autore-articoli-titolo">Articoli pubblicati su Geo-POPlitica</div>
    <div class="archivio-lista" style="margin-top:20px">
      ${articoliAutore.map(a => {
        const cat = CATEGORIE[a.categoria] || {};
        return `
        <div class="archivio-card" onclick="apriArticolo('${a.id}')">
          <div style="display:flex;gap:6px;align-items:center;margin-bottom:6px">
            <span class="tag ${cat.colore||''}">${a.categoria}</span>
            <span class="tag-sub">${a.sottocategoria||''}</span>
          </div>
          <h4>${a.titolo}</h4>
          <p>N°${a.numeroRif.numero} — ${a.numeroRif.mese} ${a.numeroRif.anno}</p>
        </div>`;
      }).join('')}
    </div>
  `;
  mostraPagina('page-autore');
}

// ══════════════════════════════════════════════════════
// INIT — legge anche parametri URL da link esterni (es. archivio N°1)
// ══════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════
// CONTATTI
// ══════════════════════════════════════════════════════
function renderContatti() {
  applicaTema('chiaro');
  document.getElementById('contatti-contenuto').innerHTML = `
    <div class="archivio-wrap">
      <div class="archivio-titolo">Contatti</div>
      <div class="archivio-sub">Scrivici — rispondiamo a tutti</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;max-width:800px;margin-top:8px">
        <div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:0.05em;margin-bottom:12px;color:var(--ink)">Informazioni Generali</div>
          <p style="font-family:'Playfair Display',serif;font-size:1rem;line-height:1.8;color:var(--ink);opacity:0.75;margin-bottom:16px">Per domande sulla rivista, segnalazioni, proposte editoriali o semplicemente per dirci cosa ne pensi.</p>
          <a href="mailto:info@geo-poplitica.com" style="display:inline-block;background:var(--accent);color:white;padding:10px 20px;font-family:'Space Mono',monospace;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;text-decoration:none;transition:background 0.2s" onmouseover="this.style.background='var(--ink)'" onmouseout="this.style.background='var(--accent)'">info@geo-poplitica.com</a>
        </div>
        <div>
          <div style="font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:0.05em;margin-bottom:12px;color:var(--ink)">Collaborazioni</div>
          <p style="font-family:'Playfair Display',serif;font-size:1rem;line-height:1.8;color:var(--ink);opacity:0.75;margin-bottom:16px">Scrivi, fotografa, disegna, viaggi? Siamo sempre alla ricerca di persone con uno sguardo originale da ogni angolo del mondo.</p>
          <a href="mailto:collaborazioni@geo-poplitica.com" style="display:inline-block;background:var(--accent);color:white;padding:10px 20px;font-family:'Space Mono',monospace;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;text-decoration:none;transition:background 0.2s" onmouseover="this.style.background='var(--ink)'" onmouseout="this.style.background='var(--accent)'">collaborazioni@geo-poplitica.com</a>
        </div>
      </div>
    </div>`;
  mostraPagina('page-contatti');
}

// ══════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════
function renderChiSiamo() {
  applicaTema('chiaro');
  const wrap = document.getElementById('chisiamo-contenuto');
  wrap.innerHTML = `
    <div class="archivio-wrap">
      <div class="archivio-titolo">Chi Siamo</div>
      <div class="archivio-sub">La storia, la missione e la visione di Geo-POPlitica</div>
      <div style="max-width:720px;font-family:'Playfair Display',serif;font-size:1.05rem;line-height:1.9;color:var(--ink)">
        <p style="margin-bottom:20px"><em>Questo spazio è riservato alla vostra presentazione.</em></p>
        <p style="margin-bottom:20px;opacity:0.5;font-size:0.95rem">Qui potrete inserire la storia della rivista, le motivazioni che vi hanno spinto a crearla, la vostra visione del mondo e del giornalismo culturale. Un testo che racconti chi siete prima ancora di raccontare il mondo.</p>
        <p style="margin-bottom:20px;opacity:0.5;font-size:0.95rem">Quando sarete pronti, mandatemi il testo e lo inserisco con la formattazione adatta.</p>
      </div>
    </div>`;
  mostraPagina('page-chisiamo');
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const archivioParam = params.get('archivio');
  const paginaParam   = params.get('pagina');
  const personeParam  = params.get('persone');

  if (archivioParam || paginaParam || personeParam) {
    history.replaceState({ pagina: 'page-home', tema: NUMERI[NUMERI.length-1].tema || 'chiaro' }, '', window.location.pathname);
  } else {
    history.replaceState({ pagina: 'page-home', tema: NUMERI[NUMERI.length-1].tema || 'chiaro' }, '', '');
  }

  renderHome(false);

  if (paginaParam === 'cookie') {
    applicaTema('chiaro'); mostraPagina('page-cookie');
  } else if (paginaParam === 'privacy') {
    applicaTema('chiaro'); mostraPagina('page-privacy');
  } else if (personeParam) {
    // Vai direttamente alla pagina autore
    apriAutore(personeParam);
  } else if (archivioParam) {
    if (archivioParam === 'tutti')      renderArchivio();
    else if (archivioParam === 'persone')   renderPersone();
    else if (archivioParam === 'chisiamo')  renderChiSiamo();
    else if (archivioParam === 'contatti')  renderContatti();
    else renderArchivio(archivioParam);
  }
});
