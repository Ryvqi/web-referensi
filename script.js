document.addEventListener('DOMContentLoaded', (event) => {
    const mElements = document.querySelectorAll('.m-pattern span');
    mElements.forEach(el => {
        el.style.top = Math.random() * 100 + '%';
        el.style.left = Math.random() * 100 + '%';
        el.style.animationDelay = Math.random() * 5 + 's';
    });
});
