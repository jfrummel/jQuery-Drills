$('document').ready(function() {
    $('#btnSubmit').click(function() {
        alert('The button has been clicked.');
    });
    $('form').submit(function() {
        alert($('input[type="text"]').val());
    });
});