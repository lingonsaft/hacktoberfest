<<<<<<< HEAD
const squares = document.querySelectorAll('.square');
let colors = [];
let pickedColor = undefined;
const messageDisplay = document.querySelector('#message');
const resetButton = document.querySelector('#reset');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const wayHardBtn = document.querySelector('#wayHardBtn');
let numSquares = 9;
=======
var squares = document.querySelectorAll(".square");
var colors;
var pickedColor;
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;
>>>>>>> 79de7abf060f33f198b75fbe9838e7f7c964d7ee

genPickColors(numSquares);

easyBtn.addEventListener("click", function() {
<<<<<<< HEAD
  resetBackgroundColors();
  this.classList.add('selected');
  hardBtn.classList.remove('selected');
  wayHardBtn.classList.remove('selected');
  numSquares = 3;
  genPickColors(numSquares);
  for (let i = numSquares; i < squares.length; i++) {
    squares[i].style.display = 'none';
  }
})

hardBtn.addEventListener("click", function() {
  resetBackgroundColors();
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  wayHardBtn.classList.remove('selected');
  numSquares = 6;
  genPickColors(numSquares);
  
  for (let i = 3; i < squares.length; i++) {
    squares[i].style.display = 'block';
  }
})

wayHardBtn.addEventListener("click", function() {
  resetBackgroundColors();
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  hardBtn.classList.remove('selected');
  numSquares = 9;
  genPickColors(numSquares);
  
  for (let i = 6; i < squares.length; i++) {
    squares[i].style.display = 'block';
  }
})

document.getElementById('colorDisplay').textContent = pickedColor;

resetButton.addEventListener('click', function() {
  resetBackgroundColors();
  document.querySelector('.selected').style.backgroundColor = 'steelblue';
  genPickColors(numSquares);
})

for (let i = 0; i < colors.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener('click', function() {
    const clickedColor = this.style.backgroundColor;
    
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct';
      changeColors(pickedColor);
      resetButton.textContent = 'Play Again!';
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = "Wrong";
    }
  })
}

function changeColors(color) {
 for (let i = 0; i < squares.length; i++) {
   squares[i].style.backgroundColor = color;
 }
  
 document.querySelector('h1').style.backgroundColor = pickedColor;
 document.querySelector('.selected').style.backgroundColor = pickedColor;
}

function pickColor() {
  return colors[giveRandNumUpto(colors.length)];
}

function generateRandomColors(num) {
  const colors = [];
  
  for (let i = 0; i < num; i++) {
    colors[i] = 'rgb(' + giveRandNumUpto(256) + ', ' + giveRandNumUpto(256) + ', ' + giveRandNumUpto(256) + ')';
  }
  
  for (let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  
  return colors;
}

function giveRandNumUpto(num) {
  return Math.floor(Math.random() * num);
=======
    resetBackgroundColors();
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    genPickColors(numSquares);
    for (var i = numSquares; i < squares.length; i++) {
        squares[i].style.display = "none";
    }
})

hardBtn.addEventListener("click", function() {
    resetBackgroundColors();
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    genPickColors(numSquares);
    for (var i = 3; i < squares.length; i++) {
        squares[i].style.display = "block";
    }
})

document.getElementById("colorDisplay").textContent = pickedColor;

resetButton.addEventListener("click", function() {
    resetBackgroundColors();
    document.querySelector(".selected").style.backgroundColor = "steelblue";
    genPickColors(numSquares);
})

for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(pickedColor);
            resetButton.textContent = "Play Again!";

        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Wrong";
        }
    })
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    document.querySelector("h1").style.backgroundColor = pickedColor;
    document.querySelector(".selected").style.backgroundColor = pickedColor;
}

function pickColor() {
    return colors[giveRandNumUpto(colors.length)];
}

function generateRandomColors(num) {
    var colors = [];
    for (var i = 0; i < num; i++) {
        colors[i] = "rgb(" + giveRandNumUpto(256) + ", " + giveRandNumUpto(256) + ", " + giveRandNumUpto(256) + ")";
    }
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    return colors;
}

function giveRandNumUpto(num) {
    return Math.floor(Math.random() * num);
>>>>>>> 79de7abf060f33f198b75fbe9838e7f7c964d7ee
}


function genPickColors(num) {
<<<<<<< HEAD
  colors = generateRandomColors(num);
  pickedColor = pickColor();
  document.getElementById('colorDisplay').textContent = pickedColor;
}

function resetBackgroundColors() {
  document.querySelector('.selected').style.backgroundColor = 'white';
  document.querySelector('h1').style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
}
=======
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    document.getElementById("colorDisplay").textContent = pickedColor;
}

function resetBackgroundColors() {
    document.querySelector(".selected").style.backgroundColor = "white";
    document.querySelector("h1").style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    // document.querySelector(".selected").style.backgroundColor = "steelblue";
}
>>>>>>> 79de7abf060f33f198b75fbe9838e7f7c964d7ee
