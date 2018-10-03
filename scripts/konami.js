var started = false;
var code = [38,38,40,40,37,39,37,39,66,65];
var position = 0;

document.addEventListener('keydown', function(e){
    var key = e.keyCode;
    if (!started) {
        if (key == 38) {
            started = true;
        }
    }

    if (started) {
        if (code[position] == key) {
            position++;
        } else {
            reset();
        }

        if (position == 10) {
            reset();
            var body = document.getElementById("body");
            body.style.fontFamily = "Comic Sans MS";
            body.style.color = "white";
            body.style.background = "cyan";
        }
    } else {
        reset();
    }

});

function reset() {
    started = false;
    position = 0;
}