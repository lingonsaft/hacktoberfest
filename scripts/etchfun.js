const canvas = document.querySelector('.canvas');
const reset = document.getElementById('reset');
var gridSize = '';

function clearCanvas() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}

function createGrid() {
  var div = document.createElement('div');
  div.style.width = gridSize;
  div.style.height = gridSize;
  div.style.background = '#dbdbdb';
  canvas.appendChild(div);
  div.addEventListener('mouseover', function () {
    div.style.background = 'black';});
}

function createCanvas(gridNum) {
  clearCanvas();
  gridSize = (600 / (Number(gridNum))) + 'px';
  canvas.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
  for (i = 0; i < (Math.pow(gridNum, 2)); i++) {
    createGrid();
  }
}

function userInput() {
  createCanvas(prompt('Enter canvas size:', '16'));
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
