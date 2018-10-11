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

//Adds a heart above and below the header when the heart icon is clicked (MAX 10 because October :P)
let h = document.getElementById('heart').addEventListener('click', () => {
    let bars = document.querySelectorAll('#heart-bar');
    bars.forEach(bar => {
        if (bar.childElementCount < 10) {
            var heart = document.createElement("img");
            heart.innerHTML = '<img src="./images/heart.png" alt="heart icon" width="30px">';
            bar.appendChild(heart);
        }
    })
}, false)

