<template>
  <b-card
    title="Consecutividad Asesoras Nuevas"
  >
    <vue-apex-charts
      ref="refConsecutiva"
      height="240"
      class="mt-10 mb-10"
      type="donut"
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
    this.$parent.$on('updateConsecutiva', this.actualizar)
  },
  methods: {
    actualizar() {
      this.$refs.refConsecutiva.updateOptions(this.data.chartOptions)
      this.$refs.refConsecutiva.updateSeries(this.data.series)
    },
  },
}
</script>
