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

document.getElementById('wavey-btn').onclick = (e) => {
  e.preventDefault();

  let nav = document.getElementById('nav');
  let strike = document.getElementById('strike');
  let footer = document.getElementById('footer');
  let btn_youtube = document.getElementById('btn-youtube');
  let btn_hacking = document.getElementById('btn-hacking');
  let cards = document.getElementsByClassName('card');
  let rules = document.getElementById('contribution-rules');
  let dodos = document.getElementsByClassName('do');
  let nonos = document.getElementsByClassName('dont');
  let top = document.getElementById('backToTop');


  if (document.body.classList.contains('waveybody')) {

    document.body.classList.remove('waveybody');
    nav.classList.remove('waveynav');
    strike.classList.remove('waveystrike');
    footer.classList.remove('waveyfooter');
    btn_youtube.classList.remove('waveyyoutube');
    btn_hacking.classList.remove('waveyyoutube');
    rules.style.backgroundColor = '#fff';

    for (var i = 0; i < dodos.length; i++){
      dodos[i].style.color = 'green';
    }

    for (var i = 0; i < nonos.length; i++){
      nonos[i].style.color = 'red';
    }

    for (var i = 0; i < cards.length; i++){
      cards[i].style.backgroundColor = '#FFF';
    }

  }
  else {

    document.body.classList.add('waveybody');
    nav.classList.add('waveynav');
    strike.classList.add('waveystrike');
    footer.classList.add('waveyfooter');
    btn_youtube.classList.add('waveyyoutube');
    btn_hacking.classList.add('waveyyoutube');
    rules.style.backgroundColor = '#123';

    for (var i = 0; i < dodos.length; i++){
      dodos[i].style.color = 'lime';
    }

    for (var i = 0; i < nonos.length; i++){
      nonos[i].style.color = '#ff0d00';
    }

    for (var i = 0; i < cards.length; i++){
      cards[i].style.backgroundColor = '#123';
    }

  }
}
