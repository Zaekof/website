<template>
  <div>
    <video id="entree_video" preload="auto" src="~assets/videos/overlay01.mp4"></video>
    <!--<button id="btn_test" style="display: none">event test</button>-->
    <div class="hide_block">
      <div class="pl_cpt">
        <img src="~assets/images/snake.png" alt="CPT SUBS"/>
        <p class="txt"><span id="amount">---</span>/<span id="amoutEnds">---</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import tmi from 'tmi.js';
import io from 'socket.io-client';
import $ from 'jquery';

const socketToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IjNCMTFGNTNFM0M4OUQ0RjAiLCJyZWFkX29ubHkiOnRydWUsInByZXZlbnRfbWFzdGVyIjp0cnVlLCJ0d2l0Y2hfaWQiOiI0MjE0MTI1MSJ9.3eBuTY2H-XMla8Ebb8rPdK1Bv2jNugl5AoRYPgmcRJU';
//const socketToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IkRCM0M4QTUyQkQxOTA0NkIyMDYxIiwicmVhZF9vbmx5Ijp0cnVlLCJwcmV2ZW50X21hc3RlciI6dHJ1ZSwidHdpdGNoX2lkIjoiNTMzODA2MDYifQ.wl27wu0r2kvr-IDKw2cQlLQnotYR7991iN4pGi-GIKA';
const streamlabs = io(`https://sockets.streamlabs.com?token=${socketToken}`, {transports: ['websocket']});

let statut = {
  isAnimated: false
}
function animated () {
  if (statut.isAnimated === false) {
    statut.isAnimated = true;
    console.log('start animation');

    $(".pl_cpt").css("margin-top", "-50px");

    setTimeout(function () {
      $(".pl_cpt").css("margin-top", "0px");
      statut.isAnimated = false;
    }, 30000);
  }
};

export default {
  head () {
    return {
      title: `${this.name} | loicnogier.fr`
    }
  },
  data() {
    return {
      name: 'Snakou',
      onLoad: false,
      cpt_left: 0,
      subCount: 0,
      AmountEnd: 0
    }
  },
  methods: {
    start () {
      if (this.onLoad) {
        console.log('déjà en cours');
        this.cpt_left += 1;
      } else if (!this.onLoad) {
        console.log('start');
        this.onLoad = true;

        document.getElementById('entree_video').play();
        setTimeout(function () {
          document.getElementById('entree_video').pause();
          document.getElementById('entree_video').currentTime = 0;

          if (this.cpt_left >= 1) {
            this.cpt_left -= 1;
            console.log(this.cpt_left);
            this.onLoad = false;
            this.start();
          } else if (this.cpt_left <= 0) {
            this.onLoad = false;
          }
          console.log('clear');
        }.bind(this), 20000);
      }
    },
    loop () {
      setInterval(function () {
        this.sync();
      }.bind(this), 7000);
    },
    sync () {
      $.ajax({
        type: 'GET',
        url: `https://api.twitch.tv/kraken/channels/mastersnakou/subscriptions?limit=1`,
        headers: {
          "Client-ID": '1low3gl5nz7ep5o6qgj0xtrpd96mszn',
          "Authorization": 'OAuth rppklngtx28u44vmu3qt80e8yjk5zn'
        },
        dataType: "json"
      }).done(function (result) {
        let amountText = document.getElementById('amount');
        let amountEnd = document.getElementById('amoutEnds');
        if (typeof result["_total"] !== "undefined") {

            this.subCount = parseInt(result["_total"]);
            $(amountText).text(this.subCount);
            this.AmountEnd = this.subCount + 1;
            $(amountEnd).text(this.AmountEnd);
            
            /*while (subCount >= AmountEnd) {
                AmountEnd += 1;
                $(amountEnd).text(AmountEnd);
            }*/
        }
      });
    },      
    twitch () {
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
          animated();
        }
      });
      client.on('connected', (adress, port) => {
        console.log(client.getUsername() + " s'est connecté sur : " + adress + ", port : " + port);
      });
      client.connect();
      streamlabs.on('event', (eventData) => {
        // Donation
        if (eventData.type === 'donation')
            this.start();
        else if (eventData.for === 'twitch_account') {
          switch(eventData.type) {
            case 'bits':
              this.start();
              break;
            case 'subscription':
              this.start();
              break;
            default:
              //console.log('defaut', eventData.message); 
          }
        }
      });
    }    
  },
  mounted () {
    document.getElementById('entree_video').pause();
    this.sync();
    this.twitch();
    this.loop();
  }  
}
</script>

<style scoped>
/* Reset */
    html, body {
        margin: 0; padding: 0;
        background: transparent;
        background-image: none;
        font-family: BOLD;
    }
/* Animation */
    .page-enter-active, .page-leave-active {
    transition: all .25s ease-out;
    }
    .page-enter, .page-leave-active {
    opacity: 0;
    transform-origin: 50% 50%;
    }

    .v-enter-active {
        transition: 3s ease-in-out;
    }
    .v-leave-active {
        transition: 0.5s ease-in;
    }
    .v-enter, .v-leave-to {
        opacity: 0;
    }

._center {
  text-align: center;
}

@font-face {
	font-family: 'BOLD';
	src: url('~assets/fonts/big_noodle_titling.ttf');
}


@import url('https://fonts.googleapis.com/css?family=Quicksand:700');

p, h1, h2, a {
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    background-color: #EC008C;
    font-family: 'Quicksand', sans-serif;
}

video {
    width: 1920px;
    height: 1080px;

    position: absolute;
    top: 0;
    left: 0;

    margin: 0;
    padding: 0;

    z-index: 2;
}

#btn_test {
    width: 100px;
    height: 30px;

    position: absolute;
    top: 20vh;
    left: 10vw;

    border: none;
    z-index: 4;
    text-transform: uppercase;
    font-family: 'Quicksand', sans-serif;
}
.pl_cpt {
    width: 170px;
    height: 50px;

    position: absolute;
    top: 100px; /*top: 30px;*/
    left: 50px;
    
    font-family: BOLD;
    z-index: 4;
    transition: 3s;
}

.pl_cpt img {
    height: 50px;
    float: left;
    margin: 0;
    z-index: 4;
}

.pl_cpt p {
    height: 50px;
    float: right;
    margin: 0;
    font-size: 35px;
    font-family: BOLD;
    color: white;
    line-height: 53px;
    z-index: 4;
}
.hide_block {
    width: 300px;
    height: 95px;

    position: absolute;
    top: 0px;
    left: 1580px;

    background-color: transparent;
    overflow: hidden;
    z-index: 5;
}
</style>