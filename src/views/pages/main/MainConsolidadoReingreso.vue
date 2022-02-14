<template>
  <b-card
    title="Consolidado por Campaña - Reingresos"
  >
    <vue-apex-charts
      ref="refConsolidadoReingreso"
      height="350"
      class="mt-10 mb-0"
      type="bar"
      :options="data.chartOptions"
      :series="data.series"
    />
  </b-card>
</template>

<script>
import {
  BCard,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    VueApexCharts,
    BCard,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    this.$parent.$on('updateConsolidadoReingreso', this.actualizar)
  },
  methods: {
    actualizar() {
      this.$refs.refConsolidadoReingreso.updateOptions({
        xaxis: {
          categories: this.data.chartOptions.xaxis.categories,
        },
      })
      this.$refs.refConsolidadoReingreso.updateSeries(
        this.data.series,
        false,
        true,
      )
    },
  },
}
</script>
