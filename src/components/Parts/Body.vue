<template>
    <section class="section pt0">
      <div class="container">
        <h1 class="is-size-4-mobile">{{getGreeting}}, I'm Omar</h1>
        <p>A Developer, UX Designer, and Indie Maker from the United States. I enjoy organizing complex features into simple user experiences. In my free time, I make useful, interesting things, sometimes more interesting than useful. This website is a personal log of my work and my thoughts as a human. Feel free to Say Hello.</p>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Body',
  computed: {
    getGreeting() {
      const currentTime = new Date().getHours();
      if (currentTime >= 12 && currentTime <= 16) {
        return "Good Afternoon";
      } else if (currentTime >= 0 && currentTime <= 11) {
        return "Good Morning";
      } else if (currentTime >= 17 && currentTime <= 24) {
        return "Hi, Good Evening";
      } else {
        return "Hi there";
      }
    },
  },
};
</script>

<style lang="sass">
</style>