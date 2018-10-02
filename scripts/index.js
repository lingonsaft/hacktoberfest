let t = document.getElementById('twist').addEventListener('click', () => {
    let cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.classList.toggle('spinCard');
    })
}, false)
<<<<<<< HEAD
let l = document.getElementById('cswitch').addEventListener('click', () => {
    var sheet = document.createElement('style')
    sheet.innerHTML = "body {filter: sepia(100%);}";
    document.body.appendChild(sheet);
}, false)
=======

let l = document.getElementById('love').addEventListener('click', () => {
  let body = document.querySelector('body');
  document.querySelector("#header h1").innerHTML = "Broccoli Egg";
  body.classList.toggle("broccoli-green");
}, false)
>>>>>>> origin/master
