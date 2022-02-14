<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_sami_visi_gene()"
      >
        <feather-icon
          icon="SearchIcon"
          class="mr-50 text-black"
        />
        <span class="text-black">
          Generar
        </span>
      </b-button>
      <b-button
        variant="danger"
        block
        @click="repo_come_sami_visi_limp()"
      >
        <feather-icon
          icon="FileIcon"
          class="mr-50"
        />
        Limpiar
      </b-button>
    </div>
    <div class="d-none d-md-flex align-items-center justify-content-end mb-2">
      <b-button
        variant="primary"
        class="ml-1"
        @click="repo_come_sami_visi_gene()"
      >
        <feather-icon
          icon="SearchIcon"
          class="mr-50 text-black"
        />
        <span class="text-black">
          Generar
        </span>
      </b-button>
      <b-button
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="repo_come_sami_visi_exce()"
      >
        <feather-icon
          icon="DownloadIcon"
          class="mr-50"
        />
        Excel
      </b-button>
      <b-button
        variant="danger"
        class="ml-1"
        @click="repo_come_sami_visi_limp()"
      >
        <feather-icon
          icon="FileIcon"
          class="mr-50"
        />
        Limpiar
      </b-button>
    </div>
    <b-row>
      <b-col>
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
              <span class="d-flex mt-50">Fecha Inicio</span>
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="6"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0 d-flex"
            >
              <b-form-datepicker
                v-model="fechaInicio"
                selected-variant="primary"
                :hide-header="true"
                placeholder=""
                autocomplete="off"
              />
              <vs-button
                color="success"
                type="line"
                icon-pack="feather"
                icon="icon-file"
                class="ml-1"
                @click="repo_come_sami_visi_fech_inic()"
              />
            </b-col>
            <b-col class="d-block d-lg-none" />
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Fecha Final</span>
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="6"
              sm="12"
              xs="12"
              class="mb-0 d-flex"
            >
              <b-form-datepicker
                v-model="fechaFinal"
                selected-variant="primary"
                :hide-header="true"
                placeholder=""
                autocomplete="off"
              />
              <vs-button
                color="success"
                type="line"
                icon-pack="feather"
                icon="icon-file"
                class="ml-1"
                @click="repo_come_sami_visi_fech_fina()"
              />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_sami_visi_grid_glob"
            :width="'100%'"
            :height="height"
            :columns="columnsGlobal"
            :source="dataAdapterGlobal"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="true"
            :sortmode="'many'"
            :filterable="true"
            :altrows="false"
            :selectionmode="'singlecell'"
            :enablebrowserselection="true"
            :showemptyrow="false"
            :columnsreorder="true"
            :enablehover="false"
            :groupable="true"
            :autoshowfiltericon="true"
            :enableanimations="true"
            :localization="localization"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
            :scrollmode="'logical'"
          />
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import {
  BRow, BCol, BButton, BCard, BFormDatepicker,
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BCard,
    BFormDatepicker,
    // eslint-disable-next-line vue/no-unused-components
    JqxGrid,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      fechaInicio: '',
      fechaFinal: '',
    }
  },
  beforeCreate() {
    if (window.innerHeight - 200 < 400) {
      this.height = '400px'
    } else {
      this.height = `${window.innerHeight - 200}px`
    }
    this.sourceGlobal = {
      localdata: [],
      datafields: [
        { name: 'cons_fila', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'nomb_empl', type: 'string' },
        { name: 'nomb_prog', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_area', type: 'string' },
        { name: 'hora_visi', type: 'string' },
        { name: 'mess_visi', type: 'string' },
        { name: 'fech_visi', type: 'string' },
        { name: 'codi_cort', type: 'number' },
      ],
      datatype: 'array',
    }
  },
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
  },
  created() {
    this.handleWindowResize()
  },
  methods: {
    handleWindowResize() {
      let codiCortGlob = ''
      let codiAreaGlob = ''
      let codiZonaGlob = ''
      let numeIdenGlob = ''
      let nombEmplGlob = ''
      let nombProgGlob = ''
      let fechVisiGlob = ''
      let messVisiGlob = ''
      let horaVisiGlob = ''

      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiCortGlob = '15'
          codiAreaGlob = '15'
          codiZonaGlob = '15'
          numeIdenGlob = '20'
          nombEmplGlob = '60'
          nombProgGlob = '50'
          fechVisiGlob = '20'
          messVisiGlob = '20'
          horaVisiGlob = '20'
          break
        case 'sm':
          codiCortGlob = '15'
          codiAreaGlob = '15'
          codiZonaGlob = '15'
          numeIdenGlob = '20'
          nombEmplGlob = '60'
          nombProgGlob = '50'
          fechVisiGlob = '20'
          messVisiGlob = '20'
          horaVisiGlob = '20'
          break
        case 'md':
          codiCortGlob = '10'
          codiAreaGlob = '10'
          codiZonaGlob = '10'
          numeIdenGlob = '15'
          nombEmplGlob = '40'
          nombProgGlob = '30'
          fechVisiGlob = '15'
          messVisiGlob = '15'
          horaVisiGlob = '15'
          break
        default:
          codiCortGlob = '6'
          codiAreaGlob = '6'
          codiZonaGlob = '6'
          numeIdenGlob = '10'
          nombEmplGlob = '23'
          nombProgGlob = '19'
          fechVisiGlob = '10'
          messVisiGlob = '10'
          horaVisiGlob = '10'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Fila',
          dataField: 'cons_fila',
          hidden: true,
        },
        {
          text: 'Corte',
          dataField: 'codi_cort',
          width: `${codiCortGlob}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Región',
          dataField: 'codi_area',
          width: `${codiAreaGlob}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: `${codiZonaGlob}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'DNI - RUC',
          dataField: 'nume_iden',
          width: `${numeIdenGlob}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Nombre(s) y Apellido(s)',
          dataField: 'nomb_empl',
          width: `${nombEmplGlob}%`,
          align: 'center',
        },
        {
          text: 'Programa',
          dataField: 'nomb_prog',
          width: `${nombProgGlob}%`,
          align: 'center',
        },
        {
          text: 'Fecha',
          dataField: 'fech_visi',
          width: `${fechVisiGlob}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Mes',
          dataField: 'mess_visi',
          width: `${messVisiGlob}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Hora',
          dataField: 'hora_visi',
          width: `${horaVisiGlob}%`,
          align: 'center',
          cellsalign: 'center',
        },
      ]

      if (typeof this.$refs.repo_come_sami_visi_grid_glob !== 'undefined') {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.repo_come_sami_visi_grid_glob.height = this.height
        this.$refs.repo_come_sami_visi_grid_glob.columns = this.columnsGlobal
      }
    },
    repo_come_sami_visi_fech_inic() {
      this.fechaInicio = ''
    },
    repo_come_sami_visi_fech_fina() {
      this.fechaFinal = ''
    },
    repo_come_sami_visi_limp() {
      this.$refs.repo_come_sami_visi_grid_glob.clear()
      this.$refs.repo_come_sami_visi_grid_glob.clearselection()
    },
    async repo_come_sami_visi_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_sami_visi_limp()
      let fechInic = ''
      let fechFina = ''
      let mensaje = ''
      if (this.fechaInicio !== '') {
        fechInic = new Date(this.fechaInicio)
      }
      if (this.fechaFinal !== '') {
        fechFina = new Date(this.fechaFinal)
      }
      if (fechInic !== '' && fechFina !== '') {
        if (fechInic > fechFina) {
          mensaje = 'Campo fecha inicial es mayor que el campo fecha final'
        }
      }
      if (mensaje !== '') {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: mensaje,
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        try {
          const userData = JSON.parse(localStorage.getItem('userData'))
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_sami_visi/sami_visi_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              fech_inic: this.fechaInicio,
              fech_fina: this.fechaFinal,
              codi_zona: JSON.parse(userData.zonaUsuario),
              codi_area: JSON.parse(userData.areaUsuario),
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_sami_visi_grid_glob.updatebounddata('cells')
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
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
      }
    },
    async repo_come_sami_visi_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_sami_visi_grid_glob.getdatainformation()
      const dataRowsGlob = dataInfoGlob.rowscount
      if (dataRowsGlob === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'No tiene información para exportar a excel',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_sami_visi/sami_visi_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_sami_visi_grid_glob.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
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
      }
    },
    repo_come_sami_visi_clas(row) {
      const dataRecord = this.$refs.repo_come_sami_visi_grid_glob.getrowdata(row)
      const usuaZona = dataRecord.usua_zona.trim()
      const actiEsta = dataRecord.acti_esta.trim()

      if (actiEsta === 'Incorporada(o)') {
        return 'text-white bg-success'
      }
      if (usuaZona === '') {
        return 'text-white bg-danger'
      }
      return ''
    },
  },
}
</script>
