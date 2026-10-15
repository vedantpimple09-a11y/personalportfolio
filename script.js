(() => {
  const loader = document.querySelector('.loader');
  if (loader) window.addEventListener('load', () => setTimeout(() => loader.classList.add('done'), 450));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Toggle menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
    }));
  }
  const form = document.querySelector('#contact-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const project = String(data.get('project') || '').trim();
    const message = String(data.get('message') || '').trim();
    const subject = encodeURIComponent(`Vedantstudiio project enquiry — ${project}`);
    const body = encodeURIComponent(`Hi Vedant,\n\nMy name is ${name}.\nEmail: ${email}\nProject type: ${project}\n\nAbout the idea:\n${message}\n\nSent via the Vedantstudiio portfolio.`);
    const feedback = document.querySelector('#form-feedback');
    if (feedback) feedback.textContent = 'Opening your email app to vcryptofficial01@gmail.com… If it does not open, email me directly at vcryptofficial01@gmail.com.';
    window.location.href = `mailto:vcryptofficial01@gmail.com?subject=${subject}&body=${body}`;
  });
  // Small reveal motion, with a no-motion fallback for accessibility.
  const items = document.querySelectorAll('.project-card,.work-detail,.lab-item,.note-card,.intro-grid,.about-story,.service-row');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), {threshold: 0.08});
    items.forEach(item => { item.classList.add('reveal'); observer.observe(item); });
  }
})();
