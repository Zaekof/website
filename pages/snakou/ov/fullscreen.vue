<template>
  <div class="pl_body">
    <div class="pl_content">
      <img src="~assets/fullscreen/full.png" alt="image">
      <aside class="pl_aside">
        <img id="ANIMATION_img" src="~assets/fullscreen/cptsubs.png" alt="image">
        <p id="ANIMATION_p" class="txt"><span id="amount">1700</span>/<span id="amoutEnds">1701</span></p>
      </aside>
    </div>
  </div>
</template>

<script>
import tmi from 'tmi.js';
import io from 'socket.io-client';
import $ from 'jquery';

const socketToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6IjNCMTFGNTNFM0M4OUQ0RjAiLCJyZWFkX29ubHkiOnRydWUsInByZXZlbnRfbWFzdGVyIjp0cnVlLCJ0d2l0Y2hfaWQiOiI0MjE0MTI1MSJ9.3eBuTY2H-XMla8Ebb8rPdK1Bv2jNugl5AoRYPgmcRJU';
const streamlabs = io(`https://sockets.streamlabs.com?token=${socketToken}`, {transports: ['websocket']});

let statut = {
  isAnimated: false
}
function animated () {
  if (statut.isAnimated === false) {
    statut.isAnimated = true;

    $(".pl_aside img").css("left", "0");
    $(".pl_aside p").css("left", "75px");

    setTimeout(function () {
      $(".pl_aside img").css("left", "-300px");
      $(".pl_aside p").css("left", "-225px");

      statut.isAnimated = false;
    }, 30000);
  }
};

export default {
  name: 'dev-snake-fullscreen',
  data() {
    return {
      onLoad: false,
      cpt_left: 0,
      subCount: 0,
      AmountEnd: 0,
      cpt: 0
    }
  },
  methods: {
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
    }
  },
  mounted() {
    this.sync();
    this.twitch();
    this.loop();
  }  
}
</script>

<style scoped>
  @font-face {
    font-family: 'BOLD';
    src: url('~assets/fonts/big_noodle_titling.ttf');
  }
  /* Reset */
  html, body {
    margin: 0; padding: 0;
    background: transparent;
    background-image: none;
    font-family: BOLD;
  }

  ._center {
    text-align: center;
  }

  .pl_content img {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 1920px;
    height: 105px;
  }
  /* cptSubs */

  .pl_aside img {
    position: absolute;
    top: 0%;
    left: -300px;
    /*left: 0;*/
    width: auto;
    height: auto;
    transition: 3s;

  }

  .pl_aside p {
    position: absolute;
    color: rgb(252, 252, 252);
    top: 30px;
    /*left: 75px;*/
    width: 135px;

    left: -225px;
    text-align: center;
    font-size: 37px;
    font-family: BOLD;
    transition: 3s;
  }
</style>