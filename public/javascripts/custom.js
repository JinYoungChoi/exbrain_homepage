$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var mainbottom = $('#top').offset().top + $('#top').height();

// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('#front').addClass('past-main');
        document.getElementById("a1").style.color="#fff";
        document.getElementById("a2").style.color="#fff";
        document.getElementById("a3").style.color="#fff";
        document.getElementById("ci").src="../images/logo_icon_white.png";
    } else {
        $('#front').removeClass('past-main');
        document.getElementById("a1").style.color="#9d9d9d";
        document.getElementById("a2").style.color="#9d9d9d";
        document.getElementById("a3").style.color="#9d9d9d";
        document.getElementById("ci").src="../images/logo_icon.png";
   }

});
