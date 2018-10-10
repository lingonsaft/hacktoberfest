$('.side-navigtion__item').on('click', function(){
    var $clickedNav = $(this);
    if (!$clickedNav.hasClass('active')) {
        $('.side-navigtion__item').removeClass('active');
        $clickedNav.addClass('active');
    }
});

$("a.side-navigtion__item").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top 
        }, 800, function () {
            window.location.hash = hash;
        });
    } 
});
