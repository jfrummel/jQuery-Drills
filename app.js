$('document').ready(function () {
    $('<ul></ul>').insertBefore('#btnSubmit');
    //disabled and enabled submit button
    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    });

    //basic button with alert
    $('#btnSubmit').click(function () {
        alert('The button has been clicked.');
    });

    //Adding list items
    $('form').submit(function () {
        event.preventDefault();
        $('ul').append($('<li>' + $('input[type="text"]').val() + '</li>'));
    
       //changing color of list items
        $('li').on('click', function () {
            let colorChange = "rgb(" +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            ")";
            $('li').css('color', colorChange);
       });

       //Removing list item on double click
         $('li').on('dblclick', function() {
             $(this).remove();
        });

    });

});




