function renderDomaines() {
  const c = document.getElementById('domainesContainer');
  if (c.children.length > 0) return; // already rendered
  let html = '';
  Object.values(DOMAINES_ESU).forEach(dom => {
    const fCount = Object.keys(dom.filieres).length;
    html += `<div class="domaine-card">
      <div class="domaine-hdr" onclick="toggleDomaine(this)">
        <span class="domaine-emoji">${dom.emoji}</span>
        <div class="domaine-info">
          <h2>${dom.label}</h2>
          <p>${fCount} filière${fCount>1?'s':''} · Licence · Master · Doctorat</p>
        </div>
        <span class="domaine-code">${dom.code}</span>
        <span class="domaine-chev">▼</span>
      </div>
      <div class="domaine-body">
        <div style="padding-top:12px;">`;
    Object.entries(dom.filieres).forEach(([code, f]) => {
      html += `<div class="filiere-item">
        <div class="filiere-hdr" onclick="toggleFiliere(this)">
          <h3>${f.label}</h3>
          <span class="filiere-code-badge">${code}</span>
          <span class="filiere-chev">▼</span>
        </div>
        <div class="filiere-body">
          ${f.parcours.length > 0 ? `
          <div style="font-size:10px;color:var(--muted);margin-bottom:6px;">PARCOURS / SPÉCIALISATIONS</div>
          <div class="parcours-list">
            ${f.parcours.map(p=>`<span class="parcours-tag">✦ ${p}</span>`).join('')}
          </div>` : '<div style="font-size:11px;color:var(--muted);">Filière sans subdivision de parcours</div>'}
          <div class="niveau-badges">
            <span class="niv-badge niv-licence" onclick="showProg('${code}','licence')">🎓 Voir programme Licence</span>
            <span class="niv-badge niv-master" onclick="showProg('${code}','master')">🏅 Voir programme Master</span>
            <span class="niv-badge niv-doctorat" onclick="showProg('${code}','doctorat')">🔬 Voir programme Doctorat</span>
          </div>
        </div>
      </div>`;
    });
    html += `</div></div></div>`;
  });
  c.innerHTML = html;
}

function toggleDomaine(hdr) {
  const body = hdr.nextElementSibling;
  hdr.classList.toggle('open');
  body.classList.toggle('open');
}
function toggleFiliere(hdr) {
  const body = hdr.nextElementSibling;
  hdr.classList.toggle('open');
  body.classList.toggle('open');
}

function showProg(code, tab) {
  // Find first matching filiere in DOMAINES_ESU
  let progCode = code;
  // Map filiere code to PROGRAMMES_LMD code
  const mapping = {SI:'SI',GL:'SI',SA:'SA',DR:'SA',SEG:'SEG',ECON:'SEG',GEST:'SEG',GCA:'SEG',SJPA:'SJPA',SJ:'SJPA',SPO:'SJPA',SPE:'SPE',SE:'SPE',SP:'SPE'};
  progCode = mapping[code] || Object.keys(PROGRAMMES_LMD).find(k=>k===code) || null;
  const prog = progCode ? PROGRAMMES_LMD[progCode] : null;
  const overlay = document.getElementById('progModal');
  if(!prog){overlay.classList.add('open');document.getElementById('progModalTitle').textContent='Programme en cours d\\'élaboration';document.getElementById('progModalSub').textContent='Ce programme sera disponible prochainement.';document.getElementById('progModalBody').innerHTML='';return;}
  const activeTab = tab || 'licence';
  document.getElementById('progModalTitle').textContent = prog.filiere + ' — ' + code;
  document.getElementById('progModalSub').textContent = 'Système LMD · U.C.Kim · ' + (prog.domaine || '');
  window._currentProg = progCode;
  window._currentProgTab = activeTab;
  renderProgTab(progCode, activeTab);
  overlay.classList.add('open');
}

function renderProgTab(code, tab) {
  const prog = PROGRAMMES_LMD[code];
  if (!prog) return;
  const data = prog[tab];
  const tabs = ['licence','master','doctorat'];
  const labels = {licence:'🎓 Licence',master:'🏅 Master',doctorat:'🔬 Doctorat'};
  let html = '<div style="display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap;">';
  tabs.forEach(t => {
    const active = t === tab;
    html += `<button onclick="switchProgTab('${code}','${t}')" id="ptab-${t}" style="padding:6px 14px;border-radius:16px;font-size:10px;cursor:pointer;border:1px solid ${active?'var(--p)':'var(--brd)'};background:${active?'rgba(74,184,255,.15)':'none'};color:${active?'var(--p)':'var(--muted)'};transition:.2s;">${labels[t]}</button>`;
  });
  html += '</div>';
  if (!data) { html += '<div style="color:var(--muted);font-size:12px;">Programme non encore disponible.</div>'; document.getElementById('progModalBody').innerHTML = html; return; }
  if (data.semestres) {
    data.semestres.forEach(sem => {
      html += `<div class="prog-sem"><div class="prog-sem-hdr"><strong style="font-family:'Space Mono',monospace;font-size:10px;color:var(--p);">${sem.sem}</strong><span style="font-size:10px;color:var(--muted);">${sem.ues.reduce((s,u)=>s+u.cr,0)} crédits</span></div><div style="padding:10px 14px;">`;
      sem.ues.forEach(ue => {
        html += `<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(74,184,255,.05);font-size:11px;"><span>${ue.nom}</span><span style="font-family:'Space Mono',monospace;font-size:10px;color:var(--gold);">${ue.cr} cr</span></div>`;
      });
      html += '</div></div>';
    });
  }
  document.getElementById('progModalBody').innerHTML = html;
}

function switchProgTab(code, tab) {
  window._currentProgTab = tab;
  renderProgTab(code, tab);
}

function closeProgModal(e) {
  if (e.target.id === 'progModal') document.getElementById('progModal').classList.remove('open');
}
