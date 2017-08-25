jQuery( document ).ready( function( $ ) {


    /********************************************
                detect browser
    *********************************************/

    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    if ((is_chrome)&&(is_safari)) {is_safari=false;}
    if ((is_chrome)&&(is_opera)) {is_chrome=false;}


    if (is_chrome) {
        $('body').addClass('chrome');
    }

    if (is_firefox) {
        $('body').addClass('firefox');
    }

    if (is_explorer) {
        $('body').addClass('ie');
    }


    /********************************************
                slider
    *********************************************/

    var value = $('.slider input').val();

    $('.slider input').on('input change', function() {
        var value = $(this).val();

        if (value <= .5) {
            $('.ctaBtn').attr('href', '#0');
        }  else if (value <= 1.5) {
            $('.ctaBtn').attr('href', '#1');
        } else if (value <= 2.5) {
            $('.ctaBtn').attr('href', '#3');
        } else if (value <= 3.5) {
            $('.ctaBtn').attr('href', '#5');
        } else if (value <= 4.5) {
            $('.ctaBtn').attr('href', '#7');
        } else if (value <= 5.5) {
            $('.ctaBtn').attr('href', '#9');
        } else if (value <= 6) {
            $('.ctaBtn').attr('href', '#10');
        }

        if (value <= .5) {
            $('.pain-1').css('opacity', 0);
            $('.pain-3').css('opacity', 0);
            $('.pain-5').css('opacity', 0);
            $('.pain-7').css('opacity', 0);
            $('.pain-9').css('opacity', 0);
            $('.pain-10 .bear').css('opacity', 0);
            $('.pain-10 .label-copy').css('opacity', 0);
        } else if (value <= 1.5) {
            $('.pain-1').css('opacity', 1);
            $('.pain-3').css('opacity', 0);
            $('.pain-5').css('opacity', 0);
            $('.pain-7').css('opacity', 0);
            $('.pain-9').css('opacity', 0);
            $('.pain-10 .bear').css('opacity', 0);
            $('.pain-10 .label-copy').css('opacity', 0);
        } else if (value <= 2.5) {
            $('.pain-1').css('opacity', 1);
            $('.pain-3').css('opacity', 1);
            $('.pain-5').css('opacity', 0);
            $('.pain-7').css('opacity', 0);
            $('.pain-9').css('opacity', 0);
            $('.pain-10 .bear').css('opacity', 0);
            $('.pain-10 .label-copy').css('opacity', 0);
        } else if (value <= 3.5) {
            $('.pain-1').css('opacity', 1);
            $('.pain-3').css('opacity', 1);
            $('.pain-5').css('opacity', 1);
            $('.pain-7').css('opacity', 0);
            $('.pain-9').css('opacity', 0);
            $('.pain-10 .bear').css('opacity', 0);
            $('.pain-10 .label-copy').css('opacity', 0);
        } else if (value <= 4.5) {
            $('.pain-1').css('opacity', 1);
            $('.pain-3').css('opacity', 1);
            $('.pain-5').css('opacity', 1);
            $('.pain-7').css('opacity', 1);
            $('.pain-9').css('opacity', 0);
            $('.pain-10 .bear').css('opacity', 0);
            $('.pain-10 .label-copy').css('opacity', 0);
        } else if (value <= 5.5) {
            $('.pain-1').css('opacity', 1);
            $('.pain-3').css('opacity', 1);
            $('.pain-5').css('opacity', 1);
            $('.pain-7').css('opacity', 1);
            $('.pain-9').css('opacity', 1);
            $('.pain-10 .bear').css('opacity', 0);
            $('.pain-10 .label-copy').css('opacity', 0);
        } else if (value <= 6) {
            $('.pain-1').css('opacity', 1);
            $('.pain-3').css('opacity', 1);
            $('.pain-5').css('opacity', 1);
            $('.pain-7').css('opacity', 1);
            $('.pain-9').css('opacity', 1);
            $('.pain-10 .bear').css('opacity', 1);
            $('.pain-10 .label-copy').css('opacity', 1);
        }

    });

});
