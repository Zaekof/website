<template>
  <div style="height:100vh">
      <div id="wrapper">

        <!-- Main -->
          <section id="main">
            <header>
              <span class="avatar"><img src="~assets/images/avatar.jpg" alt="" /></span>
              <h1>NOGIER Loïc</h1>
              <p>21 years old <br /> Software / Web Developer (Freelance)</p>
              <p style="font-size: 1rem;">NodeJS, VueJs, ElectronJS, Ionic, WordPress</p>
              <br>
            </header>
            <footer>
              <ul class="icons">
                <li><a @click="goTo(url.twitter)" class="fa-twitter">Twitter</a></li>
                <li><a @click="git()" class="fa-github">Github</a></li>
                <li><nuxt-link class="fa-wrench" to="/work">Travaux</nuxt-link></li>
                <li><a @click="contact_mail()" class="fa-envelope-o">Contact</a></li>
              </ul>
            </footer>
          </section>

        <!-- Footer -->
        <footer id="footer">
          <ul class="copyright">
            <li>&copy; 2018 - 2019 LoïcNgr</li><li><a @click="goTo(url.vuejs)">VueJS & Nuxt</a></li>
          </ul>
        </footer>

      </div>
  </div>
</template>

<script>
import swal from 'sweetalert'

require('assets/css/index.css');

export default {
  head () {
    return {
      title: `${this.name} | loicnogier.fr`
    }
  },
  data () {
    return {
      name: 'Home',
      url: {
        gitlab: 'https://gitlab.com/Zaekof',
        github: 'https://github.com/zaekof',
        twitter: 'https://twitter.com/zaekof',
        insta: 'https://www.instagram.com/zaekof/',
        discord: 'https://discord.gg/8Qbmw8d',
        vuejs: 'https://vuejs.org/'
      }
    }
  },
  methods: {
    goTo: function (url) {
      window.open(url);
    },
    git: function () {
      swal("Gitlab ou Github ?", {
        buttons: {
          cancel: "Close",
          github: true,
          gitlab: true,
        },
      })
      .then((value) => {
        switch (value) {
          case "gitlab":
            window.open(this.url.gitlab);
            break;
          case "github":
            window.open(this.url.github);
            break;
          default:
            swal("Thanks anyway!");
        }
      });
    },
    contact_mail: function () {
      swal({
        title: "Contact me",
        text: 'pro.nogierloic@gmail.com ' +
        '/ 07.78.19.00.07',
        buttons: {
          confirm: {
            text: "Send a email",
            value: "send_mail",
            visible: true,
            closeModal: true
          },
          cancel: {
            text: "Close",
            visible: true,
            closeModal: true,
          }
        }
      })
      .then(okay => {
        if (okay) {
          window.location.href = 'mailto:pro.nogierloic@gmail.com?subject=contact loicnogier.fr';
        }
      });
    }
  }
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: all .25s ease-out;
}
.page-enter, .page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>