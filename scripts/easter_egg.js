document.addEventListener('keydown', function(event) {
  if(event.keyCode == 192) {
    console.log("Äru svensk?");
  }
});

document.addEventListener('dblclick', function(event) {
    if (event.target.id === "click-me") {
        var size = Math.floor(Math.random() * 4) + 1;  
        console.log("%cHAPPY \nHACKTOBERFEST!", "color: orange; font-size: 50px;");
        console.log("%c  ", "background-image: url('https://www.placecage.com/" + size + "00/" + size + "00'); background-repeat: no-repeat; background-size: " + size + "00px " + size + "00px; font-size: " + size + "00px");
    }
});
