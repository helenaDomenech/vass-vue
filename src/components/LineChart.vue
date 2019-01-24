<script>
    import { Line } from 'vue-chartjs'
    import 'chartjs-plugin-streaming'

    export default {
        name: 'line-chart',
        extends: Line,
        props: ['chartdata'],
        data() {
            return{
                config: {
                    data: {
                        datasets: [{
                            label: 'DATASET 1',
                            borderColor: '#53554a',
                            backgroundColor: '#542733',
                            lineTension: 0,
                            borderDash: [1,4],
                            data: this.chartdata
                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                type: 'realtime'
                            }]
                        }
                    }
                }
            }
        },
        watch: {
            chartdata(){
                var that = this;
                this.config.data.datasets.forEach(function(datasets){
                    datasets.data ={
                        x: Date.now(),
                        y: that.chartdata
                    }
                })
            }
        },
        mounted() {
            this.renderChart (
                this.config.data,
                this.config.options
            )
        }
    }
</script>

