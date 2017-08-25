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
                numberOfYears slider
    *********************************************/

    /* Show number above slider thumb */

    var rangeSlider = function(){
        var form = $('.calculator');
        var range = $('#numberOfYears');
        var value = $('#numberOfYearsVal');
        $(value).hide();

        form.each(function(){

            value.each(function(){
                var value = $(this).prev().attr('value');
                $(this).html(value);
            });

            range.on('input', function(){
                $(value).show();
                $(value).html(this.value);
            });
        });
    };

    rangeSlider();

    $('#numberOfYears').on('change input', function() {
    	var max = 50;
    	var value = $(this).val() - 10;
    	var percent = value / max;
    	var width = $(this).width();

    	var left = percent * width + 1 - value;

    	$('#numberOfYearsVal').css('left', left);
    });

    /********************************************
                Calculate Pack Years
    *********************************************/
    var day;
    var year = $('#numberOfYears').val();

    $('#numberOfCigs').on('change', function() {
        day = $(this).val();
    });
    $('#numberOfYears').on('change', function() {
        year = $(this).val();
    });

    /********************************************
                Go to results-screen
    *********************************************/

    var updateResults = function() {
        $('.initial-screen').hide();
        $('.results-screen').show();
        $('body').addClass('blueBG');
        var result = (day * year) / 20;
        var roundedResult = Math.round(result);

        if(roundedResult === 1) {
            $('.plural').html('');
        } else if (isNaN(roundedResult) == true) {
            roundedResult = 0;
        }

        $('#result').html(roundedResult);
    }

    $('.calculator').on('submit', function(e) {
        e.preventDefault();
        $('body').scrollTop(0);
        updateResults();
    });

});
