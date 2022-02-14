<template>
  <section>
    <div class="d-flex align-items-center justify-content-end mb-2">
      <b-button
        variant="info"
        class="d-block mr-1"
        @click="dash_vent_mapa()"
      >
        <feather-icon
          icon="MapIcon"
          class="mr-50"
        />
        Mapa
      </b-button>
      <b-button
        variant="success"
        class="d-block"
        @click="dash_vent_pdff()"
      >
        <feather-icon
          icon="DownloadIcon"
          class="mr-50"
        />
        Pdf
      </b-button>
    </div>
    <b-row>
      <b-col
        cols="12"
      >
        <selectCampana
          :array-campana="dataCampana"
          @campana="setCampana"
        />
      </b-col>
    </b-row>
    <b-card
      no-body
    >
      <b-row class="match-height">
        <b-col
          lg="2"
          md="6"
          xs="12"
        >
          <b-card
            no-body
            class="border-right"
          >
            <b-card-body class="text-center mt-4">
              <b-avatar
                class="mb-1 text-center"
                variant="light-warning"
                size="75"
              >
                <feather-icon
                  size="41"
                  icon="DollarSignIcon"
                />
              </b-avatar>
              <h4 class="font-weight-bolder mt-1">
                {{ venta }}
              </h4>
              <h4 class="font-weight-normal mt-1">
                Venta
              </h4>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col
          lg="5"
          md="6"
          xs="12"
        >
          <b-card class="text-center border-right">
            <b-row>
              <b-col>
                <h3>
                  Total
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                Acumulado
              </b-col>
              <b-col>
                Campaña
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-center">
                {{ ventaAcumulado }}
              </b-col>
              <b-col class="text-center">
                {{ ventaCampaña }}
              </b-col>
            </b-row>
            <b-row class="text-center">
              <b-col>
                <vue-apex-charts
                  ref="refRadialVenta"
                  type="radialBar"
                  height="180"
                  :options="dataVenta.radial.chartOptions"
                  :series="dataVenta.radial.series"
                />
              </b-col>
              <b-col>
                <b-row class="mt-4 mr-25 ml-25 text-center">
                  <b-col
                    cols="12"
                    class="border p-1"
                  >
                    VR Campaña anterior
                  </b-col>
                  <b-col
                    cols="12"
                    class="border p-1"
                  >
                    {{ ventaVr }}
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="5"
          xs="12"
        >
          <b-card class="text-center">
            <b-row>
              <b-col>
                <h3>
                  Región
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refBarVenta"
                  type="bar"
                  height="250"
                  :options="dataVenta.bar.chartOptions"
                  :series="dataVenta.bar.series"
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
          lg="2"
          md="6"
          xs="12"
        >
          <b-card
            no-body
            class="border-right"
          >
            <b-card-body class="text-center mt-4">
              <b-avatar
                class="mb-1 text-center"
                variant="light-success"
                size="75"
              >
                <feather-icon
                  size="41"
                  icon="ShoppingCartIcon"
                />
              </b-avatar>
              <h4 class="font-weight-bolder mt-1">
                {{ pedido }}
              </h4>
              <h4 class="font-weight-normal mt-1">
                Pedido
              </h4>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col
          lg="5"
          md="6"
          xs="12"
        >
          <b-card class="text-center border-right">
            <b-row>
              <b-col>
                <h3>
                  Total
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                Acumulado
              </b-col>
              <b-col>
                Campaña
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-center">
                {{ pedidoAcumulado }}
              </b-col>
              <b-col class="text-center">
                {{ pedidoCampaña }}
              </b-col>
            </b-row>
            <b-row class="text-center">
              <b-col>
                <vue-apex-charts
                  ref="refRadialPedido"
                  type="radialBar"
                  height="180"
                  :options="dataPedido.radial.chartOptions"
                  :series="dataPedido.radial.series"
                />
              </b-col>
              <b-col>
                <b-row class="mt-4 mr-25 ml-25 text-center">
                  <b-col
                    cols="12"
                    class="border p-1"
                  >
                    VR Campaña anterior
                  </b-col>
                  <b-col
                    cols="12"
                    class="border p-1"
                  >
                    {{ pedidoVr }}
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="5"
          xs="12"
        >
          <b-card class="text-center">
            <b-row>
              <b-col>
                <h3>
                  Región
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refBarPedido"
                  type="bar"
                  height="250"
                  :options="dataPedido.bar.chartOptions"
                  :series="dataPedido.bar.series"
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
          lg="2"
          md="6"
          xs="12"
        >
          <b-card
            no-body
            class="border-right"
          >
            <b-card-body class="text-center mt-4">
              <b-avatar
                class="mb-1 text-center"
                variant="light-secondary"
                size="75"
              >
                <feather-icon
                  size="41"
                  icon="UserPlusIcon"
                />
              </b-avatar>
              <h4 class="font-weight-bolder mt-1">
                {{ nueva }}
              </h4>
              <h4 class="font-weight-normal mt-1">
                Nuevas
              </h4>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col
          lg="5"
          md="6"
          xs="12"
        >
          <b-card class="text-center border-right">
            <b-row>
              <b-col>
                <h3>
                  Total
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                Acumulado
              </b-col>
              <b-col>
                Campaña
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-center">
                {{ nuevaAcumulado }}
              </b-col>
              <b-col class="text-center">
                {{ nuevaCampaña }}
              </b-col>
            </b-row>
            <b-row class="text-center">
              <b-col>
                <vue-apex-charts
                  ref="refRadialNueva"
                  type="radialBar"
                  height="180"
                  :options="dataNueva.radial.chartOptions"
                  :series="dataNueva.radial.series"
                />
              </b-col>
              <b-col>
                <b-row class="mt-4 mr-25 ml-25 text-center">
                  <b-col
                    cols="12"
                    class="border p-1"
                  >
                    VR Campaña anterior
                  </b-col>
                  <b-col
                    cols="12"
                    class="border p-1"
                  >
                    {{ nuevaVr }}
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="5"
          xs="12"
        >
          <b-card class="text-center">
            <b-row>
              <b-col>
                <h3>
                  Región
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refBarNueva"
                  type="bar"
                  height="250"
                  :options="dataNueva.bar.chartOptions"
                  :series="dataNueva.bar.series"
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
          lg="2"
          md="6"
          xs="12"
        >
          <b-card
            no-body
            class="border-right"
          >
            <b-card-body class="text-center mt-4">
              <b-avatar
                class="mb-1 text-center"
                variant="light-info"
                size="75"
              >
                <feather-icon
                  size="41"
                  icon="UsersIcon"
                />
              </b-avatar>
              <h4 class="font-weight-bolder mt-1">
                {{ capitalizacion }}
              </h4>
              <h4 class="font-weight-normal mt-1">
                Capitalización
              </h4>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col
          lg="5"
          md="6"
          xs="12"
        >
          <b-card class="text-center border-right">
            <b-row>
              <b-col>
                <h3>
                  Total
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                Acumulado
              </b-col>
              <b-col>
                Campaña
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-center">
                {{ capitalizacionAcumulado }}
              </b-col>
              <b-col class="text-center">
                {{ capitalizacionCampaña }}
              </b-col>
            </b-row>
            <b-row class="text-center">
              <b-col>
                <vue-apex-charts
                  ref="refRadialCapitalizacion"
                  type="radialBar"
                  height="180"
                  :options="dataCapitalizacion.radial.chartOptions"
                  :series="dataCapitalizacion.radial.series"
                />
              </b-col>
              <b-col>
                <b-row class="mt-4 mr-25 ml-25 text-center">
                  <b-col
                    cols="12"
                    class="border p-1"
                  >
                    DF Campaña anterior
                  </b-col>
                  <b-col
                    cols="12"
                    class="border p-1"
                  >
                    {{ capitalizacionVr }}
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="5"
          xs="12"
        >
          <b-card class="text-center">
            <b-row>
              <b-col>
                <h3>
                  Región
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refBarCapitalizacion"
                  type="bar"
                  height="250"
                  :options="dataCapitalizacion.bar.chartOptions"
                  :series="dataCapitalizacion.bar.series"
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
          lg="2"
          md="6"
          xs="12"
        >
          <b-card
            no-body
            class="border-right"
          >
            <b-card-body class="text-center mt-4">
              <b-avatar
                class="mb-1 text-center"
                variant="light-danger"
                size="75"
              >
                <feather-icon
                  size="41"
                  icon="PrinterIcon"
                />
              </b-avatar>
              <h4 class="font-weight-bolder mt-1">
                {{ ppp }}
              </h4>
              <h4 class="font-weight-normal mt-1">
                PPP
              </h4>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col
          lg="5"
          md="6"
          xs="12"
        >
          <b-card class="text-center border-right">
            <b-row>
              <b-col>
                <h3>
                  Total
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                Acumulado
              </b-col>
              <b-col>
                Campaña
              </b-col>
            </b-row>
            <b-row>
              <b-col class="text-center">
                {{ pppAcumulado }}
              </b-col>
              <b-col class="text-center">
                {{ pppCampaña }}
              </b-col>
            </b-row>
            <b-row class="text-center">
              <b-col>
                <vue-apex-charts
                  ref="refRadialPpp"
                  type="radialBar"
                  height="180"
                  :options="dataPpp.radial.chartOptions"
                  :series="dataPpp.radial.series"
                />
              </b-col>
              <b-col>
                <b-row class="mt-4 mr-25 ml-25 text-center">
                  <b-col
                    cols="12"
                    class="border p-1"
                  >
                    VR Campaña anterior
                  </b-col>
                  <b-col
                    cols="12"
                    class="border p-1"
                  >
                    {{ pppVr }}
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col
          lg="5"
          xs="12"
        >
          <b-card class="text-center">
            <b-row>
              <b-col>
                <h3>
                  Región
                </h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <vue-apex-charts
                  ref="refBarPpp"
                  type="bar"
                  height="250"
                  :options="dataPpp.bar.chartOptions"
                  :series="dataPpp.bar.series"
                />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
    <b-modal
      ref="ref-mapa"
      hide-footer
      scrollable
      no-close-on-backdrop
      :modal-class="claseModal"
      size="lg"
      title="Distribución región"
    >
      <b-card>
        <b-row>
          <b-col cols="2">
            <div class="d-flex flex-column">
              <b-badge
                variant="primary"
                class="badge-glow mb-1 mr-2"
              >
                <span class="text-black">
                  Brillante
                </span>
              </b-badge>
              <b-badge
                variant="secondary"
                class="badge-glow mb-1 mr-2"
              >
                Zafiro
              </b-badge>
              <b-badge
                variant="success"
                class="badge-glow mb-1 mr-2"
              >
                Esmeralda
              </b-badge>
              <b-badge
                variant="danger"
                class="badge-glow mb-1 mr-2"
              >
                Rubí
              </b-badge>
              <b-badge
                variant="warning"
                class="badge-glow mb-1 mr-2"
              >
                Cuarzo
              </b-badge>
            </div>
          </b-col>
          <b-col cols="10">
            <b-card no-body>
              <div id="mapa" />
            </b-card>
          </b-col>
        </b-row>
      </b-card>
    </b-modal>
  </section>
</template>

<script>
import {
  BRow, BCol, BCard, BAvatar, BCardBody, BButton, BBadge, BModal,
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import selectCampana from '@/views/components/FiltroCampana.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import VueApexCharts from 'vue-apexcharts'
import mapboxgl from 'mapbox-gl'
import axios from '@axios'
import store from '@/store'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BAvatar,
    BCardBody,
    selectCampana,
    VueApexCharts,
    BButton,
    BBadge,
    BModal,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      dataCampana: [],
      seleccionCampana: [],
      delay: { show: 500, hide: 500 },
      venta: 'S/. 0.00',
      ventaAcumulado: 'S/. 0.00',
      ventaCampaña: 'S/. 0.00',
      ventaVr: '0.00 %',
      dataVenta: {
        radial: {
          series: [0],
          chartOptions: {
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
            colors: [$themeColors.warning],
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: [$themeColors.warning],
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
              toolbar: {
                show: false,
              },
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
        bar: {
          series: [{
            name: 'Acumulado',
            data: [0, 0, 0, 0, 0],
          }, {
            name: 'Campaña',
            data: [0, 0, 0, 0, 0],
          }],
          chartOptions: {
            chart: {
              toolbar: {
                show: false,
              },
            },
            colors: [
              $themeColors.warning,
              $themeColors.primary,
            ],
            stroke: {
              show: true,
              width: 1,
            },
            plotOptions: {
              bar: {
                horizontal: true,
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
            dataLabels: {
              enabled: true,
              formatter(val) {
                return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
              },
              style: {
                colors: ['#6e6b7b', '#6e6b7b'],
              },
              offsetX: 50,
            },
            xaxis: {
              categories: ['Cuarzo', 'Rubi', 'Esmeralda', 'Zafiro', 'Brillante'],
              labels: {
                show: false,
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
      pedido: '0',
      pedidoAcumulado: '0',
      pedidoCampaña: '0',
      pedidoVr: '0.00 %',
      dataPedido: {
        radial: {
          series: [0],
          chartOptions: {
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
            colors: [$themeColors.success],
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
              toolbar: {
                show: false,
              },
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
        bar: {
          series: [{
            name: 'Acumulado',
            data: [0, 0, 0, 0, 0],
          }, {
            name: 'Campaña',
            data: [0, 0, 0, 0, 0],
          }],
          chartOptions: {
            chart: {
              toolbar: {
                show: false,
              },
            },
            colors: [
              $themeColors.success,
              $themeColors.primary,
            ],
            stroke: {
              show: true,
              width: 1,
            },
            plotOptions: {
              bar: {
                horizontal: true,
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
            dataLabels: {
              enabled: true,
              formatter(val) {
                return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
              },
              style: {
                colors: ['#6e6b7b', '#6e6b7b'],
              },
              offsetX: 50,
            },
            xaxis: {
              categories: ['Cuarzo', 'Rubi', 'Esmeralda', 'Zafiro', 'Brillante'],
              labels: {
                show: false,
              },
            },
            yaxis: {
            // opposite: isRtl,
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
      nueva: '0',
      nuevaAcumulado: '0',
      nuevaCampaña: '0',
      nuevaVr: '0.00 %',
      dataNueva: {
        radial: {
          series: [0],
          chartOptions: {
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
            colors: [$themeColors.secondary],
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: [$themeColors.secondary],
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
        bar: {
          series: [{
            name: 'Acumulado',
            data: [0, 0, 0, 0, 0],
          }, {
            name: 'Campaña',
            data: [0, 0, 0, 0, 0],
          }],
          chartOptions: {
            chart: {
              toolbar: {
                show: false,
              },
            },
            colors: [
              $themeColors.secondary,
              $themeColors.primary,
            ],
            stroke: {
              show: true,
              width: 1,
            },
            plotOptions: {
              bar: {
                horizontal: true,
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
            dataLabels: {
              enabled: true,
              formatter(val) {
                return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
              },
              style: {
                colors: ['#6e6b7b', '#6e6b7b'],
              },
              offsetX: 50,
            },
            xaxis: {
              categories: ['Cuarzo', 'Rubi', 'Esmeralda', 'Zafiro', 'Brillante'],
              labels: {
                show: false,
              },
            },
            yaxis: {
            // opposite: isRtl,
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
      capitalizacion: '0',
      capitalizacionAcumulado: '0',
      capitalizacionCampaña: '0',
      capitalizacionVr: '0',
      dataCapitalizacion: {
        radial: {
          series: [0],
          chartOptions: {
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
            colors: [$themeColors.info],
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: [$themeColors.info],
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
        bar: {
          series: [{
            name: 'Acumulado',
            data: [0, 0, 0, 0, 0],
          }, {
            name: 'Campaña',
            data: [0, 0, 0, 0, 0],
          }],
          chartOptions: {
            chart: {
              toolbar: {
                show: false,
              },
            },
            colors: [
              $themeColors.info,
              $themeColors.primary,
            ],
            stroke: {
              show: true,
              width: 1,
            },
            legend: {
              show: true,
            },
            dataLabels: {
              show: false,
              style: {
                colors: ['#6e6b7b', '#6e6b7b', '#6e6b7b'],
              },
              formatter(val) {
                return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
              },
            },
            tooltip: {
              x: {
                show: true,
              },
              y: {
                formatter(val) {
                  return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                },
              },
            },
            xaxis: {
              categories: ['Brillante', 'Zafiro', 'Esmeralda', 'Rubi', 'Cuarzo'],
            },
          },
        },
      },
      ppp: 'S/. 0.00',
      pppAcumulado: 'S/. 0.00',
      pppCampaña: 'S/. 0.00',
      pppVr: '0.00 %',
      dataPpp: {
        radial: {
          series: [0],
          chartOptions: {
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
            colors: ['#EA899A'],
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
          },
        },
        bar: {
          series: [{
            name: 'Acumulado',
            data: [0, 0, 0, 0, 0],
          }, {
            name: 'Campaña',
            data: [0, 0, 0, 0, 0],
          }],
          chartOptions: {
            chart: {
              toolbar: {
                show: false,
              },
            },
            colors: [
              '#EA899A',
              $themeColors.primary,
            ],
            stroke: {
              show: true,
              width: 1,
            },
            legend: {
              show: true,
            },
            dataLabels: {
              style: {
                colors: ['#6e6b7b', '#6e6b7b', '#5e5873'],
              },
              formatter(val) {
                return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
              },
            },
            plotOptions: {
              bar: {
                horizontal: false,
                dataLabels: {
                  position: 'top',
                },
              },
            },
            tooltip: {
              x: {
                show: true,
              },
              y: {
                formatter(val) {
                  return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                },
              },
            },
            xaxis: {
              categories: ['Brillante', 'Zafiro', 'Esmeralda', 'Rubi', 'Cuarzo'],
            },
          },
        },
      },
      publicPath: process.env.BASE_URL,
      center: [0, 0],
      map: {},
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
  mounted() {
    this.dash_vent_visi()
    setTimeout(() => {
      this.dash_vent_gene()
    }, 1000)
  },
  created() {
    const campInic = `${new Date().getFullYear()}01`
    const itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    itemCampana.camp.forEach(e => {
      if (e.codi_camp >= campInic) {
        this.dataCampana.push(e.codi_camp)
      }
    })
    this.seleccionCampana = itemCampana.camp[0].codi_camp
  },
  methods: {
    createMap() {
      this.map = new mapboxgl.Map({
        accessToken: 'pk.eyJ1IjoiZHVwcmVlYXp6b3J0aSIsImEiOiJjazFxZ2p1a3QwMTZ1M2hxZ3BuN2l4OTZrIn0.Loh1w0sgnR3g-O-3oXWZMA',
        container: 'mapa',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-76.04544304892492, -9.161596196221359],
        zoom: 3.9,
      })
      this.map.on('load', () => {
        this.map.addSource('states', {
          type: 'geojson',
          data: `${this.publicPath}/area.geojson`,
        })
        this.map.addLayer({
          id: 'state-fills',
          type: 'fill',
          source: 'states',
          layout: {
          },
          paint: {
            'fill-color': {
              property: 'Region', // this will be your density property form you geojson
              stops: [
                [1, '#fedd3c'],
                [2, '#999899'],
                [3, '#79c043'],
                [4, '#d3344c'],
                [5, '#ff9f43'],
              ],
            },
            'fill-opacity': 0.75,
          },
        })
      })
    },
    setCampana(value) {
      this.seleccionCampana = value
      this.$nextTick(() => {
        this.dash_vent_gene()
      })
    },
    async dash_vent_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'dash_vent',
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
    async dash_vent_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dash_vent/vent_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_camp: this.seleccionCampana,
          },
        })
        const datoProf = await servicio.data.data_prof
        if (typeof datoProf !== 'undefined') {
          this.venta = `S/. ${datoProf[0].vent_fact}`
          this.pedido = `${datoProf[0].tota_pedi}`
          this.capitalizacion = `${datoProf[0].tota_capi}`
          this.nueva = `${datoProf[0].tota_ingr}`
          this.ppp = `S/. ${datoProf[0].ppp_fact}`
        }
        const datoVari = await servicio.data.data_vari
        if (typeof datoVari !== 'undefined') {
          this.ventaVr = `${datoVari[0].vent_fact}%`
          this.pedidoVr = `${datoVari[0].tota_pedi}%`
          this.capitalizacionVr = `${datoVari[0].tota_capi}`
          this.nuevaVr = `${datoVari[0].tota_ingr}%`
          this.pppVr = `${datoVari[0].ppp_fact}%`
        }
        const datoAcum = await servicio.data.data_acum
        if (typeof datoAcum !== 'undefined') {
          this.ventaAcumulado = `S/. ${datoAcum[0].vent_fact}`
          this.pedidoAcumulado = `${datoAcum[0].tota_pedi}`
          this.capitalizacionAcumulado = `${datoAcum[0].tota_capi}`
          this.nuevaAcumulado = `${datoAcum[0].tota_ingr}`
          this.pppAcumulado = `S/. ${datoAcum[0].ppp_fact}`
        }
        const datoCamp = await servicio.data.data_camp
        if (typeof datoCamp !== 'undefined') {
          this.ventaCampaña = `S/. ${datoCamp[0].vent_fact}`
          this.pedidoCampaña = `${datoCamp[0].tota_pedi}`
          this.capitalizacionCampaña = `${datoCamp[0].tota_capi}`
          this.nuevaCampaña = `${datoCamp[0].tota_ingr}`
          this.pppCampaña = `S/. ${datoCamp[0].ppp_fact}`
        }
        const datoPorcentaje = await servicio.data.data_porc
        if (typeof datoPorcentaje !== 'undefined') {
          this.dataVenta.radial.series = datoPorcentaje[0].porc_vent
          this.dataPedido.radial.series = datoPorcentaje[0].porc_pedi
          this.dataNueva.radial.series = datoPorcentaje[0].porc_nuev
          this.dataCapitalizacion.radial.series = datoPorcentaje[0].porc_capi
          this.dataPpp.radial.series = datoPorcentaje[0].porc_pppp
          this.$refs.refRadialVenta.updateSeries(
            this.dataVenta.radial.series,
            false,
            true,
          )
          this.$refs.refRadialPedido.updateSeries(
            this.dataPedido.radial.series,
            false,
            true,
          )
          this.$refs.refRadialNueva.updateSeries(
            this.dataNueva.radial.series,
            false,
            true,
          )
          this.$refs.refRadialCapitalizacion.updateSeries(
            this.dataCapitalizacion.radial.series,
            false,
            true,
          )
          this.$refs.refRadialPpp.updateSeries(
            this.dataPpp.radial.series,
            false,
            true,
          )
        }
        const datoAreaAcum = await servicio.data.data_area_acum
        this.dataVenta.bar.series[0].data = [0, 0, 0, 0, 0]
        this.dataVenta.bar.series[1].data = [0, 0, 0, 0, 0]
        if (typeof datoAcum !== 'undefined') {
          const datoAcum1 = datoAreaAcum.find(o => o.codi_area === '001')
          const datoAcum2 = datoAreaAcum.find(o => o.codi_area === '002')
          const datoAcum3 = datoAreaAcum.find(o => o.codi_area === '003')
          const datoAcum4 = datoAreaAcum.find(o => o.codi_area === '004')
          const datoAcum5 = datoAreaAcum.find(o => o.codi_area === '005')
          this.dataVenta.bar.series[0].data = [datoAcum5.vent_fact, datoAcum4.vent_fact, datoAcum3.vent_fact, datoAcum2.vent_fact, datoAcum1.vent_fact]
          this.dataPedido.bar.series[0].data = [datoAcum5.tota_pedi, datoAcum4.tota_pedi, datoAcum3.tota_pedi, datoAcum2.tota_pedi, datoAcum1.tota_pedi]
          this.dataNueva.bar.series[0].data = [datoAcum5.tota_ingr, datoAcum4.tota_ingr, datoAcum3.tota_ingr, datoAcum2.tota_ingr, datoAcum1.tota_ingr]
          this.dataCapitalizacion.bar.series[0].data = [datoAcum1.tota_capi, datoAcum2.tota_capi, datoAcum3.tota_capi, datoAcum4.tota_capi, datoAcum5.tota_capi]
          this.dataPpp.bar.series[0].data = [datoAcum1.ppp_fact, datoAcum2.ppp_fact, datoAcum3.ppp_fact, datoAcum4.ppp_fact, datoAcum5.ppp_fact]
        }
        const datoAreaCamp = await servicio.data.data_area_camp
        if (typeof datoAreaCamp !== 'undefined') {
          const datoCamp1 = datoAreaCamp.find(o => o.codi_area === '001')
          const datoCamp2 = datoAreaCamp.find(o => o.codi_area === '002')
          const datoCamp3 = datoAreaCamp.find(o => o.codi_area === '003')
          const datoCamp4 = datoAreaCamp.find(o => o.codi_area === '004')
          const datoCamp5 = datoAreaCamp.find(o => o.codi_area === '005')
          this.dataVenta.bar.series[1].data = [datoCamp5.vent_fact, datoCamp4.vent_fact, datoCamp3.vent_fact, datoCamp2.vent_fact, datoCamp1.vent_fact]
          this.dataPedido.bar.series[1].data = [datoCamp5.tota_pedi, datoCamp4.tota_pedi, datoCamp3.tota_pedi, datoCamp2.tota_pedi, datoCamp1.tota_pedi]
          this.dataNueva.bar.series[1].data = [datoCamp5.tota_ingr, datoCamp4.tota_ingr, datoCamp3.tota_ingr, datoCamp2.tota_ingr, datoCamp1.tota_ingr]
          this.dataCapitalizacion.bar.series[1].data = [datoCamp1.tota_capi, datoCamp2.tota_capi, datoCamp3.tota_capi, datoCamp4.tota_capi, datoCamp5.tota_capi]
          this.dataPpp.bar.series[1].data = [datoCamp1.ppp_fact, datoCamp2.ppp_fact, datoCamp3.ppp_fact, datoCamp4.ppp_fact, datoCamp5.ppp_fact]
        }
        this.$refs.refBarVenta.updateSeries(this.dataVenta.bar.series)
        this.$refs.refBarPedido.updateSeries(this.dataPedido.bar.series)
        this.$refs.refBarNueva.updateSeries(this.dataNueva.bar.series)
        this.$refs.refBarCapitalizacion.updateSeries(this.dataCapitalizacion.bar.series)
        this.$refs.refBarPpp.updateSeries(this.dataPpp.bar.series)
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
    async dash_vent_pdff() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataVentaRadar = await this.$refs.refRadialVenta.dataURI()
      const dataVentaBar = await this.$refs.refBarVenta.dataURI()
      const dataPedidoRadar = await this.$refs.refRadialPedido.dataURI()
      const dataPedidoBar = await this.$refs.refBarPedido.dataURI()
      const dataNuevaRadar = await this.$refs.refRadialNueva.dataURI()
      const dataNuevaBar = await this.$refs.refBarNueva.dataURI()
      const dataCapitalizacionRadar = await this.$refs.refRadialCapitalizacion.dataURI()
      const dataCapitalizacionBar = await this.$refs.refBarCapitalizacion.dataURI()
      const dataPppRadar = await this.$refs.refRadialPpp.dataURI()
      const dataPppBar = await this.$refs.refBarPpp.dataURI()
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dash_vent/vent_pdff`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            vent: this.venta,
            vent_acum: this.ventaAcumulado,
            vent_camp: this.ventaCampaña,
            vent_vr: this.ventaVr,
            vent_rada: dataVentaRadar.imgURI,
            vent_barr: dataVentaBar.imgURI,
            pedi: this.pedido,
            pedi_acum: this.pedidoAcumulado,
            pedi_camp: this.pedidoCampaña,
            pedi_vr: this.pedidoVr,
            pedi_rada: dataPedidoRadar.imgURI,
            pedi_barr: dataPedidoBar.imgURI,
            nuev: this.nueva,
            nuev_acum: this.nuevaAcumulado,
            nuev_camp: this.nuevaCampaña,
            nuev_vr: this.nuevaVr,
            nuev_rada: dataNuevaRadar.imgURI,
            nuev_barr: dataNuevaBar.imgURI,
            capi: this.nueva,
            capi_acum: this.capitalizacionAcumulado,
            capi_camp: this.capitalizacionCampaña,
            capi_vr: this.capitalizacionVr,
            capi_rada: dataCapitalizacionRadar.imgURI,
            capi_barr: dataCapitalizacionBar.imgURI,
            pppp: this.ppp,
            pppp_acum: this.pppAcumulado,
            pppp_camp: this.pppCampaña,
            pppp_vr: this.pppVr,
            pppp_rada: dataPppRadar.imgURI,
            pppp_barr: dataPppBar.imgURI,
          },
        })
        const datoHtml = await servicio.data.html
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        window.open(`${store.state.app.webTemporal}${datoHtml}`, '_blank')
      } catch (error) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        let mensajeError = ''
        if (error.response) {
          mensajeError = error.response.data.message
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
      }
    },
    dash_vent_mapa() {
      this.$refs['ref-mapa'].show()
      this.$vs.loading({
        color: $themeColors.primary,
      })
      setTimeout(() => {
        this.createMap()
      }, 1000)
      setTimeout(() => {
        this.$vs.loading.close()
      }, 2000)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
#mapa {
  height: 400px;
  width: 100%;
  margin: 0 auto;
}
</style>
