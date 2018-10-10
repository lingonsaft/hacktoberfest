$('.side-navigtion__item').on('click', function(){
    var $clickedNav = $(this);
    if (!$clickedNav.hasClass('active')) {
        $('.side-navigtion__item').removeClass('active');
        $clickedNav.addClass('active');
    }
});