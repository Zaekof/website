<template>
  <div :key="$route.params.post">
    <div class="container">
      <div class="columns is-centered">
        <div class="blog column is-10-tablet">
          <div class="title">{{ attributes.title }}</div>
          <div class="subtitle" v-if="!flags.fr.status">
            Publié le {{attributes.ctime}}
            par {{ attributes.author }}
          </div>
          <div class="subtitle" v-else-if="!flags.en.status">
            Published on {{attributes.ctime}}
            by {{ attributes.author }}
          </div>
          <div class="content">
            <span class="icon has-text-info" v-if="flags.fr.status">
              <nuxt-link :to="flags.fr.link">
                <span class="flag-icon flag-icon-fr"></span>
              </nuxt-link>
            </span>
            <span class="icon has-text-info" v-if="flags.en.status">
              <nuxt-link :to="flags.en.link">
                <span class="flag-icon flag-icon-um"></span>
              </nuxt-link>
            </span>
          </div>
          <div v-html="content" class="blog-content content"></div>
          <div class="content" style="text-align:center;">
            <a :href="urlTwitter + attributes.title + ' -> ' + urlWebsite + $route.params.post" target="_blank" rel="noopener noreferrer">
              <span class="icon has-text-info">
                <i class="fab fa-twitter"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const fm = require('front-matter');
let md = require('markdown-it')({
  html: true,
  typographer: true
});

export default {
  async asyncData({ params }) {
    const fileContent = await import(`~/articles/${params.post}.md`);
    let res = fm(fileContent.default);
    return {
      attributes: res.attributes,
      content: md.render(res.body)
    };
  },
  transition: 'page',
  data() {
    return {
      params: null,
      urlTwitter: 'https://twitter.com/intent/tweet?text=',
      urlWebsite: 'https://loicnogier.fr/blog/',
      flags: {
        fr: {
          status: false,
          link: ''
        },
        en: {
          status: false,
          link: ''
        }
      }
    }
  },
  methods: {
    async checkFlags() {
      try {
        if (this.params.post.slice(-3) !== '_fr') {
          const fileContent = await import(`~/articles/${this.params.post}_fr.md`);
          this.flags.fr.status = true;
          this.flags.fr.link = `/blog/${this.params.post}_fr`;
        } else if (this.params.post.slice(-3) === '_fr') {
          const postname = this.params.post.substr(0, this.params.post.length - 3);
          this.flags.en.status = true;
          this.flags.en.link = `/blog/${postname}`;
        }
      } catch (error) {
        this.flags.fr.status = false;
        this.flags.en.status = false;
      }
    }
  },
  async mounted() {
    this.params =  this.$route.params;
    this.checkFlags();
  },
};
</script>

<style scoped>
@charset "UTF-8";
@import url("flag-icon-css/css/flag-icon.min.css");
@import url("@fortawesome/fontawesome-free/css/all.css");
</style>
