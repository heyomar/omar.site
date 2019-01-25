<template>
  <section class="section">
    <h3 class="section--title">NUMBERS</h3>
    <hr class="hr">
    <div class="columns">
      <div class="column is-12">
        <span class="text-top">
          <eva-icon name="image-2" animation="none" fill="#3596FD"></eva-icon>
        </span>
        <strong>41 cities</strong> &nbsp;
        <span class="text-top">
          <eva-icon name="globe-2" animation="none" fill="#3596FD"></eva-icon>
        </span>
        <strong>16 countries</strong> &nbsp;
        <span class="text-top">
          <eva-icon name="heart" animation="none" fill="#3596FD"></eva-icon>
        </span>
        <strong>{{getSteps}} steps</strong>
      </div>
      <div class="column"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Numbers",
  computed: {
    getSteps() {
      const steps = 2271366;
      return steps.toLocaleString();
    }
  }
};
</script>

<style lang="sass"></style>