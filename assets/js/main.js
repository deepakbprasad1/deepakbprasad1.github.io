// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => { if (e.target.tagName === 'A') nav.classList.remove('open'); });

// Highlight current section in nav
const links = [...document.querySelectorAll('.nav a[href^="#"]')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => observer.observe(s));

// Lightbox for photos and certificates
const lb = document.querySelector('.lightbox');
const lbImg = lb.querySelector('img');
const lbCap = lb.querySelector('.lb-cap');
const lbPdf = lb.querySelector('.lb-pdf');
document.querySelectorAll('[data-full]').forEach(el => {
  el.addEventListener('click', () => {
    lbImg.src = el.dataset.full;
    const cap = el.querySelector('span')?.textContent || '';
    lbImg.alt = cap;
    lbCap.textContent = cap;
    if (el.dataset.pdf) { lbPdf.href = el.dataset.pdf; lbPdf.hidden = false; } else { lbPdf.hidden = true; }
    lb.showModal();
  });
});
lb.querySelector('.lb-close').addEventListener('click', () => lb.close());
lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });

// Certificate filters
const chips = document.querySelectorAll('.chip');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.toggle('is-on', c === chip));
  const f = chip.dataset.filter;
  document.querySelectorAll('.cert').forEach(c => { c.hidden = f !== 'all' && c.dataset.cat !== f; });
}));

// Play videos only while visible (saves bandwidth and CPU)
const vObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    const v = en.target;
    if (en.isIntersecting) { v.preload = 'auto'; v.play().catch(() => {}); } else { v.pause(); }
  });
}, { threshold: 0.4 });
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('video').forEach(v => vObs.observe(v));
}

document.getElementById('year').textContent = new Date().getFullYear();
