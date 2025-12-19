// Creazione dell'IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// Seleziona tutti gli h1, h2, p
const elementi = document.querySelectorAll('h1, h2, p, div.pulsanti');

// Animazione con ritardo progressivo
elementi.forEach((el, i) => {
    el.classList.add('slide-in');
    el.style.transitionDelay = `${i * 0.2 + 0}s`; // 0s di ritardo iniziale
    observer.observe(el);
});
