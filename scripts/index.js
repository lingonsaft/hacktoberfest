let t = document.getElementById('twist').addEventListener('click', () => {
    let cards = document.querySelectorAll('.card')
    console.log(cards)
    cards.forEach(card => {
        card.className += ' spinCard'
    })
}, false)