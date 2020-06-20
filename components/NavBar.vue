<template>
    <nav class="navbar is-dark">
        <div class="navbar-brand">
            <nuxt-link class="navbar-item" to="/">
                <h1>HOME </h1>
            </nuxt-link>
            <div class="navbar-burger burger" data-target="navbarPhone" @click="navBarStatus = !navBarStatus">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarPhone" class="navbar-menu" :class="{ 'is-active' : navBarStatus === true}">
            <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                    <nuxt-link class="navbar-link" to="/">Articles</nuxt-link>
                    <div class="navbar-dropdown is-boxed">
                        <nuxt-link class="navbar-item" to="/blog/intracloud">IntraCloud</nuxt-link>
                        <nuxt-link class="navbar-item" to="/blog/multitwitch">Multi Twitch</nuxt-link>
                        <nuxt-link class="navbar-item" to="/blog/strawpoll">Twitch StrawPoll</nuxt-link>
                        <nuxt-link class="navbar-item" to="/blog/paranoi4k_overlay">Overlay for Paranoi4k</nuxt-link>
                        <nuxt-link class="navbar-item" to="/blog/mastersnakou_twitch_overlay">Overlay for MasterSnakou
                        </nuxt-link>
                    </div>
                </div>
                <a class="navbar-item" target="_blank" href="https://twitter.com/loicngr">Twitter</a>
                <a class="navbar-item" target="_blank" href="https://github.com/loicngr">GitHub</a>
                <a class="navbar-item" target="_blank" href="https://gitlab.com/loicngr">GitLab</a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                navBarStatus: false
            }
        },
    }
</script>
