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

ft_sync();
ft_loop();