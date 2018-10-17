let i = document.getElementById('invert-btn').addEventListener('click', () => {
    let body = document.querySelector('body');
    !body.style.filter
        ? body.style.filter = 'invert(100%)'
        : body.style.filter = null;
})