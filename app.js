document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const destino = document.querySelector(link.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('load', () => {
  if (!localStorage.getItem('bienvenida')) {
    alert("🍷 Bienvenido a Casa Marqués. Disfruta tu experiencia.");
    localStorage.setItem('bienvenida', true);
  }
});

const formulario = document.getElementById('formulario');
const fechaInput = formulario.querySelector('input[type="date"]');

fechaInput.min = new Date().toISOString().split("T")[0];

formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = formulario.querySelector('input[type="text"]').value.trim();
  const email = formulario.querySelector('input[type="email"]').value.trim();

  if (!nombre || !email.includes('@')) {
    alert("Por favor ingresa un nombre y un correo válido.");
    return;
  }

  alert("¡Gracias por tu reserva en Casa Marqués!");
  formulario.reset();
});

const visor = document.createElement('div');
visor.id = 'visor';
visor.className = 'hidden';
visor.innerHTML = '<img id="visor-img" src="" alt="">';
document.body.appendChild(visor);

const visorImg = document.getElementById('visor-img');

document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    visor.classList.remove('hidden');
    visorImg.src = img.src;
  });
});

visor.addEventListener('click', () => {
  visor.classList.add('hidden');
});

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const fadeStart = 0;
  const fadeEnd = 300;

  let opacity = 1;

  if (scrollY > fadeStart) {
    opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    if (opacity < 0) opacity = 0;
  }

  hero.style.opacity = opacity;
});
