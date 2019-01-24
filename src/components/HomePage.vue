<template>
  <div class="container">
    <section>
      <div class="has-text-right">
        <a href="https://twitter.com/whimandwind" target="_blank" class="button" role="button">Say Hello</a>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="is-size-3-mobile">{{getGreeting}}, I'm Omar</h1>
        <h2 class="is-size-4-mobile">A Developer | UX Designer | Indie Maker from the United States.</h2>
        <p>I make useful, interesting things, sometimes more interesting than useful. This website is a personal log of my work and my thoughts as a human. You can view some of my projects below.</p>
        <div class="links">
          <a class="social--link" href="/">Twitter </a>
          <a class="social--link" href="/"><i data-eva="github"></i></a>
        </div>
      </div>
    </section>

    <section class="section">
      <h3 class="section--title">PROJECTS</h3>
      <hr class="hr">
      <div class="" data-content="OR"></div>
      <div class="columns">
        <div class="column">
          <h4 class="project--title"><a class="project--link" href="#">Color Koala</a></h4>
          <p>A Koala-ty color palette generator, making gorgeous colors for all of your side projects.</p>
        </div>
        <div class="column">
          <h4 class="project--title"><a class="project--link" href="#">Static Owl</a></h4>
          <p>Screenshots with canvas made easy</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h3 class="section--title">NUMBERS</h3>
      <hr class="hr">
      <div class="columns">
        <div class="column">
          <p>I’ve traveled to <strong>41 cities </strong>across <strong>16 countries</strong> and walked <strong>{{getSteps}} steps </strong> </p>
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

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:700');
// COLORS
$prime: #3596FD
$second: #140C36
.button
  margin-top: 25px
  margin-right: 25px
  border: 2px solid $prime
  font-size: 22px
  border-radius: 100px
  font-weight: bold
  background-color: transparent
  color: $prime
  opacity: .5
  transition: all 200ms ease-in-out

  &:hover
    opacity: 1
    border: 2px solid $prime
    color: $prime

.section--title
  font-size: 18px


.hr
  background-color: $prime
  border: none
  display: block
  height: 1px
  margin: 5px 0 20px 0
  opacity: 0.3


.project--title
  font-family: 'Roboto Mono', monospace
  font-weight: bold
  font-size: 30px

</style>

