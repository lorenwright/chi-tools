jQuery( document ).ready( function( $ ) {

    /* Create function to run when answer is clicked */
    function showAnswer() {
        if ($('#option1').is(':checked')) {
            $('#answer1').show();
            $('.initial-screen').hide();
        }
        else if ($('#option2').is(':checked')) {
            $('#answer2').show();
            $('.initial-screen').hide();
        }
        else if ($('#option3').is(':checked')) {
            $('#answer3').show();
            $('.initial-screen').hide();
        }
        else if ($('#option4').is(':checked')) {
            $('#answer4').show();
            $('.initial-screen').hide();
        }
    }

    /* if .custom-radio is clicked, give the closest input a checked attr of checked */
    $('.choice .custom-radio').on('click', function() {
        $('.choice input').prop('checked', false);
        $(this).closest('.choice').find('input').prop('checked', 'checked');
    });

    /* Run the function when the radio or input are clicked */

    $('.choice .custom-radio').on('click', showAnswer);
    $('.choice input').on('click', showAnswer);

    /* Back button on answer-screen shows initial-screen */
    $('.back-button').on('click', function() {
        $('.answer-screen').hide();
        $('.initial-screen').show();
    });

});
