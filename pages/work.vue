<template>
  <div style="height:100vh">
      <div id="wrapper">

        <!-- Main -->
          <section class="pl_main">
            <div class="pl_bloc">
              <div class="pl_header _center">
                <h2>{{this.projets.list[this.projets.index].nom}} - <span @click="infoProjet()">view more</span></h2>
              </div>
              <div class="pl_main">
                <article class='_center'>
                  <img @click="goTo(projets.list[projets.index].url_site)" v-bind:src="this.projets.list[this.projets.index].url_image" alt="image" width="100">
                </article>
              </div>
              <div class="pl_footer _center">
                <transition>
                  <div class="pl_btn">
                    <button @click="leftProjet()">{{options.left}}</button>
                    <nuxt-link to="/home"><button>{{options.home}}</button></nuxt-link>
                    <button @click="rightProjet()">{{options.right}}</button>
                  </div>
                </transition>
              </div>
            </div>
          </section>

        <!-- Footer -->
          <footer id="footer">
            <ul class="copyright">
              <li>&copy; 2018 - 2019 LoïcNgr</li><li><a @click="goTo('https://vuejs.org/')">VueJS & Nuxt</a></li>
            </ul>
          </footer>

      </div>
  </div>
</template>

<script>
import swal from 'sweetalert';
import data_b4k from 'assets/images/work/b4k.jpg';
import data_paranoi4k from 'assets/images/work/paranoi4k-ext.jpg';
import data_twitchmulti from 'assets/images/work/twitch-multi.jpg';
import data_twitchnotifier from 'assets/images/work/twitch-notifier.jpg';
import data_emballnogier from 'assets/images/work/emball-nogier.jpg';
import data_saintfirmin from 'assets/images/work/saint-firmin.jpg';

require('assets/css/index.css');

export default {
  head () {
    return {
      title: `${this.name} | loicnogier.fr`,
    }
  },
  data () {
    return {
      isHovered: '_isNotHovered',
      name: 'Work',
      options: {
        left: 'LEFT',
        home: 'BACK TO HOME',
        right: 'RIGHT'
      },
      projets: {
        index: 1,
        load: false,
        hover: false,
        length: 5,
        list: {
          0: {
            nom: 'Mario Odzierejko',
            url_image: data_b4k,
            url_site: 'https://marioodzi.fr',
            description: `Graphic designer and illustrator, Portfolio website created with WordPress.`
          },
          1: {
            nom: 'Emballages Nogier',
            url_image: data_emballnogier,
            url_site: 'https://emballages-nogier.com',
            description: `Showcase site created with bootstrap.`
          },
          2: {
            nom: 'Multi Twitch',
            url_image: data_twitchmulti,
            url_site: 'https://play.google.com/store/apps/details?id=fr.zkf.multi_twitch',
            description: `Android application for Twitch lives lovers, developed in TypeScript under Ionic3.`
          },
          3: {
            nom: 'Twitch Notifier',
            url_image: data_twitchnotifier,
            url_site: 'https://twitchnotifier.netlify.com/',
            description: `PC application for Twitch lives lovers, developed with VueJS under electronJS.`
          },
          4: {
            nom: 'Web extension - Paranoi4k',
            url_image: data_paranoi4k,
            url_site: 'https://chrome.google.com/webstore/detail/paranoi4k/dmgjmgoaamclmnlmdhjnkanflillacmh',
            description: `Official extension of @paranoi4k. You are notified during a live Twitch and when a new Youtube video is published.`
          },
          5: {
            nom: 'eCommerce website',
            url_image: data_saintfirmin,
            url_site: 'https://saint-firmin.com',
            description: `Site of Domaine Saint Firmin with an online shop.. Website created with WordPress.`
          }
        }
      }
    }
  },
  methods: {
    goTo (url) {
      window.open(url);
    },
    infoProjet () {
      swal(`More About ${this.projets.list[this.projets.index].nom}`, this.projets.list[this.projets.index].description);
    },
    rightProjet () {
      if (typeof this.projets.list[this.projets.index + 1] !== typeof undefined)
        this.projets.index += 1;
      else
        this.projets.index = 0;
    },
    leftProjet () {
      if (typeof this.projets.list[this.projets.index - 1] !== typeof undefined)
        this.projets.index -= 1;
      else if (this.projets.index - 1 === -1)
        this.projets.index = this.projets.length;
      else
        this.projets.index = 0;
    }
  },
  mounted() {
    setTimeout(function () {
      this.projets.load = true;
    }.bind(this), 1000);
  }
}
</script>

<style lang="scss">
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

._isHovered {
  opacity: 0;
  visibility: hidden;
  display: none;
  transition: 1s;
}
._isNotHovered {
  opacity: 1;
  visibility: visible;
  transition: 1s;
}

.swal-modal {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", 
        "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

section.pl_main {
  width: 800px; height: 600px;

  background-color: #FBFCFC;
  position: absolute;
  top: calc(50vh - 300px); left: calc(50vw - 400px);
  border-radius: 5px;

  @media (min-width: 100px) and (max-width: 820px) {
    width: 90vw;
    top: 50px; left: 5vw;
  }

  .pl_bloc {
    width: 100%; height: 100%;

    position: absolute;
    top: 0; left: 0;

    .pl_header {
      height: 70px; width: 100%;

      position: absolute;
      top: 0; left: 0;
      margin: 0; padding: 0;
      border-bottom: 2px solid rgba(201, 199, 199, 0.712);

      h2 {
        line-height: 70px;
        font-size: 2rem;

        span {
          cursor: pointer;
        }
      }
    }

    .pl_main {
      height: 460px; width: 100%;

      position: absolute;
      top: 70px; left: 0;
      margin: 0; padding: 0;
      background-color: white;

      a:first-child {
        position: absolute;

        margin: 10px;
        color: rgb(52, 179, 221);
        text-decoration-color : rgb(52, 179, 221);
        text-decoration-line  : underline;
        text-decoration-style : solid;
        text-underline-position: under;
        font-size: 1rem;
        font-weight: bold;
        transition: .5s;

        &:hover {
          cursor: pointer;
          color: rgb(151, 147, 149);
        }
      }

      p#pl_description_projet {
        position: absolute;

        margin: 50px 10px 10px 10px;
        color: rgb(65, 65, 65);
        font-size: 1rem;
        font-weight: bold;
        transition: .5s;

        &:hover {
          cursor: pointer;
          color: rgb(53, 53, 53);
        }
      }

      article {
        width: 100%; height: 100%;

        @media (min-width: 100px) and (max-width: 658px) {
          display: flex;
          align-items: center;
          vertical-align: middle;
        }

        img {
          height: 100%; width: auto;

          cursor: pointer;

          @media (min-width: 100px) and (max-width: 658px) {
            width: 100%; height: auto;
          }
        }
      }
    }

    .pl_footer {
      height: 70px; width: 100%;

      position: absolute;
      bottom: 0; left: 0;
      margin: 0; padding: 0;
      border-top: 2px solid rgba(201, 199, 199, 0.712);

      @media (min-width: 100px) and (max-width: 356px) {
        height: 140px;

        bottom: -70px;
        background-color: #FBFCFC;
      }

      .pl_btn {
        height: 70px; width: 100%;
        line-height: 70px;

        @media (min-width: 100px) and (max-width: 356px) {
          line-height: 0;
        }
        
        button {
          margin: 0 10px;
          color: rgb(52, 179, 221) !important;

          @media (min-width: 100px) and (max-width: 356px) {
            width: 90%;
            margin: 4.5px 0;
          }

          &:hover {
            border-color: rgb(52, 179, 221) !important;
          }
        }
      }
    }
  }
}

</style>