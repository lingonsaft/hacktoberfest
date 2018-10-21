console.log('hei')
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
      document.getElementById('audio').play();
    }
  });