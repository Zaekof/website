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
  AmountEnd: 0
}
const fn_animated = function () {
  if (statut.isAnimated === false) {
    statut.isAnimated = true
    console.log('start animation')

    $(".pl_cpt").css("margin-top", "-50px")

    setTimeout(function () {
      $(".pl_cpt").css("margin-top", "0px")
      statut.isAnimated = false
    }, 30000)
  }
}
const fn_start = function () {
  if (data.onLoad) {
    console.log('déjà en cours')
    data.cpt_left += 1
  } else if (!data.onLoad) {
    console.log('start')
    data.onLoad = true

    document.getElementById('entree_video').play()
    setTimeout(function () {
      document.getElementById('entree_video').pause()
      document.getElementById('entree_video').currentTime = 0

      if (data.cpt_left >= 1) {
        data.cpt_left -= 1
        console.log(data.cpt_left)
        data.onLoad = false
        fn_start()
      } else if (data.cpt_left <= 0) {
        data.onLoad = false
      }
      console.log('clear')
    }, 8000)
  }
}
const fn_loop = function () {
  setInterval(function () {
    fn_sync()
  }, 7000)
}
const fn_sync = async function () {
  try {
    const response = await fetch('https://api.twitch.tv/kraken/users/42141251/subscriptions/42141251', {
      headers: {
        'Content-Type': 'application/json',
        "Client-ID": '1low3gl5nz7ep5o6qgj0xtrpd96mszn',
        "Authorization": 'OAuth rppklngtx28u44vmu3qt80e8yjk5zn',
        'Accept': 'application/vnd.twitchtv.v5+json'
      },
      method: "GET",
    });
    if (response.ok) {
      const jsonData = await response.json();
      console.log(jsonData);
/**
    let amountText = document.getElementById('amount')
    let amountEnd = document.getElementById('amoutEnds')
    if (typeof result["_total"] !== "undefined") {

        data.subCount = parseInt(result["_total"])
        $(amountText).text(data.subCount)
        data.AmountEnd = data.subCount + 1
        $(amountEnd).text(data.AmountEnd)
  
    }
 */
    } else {
      console.error('server response : ' + response.status);
    }
  } catch (error) {
    console.error(error);
  }
}
const fn_syncf = function () {
  console.log('fn_sync');
  $.ajax({
    url: 'https://api.twitch.tv/kraken/users/42141251/subscriptions/42141251',
    type: 'GET',
    headers: {
      "Client-ID": '1low3gl5nz7ep5o6qgj0xtrpd96mszn',
      "Authorization": 'OAuth rppklngtx28u44vmu3qt80e8yjk5zn',
      'Accept:': 'application/vnd.twitchtv.v5+json'
    },
  }).done(function (result) {
    console.log(result);
    let amountText = document.getElementById('amount')
    let amountEnd = document.getElementById('amoutEnds')
    if (typeof result["_total"] !== "undefined") {

        data.subCount = parseInt(result["_total"])
        $(amountText).text(data.subCount)
        data.AmountEnd = data.subCount + 1
        $(amountEnd).text(data.AmountEnd)
        
        /*while (subCount >= AmountEnd) {
            AmountEnd += 1
            $(amountEnd).text(AmountEnd)
        }*/
    }
  });
}
const fn_twitch = function () {
  const options = {
    options: {
      debug: true
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
  }
  const client = new tmi.client(options)
  client.on('chat', function (channel, userstate, message, self) {
    if (message == '!sub') {
      fn_animated()
    }
  })
  client.on('connected', (adress, port) => {
    console.log(client.getUsername() + " s'est connecté sur : " + adress + ", port : " + port)
  })
  client.connect()
  streamlabs.on('event', (eventData) => {
    // Donation
    if (eventData.type === 'donation')
        fn_start()
    else if (eventData.for === 'twitch_account') {
      switch(eventData.type) {
        case 'bits':
          fn_start()
          break
        case 'subscription':
          fn_start()
          break
        default:
          //console.log('defaut', eventData.message); 
      }
    }
  })
}

document.getElementById('entree_video').pause()
fn_sync()
fn_twitch()
fn_loop()


/**
 * Just for event test
 */
document.addEventListener('keyup', (event) => {
  if (event.isComposing || event.keyCode === 229) {
      return;
  }
  if (event.keyCode === 68) {
    fn_start()
  }
  if (event.keyCode === 83) {
    fn_animated()
  }
});