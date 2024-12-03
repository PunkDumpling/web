document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        document.body.style.cursor = 'url(path-to-your-cursor-icon.cur), auto';
    });
});

    // Чтобы вернуть курсор обратно при клике на другую часть страницы:
document.body.addEventListener('click', (event) => {
    if (!event.target.classList.contains('grid-item')) {
        document.body.style.cursor = 'default';
    }
});