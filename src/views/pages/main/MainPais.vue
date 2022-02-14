<template>
  <div>
    <!-- Peru -->
    <div>
      <div class="row content-header">
        <div class="content-header-left mb-1 col-12">
          <div class="demo-inline-spacing">
            <b-avatar :src="require('@/assets/images/flags/pe.png')" />
            <h2>Perú</h2>
          </div>
        </div>
      </div>
      <b-row>
        <b-col
          v-for="browser in dataVariablesPeru"
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
          <mainCierre :data="dataIncorporacionPeru" />
        </b-col>
        <b-col
          xl="4"
          lg="4"
          md="6"
          sm="12"
          xs="12"
        >
          <mainCierre :data="dataRetencionPeru" />
        </b-col>
        <b-col
          xl="4"
          lg="4"
          md="6"
          sm="12"
          xs="12"
        >
          <mainCierre :data="dataTotalPeru" />
        </b-col>
      </b-row>
    </div>
    <!-- Ecuador -->
    <div>
      <div class="row content-header">
        <div class="content-header-left mb-1 col-12">
          <div class="demo-inline-spacing">
            <b-avatar :src="require('@/assets/images/flags/ec.png')" />
            <h2>Ecuador</h2>
          </div>
        </div>
      </div>
      <b-row>
        <b-col
          v-for="browser in dataVariablesEcuador"
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
          <mainCierre :data="dataIncorporacionEcuador" />
        </b-col>
        <b-col
          xl="4"
          lg="4"
          md="6"
          sm="12"
          xs="12"
        >
          <mainCierre :data="dataRetencionEcuador" />
        </b-col>
        <b-col
          xl="4"
          lg="4"
          md="6"
          sm="12"
          xs="12"
        >
          <mainCierre :data="dataTotalEcuador" />
        </b-col>
      </b-row>
    </div>
    <!-- Bolivia -->
    <div>
      <div class="row content-header">
        <div class="content-header-left mb-1 col-12">
          <div class="demo-inline-spacing">
            <b-avatar :src="require('@/assets/images/flags/bo.png')" />
            <h2>Bolivia</h2>
          </div>
        </div>
      </div>
      <b-row>
        <b-col
          v-for="browser in dataVariablesBolivia"
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
          <mainCierre :data="dataIncorporacionBolivia" />
        </b-col>
        <b-col
          xl="4"
          lg="4"
          md="6"
          sm="12"
          xs="12"
        >
          <mainCierre :data="dataRetencionBolivia" />
        </b-col>
        <b-col
          xl="4"
          lg="4"
          md="6"
          sm="12"
          xs="12"
        >
          <mainCierre :data="dataTotalBolivia" />
        </b-col>
      </b-row>
    </div>
    <!-- Guatemala -->
    <div>
      <div class="row content-header">
        <div class="content-header-left mb-1 col-12">
          <div class="demo-inline-spacing">
            <b-avatar :src="require('@/assets/images/flags/gu.png')" />
            <h2>Guatemala</h2>
          </div>
        </div>
      </div>
      <b-row>
        <b-col
          v-for="browser in dataVariablesGuatemala"
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
          <mainCierre :data="dataIncorporacionGuatemala" />
        </b-col>
        <b-col
          xl="4"
          lg="4"
          md="6"
          sm="12"
          xs="12"
        >
          <mainCierre :data="dataRetencionGuatemala" />
        </b-col>
        <b-col
          xl="4"
          lg="4"
          md="6"
          sm="12"
          xs="12"
        >
          <mainCierre :data="dataTotalGuatemala" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { BRow, BCol, BAvatar } from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'
import mainVariales from './MainVariables.vue'
import mainCierre from './MainCierre.vue'

export default {
  components: {
    BRow,
    BCol,
    BAvatar,
    mainVariales,
    mainCierre,
  },
  data() {
    return {
      dataVariablesPeru: [
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
      dataIncorporacionPeru: {
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
      dataRetencionPeru: {
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
      dataTotalPeru: {
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
      dataVariablesEcuador: [
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
              valor: '$ 0.00',
            },
            {
              descripcion: 'Saldo :',
              valor: '$ 0.00',
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
      dataIncorporacionEcuador: {
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
      dataRetencionEcuador: {
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
      dataTotalEcuador: {
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
      dataVariablesBolivia: [
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
              valor: 'Bs 0.00',
            },
            {
              descripcion: 'Saldo :',
              valor: 'Bs 0.00',
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
          valor: '0.00',
          simbolo: '',
          icono: 'UserPlusIcon',
          ratio: 100,
          color: 'danger',
          detalle: [
            {
              descripcion: 'Objetivo :',
              valor: '0',
            },
            {
              descripcion: 'Facturado :',
              valor: '0',
            },
          ],
        },
      ],
      dataIncorporacionBolivia: {
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
      dataRetencionBolivia: {
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
      dataTotalBolivia: {
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
      dataVariablesGuatemala: [
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
              valor: 'Q 0.00',
            },
            {
              descripcion: 'Saldo :',
              valor: 'Q 0.00',
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
          valor: '0.00',
          simbolo: '',
          icono: 'UserPlusIcon',
          ratio: 100,
          color: 'danger',
          detalle: [
            {
              descripcion: 'Objetivo :',
              valor: '0',
            },
            {
              descripcion: 'Facturado :',
              valor: '0',
            },
          ],
        },
      ],
      dataIncorporacionGuatemala: {
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
      dataRetencionGuatemala: {
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
      dataTotalGuatemala: {
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
      try {
        const userData = JSON.parse(localStorage.getItem('userData'))
        const campana = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_camp_pais`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: userData.codigoAcceso,
          },
        })
        const datoCampana = await campana.data.datos
        const datoCampanaEcuador = await campana.data.dato_ecua
        const datoCampanaBolivia = await campana.data.dato_boli
        const datoCampanaGuatemala = await campana.data.dato_guat
        localStorage.setItem('mainCampana', JSON.stringify(datoCampana))
        localStorage.setItem('mainCampanaEcuador', JSON.stringify(datoCampanaEcuador))
        localStorage.setItem('mainCampanaBolivia', JSON.stringify(datoCampanaBolivia))
        localStorage.setItem('mainCampanaGuatemala', JSON.stringify(datoCampanaGuatemala))
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
      let itemCampanaActual = localStorage.getItem('mainCampana')
      if (itemCampanaActual) {
        itemCampanaActual = JSON.parse(itemCampanaActual)
        if (itemCampanaActual.camp_actu.length > 0) {
          this.dataVariablesPeru[0].valor = itemCampanaActual.camp_actu[0].codi_camp
          this.dataVariablesPeru[0].detalle[0].valor = itemCampanaActual.camp_actu[0].fech_inic
          this.dataVariablesPeru[0].detalle[1].valor = itemCampanaActual.camp_actu[0].fech_fina
        }
        if (itemCampanaActual.cobr.length > 0) {
          this.dataVariablesPeru[1].valor = itemCampanaActual.cobr[0].porc_cobr
          this.dataVariablesPeru[1].detalle[0].valor = itemCampanaActual.cobr[0].vent_cobr
          this.dataVariablesPeru[1].detalle[1].valor = itemCampanaActual.cobr[0].sald_cobr
        }
        if (itemCampanaActual.cons.acti.length > 0) {
          this.dataVariablesPeru[2].valor = itemCampanaActual.cons.acti[0].porc_acti
        }
        if (itemCampanaActual.cons.capi.length > 0) {
          this.dataVariablesPeru[3].valor = itemCampanaActual.cons.capi[0].tota_capi
        }
        if (itemCampanaActual.pedi_inco.length > 0) {
          this.dataIncorporacionPeru.objetivo = itemCampanaActual.pedi_inco[0].obje_inco
          this.dataIncorporacionPeru.facturado = itemCampanaActual.pedi_inco[0].fact_inco
          this.dataIncorporacionPeru.pendiente = itemCampanaActual.pedi_inco[0].pend_inco
          this.dataIncorporacionPeru.series.facturado[0] = parseFloat(
            itemCampanaActual.pedi_inco[0].porc_inco,
          ).toFixed(2)
          this.dataIncorporacionPeru.series.pendiente[0] = parseFloat(
            itemCampanaActual.pedi_inco[0].porc_inco_pend,
          ).toFixed(2)
        }
        if (itemCampanaActual.pedi_rete.length > 0) {
          this.dataRetencionPeru.objetivo = itemCampanaActual.pedi_rete[0].obje_rete
          this.dataRetencionPeru.facturado = itemCampanaActual.pedi_rete[0].fact_rete
          this.dataRetencionPeru.pendiente = itemCampanaActual.pedi_rete[0].pend_rete
          this.dataRetencionPeru.series.facturado[0] = parseFloat(
            itemCampanaActual.pedi_rete[0].porc_rete,
          ).toFixed(2)
          this.dataRetencionPeru.series.pendiente[0] = parseFloat(
            itemCampanaActual.pedi_rete[0].porc_rete_pend,
          ).toFixed(2)
        }
        if (itemCampanaActual.pedi_tota.length > 0) {
          this.dataTotalPeru.objetivo = itemCampanaActual.pedi_tota[0].obje_tota
          this.dataTotalPeru.facturado = itemCampanaActual.pedi_tota[0].fact_tota
          this.dataTotalPeru.pendiente = itemCampanaActual.pedi_tota[0].pend_tota
          this.dataTotalPeru.series.facturado[0] = parseFloat(
            itemCampanaActual.pedi_tota[0].porc_tota,
          ).toFixed(2)
          this.dataTotalPeru.series.pendiente[0] = parseFloat(
            itemCampanaActual.pedi_tota[0].porc_tota_pend,
          ).toFixed(2)
        }
      }
      let itemCampanaActualEcuador = localStorage.getItem('mainCampanaEcuador')
      if (itemCampanaActualEcuador) {
        itemCampanaActualEcuador = JSON.parse(itemCampanaActualEcuador)
        if (itemCampanaActualEcuador.data_camp_ecua.length > 0) {
          this.dataVariablesEcuador[0].valor = itemCampanaActualEcuador.data_camp_ecua[0].codi_camp
          this.dataVariablesEcuador[0].detalle[0].valor = itemCampanaActualEcuador.data_camp_ecua[0].fech_inic
          this.dataVariablesEcuador[0].detalle[1].valor = itemCampanaActualEcuador.data_camp_ecua[0].fech_fina
        }
        if (itemCampanaActualEcuador.data_cobr_ecua.length > 0) {
          this.dataVariablesEcuador[1].valor = itemCampanaActualEcuador.data_cobr_ecua[0].porc_cobr
          this.dataVariablesEcuador[1].detalle[0].valor = itemCampanaActualEcuador.data_cobr_ecua[0].vent_cobr
          this.dataVariablesEcuador[1].detalle[1].valor = itemCampanaActualEcuador.data_cobr_ecua[0].sald_cobr
        }
        if (itemCampanaActualEcuador.data_acti_capi_ecua.length > 0) {
          this.dataVariablesEcuador[2].valor = itemCampanaActualEcuador.data_acti_capi_ecua[0].porc_acti
          this.dataVariablesEcuador[3].valor = itemCampanaActualEcuador.data_acti_capi_ecua[0].tota_capi
        }
        if (itemCampanaActualEcuador.data_inco_ecua.length > 0) {
          this.dataIncorporacionEcuador.objetivo = itemCampanaActualEcuador.data_inco_ecua[0].obje_inco
          this.dataIncorporacionEcuador.facturado = itemCampanaActualEcuador.data_inco_ecua[0].fact_inco
          this.dataIncorporacionEcuador.pendiente = itemCampanaActualEcuador.data_inco_ecua[0].pend_inco
          this.dataIncorporacionEcuador.series.facturado[0] = parseFloat(
            itemCampanaActualEcuador.data_inco_ecua[0].porc_inco,
          ).toFixed(2)
          this.dataIncorporacionEcuador.series.pendiente[0] = parseFloat(
            itemCampanaActualEcuador.data_inco_ecua[0].porc_inco_pend,
          ).toFixed(2)
        }
        if (itemCampanaActualEcuador.data_rete_ecua.length > 0) {
          this.dataRetencionEcuador.objetivo = itemCampanaActualEcuador.data_rete_ecua[0].obje_rete
          this.dataRetencionEcuador.facturado = itemCampanaActualEcuador.data_rete_ecua[0].fact_rete
          this.dataRetencionEcuador.pendiente = itemCampanaActualEcuador.data_rete_ecua[0].pend_rete
          this.dataRetencionEcuador.series.facturado[0] = parseFloat(
            itemCampanaActualEcuador.data_rete_ecua[0].porc_rete,
          ).toFixed(2)
          this.dataRetencionEcuador.series.pendiente[0] = parseFloat(
            itemCampanaActualEcuador.data_rete_ecua[0].porc_rete_pend,
          ).toFixed(2)
        }
        if (itemCampanaActualEcuador.data_tota_ecua.length > 0) {
          this.dataTotalEcuador.objetivo = itemCampanaActualEcuador.data_tota_ecua[0].obje_tota
          this.dataTotalEcuador.facturado = itemCampanaActualEcuador.data_tota_ecua[0].fact_tota
          this.dataTotalEcuador.pendiente = itemCampanaActualEcuador.data_tota_ecua[0].pend_tota
          this.dataTotalEcuador.series.facturado[0] = parseFloat(
            itemCampanaActualEcuador.data_tota_ecua[0].porc_tota,
          ).toFixed(2)
          this.dataTotalEcuador.series.pendiente[0] = parseFloat(
            itemCampanaActualEcuador.data_tota_ecua[0].porc_tota_pend,
          ).toFixed(2)
        }
      }
      let itemCampanaActualBolivia = localStorage.getItem('mainCampanaBolivia')
      if (itemCampanaActualBolivia) {
        itemCampanaActualBolivia = JSON.parse(itemCampanaActualBolivia)
        if (itemCampanaActualBolivia.data_camp_boli.length > 0) {
          this.dataVariablesBolivia[0].valor = itemCampanaActualBolivia.data_camp_boli[0].codi_camp
          this.dataVariablesBolivia[0].detalle[0].valor = itemCampanaActualBolivia.data_camp_boli[0].fech_inic
          this.dataVariablesBolivia[0].detalle[1].valor = itemCampanaActualBolivia.data_camp_boli[0].fech_fina
        }
        if (itemCampanaActualBolivia.data_cobr_boli.length > 0) {
          this.dataVariablesBolivia[1].valor = itemCampanaActualBolivia.data_cobr_boli[0].porc_cobr
          this.dataVariablesBolivia[1].detalle[0].valor = itemCampanaActualBolivia.data_cobr_boli[0].vent_cobr
          this.dataVariablesBolivia[1].detalle[1].valor = itemCampanaActualBolivia.data_cobr_boli[0].sald_cobr
        }
        if (itemCampanaActualBolivia.data_acti_capi_boli.length > 0) {
          this.dataVariablesBolivia[2].valor = itemCampanaActualBolivia.data_acti_capi_boli[0].porc_acti
          this.dataVariablesBolivia[3].valor = itemCampanaActualBolivia.data_acti_capi_boli[0].porc_capi
          this.dataVariablesBolivia[3].detalle[0].valor = itemCampanaActualBolivia.data_acti_capi_boli[0].obje_capi
          this.dataVariablesBolivia[3].detalle[1].valor = itemCampanaActualBolivia.data_acti_capi_boli[0].tota_capi
        }
        if (itemCampanaActualBolivia.data_inco_boli.length > 0) {
          this.dataIncorporacionBolivia.objetivo = itemCampanaActualBolivia.data_inco_boli[0].obje_inco
          this.dataIncorporacionBolivia.facturado = itemCampanaActualBolivia.data_inco_boli[0].fact_inco
          this.dataIncorporacionBolivia.pendiente = itemCampanaActualBolivia.data_inco_boli[0].pend_inco
          this.dataIncorporacionBolivia.series.facturado[0] = parseFloat(
            itemCampanaActualBolivia.data_inco_boli[0].porc_inco,
          ).toFixed(2)
          this.dataIncorporacionBolivia.series.pendiente[0] = parseFloat(
            itemCampanaActualBolivia.data_inco_boli[0].porc_inco_pend,
          ).toFixed(2)
        }
        if (itemCampanaActualBolivia.data_rete_boli.length > 0) {
          this.dataRetencionBolivia.objetivo = itemCampanaActualBolivia.data_rete_boli[0].obje_rete
          this.dataRetencionBolivia.facturado = itemCampanaActualBolivia.data_rete_boli[0].fact_rete
          this.dataRetencionBolivia.pendiente = itemCampanaActualBolivia.data_rete_boli[0].pend_rete
          this.dataRetencionBolivia.series.facturado[0] = parseFloat(
            itemCampanaActualBolivia.data_rete_boli[0].porc_rete,
          ).toFixed(2)
          this.dataRetencionBolivia.series.pendiente[0] = parseFloat(
            itemCampanaActualBolivia.data_rete_boli[0].porc_rete_pend,
          ).toFixed(2)
        }
        if (itemCampanaActualBolivia.data_tota_boli.length > 0) {
          this.dataTotalBolivia.objetivo = itemCampanaActualBolivia.data_tota_boli[0].obje_tota
          this.dataTotalBolivia.facturado = itemCampanaActualBolivia.data_tota_boli[0].fact_tota
          this.dataTotalBolivia.pendiente = itemCampanaActualBolivia.data_tota_boli[0].pend_tota
          this.dataTotalBolivia.series.facturado[0] = parseFloat(
            itemCampanaActualBolivia.data_tota_boli[0].porc_tota,
          ).toFixed(2)
          this.dataTotalBolivia.series.pendiente[0] = parseFloat(
            itemCampanaActualBolivia.data_tota_boli[0].porc_tota_pend,
          ).toFixed(2)
        }
      }
      let itemCampanaActualGuatemala = localStorage.getItem('mainCampanaGuatemala')
      if (itemCampanaActualGuatemala) {
        itemCampanaActualGuatemala = JSON.parse(itemCampanaActualGuatemala)
        if (itemCampanaActualGuatemala.data_camp_guat.length > 0) {
          this.dataVariablesGuatemala[0].valor = itemCampanaActualGuatemala.data_camp_guat[0].codi_camp
          this.dataVariablesGuatemala[0].detalle[0].valor = itemCampanaActualGuatemala.data_camp_guat[0].fech_inic
          this.dataVariablesGuatemala[0].detalle[1].valor = itemCampanaActualGuatemala.data_camp_guat[0].fech_fina
        }
        if (itemCampanaActualGuatemala.data_cobr_guat.length > 0) {
          this.dataVariablesGuatemala[1].valor = itemCampanaActualGuatemala.data_cobr_guat[0].porc_cobr
          this.dataVariablesGuatemala[1].detalle[0].valor = itemCampanaActualGuatemala.data_cobr_guat[0].vent_cobr
          this.dataVariablesGuatemala[1].detalle[1].valor = itemCampanaActualGuatemala.data_cobr_guat[0].sald_cobr
        }
        if (itemCampanaActualGuatemala.data_acti_capi_guat.length > 0) {
          this.dataVariablesGuatemala[2].valor = itemCampanaActualGuatemala.data_acti_capi_guat[0].porc_acti
          this.dataVariablesGuatemala[3].valor = itemCampanaActualGuatemala.data_acti_capi_guat[0].porc_capi
          this.dataVariablesGuatemala[3].detalle[0].valor = itemCampanaActualGuatemala.data_acti_capi_guat[0].obje_capi
          this.dataVariablesGuatemala[3].detalle[0].valor = itemCampanaActualGuatemala.data_acti_capi_guat[0].tota_capi
        }
        if (itemCampanaActualGuatemala.data_inco_guat.length > 0) {
          this.dataIncorporacionGuatemala.objetivo = itemCampanaActualGuatemala.data_inco_guat[0].obje_inco
          this.dataIncorporacionGuatemala.facturado = itemCampanaActualGuatemala.data_inco_guat[0].fact_inco
          this.dataIncorporacionGuatemala.pendiente = itemCampanaActualGuatemala.data_inco_guat[0].pend_inco
          this.dataIncorporacionGuatemala.series.facturado[0] = parseFloat(
            itemCampanaActualGuatemala.data_inco_guat[0].porc_inco,
          ).toFixed(2)
          this.dataIncorporacionGuatemala.series.pendiente[0] = parseFloat(
            itemCampanaActualGuatemala.data_inco_guat[0].porc_inco_pend,
          ).toFixed(2)
        }
        if (itemCampanaActualGuatemala.data_rete_guat.length > 0) {
          this.dataRetencionGuatemala.objetivo = itemCampanaActualGuatemala.data_rete_guat[0].obje_rete
          this.dataRetencionGuatemala.facturado = itemCampanaActualGuatemala.data_rete_guat[0].fact_rete
          this.dataRetencionGuatemala.pendiente = itemCampanaActualGuatemala.data_rete_guat[0].pend_rete
          this.dataRetencionGuatemala.series.facturado[0] = parseFloat(
            itemCampanaActualGuatemala.data_rete_guat[0].porc_rete,
          ).toFixed(2)
          this.dataRetencionGuatemala.series.pendiente[0] = parseFloat(
            itemCampanaActualGuatemala.data_rete_guat[0].porc_rete_pend,
          ).toFixed(2)
        }
        if (itemCampanaActualGuatemala.data_tota_guat.length > 0) {
          this.dataTotalGuatemala.objetivo = itemCampanaActualGuatemala.data_tota_guat[0].obje_tota
          this.dataTotalGuatemala.facturado = itemCampanaActualGuatemala.data_tota_guat[0].fact_tota
          this.dataTotalGuatemala.pendiente = itemCampanaActualGuatemala.data_tota_guat[0].pend_tota
          this.dataTotalGuatemala.series.facturado[0] = parseFloat(
            itemCampanaActualGuatemala.data_tota_guat[0].porc_tota,
          ).toFixed(2)
          this.dataTotalGuatemala.series.pendiente[0] = parseFloat(
            itemCampanaActualGuatemala.data_tota_guat[0].porc_tota_pend,
          ).toFixed(2)
        }
      }
      this.$emit('updateCierre')
      setTimeout(() => {
        this.$vs.loading.close()
      }, 500)
    },
  },
}
</script>
