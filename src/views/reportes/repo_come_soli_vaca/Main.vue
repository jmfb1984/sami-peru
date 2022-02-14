<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="repo_come_soli_vaca_gene()"
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
        @click="repo_come_soli_vaca_limp(1)"
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
        @click="repo_come_soli_vaca_gene()"
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
        @click="repo_come_soli_vaca_exce()"
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
        @click="repo_come_soli_vaca_limp(1)"
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
              md="1"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Año</span>
            </b-col>
            <b-col
              md="2"
              sm="12"
              class="mb-1 mb-lg-0"
            >
              <b-form-input
                v-model="annoVaca"
                placeholder="Año"
                @keypress="repo_come_soli_vaca_bind_anno($event)"
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
            ref="repo_come_soli_vaca_grid_glob"
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
            :showcolumnlines="true"
            :showcolumnheaderlines="true"
            :editable="false"
            :scrollmode="'logical'"
          />
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import {
  BRow, BCol, BButton, BCard, BFormInput,
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
    BFormInput,
    // eslint-disable-next-line vue/no-unused-components
    JqxGrid,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      annoVaca: new Date().getFullYear(),
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
    }
  },
  computed: {
    clasePopUp() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return '#283046'
      }
      return ''
    },
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
        { name: 'cons_vaca', type: 'integer' },
        { name: 'codi_zona', type: 'string' },
        { name: 'nume_diaa', type: 'integer' },
        { name: 'codi_camp', type: 'integer' },
        { name: 'fech_inic', type: 'string' },
        { name: 'fech_fina', type: 'string' },
        { name: 'nomb_vend', type: 'string' },
        { name: 'usua_apro', type: 'string' },
        { name: 'acti_hora', type: 'string' },
        { name: 'acti_esta', type: 'string' },
        { name: 'obse_modi', type: 'string' },
        { name: 'fech_modi', type: 'string' },
        { name: 'zona_reem', type: 'string' },
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
    this.repo_come_soli_vaca_visi()
  },
  created() {
    this.handleWindowResize()
  },
  methods: {
    handleWindowResize() {
      let consVacaGlob = ''
      let codiZonaGlob = ''
      let nombVendGlob = ''
      let usuaAproGlob = ''
      let fechInicGlob = ''
      let fechFinaGlob = ''
      let numeDiaaGlob = ''
      let actiEstaGlob = ''
      let zonaReemGlob = ''
      let obseModiGlob = ''
      let codiCampGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          consVacaGlob = '15'
          codiZonaGlob = '20'
          nombVendGlob = '25'
          usuaAproGlob = '25'
          codiCampGlob = '20'
          fechInicGlob = '20'
          fechFinaGlob = '20'
          numeDiaaGlob = '15'
          actiEstaGlob = '25'
          zonaReemGlob = '25'
          obseModiGlob = '35'
          break
        case 'sm':
          consVacaGlob = '15'
          codiZonaGlob = '20'
          nombVendGlob = '25'
          usuaAproGlob = '25'
          codiCampGlob = '20'
          fechInicGlob = '20'
          fechFinaGlob = '20'
          numeDiaaGlob = '15'
          actiEstaGlob = '25'
          zonaReemGlob = '25'
          obseModiGlob = '35'
          break
        case 'md':
          consVacaGlob = '10'
          codiZonaGlob = '15'
          nombVendGlob = '20'
          usuaAproGlob = '20'
          codiCampGlob = '15'
          fechInicGlob = '15'
          fechFinaGlob = '15'
          numeDiaaGlob = '10'
          actiEstaGlob = '20'
          zonaReemGlob = '20'
          obseModiGlob = '30'
          break
        default:
          consVacaGlob = '5'
          codiZonaGlob = '8'
          nombVendGlob = '15'
          usuaAproGlob = '15'
          codiCampGlob = '10'
          fechInicGlob = '10'
          fechFinaGlob = '10'
          numeDiaaGlob = '5'
          actiEstaGlob = '10'
          zonaReemGlob = '10'
          obseModiGlob = '20'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Código',
          dataField: 'cons_vaca',
          width: `${consVacaGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: `${codiZonaGlob}%`,
          cellsalign: 'center',
          align: 'center',
          filtertype: 'checkedlist',
        },
        {
          text: 'Gerente Zonal',
          dataField: 'nomb_vend',
          width: `${nombVendGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Aprobador',
          dataField: 'usua_apro',
          width: `${usuaAproGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Fecha inicial',
          dataField: 'fech_inic',
          width: `${fechInicGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Fecha final',
          dataField: 'fech_fina',
          width: `${fechFinaGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Dia(s)',
          dataField: 'nume_diaa',
          width: `${numeDiaaGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Campaña',
          dataField: 'codi_camp',
          width: `${codiCampGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Estado',
          dataField: 'acti_esta',
          width: `${actiEstaGlob}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_soli_vaca_esta_clas,
        },
        {
          text: 'Reemplazo',
          dataField: 'zona_reem',
          width: `${zonaReemGlob}%`,
          cellsalign: 'left',
          align: 'center',
          filtertype: 'checkedlist',
        },
        {
          text: 'Observación',
          dataField: 'obse_modi',
          width: `${obseModiGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
      ]
      if (
        typeof this.$refs.repo_come_soli_vaca_grid_glob !== 'undefined'
      ) {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.repo_come_soli_vaca_grid_glob.height = this.height
        this.$refs.repo_come_soli_vaca_grid_glob.columns = this.columnsGlobal
      }
    },
    repo_come_soli_vaca_bind_anno(event) {
      const regex = new RegExp('^[0-9]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    repo_come_soli_vaca_limp(total) {
      this.$refs.repo_come_soli_vaca_grid_glob.clear()
      this.$refs.repo_come_soli_vaca_grid_glob.clearselection()
      if (total === 1) {
        this.annoVaca = new Date().getFullYear()
      }
    },
    async repo_come_soli_vaca_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_soli_vaca',
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
    async repo_come_soli_vaca_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_soli_vaca_limp(0)
      if (this.annoVaca === null || this.annoVaca === '') {
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
              text: 'Campo año es obligatorio.',
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
            url: `${store.state.app.webService}/sami_v1/repo_come_soli_vaca/soli_vaca_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              fech_anoo: this.annoVaca,
              tipo_usua: this.userData.tipoUsuario,
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_soli_vaca_grid_glob.updatebounddata('cells')
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
    repo_come_soli_vaca_esta_clas(row) {
      const dataRecord = this.$refs.repo_come_soli_vaca_grid_glob.getrowdata(row)
      const actiEsta = dataRecord.acti_esta
      if (actiEsta === 'Rechazado') {
        return 'text-white bg-danger'
      }
      if (actiEsta === 'Aprobado') {
        return 'text-white bg-success'
      }
      return 'text-white bg-warning'
    },
    async repo_come_soli_vaca_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_soli_vaca_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/repo_come_soli_vaca/soli_vaca_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_soli_vaca_grid_glob.exportdata(
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
  },
}
</script>
<style lang="scss"></style>
