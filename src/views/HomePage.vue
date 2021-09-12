<template>
    <div class="container ">
        <div class="">
            <div class="">
                <!-- <Nav /> -->

                <!-- <Body /> -->
                <Projects />
                <!-- <Numbers /> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from "../components/Nav.vue"
    import Body from "../components/Body.vue"
    import Projects from "../components/Projects.vue"
    import Numbers from "../components/Numbers.vue"

    export default {
        name: "HomePage",
        components: {
            Nav,
            Body,
            Projects,
            Numbers,
        },
    }
</script>

