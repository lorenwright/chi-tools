jQuery( document ).ready( function( $ ) {

    // Initialize Carousel
    
    var slide = $('.slide');
    var slides = $('.slides');
    var numOfSlides = $(slide).length;
    var circle = $('.navigation .circle');
    var i;
    var windowWidth = $(window).width();
    var slidePosition = $(slides).position().left;

    $(circle).first().addClass('active');

    $(slide).each(function(i) {
        i = i + 1;
        $('#slide' + i).css({
            left: 100 * i + 'vw'
        });

        $('#circle' + i).on('click', function(){
            $(circle).removeClass('active');
            $(this).addClass('active');
            $(slides).animate({left: '-' + ((i - 1) * 100) + 'vw' });
        });
    });

    // Use next arrow to navigate carousel

    $('.next').on('click', function(){
        var slidePosition = $(slides).position().left;
        var windowWidth = $(window).width();
        var currentSlide = Math.round(slidePosition / windowWidth);

        if(currentSlide > -5) {
            $('.active').removeClass('active').closest('li').next('li').find('.circle').addClass('active');
            $(slides).animate({left: '-=100vw'});
        } else {
            $('.active').removeClass('active');
            $('.firstCirc').addClass('active');
            $(slides).animate({left: '0vw'});
        }
    });

    // Use prev arrow to navigate carousel

    $('.prev').on('click', function(){
        var slidePosition = $(slides).position().left;
        var windowWidth = $(window).width();
        var currentSlide = Math.round(slidePosition / windowWidth);

        if(currentSlide < 0) {
            $('.active').removeClass('active').closest('li').prev('li').find('.circle').addClass('active');
            $(slides).animate({left: '+=100vw'});
        } else {
            $('.active').removeClass('active');
            $('.lastCirc').addClass('active');
            $(slides).animate({left: '-500vw'});
        }
    });


    // Swipe left to navigate through carousel
    $(slides).on('swipeleft', function() {
        var slidePosition = $(slides).position().left;
        var windowWidth = $(window).width();
        var currentSlide = Math.round(slidePosition / windowWidth);

        if(currentSlide > -5) {
            $('.active').removeClass('active').closest('li').next('li').find('.circle').addClass('active');
            $(slides).animate({left: '-=100vw'});
        } else {
            $('.active').removeClass('active');
            $('.firstCirc').addClass('active');
            $(slides).animate({left: '0vw'});
        }
    });

    // Swipe right to navigate through carousel
    $(slides).on('swiperight', function() {
        var slidePosition = $(slides).position().left;
        var windowWidth = $(window).width();
        var currentSlide = Math.round(slidePosition / windowWidth);

        if(currentSlide < 0) {
            $('.active').removeClass('active').closest('li').prev('li').find('.circle').addClass('active');
            $(slides).animate({left: '+=100vw'});
        } else {
            $('.active').removeClass('active');
            $('.lastCirc').addClass('active');
            $(slides).animate({left: '-500vw'});
        }
    });

});
