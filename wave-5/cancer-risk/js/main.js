jQuery( document ).ready( function( $ ) {

    /* Click the start-quiz to begin the quiz */
    $('.start-quiz').on('click', function() {
        $('.initial-screen').hide();
        $('#q1').show();
    });

    /* Create function to run when answer is clicked */
    function showAnswer(event) {
        event.preventDefault();
        var activeAnswer = $(event.target).closest('.choice').attr('data-question');
        $('.answer-screen').removeClass('activeAnswer');
        $('#answer' + activeAnswer).addClass('activeAnswer').show();
        $('.question-screen').hide();
    }

    /* if .custom-radio is clicked, give the closest input a checked attr of checked */
    $('.choice .custom-radio').on('click', function() {
        $('.choice input').prop('checked', false);
        $(this).closest('.choice').find('input').prop('checked', 'checked');
    });

    /* Run the function when the radio or input are clicked */

    $('.choice .custom-radio').on('click', showAnswer);
    $('.choice input').on('click', showAnswer);

    // /* Back button on answer-screen shows initial-screen */
    $('.back-button').on('click', function() {
        var activeAnswerId = $('.activeAnswer').attr('id');
        var activeAnswer = activeAnswerId.substring('6', '7');
        $('.answer-screen').hide();
        $('#q' + activeAnswer).show();
    });

    /* Next button */
    $('.next-button').on('click', function(){
        var activeAnswerId = $('.activeAnswer').attr('id');
        var activeAnswer = activeAnswerId.substring('6', '7');
        var nextAnswer = parseInt(activeAnswer) + 1;
        var totalAnswers = $('.answer-screen').length;

        if (totalAnswers === parseInt(activeAnswer)) {
            $('.answer-screen').hide();
            $('.learnmore-screen').show();
        } else {
            $('.answer-screen').hide();
            $('#q' + nextAnswer).show();
        }

    });
});
