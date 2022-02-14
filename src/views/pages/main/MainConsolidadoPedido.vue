<template>
  <b-card
    title="Consolidado por Campaña - Pedidos"
  >
    <vue-apex-charts
      ref="refConsolidadoPedido"
      height="350"
      class="mt-10 mb-0"
      type="line"
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
    this.$parent.$on('updateConsolidadoPedido', this.actualizar)
  },
  methods: {
    actualizar() {
      this.$refs.refConsolidadoPedido.updateOptions({
        xaxis: {
          categories: this.data.chartOptions.xaxis.categories,
        },
      })
      this.$refs.refConsolidadoPedido.updateSeries(this.data.series, false, true)
    },
  },
}
</script>
