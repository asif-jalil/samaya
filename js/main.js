(function ($) {

    "use strict";

    // stycky navbar
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop()
        if (scroll > 100) {
            $('header').addClass('sticky-state');
        } else {
            $('header').removeClass('sticky-state');
        }
    })

    //preloader
    $(window).on('load', function () {
        $('#loader').addClass('complete');
    })

    //init wow js
    new WOW().init();

    //offset menu
    $(".menu-toggle").click(function () {
        $(".offcanvas").toggleClass("active");
    })

    //active js
    $(".main-menu li").click(function () {
        $(".main-menu li").removeClass("active");
        $(this).addClass("active");
    })

    //slick slider
    $('.portfolio-wrapper').slick({
        dots: true,
        dotsClass: "portfolio-dots",
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    //owl carosel
    $('.mb-port-wrap').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        margin: 0,
    });


})(jQuery);
