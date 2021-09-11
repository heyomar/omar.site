<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
    @import url("https://fonts.googleapis.com/css?family=Roboto+Mono:700");
    @import "bulma";
    @import "@/styles/vars.scss";
    @import "@/styles/base.scss";

    .section {
        padding: 1.5rem 1.5rem 2.8rem 1.5rem;
    }

    .section--title {
        font-size: 15px;
    }

    .hr {
        background-color: $prime;
        border: none;
        display: block;
        height: 1px;
        margin: 5px 0 20px 0;
        opacity: 0.3;
    }

    .project--title {
        font-family: "Roboto Mono", monospace;
        font-weight: bold;
        font-size: 25px;
    }

    .graphic {
        height: 100vh;
        background: url("assets/o-graphic.svg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center right;
    }
</style>

