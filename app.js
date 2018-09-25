$('document').ready(function() {
    $(':input[type="submit"]').prop('disabled', true);
     $('input[type="text"]').keyup(function() {
        if($(this).val() != '') {
           $(':input[type="submit"]').prop('disabled', false);
        }
     });
    $('#btnSubmit').click(function() {
        alert('The button has been clicked.');
    });
    
    $('form').submit(function() {
        event.preventDefault();
        $('<li>' + $('input[type="text"]').val() + '</li>').appendTo('body');
    });
    $('ul').appendTo('body');
    
    let r = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);

    $('li').click(function() {
        $('li').css('background-color', 'rgb(r, b, g)');
});
});

    


