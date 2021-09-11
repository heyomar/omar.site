<template>
    <section class="section">
        <h3 class="section--title">TRAVEL</h3>
        <hr class="hr">
        <div class="columns is-multiline">
            <div class="column">
                <h2 style="padding-bottom:10px;"
                    class="is-size-4-mobile has-text-weight-bold">41 Cities</h2>
                <div class="tags">
                    <span class="tag">Montreal</span>
                    <span class="tag">Quebec City</span>
                    <span class="tag">Magog</span>
                    <span class="tag">Sherbrooke</span>
                    <span class="tag">Stanstead</span>
                    <span class="tag">Coaticook</span>
                    <span class="tag">Taipei</span>
                    <span class="tag">Taichung</span>
                    <span class="tag">Osaka</span>
                    <span class="tag">Kyoto</span>
                    <span class="tag">Nagoya</span>
                    <span class="tag">Tokyo</span>
                    <span class="tag">Bangkok</span>
                    <span class="tag">Chiang Mai</span>
                    <span class="tag">Pai</span>
                    <span class="tag">Koh Phangan</span>
                    <span class="tag">Fes</span>
                    <span class="tag">Marrakesh</span>
                    <span class="tag">Rabat</span>
                    <span class="tag">Essaouira</span>
                    <span class="tag">Tenerife</span>
                    <span class="tag">Lanzarote</span>
                    <span class="tag">La Gran Canaria</span>
                    <span class="tag">Dubrovnik</span>
                    <span class="tag">Zadar</span>
                    <span class="tag">Sukosan</span>
                    <span class="tag">Budva</span>
                    <span class="tag">Podgorica</span>
                    <span class="tag">Budapest</span>
                    <span class="tag">Prague</span>
                    <span class="tag">Lüchow</span>
                    <span class="tag">Berlin</span>
                    <span class="tag">Hamburg</span>
                    <span class="tag">Frankfurt</span>
                    <span class="tag">Leipzig</span>
                    <span class="tag">Amsterdam</span>
                    <span class="tag">Ostend</span>
                    <span class="tag">Brugge</span>
                    <span class="tag">Antwerp</span>
                    <span class="tag">Barcelona</span>
                    <span class="tag">Paris</span>
                    <span class="tag">Versailles</span>
                    <span class="tag">London</span>
                </div>
            </div>
            <div class="column">
                <h2 style="padding-bottom:10px;"
                    class="is-size-4-mobile has-text-weight-bold">16 Countries</h2>
                <div class="tags">
                    <span class="tag">Quebec, Canada</span>
                    <span class="tag">Taiwan</span>
                    <span class="tag">Japan</span>
                    <span class="tag">Thailand</span>
                    <span class="tag">Morocco</span>
                    <span class="tag">Canaries</span>
                    <span class="tag">Croatia</span>
                    <span class="tag">Montenegro</span>
                    <span class="tag">Hungary</span>
                    <span class="tag">Czech Republic</span>
                    <span class="tag">Germany</span>
                    <span class="tag">Netherlands</span>
                    <span class="tag">Belgium</span>
                    <span class="tag">Spain</span>
                    <span class="tag">France</span>
                    <span class="tag">United Kingdom</span>
                </div>
            </div>
            <div class="column is-12">
                <h3 class="is-size-4-mobile is-family-monospace"><span class="counter">41 CITIES : 16 COUNTRIES : {{getSteps}} STEPS</span></h3>
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

<style lang="sass">
$prime: #3596FD
$second: #140C36
.counter
    transition: all 300ms ease

.tag
    background-color: $prime !important
    color: $second !important
    font-weight: bold
</style>