//const socketToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IkRCM0M4QTUyQkQxOTA0NkIyMDYxIiwicmVhZF9vbmx5Ijp0cnVlLCJwcmV2ZW50X21hc3RlciI6dHJ1ZSwidHdpdGNoX2lkIjoiNTMzODA2MDYifQ.wl27wu0r2kvr-IDKw2cQlLQnotYR7991iN4pGi-GIKA'
const socketToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IjNCMTFGNTNFM0M4OUQ0RjAiLCJyZWFkX29ubHkiOnRydWUsInByZXZlbnRfbWFzdGVyIjp0cnVlLCJ0d2l0Y2hfaWQiOiI0MjE0MTI1MSJ9.3eBuTY2H-XMla8Ebb8rPdK1Bv2jNugl5AoRYPgmcRJU'
const streamlabs = io(`https://sockets.streamlabs.com?token=${socketToken}`, {transports: ['websocket']})

let statut = {
  isAnimated: false
}
let data = {
  onLoad: false,
  cpt_left: 0,
  subCount: 0,
  AmountEnd: 0,
  cpt: 0
}

const ft_loop = function () {
  setInterval(function () {
    ft_sync();
  }, 7000);
}
const ft_sync = function () {
  console.log('ft_sync');
  $.ajax({
    type: 'GET',
    url: `https://api.twitch.tv/kraken/channels/mastersnakou/subscriptions?limit=1`,
    headers: {
      "Client-ID": '1low3gl5nz7ep5o6qgj0xtrpd96mszn',
      "Authorization": 'OAuth rppklngtx28u44vmu3qt80e8yjk5zn'
    },
    dataType: "json"
  }).done(function (result) {
    console.log('done');
    let amountText = document.getElementById('amount');
    let amountEnd = document.getElementById('amoutEnds');
    if (typeof result["_total"] !== "undefined") {

        data.subCount = parseInt(result["_total"]);
        $(amountText).text(data.subCount);
        data.AmountEnd = data.subCount + 1;
        $(amountEnd).text(data.AmountEnd);
        
        /*while (subCount >= AmountEnd) {
            AmountEnd += 1;
            $(amountEnd).text(AmountEnd);
        }*/
    }
  });
}
const ft_animated = function () {
  if (statut.isAnimated === false) {
    statut.isAnimated = true;

    $(".CptSubs img").css("margin-right", "0px");
    $(".CptSubs p").css("left", "90px");

    setTimeout(function () {
      $(".CptSubs img").css("margin-right", "250px");
      $(".CptSubs p").css("left", "-200px");

      statut.isAnimated = false;
    }, 30000);
  }
}
const ft_twitch = function () {
  const options = {
    options: {
      debug: false
    },
    connection: {
      reconnect: true,
      secure: true
    },
    identity: {
      username: "zaekofbot",
      password: "oauth:gcyv0hlf7g8h3jxpr5ic6bnpavd797"
    },
    channels: ["#mastersnakou"]
  };
  const client = new tmi.client(options);
  client.on("chat", function (channel, userstate, message, self) {
    if (message == '!sub') {
      ft_animated();
    }
  });
  client.on('connected', (adress, port) => {
    console.log(client.getUsername() + " s'est connecté sur : " + adress + ", port : " + port);
  });
  client.connect();      
}

ft_twitch();
ft_loop();

/**
 * Just for event test
 */
document.addEventListener('keyup', (event) => {
  if (event.isComposing || event.keyCode === 229) {
      return;
  }
  if (event.keyCode === 83) {
    ft_animated();
  }
});