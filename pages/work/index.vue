<template>
  <div id="app">
    <div class="title-container">
      <div>
        <h3 class="title">
          My Projects
        </h3>
      </div>
      <div class="filters">
        <span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">ALL</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'WEBSITE' }" v-on:click="setFilter('WEBSITE')">WEBSITE</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'PHONE' }" v-on:click="setFilter('PHONE')">PHONE</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'TWITCH' }" v-on:click="setFilter('TWITCH')">TWITCH</span>
      </div>
    </div>

    <transition-group class="projects" name="projects">
		    <div class="project" v-for="project in projects" v-bind:key="project.title" v-if="currentFilter === project.category || currentFilter === 'ALL'" >
          <div class="project-image-wrapper">
            <img class="project-image" v-bind:src="project.image">
            <div class="gradient-overlay"></div>
            <div class="circle">
              <span class="project-title">{{project.title}}</span>
            </div>
          </div>
        </div>
    </transition-group>
  </div>
</template>

<script>
import data_b4k from 'assets/images/work/b4k.jpg';
import data_multitwitch from 'assets/images/work/twitch-multi.jpg';
import data_emballnogier from 'assets/images/work/emball-nogier.jpg';
import data_saintfirmin from 'assets/images/work/saint-firmin.jpg';

export default {
	data() {
    return {
      currentFilter: 'ALL',
      projects: [
        {title: "NOGIER Emballages", image: data_emballnogier, category: 'WEBSITE'},
        {title: "Multi Twitch Android", image: data_multitwitch, category: 'PHONE'},
        {title: "Domaine Saint Firmin", image: data_saintfirmin, category: 'WEBSITE'},
        {title: "Mario Odzierejko", image: data_b4k, category: 'WEBSITE'},
      ]
    }
  },
	methods: {
		setFilter: function(filter) {
			this.currentFilter = filter
		}
	},  
  mounted () {
    console.log('ok')
  }
}
</script>

<style lang="css" scoped >
  @charset "UTF-8";
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  html,body {
    margin:0;
    font-family: 'Montserrat', sans-serif;
  }

  .title-container {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 70px 0;
  }

  .title {
    font-family: 'Montserrat', sans-serif;
    font-size: 30pt;
    font-weight: normal;
    text-transform: uppercase;
  }

  .project-title {
    font-size: 14pt;
  }

  .filters {
    margin: 10px 0;
  }
  .filter {
    font-family: 'Montserrat', sans-serif;
    padding: 6px 6px;
    cursor:pointer;
    border-radius: 6px;
    transition: all 0.35s;
  }

  .filter.active {
    box-shadow:0px 1px 3px 0px #00000026;
  }

  .filter:hover {
    background:lightgray;
  } 

  .projects {
    margin-bottom:50px;
    margin-top:25px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
  }

  .projects-enter {
    transform: scale(0.5) translatey(-80px);
    opacity:0;
  }

  .projects-leave-to{
    transform: translatey(30px);
    opacity:0;
  }

  .projects-leave-active {
    position: absolute;
    z-index:-1;
  }

  .circle {
    text-align:center;
    position:absolute;
    bottom:-38px;
    left:40px;
    width:100px;
    height:100px;
    border-radius:50px;
  /* 	border:1px solid black; */
    display:flex;
    box-shadow: 0px -4px 3px 0px #494d3257;
    justify-content:center;
    align-items:center;
    background-color:#fff;
  /* 	box-shadow:0px -3px 3px #484848a6; */
  }

  .project {
    transition: all .35s ease-in-out;
    margin:10px;
    box-shadow:0px 2px 8px lightgrey;
    border-radius:3px;
    width:180px;
    height:200px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .project-image-wrapper {
    position:relative;
  }

  .gradient-overlay {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:150px;
    opacity:0.09;
    background: 
      linear-gradient(to bottom, rgba(0,210,247,0.65) 0%,rgba(0,210,247,0.64) 1%,rgba(0,0,0,0) 100%), 
      linear-gradient(to top, rgba(247,0,156,0.65) 0%,rgba(247,0,156,0.64) 1%,rgba(0,0,0,0) 100%);
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
  }

  .project-image {
    width:100%;
    height:150px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
  }
</style>