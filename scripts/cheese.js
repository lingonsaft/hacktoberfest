

// function to change the background of the <section> part of cheese.html when the user clicks 'click for cheese' btn
function cheeseAppearance(){
    var jumbotron = document.getElementById("cheesetron");
    var randomNum = Math.floor((Math.random() * 3) + 1);

    switch (randomNum) {
      case 1:
        jumbotron.className = 'cheesetron-1';
        break;
      case 2:
        jumbotron.className = 'cheesetron-2';
        break;
      default:
        jumbotron.className = 'cheesetron-3';
    }
  }
