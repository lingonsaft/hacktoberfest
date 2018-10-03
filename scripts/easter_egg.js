document.addEventListener('keydown', function(event) {
  if(event.keyCode == 192) {
    console.log("Äru svensk?");
  }

  if(event.keyCode == 84) {
    if (document.body.classList.contains('terminal')) {
      document.body.classList.remove('terminal');
    }
    else {
      document.body.classList.add('terminal');
    }
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

