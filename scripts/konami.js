const relevantKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
}

const keySequence = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
let positionInSequence = 0;

document.addEventListener('keydown', function(e) {
    let keyPressed = relevantKeys[e.keyCode];

    if (keyPressed === keySequence[positionInSequence]) {
        positionInSequence++;
        if (positionInSequence === keySequence.length) {
            activateResult();
            positionInSequence = 0;
        }
    } else {
        positionInSequence = 0;
    }
})

function activateResult() {
    console.log("code activated");

}
