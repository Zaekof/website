<template>
  <div class="pl_body">
    <div class="pl_content">
      <div class="image">
        <img src="~assets/game/cadre-facecam-new.png" alt="logo hyperx">
        <div class="CptSubs">
          <img id="ANIMATION_img" src="~assets/game/other_partenaire.png" alt="CPT SUBS">
          <p id="ANIMATION_p" class="txt"><span id="amount">1676</span>/<span id="amoutEnds">1700</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tmi from 'tmi.js';
import $ from 'jquery';

let statut = {
  isAnimated: false
}
function animated () {
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
};

export default {
  name: 'dev-snake-cam',
  data() {
    return {
      onLoad: false,
      cpt_left: 0,
      statut: {
        isAnimated: false
      },
      subCount: 0,
      AmountEnd: 0,
      cpt: 0
    }
  },
  methods: {
    loop: function () {
      setInterval(function () {
        this.sync();
      }.bind(this), 7000);
    },
    sync: function () {
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
    this.twitch();
    this.loop();
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Quicksand:700');
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

  :root {
    --main-time-global: 400s; /* 600s == 10 min*/
  }

  .pl_content .image {
    position: absolute;
    top: 30%;
    left: 0;
    z-index: 999;
  }

  /* CPT SUBS */

  .pl_content .CptSubs {
    position: absolute;
    width: 200px;
    height: 50px;
    top: 357px;
    left: 270px;
    clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%);
    overflow: hidden;
    font-family: BOLD;
  }

  .pl_content .CptSubs img {
    height: 50px;
    float: right;
    margin: 0 0 0 0;
    margin-right: 250px;
    transition: 3s;
    /*animation: infinite pl_asideCamCptSubs var(--main-time-global);*/
  }

  .pl_content .CptSubs p {
    width: 107px;

    color: white;
    position: absolute;
    /*left: 45%;*/
    left: -200px;
    margin: 12px 0 0 0;
    font-size: 30px;
    font-family: BOLD;
    transition: 3s;
    text-align: center;
    /*animation: infinite pl_asideCamCptSubsTexte var(--main-time-global);*/
  }

 

  /* CPT-SUBS */

  @keyframes pl_asideCamCptSubs {
    0%,20.4% {
      margin-right: 250px;
    }

    20.6%, 60% {
      margin: 0;
    }

    60.2%, 100% {
      margin-right: 250px;
    }
  }

  @keyframes pl_asideCamCptSubsTexte {
    0%,20.2% {
      left: -200px;
    }

    20.6%, 60% {
      left: 90px;
    }

    60.2%, 100% {
      left: -200px;
    }
  }
</style>
