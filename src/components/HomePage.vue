<template>
  <div class="columns">
    <div class="column is-2 is-hidden-mobile">
      <div class="graphic"></div>
    </div>
    <div class="column">
      <div class="container">
        <Nav/>

        <section class="section pt0">
          <div class="container">
            <h1 class="is-size-4-mobile">{{getGreeting}}, I'm Omar</h1>
            <p>A Developer, UX Designer, and Indie Maker from the United States. I like to organize complex features into simple user experiences. In my free time, I make useful, interesting things, sometimes more interesting than useful. This website is a personal log of my work and my thoughts as a human. Feel free to Say Hello.</p>
          </div>
        </section>

        <section class="section">
          <h3 class="section--title">PROJECTS</h3>
          <hr class="hr">
          <div class data-content="OR"></div>
          <div class="columns">
            <div class="column">
              <h4 class="project--title">
                <a class="project--link" href="https://colorkoala.xyz/" target="_blank">ColorKoala.xyz</a>
              </h4>
              <p>Koala-ty color palette generator, gorgeous colors for all of your side projects.</p>
            </div>
            
          </div>
        </section>

        <section class="section">
          <h3 class="section--title">NUMBERS</h3>
          <hr class="hr">
          <div class="columns">
            <div class="column is-12">
              <span class="text-top"><eva-icon name="image-2" animation="none" fill="#3596FD"></eva-icon></span>
              <strong> 41 cities</strong> &nbsp;
              <span class="text-top"><eva-icon name="globe-2" animation="none" fill="#3596FD"></eva-icon></span>
              <strong> 16 countries</strong> &nbsp;
               <span class="text-top"><eva-icon name="heart" animation="none" fill="#3596FD"></eva-icon></span>
              <strong> {{getSteps}} steps</strong>
            </div>
            <div class="column">
              
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/UI/Nav.vue'

export default {
  name: "HomePage",
  props: {},
  components: {
    Nav
  },
  computed: {
    getGreeting() {
      const currentTime = new Date().getHours();
      if (currentTime >= 12 && currentTime <= 16) {
        return "Good Afternoon";
      } else if (currentTime >= 0 && currentTime <= 11) {
        return "Good Morning";
      } else if (currentTime >= 17 && currentTime <= 24) {
        return "Good Evening";
      } else {
        return "Hi there";
      }
    },
    getSteps() {
      const steps = 2271366;
      return steps.toLocaleString();
    }
  }
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:700')
@import '@/styles/vars.sass'

.section
  padding: 1.5rem


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

.graphic
  height: 100vh
  background: url('../assets/o-graphic.svg')
  position: relative
  background-repeat: no-repeat
  background-size: cover
  background-position: center right
  opacity: .7

</style>

