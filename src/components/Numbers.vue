<template>
    <section class="">
        <h3 class="">TRAVEL</h3>
        <hr class="">
        <div class="">
            <div class="">
                <h2 class="">41 Cities</h2>
                <div class="">
                    <span class="">Montreal</span>
                    <span class="">Quebec City</span>
                    <span class="">Magog</span>
                    <span class="">Sherbrooke</span>
                    <span class="">Stanstead</span>
                    <span class="">Coaticook</span>
                    <span class="">Taipei</span>
                    <span class="">Taichung</span>
                    <span class="">Osaka</span>
                    <span class="">Kyoto</span>
                    <span class="">Nagoya</span>
                    <span class="">Tokyo</span>
                    <span class="">Bangkok</span>
                    <span class="">Chiang Mai</span>
                    <span class="">Pai</span>
                    <span class="">Koh Phangan</span>
                    <span class="">Fes</span>
                    <span class="">Marrakesh</span>
                    <span class="">Rabat</span>
                    <span class="">Essaouira</span>
                    <span class="">Tenerife</span>
                    <span class="">Lanzarote</span>
                    <span class="">La Gran Canaria</span>
                    <span class="">Dubrovnik</span>
                    <span class="">Zadar</span>
                    <span class="">Sukosan</span>
                    <span class="">Budva</span>
                    <span class="">Podgorica</span>
                    <span class="">Budapest</span>
                    <span class="">Prague</span>
                    <span class="">Lüchow</span>
                    <span class="">Berlin</span>
                    <span class="">Hamburg</span>
                    <span class="">Frankfurt</span>
                    <span class="">Leipzig</span>
                    <span class="">Amsterdam</span>
                    <span class="">Ostend</span>
                    <span class="">Brugge</span>
                    <span class="">Antwerp</span>
                    <span class="">Barcelona</span>
                    <span class="">Paris</span>
                    <span class="">Versailles</span>
                    <span class="">London</span>
                </div>
            </div>
            <div class="">
                <h2 class="">16 Countries</h2>
                <div class="">
                    <span class="">Quebec, Canada</span>
                    <span class="">Taiwan</span>
                    <span class="">Japan</span>
                    <span class="">Thailand</span>
                    <span class="">Morocco</span>
                    <span class="">Canaries</span>
                    <span class="">Croatia</span>
                    <span class="">Montenegro</span>
                    <span class="">Hungary</span>
                    <span class="">Czech Republic</span>
                    <span class="">Germany</span>
                    <span class="">Netherlands</span>
                    <span class="">Belgium</span>
                    <span class="">Spain</span>
                    <span class="">France</span>
                    <span class="">United Kingdom</span>
                </div>
            </div>
            <div class="">
                <h3 class=""><span class="">41 CITIES : 16 COUNTRIES : {{getSteps}} STEPS</span></h3>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Numbers",
        computed: {
            getSteps() {
                const steps = 2271366
                return steps.toLocaleString()
            },
        },
    }
</script>

<style lang="scss">
</style>