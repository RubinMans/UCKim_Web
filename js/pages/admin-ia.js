const aiMsgs = document.getElementById('iaMsgs');
const aiIn = document.getElementById('iaInput');
function sendIa() {
  const v = aiIn.value.trim();
  if(!v) return;
  const m = document.createElement('div');
  m.className = 'ia-imsg user';
  m.innerHTML = `<div class="ia-av user">Vous</div><div class="ia-bub">${v}</div>`;
  aiMsgs.appendChild(m);
  aiIn.value = '';
  // Typing indicator
  const typ = document.createElement('div');
  typ.className = 'ia-imsg ai';
  typ.id = 'iaTyping';
  typ.innerHTML = `<div class="ia-av ai">🧠</div><div class="typing-bub"><div class="tdot"></div><div class="tdot"></div><div class="tdot"></div></div>`;
  aiMsgs.appendChild(typ);
  aiMsgs.scrollTop = aiMsgs.scrollHeight;
  setTimeout(() => {
    document.getElementById('iaTyping').remove();
    let rep = "Je suis l'assistant IA de l'UCKIM. Fonctionnalité en version Demo.";
    if (v.toLowerCase().includes("bulletin")) {
      rep = "Génération du bulletin prévisionnel en cours... ✅ Terminée. Voulez-vous que je l'envoie à l'étudiant ?";
    } else if (v.toLowerCase().includes("cotes") && v.toLowerCase().includes("math")) {
      rep = "J'ai détecté des anomalies dans les cotes de 'Mathématiques Générales' (écart-type trop élevé). Souhaitez-vous un rapport analytique ?";
    } else if (v.toLowerCase().includes("emploi") || v.toLowerCase().includes("horaire")) {
      rep = "Je peux optimiser l'emploi du temps des L2 Informatique. J'ai trouvé 2 créneaux libres le jeudi. Planifier le cours d'Algorithmique ?";
    }
    const r = document.createElement('div');
    r.className = 'ia-imsg ai';
    r.innerHTML = `<div class="ia-av ai">🧠</div><div class="ia-bub">${rep}</div>`;
    aiMsgs.appendChild(r);
    aiMsgs.scrollTop = aiMsgs.scrollHeight;
  }, 1500);
}
function setIaTask(txt) {
  aiIn.value = txt;
  sendIa();
}
