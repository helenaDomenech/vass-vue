<template>
    <div class="chart">
       <div class="chart__column">
           <header class="chart__header">
               <h3 class="chart__title">Values</h3>
           </header>
           <section class="chart__content">
               <label for="minvalue" class="chart__label">Min Value</label>
               <input type="text" class="chart__input" id="minvalue" v-model="form.min">

               <label for="maxvalue" class="chart__label">Max Value</label>
               <input type="text" class="chart__input" id="maxvalue" v-model="form.max">

               <button class="chart__button" @click="submit">Iniciar</button>
           </section>
       </div>
       <div class="chart__column">
           <header class="chart__header">
               <h3 class="chart__title">Result</h3>
           </header>
           <section class="chart__content">
               <line-chart :chartdata="val"></line-chart>
           </section>
       </div>
    </div>
</template>

<script>

import LineChart from './LineChart.vue'


export default {
    name: 'chart',
    components: {
        LineChart
    },
    data() {
        return {
            form: {
                min: 0,
                max: 10
            },
            message: 'Prueba',
            val : 0
        }
    },
    methods: {
        submit() {
            var ram = Math.random();
            var randomnumber = Math.floor(ram * (this.form.max - this.form.min + 1)) + parseInt(this.form.min);
            this.val = randomnumber;
            this.message = 'El vamor obtenido es: ' + this.number;
                var self =  this;
                this.to = setTimeout(()=> {
                self.submit()
                }, 1000)
            this.message = 'Se ha hecho click'
        }
    },
    props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.chart
    display: flex
    min-width: 100%

    &__title
        color: #53554a
        font-size: 2em

    &__column
        width: 100%
        align-items: stretch

    &__column:nth-child(1)
        background-color: #A7DBDB

    &__column:nth-child(2)
        background-color: #E0E4CC

    &__content
        display: flex
        flex-direction: column

    &__label
        font-size: 1.2em
        color: #53554a


    &__input
        align-self: center
        color: #53554a
        border: 1px solid #9fb6b6
        border-radius: 2em
        min-height: 2em
        margin-bottom: 4em
        width: 4em
        font-size: 1.2em

        &:focus
            outline: none

    &__button
        align-self: center
        min-height: 2em
        font-size: 1.2em
        border-radius: 0.5em
        margin-bottom: 2em
        padding: .5em
        border: none
        background-color: #0C374D
        color: #fff
        cursor: pointer
        transition: all .2s ease-in

        &:hover,
        &:active
            color: #0C374D
            background-color: #fff
            border: 1px solid #0C374D


        &:focus
            outline: none

</style>
