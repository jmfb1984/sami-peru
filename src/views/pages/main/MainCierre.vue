<template>
  <b-card no-body>
    <b-card-header>
      <h4 class="mb-0">
        {{ data.titulo }}
      </h4>
      <b-card-text class="font-medium-5 mb-0">
        <feather-icon
          :id="data.id"
          icon="HelpCircleIcon"
          size="21"
          class="text-muted cursor-pointer"
        />
        <!-- popover -->
        <b-popover
          :target="data.id"
          triggers="hover"
          :delay="delay"
          :variant="data.color"
        >
          <template #title>
            Ayuda
          </template>
          <span>{{ data.ayuda }}</span>
        </b-popover>
      </b-card-text>
    </b-card-header>
    <b-row class="text-center">
      <b-col
        xl="6"
        lg="6"
        md="12"
        sm="12"
        xs="12"
      >
        <vue-apex-charts
          ref="refFacturado"
          type="radialBar"
          height="180"
          :options="data.configuracionFacturado"
          :series="data.series.facturado"
        />
      </b-col>
      <b-col
        xl="6"
        lg="6"
        md="12"
        sm="12"
        xs="12"
      >
        <vue-apex-charts
          ref="refPendiente"
          type="radialBar"
          height="180"
          :options="data.configuracionPendiente"
          :series="data.series.pendiente"
        />
      </b-col>
    </b-row>
    <b-row class="text-center mx-0">
      <b-col
        cols="4"
        class="border-top border-right d-flex align-items-between flex-column py-1"
      >
        <b-card-text class="text-muted mb-0">
          Objetivo
        </b-card-text>
        <h3 class="font-weight-bolder mb-50">
          {{ data.objetivo }}
        </h3>
      </b-col>
      <b-col
        cols="4"
        class="border-top border-right d-flex align-items-between flex-column py-1"
      >
        <b-card-text class="text-muted mb-0">
          Facturado
        </b-card-text>
        <h3 class="font-weight-bolder mb-50">
          {{ data.facturado }}
        </h3>
      </b-col>
      <b-col
        cols="4"
        class="border-top border-right d-flex align-items-between flex-column py-1"
      >
        <b-card-text class="text-muted mb-0">
          Pendiente
        </b-card-text>
        <h3 class="font-weight-bolder mb-50">
          {{ data.pendiente }}
        </h3>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BRow, BCol, BCardText, VBPopover, BPopover,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardHeader,
    BRow,
    BCardText,
    BCol,
    BPopover,
  },
  directives: {
    'b-popover': VBPopover,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      delay: { show: 500, hide: 500 },
    }
  },
  created() {
    this.$parent.$on('updateCierre', this.actualizar)
  },
  methods: {
    actualizar() {
      this.$refs.refFacturado.updateSeries(
        this.data.series.facturado,
        false,
        true,
      )
      this.$refs.refPendiente.updateSeries(
        this.data.series.pendiente,
        false,
        true,
      )
    },
  },
}
</script>
