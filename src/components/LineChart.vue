<script>
    import {Line} from 'vue-chartjs'
    import 'chartjs-plugin-streaming'

    export default {
        extends: Line,
        props: ['chartData'],
        data () {
            return {
                config: {
                    data: {
                        datasets: [{
                            label: 'DATASET 1',
                            borderColor: '#0C374D',
                            backgroundColor: '#303c6478',
                            lineTension: 0,
                            borderDash: [1,1],
                            data: this.chartData.val,
                            borderWidth: 1
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
            chartData: function() {
                var that = this;
                this.config.data.datasets.forEach(function(dataset){
                    dataset.data.push({
                        x: Date.now(),
                        y: that.chartData.val
                    })
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