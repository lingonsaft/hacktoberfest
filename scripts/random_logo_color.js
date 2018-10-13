document.onkeyup = function(e) {
    // Ctrl + b shortcut combination was pressed
    if (e.ctrlKey && e.which == 66) {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      var navBarLogo =  document.getElementsByClassName('st0')[0];
      navBarLogo.style.fill = '#' + randomColor;
    } 
};