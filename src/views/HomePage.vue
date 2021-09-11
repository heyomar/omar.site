<template>
  <div class="columns">
    <div class="column is-2 is-hidden-mobile">
      <div class="graphic"></div>
    </div>
    <div class="column">
      <div class="container">
        <Nav/>
        <Body />
        <Projects/>
        <!-- <Numbers/> -->
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Parts/Nav.vue'
import Body from '@/components/Parts/Body.vue'
import Projects from '@/components/Parts/Projects.vue'
import Numbers from '@/components/Parts/Numbers.vue'

export default {
  name: "HomePage",
  props: {},
  components: {
    Nav,
    Body,
    Projects,
    Numbers
  },
};
</script>

<style lang="sass">
</style>

