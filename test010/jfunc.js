var tweet_max = 140;

$('#tweet_box').keyup(function () { 
    var tweet_length = $('#tweet_box').val().length;
    // $('#tweet_feedback').html(tweet_length);
    var char_left = tweet_max - tweet_length;

    $('#tweet_feedback').html('You have ' + char_left + ' characters remaining' );
});
