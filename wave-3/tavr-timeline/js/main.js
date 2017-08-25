jQuery.fn.onPositionChanged = function (trigger, millis) {
    if (millis == null) millis = 100;
    var o = $(this[0]); // our jquery object
    if (o.length < 1) return o;

    var lastPos = null;
    var lastOff = null;
    setInterval(function () {
        if (o == null || o.length < 1) return o; // abort if element is non existend eny more
        if (lastPos == null) lastPos = o.position();
        if (lastOff == null) lastOff = o.offset();
        var newPos = o.position();
        var newOff = o.offset();
        if (lastPos.top != newPos.top || lastPos.left != newPos.left) {
            $(this).trigger('onPositionChanged', { lastPos: lastPos, newPos: newPos });
            if (typeof (trigger) == "function") trigger(lastPos, newPos);
            lastPos = o.position();
        }
        if (lastOff.top != newOff.top || lastOff.left != newOff.left) {
            $(this).trigger('onOffsetChanged', { lastOff: lastOff, newOff: newOff});
            if (typeof (trigger) == "function") trigger(lastOff, newOff);
            lastOff= o.offset();
        }
    }, millis);

    return o;
};

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
                slider time-popup position
    *********************************************/

    var maxTime = 240; // # of minutes in 4 hours

    var time0 = 0; // :00
    var time1 = 38; // :38
    var time2 = 107; // 1:47
    var time3 = 121; // 2:01
    var time4 = 180; // 3:00
    var time5 = 198; // 3:18
    var time6 = 240; // 4:00

    var timePercent0 = time0 / maxTime * 100;
    var timePercent1 = time1 / maxTime * 100;
    var timePercent2 = time2 / maxTime * 100;
    var timePercent3 = time3 / maxTime * 100;
    var timePercent4 = time4 / maxTime * 100;
    var timePercent5 = time5 / maxTime * 100;
    var timePercent6 = time6 / maxTime * 100;

    $('.time0').css({
        'left': timePercent0 + '%'
    });
    $('.time1').css({
        'left': timePercent1 + '%'
    });
    $('.time2').css({
        'left': timePercent2 + '%'
    });
    $('.time3').css({
        'left': timePercent3 + '%'
    });
    $('.time4').css({
        'left': timePercent4 + '%'
    });
    $('.time5').css({
        'left': timePercent5 + '%'
    });
    $('.time6').css({
        'left': timePercent6 + '%'
    });

    var timeLeftPos1 = (timePercent1/100)* $('.slider').width();
    var timeLeftPos2 = (timePercent2/100)* $('.slider').width();
    var timeLeftPos3 = (timePercent3/100)* $('.slider').width();
    var timeLeftPos4 = (timePercent4/100)* $('.slider').width();
    var timeLeftPos5 = (timePercent5/100)* $('.slider').width();

    $('.thumb').onPositionChanged(function(){

        if($('.thumb').position().left >= timeLeftPos1) {
            $('.time1').addClass('reveal');
        } else {
            $('.time1').removeClass('reveal');
        }

        if($('.thumb').position().left >= timeLeftPos2) {
            $('.time2').addClass('reveal');
        } else {
            $('.time2').removeClass('reveal');
        }

        if($('.thumb').position().left >= timeLeftPos3) {
            $('.time3').addClass('reveal');
        } else {
            $('.time3').removeClass('reveal');
        }

        if($('.thumb').position().left >= timeLeftPos4) {
            $('.time4').addClass('reveal');
        } else {
            $('.time4').removeClass('reveal');
        }

        if($('.thumb').position().left >= timeLeftPos5) {
            $('.time5').addClass('reveal');
        } else {
            $('.time5').removeClass('reveal');
        }
    });


    /********************************************
                slider time-popup timing
    *********************************************/

    var dragged = 0;
    var preDragged = 0;

    $('.thumb').on('drag', function() {
        dragged++;
    });

    setTimeout(function() {
        checkIfDragged();
    }, 4000);

    function checkIfDragged(){
        if(preDragged === dragged){
            $('.thumb').addClass('animate');

            $('.thumb').on('drag', function() {
                $(this).removeClass('animate');
            });
        }
    }

    /********************************************
                slider thumb is draggable
    *********************************************/

    $('.thumb').draggable({
        axis: 'x',
        containment: 'parent'
    });

});
