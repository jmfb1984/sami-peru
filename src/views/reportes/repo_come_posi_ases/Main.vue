<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_posi_ases_gene()"
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
        @click="repo_come_posi_ases_limp()"
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
        @click="repo_come_posi_ases_gene()"
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
        @click="repo_come_posi_ases_exce()"
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
        @click="repo_come_posi_ases_limp()"
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
        <selectCampana
          :array-campana="dataCampana"
          @campana="setCampana"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_posi_ases_grid_glob"
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
  BRow, BCol, BButton, BCard,
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import selectCampana from '@/views/components/FiltroCampana.vue'
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
    // eslint-disable-next-line vue/no-unused-components
    selectCampana,
    // eslint-disable-next-line vue/no-unused-components
    JqxGrid,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      dataCampana: [],
      seleccionCampana: [],
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
    }
  },
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
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
        { name: 'codi_zona', type: 'string' },
        { name: 'nume_iden_refe', type: 'string' },
        { name: 'nomb_terc_refe', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'nomb_terc', type: 'string' },
        { name: 'nomb_dpto', type: 'string' },
        { name: 'nomb_ciud', type: 'string' },
        { name: 'nomb_barr', type: 'string' },
        { name: 'dire_terc', type: 'string' },
        { name: 'usua_modi', type: 'string' },
        { name: 'fech_modi', type: 'string' },
        { name: 'usua_zona', type: 'string' },
        { name: 'fech_zona', type: 'string' },
        { name: 'obse_zona', type: 'string' },
        { name: 'acti_esta', type: 'string' },
        { name: 'nomb_medi', type: 'string' },
        { name: 'tele_ases', type: 'string' },
        { name: 'corr_ases', type: 'string' },
        { name: 'camp_ingr', type: 'string' },
      ],
      datatype: 'array',
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
    this.repo_come_posi_ases_visi()
  },
  created() {
    this.handleWindowResize()
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    itemCampana = itemCampana.camp.slice(0, 6)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))
    this.seleccionCampana = itemCampana[0].codi_camp
  },
  methods: {
    setCampana(value) {
      this.seleccionCampana = value
    },
    handleWindowResize() {
      let codiZonaGlob = ''
      let numeIdenRefeGlob = ''
      let nombTercRefeGlob = ''
      let numeIdenGlob = ''
      let nombTercGlob = ''
      let nombDptoGlob = ''
      let nombCiudGlob = ''
      let nombBarrGlob = ''
      let direTercGlob = ''
      let actiEstaGlob = ''
      let usuaModiGlob = ''
      let fechModiGlob = ''
      let usuaZonaGlob = ''
      let fechZonaGlob = ''
      let nombMediGlob = ''
      let teleAsesGlob = ''
      let corrAsesGlob = ''
      let campIngrGlob = ''
      let obseZonaGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiZonaGlob = '20'
          numeIdenRefeGlob = '20'
          nombTercRefeGlob = '60'
          numeIdenGlob = '20'
          nombTercGlob = '60'
          nombDptoGlob = '30'
          nombCiudGlob = '30'
          nombBarrGlob = '30'
          direTercGlob = '60'
          actiEstaGlob = '30'
          usuaModiGlob = '30'
          fechModiGlob = '30'
          usuaZonaGlob = '30'
          fechZonaGlob = '30'
          nombMediGlob = '30'
          teleAsesGlob = '30'
          corrAsesGlob = '30'
          campIngrGlob = '30'
          obseZonaGlob = '30'
          break
        case 'sm':
          codiZonaGlob = '20'
          numeIdenRefeGlob = '20'
          nombTercRefeGlob = '60'
          numeIdenGlob = '20'
          nombTercGlob = '60'
          nombDptoGlob = '30'
          nombCiudGlob = '30'
          nombBarrGlob = '30'
          direTercGlob = '60'
          actiEstaGlob = '30'
          usuaModiGlob = '30'
          fechModiGlob = '30'
          usuaZonaGlob = '30'
          fechZonaGlob = '30'
          nombMediGlob = '30'
          teleAsesGlob = '30'
          corrAsesGlob = '30'
          campIngrGlob = '20'
          obseZonaGlob = '30'
          break
        case 'md':
          codiZonaGlob = '15'
          numeIdenRefeGlob = '15'
          nombTercRefeGlob = '40'
          numeIdenGlob = '15'
          nombTercGlob = '40'
          nombDptoGlob = '20'
          nombCiudGlob = '20'
          nombBarrGlob = '20'
          direTercGlob = '40'
          actiEstaGlob = '20'
          usuaModiGlob = '20'
          fechModiGlob = '20'
          usuaZonaGlob = '20'
          fechZonaGlob = '20'
          nombMediGlob = '20'
          teleAsesGlob = '20'
          corrAsesGlob = '20'
          campIngrGlob = '20'
          obseZonaGlob = '20'
          break
        default:
          codiZonaGlob = '8'
          numeIdenRefeGlob = '10'
          nombTercRefeGlob = '22'
          numeIdenGlob = '10'
          nombTercGlob = '22'
          nombDptoGlob = '10'
          nombCiudGlob = '10'
          nombBarrGlob = '10'
          direTercGlob = '20'
          actiEstaGlob = '10'
          usuaModiGlob = '10'
          fechModiGlob = '10'
          usuaZonaGlob = '10'
          fechZonaGlob = '10'
          nombMediGlob = '10'
          corrAsesGlob = '15'
          teleAsesGlob = '10'
          campIngrGlob = '10'
          obseZonaGlob = '10'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: `${codiZonaGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'DNI - RUC Referente',
          dataField: 'nume_iden_refe',
          width: `${numeIdenRefeGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Nombre(s) y Apellido(s) Referente',
          dataField: 'nomb_terc_refe',
          width: `${nombTercRefeGlob}%`,
          align: 'center',
          cellsalign: 'left',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'DNI - RUC Referido',
          dataField: 'nume_iden',
          width: `${numeIdenGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Nombre(s) y Apellido(s) Referido',
          dataField: 'nomb_terc',
          width: `${nombTercGlob}%`,
          align: 'center',
          cellsalign: 'left',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Departamento',
          dataField: 'nomb_dpto',
          width: `${nombDptoGlob}%`,
          align: 'center',
          cellsalign: 'left',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Provincia',
          dataField: 'nomb_ciud',
          width: `${nombCiudGlob}%`,
          align: 'center',
          cellsalign: 'left',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Distrito',
          dataField: 'nomb_barr',
          width: `${nombBarrGlob}%`,
          align: 'center',
          cellsalign: 'left',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Dirección',
          dataField: 'dire_terc',
          width: `${direTercGlob}%`,
          align: 'center',
          cellsalign: 'left',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Estado',
          dataField: 'acti_esta',
          width: `${actiEstaGlob}%`,
          align: 'center',
          cellsalign: 'left',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Usuario Proceso',
          dataField: 'usua_modi',
          width: `${usuaModiGlob}%`,
          align: 'center',
          cellsalign: 'left',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Fecha Proceso',
          dataField: 'fech_modi',
          width: `${fechModiGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Usuario Zona',
          dataField: 'usua_zona',
          width: `${usuaZonaGlob}%`,
          align: 'center',
          cellsalign: 'left',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Fecha Zona',
          dataField: 'fech_zona',
          width: `${fechZonaGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Medio Contacto',
          dataField: 'nomb_medi',
          width: `${nombMediGlob}%`,
          align: 'center',
          cellsalign: 'left',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Teléfono',
          dataField: 'tele_ases',
          width: `${teleAsesGlob}%`,
          align: 'center',
          cellsalign: 'left',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Correo Electrónico',
          dataField: 'corr_ases',
          width: `${corrAsesGlob}%`,
          align: 'center',
          cellsalign: 'left',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Campaña Ingreso',
          dataField: 'camp_ingr',
          width: `${campIngrGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellclassname: this.repo_come_posi_ases_clas,
        },
        {
          text: 'Observación',
          dataField: 'obse_zona',
          width: `${obseZonaGlob}%`,
          align: 'center',
          cellsalign: 'left',
          cellclassname: this.repo_come_posi_ases_clas,
        },
      ]

      if (typeof this.$refs.repo_come_posi_ases_grid_glob !== 'undefined') {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.repo_come_posi_ases_grid_glob.height = this.height
        this.$refs.repo_come_posi_ases_grid_glob.columns = this.columnsGlobal
      }
    },
    repo_come_posi_ases_limp() {
      this.$refs.repo_come_posi_ases_grid_glob.clear()
      this.$refs.repo_come_posi_ases_grid_glob.clearselection()
    },
    async repo_come_posi_ases_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_posi_ases',
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
    async repo_come_posi_ases_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_posi_ases_limp()
      if (
        this.seleccionCampana === null
        || this.seleccionCampana.length === 0
      ) {
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
              text: 'Campo campaña es obligatorio.',
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
            url: `${store.state.app.webService}/sami_v1/repo_come_posi_ases/posi_ases_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.seleccionCampana,
              codi_zona: JSON.parse(userData.zonaUsuario),
              codi_area: JSON.parse(userData.areaUsuario),
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_posi_ases_grid_glob.updatebounddata('cells')
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
    async repo_come_posi_ases_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_posi_ases_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/repo_come_posi_ases/posi_ases_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_posi_ases_grid_glob.exportdata(
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
    repo_come_posi_ases_clas(row) {
      const dataRecord = this.$refs.repo_come_posi_ases_grid_glob.getrowdata(
        row,
      )
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
