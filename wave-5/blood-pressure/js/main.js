jQuery( document ).ready( function( $ ) {

    /* Get the angle of any element */
    function getRotationDegrees(obj) {
        var matrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform")    ||
        obj.css("-ms-transform")     ||
        obj.css("-o-transform")      ||
        obj.css("transform");
        if(matrix !== 'none') {
            var values = matrix.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        } else { var angle = 0; }
        return (angle < 0) ? angle + 360 : angle;
    }

    /* Dynamically get height of dial and hand left position */
    function getDynamicStyles() {
        // Get height of dial
        var dialWidth = $('.dial').width();
        $('.dial').css('height', dialWidth);

        // Get left position of hand
        var handWidth = $('.hand').width();
        var halfHandWidth = handWidth / 2;
        var halfDialWidth = dialWidth / 2;
        $('.hand').css('left', halfDialWidth - halfHandWidth );

    };

    getDynamicStyles();

    $(window).on('resize', function() {
        getDynamicStyles();
    });




    /* Handle the click on heart-dial */
    $('.heart-text a').on('click', function(event) {
        event.preventDefault();
    });

    var n = 1;
    $('.heart-dial').on('click', function() {

        var currDegree = getRotationDegrees($('.hand'));

        var oldPos = 'hand' + n;

        n++;

        if ( n > 8 ) {
            n = 1;
        }

        var newPos = 'hand' + n;

        $('.hand').removeClass(oldPos).addClass(newPos);

        if ( n > 6) {
            $('.dial-quarter').css('opacity', 0);
            $('.quarter-4').css('opacity', 1);
        } else if ( n > 4) {
            $('.dial-quarter').css('opacity', 0);
            $('.quarter-1').css('opacity', 1);
        } else if ( n > 2) {
            $('.dial-quarter').css('opacity', 0);
            $('.quarter-2').css('opacity', 1);
        } else if ( n > 0) {
            $('.dial-quarter').css('opacity', 0);
            $('.quarter-3').css('opacity', 1);
        }

        if ( n === 1 ) {
            $('body').css('background', '#82C9BD');
            $('.heart-text').css('opacity', 0);
            $('#heart-text-1').css('opacity', 1);
            $('.learnmore').removeClass('pulse');
        } else if ( n === 2 ) {
            $('body').css('background', '#FDD963');
            $('.heart-text').css('opacity', 0);
            $('#heart-text-2').css('opacity', 1);
        } else if ( n === 3 ) {
            $('body').css('background', '#F6AA32');
            $('.heart-text').css('opacity', 0);
            $('#heart-text-3').css('opacity', 1);
        } else if ( n === 4 ) {
            $('body').css('background', '#C0D744');
            $('.heart-text').css('opacity', 0);
            $('#heart-text-4').css('opacity', 1);
        } else if ( n === 5 ) {
            $('body').css('background', '#59C2A5');
            $('.heart-text').css('opacity', 0);
            $('#heart-text-5').css('opacity', 1);
        } else if ( n === 6 ) {
            $('body').css('background', '#4FC8E6');
            $('.heart-text').css('opacity', 0);
            $('#heart-text-6').css('opacity', 1);
        } else if ( n === 7 ) {
            $('body').css('background', '#8DB9CB');
            $('.heart-text').css('opacity', 0);
            $('#heart-text-7').css('opacity', 1);
        } else if ( n === 8 ) {
            $('body').css('background', '#406CA9');
            $('.heart-text').css('opacity', 0);
            $('#heart-text-8').css('opacity', 1);
            $('.learnmore').addClass('pulse');
        }

    });
});
