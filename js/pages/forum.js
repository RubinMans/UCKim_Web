const fmsgs = document.getElementById('forumMsgs');
const fIn = document.getElementById('forumInput');
function sendForumMsg() {
  const v = fIn.value.trim();
  if(!v) return;
  const m = document.createElement('div');
  m.className = 'fmsg user';
  m.innerHTML = `<div class="fmsg-av user">Vous</div><div class="fmsg-body"><div class="name">Maintenant</div><div class="text">${v}</div></div>`;
  fmsgs.appendChild(m);
  fIn.value = '';
  fmsgs.scrollTop = fmsgs.scrollHeight;
  setTimeout(()=>replyForum(v), 1000);
}
function replyForum(q) {
  const r = document.createElement('div');
  r.className = 'fmsg';
  r.innerHTML = `<div class="fmsg-av ai">🤖</div><div class="fmsg-body"><div class="name"><strong>Bot UCKim</strong> · L3 Informatique</div><div class="text">Merci pour ta question : "${q}". Un administrateur ou étudiant te répondra bientôt. L'UCKIM est une communauté d'entraide ! 🌍</div></div>`;
  fmsgs.appendChild(r);
  fmsgs.scrollTop = fmsgs.scrollHeight;
}
