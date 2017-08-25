jQuery( document ).ready( function( $ ) {

    /********************************************
                Quiz Scripts
    *********************************************/

    /* Initialize start screen */

    $('#initial-screen').show();

    /* Click #start to begin quiz */

    $('#start').on('click', function() {
        $('.screen').hide();
        $('#question-1').show();
    });

    /* Clicking on '.answer-options a' takes you to that question's answer screen */

    var numOfQuestions = $('.question').length;
    var q = 0;
    var correct = 0;

    $('.answer-options a').on('click', function() {
        q++;
        $('#question-' + q).hide();
        $('#answer-' + q).show();
        if ($(this).attr('data-answer')) {
            correct++;
            $('.right-wrong').html('Good Job');
            $('.score .correct').html(correct);
        } else {
            $('.right-wrong').html('Try Again');
        }
    });

    /* Clicking on '.next-question' takes you to the next (q + 1) answer screen */

    $('.next-question').on('click', function() {
        $(this).closest('.answer').hide();
        var nextQuestion = q + 1;
        $('#question-' + nextQuestion).show();
    });

    /* When user clicks on '.see-results', they will be taken to the #end screen */

    $('.see-results').on('click', function() {
        $(this).closest('.answer').hide();
        $('#end').show();
    });

    /* End Screen Results */

    $('.score .totalQuestions').html(numOfQuestions);

});
