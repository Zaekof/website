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
  fetch('https://api.twitch.tv/kraken/channels/42141251/subscriptions', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Authorization': 'OAuth rppklngtx28u44vmu3qt80e8yjk5zn',
      'Client-ID': '1low3gl5nz7ep5o6qgj0xtrpd96mszn'
    }
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (typeof(data) === 'object') {
      if (Object.entries(data).length !== 0) {
        const SUBS = (data._total !== null)? data._total : null;
        document.getElementById('amount').innerText = SUBS;
        document.getElementById('amoutEnds').innerText = SUBS + 1;
      }
    }
  })
  .catch((error) => {
    console.log(error);
  })
}

ft_sync();
ft_loop();
