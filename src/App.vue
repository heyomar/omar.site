<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:700')
@import 'bulma'
@import '@/styles/vars.sass'
@import '@/styles/base.sass'


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
  background: url('assets/o-graphic.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center right
  opacity: .7

</style>

