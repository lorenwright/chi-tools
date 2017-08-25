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
    $('.pain-0 .painImg').addClass('big');

    $('.slider input').on('input change', function() {
        var value = $(this).val();

        if (value <= .5) {
            $('.ctaBtn').attr('href', '#0');
            $('.painImg').removeClass('big');
            $('.pain-0 .painImg').addClass('big');
        } else if (value <= 1.5) {
            $('.ctaBtn').attr('href', '#1');
            $('.painImg.painImg').removeClass('big');
        } else if (value <= 2.5) {
            $('.ctaBtn').attr('href', '#2');
            $('.painImg').removeClass('big');
            $('.pain-2 .painImg').addClass('big');
        } else if (value <= 3.5) {
            $('.ctaBtn').attr('href', '#3');
            $('.painImg').removeClass('big');
        } else if (value <= 4.5) {
            $('.ctaBtn').attr('href', '#4');
            $('.painImg').removeClass('big');
            $('.pain-4 .painImg').addClass('big');
        } else if (value <= 5.5) {
            $('.ctaBtn').attr('href', '#5');
            $('.painImg').removeClass('big');
        } else if (value <= 6.5) {
            $('.ctaBtn').attr('href', '#6');
            $('.painImg').removeClass('big');
            $('.pain-6 .painImg').addClass('big');
        } else if (value <= 7.5) {
            $('.ctaBtn').attr('href', '#7');
            $('.painImg').removeClass('big');
        } else if (value <= 8.5) {
            $('.ctaBtn').attr('href', '#8');
            $('.painImg').removeClass('big');
            $('.pain-8 .painImg').addClass('big');
        } else if (value <= 9.5) {
            $('.ctaBtn').attr('href', '#9');
            $('.painImg').removeClass('big');
        } else if (value <= 10) {
            $('.ctaBtn').attr('href', '#10');
            $('.painImg').removeClass('big');
            $('.pain-10 .painImg').addClass('big');
        }
    });

});
