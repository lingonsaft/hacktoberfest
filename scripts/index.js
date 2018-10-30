let t = document.getElementById('twist').addEventListener('click', () => {
    let cards = document.querySelectorAll('.card')    
    cards.forEach(card => {
        card.classList.toggle('spinCard');
    })
}, false)

let l = document.getElementById('love').addEventListener('click', () => {
  let body = document.querySelector('body');
  document.querySelector("#header h1").innerHTML = "Broccoli Egg";
  body.classList.toggle("broccoli-green");
}, false)

// flashing title
let flash = 0
setInterval(function() {
	document.title = `Hacktoberfest | ${flash ? '🎉' : '✨'}`
    flash = !flash
}, 1000)
