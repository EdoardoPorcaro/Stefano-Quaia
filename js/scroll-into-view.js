// Creazione dell'IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entry.target.style.transitionDelay = entry.target.dataset.delay;
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// Seleziona tutti gli elementi da animare: h1, h2, p e div.pulsanti
const elementi = document.querySelectorAll('h1, h2, p, div.pulsanti');

// Animazione con ritardo progressivo
elementi.forEach((el, i) => {
    el.classList.add('slide-in');
    el.style.transitionDelay = '0s'; // Diventa trasparente subito
    el.dataset.delay = `${i * 0.2}s`; // Ritardo progressivo per apparire
    observer.observe(el);
});
