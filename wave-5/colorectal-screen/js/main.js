jQuery( document ).ready( function( $ ) {

    /* Replace all SVG images with inline SVG if img has .svg class */

    // jQuery('img.svg').each(function(){
    //    var $img = jQuery(this);
    //    var imgID = $img.attr('id');
    //    var imgClass = $img.attr('class');
    //    var imgURL = $img.attr('src');
    //
    //    jQuery.get(imgURL, function(data) {
    //       // Get the SVG tag, ignore the rest
    //       var $svg = jQuery(data).find('svg');
    //
    //       // Add replaced image's ID to the new SVG
    //       if(typeof imgID !== 'undefined') {
    //          $svg = $svg.attr('id', imgID);
    //       }
    //       // Add replaced image's classes to the new SVG
    //       if(typeof imgClass !== 'undefined') {
    //          $svg = $svg.attr('class', imgClass+' replaced-svg');
    //       }
    //
    //       // Remove any invalid XML tags as per http://validator.w3.org
    //       $svg = $svg.removeAttr('xmlns:a');
    //
    //       // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
    //       if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
    //          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    //       }
    //
    //       // Replace image with new SVG
    //       $img.replaceWith($svg);
    //
    //    }, 'xml');
    //
    // });

    $('.colon-middle-section').addClass('closed');

    $('body').on('click', '.closed h2', function() {
        $('.colon-middle-section').removeClass('opened').addClass('closed');
        $(this).closest('.colon-middle-section').removeClass('closed').addClass('opened');

        var modalId = $(this).closest('.colon-middle-section').attr('id');

        $('html, body').animate({ scrollTop: $('#' + modalId).offset().top }, 500);
    });

    $('body').on('click', '.opened h2', function() {
        $('.colon-middle-section').removeClass('opened').addClass('closed');
        $(this).closest('.colon-middle-section').removeClass('opened').addClass('closed');
    });

    // this closes modal if you click outside of a modal or h2
    $('body').on('click', function(event) {

        if ($(event.target).is('h2') || $(event.target).is('.modal')) {
        } else {
            $('.colon-middle-section').removeClass('opened').addClass('closed');
        }
    });
});
