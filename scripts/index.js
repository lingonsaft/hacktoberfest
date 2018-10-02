let t = document.getElementById('twist').addEventListener('click', () => {
    let cards = document.querySelectorAll('.card')    
    cards.forEach(card => {
        if(card.classList.contains('spinCard'))
            card.classList.remove('spinCard')
        else
            card.classList.add('spinCard')
    })
}, false)