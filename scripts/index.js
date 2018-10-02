let t = document.getElementById('twist').addEventListener('click', () => {
    let cards = document.querySelectorAll('.card')    
    cards.forEach(card => {
        card.classList.toggle('spinCard');
    })
}, false)