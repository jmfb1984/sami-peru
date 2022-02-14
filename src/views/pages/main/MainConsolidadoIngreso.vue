<template>
  <b-card
    title="Consolidado por Campaña - Ingresos"
  >
    <vue-apex-charts
      ref="refConsolidadoIngreso"
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
    this.$parent.$on('updateConsolidadoIngreso', this.actualizar)
  },
  methods: {
    actualizar() {
      this.$refs.refConsolidadoIngreso.updateOptions({
        xaxis: {
          categories: this.data.chartOptions.xaxis.categories,
        },
      })
      this.$refs.refConsolidadoIngreso.updateSeries(
        this.data.series,
        false,
        true,
      )
    },
  },
}
</script>
