<template>
  <section>
    <b-row>
      <b-col
        cols="12"
      >
        <b-card>
          <b-row>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Campaña</span>
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="6"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <v-select
                ref="refCampana"
                v-model="seleccionCampana"
                :options="dataCampana"
                class="dropdown-150"
                @input="setCampana"
              >
                <span
                  slot="no-options"
                  @click="$refs.refCampana.open=false"
                >
                  Campaña no existe.
                </span>
              </v-select>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-card
      no-body
    >
      <b-row class="match-height">
        <b-col
          lg="4"
          md="6"
          xs="12"
        >
          <b-card class="text-center border-right">
            <b-row>
              <b-col>
                <h3>
                  Consecutividad general
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refConsolidadoGeneral"
                  type="bar"
                  height="250"
                  :options="dataConsecutividad.general.bar.chartOptions"
                  :series="dataConsecutividad.general.bar.series"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="4"
          md="6"
          xs="12"
        >
          <b-card class="text-center border-right">
            <b-row>
              <b-col>
                <h3>
                  Consecutividad lima
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refConsolidadoLima"
                  type="bar"
                  height="250"
                  :options="dataConsecutividad.lima.bar.chartOptions"
                  :series="dataConsecutividad.lima.bar.series"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="4"
          xs="12"
        >
          <b-card class="text-center">
            <b-row>
              <b-col>
                <h3>
                  Consecutividad provincia
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refConsolidadoProvincia"
                  type="bar"
                  height="250"
                  :options="dataConsecutividad.provincia.bar.chartOptions"
                  :series="dataConsecutividad.provincia.bar.series"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
    <b-card
      no-body
    >
      <b-row class="match-height">
        <b-col
          lg="4"
          md="6"
          xs="12"
        >
          <b-card class="text-center border-right">
            <b-row>
              <b-col>
                <h3>
                  Consecutividad por perfil de asesora
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refConsolidadoPerfilGeneral"
                  type="bar"
                  height="250"
                  :options="dataConsecutividadPerfil.general.bar.chartOptions"
                  :series="dataConsecutividadPerfil.general.bar.series"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="4"
          md="6"
          xs="12"
        >
          <b-card class="text-center border-right">
            <b-row>
              <b-col>
                <h3>
                  Consecutividad por perfil de asesora Lima
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refConsolidadoPerfilLima"
                  type="bar"
                  height="250"
                  :options="dataConsecutividadPerfil.lima.bar.chartOptions"
                  :series="dataConsecutividadPerfil.lima.bar.series"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="4"
          xs="12"
        >
          <b-card class="text-center">
            <b-row>
              <b-col>
                <h3>
                  Consecutividad por perfil de asesora provincia
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refConsolidadoPerfilProvincia"
                  type="bar"
                  height="250"
                  :options="dataConsecutividadPerfil.provincia.bar.chartOptions"
                  :series="dataConsecutividadPerfil.provincia.bar.series"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
    <b-card
      no-body
    >
      <b-row class="match-height">
        <b-col
          md="6"
          xs="12"
        >
          <b-card class="text-center border-right">
            <b-row>
              <b-col>
                <h3>
                  Beneficio 3 - Devoluciones automáticas
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refDevolucionAutomatica"
                  type="bar"
                  height="250"
                  :options="dataDevolucion.automatica.bar.chartOptions"
                  :series="dataDevolucion.automatica.bar.series"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          md="6"
          xs="12"
        >
          <b-card class="text-center border-right">
            <b-row>
              <b-col>
                <h3>
                  Beneficio 4 - Cambio por galeria favorito
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refDevolucionGaleria"
                  type="bar"
                  height="250"
                  :options="dataDevolucion.galeria.bar.chartOptions"
                  :series="dataDevolucion.galeria.bar.series"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
    <b-card
      no-body
    >
      <b-row class="match-height">
        <b-col
          lg="4"
          md="6"
          xs="12"
        >
          <b-card class="text-center border-right">
            <b-row>
              <b-col>
                <h3>
                  Beneficio 6 - Segundo pedido facturado general
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refFacturaGeneral"
                  type="bar"
                  height="250"
                  :options="dataFactura.general.bar.chartOptions"
                  :series="dataFactura.general.bar.series"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="4"
          md="6"
          xs="12"
        >
          <b-card class="text-center border-right">
            <b-row>
              <b-col>
                <h3>
                  Beneficio 6 - Segundo pedido facturado lima
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refFacturaLima"
                  type="bar"
                  height="250"
                  :options="dataFactura.lima.bar.chartOptions"
                  :series="dataFactura.lima.bar.series"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="4"
          xs="12"
        >
          <b-card class="text-center">
            <b-row>
              <b-col>
                <h3>
                  Beneficio 6 - Segundo pedido facturado provincia
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refFacturaProvincia"
                  type="bar"
                  height="250"
                  :options="dataFactura.provincia.bar.chartOptions"
                  :series="dataFactura.provincia.bar.series"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
  </section>
</template>

<script>
import {
  BRow, BCol, BCard,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { $themeColors } from '@themeConfig'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import VueApexCharts from 'vue-apexcharts'
import axios from '@axios'
import store from '@/store'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    VueApexCharts,
    vSelect,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      dataCampana: [],
      seleccionCampana: [],
      delay: { show: 500, hide: 500 },
      dataConsecutividad: {
        general: {
          bar: {
            series: [{
              name: 'Pedidos',
              data: [0],
            }],
            chartOptions: {
              chart: {
                type: 'bar',
                toolbar: {
                  show: false,
                },
              },
              colors: ['#007bff'],
              stroke: {
                show: true,
                width: 1,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  endingShape: 'rounded',
                  dataLabels: {
                    position: 'top',
                  },
                },
              },
              grid: {
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
              xaxis: {
                categories: [0],
                labels: {
                  show: true,
                },
              },
              yaxis: {
              },
              tooltip: {
                enabled: true,
                followCursor: true,
                y: {
                  formatter(val) {
                    return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                  },
                },
              },
            },
          },
        },
        lima: {
          bar: {
            series: [{
              name: 'Pedidos',
              data: [0],
            }],
            chartOptions: {
              chart: {
                toolbar: {
                  show: false,
                },
              },
              colors: [
                $themeColors.warning,
              ],
              stroke: {
                show: true,
                width: 1,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  endingShape: 'rounded',
                  dataLabels: {
                    position: 'top',
                  },
                },
              },
              grid: {
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
              xaxis: {
                categories: [0],
                labels: {
                  show: true,
                },
              },
              yaxis: {
              },
              tooltip: {
                enabled: true,
                followCursor: true,
                y: {
                  formatter(val) {
                    return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                  },
                },
              },
            },
          },
        },
        provincia: {
          bar: {
            series: [{
              name: 'Pedidos',
              data: [0],
            }],
            chartOptions: {
              chart: {
                toolbar: {
                  show: false,
                },
              },
              colors: [
                $themeColors.success,
              ],
              stroke: {
                show: true,
                width: 1,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  endingShape: 'rounded',
                  dataLabels: {
                    position: 'top',
                  },
                },
              },
              grid: {
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
              xaxis: {
                categories: [0],
                labels: {
                  show: true,
                },
              },
              yaxis: {
              },
              tooltip: {
                enabled: true,
                followCursor: true,
                y: {
                  formatter(val) {
                    return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                  },
                },
              },
            },
          },
        },
      },
      dataConsecutividadPerfil: {
        general: {
          bar: {
            series: [
              {
                name: 'Nueva',
                data: [0],
              },
              {
                name: 'Intermedia',
                data: [0],
              },
              {
                name: 'Antigua',
                data: [0],
              },
              {
                name: 'Fundadora',
                data: [0],
              },
            ],
            chartOptions: {
              chart: {
                type: 'bar',
                stacked: true,
                toolbar: {
                  show: false,
                },
              },
              colors: [
                '#007bff', $themeColors.warning, $themeColors.secondary, $themeColors.primary,
              ],
              stroke: {
                show: true,
                width: 1,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  endingShape: 'rounded',
                  borderRadius: 10,
                },
              },
              grid: {
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
              xaxis: {
                categories: [0],
                labels: {
                  show: true,
                },
              },
              yaxis: {
              },
              tooltip: {
                enabled: true,
                followCursor: true,
                y: {
                  formatter(val) {
                    return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                  },
                },
              },
            },
          },
        },
        lima: {
          bar: {
            series: [
              {
                name: 'Nueva',
                data: [0],
              },
              {
                name: 'Intermedia',
                data: [0],
              },
              {
                name: 'Antigua',
                data: [0],
              },
              {
                name: 'Fundadora',
                data: [0],
              },
            ],
            chartOptions: {
              chart: {
                type: 'bar',
                stacked: true,
                toolbar: {
                  show: false,
                },
              },
              colors: [
                '#007bff', $themeColors.warning, $themeColors.secondary, $themeColors.primary,
              ],
              stroke: {
                show: true,
                width: 1,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  endingShape: 'rounded',
                  borderRadius: 10,
                },
              },
              grid: {
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
              xaxis: {
                categories: [0],
                labels: {
                  show: true,
                },
              },
              yaxis: {
              },
              tooltip: {
                enabled: true,
                followCursor: true,
                y: {
                  formatter(val) {
                    return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                  },
                },
              },
            },
          },
        },
        provincia: {
          bar: {
            series: [
              {
                name: 'Nueva',
                data: [0],
              },
              {
                name: 'Intermedia',
                data: [0],
              },
              {
                name: 'Antigua',
                data: [0],
              },
              {
                name: 'Fundadora',
                data: [0],
              },
            ],
            chartOptions: {
              chart: {
                type: 'bar',
                stacked: true,
                toolbar: {
                  show: false,
                },
              },
              colors: [
                '#007bff', $themeColors.warning, $themeColors.secondary, $themeColors.primary,
              ],
              stroke: {
                show: true,
                width: 1,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  endingShape: 'rounded',
                  borderRadius: 10,
                },
              },
              grid: {
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
              xaxis: {
                categories: [0],
                labels: {
                  show: true,
                },
              },
              yaxis: {
              },
              tooltip: {
                enabled: true,
                followCursor: true,
                y: {
                  formatter(val) {
                    return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                  },
                },
              },
            },
          },
        },
      },
      dataDevolucion: {
        automatica: {
          bar: {
            series: [{
              name: 'Asesoras',
              data: [0],
            }],
            chartOptions: {
              chart: {
                type: 'bar',
                toolbar: {
                  show: false,
                },
              },
              colors: ['#007bff'],
              stroke: {
                show: true,
                width: 1,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  endingShape: 'rounded',
                  dataLabels: {
                    position: 'top',
                  },
                },
              },
              grid: {
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
              xaxis: {
                categories: [0],
                labels: {
                  show: true,
                },
              },
              yaxis: {
              },
              tooltip: {
                enabled: true,
                followCursor: true,
                y: {
                  formatter(val) {
                    return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                  },
                },
              },
            },
          },
        },
        galeria: {
          bar: {
            series: [{
              name: 'Asesoras',
              data: [0],
            }],
            chartOptions: {
              chart: {
                toolbar: {
                  show: false,
                },
              },
              colors: [
                $themeColors.warning,
              ],
              stroke: {
                show: true,
                width: 1,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  endingShape: 'rounded',
                  dataLabels: {
                    position: 'top',
                  },
                },
              },
              grid: {
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
              xaxis: {
                categories: [0],
                labels: {
                  show: true,
                },
              },
              yaxis: {
              },
              tooltip: {
                enabled: true,
                followCursor: true,
                y: {
                  formatter(val) {
                    return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                  },
                },
              },
            },
          },
        },
      },
      dataFactura: {
        general: {
          bar: {
            series: [{
              name: 'Pedidos',
              data: [0],
            }],
            chartOptions: {
              chart: {
                type: 'bar',
                toolbar: {
                  show: false,
                },
              },
              colors: ['#007bff'],
              stroke: {
                show: true,
                width: 1,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  endingShape: 'rounded',
                  dataLabels: {
                    position: 'top',
                  },
                },
              },
              grid: {
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
              xaxis: {
                categories: [0],
                labels: {
                  show: true,
                },
              },
              yaxis: {
              },
              tooltip: {
                enabled: true,
                followCursor: true,
                y: {
                  formatter(val) {
                    return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                  },
                },
              },
            },
          },
        },
        lima: {
          bar: {
            series: [{
              name: 'Pedidos',
              data: [0],
            }],
            chartOptions: {
              chart: {
                toolbar: {
                  show: false,
                },
              },
              colors: [
                $themeColors.warning,
              ],
              stroke: {
                show: true,
                width: 1,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  endingShape: 'rounded',
                  dataLabels: {
                    position: 'top',
                  },
                },
              },
              grid: {
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
              xaxis: {
                categories: [0],
                labels: {
                  show: true,
                },
              },
              yaxis: {
              },
              tooltip: {
                enabled: true,
                followCursor: true,
                y: {
                  formatter(val) {
                    return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                  },
                },
              },
            },
          },
        },
        provincia: {
          bar: {
            series: [{
              name: 'Pedidos',
              data: [0],
            }],
            chartOptions: {
              chart: {
                toolbar: {
                  show: false,
                },
              },
              colors: [
                $themeColors.success,
              ],
              stroke: {
                show: true,
                width: 1,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  endingShape: 'rounded',
                  dataLabels: {
                    position: 'top',
                  },
                },
              },
              grid: {
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
              xaxis: {
                categories: [0],
                labels: {
                  show: true,
                },
              },
              yaxis: {
              },
              tooltip: {
                enabled: true,
                followCursor: true,
                y: {
                  formatter(val) {
                    return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                  },
                },
              },
            },
          },
        },
      },
    }
  },
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  computed: {
    claseSpan() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'text-white'
      }
      return ''
    },
    claseCargando() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'text-center text-primary my-2'
      }
      return 'text-center my-2'
    },
    claseModal() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'modal-primary'
      }
      return ''
    },
    claseLink() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'text-secondary'
      }
      return 'text-dark'
    },
  },
  async mounted() {
    await this.dash_gemm_camp()
    await this.dash_gemm_visi()
    setTimeout(() => {
      this.dash_gemm_gene()
    }, 1000)
  },
  methods: {
    setCampana(value) {
      this.seleccionCampana = value
      this.$nextTick(() => {
        this.dash_gemm_gene()
      })
    },
    async dash_gemm_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'dash_gemm',
          },
        })
      } catch (error) {
        setTimeout(() => {
          this.$vs.loading.close()
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
          // console.log(error.request)
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
    },
    async dash_gemm_camp() {
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dash_gemm/gemm_camp`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        this.dataCampana = await servicio.data.data_camp
        this.seleccionCampana = 202115
      } catch (error) {
        setTimeout(() => {
          this.$vs.loading.close()
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
        // console.log(error.request)
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
    },
    async dash_gemm_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dash_gemm/gemm_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_camp: this.seleccionCampana,
          },
        })
        const dataCons = await servicio.data.data_cons
        const dataBene = await servicio.data.data_bene
        const dataFact = await servicio.data.data_fact
        const dataConsGene = dataCons.reduce((group, p) => {
          // eslint-disable-next-line
          group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          return group
        }, {})
        const dataConsLima = dataCons.reduce((group, p) => {
          if (p.tipo_zona === 'L') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const dataConsProv = dataCons.reduce((group, p) => {
          if (p.tipo_zona === 'P') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const dataConsPerfGeneNuev = dataCons.reduce((group, p) => {
          if (p.nive_gema === '1') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const dataConsPerfGeneInte = dataCons.reduce((group, p) => {
          if (p.nive_gema === '2') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const dataConsPerfGeneAnti = dataCons.reduce((group, p) => {
          if (p.nive_gema === '3') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const dataConsPerfGeneFund = dataCons.reduce((group, p) => {
          if (p.nive_gema === '4') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const dataConsPerfLimaNuev = dataCons.reduce((group, p) => {
          if (p.nive_gema === '1' && p.tipo_zona === 'L') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const dataConsPerfLimaInte = dataCons.reduce((group, p) => {
          if (p.nive_gema === '2' && p.tipo_zona === 'L') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const dataConsPerfLimaAnti = dataCons.reduce((group, p) => {
          if (p.nive_gema === '3' && p.tipo_zona === 'L') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const dataConsPerfLimaFund = dataCons.reduce((group, p) => {
          if (p.nive_gema === '4' && p.tipo_zona === 'L') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const dataConsPerfProvNuev = dataCons.reduce((group, p) => {
          if (p.nive_gema === '1' && p.tipo_zona === 'P') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const dataConsPerfProvInte = dataCons.reduce((group, p) => {
          if (p.nive_gema === '2' && p.tipo_zona === 'P') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const dataConsPerfProvAnti = dataCons.reduce((group, p) => {
          if (p.nive_gema === '3' && p.tipo_zona === 'P') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const dataConsPerfProvFund = dataCons.reduce((group, p) => {
          if (p.nive_gema === '4' && p.tipo_zona === 'P') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        let inicialConsolidadoGeneral = 0
        let inicialConsolidadoLima = 0
        let inicialConsolidadoProvincia = 0
        const categoriaConsolidadoGeneral = []
        const categoriaConsolidadoLima = []
        const categoriaConsolidadoProvincia = []
        this.dataConsecutividad.general.bar.series[0].data = []
        this.dataConsecutividad.lima.bar.series[0].data = []
        this.dataConsecutividad.provincia.bar.series[0].data = []
        Object.keys(dataConsGene).forEach((key, index) => {
          if (index === 1) {
            inicialConsolidadoGeneral = dataConsGene[key]
          }
          categoriaConsolidadoGeneral.push(key)
          this.dataConsecutividad.general.bar.series[0].data.push(dataConsGene[key])
        })
        Object.keys(dataConsLima).forEach((key, index) => {
          if (index === 1) {
            inicialConsolidadoLima = dataConsLima[key]
          }
          categoriaConsolidadoLima.push(key)
          this.dataConsecutividad.lima.bar.series[0].data.push(dataConsLima[key])
        })
        Object.keys(dataConsProv).forEach((key, index) => {
          if (index === 1) {
            inicialConsolidadoProvincia = dataConsProv[key]
          }
          categoriaConsolidadoProvincia.push(key)
          this.dataConsecutividad.provincia.bar.series[0].data.push(dataConsProv[key])
        })
        this.$refs.refConsolidadoGeneral.updateOptions({
          xaxis: {
            categories: categoriaConsolidadoGeneral,
          },
          dataLabels: {
            offsetY: -20,
            enabled: true,
            formatter(val) {
              let porcentaje = 100 * (val / inicialConsolidadoGeneral)
              porcentaje = parseFloat(porcentaje).toFixed(2)
              if (porcentaje > 100) {
                return ''
              }
              return `${porcentaje}%`
            },
            style: {
              fontSize: '10px',
              colors: ['#6e6b7b'],
            },
          },
        })
        this.$refs.refConsolidadoLima.updateOptions({
          xaxis: {
            categories: categoriaConsolidadoLima,
          },
          dataLabels: {
            offsetY: -20,
            enabled: true,
            formatter(val) {
              let porcentaje = 100 * (val / inicialConsolidadoLima)
              porcentaje = parseFloat(porcentaje).toFixed(2)
              if (porcentaje > 100) {
                return ''
              }
              return `${porcentaje}%`
            },
            style: {
              fontSize: '10px',
              colors: ['#6e6b7b'],
            },
          },
        })
        this.$refs.refConsolidadoProvincia.updateOptions({
          xaxis: {
            categories: categoriaConsolidadoProvincia,
          },
          dataLabels: {
            offsetY: -20,
            enabled: true,
            formatter(val) {
              let porcentaje = 100 * (val / inicialConsolidadoProvincia)
              porcentaje = parseFloat(porcentaje).toFixed(2)
              if (porcentaje > 100) {
                return ''
              }
              return `${porcentaje}%`
            },
            style: {
              fontSize: '10px',
              colors: ['#6e6b7b'],
            },
          },
        })
        this.dataConsecutividadPerfil.general.bar.series[0].data = []
        this.dataConsecutividadPerfil.general.bar.series[1].data = []
        this.dataConsecutividadPerfil.general.bar.series[2].data = []
        this.dataConsecutividadPerfil.general.bar.series[3].data = []
        Object.keys(dataConsPerfGeneNuev).forEach(key => {
          this.dataConsecutividadPerfil.general.bar.series[0].data.push(dataConsPerfGeneNuev[key])
        })
        Object.keys(dataConsPerfGeneInte).forEach(key => {
          this.dataConsecutividadPerfil.general.bar.series[1].data.push(dataConsPerfGeneInte[key])
        })
        Object.keys(dataConsPerfGeneAnti).forEach(key => {
          this.dataConsecutividadPerfil.general.bar.series[2].data.push(dataConsPerfGeneAnti[key])
        })
        Object.keys(dataConsPerfGeneFund).forEach(key => {
          this.dataConsecutividadPerfil.general.bar.series[3].data.push(dataConsPerfGeneFund[key])
        })
        this.$refs.refConsolidadoPerfilGeneral.updateOptions({
          xaxis: {
            categories: categoriaConsolidadoGeneral,
          },
          dataLabels: {
            textAnchor: 'middle',
            enabled: true,
            style: {
              fontSize: '10px',
              colors: ['#6e6b7b'],
            },
          },
        })
        this.dataConsecutividadPerfil.lima.bar.series[0].data = []
        this.dataConsecutividadPerfil.lima.bar.series[1].data = []
        this.dataConsecutividadPerfil.lima.bar.series[2].data = []
        this.dataConsecutividadPerfil.lima.bar.series[3].data = []
        Object.keys(dataConsPerfLimaNuev).forEach(key => {
          this.dataConsecutividadPerfil.lima.bar.series[0].data.push(dataConsPerfLimaNuev[key])
        })
        Object.keys(dataConsPerfLimaInte).forEach(key => {
          this.dataConsecutividadPerfil.lima.bar.series[1].data.push(dataConsPerfLimaInte[key])
        })
        Object.keys(dataConsPerfLimaAnti).forEach(key => {
          this.dataConsecutividadPerfil.lima.bar.series[2].data.push(dataConsPerfLimaAnti[key])
        })
        Object.keys(dataConsPerfLimaFund).forEach(key => {
          this.dataConsecutividadPerfil.lima.bar.series[3].data.push(dataConsPerfLimaFund[key])
        })
        this.$refs.refConsolidadoPerfilLima.updateOptions({
          xaxis: {
            categories: categoriaConsolidadoLima,
          },
          dataLabels: {
            textAnchor: 'middle',
            enabled: true,
            style: {
              fontSize: '10px',
              colors: ['#6e6b7b'],
            },
          },
        })
        this.dataConsecutividadPerfil.provincia.bar.series[0].data = []
        this.dataConsecutividadPerfil.provincia.bar.series[1].data = []
        this.dataConsecutividadPerfil.provincia.bar.series[2].data = []
        this.dataConsecutividadPerfil.provincia.bar.series[3].data = []
        Object.keys(dataConsPerfProvNuev).forEach(key => {
          this.dataConsecutividadPerfil.provincia.bar.series[0].data.push(dataConsPerfProvNuev[key])
        })
        Object.keys(dataConsPerfProvInte).forEach(key => {
          this.dataConsecutividadPerfil.provincia.bar.series[1].data.push(dataConsPerfProvInte[key])
        })
        Object.keys(dataConsPerfProvAnti).forEach(key => {
          this.dataConsecutividadPerfil.provincia.bar.series[2].data.push(dataConsPerfProvAnti[key])
        })
        Object.keys(dataConsPerfProvFund).forEach(key => {
          this.dataConsecutividadPerfil.provincia.bar.series[3].data.push(dataConsPerfProvFund[key])
        })
        this.$refs.refConsolidadoPerfilProvincia.updateOptions({
          xaxis: {
            categories: categoriaConsolidadoProvincia,
          },
          dataLabels: {
            textAnchor: 'middle',
            enabled: true,
            style: {
              fontSize: '10px',
              colors: ['#6e6b7b'],
            },
          },
        })
        const dataBeneAuto = dataBene.reduce((group, p) => {
          if (p.tipo_bene === 'D') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_ases) || 1
          }
          return group
        }, {})
        const dataBeneGale = dataBene.reduce((group, p) => {
          if (p.tipo_bene === 'CM') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_ases) || 1
          }
          return group
        }, {})
        const categoriaBeneficioAutomatico = []
        const categoriaBeneficioGaleria = []
        this.dataDevolucion.automatica.bar.series[0].data = []
        this.dataDevolucion.galeria.bar.series[0].data = []
        Object.keys(dataBeneAuto).forEach(key => {
          categoriaBeneficioAutomatico.push(key)
          this.dataDevolucion.automatica.bar.series[0].data.push(dataBeneAuto[key])
        })
        Object.keys(dataBeneGale).forEach(key => {
          categoriaBeneficioGaleria.push(key)
          this.dataDevolucion.galeria.bar.series[0].data.push(dataBeneGale[key])
        })
        this.$refs.refDevolucionAutomatica.updateOptions({
          xaxis: {
            categories: categoriaBeneficioAutomatico,
          },
          dataLabels: {
            offsetY: -20,
            enabled: true,
            style: {
              fontSize: '10px',
              colors: ['#6e6b7b'],
            },
          },
        })
        this.$refs.refDevolucionGaleria.updateOptions({
          xaxis: {
            categories: categoriaBeneficioGaleria,
          },
          dataLabels: {
            offsetY: -20,
            enabled: true,
            style: {
              fontSize: '10px',
              colors: ['#6e6b7b'],
            },
          },
        })
        const dataFactGene = dataFact.reduce((group, p) => {
          // eslint-disable-next-line
          group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          return group
        }, {})
        const dataFactLima = dataFact.reduce((group, p) => {
          if (p.tipo_zona === 'L') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const dataFactProv = dataFact.reduce((group, p) => {
          if (p.tipo_zona === 'P') {
            // eslint-disable-next-line
            group[p.codi_camp] = (group[p.codi_camp] || 0) + parseInt(p.nume_pedi) || 1
          }
          return group
        }, {})
        const categoriaFacturaGeneral = []
        const categoriaFacturaLima = []
        const categoriaFacturaProvincia = []
        this.dataFactura.general.bar.series[0].data = []
        this.dataFactura.lima.bar.series[0].data = []
        this.dataFactura.provincia.bar.series[0].data = []
        Object.keys(dataFactGene).forEach(key => {
          categoriaFacturaGeneral.push(key)
          this.dataFactura.general.bar.series[0].data.push(dataFactGene[key])
        })
        Object.keys(dataFactLima).forEach(key => {
          categoriaFacturaLima.push(key)
          this.dataFactura.lima.bar.series[0].data.push(dataFactLima[key])
        })
        Object.keys(dataFactProv).forEach(key => {
          categoriaFacturaProvincia.push(key)
          this.dataFactura.provincia.bar.series[0].data.push(dataFactProv[key])
        })
        this.$refs.refFacturaGeneral.updateOptions({
          xaxis: {
            categories: categoriaFacturaGeneral,
          },
          dataLabels: {
            offsetY: -20,
            enabled: true,
            style: {
              fontSize: '10px',
              colors: ['#6e6b7b'],
            },
          },
        })
        this.$refs.refFacturaLima.updateOptions({
          xaxis: {
            categories: categoriaFacturaLima,
          },
          dataLabels: {
            offsetY: -20,
            enabled: true,
            style: {
              fontSize: '10px',
              colors: ['#6e6b7b'],
            },
          },
        })
        this.$refs.refFacturaProvincia.updateOptions({
          xaxis: {
            categories: categoriaFacturaProvincia,
          },
          dataLabels: {
            offsetY: -20,
            enabled: true,
            style: {
              fontSize: '10px',
              colors: ['#6e6b7b'],
            },
          },
        })
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
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
          // console.log(error.request)
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
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
