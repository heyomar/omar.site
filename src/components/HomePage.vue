<template>
  <div class="columns">
    <div class="column is-2 is-hidden-mobile">
      <div class="graphic"></div>
    </div>
    <div class="column">
      <div class="container">
        <nav class="level">
          <div class="level-left">
            <div class="level-item"></div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="social--icon">
                <a href="https://twitter.com/whimandwind" target="_blank">
                  <eva-icon name="twitter" animation="flip" fill="#3596FD"></eva-icon>
                </a>
              </div>
              <div class="social--icon">
                <a href="https://github.com/omarrasool/omar" target="_blank">
                  <eva-icon name="github" animation="flip" fill="#3596FD"></eva-icon>
                </a>
              </div>
              <a
                href="https://twitter.com/whimandwind"
                target="_blank"
                class="button"
                role="button"
              >Say Hello</a>
            </div>
          </div>
        </nav>

        <section class="section pt0">
          <div class="container">
            <h1 class="is-size-4-mobile">{{getGreeting}}, I'm Omar</h1>
            <h2
              class="is-size-5-mobile"
            >A Developer | UX Designer | Indie Maker from the United States.</h2>
            <p>I make useful, interesting things, sometimes more interesting than useful. This website is a personal log of my work and my thoughts as a human. You can view some of my projects below.</p>
          </div>
        </section>

        <section class="section">
          <h3 class="section--title">PROJECTS</h3>
          <hr class="hr">
          <div class data-content="OR"></div>
          <div class="columns">
            <div class="column">
              <h4 class="project--title">
                <a class="project--link" href="#">Color Koala</a>
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
              <span class="text-top"><eva-icon name="image-2" animation="flip" fill="#3596FD"></eva-icon></span>
              <strong> 41 cities</strong> &nbsp;
              <span class="text-top"><eva-icon name="globe-2" animation="flip" fill="#3596FD"></eva-icon></span>
              <strong> 16 countries</strong> &nbsp;
               <span class="text-top"><eva-icon name="heart" animation="flip" fill="#3596FD"></eva-icon></span>
              <strong> {{getSteps}} steps</strong>
              <div class=""><br>
                Montreal, Quebec City, Magog, Sherbrooke, Stanstead, Coaticook • Taipei, Taichung • Osaka, Kyoto, Nagoya, Tokyo • Bangkok, Chiang Mai, Pai, Koh Phangan • Fes, Marrakesh, Rabat, Essaouira • Tenerife, Lanzarote, La Gran Canaria • Dubrovnik, Zadar, Sukosan • Budva, Podgorica • Budapest • Prague • Lüchow, Berlin, Hamburg, Frankfurt, Leipzig • Amsterdam • Ostend, Brugge, Antwerp • Barcelona • Paris, Versailles • London
              </div>
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
export default {
  name: "HomePage",
  props: {},
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
        return "Hello";
      }
    },
    getSteps() {
      const steps = 2271366;
      return steps.toLocaleString();
    }
  }
};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:700');
// COLORS
$prime: #3596FD
$second: #140C36

.section
  padding-bottom: 0

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

.graphic
  height: 100vh
  position: relative
  background: url('../assets/o-graphic.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center right
  animation: Gradient 5s ease infinite

.social--icon
  padding: 30px 10px 0 5px
  opacity: .5
  &:hover
    opacity: 1
</style>

