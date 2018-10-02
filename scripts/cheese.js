// alert("Cheese works!");


function cheeseAppearance(){
    var randomNum = Math.floor((Math.random() * 3) + 1);

    switch (randomNum) {
      case 0:
        console.log("computer picks 0!");
        break;
      case 1:
        console.log("computer picks 1!");
        break;
      case 2:
        console.log("computer picks 2!");
        break;
      default:
        console.log("computer picks summat else!");
    }
  }
