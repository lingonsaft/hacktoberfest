document.addEventListener('keydown', function(event) {
  if(event.keyCode == 192) {
    console.log("Äru svensk?");
  }
});


document.getElementById('invert-btn').onclick = (e) => {
  e.preventDefault();
  if (document.body.classList.contains('inverted')) {
    document.getElementById('body').style.filter= 'invert(0)';
    document.body.classList.remove('inverted');
  }
  else {
    document.getElementById('body').style.filter= 'invert(1)';
    document.body.classList.add('inverted');
    console.log('If you\'re using IE or Opera, you don\'t know what you are missing!');
  }
}