function afficherAnimation() {
  $('#img-barre').removeClass('slide-out-left');
  $('#img-socle').removeClass('rotate-out-2-ccw');

  $('.pl_overlay').fadeIn();
  $('.pl_overlay').css('left','-28px');
  $('#img-socle').addClass('rotate-in-2-bl-cw');
  $('#img-barre').addClass('slide-in-left');
  
  setTimeout(function () {
      $(".status-end").fadeOut();
      $('.titre').fadeIn();
      $('.titreParticipants').fadeIn();
      $(".status-timer").fadeIn();
  }, 4000)
}

function cacherAnimation() {
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

  $(".status-timer").fadeOut();
  $(".status-end").fadeOut();
}

function afficherStatutTimer() {
  $(".status-end").fadeOut();
  $(".status-timer").fadeIn();
}

function afficherStatutEnd() {
  $(".status-timer").fadeOut(),
  $(".status-end").fadeIn();
}

function cacherStatut() {
  $(".status-timer").fadeOut();
  $(".status-end").fadeOut(); 
  console.log('clear');
}