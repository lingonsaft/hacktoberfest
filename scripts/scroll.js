<<<<<<< HEAD
window.onscroll = function() {
    scrollFunc()
};

var scrollButton = document.getElementById('backToTop');

function scrollFunc() {
    if ( document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}
scrollButton.onclick = function() {
    scrollButton.classList.add('startscrolling');
    scrollTo(document.documentElement, 0, 1250, function(){
        scrollButton.classList.remove('startscrolling');
    });
}
scrollButton.onmousedown = function(){
    scrollButton.classList.add("mousedown");
}
scrollButton.onmouseup = function(){
    scrollButton.classList.remove("mousedown");
}
function scrollTo(element, to, duration, callback) {
=======
window.onscroll = function() {scrollFunc()};
function scrollFunc() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById('backToTop').style.display = "block";
    } else {
    document.getElementById('backToTop').style.display = "none";
    }
}
document.getElementById('backToTop').onclick = function() {
    scrollTo(document.documentElement, 0, 1250);
}
function scrollTo(element, to, duration) {
>>>>>>> 79de7abf060f33f198b75fbe9838e7f7c964d7ee
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
    var animateScroll = function() {
<<<<<<< HEAD
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll,increment);
        } else {
            if(callback && typeof callback === 'function'){
                callback();
            }
        }
    };
    animateScroll();
}
Math.easeInOutQuad = function(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
        return c / 2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};
=======
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
        setTimeout(animateScroll,increment);
    }
    };
    animateScroll();
}
Math.easeInOutQuad = function(t,b,c,d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};
>>>>>>> 79de7abf060f33f198b75fbe9838e7f7c964d7ee
