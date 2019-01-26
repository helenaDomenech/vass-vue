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
                <line-chart :chart-data="number"></line-chart>
            </section>
        </div>
        <div class="chart__column">
            <header class="chart__header">
                <h3 class="chart__title">Columna Tres</h3>
            </header>
            <div class="chart__card">
                <list-view>
                    <div slot="col1" v-for="result1 in results1" :key="result1">
                        {{result1.val}}
                    </div>
                    <div slot="col2" v-for="result2 in results2" :key="result2">
                        {{result2.val}}
                    </div>
                    <div slot="col3" v-for="result3 in results3" :key="result3">
                        {{result3.val}}
                    </div>
                </list-view>
            </div>
        </div>
    </div>
</template>

<script>
import LineChart from './LineChart.vue'
import ListView from './ListView.vue'
import mixinMethod from '../mixins/mixinMethod.vue'
// import axios from 'axios'
export default {
  mixins: [mixinMethod],
  components: {
    'line-chart': LineChart,
    'list-view': ListView
  },
  name: 'chart',
  data () {
    return {
      form: {
        min: 0,
        max:0
      },
      message: 'PRUEBA',
      number: {id:0,val:0},
      results1: [],
      results2: [],
      results3: [],
      count: 0,
      top_element: 10
    }
  },
  methods: {
    submit () {
      // let url = 'http://www.random.org/integers/?num=1&min=' + this.form.min + '&max=' + this.form.max + '&col=1&base=10&format=plain&rnd=new'
      // // let url = 'http://localhost:3000/number';
      // axios
      //   .get(url,
      //       {
      //         crossdomain: true   // IMPORTANTE PARA BYPASEAR EL TEMA DEL CORS
      //       }
      //     )
      //   .then(res => {
      //     this.message = 'El valor obtenido es: ' + res;
      //     console.log(res.data);
      //     this.number = res.data;
      //   }, error => {
      //     console.log(error)
      //   })

      this.count++;
      var ram = Math.random();
      var randomnumber =  Math.floor(ram * (this.form.max - this.form.min + 1)) + parseInt(this.form.min);
      this.number = {
        id: this.count,
        val: randomnumber
      }
          if (this.results1.length <= this.top_element) {
            this.results1.unshift(this.number)
          } else {
            if (this.results2.length <= this.top_element) {
              this.results2.unshift(this.results1[this.top_element])
            } else {
              if (this.results3.length <= this.top_element) {
                this.results3.unshift(this.results2[this.top_element])
              } else {
                this.results3.unshift(this.results2[this.top_element])
                this.results3.splice(-1, 1)
              }
              this.results2.unshift(this.results1[this.top_element])
              this.results2.splice(-1, 1)
            }
            this.results1.splice(-1, 1)
            this.results1.unshift(this.number)
          }
      var self = this;
      this.to = setTimeout(() => {
        self.submit()
      }, 1000)

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

    &__column:nth-child(3)
        background-color:  #C6D5CD

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
        border-radius: .5em
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
        border-radius: 1.2em
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

    &__card
        border-radius: .5em
        margin: 1em
        border: 1px solid #0C374d

</style>
