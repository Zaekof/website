<template>
  <div class="pl_cpt">
    <img src="~assets/images/snake2.png" alt="CPT SUBS">
    <p class="txt"><span id="amount">---</span>/<span id="amoutEnds">---</span></p>
  </div>
</template>

<script>
export default {
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
  },
  mounted() {
    this.sync();
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
  
  
  /* CPT SUBS */

  .pl_cpt {
    position: absolute;
    width: 170px;
    height: 50px;
    top: 357px;
    left: 270px;
    overflow: hidden;
    font-family: BOLD;
  }

  .pl_cpt img {
      height: 50px;
      float: left;
      margin: 0;
  }

  .pl_cpt p {
      height: 50px;
      float: right;
      margin: 0;
      font-size: 35px;
      font-family: BOLD;
      color: white;
      line-height: 53px;
  }
</style>
