<template>
    <section class="py-8 px-6">
        <h1 class="text-sm uppercase text-mustard">For Fun</h1>
        <ul>
            <li v-for="project in projectsForFun"
                :key="project"
                class="border-b py-8 px-6">
                <article class="">
                    <h1>
                        <a :href="project.url"
                           target="_blank">{{ project.name }}</a>
                    </h1>

                    <p class="">{{ project.copy }}</p>
                </article>
            </li>
        </ul>
    </section>
    <section class="py-8 px-6">
        <h1 class="font-bold text-sm uppercase text-mustard">For Glory</h1>
        <ul class="">
            <li v-for="project in projectsForGlory"
                :key="project"
                class="border-b py-8 px-6">
                <article>
                    <h1>
                        <a :href="project.url"
                           target="_blank">{{ project.name }}</a>
                    </h1>
                    <p>{{ project.copy }}</p>
                </article>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "Projects",
        data() {
            return {
                projectsForFun: [
                    {
                        name: "Color Koala",
                        copy: "Koala-ty color palette generator, gorgeous colors for all of your side projects.",
                        url: "https://colorkoala.netlify.app",
                    },
                ],
                projectsForGlory: [
                    {
                        name: "Waterboys",
                        copy: "Team up to tackle thirst with the 2018 walter payton man of the year, Chris Long.",
                        url: "https://waterboys.org/",
                    },
                    {
                        name: "Genus Medical",
                        copy: "Genus Medical offers a unique approach to supplying imaging products.",
                        url: "https://www.genusmedical.com/",
                    },
                    {
                        name: "Pleban Law",
                        copy: "Pleban & Petruska’s trial lawyers bring decades of experience to each case. ",
                        url: "https://plebanlaw.com/",
                    },
                ],
            }
        },
    }
</script>
