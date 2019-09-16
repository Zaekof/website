document.addEventListener("keydown", function (e) {
    if (e.which == 80) {
        
        $('#img-barre').removeClass('slide-out-left');
        $('#img-socle').removeClass('rotate-out-2-ccw');

        $('.pl_overlay').fadeIn();
        $('.pl_overlay').css('left','-28px');
        $('#img-socle').addClass('rotate-in-2-bl-cw');
        $('#img-barre').addClass('slide-in-left');
        
        setTimeout(function () {
            $('.titre').fadeIn();
            $('.titreParticipants').fadeIn();
        }, 4000)

    } else if (e.which == 79) {

        setTimeout( function () {
            $('#img-socle').removeClass('rotate-in-2-bl-cw');
            $('#img-socle').addClass('rotate-out-2-ccw');
            $('.pl_overlay').css('left','-700px');
            $('.pl_overlay').fadeOut();
        }, 2000)

        $('#img-barre').removeClass('slide-in-left');

        $('.titre').fadeOut();
        $('.titreParticipants').fadeOut();
        $('#img-barre').addClass('slide-out-left');
        
    }
});