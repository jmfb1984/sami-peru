<template>
  <b-card
    title="Capitalización"
  >
    <vue-apex-charts
      ref="refCapitalizacion"
      height="260"
      class="mt-10 mb-10"
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
    this.$parent.$on('updateCapitalizacion', this.actualizar)
  },
  methods: {
    actualizar() {
      this.$refs.refCapitalizacion.updateSeries(
        [{ data: this.data.series[0].data }],
        false,
        true,
      )
    },
  },
}
</script>
