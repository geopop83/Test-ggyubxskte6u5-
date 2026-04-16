// ── NAVIGAZIONE ──
function mostraPagina(id) {
  document.querySelectorAll('.pagina').forEach(p => p.style.display = 'none');
  const pagina = document.getElementById(id);
  if (pagina) {
    pagina.style.display = 'block';
    pagina.classList.add('page-enter');
    setTimeout(() => pagina.classList.remove('page-enter'), 400);
  }
  window.scrollTo(0, 0);
}

// ── HOMEPAGE ──
function renderHome() {
  const numero = NUMERI[NUMERI.length - 1];

  // Aggiorna info numero
  document.getElementById('numero-info').innerHTML =
    `Vol. I — N° ${numero.numero}<br>${numero.mese} ${numero.anno}<br>€6,90`;

  // Colonne laterali — articoli 2, 3 (indici 1,2)
  const colLeft = document.getElementById('col-left');
  colLeft.innerHTML = '';
  [numero.articoli[1], numero.articoli[2]].forEach(a => {
    colLeft.innerHTML += `
      <div class="side-article" onclick="apriArticolo('${a.id}')">
        <span class="tag ${a.categoriaColore || ''}">${a.categoria}</span>
        <h3>${a.titolo}</h3>
        <p>${a.anteprima}</p>
      </div>`;
  });

  // Card grid — tutti e 5 gli articoli
  const grid = document.getElementById('card-grid');
  const icone = { 'iran-kiarostami': '🇮🇷', 'russia-moda-underground': '🇷🇺', 'cina-hanfu': '🇨🇳', 'brasile-street-art': '🇧🇷', 'ucraina-eurovision': '🇺🇦' };
  grid.innerHTML = '';
  numero.articoli.forEach(a => {
    grid.innerHTML += `
      <article class="card" onclick="apriArticolo('${a.id}')">
        <div class="card-icon">${icone[a.id] || '🌍'}</div>
        <span class="tag ${a.categoriaColore || ''}">${a.categoria}</span>
        <h3>${a.titolo}</h3>
        <p>${a.anteprima}</p>
        <span class="card-link">Leggi →</span>
      </article>`;
  });

  mostraPagina('page-home');
}

// ── ARTICOLO ──
function apriArticolo(id) {
  let articolo = null;
  let numeroRif = null;
  NUMERI.forEach(n => {
    const found = n.articoli.find(a => a.id === id);
    if (found) { articolo = found; numeroRif = n; }
  });
  if (!articolo) return;

  const wrap = document.getElementById('articolo-contenuto');
  wrap.innerHTML = `
    <div class="articolo-back" onclick="renderHome()">← Torna alla copertina</div>
    <div class="articolo-paese">${articolo.paese} — ${articolo.categoria} — N°${numeroRif.numero} ${numeroRif.mese} ${numeroRif.anno}</div>
    <h1 class="articolo-titolo">${articolo.titolo}</h1>
    <hr class="articolo-divider">
    ${articolo.immagine ? `<img class="articolo-immagine" src="immagini/${articolo.immagine}" alt="${articolo.titolo}">` : ''}
    <div class="articolo-body">${articolo.testo}</div>
  `;

  mostraPagina('page-articolo');
}

// ── ARCHIVIO ──
function renderArchivio(filtroCategoria = null) {
  const wrap = document.getElementById('archivio-contenuto');
  const categorie = [...new Set(NUMERI.flatMap(n => n.articoli.map(a => a.categoria)))];

  let html = `
    <div class="archivio-wrap">
      <div class="archivio-titolo">Archivio</div>
      <div class="archivio-sub">Tutti i numeri · Tutti gli articoli</div>
      <div class="categorie-bar">
        <button class="cat-btn ${!filtroCategoria ? 'active' : ''}" onclick="renderArchivio(null)">Tutti</button>
        ${categorie.map(c => `<button class="cat-btn ${filtroCategoria === c ? 'active' : ''}" onclick="renderArchivio('${c}')">${c}</button>`).join('')}
      </div>
  `;

  NUMERI.slice().reverse().forEach(n => {
    const articoliFiltrati = filtroCategoria
      ? n.articoli.filter(a => a.categoria === filtroCategoria)
      : n.articoli;
    if (articoliFiltrati.length === 0) return;

    html += `
      <div class="archivio-numero">
        <div class="archivio-numero-header">
          <span class="archivio-numero-label">N° ${n.numero}</span>
          <span class="archivio-numero-data">${n.mese} ${n.anno}</span>
        </div>
        <div class="archivio-lista">
          ${articoliFiltrati.map(a => `
            <div class="archivio-card" onclick="apriArticolo('${a.id}')">
              <span class="tag ${a.categoriaColore || ''}">${a.categoria}</span>
              <h4>${a.titolo}</h4>
              <p>${a.anteprima.substring(0, 100)}...</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  html += `</div>`;
  wrap.innerHTML = html;
  mostraPagina('page-archivio');
}

// ── SEZIONI TAB ──
function filtraSezione(categoria, el) {
  document.querySelectorAll('.section-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  if (categoria === 'Tutti') {
    renderHome();
    return;
  }
  // Filtra le card visibili
  document.querySelectorAll('.card').forEach(card => {
    const tag = card.querySelector('.tag');
    if (tag && tag.textContent.trim() === categoria) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
});
