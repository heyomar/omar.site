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
