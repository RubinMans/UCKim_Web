let inscS = 1;
function nextInsc(s) {
  document.getElementById(`istep${inscS}`).classList.remove('on');
  inscS = s;
  document.getElementById(`istep${inscS}`).classList.add('on');
  document.getElementById('iProg').style.width = (inscS/3)*100 + '%';
}
function prevInsc(s) {
  document.getElementById(`istep${inscS}`).classList.remove('on');
  inscS = s;
  document.getElementById(`istep${inscS}`).classList.add('on');
  document.getElementById('iProg').style.width = (inscS/3)*100 + '%';
}
function finishInsc() {
  const n = document.getElementById('iNom').value;
  const c = document.getElementById('iChoix').value;
  if(!n || c==='0'){alert("Veuillez remplir les champs obligatoires.");return;}
  alert(`Félicitations ${n} ! Ta pré-inscription en ${c} est enregistrée. Vérifie tes emails pour la suite.`);
  nav('accueil');
}
