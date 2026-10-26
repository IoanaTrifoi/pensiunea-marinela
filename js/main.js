// Numărul de WhatsApp la care ajung cererile de rezervare (format internațional, fără +)
const WHATSAPP_NUMBER = '40744404459';

// Meniu mobil
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

// Formular rezervare -> mesaj WhatsApp
const form = document.getElementById('booking-form');
const errorBox = form.querySelector('.form-error');
const checkin = form.elements.checkin;
const checkout = form.elements.checkout;
const today = new Date().toISOString().split('T')[0];
checkin.min = today;
checkout.min = today;
checkin.addEventListener('change', () => {
  checkout.min = checkin.value || today;
  if (checkout.value && checkout.value <= checkin.value) checkout.value = '';
});

const formatDate = value => value.split('-').reverse().join('.');

form.addEventListener('submit', e => {
  e.preventDefault();
  const f = form.elements;
  let error = '';
  if (!f.checkin.value || !f.checkout.value) error = 'Alege datele de check-in și check-out.';
  else if (f.checkout.value <= f.checkin.value) error = 'Data de check-out trebuie să fie după check-in.';
  else if (!f.name.value.trim() || !f.phone.value.trim()) error = 'Completează numele și numărul de telefon.';
  errorBox.hidden = !error;
  errorBox.textContent = error;
  if (error) return;

  const lines = [
    'Bună ziua! Aș dori o rezervare la Pensiunea Marinela.',
    `Check-in: ${formatDate(f.checkin.value)}`,
    `Check-out: ${formatDate(f.checkout.value)}`,
    `Adulți: ${f.adults.value}, copii: ${f.children.value || 0}`,
    `Cameră: ${f.room.value}`,
    `Nume: ${f.name.value.trim()}`,
    `Telefon: ${f.phone.value.trim()}`
  ];
  if (f.message.value.trim()) lines.push(`Mesaj: ${f.message.value.trim()}`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
});

// Lightbox galerie
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', e => {
  e.preventDefault();
  lightboxImg.src = item.href;
  lightboxImg.alt = item.querySelector('img').alt;
  lightbox.hidden = false;
}));
const closeLightbox = () => { lightbox.hidden = true; lightboxImg.src = ''; };
lightbox.addEventListener('click', e => { if (e.target !== lightboxImg) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lightbox.hidden) closeLightbox(); });
