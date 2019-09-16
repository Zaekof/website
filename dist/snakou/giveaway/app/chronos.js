/* CHRONO */
function pl_chrono(intervalClear){
  if (intervalClear == "normal") {
      var fiveMinutes = timerGiveaway;//180
      var display = $('#time');

      //$(".pl_overlay").css('left','-29px');
      afficherAnimation();

      pl_open_sound = true;
      console.log("pl_Chrono / interval = "+intervalClear);
      startTimer(fiveMinutes, display, intervalClear);
  }
}

function startTimer(duration, display, intervalClear) {
  var timer = duration, minutes, seconds; 

  if (intervalClear == "normal") {
      console.log("timer start");

      var intervalChrono = setInterval(function() {  
          if (pl_open_sound) {
              let audioElm_open = document.getElementById("audio1_open");
              audioElm_open.src = document.getElementById('audioFile_open').value;
              audioElm_open.play();
              audioElm_open.volume = 0.3;

              console.log("son");
              pl_open_sound = false;
          }

          minutes = parseInt(timer / 60, 10)
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          display.text(minutes + ":" + seconds);
          pl_intervalChrono = intervalChrono;

          if (--timer < 0) {
              timer = duration;
              clearInterval(intervalChrono);
              if (pl_cpt_FinChrono == 0) {
                  pl_FinChrono("normal");
              }
          }
      }, 1000);

  } else if (intervalClear == "end") {


      //$(".pl_overlay").css('left','-700px');
      cacherAnimation();


      var audioElm_close = document.getElementById("audio1_close");
      audioElm_close.src = document.getElementById('audioFile_close').value;
      audioElm_close.play();
      audioElm_close.volume = 0.3;

      clearInterval(pl_intervalChrono);
      Giveaway_status = false;
      pl_clearGiveAway();
  }
}

function pl_FinChrono(statusGive) {
  pl_cpt_FinChrono = 1;

  if (statusGive == "end") {
      Giveaway_status_end = false;
      console.log("statusGive end ... : ");
      if (Giveaway_winer_status == true) {

          //$(".pl_overlay").css('left','-700px');
          cacherStatut();
          cacherAnimation();

          var audioElm_close = document.getElementById("audio1_close");
          audioElm_close.src = document.getElementById('audioFile_close').value;
          audioElm_close.play();
          audioElm_close.volume = 0.3;

          /*var maintenant=new Date();
          var jour=maintenant.getDate();
          var mois=maintenant.getMonth()+1;
          var an=maintenant.getFullYear();

          if (mois <= 9)
              mois = "0"+mois;
          if (jour <= 9)
              jour = "0"+jour;

          var dateToDay = "("+an+"-"+mois+"-"+jour+")";
          var usernameWiner = WinerUsername+dateToDay+"|";
          $.post('winer/update.php', {variable: usernameWiner});*/
          console.log("fin..");
          Giveaway_status = false;
          pl_clearGiveAway();
      } else {
          cacherStatut();
      }
  } else {
      Giveaway_status_end = true;
      $('#time').html("fini");

      if (Giveaway_status == true) {
          setTimeout(() => {
              Giveaway_winer_status = true;
              afficherStatutEnd();
              pl_pick();
          }, 3000);
      }
  }
}