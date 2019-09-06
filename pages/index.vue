<template>
  <div class="container">
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          NOGIER Loïc
        </h1>
        <h2 class="subtitle">
          21 years old French Web Developer on Freelance.
        </h2>
      </div>
    </div>
  </section>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">
                <a href="https://emballages-nogier.com" target="_blank" rel="noopener noreferrer">Emballages NOGIER</a>
              </p>
              <p class="subtitle">Showcase site created with bootstrap.</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">
                <a href="https://github.com/Zaekof/Twitch-StrawPoll" target="_blank" rel="noopener noreferrer">Twitch StrawPoll Overlay</a>
              </p>
              <p class="subtitle">Simple StrawPoll Overlay for Twitch, Made entirely in javascript.</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">
                <a href="https://en.saint-firmin.com" target="_blank" rel="noopener noreferrer">Domain Saint Firmin</a>
              </p>
              <p class="subtitle">Site of Domain Saint Firmin with an online shop.. website created with wordpress.</p>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">
              <a href="https://marioodzi.fr" target="_blank" rel="noopener noreferrer">Mario Odzierejko</a>
            </p>
            <p class="subtitle">Graphic designer and illustrator, Portfolio website created with wordpress.</p>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">
              <nuxt-link to="/blog/multitwitch">Multi Twitch</nuxt-link>
            </p>
            <p class="subtitle">Multi Twitch is a simple way to watch multiple Twitch streams at the same time and with ease!</p>
            <div class="content">
              <figure class="image">
                <a href="https://play.google.com/store/apps/details?id=fr.zkf.multi_twitch" target="_blank" rel="noopener noreferrer">
                  <img src="~/assets/images/multitwitch-icon.png">
                </a>
              </figure>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page'
}
</script>