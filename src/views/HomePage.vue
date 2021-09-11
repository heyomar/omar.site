<template>
    <div class="">
        <div class="">
            <div class=""></div>
        </div>
        <div class="">
            <div class="">
                <Nav />

                <Body />
                <Projects />
                <Numbers />
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
        props: {},
        components: {
            Nav,
            Body,
            Projects,
            Numbers,
        },
    }
</script>

