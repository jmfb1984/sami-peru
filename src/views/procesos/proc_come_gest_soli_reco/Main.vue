<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="proc_come_gest_soli_reco_gene()"
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
        variant="warning"
        block
        class="mb-1"
        @click="proc_come_gest_soli_reco_imag()"
      >
        <feather-icon
          icon="CameraIcon"
          class="mr-50"
        />
        <span>
          Imagen
        </span>
      </b-button>
      <b-button
        variant="danger"
        block
        @click="proc_come_gest_soli_reco_limp()"
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
        @click="proc_come_gest_soli_reco_gene()"
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
        variant="warning"
        class="ml-1"
        @click="proc_come_gest_soli_reco_imag()"
      >
        <feather-icon
          icon="CameraIcon"
          class="mr-50"
        />
        <span>
          Imagen
        </span>
      </b-button>
      <b-button
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="proc_come_gest_soli_reco_exce()"
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
        @click="proc_come_gest_soli_reco_limp()"
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
            ref="proc_come_gest_soli_reco_grid_glob"
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
            :enablehover="true"
            :groupable="true"
            :autoshowfiltericon="true"
            :enableanimations="true"
            :localization="localization"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
            :scrollmode="'logical'"
            @rowdoubleclick="proc_come_gest_soli_reco_deta($event)"
          />
        </b-card>
      </b-col>
    </b-row>
    <vs-popup
      title="Detalle Imagen"
      fullscreen
      class-content="scrollbar"
      :active.sync="popupActiveImagen"
      :background-color-popup="clasePopUp"
      @close="proc_come_gest_soli_reco_cerr()"
    >
      <b-row class="ml-0 mr-0">
        <b-col
          xl="3"
          lg="3"
          md="4"
          sm="6"
          xs="12"
        >
          <b-card
            class="text-center"
          >
            <b-img
              :src="srcFormato"
              alt="Formato"
              fluid-grow
              @error="proc_come_gest_soli_reco_foto_erro($event)"
            />
            <h4
              class="mb-1 mt-1"
            >
              Formato
            </h4>
            <span
              class="text-grey"
            >
              Foto formato solicitud.
            </span>
            <div
              class="mt-1 d-flex align-items-center justify-content-center"
            >
              <b-button
                variant="dark"
                class="ml-1"
                @click="proc_come_gest_soli_reco_foto('1', srcFormato)"
              >
                <feather-icon
                  icon="SearchIcon"
                  class="mr-50"
                />
                <span class="">
                  Ver Imagen
                </span>
              </b-button>
            </div>
          </b-card>
        </b-col>
        <b-col
          xl="3"
          lg="3"
          md="4"
          sm="6"
          xs="12"
        >
          <b-card
            class="text-center"
          >
            <b-img
              :src="srcReciboServicio"
              alt="Recibo Servicio"
              fluid-grow
              @error="proc_come_gest_soli_reco_foto_erro($event)"
            />
            <h4
              class="mb-1 mt-1"
            >
              Recibo Servicio
            </h4>
            <span
              class="text-grey"
            >
              Foto recibo servicio.
            </span>
            <div
              class="mt-1 d-flex align-items-center justify-content-center"
            >
              <b-button
                variant="dark"
                class="ml-1"
                @click="proc_come_gest_soli_reco_foto('2', srcReciboServicio)"
              >
                <feather-icon
                  icon="SearchIcon"
                  class="mr-50"
                />
                <span class="">
                  Ver Imagen
                </span>
              </b-button>
            </div>
          </b-card>
        </b-col>
        <b-col
          xl="3"
          lg="3"
          md="4"
          sm="6"
          xs="12"
        >
          <b-card
            class="text-center"
          >
            <b-img
              :src="srcDni"
              alt="Dni"
              fluid-grow
              @error="proc_come_gest_soli_reco_foto_erro($event)"
            />
            <h4
              class="mb-1 mt-1"
            >
              Dni
            </h4>
            <span
              class="text-grey"
            >
              Foto dni.
            </span>
            <div
              class="mt-1 d-flex align-items-center justify-content-center"
            >
              <b-button
                variant="dark"
                class="ml-1"
                @click="proc_come_gest_soli_reco_foto('3', srcDni)"
              >
                <feather-icon
                  icon="SearchIcon"
                  class="mr-50"
                />
                <span class="">
                  Ver Imagen
                </span>
              </b-button>
            </div>
          </b-card>
        </b-col>
        <b-col
          xl="3"
          lg="3"
          md="4"
          sm="6"
          xs="12"
        >
          <b-card
            class="text-center"
          >
            <b-img
              :src="srcFormatoRuc"
              alt="Formato Ruc"
              fluid-grow
              @error="proc_come_gest_soli_reco_foto_erro($event)"
            />
            <h4
              class="mb-1 mt-1"
            >
              Formato Ruc
            </h4>
            <span
              class="text-grey"
            >
              Foto formato ruc.
            </span>
            <div
              class="mt-1 d-flex align-items-center justify-content-center"
            >
              <b-button
                variant="dark"
                class="ml-1"
                @click="proc_come_gest_soli_reco_foto('4', srcFormatoRuc)"
              >
                <feather-icon
                  icon="SearchIcon"
                  class="mr-50"
                />
                <span class="">
                  Ver Imagen
                </span>
              </b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <vs-popup
        :title="popupTituloDetalle"
        :active.sync="popupActiveDetalle"
        class-content="scrollbar"
        :background-color-popup="clasePopUp"
      >
        <b-row>
          <b-col>
            <b-card
              :img-src="popupFotoDetalle"
              :img-alt="popupAltDetalle"
              img-top
              tag="article"
              class="mb-0 text-center"
            />
          </b-col>
        </b-row>
      </vs-popup>
    </vs-popup>
    <vs-popup
      title="Gestionar Solicitud Recodificación"
      :active.sync="popupActive"
      :background-color-popup="clasePopUp"
      @close="proc_come_gest_soli_reco_cerr()"
    >
      <b-row class="mb-0">
        <b-col>
          <b-card>
            <b-row>
              <b-col>
                <h3 class="mb-1">
                  Estado :
                </h3>
                <v-select
                  ref="refEstado"
                  v-model="seleccionEstado"
                  :options="dataEstado"
                  class="mb-1"
                >
                  <span
                    slot="no-options"
                    @click="$refs.refEstado.open = false"
                  >
                    Estado no existe.
                  </span>
                </v-select>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <h3 class="mb-1">
                  Observación :
                </h3>
                <b-form-textarea
                  ref="refObsercacionAsesora"
                  v-model="observacionGestion"
                  :state="observacionGestion.length > maxChar ? false : null"
                  :class="observacionGestion.length >= maxChar ? 'text-danger' : ''"
                  placeholder="Ingresar observación solicitud"
                  rows="3"
                  class="mb-1"
                />
                <small
                  class="text-black textarea-counter-value float-right"
                  :class="observacionGestion.length >= maxChar ? 'bg-danger' : ''"
                >
                  <span
                    class="char-count"
                  >
                    {{ observacionGestion.length }}</span> / {{ maxChar }}
                </small>
              </b-col>
            </b-row>
            <div class="d-flex align-items-center justify-content-end mt-1">
              <b-button
                variant="primary"
                class="ml-1"
                @click="proc_come_gest_soli_reco_grab()"
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
                @click="proc_come_gest_soli_reco_limp_grab()"
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
  BRow, BCol, BButton, BCard, BImg, BFormTextarea,
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue'
import vSelect from 'vue-select'
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
    JqxGrid,
    vSelect,
    BImg,
    BFormTextarea,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      popupActiveImagen: false,
      popupActive: false,
      observacionGestion: '',
      counterDanger: false,
      dataEstado: ['Aprobado', 'Rechazado'],
      seleccionEstado: [],
      codigoSolicitud: 0,
      // eslint-disable-next-line
      srcFormato: require('@/assets/images/portrait/small/sin_imagen.png'),
      // eslint-disable-next-line
      srcReciboServicio: require('@/assets/images/portrait/small/sin_imagen.png'),
      // eslint-disable-next-line
      srcDni: require('@/assets/images/portrait/small/sin_imagen.png'),
      // eslint-disable-next-line
      srcFormatoRuc: require('@/assets/images/portrait/small/sin_imagen.png'),
      popupTituloDetalle: '',
      popupActiveDetalle: false,
      popupFotoDetalle: '',
      popupAltDetalle: '',
      maxChar: 100,
    }
  },
  computed: {
    clasePopUp() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return '#283046'
      }
      return ''
    },
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
  beforeCreate() {
    if (window.innerHeight - 200 < 400) {
      this.height = '400px'
    } else {
      this.height = `${window.innerHeight - 200}px`
    }
    this.sourceGlobal = {
      localdata: [],
      datafields: [
        { name: 'codi_camp', type: 'string' },
        { name: 'acti_hora', type: 'string' },
        { name: 'cons_soli', type: 'integer' },
        { name: 'codi_cort', type: 'string' },
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'nomb_ases', type: 'string' },
        { name: 'acti_usua', type: 'string' },
        { name: 'tipo_reco', type: 'string' },
        { name: 'obse_reco', type: 'string' },
        { name: 'imag_form', type: 'integer' },
        { name: 'imag_reci', type: 'integer' },
        { name: 'imag_dnii', type: 'integer' },
        { name: 'imag_rucc', type: 'integer' },
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
    this.proc_come_gest_soli_reco_visi()
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
      let nombAsesGlob = ''
      let actiUsuaGlob = ''
      let actiHoraGlob = ''
      let tipoRecoGlob = ''
      let obseRecoGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiCortGlob = '15'
          codiAreaGlob = '15'
          codiZonaGlob = '15'
          numeIdenGlob = '20'
          nombAsesGlob = '50'
          actiUsuaGlob = '20'
          actiHoraGlob = '20'
          tipoRecoGlob = '20'
          obseRecoGlob = '50'
          break
        case 'sm':
          codiCortGlob = '15'
          codiAreaGlob = '15'
          codiZonaGlob = '15'
          numeIdenGlob = '20'
          nombAsesGlob = '50'
          actiUsuaGlob = '20'
          actiHoraGlob = '20'
          tipoRecoGlob = '20'
          obseRecoGlob = '50'
          break
        case 'md':
          codiCortGlob = '10'
          codiAreaGlob = '10'
          codiZonaGlob = '10'
          numeIdenGlob = '15'
          nombAsesGlob = '40'
          actiUsuaGlob = '15'
          actiHoraGlob = '15'
          tipoRecoGlob = '15'
          obseRecoGlob = '40'
          break
        default:
          codiCortGlob = '5'
          codiAreaGlob = '5'
          codiZonaGlob = '5'
          numeIdenGlob = '10'
          nombAsesGlob = '30'
          actiUsuaGlob = '10'
          actiHoraGlob = '10'
          tipoRecoGlob = '10'
          obseRecoGlob = '30'
          break
      }
      this.columnsGlobal = [
        {
          text: 'codigo',
          dataField: 'cons_soli',
          hidden: true,
        },
        {
          text: 'formato',
          dataField: 'imag_form',
          hidden: true,
        },
        {
          text: 'recibo',
          dataField: 'imag_reci',
          hidden: true,
        },
        {
          text: 'dni',
          dataField: 'imag_dnii',
          hidden: true,
        },
        {
          text: 'ruc',
          dataField: 'imag_rucc',
          hidden: true,
        },
        {
          text: 'campana',
          dataField: 'codi_camp',
          hidden: true,
        },
        {
          text: 'Corte',
          dataField: 'codi_cort',
          width: `${codiCortGlob}%`,
          cellsalign: 'center',
          align: 'center',
          filtertype: 'checkedlist',
        },
        {
          text: 'Area',
          dataField: 'codi_area',
          width: `${codiAreaGlob}%`,
          cellsalign: 'center',
          align: 'center',
          filtertype: 'checkedlist',
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
          text: 'DNI - RUC',
          dataField: 'nume_iden',
          width: `${numeIdenGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Nombre(s) y Apellido(s)',
          dataField: 'nomb_ases',
          width: `${nombAsesGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Usuario',
          dataField: 'acti_usua',
          width: `${actiUsuaGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Fecha',
          dataField: 'acti_hora',
          width: `${actiHoraGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Tipo',
          dataField: 'tipo_reco',
          width: `${tipoRecoGlob}%`,
          cellsalign: 'left',
          align: 'center',
          filtertype: 'checkedlist',
        },
        {
          text: 'Observación',
          dataField: 'obse_reco',
          width: `${obseRecoGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
      ]
      if (
        typeof this.$refs.proc_come_gest_soli_reco_grid_glob !== 'undefined'
      ) {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.proc_come_gest_soli_reco_grid_glob.height = this.height
        this.$refs.proc_come_gest_soli_reco_grid_glob.columns = this.columnsGlobal
      }
    },
    proc_come_gest_soli_reco_limp() {
      this.$refs.proc_come_gest_soli_reco_grid_glob.clear()
      this.$refs.proc_come_gest_soli_reco_grid_glob.clearselection()
    },
    async proc_come_gest_soli_reco_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'proc_come_gest_soli_reco',
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
    async proc_come_gest_soli_reco_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.proc_come_gest_soli_reco_limp()

      try {
        const userData = JSON.parse(localStorage.getItem('userData'))
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_gest_soli_reco/gest_soli_reco_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_zona: JSON.parse(userData.zonaUsuario),
            codi_area: JSON.parse(userData.areaUsuario),
          },
        })
        this.sourceGlobal.localdata = await servicio.data.data_glob
        this.sourceGlobal.datatype = 'json'
        this.$refs.proc_come_gest_soli_reco_grid_glob.updatebounddata('cells')
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
    async proc_come_gest_soli_reco_imag() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const rowindexes = this.$refs.proc_come_gest_soli_reco_grid_glob.getselectedrowindexes()
      if (rowindexes.length === 0) {
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
              text: 'Debe de seleccionar una solicitud para ver las imagenes.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        const dataRecord = this.$refs.proc_come_gest_soli_reco_grid_glob.getrowdata(rowindexes[0])
        const codiSoli = dataRecord.cons_soli
        const imagForm = dataRecord.imag_form
        const imagReci = dataRecord.imag_reci
        const imagDnii = dataRecord.imag_dnii
        const imagRucc = dataRecord.imag_rucc
        const numeIden = dataRecord.nume_iden
        const codiCamp = dataRecord.codi_camp
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_gest_soli_reco/gest_soli_reco_imag`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden: numeIden,
              codi_soli: codiSoli,
              imag_form: imagForm,
              imag_reci: imagReci,
              imag_dnii: imagDnii,
              imag_rucc: imagRucc,
              codi_camp: codiCamp,
            },
          })
          const rFormato = await servicio.data.data_form
          const rReciboServicio = await servicio.data.data_reci
          const rDni = await servicio.data.data_dnii
          const rFormatoRuc = await servicio.data.data_rucc
          if (rFormato !== '') {
            this.srcFormato = rFormato
          }
          if (rReciboServicio !== '') {
            this.srcReciboServicio = rReciboServicio
          }
          if (rDni !== '') {
            this.srcDni = rDni
          }
          if (rFormatoRuc !== '') {
            this.srcFormatoRuc = rFormatoRuc
          }
          document.body.style.overflow = 'hidden'
          document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
          this.popupActiveImagen = true
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
    proc_come_gest_soli_reco_foto_erro(event) {
      // eslint-disable-next-line
      event.target.src = require('@/assets/images/portrait/small/sin_imagen.png')
    },
    proc_come_gest_soli_reco_foto(codiFoto, direFoto) {
      switch (codiFoto) {
        case '1':
          this.popupTituloDetalle = 'Formato'
          this.popupAltDetalle = 'Formato'
          break
        case '2':
          this.popupTituloDetalle = 'Recibo Servicio'
          this.popupAltDetalle = 'Recibo Servicio'
          break
        case '3':
          this.popupTituloDetalle = 'Dni'
          this.popupAltDetalle = 'Dni'
          break
        case '4':
          this.popupTituloDetalle = 'Formato Ruc'
          this.popupAltDetalle = 'Formato Ruc'
          break
        default:
      }
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
      this.popupFotoDetalle = direFoto
      this.popupActiveDetalle = true
    },
    async proc_come_gest_soli_reco_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.proc_come_gest_soli_reco_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/proc_come_gest_soli_reco/gest_soli_reco_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.proc_come_gest_soli_reco_grid_glob.exportdata(
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
    proc_come_gest_soli_reco_deta(event) {
      this.seleccionEstado = null
      this.observacionGestion = ''
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
      this.popupActive = true
      const { args } = event
      const row = args.rowindex
      const dataRecord = this.$refs.proc_come_gest_soli_reco_grid_glob.getrowdata(
        row,
      )
      this.codigoSolicitud = dataRecord.cons_soli
    },
    proc_come_gest_soli_reco_limp_grab() {
      this.seleccionEstado = null
      this.observacionGestion = ''
    },
    async proc_come_gest_soli_reco_grab() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      if (this.seleccionEstado === null || this.seleccionEstado.length === 0) {
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
              text: 'Campo estado obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else if (this.observacionGestion.trim() === '') {
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
              text: 'Campo observación obligatorio.',
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
            url: `${store.state.app.webService}/sami_v1/proc_come_gest_soli_reco/gest_soli_reco_grab`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_soli: this.codigoSolicitud,
              esta_reco: this.seleccionEstado.trim(),
              obse_reco: this.observacionGestion.trim(),
            },
          })
          let data = await servicio.data.data
          data = data.toLowerCase()
          data = data.charAt(0).toUpperCase() + data.slice(1)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'CheckCircleIcon',
                variant: 'success',
                text: data,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
          this.popupActive = false
          this.proc_come_gest_soli_reco_limp_grab()
          setTimeout(() => {
            this.$vs.loading.close()
            this.proc_come_gest_soli_reco_gene()
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
    proc_come_gest_soli_reco_cerr() {
      document.body.style.overflow = 'visible'
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
      // eslint-disable-next-line
      this.srcFormato = require('@/assets/images/portrait/small/sin_imagen.png')
      // eslint-disable-next-line
      this.srcReciboServicio = require('@/assets/images/portrait/small/sin_imagen.png')
      // eslint-disable-next-line
      this.srcDni = require('@/assets/images/portrait/small/sin_imagen.png')
      // eslint-disable-next-line
      this.srcFormatoRuc = require('@/assets/images/portrait/small/sin_imagen.png')
    },
  },
}
</script>
<style lang="scss"></style>
