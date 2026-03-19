// NAVIGATION GLOBALE
function nav(pId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
  document.getElementById('page-' + pId).classList.add('on');
  document.querySelectorAll('.npill').forEach(n => n.classList.remove('on'));
  const btn = document.getElementById('n-' + pId);
  if(btn) btn.classList.add('on');
  
  // Specific initializations for pages
  if(pId === 'facultes') renderDomaines();
}

// ANIMATION FOND PARTICULES SIMPLES (CANVAS)
const canvas = document.getElementById('cvs');
const ctx = canvas.getContext('2d');
let w, h, particles = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
  constructor() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.r = Math.random() * 2 + 0.5;
    this.dx = (Math.random() - 0.5) * 0.5;
    this.dy = (Math.random() - 0.5) * 0.5;
    this.alpha = Math.random() * 0.5 + 0.1;
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
    if(this.x < 0 || this.x > w) this.dx = -this.dx;
    if(this.y < 0 || this.y > h) this.dy = -this.dy;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.fillStyle = \`rgba(74, 184, 255, \${this.alpha})\`;
    ctx.fill();
  }
}

for(let i=0; i<60; i++) particles.push(new Particle());

function animate() {
  ctx.clearRect(0,0,w,h);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
animate();

// Initialize the home page on load
document.addEventListener('DOMContentLoaded', () => {
    nav('accueil');
});
