jQuery( document ).ready( function( $ ) {

    /********************************************
                Vertical Scroll Bar
    *********************************************/

    /* Initial scrollSlider positioning */
    var docHeight = $('#scrollPane').height();
    var windowHeight = $(window).height();

    /* Change #scrollSlider position when you scroll */
    function scrollFunc() {
        var docHeight = $('#scrollPane').height();
        var windowHeight = $(window).height();
        var scrollTop = $(document).scrollTop();
        var scrollSliderHeight = $('#scrollSlider').height();
        var scrollBarHeight = $('#scrollBar').height();
        var sliderRatio = scrollSliderHeight / scrollBarHeight * 100;
        var decimalOfPage = scrollTop / docHeight;
        var percentOfPage = decimalOfPage * 100;
        var windowRatio = windowHeight / docHeight;
        var maxScrollTop = docHeight - windowHeight;
        var maxScrollPercent = (maxScrollTop / docHeight) * 100;
        var scrollSliderMultiplier = (100 - sliderRatio) / maxScrollPercent;

        if (percentOfPage > 0) {
            $('#scrollSlider').css({
                'top': percentOfPage * scrollSliderMultiplier + '%'
            });
        } else {
            $('#scrollSlider').css({
                'top' : 0
            });
        }
    };
    scrollFunc();


    /* window position when dragging scrollSlider */
    function dragFunc() {

        var docHeight = $(document).height();
        var windowHeight = $(window).height();
        var sliderTop = $('#scrollSlider').position().top;
        var scrollBarHeight = $('#scrollBar').height();
        var percentOfBar = sliderTop / scrollBarHeight;
        var hiddenPercentOfBar = 2 - percentOfBar;
        var maxScrollTop = docHeight - windowHeight;
        var maxScrollPercent = (maxScrollTop / docHeight) * 100;
        var scrollTop = percentOfBar * maxScrollTop * hiddenPercentOfBar;

        $(document).scrollTop(scrollTop);
    }


    /* conditional logic for mobile vs desktop */

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

        $('#scrollPane').on('touchmove', function() {
            scrollFunc();
        });

    } else {
        $('#scrollPane').on('wheel', function() {
            scrollFunc();
        });
        $(document).on('keydown', function(e) {
            if (e.keyCode == 38) { // up arrow
                scrollFunc();
            }
            if (e.keyCode == 40) { // down arrow
                scrollFunc();
            }
        });
        $(document).on('keyup', function(e) {
            if (e.keyCode == 32) { // spacebar
                scrollFunc();
            }
        });
    }

    /* window position when clicking scrollUp */

    $('#scrollUp i').on('click', function() {
        var scrollTop = $(document).scrollTop();
        $(document).scrollTop(scrollTop - 200);
        scrollFunc();
    });


    /* window position when clicking scrollDown */

    $('#scrollDown i').on('click', function() {
        var scrollTop = $(document).scrollTop();
        $(document).scrollTop(scrollTop + 200);
        scrollFunc();
    });

    /* scrollSlider is draggable */
    $('#scrollSlider').draggable({
        axis: 'y',
        containment: 'parent',
        drag: function() {
            dragFunc();
        }
    });

});
