<template>
  <div id="app"></div>
</template>

<script>
import home from './home.vue'
//import work from './work.vue'

export default {
  name: 'index',
  components: { home, work },
  methods: {
    home: function () {
      this.$router.push('/home');
    }
  },
  mounted() {
    this.home();
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
