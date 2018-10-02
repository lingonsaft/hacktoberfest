let t = document.getElementById('twist').addEventListener('click', () => {
    let cards = document.querySelectorAll('.card')    
    cards.forEach(card => {
        if (card.className.includes(' spinCard')) {
            card.className = card.className.replace(' spinCard', '');
        } else {
        card.className += ' spinCard'}})
}, false)
