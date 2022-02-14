<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_sami_come_gene()"
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
        @click="repo_come_sami_come_limp()"
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
        @click="repo_come_sami_come_gene()"
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
        @click="repo_come_sami_come_exce()"
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
        @click="repo_come_sami_come_limp()"
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
                @click="repo_come_sami_come_fech_inic()"
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
                @click="repo_come_sami_come_fech_fina()"
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
            ref="repo_come_sami_come_grid_glob"
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
            :pageable="true"
            :autorowheight="true"
            :scrollmode="'logical'"
            @rowdoubleclick="repo_come_sami_come_resp_come($event)"
          />
        </b-card>
      </b-col>
    </b-row>
    <vs-popup
      title="Responder Comentario"
      :active.sync="popupActive"
      :background-color-popup="clasePopUp"
      @close="repo_come_sami_come_cerr()"
    >
      <b-row>
        <b-col>
          <b-card class="mb-0">
            <b-col>
              <b-row>
                <h3
                  class="mb-1"
                >
                  Comentario :
                </h3>
              </b-row>
              <b-row>
                <span class="">{{ samiComentario }}</span>
              </b-row>
              <b-row class="mt-1">
                <h3
                  class="mb-1"
                >
                  Respuesta :
                </h3>
                <vs-textarea
                  v-model="respuestaComentario"
                  counter="200"
                  :counter-danger.sync="counterDanger"
                />
              </b-row>
            </b-col>
            <div class="d-flex align-items-center justify-content-end">
              <b-button
                variant="primary"
                class="ml-1"
                @click="repo_come_sami_come_resp_grab()"
              >
                <feather-icon
                  icon="SearchIcon"
                  class="mr-50 text-black"
                />
                <span class="text-black">
                  Grabar
                </span>
              </b-button>
              <b-button
                variant="danger"
                class="ml-1"
                @click="repo_come_sami_come_resp_limp()"
              >
                <feather-icon
                  icon="FileIcon"
                  class="mr-50"
                />
                Limpiar
              </b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </vs-popup>
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
      popupActive: false,
      respuestaComentario: '',
      samiComentario: '',
      codigoComentario: 0,
      counterDanger: false,
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
        { name: 'cons_come', type: 'number' },
        { name: 'nume_iden', type: 'string' },
        { name: 'nomb_empl', type: 'string' },
        { name: 'sami_come', type: 'string' },
        { name: 'fech_come', type: 'string' },
        { name: 'resp_sami', type: 'string' },
        { name: 'resp_hora', type: 'string' },
        { name: 'resp_usua', type: 'string' },
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
      let consComeGlob = ''
      let numeIdenGlob = ''
      let nombEmplGlob = ''
      let samiComeGlob = ''
      let fechComeGlob = ''
      let respSamiGlob = ''
      let respHoraGlob = ''
      let respUsuaGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          consComeGlob = '15'
          numeIdenGlob = '20'
          nombEmplGlob = '70'
          samiComeGlob = '70'
          fechComeGlob = '25'
          respSamiGlob = '70'
          respHoraGlob = '25'
          respUsuaGlob = '25'
          break
        case 'sm':
          consComeGlob = '15'
          numeIdenGlob = '20'
          nombEmplGlob = '70'
          samiComeGlob = '70'
          fechComeGlob = '25'
          respSamiGlob = '70'
          respHoraGlob = '25'
          respUsuaGlob = '25'
          break
        case 'md':
          consComeGlob = '10'
          numeIdenGlob = '15'
          nombEmplGlob = '50'
          samiComeGlob = '50'
          fechComeGlob = '20'
          respSamiGlob = '50'
          respHoraGlob = '20'
          respUsuaGlob = '20'
          break
        default:
          consComeGlob = '5'
          numeIdenGlob = '10'
          nombEmplGlob = '30'
          samiComeGlob = '35'
          fechComeGlob = '15'
          respSamiGlob = '30'
          respHoraGlob = '15'
          respUsuaGlob = '15'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Código',
          dataField: 'cons_come',
          width: `${consComeGlob}%`,
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
          cellsalign: 'left',
        },
        {
          text: 'Comentario',
          dataField: 'sami_come',
          width: `${samiComeGlob}%`,
          align: 'center',
          cellsalign: 'left',
        },
        {
          text: 'Fecha Comentario',
          dataField: 'fech_come',
          width: `${fechComeGlob}%`,
          align: 'center',
          cellsalign: 'left',
        },
        {
          text: 'Respuesta',
          dataField: 'resp_sami',
          width: `${respSamiGlob}%`,
          align: 'center',
          cellsalign: 'left',
        },
        {
          text: 'Fecha Respuesta',
          dataField: 'resp_hora',
          width: `${respHoraGlob}%`,
          align: 'center',
          cellsalign: 'left',
        },
        {
          text: 'Usuario',
          dataField: 'resp_usua',
          width: `${respUsuaGlob}%`,
          align: 'center',
          cellsalign: 'left',
        },
      ]

      if (typeof this.$refs.repo_come_sami_come_grid_glob !== 'undefined') {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.repo_come_sami_come_grid_glob.height = this.height
        this.$refs.repo_come_sami_come_grid_glob.columns = this.columnsGlobal
      }
    },
    repo_come_sami_come_fech_inic() {
      this.fechaInicio = ''
    },
    repo_come_sami_come_fech_fina() {
      this.fechaFinal = ''
    },
    repo_come_sami_come_cerr() {
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
      this.respuestaComentario = ''
      this.codigoComentario = 0
      this.samiComentario = ''
    },
    async repo_come_sami_come_resp_grab() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      if (this.respuestaComentario === '') {
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
              text: 'Campo respuesta obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else if (this.respuestaComentario.length > 200) {
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
              text: 'Campo respuesta supera los 200 caracteres como máximo.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        try {
          await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_sami_come/sami_come_resp`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              cons_come: this.codigoComentario,
              resp_come: this.respuestaComentario,
              sami_come: this.samiComentario,
            },
          })
          document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
          this.popupActive = false
          this.respuestaComentario = ''
          this.codigoComentario = 0
          this.samiComentario = ''
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'CheckCircleIcon',
                variant: 'success',
                text: 'Respuesta enviada con éxito.',
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          setTimeout(() => {
            this.$vs.loading.close()
            this.repo_come_sami_come_gene()
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
    repo_come_sami_come_resp_limp() {
      this.respuestaComentario = ''
    },
    repo_come_sami_come_resp_come(event) {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const { args } = event
      const id = args.rowindex
      const respUsua = this.$refs.repo_come_sami_come_grid_glob.getcellvaluebyid(
        id,
        'resp_usua',
      )
      if (respUsua !== '') {
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
              text: 'Comentario ya tiene una respuesta.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        setTimeout(() => {
          this.codigoComentario = this.$refs.repo_come_sami_come_grid_glob.getcellvaluebyid(
            id,
            'cons_come',
          )
          this.samiComentario = this.$refs.repo_come_sami_come_grid_glob.getcellvaluebyid(
            id,
            'sami_come',
          )
          this.$vs.loading.close()
        }, 500)
        document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
        this.popupActive = true
      }
    },
    repo_come_sami_come_limp() {
      this.$refs.repo_come_sami_come_grid_glob.clear()
      this.$refs.repo_come_sami_come_grid_glob.clearselection()
    },
    async repo_come_sami_come_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_sami_come_limp()
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
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_sami_come/sami_come_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              fech_inic: this.fechaInicio,
              fech_fina: this.fechaFinal,
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_sami_come_grid_glob.updatebounddata('cells')
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
    async repo_come_sami_come_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_sami_come_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/repo_come_sami_come/sami_come_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_sami_come_grid_glob.exportdata(
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
    repo_come_sami_come_clas(row) {
      const dataRecord = this.$refs.repo_come_sami_come_grid_glob.getrowdata(row)
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
