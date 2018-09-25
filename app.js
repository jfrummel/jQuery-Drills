$('document').ready(function() {
    $('#btnSubmit').click(function() {
        alert('The button has been clicked.');
    });
    
    $('form').submit(function() {
        event.preventDefault();
        alert($('input[type="text"]').val());
        $('<div><h2>' + $('input[type="text"]').val() + '</h2></div>').appendTo('body');
            $("h2").mouseover(function() {
             $(this).addClass('style');
                
        });
            $("h2").mouseout(function() {
            $(this).removeClass('style');
            
    });
    });
    
});

