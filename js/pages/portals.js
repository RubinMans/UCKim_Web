// STUDENT PORTAL
function loginEtudiant() {
  document.getElementById('page-login-etudiant').classList.remove('on');
  document.getElementById('page-portail-etudiant').classList.add('on');
}
function navPortal(id, el) {
  document.querySelectorAll('.portal-section').forEach(s=>s.classList.remove('on'));
  document.getElementById(id).classList.add('on');
  document.querySelectorAll('.portal-nav-item').forEach(i=>i.classList.remove('on'));
  el.classList.add('on');
}

// TEACHER PORTAL
function loginEnseignant() {
  document.getElementById('page-login-enseignant').classList.remove('on');
  document.getElementById('page-portail-enseignant').classList.add('on');
}
function tNav(id, el) {
  document.querySelectorAll('.teacher-section').forEach(s=>s.classList.remove('on'));
  document.getElementById(id).classList.add('on');
  document.querySelectorAll('.teacher-nav-item').forEach(i=>i.classList.remove('on'));
  el.classList.add('on');
}

// ADMIN PORTAL
function loginAdmin() {
  document.getElementById('page-login-admin').classList.remove('on');
  document.getElementById('page-portail-admin').classList.add('on');
}
function aNav(id, el) {
  document.querySelectorAll('.admin-section').forEach(s=>s.classList.remove('on'));
  document.getElementById(id).classList.add('on');
  document.querySelectorAll('.admin-nav-item').forEach(i=>i.classList.remove('on'));
  el.classList.add('on');
}

// LERNEN
function learnNav(id, el) {
  document.querySelectorAll('.learn-section').forEach(s=>s.classList.remove('on'));
  document.getElementById(id).classList.add('on');
  document.querySelectorAll('.admin-nav-item').forEach(i=>i.classList.remove('on'));
  el.classList.add('on');
}
