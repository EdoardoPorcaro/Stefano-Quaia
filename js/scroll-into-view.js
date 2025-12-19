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
const textElements = document.querySelectorAll('h1, h2, p');

// Seleziona tutti i pulsanti a
const buttons = document.querySelectorAll('a');

// Animazione per testi con ritardo progressivo
textElements.forEach((el, i) => {
    el.classList.add('slide-in');
    el.style.transitionDelay = `${i * 0.2 + 0}s`; // 0s delay iniziale
    observer.observe(el);
});

// Animazione per pulsanti: partire tutti dopo i testi
buttons.forEach((el, i) => {
    el.classList.add('slide-in');
    el.style.transitionDelay = `${textElements.length * 0.2 + 0.5}s`; // delay fisso dopo i testi
    observer.observe(el);
});
