let btn = document.getElementById('toggle-social-btn');

btn.onclick = (e) => {
    let footer = document.getElementById('footer');
    footer.classList.toggle('footer-active');
}