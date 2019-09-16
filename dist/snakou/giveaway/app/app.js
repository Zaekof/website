const channel = "zaekof";
const prefix = "!";

/* variables */
let NomDuGiveaway = "";
let timerGiveaway = 30;

let arrayGiveaway = [];
let UserValid = [];
let WinerUsername = "";

let Giveaway_start_verif = "";
let Giveaway_status = false;
let Giveaway_winer_status = false;
let Giveaway_status_end = false;

let pl_cpt = 0;
let grade = 'follow';
let subs = '0subs';
let pl_cpt_FinChrono = 0;
let pl_intervalChrono = 0;

const OPTIONS = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: "zaekof",
        password: "oauth:25xm8u4rf31jqidtvh2fpa0zr2jif0"
    },
    channels: ["#zaekof"]
};

let client = new tmi.client(OPTIONS);

client.on('connected', (adress, port) => {
    console.log(client.getUsername() + " s'est connecté sur : " + adress + ", port : " + port);
});

/**
 * !giveaway "nom du giveaway"
 * !giveaway end
 * !giveaway roll
 * !enter
 */

client.on('chat', function (channel, user, message, self) {
    if (self) return;

    let fullCommand = commandParser(message);

    if (fullCommand) {
        const COMMANDE = fullCommand[1];
        const PARAMS = fullCommand[2];        
        if (isBroadcaster(user) || isModerator(user)) {
            grade = 'modo';
        } else if (isSubscriber(user)) {
            grade = 'subs';
        } else {
            grade = 'follow';
        }

        if (fullCommand[2].search('"') !== -1 && grade === 'modo') {
            const NOM_GIVEAWAY = fullCommand[2].split('"', 2)[1];
    
            arrayGiveaway = PARAMS.split(' ');
            const arrayGiveawayLength = arrayGiveaway.length - 1;
    
            if (isNaN(arrayGiveaway[arrayGiveawayLength])) {
                timerGiveaway = 180;
            } else {
                if (arrayGiveaway[arrayGiveawayLength] < 10) {
                    timerGiveaway = 180;
                } else {
                    timerGiveaway = arrayGiveaway[arrayGiveawayLength];
                }
            }
    
            if (COMMANDE === 'giveaway') {
                if (grade === 'modo') {
                    if (!Giveaway_status && PARAMS !== '') {
                        console.log("Start giveaway");
    
                        NomDuGiveaway = NOM_GIVEAWAY;
                        Giveaway_status = true;
                        Giveaway_winer_status = false;
    
                        client.say(channel, `imGlitch Début du Giveaway pour (${NomDuGiveaway}), pour participer entre la commande "!enter. Bonne chance à toutes et à tous.`);
                        
                        $("#giveawayGain").html(""+NomDuGiveaway+"");
                        $("#participantsCPT").html(''+pl_cpt+'');
                        
                        pl_cpt_FinChrono = 0;
                        
                        pl_chrono("normal");
                    }
                }            
            }
        } else {
            if (COMMANDE === 'giveaway' && grade === 'modo') {
                if (PARAMS.trim() === 'end') {
                    if (Giveaway_status) {
                        if (Giveaway_status_end) {
                            console.log('end.. ..');
                            Giveaway_status_end = false;
                            client.say(channel, `imGlitch Fin du giveaway, GG (@${WinerUsername}) !`);
                            pl_FinChrono('end');
                        } else {
                            startTimer(0, 0, 'end');
                        }
                    }
                } else if (PARAMS.trim() === 'roll') {
                    if ((Giveaway_status == true) && (Giveaway_winer_status == true)) {
                        console.log("Roll Giveaway");
                        pl_pick();
                    }
                }        
            } else if (COMMANDE === 'enter') {
                if (Giveaway_status && !Giveaway_winer_status)
                ValidOrNot(user.username, grade);            
            }
        }   
    }

});

function writeArray(viewerName, grade, subs) {  
    var outputTemplate = $('#entry-template').html();
    var leaderboard = $('.leaderboard-output');
    template = $(outputTemplate);
    var viewerNameListe = "data-"+viewerName+"='"+grade+" "+subs+"'";


    if (grade === 'modo') {
        template.find('.user-name').html(`<span ${viewerNameListe} >${viewerName}</span>`);
    } else if (grade === "subs") {
        template.find('.user-name').html(`<span ${viewerNameListe} >${viewerName}</span>`);            
    } else if (grade === "follow") {
        template.find('.user-name').html(`<span ${viewerNameListe} >${viewerName}</span>`);
    }

    leaderboard.append(template);
}

function ValidOrNot(UserNotValid, grade) {
    if (UserValid.indexOf(UserNotValid) === -1) {
        UserValid.push(UserNotValid);
        pl_cpt += 1;

        $("#participantsCPT").html(''+pl_cpt+'');

        writeArray(UserNotValid, grade, subs);
        console.log(UserNotValid+" est dans le tableau");
    } else if (UserValid.indexOf(UserNotValid) > -1) {
        console.log(UserNotValid+" est deja dans le tableau");
    }
}

function pl_clearGiveAway() {
    UserValid = [];
    Giveaway_start_verif = "";
    pl_cpt = 0;
    grade = 'follow';
    $("#participantsCPT").html(''+pl_cpt+'');
    arrayGiveaway = [];
    timerGiveaway = 30;
}

function pl_pick() {
    var audioElm = document.getElementById("audio1");
    audioElm.src = document.getElementById('audioFile').value;
    audioElm.play();
    audioElm.volume = 0.3;

    var SubsPick = "";
    var PickSubs = "";
    var PickGrade = "";
    var pl_number = 0;
    var UserValidLength = UserValid.length - 1;

    pl_number = Math.random() * (UserValidLength - 0) + 0;
    pl_number = Math.round(pl_number);

    var a = document.querySelectorAll('[data-'+UserValid[pl_number]+']');

    for (var i in a) if (a.hasOwnProperty(i)) {
        SubsPick = a[i].getAttribute('data-'+UserValid[pl_number]+'');
    }

    $("#winerUsername").fadeOut();

    if (SubsPick == "subs 0subs") {
        PickGrade = "subs";
        PickSubs = "0subs";
        $("#winerUsername").html("<img src='./app/img/0subs.png' />"+UserValid[pl_number]+"");
    } else if (SubsPick == "subs 3subs") {
        PickGrade = "subs";
        PickSubs = "3subs";
        $("#winerUsername").html("<img src='./app/img/3subs.png' />"+UserValid[pl_number]+"");
    } else if (SubsPick == "subs 6subs") {
        PickGrade = "subs";
        PickSubs = "6subs";
        $("#winerUsername").html("<img src='./app/img/6subs.png' />"+UserValid[pl_number]+"");
    } else if (SubsPick == "subs 12subs") {
        PickGrade = "subs";
        PickSubs = "12subs";
        $("#winerUsername").html("<img src='./app/img/12subs.png' />"+UserValid[pl_number]+"");
    } else if (SubsPick == "subs 26subs") {
        PickGrade = "subs";
        PickSubs = "24subs";
        $("#winerUsername").html("<img src='./app/img/24subs.png' />"+UserValid[pl_number]+"");
    } else if (SubsPick == "follow 0subs") {
        PickGrade = "follow";
        PickSubs = "0subs";
        $("#winerUsername").html("<img src='./app/img/follow.png' />"+UserValid[pl_number]+"");
    } else if (SubsPick == "modo 0subs") {
        PickGrade = "modo";
        PickSubs = "0subs";
        $("#winerUsername").html("<img src='./app/img/mod.png' />"+UserValid[pl_number]+"");
    } else {
        $("#winerUsername").html("<img src='./app/img/follow.png' />"+UserValid[pl_number]+"");
    }

    WinerUsername = UserValid[pl_number];

    $("#winerUsername").fadeIn();  

    client.say(channel, `imGlitch Le gagnant du giveaway pour (${NomDuGiveaway}) est : @${WinerUsername}  GG`);
}

client.connect();