<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_dire_lide_gene()"
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
        @click="repo_come_dire_lide_limp()"
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
        @click="repo_come_dire_lide_gene()"
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
        @click="repo_come_dire_lide_exce()"
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
        @click="repo_come_dire_lide_limp()"
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
          <JqxGrid
            ref="repo_come_dire_lide_grid_glob"
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
            :selectionmode="'singlerow'"
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
            @rowdoubleclick="repo_come_dire_lide_grid_glob_sele($event)"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-modal
      ref="repo_come_dire_lide_moda"
      hide-footer
      no-close-on-backdrop
      :modal-class="claseModal"
      size="lg"
      centered
      title="Modificar Lider"
      @shown="siguienteInput('refEmailLider')"
      @hidden="repo_come_dire_lide_limp_moda(false)"
    >
      <b-row class="ml-0 mr-0">
        <b-col
          md="3"
          sm="12"
          class="mb-1 align-self-center"
        >
          DNI - RUC
        </b-col>
        <b-col
          md="4"
          sm="12"
          class="mb-1"
        >
          <b-form-input
            ref="refDniLider"
            v-model="dniLider"
            disabled="disabled"
          />
        </b-col>
      </b-row>
      <b-row class="ml-0 mr-0">
        <b-col
          md="3"
          sm="12"
          class="mb-1 align-self-center"
        >
          Correo electrónico
        </b-col>
        <b-col
          md="9"
          sm="12"
          class="mb-1"
        >
          <b-form-input
            ref="refEmailLider"
            v-model="emailLider"
            @keypress="repo_come_dire_lide_bind_emai($event)"
          />
        </b-col>
      </b-row>
      <b-row class="ml-0 mr-0">
        <b-col
          md="3"
          sm="12"
          class="mb-1 align-self-center"
        >
          Fecha cumpleaños
        </b-col>
        <b-col
          md="6"
          sm="12"
          class="mb-1"
        >
          <b-form-datepicker
            v-model="fechaNacimientoLider"
            selected-variant="primary"
            :max="max"
            :hide-header="true"
            placeholder=""
            autocomplete="off"
          />
        </b-col>
      </b-row>
      <div class="d-flex align-items-center justify-content-end">
        <b-button
          variant="primary"
          class="ml-1"
          @click="repo_come_dire_lide_regi_moda()"
        >
          <feather-icon
            icon="SaveIcon"
            class="mr-50 text-black"
          />
          <span class="text-black">
            Grabar
          </span>
        </b-button>
        <b-button
          variant="danger"
          class="ml-1"
          @click="repo_come_dire_lide_limp_moda(true)"
        >
          <feather-icon
            icon="FileIcon"
            class="mr-50"
          />
          Limpiar
        </b-button>
      </div>
    </b-modal>
  </section>
</template>
<script>
import {
  BRow,
  BCol,
  BButton,
  BCard,
  BFormInput,
  BFormDatepicker,
  BModal,
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
    BFormDatepicker,
    BModal,
    // eslint-disable-next-line vue/no-unused-components
    JqxGrid,
  },
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const maxDate = new Date(today)
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      dataCampana: [],
      seleccionCampana: [],
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      popupActive: false,
      dniLider: '',
      emailLider: '',
      fechaNacimientoLider: '',
      max: maxDate,
    }
  },
  computed: {
    claseModal() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'modal-primary'
      }
      return ''
    },
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
        { name: 'cons_terc', type: 'number' },
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'nomb_terc', type: 'string' },
        { name: 'tele_terc', type: 'string' },
        { name: 'celu_terc', type: 'string' },
        { name: 'mail_ases', type: 'string' },
        { name: 'dire_terc', type: 'string' },
        { name: 'camp_ingr', type: 'string' },
        { name: 'fech_naci', type: 'string' },
        { name: 'fech_ingr', type: 'string' },
        { name: 'acti_esta', type: 'string' },
      ],
      datatype: 'array',
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
    this.repo_come_dire_lide_visi()
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
    siguienteInput(referencia) {
      this.$refs[referencia].focus()
    },
    handleWindowResize() {
      let codiAreaGlob = ''
      let codiZonaGlob = ''
      let codiSectGlob = ''
      let numeIdenGlob = ''
      let nombTercGlob = ''
      let teleTercGlob = ''
      let celuTercGlob = ''
      let mailTercGlob = ''
      let direTercGlob = ''
      let fechNaciGlob = ''
      let fechIngrGlob = ''
      let actiEstaGlob = ''
      let campIngrGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiAreaGlob = '20'
          codiZonaGlob = '20'
          codiSectGlob = '20'
          numeIdenGlob = '20'
          nombTercGlob = '60'
          teleTercGlob = '20'
          celuTercGlob = '20'
          mailTercGlob = '50'
          direTercGlob = '50'
          fechNaciGlob = '20'
          fechIngrGlob = '20'
          actiEstaGlob = '20'
          campIngrGlob = '20'
          break
        case 'sm':
          codiAreaGlob = '20'
          codiZonaGlob = '20'
          codiSectGlob = '20'
          numeIdenGlob = '20'
          nombTercGlob = '60'
          teleTercGlob = '20'
          celuTercGlob = '20'
          mailTercGlob = '50'
          direTercGlob = '50'
          fechNaciGlob = '20'
          fechIngrGlob = '20'
          actiEstaGlob = '20'
          campIngrGlob = '20'
          break
        case 'md':
          codiAreaGlob = '12'
          codiZonaGlob = '12'
          codiSectGlob = '12'
          numeIdenGlob = '12'
          nombTercGlob = '40'
          teleTercGlob = '12'
          celuTercGlob = '12'
          mailTercGlob = '30'
          direTercGlob = '42'
          fechNaciGlob = '12'
          fechIngrGlob = '12'
          actiEstaGlob = '12'
          campIngrGlob = '12'
          break
        default:
          codiAreaGlob = '6'
          codiZonaGlob = '6'
          codiSectGlob = '6'
          numeIdenGlob = '8'
          nombTercGlob = '30'
          teleTercGlob = '10'
          celuTercGlob = '10'
          mailTercGlob = '25'
          direTercGlob = '30'
          fechNaciGlob = '10'
          fechIngrGlob = '10'
          actiEstaGlob = '10'
          campIngrGlob = '10'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Región',
          dataField: 'codi_area',
          width: `${codiAreaGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: `${codiZonaGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Sector',
          dataField: 'codi_sect',
          width: `${codiSectGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'DNI - RUC',
          dataField: 'nume_iden',
          width: `${numeIdenGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Nombre(s) y Apellido(s)',
          dataField: 'nomb_terc',
          width: `${nombTercGlob}%`,
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
        {
          text: 'Telefono Personal',
          dataField: 'tele_terc',
          width: `${teleTercGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Telefono RPC',
          dataField: 'celu_terc',
          width: `${celuTercGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Correo electrónico',
          dataField: 'mail_ases',
          width: `${mailTercGlob}%`,
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
        {
          text: 'Dirección',
          dataField: 'dire_terc',
          width: `${direTercGlob}%`,
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
        {
          text: 'Fecha cumpleaños',
          dataField: 'fech_naci',
          width: `${fechNaciGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Fecha ingreso',
          dataField: 'fech_ingr',
          width: `${fechIngrGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Campaña ingreso',
          dataField: 'camp_ingr',
          width: `${campIngrGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Estado',
          dataField: 'acti_esta',
          width: `${actiEstaGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
      ]

      if (typeof this.$refs.repo_come_dire_lide_grid_glob !== 'undefined') {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.repo_come_dire_lide_grid_glob.height = this.height
        this.$refs.repo_come_dire_lide_grid_glob.columns = this.columnsGlobal
      }
    },
    repo_come_dire_lide_bind_emai(event) {
      const regex = new RegExp('^[a-zA-Z0-9.@-]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    async repo_come_dire_lide_regi_moda() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/repo_come_dire_lide/dire_lide_regi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            nume_iden: this.dniLider,
            corr_lide: this.emailLider,
            fech_naci: this.fechaNacimientoLider,
          },
        })
        let respuesta = await servicio.data.data_glob
        respuesta = respuesta.toLowerCase()
        respuesta = respuesta.charAt(0).toUpperCase() + respuesta.slice(1)
        this.$refs.repo_come_dire_lide_moda.hide()
        setTimeout(() => {
          this.$vs.loading.close()
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'CheckSquareIcon',
                variant: 'success',
                text: respuesta,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
        }, 500)
        setTimeout(() => {
          this.repo_come_dire_lide_gene()
        }, 1500)
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
    repo_come_dire_lide_limp_moda(status) {
      this.emailLider = ''
      this.fechaNacimientoLider = ''
      if (status) {
        this.siguienteInput('refEmailLider')
      } else {
        this.dniLider = ''
      }
    },
    repo_come_dire_lide_limp() {
      this.$refs.repo_come_dire_lide_grid_glob.clear()
      this.$refs.repo_come_dire_lide_grid_glob.clearselection()
    },
    async repo_come_dire_lide_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_dire_lide',
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
    async repo_come_dire_lide_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_dire_lide_limp()
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/repo_come_dire_lide/dire_lide_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_zona: JSON.parse(this.userData.zonaUsuario),
            codi_area: JSON.parse(this.userData.areaUsuario),
          },
        })
        this.sourceGlobal.localdata = await servicio.data.data_glob
        this.sourceGlobal.datatype = 'json'
        this.$refs.repo_come_dire_lide_grid_glob.updatebounddata('cells')
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
    },
    async repo_come_dire_lide_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_dire_lide_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/repo_come_dire_lide/dire_lide_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_dire_lide_grid_glob.exportdata(
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
    repo_come_dire_lide_grid_glob_sele(event) {
      const { args } = event
      const row = args.rowindex
      const dataRecord = this.$refs.repo_come_dire_lide_grid_glob.getrowdata(
        row,
      )
      this.dniLider = dataRecord.nume_iden
      this.emailLider = dataRecord.mail_ases
      this.fechaNacimientoLider = dataRecord.fech_naci
      this.$nextTick(() => {
        this.$refs.repo_come_dire_lide_moda.show()
      })
    },
  },
}
</script>
