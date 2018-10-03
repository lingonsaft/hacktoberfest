

// function to change the background of the <section> part of cheese.html when the user clicks 'click for cheese' btn
function cheeseAppearance(){
    var photoCount = 6;
    var jumbotron = document.getElementById("cheesetron");
    var background = document.getElementById("cheese-body");

    var randomNum = Math.floor( Math.random() * photoCount ) + 1;

    var imageString = 'images/cheeses/' + randomNum + '.jpg';

    jumbotron.className = 'cheesetron-newcheese';
    jumbotron.style.padding = '100px';
    jumbotron.style.backgroundSize = 'cover';
    background.style.backgroundImage = "url(" + imageString + ")";
  }
