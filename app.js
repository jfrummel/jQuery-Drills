$('document').ready(function() {
    $('#btnSubmit').click(function() {
        alert('The button has been clicked.');
    });
    
    $('form').submit(function() {
        event.preventDefault();
        $('<li>' + $('input[type="text"]').val() + '</li>').appendTo('body');
    });
         $('ul').appendTo('body');    
});

    


