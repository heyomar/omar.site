<template>
  <div class="container">
    <section class="section">
      <div class="container">
        <h1 class="is-size-3-mobile">{{getGreeting}}, I'm Omar</h1>
        <h2 class="is-size-4-mobile">A Developer | UX Designer | Indie Maker from the United States.</h2>
        <p>I make useful, interesting things, sometimes more interesting than useful. This website is a personal log of my work and my thoughts as a human. You can view some of my projects below.</p>
        <div class="links">
          <a class="social--link" href="/">Twitter </a>
          <a class="social--link" href="/">Github</a>
        </div>
      </div>
    </section>

    <section class="section">
      <h3>PROJECTS</h3>
      <div class="columns">
        <div class="column">
          <h4><a class="project--link" href="#">Color Koala</a></h4>
          <p>A Koala-ty color palette generator, making gorgeous colors for all of your side projects.</p>
        </div>
        <div class="column">
          <h4><a class="project--link" href="#">Static Owl</a></h4>
          <p>Screenshots with canvas made easy</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h3>STATS</h3>
      <div class="columns">
        <div class="column">
          <p>I’ve traveled to 41 cities across 16 countries and walked {{getSteps}} steps</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {},
  computed: {
    getGreeting() {
      const currentTime = new Date().getHours()
      if (currentTime >= 12 && currentTime <= 16) {
        return 'Good Afternoon' 
      } else if(currentTime >= 0 && currentTime <= 11) {
        return 'Good Morning'
      } else if (currentTime >= 17 && currentTime <= 24) {
        return 'Good Evening'
      } else {
        return 'Hello' 
      }
    },
    getSteps(){
      const steps = 2271366

      return steps.toLocaleString()
      

    }
  }
}
</script>

<style lang="sass">

</style>

