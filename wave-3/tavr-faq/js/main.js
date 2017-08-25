jQuery( document ).ready( function( $ ) {

    /********************************************
                Accordion
    *********************************************/

    $('.accordion-copy').hide();
	$('.accordion-copy').first().show();
	$('.accordion-header').first().addClass('opened');
	$('.accordion-header').on('click', function(){
		if($(this).hasClass('opened')){
			$(this).removeClass('opened');
			$(this).closest('.accordion-section').find('.accordion-copy').slideUp();
		} else {
			$('.accordion-header').removeClass('opened');
			$('.accordion-copy').slideUp();
			$(this).closest('.accordion-section').find('.accordion-copy').slideDown();
			$(this).toggleClass('opened');
		}
	});
});
