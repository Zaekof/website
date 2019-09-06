<template>
<div class="pl_body">  
  <div class="pl_content">
    <div class="pl_icon">
      <img src="~assets/rsociaux/assets/newv2/snapchat-logo.png" alt="logo snapchat">
    </div>
    <div class="pl_texte">
      <img src="~assets/rsociaux/assets/newv2/snapchat-texte.png" alt="logo snapchat">
    </div>
  </div>

  <div class="pl_content">
    <div class="pl_icon">
        <img src="~assets/rsociaux/assets/newv2/twitter-logo.png" alt="logo twitter">
    </div>
    <div class="pl_texte">
        <img src="~assets/rsociaux/assets/newv2/twitter-texte.png" alt="logo twitter">
    </div>
  </div>

  <div class="pl_content">
    <div class="pl_icon">
        <img src="~assets/rsociaux/assets/newv2/facebook-logo.png" alt="logo facebook">
    </div>
    <div class="pl_texte">
        <img src="~assets/rsociaux/assets/newv2/facebook-texte.png" alt="logo facebook">
    </div>
  </div>

  <div class="pl_content">
    <div class="pl_icon">
        <img src="~assets/rsociaux/assets/newv2/instagram-logo.png" alt="logo instagram">
    </div>
    <div class="pl_texte">
        <img src="~assets/rsociaux/assets/newv2/instagram-texte.png" alt="logo instagram">
    </div>
  </div>
</div>
</template>

<script>
export default {

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
  
  
  /* 1800s;  2400s == 40 min*/


  .pl_body {
		position: absolute;
		top: 1%;
		left: 0;
		width: 100%;
		height: 47px;
	}

  .pl_content .pl_icon {
    float: left;
  }

  .pl_content:nth-child(1) {
    position: absolute;
    left: 42.5%;
    top: 0;
    height: 70px;
    width: 300px;
  }

  .pl_content:nth-child(1) .pl_texte {
    width: 300px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 10px;
    overflow: hidden;

    animation-name: pl_sc;
    /*animation-duration: 1800s; */
    animation-duration: 1800s;
    animation-iteration-count: infinite;
    transform-origin: 50% 100%;
  }

  .pl_content:nth-child(1) .pl_icon img {
    position: absolute;
    top: 0;
    height: 70px;
    width: 80px;
    z-index: 2;
  
    animation-name: pl_sc-logo;
    animation-duration: 1800s;
    animation-iteration-count: infinite;
    transform-origin: 50% 100%;
  }

  .pl_content:nth-child(1) .pl_texte img {
    position: absolute;
    left: -30px;
    top: 0;
    height: 70px;
    width: 300px;
    z-index: 1;

    animation-name: pl_sc-texte;
    animation-duration: 1800s;
    animation-iteration-count: infinite;
    transform-origin: 50% 100%;
  }

  .pl_content:nth-child(2) {
    position: absolute;
    left: 42.5%;
    top: 0;
    height: 70px;
    width: 300px;
  }

  .pl_content:nth-child(2) .pl_texte {
    width: 300px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 10px;
    overflow: hidden;

    animation-name: pl_tw;
    animation-duration: 1800s;
    animation-iteration-count: infinite;
    transform-origin: 50% 100%;
  }

  .pl_content:nth-child(2) .pl_icon img {
    position: absolute;
    top: 0;
    height: 70px;
    width: 80px;
    z-index: 2;
  
    animation-name: pl_tw-logo;
    animation-duration: 1800s;
    animation-iteration-count: infinite;
    transform-origin: 50% 100%;
  }

  .pl_content:nth-child(2) .pl_texte img {
    position: absolute;
    left: -30px;
    top: 0;
    height: 70px;
    width: 300px;
    z-index: 1;

    animation-name: pl_tw-texte;
    animation-duration: 1800s;
    animation-iteration-count: infinite;
    transform-origin: 50% 100%;
  }




  .pl_content:nth-child(3) {
    position: absolute;
    left: 42.5%;
    top: 0;
    height: 70px;
    width: 300px;
  }

  .pl_content:nth-child(3) .pl_texte {
    width: 300px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 10px;
    overflow: hidden;

    animation-name: pl_curse;
    animation-duration: 1800s;
    animation-iteration-count: infinite;
    transform-origin: 50% 100%;
  }

  .pl_content:nth-child(3) .pl_icon img {
    position: absolute;
    top: 0;
    height: 70px;
    width: 80px;
    z-index: 2;
  
    animation-name: pl_curse-logo;
    animation-duration: 1800s;
    animation-iteration-count: infinite;
    transform-origin: 50% 100%;
  }

  .pl_content:nth-child(3) .pl_texte img {
    position: absolute;
    left: -30px;
    top: 0;
    height: 70px;
    width: 300px;
    z-index: 1;

    animation-name: pl_curse-texte;
    animation-duration: 1800s;
    animation-iteration-count: infinite;
    transform-origin: 50% 100%;
  }




  .pl_content:nth-child(4) {
    position: absolute;
    left: 42.5%;
    top: 0;
    height: 70px;
    width: 300px;
  }

  .pl_content:nth-child(4) .pl_texte {
    width: 300px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 10px;
    overflow: hidden;

    animation-name: pl_fb;
    animation-duration: 1800s;
    animation-iteration-count: infinite;
    transform-origin: 50% 100%;
  }

  .pl_content:nth-child(4) .pl_icon img {
    position: absolute;
    top: 0;
    height: 70px;
    width: 80px;
    z-index: 2;
  
    animation-name: pl_fb-logo;
    animation-duration: 1800s;
    animation-iteration-count: infinite;
    transform-origin: 50% 100%;
  }

  .pl_content:nth-child(4) .pl_texte img {
    position: absolute;
    left: -30px;
    top: 0;
    height: 70px;
    width: 300px;
    z-index: 1;

    animation-name: pl_fb-texte;
    animation-duration: 1800s;
    animation-iteration-count: infinite;
    transform-origin: 50% 100%;
  }

  /* KEYFRAMES FOR SNAPCHAT */
  @keyframes pl_sc {
    0% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    0.1% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    0.10% {
      left: 10px;
      transform:  translate(0,0px);
    }
    01% {
      left: 10px;
      transform:  translate(0,0px);
    }
    01.05% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    100% {
      left: 10px;
      transform:  translate(0,-100px);
    }
  }

  @keyframes pl_sc-logo {
    0% {
      left: 20px;
      transform:  translate(0,-100px);
    }
    0.1% {
      left: 20px;
      transform:  translate(0,-100px);
    }
    0.15% {
      left: 20px;
      transform:  translate(0,0px);
    }
    0.2% {
      left: -18px;
      transform:  translate(0,0px);
    }
    01% {
      left: -18px;
      transform:  translate(0,0px);
    }
    01.05% {
      left: -18px;
      transform:  translate(0,-100px);
    }
    100% {
      left: -20px;
      transform:  translate(0,-100px);
    }
  }

  @keyframes pl_sc-texte {
    0% {
      transform:  translate(-300px,0);
    }
    0.2% {
      transform:  translate(-300px,0);
    }
    0.3% {
      transform:  translate(0,0);
    }
    01% {
      transform:  translate(0,0);
    }
    01.05% {
      transform:  translate(0,0);
    }
    100% {
      transform:  translate(0,0);
    }
  }




  /* KEYFRAMES FOR TWITTER */
  @keyframes pl_tw {
    0% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    31.1% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    31.10% {
      left: 10px;
      transform:  translate(0,0px);
    }
    32% {
      left: 10px;
      transform:  translate(0,0px);
    }
    32.05% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    100% {
      left: 10px;
      transform:  translate(0,-100px);
    }
  }

  @keyframes pl_tw-logo {
    0% {
      left: 20px;
      transform:  translate(0,-100px);
    }
    31.1% {
      left: 20px;
      transform:  translate(0,-100px);
    }
    31.15% {
      left: 20px;
      transform:  translate(0,0px);
    }
    31.2% {
      left: -18px;
      transform:  translate(0,0px);
    }
    32% {
      left: -18px;
      transform:  translate(0,0px);
    }
    32.05% {
      left: -18px;
      transform:  translate(0,-100px);
    }
    100% {
      left: -20px;
      transform:  translate(0,-100px);
    }
  }

  @keyframes pl_tw-texte {
    0% {
      transform:  translate(-300px,0);
    }
    31.2% {
      transform:  translate(-300px,0);
    }
    31.3% {
      transform:  translate(0,0);
    }
    32% {
      transform:  translate(0,0);
    }
    32.05% {
      transform:  translate(0,0);
    }
    100% {
      transform:  translate(0,0);
    }
  }



  /* KEYFRAMES FOR CURSE */
  @keyframes pl_curse {
    0% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    61.1% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    61.10% {
      left: 10px;
      transform:  translate(0,0px);
    }
    62% {
      left: 10px;
      transform:  translate(0,0px);
    }
    62.05% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    100% {
      left: 10px;
      transform:  translate(0,-100px);
    }
  }

  @keyframes pl_curse-logo {
    0% {
      left: 20px;
      transform:  translate(0,-100px);
    }
    61.1% {
      left: 20px;
      transform:  translate(0,-100px);
    }
    61.15% {
      left: 20px;
      transform:  translate(0,0px);
    }
    61.2% {
      left: -18px;
      transform:  translate(0,0px);
    }
    62% {
      left: -18px;
      transform:  translate(0,0px);
    }
    62.05% {
      left: -18px;
      transform:  translate(0,-100px);
    }
    100% {
      left: -20px;
      transform:  translate(0,-100px);
    }
  }

  @keyframes pl_curse-texte {
    0% {
      transform:  translate(-300px,0);
    }
    61.2% {
      transform:  translate(-300px,0);
    }
    61.3% {
      transform:  translate(0,0);
    }
    62% {
      transform:  translate(0,0);
    }
    62.05% {
      transform:  translate(0,0);
    }
    100% {
      transform:  translate(0,0);
    }
  }





  /* KEYFRAMES FOR FACEBOOK */
  @keyframes pl_fb {
    0% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    81.1% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    81.10% {
      left: 10px;
      transform:  translate(0,0px);
    }
    82% {
      left: 10px;
      transform:  translate(0,0px);
    }
    82.05% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    100% {
      left: 10px;
      transform:  translate(0,-100px);
    }
  }

  @keyframes pl_fb-logo {
    0% {
      left: 20px;
      transform:  translate(0,-100px);
    }
    81.1% {
      left: 20px;
      transform:  translate(0,-100px);
    }
    81.15% {
      left: 20px;
      transform:  translate(0,0px);
    }
    81.2% {
      left: -18px;
      transform:  translate(0,0px);
    }
    82% {
      left: -18px;
      transform:  translate(0,0px);
    }
    82.05% {
      left: -18px;
      transform:  translate(0,-100px);
    }
    100% {
      left: -20px;
      transform:  translate(0,-100px);
    }
  }

  @keyframes pl_fb-texte {
    0% {
      transform:  translate(-300px,0);
    }
    81.2% {
      transform:  translate(-300px,0);
    }
    81.3% {
      transform:  translate(0,0);
    }
    82% {
      transform:  translate(0,0);
    }
    82.05% {
      transform:  translate(0,0);
    }
    100% {
      transform:  translate(0,0);
    }
  }




  /* KEYFRAMES FOR INSTAGRAM */
  @keyframes pl_ig {
    0% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    91.1% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    91.10% {
      left: 10px;
      transform:  translate(0,0px);
    }
    92% {
      left: 10px;
      transform:  translate(0,0px);
    }
    92.05% {
      left: 10px;
      transform:  translate(0,-100px);
    }
    100% {
      left: 10px;
      transform:  translate(0,-100px);
    }
  }

  @keyframes pl_ig-logo {
    0% {
      left: 20px;
      transform:  translate(0,-100px);
    }
    91.1% {
      left: 20px;
      transform:  translate(0,-100px);
    }
    91.15% {
      left: 20px;
      transform:  translate(0,0px);
    }
    91.2% {
      left: -18px;
      transform:  translate(0,0px);
    }
    92% {
      left: -18px;
      transform:  translate(0,0px);
    }
    92.05% {
      left: -18px;
      transform:  translate(0,-100px);
    }
    100% {
      left: -20px;
      transform:  translate(0,-100px);
    }
  }

  @keyframes pl_ig-texte {
    0% {
      transform:  translate(-300px,0);
    }
    91.2% {
      transform:  translate(-300px,0);
    }
    91.3% {
      transform:  translate(0,0);
    }
    92% {
      transform:  translate(0,0);
    }
    92.05% {
      transform:  translate(0,0);
    }
    100% {
      transform:  translate(0,0);
    }
  }  
</style>
