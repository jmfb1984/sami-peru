<template>
  <div>
    <b-row>
      <b-col
        v-for="browser in dataVariables"
        :key="browser.id"
        xl="3"
        lg="3"
        md="6"
        sm="6"
        xs="12"
      >
        <mainVariales
          :titulo="browser.titulo"
          :valor="browser.valor"
          :simbolo="browser.simbolo"
          :icono="browser.icono"
          :color="browser.color"
          :porcentaje="browser.ratio"
          :detalle="browser.detalle"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        xl="4"
        lg="4"
        md="6"
        sm="12"
        xs="12"
      >
        <mainCierre :data="dataIncorporacion" />
      </b-col>
      <b-col
        xl="4"
        lg="4"
        md="6"
        sm="12"
        xs="12"
      >
        <mainCierre :data="dataRetencion" />
      </b-col>
      <b-col
        xl="4"
        lg="4"
        md="6"
        sm="12"
        xs="12"
      >
        <mainCierre :data="dataTotal" />
      </b-col>
    </b-row>
    <b-row class="match-height">
      <b-col
        xl="6"
        lg="6"
        md="12"
        sm="12"
        xs="12"
      >
        <mainConsecutiva :data="dataConsecutiva" />
      </b-col>
      <b-col
        xl="6"
        lg="6"
        md="12"
        sm="12"
        xs="12"
      >
        <mainCapitalizacion :data="dataCapitalizacion" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <mainConsolidadoPedido :data="dataConsolidadoPedido" />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        xl="6"
        lg="6"
        md="12"
        sm="12"
        xs="12"
      >
        <mainConsolidadoIngreso :data="dataConsolidadoIngreso" />
      </b-col>
      <b-col
        xl="6"
        lg="6"
        md="12"
        sm="12"
        xs="12"
      >
        <mainConsolidadoEgreso :data="dataConsolidadoEgreso" />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        xl="6"
        lg="6"
        md="12"
        sm="12"
        xs="12"
      >
        <mainConsolidadoReingreso :data="dataConsolidadoReingreso" />
      </b-col>
      <b-col
        xl="6"
        lg="6"
        md="12"
        sm="12"
        xs="12"
      >
        <mainConsolidadoCapitalizacion :data="dataConsolidadoCapitalizacion" />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { BRow, BCol } from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

import mainVariales from './MainVariables.vue'
import mainCierre from './MainCierre.vue'
import mainConsecutiva from './MainConsecutiva.vue'
import mainCapitalizacion from './MainCapitalizacion.vue'
import mainConsolidadoPedido from './MainConsolidadoPedido.vue'
import mainConsolidadoIngreso from './MainConsolidadoIngreso.vue'
import mainConsolidadoReingreso from './MainConsolidadoReingreso.vue'
import mainConsolidadoEgreso from './MainConsolidadoEgreso.vue'
import mainConsolidadoCapitalizacion from './MainConsolidadoCapitalizacion.vue'

export default {
  components: {
    BRow,
    BCol,
    mainVariales,
    mainCierre,
    mainConsecutiva,
    mainCapitalizacion,
    mainConsolidadoPedido,
    mainConsolidadoIngreso,
    mainConsolidadoReingreso,
    mainConsolidadoEgreso,
    mainConsolidadoCapitalizacion,
  },
  data() {
    return {
      dataVariables: [
        {
          titulo: 'Campaña',
          valor: '000000',
          simbolo: '',
          icono: 'CalendarIcon',
          ratio: 100,
          color: 'primary',
          detalle: [
            {
              descripcion: 'Inicio :',
              valor: 'Sin Fecha',
            },
            {
              descripcion: 'Fin :',
              valor: 'Sin fecha',
            },
          ],
        },
        {
          titulo: 'Cobranza 21 días',
          valor: '0.00',
          simbolo: '%',
          icono: 'DollarSignIcon',
          ratio: 100,
          color: 'success',
          detalle: [
            {
              descripcion: 'Venta :',
              valor: 'S/. 0.00',
            },
            {
              descripcion: 'Saldo :',
              valor: 'S/. 0.00',
            },
          ],
        },
        {
          titulo: 'Actividad',
          valor: '0.00',
          simbolo: '%',
          icono: 'UsersIcon',
          ratio: 100,
          color: 'info',
          detalle: [],
        },
        {
          titulo: 'Capitalización',
          valor: '0',
          simbolo: '',
          icono: 'UserPlusIcon',
          ratio: 100,
          color: 'danger',
          detalle: [],
        },
      ],
      dataIncorporacion: {
        id: 'Incorporacion',
        titulo: 'Mi cierre - Incorporación',
        objetivo: 0,
        facturado: 0,
        pendiente: 0,
        ayuda: 'Mi cierre incorporación mensaje de ayuda.',
        color: 'danger',
        series: {
          facturado: [0.0],
          pendiente: [0.0],
        },
        configuracionFacturado: {
          plotOptions: {
            radialBar: {
              size: 110,
              startAngle: -120,
              endAngle: 120,
              hollow: {
                size: '65%',
              },
              track: {
                background: '#bfc5cc',
                strokeWidth: '50%',
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  offsetY: 18,
                  color: '#99a2ac',
                  fontSize: '2rem',
                  formatter(val) {
                    // eslint-disable-next-line radix
                    return `${parseFloat(val).toFixed(2)}%`
                  },
                },
              },
            },
          },
          colors: ['#fa7071'],
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: [$themeColors.danger],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: 'round',
          },
          chart: {
            sparkline: {
              enabled: true,
            },
            dropShadow: {
              enabled: true,
              blur: 3,
              left: 1,
              top: 1,
              opacity: 0.1,
            },
          },
          grid: {
            padding: {
              bottom: 10,
            },
          },
        },
        configuracionPendiente: {
          plotOptions: {
            radialBar: {
              size: 110,
              startAngle: -120,
              endAngle: 120,
              hollow: {
                size: '65%',
              },
              track: {
                background: '#bfc5cc',
                strokeWidth: '50%',
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  offsetY: 18,
                  color: '#99a2ac',
                  fontSize: '2rem',
                  formatter(val) {
                    // eslint-disable-next-line radix
                    return `${parseFloat(val).toFixed(2)}%`
                  },
                },
              },
            },
          },
          colors: ['#F4E192'],
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: [$themeColors.primary],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: 'round',
          },
          chart: {
            sparkline: {
              enabled: true,
            },
            dropShadow: {
              enabled: true,
              blur: 3,
              left: 1,
              top: 1,
              opacity: 0.1,
            },
          },
          grid: {
            padding: {
              bottom: 10,
            },
          },
        },
      },
      dataRetencion: {
        id: 'Retencion',
        titulo: 'Mi cierre - Retención',
        objetivo: 0,
        facturado: 0,
        pendiente: 0,
        ayuda: 'Mi cierre retención mensaje de ayuda.',
        color: 'success',
        series: {
          facturado: [0.0],
          pendiente: [0.0],
        },
        configuracionFacturado: {
          plotOptions: {
            radialBar: {
              size: 110,
              startAngle: -120,
              endAngle: 120,
              hollow: {
                size: '65%',
              },
              track: {
                background: '#bfc5cc',
                strokeWidth: '50%',
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  offsetY: 18,
                  color: '#99a2ac',
                  fontSize: '2rem',
                  formatter(val) {
                    // eslint-disable-next-line radix
                    return `${parseFloat(val).toFixed(2)}%`
                  },
                },
              },
            },
          },
          colors: ['#32f88a'],
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: [$themeColors.success],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: 'round',
          },
          chart: {
            sparkline: {
              enabled: true,
            },
            dropShadow: {
              enabled: true,
              blur: 3,
              left: 1,
              top: 1,
              opacity: 0.1,
            },
          },
        },
        configuracionPendiente: {
          plotOptions: {
            radialBar: {
              size: 110,
              startAngle: -120,
              endAngle: 120,
              hollow: {
                size: '65%',
              },
              track: {
                background: '#bfc5cc',
                strokeWidth: '50%',
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  offsetY: 18,
                  color: '#99a2ac',
                  fontSize: '2rem',
                  formatter(val) {
                    // eslint-disable-next-line radix
                    return `${parseFloat(val).toFixed(2)}%`
                  },
                },
              },
            },
          },
          colors: ['#F4E192'],
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: [$themeColors.primary],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: 'round',
          },
          chart: {
            sparkline: {
              enabled: true,
            },
            dropShadow: {
              enabled: true,
              blur: 3,
              left: 1,
              top: 1,
              opacity: 0.1,
            },
          },
        },
      },
      dataTotal: {
        id: 'Total',
        titulo: 'Mi cierre - Pedidos Totales',
        objetivo: 0,
        facturado: 0,
        pendiente: 0,
        ayuda: 'Mi cierre total mensaje de ayuda.',
        color: 'secondary',
        series: {
          facturado: [0.0],
          pendiente: [0.0],
        },
        configuracionFacturado: {
          plotOptions: {
            radialBar: {
              size: 110,
              startAngle: -120,
              endAngle: 120,
              hollow: {
                size: '65%',
              },
              track: {
                background: '#bfc5cc',
                strokeWidth: '50%',
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  offsetY: 18,
                  color: '#99a2ac',
                  fontSize: '2rem',
                  formatter(val) {
                    // eslint-disable-next-line radix
                    return `${parseFloat(val).toFixed(2)}%`
                  },
                },
              },
            },
          },
          colors: ['#6f6e6e'],
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: [$themeColors.dark],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: 'round',
          },
          chart: {
            sparkline: {
              enabled: true,
            },
            dropShadow: {
              enabled: true,
              blur: 3,
              left: 1,
              top: 1,
              opacity: 0.1,
            },
          },
        },
        configuracionPendiente: {
          plotOptions: {
            radialBar: {
              size: 110,
              startAngle: -120,
              endAngle: 120,
              hollow: {
                size: '65%',
              },
              track: {
                background: '#bfc5cc',
                strokeWidth: '50%',
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  offsetY: 18,
                  color: '#99a2ac',
                  fontSize: '2rem',
                  formatter(val) {
                    // eslint-disable-next-line radix
                    return `${parseFloat(val).toFixed(2)}%`
                  },
                },
              },
            },
          },
          colors: ['#F4E192'],
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: [$themeColors.primary],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: 'round',
          },
          chart: {
            sparkline: {
              enabled: true,
            },
            dropShadow: {
              enabled: true,
              blur: 3,
              left: 1,
              top: 1,
              opacity: 0.1,
            },
          },
        },
      },
      dataConsecutiva: {
        series: [0, 0, 0],
        chartOptions: {
          labels: ['0', '0', 'PEG21 Nuevas'],
          dataLabels: {
            enabled: true,
            // eslint-disable-next-line
            formatter(val, { seriesIndex, dataPointIndex, w }) {
              return w.config.series[seriesIndex]
            },
          },
          legend: { show: true },
          chart: {
            offsetY: 30,
            type: 'donut',
            toolbar: {
              show: true,
            },
          },
          stroke: { width: 0 },
          colors: [
            $themeColors.dark,
            $themeColors.secondary,
            $themeColors.primary,
          ],
          plotOptions: {
            pie: {
              donut: {
                size: '65%',
                labels: {
                  show: true,
                  name: {
                    show: false,
                    color: '#dfsda',
                  },
                  value: {
                    show: true,
                    fontSize: '25px',
                    color: undefined,
                    offsetY: 0,
                    formatter(val) {
                      return val
                    },
                  },
                  total: {
                    show: true,
                    showAlways: true,
                    label: '',
                    formatter(w) {
                      // eslint-disable-next-line
                      const campActuTota = parseInt(w.config.series[0])
                      // eslint-disable-next-line
                      const campAnteTota = parseInt(w.config.series[1])
                      // eslint-disable-next-line
                      const mainTotaPe21 = parseInt(w.config.series[2])
                      let mainPorcPe21 = '0.00'
                      if (campActuTota !== 0 && campAnteTota !== 0) {
                        mainPorcPe21 = 100 * (campActuTota / campAnteTota)
                      }
                      mainPorcPe21 = parseFloat(mainPorcPe21).toFixed(2)
                      return `${mainPorcPe21}%`
                    },
                  },
                },
              },
            },
          },
        },
      },
      dataCapitalizacion: {
        series: [
          {
            data: [0, 0, 0, 0],
          },
        ],
        chartOptions: {
          colors: [
            $themeColors.secondary,
            $themeColors.secondary,
            $themeColors.success,
            $themeColors.primary,
          ],
          plotOptions: {
            bar: {
              distributed: true,
              horizontal: false,
            },
          },
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: true,
          },
          tooltip: {
            x: {
              show: false,
            },
            y: {
              title: {
                formatter() {
                  return ''
                },
              },
            },
          },
          xaxis: {
            categories: ['Ingresos', 'Reingresos', 'Egresos', 'Capitalización'],
          },
        },
      },
      dataConsolidadoPedido: {
        series: [
          {
            name: '',
            data: [],
          },
          {
            name: '',
            data: [],
          },
        ],
        chartOptions: {
          chart: {
            dropShadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 0.2,
            },
            toolbar: {
              show: true,
            },
            zoom: {
              enabled: true,
            },
          },
          colors: [$themeColors.secondary, $themeColors.primary],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'straight',
            width: 2,
          },
          grid: {
            row: {
              opacity: 0.5,
            },
          },
          markers: {
            size: 2,
          },
          xaxis: {
            categories: [],
            title: {
              text: 'Campañas',
            },
          },
          yaxis: {
            title: {
              text: 'Pedidos',
            },
          },
          legend: {
            show: true,
          },
        },
      },
      dataConsolidadoIngreso: {
        series: [
          {
            name: '',
            data: [],
          },
        ],
        chartOptions: {
          colors: [$themeColors.success],
          plotOptions: {
            bar: {
              distributed: false,
              horizontal: false,
            },
          },
          legend: {
            show: true,
          },
          dataLabels: {
            enabled: true,
          },
          tooltip: {
            x: {
              show: false,
            },
            y: {
              title: {
                formatter() {
                  return ''
                },
              },
            },
          },
          xaxis: {
            categories: [],
          },
        },
      },
      dataConsolidadoEgreso: {
        series: [
          {
            name: '',
            data: [],
          },
        ],
        chartOptions: {
          colors: [$themeColors.warning],
          plotOptions: {
            bar: {
              distributed: false,
              horizontal: false,
            },
          },
          legend: {
            show: true,
          },
          tooltip: {
            x: {
              show: false,
            },
            y: {
              title: {
                formatter() {
                  return ''
                },
              },
            },
          },
          xaxis: {
            categories: [],
          },
        },
      },
      dataConsolidadoReingreso: {
        series: [
          {
            name: '',
            data: [],
          },
        ],
        chartOptions: {
          colors: [$themeColors.info],
          plotOptions: {
            bar: {
              distributed: false,
              horizontal: false,
            },
          },
          legend: {
            show: true,
          },
          tooltip: {
            theme: 'dark',
            x: {
              show: false,
            },
            y: {
              title: {
                formatter() {
                  return ''
                },
              },
            },
          },
          xaxis: {
            categories: [],
          },
        },
      },
      dataConsolidadoCapitalizacion: {
        series: [
          {
            name: '',
            data: [],
          },
        ],
        chartOptions: {
          colors: [$themeColors.primary],
          plotOptions: {
            bar: {
              distributed: false,
              horizontal: false,
            },
          },
          legend: {
            show: true,
          },
          dataLabels: {
            enabled: true,
          },
          tooltip: {
            x: {
              show: false,
            },
            y: {
              title: {
                formatter() {
                  return ''
                },
              },
            },
          },
          xaxis: {
            categories: [],
          },
        },
      },
    }
  },
  mounted() {
    setTimeout(() => {
      this.mainCampana()
    }, 1000)
  },
  methods: {
    async mainCampana() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const userData = JSON.parse(localStorage.getItem('userData'))
      if (!localStorage.getItem('mainCampana')) {
        try {
          const campana = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/dato/pedi_camp`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: userData.codigoAcceso,
              codi_zona: JSON.parse(userData.zonaUsuario),
              codi_area: JSON.parse(userData.areaUsuario),
            },
          })
          const datoCampana = await campana.data.datos
          if (typeof datoCampana !== 'undefined') {
            localStorage.setItem('mainCampana', JSON.stringify(datoCampana))
          }
        } catch (error) {
          setTimeout(() => {
            this.$vs.loading.close('.con-vs-loading')
          }, 500)
          let mensajeError = ''
          if (error.response) {
            if (error.response.status === 500) {
              mensajeError = error.response.statusText
            } else if (error.response.status === 404) {
              mensajeError = error.response.data.message
            } else if (error.response.status === 401) {
              mensajeError = error.response.data.message
            }
          } else if (error.request) {
            mensajeError = error.request
          } else if (error.message === 'Network Error') {
            mensajeError = 'Error de conexión con el servidor.'
          } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
            mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
          }
          mensajeError = mensajeError.toLowerCase()
          mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
                text: mensajeError,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          if (error.response) {
            if (error.response.status === 401) {
              this.$router.push({ name: 'login' }).catch(() => {})
            }
          }
        }
      }
      let itemCampanaActual = localStorage.getItem('mainCampana')
      if (itemCampanaActual) {
        itemCampanaActual = JSON.parse(itemCampanaActual)
        let totaCapi = 0
        let totaIngr = 0
        let totaEgre = 0
        let totaRein = 0
        if (itemCampanaActual.camp_actu.length > 0) {
          this.dataVariables[0].valor = itemCampanaActual.camp_actu[0].codi_camp
          this.dataVariables[0].detalle[0].valor = itemCampanaActual.camp_actu[0].fech_inic
          this.dataVariables[0].detalle[1].valor = itemCampanaActual.camp_actu[0].fech_fina
        }
        if (itemCampanaActual.cobr.length > 0) {
          this.dataVariables[1].valor = itemCampanaActual.cobr[0].porc_cobr
          this.dataVariables[1].detalle[0].valor = itemCampanaActual.cobr[0].vent_cobr
          this.dataVariables[1].detalle[1].valor = itemCampanaActual.cobr[0].sald_cobr
        }
        if (itemCampanaActual.cons.acti.length > 0) {
          this.dataVariables[2].valor = itemCampanaActual.cons.acti[0].porc_acti
        }
        if (itemCampanaActual.cons.capi.length > 0) {
          totaCapi = itemCampanaActual.cons.capi[0].tota_capi
          this.dataVariables[3].valor = totaCapi
        }
        if (itemCampanaActual.pedi_inco.length > 0) {
          this.dataIncorporacion.objetivo = itemCampanaActual.pedi_inco[0].obje_inco
          this.dataIncorporacion.facturado = itemCampanaActual.pedi_inco[0].fact_inco
          this.dataIncorporacion.pendiente = itemCampanaActual.pedi_inco[0].pend_inco
          this.dataIncorporacion.series.facturado[0] = parseFloat(itemCampanaActual.pedi_inco[0].porc_inco).toFixed(2)
          this.dataIncorporacion.series.pendiente[0] = parseFloat(itemCampanaActual.pedi_inco[0].porc_inco_pend).toFixed(2)
        }
        if (itemCampanaActual.pedi_rete.length > 0) {
          this.dataRetencion.objetivo = itemCampanaActual.pedi_rete[0].obje_rete
          this.dataRetencion.facturado = itemCampanaActual.pedi_rete[0].fact_rete
          this.dataRetencion.pendiente = itemCampanaActual.pedi_rete[0].pend_rete
          this.dataRetencion.series.facturado[0] = parseFloat(itemCampanaActual.pedi_rete[0].porc_rete).toFixed(2)
          this.dataRetencion.series.pendiente[0] = parseFloat(itemCampanaActual.pedi_rete[0].porc_rete_pend).toFixed(2)
        }
        if (itemCampanaActual.pedi_tota.length > 0) {
          this.dataTotal.objetivo = itemCampanaActual.pedi_tota[0].obje_tota
          this.dataTotal.facturado = itemCampanaActual.pedi_tota[0].fact_tota
          this.dataTotal.pendiente = itemCampanaActual.pedi_tota[0].pend_tota
          this.dataTotal.series.facturado[0] = parseFloat(itemCampanaActual.pedi_tota[0].porc_tota).toFixed(2)
          this.dataTotal.series.pendiente[0] = parseFloat(itemCampanaActual.pedi_tota[0].porc_tota_pend).toFixed(2)
        }
        if (itemCampanaActual.cons_ases.length > 0) {
          const campActu = itemCampanaActual.cons_ases[0].camp_actu
          const campAnte = itemCampanaActual.cons_ases[0].camp_ante
          const campActuTota = itemCampanaActual.cons_ases[0].tota_actu
          const campAnteTota = itemCampanaActual.cons_ases[0].tota_ante

          // eslint-disable-next-line
          const mainTotaPe21 = parseInt(campAnteTota) - parseInt(campActuTota)
          this.dataConsecutiva.chartOptions.labels = [
            campActu,
            campAnte,
            'PEG21 Nuevas',
          ]
          this.dataConsecutiva.series = [
            // eslint-disable-next-line
            parseInt(campActuTota),
            // eslint-disable-next-line
            parseInt(campAnteTota),
            // eslint-disable-next-line
            parseInt(mainTotaPe21),
          ]
        }
        if (itemCampanaActual.cons.ingr.length > 0) {
          // eslint-disable-next-line
          totaIngr = parseInt(itemCampanaActual.cons.ingr[0].tota_ingr)
        }
        if (itemCampanaActual.cons.egre.length > 0) {
          // eslint-disable-next-line
          totaEgre = parseInt(itemCampanaActual.cons.egre[0].tota_egre)
        }
        if (itemCampanaActual.cons.rein.length > 0) {
          // eslint-disable-next-line
          totaRein = parseInt(itemCampanaActual.cons.rein[0].tota_rein)
        }
        totaEgre *= -1
        this.dataCapitalizacion.series[0].data = [
          totaIngr,
          totaRein,
          totaEgre,
          totaCapi,
        ]

        const dataPedidoActual = itemCampanaActual.cons_camp.nume_pedi_actu.filter(pedidos => pedidos > 0)
        const totaPedidoActual = dataPedidoActual.length
        this.dataConsolidadoPedido.chartOptions.xaxis.categories = itemCampanaActual.cons_camp.nume_camp.slice(0, totaPedidoActual)
        this.dataConsolidadoPedido.series = [
          {
            name: itemCampanaActual.cons_camp.codi_anio[0],
            data: itemCampanaActual.cons_camp.nume_pedi_ante.slice(0, totaPedidoActual),
          },
          {
            name: itemCampanaActual.cons_camp.codi_anio[1],
            data: itemCampanaActual.cons_camp.nume_pedi_actu.slice(0, totaPedidoActual),
          },
        ]
        this.dataConsolidadoIngreso.chartOptions.xaxis.categories = itemCampanaActual.cons_camp.codi_camp.slice(itemCampanaActual.cons_camp.codi_camp.length - 9)
        this.dataConsolidadoIngreso.series = [
          {
            name: '',
            data: itemCampanaActual.cons_camp.nume_ingr.slice(itemCampanaActual.cons_camp.nume_ingr.length - 9),
          },
        ]
        this.dataConsolidadoEgreso.chartOptions.xaxis.categories = itemCampanaActual.cons_camp.codi_camp.slice(itemCampanaActual.cons_camp.codi_camp.length - 9)
        this.dataConsolidadoEgreso.series = [
          {
            name: '',
            data: itemCampanaActual.cons_camp.nume_egre.slice(itemCampanaActual.cons_camp.nume_egre.length - 9),
          },
        ]
        this.dataConsolidadoReingreso.chartOptions.xaxis.categories = itemCampanaActual.cons_camp.codi_camp.slice(itemCampanaActual.cons_camp.codi_camp.length - 9)
        this.dataConsolidadoReingreso.series = [
          {
            name: '',
            data: itemCampanaActual.cons_camp.nume_rein.slice(itemCampanaActual.cons_camp.nume_rein.length - 9),
          },
        ]
        this.dataConsolidadoCapitalizacion.series = [
          {
            name: '',
            data: itemCampanaActual.cons_camp.nume_capi.slice(itemCampanaActual.cons_camp.nume_capi.length - 9),
          },
        ]
        this.dataConsolidadoCapitalizacion.chartOptions.xaxis.categories = itemCampanaActual.cons_camp.codi_camp.slice(itemCampanaActual.cons_camp.codi_camp.length - 9)
        this.$emit('updateCierre')
        this.$emit('updateConsecutiva')
        this.$emit('updateCapitalizacion')
        this.$emit('updateConsolidadoPedido')
        this.$emit('updateConsolidadoIngreso')
        this.$emit('updateConsolidadoEgreso')
        this.$emit('updateConsolidadoReingreso')
        this.$emit('updateConsolidadoCapitalizacion')
        setTimeout(() => {
          this.$vs.loading.close()
        }, 1000)
      }
    },
  },
}
</script>
