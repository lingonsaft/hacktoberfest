const canvas = document.querySelector('.canvas');
const reset = document.getElementById('reset');
var gridSize = '';
var gridColor = '#dbdbdb';

function clearCanvas() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}

function createGrid() {
  var div = document.createElement('div');
  div.style.width = gridSize;
  div.style.height = gridSize;
  div.style.background = gridColor;
  canvas.appendChild(div);
  div.addEventListener('mouseover', function () {
    div.style.background = 'black';});
}

function createCanvas(gridNum, canvasColor) {
  clearCanvas();
  gridSize = (600 / (Number(gridNum))) + 'px';
  gridColor = canvasColor;
  canvas.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
  for (i = 0; i < (Math.pow(gridNum, 2)); i++) {
    createGrid();
  }
}

function userInput() {
  var size = '';
  var color = '';
  size = prompt('Enter canvas size:', '16');
  color = prompt('Enter a color from the list (red,orange,yellow,green,blue,purple):', 'green');
  if (!(/\b(\w*green|yellow|blue|purple|red|orange\w*)\b/.test(color))) {
    color = '#dbdbdb';
  }
  createCanvas(size, color);
}


function defaultGrid() {
  var div = document.createElement('div');
  div.style.width = '37.5px';
  div.style.height = '37.5px';
  div.style.background = '#dbdbdb';
  canvas.appendChild(div);
  div.addEventListener('mouseover', function () {
    div.style.background = 'black';});
}

function main() {
  canvas.style.gridTemplateColumns = 'repeat(16, 1fr)';
  for (i = 0; i < 256; i++) {
    defaultGrid();
  }

  reset.addEventListener('click', userInput);
}

main();
