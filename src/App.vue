<template>
    <router-view />
</template>

<script>
    import HomePage from "./views/HomePage.vue"
    export default {
        name: "App",
        components: {
            HomePage,
        },
    }
</script>
<style lang="scss">
    .graphic {
        height: 100vh;
        background: url("assets/o-graphic.svg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center right;
    }
</style>
