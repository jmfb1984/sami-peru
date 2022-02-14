<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="proc_come_asig_posi_ases_gene()"
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
        block
        class="mb-1"
        @click="proc_come_asig_posi_ases_apro()"
      >
        <feather-icon
          icon="UserCheckIcon"
          class="mr-50"
        />
        <span class="">
          Aprobar
        </span>
      </b-button>
      <b-button
        variant="danger"
        block
        class="mb-1"
        @click="proc_come_asig_posi_ases_rech()"
      >
        <feather-icon
          icon="UserXIcon"
          class="mr-50"
        />
        Rechazar
      </b-button>
      <b-button
        variant="secondary"
        block
        class="mb-1"
        @click="proc_come_asig_posi_ases_arch()"
      >
        <feather-icon
          icon="UploadIcon"
          class="mr-50"
        />
        <span class="">
          Archivo
        </span>
      </b-button>
      <b-button
        variant="danger"
        block
        @click="proc_come_asig_posi_ases_limp()"
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
        @click="proc_come_asig_posi_ases_gene()"
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
        class="ml-1"
        @click="proc_come_asig_posi_ases_apro()"
      >
        <feather-icon
          icon="UserCheckIcon"
          class="mr-50"
        />
        <span class="">
          Aprobar
        </span>
      </b-button>
      <b-button
        variant="danger"
        class="ml-1"
        @click="proc_come_asig_posi_ases_rech()"
      >
        <feather-icon
          icon="UserXIcon"
          class="mr-50"
        />
        Rechazar
      </b-button>
      <b-button
        variant="secondary"
        class="ml-1"
        @click="proc_come_asig_posi_ases_arch()"
      >
        <feather-icon
          icon="UploadIcon"
          class="mr-50"
        />
        <span class="">
          Archivo
        </span>
      </b-button>
      <b-button
        variant="danger"
        class="ml-1"
        @click="proc_come_asig_posi_ases_limp()"
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
            ref="proc_come_asig_posi_ases_grid_glob"
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
            :selectionmode="'checkbox'"
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
            :editable="true"
            :scrollmode="'logical'"
            @cellendedit="proc_come_asig_posi_ases_codi_zona($event)"
          />
        </b-card>
      </b-col>
    </b-row>
    <vs-popup
      title="Cargar Posibles Asesoras"
      :active.sync="popupActive"
      :background-color-popup="clasePopUp"
      @close="proc_come_asig_posi_ases_cerr()"
    >
      <b-row>
        <b-col>
          <b-card class="mb-0">
            <b-row>
              <b-col>
                <div class="w-full text-center">
                  <h5>
                    Archivo txt delimintado por coma(,) con el siguiente formato:
                  </h5>
                  <small>
                    DNI - RUC Referido, Nombre(s) Referido, Apellido(s) Referido, Departamento, Provincia, Distrito, Dirección, Referencia, Teléfono, Correo Electrónico, DNI - RUC Referente, Medio Contacto, Zona, Sector
                  </small>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <div class="w-full text-center mt-1">
                  <input
                    ref="uploadInput"
                    type="file"
                    class="hidden"
                    accept=".txt"
                    @change="handleFileUpload()"
                  >
                  <b-button
                    variant="primary"
                    class="ml-1"
                    @click="$refs.uploadInput.click()"
                  >
                    <feather-icon
                      icon="UploadIcon"
                      class="mr-50 text-black"
                    />
                    <span class="text-black">
                      Subir Archivo
                    </span>
                  </b-button>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </vs-popup>

    <vs-popup
      title="Observación Posible Asesora"
      :active.sync="popupActiveObservacion"
      :background-color-popup="clasePopUp"
      @close="proc_come_asig_posi_ases_cerr()"
    >
      <b-row>
        <b-col>
          <b-card>
            <b-row class="mb-1">
              <b-col>
                <h3 class="mb-2">
                  Observación :
                </h3>
                <vs-textarea
                  v-model="observacionPosibleAsesora"
                  counter="200"
                  :counter-danger.sync="counterDanger"
                />
              </b-col>
            </b-row>
            <div class="d-flex align-items-center justify-content-end">
              <b-button
                variant="primary"
                class="ml-1"
                @click="proc_come_asig_posi_ases_regi_obse()"
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
                @click="proc_come_asig_posi_ases_limp_obse()"
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
  BRow, BCol, BButton, BCard,
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
    // eslint-disable-next-line vue/no-unused-components
    JqxGrid,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      file: null,
      popupActive: false,
      popupActiveObservacion: false,
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      observacionPosibleAsesora: '',
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
        { name: 'codi_camp', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'nume_refe', type: 'string' },
        { name: 'nomb_refe', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'nomb_ases', type: 'string' },
        { name: 'nomb_dpto', type: 'string' },
        { name: 'nomb_prov', type: 'string' },
        { name: 'nomb_dist', type: 'string' },
        { name: 'dire_ases', type: 'string' },
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
    this.proc_come_asig_posi_ases_visi()
  },
  created() {
    this.handleWindowResize()
  },
  methods: {
    handleWindowResize() {
      let codiCampGlob = ''
      let codiZonaGlob = ''
      let numeRefeGlob = ''
      let nombRefeGlob = ''
      let numeIdenGlob = ''
      let nombAsesGlob = ''
      let nombDptoGlob = ''
      let nombProvGlob = ''
      let nombDistGlob = ''
      let direAsesGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiCampGlob = '20'
          codiZonaGlob = '15'
          numeRefeGlob = '20'
          nombRefeGlob = '60'
          numeIdenGlob = '20'
          nombAsesGlob = '50'
          nombDptoGlob = '20'
          nombProvGlob = '20'
          nombDistGlob = '20'
          direAsesGlob = '60'
          break
        case 'sm':
          codiCampGlob = '20'
          codiZonaGlob = '15'
          numeRefeGlob = '20'
          nombRefeGlob = '50'
          numeIdenGlob = '20'
          nombAsesGlob = '50'
          nombDptoGlob = '20'
          nombProvGlob = '20'
          nombDistGlob = '20'
          direAsesGlob = '50'
          break
        case 'md':
          codiCampGlob = '15'
          codiZonaGlob = '10'
          numeRefeGlob = '15'
          nombRefeGlob = '40'
          numeIdenGlob = '15'
          nombAsesGlob = '40'
          nombDptoGlob = '15'
          nombProvGlob = '15'
          nombDistGlob = '15'
          direAsesGlob = '40'
          break
        default:
          codiCampGlob = '7'
          codiZonaGlob = '5'
          numeRefeGlob = '10'
          nombRefeGlob = '20'
          numeIdenGlob = '10'
          nombAsesGlob = '20'
          nombDptoGlob = '8'
          nombProvGlob = '8'
          nombDistGlob = '10'
          direAsesGlob = '25'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Campaña',
          dataField: 'codi_camp',
          width: `${codiCampGlob}%`,
          cellsalign: 'center',
          align: 'center',
          editable: false,
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: `${codiZonaGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'DNI - RUC Referente',
          dataField: 'nume_refe',
          width: `${numeRefeGlob}%`,
          cellsalign: 'center',
          align: 'center',
          editable: false,
        },
        {
          text: 'Nombre(s) y Apellido(s) Referente',
          dataField: 'nomb_refe',
          width: `${nombRefeGlob}%`,
          cellsalign: 'left',
          align: 'center',
          editable: false,
        },
        {
          text: 'DNI - RUC Referido',
          dataField: 'nume_iden',
          width: `${numeIdenGlob}%`,
          cellsalign: 'center',
          align: 'center',
          editable: false,
        },
        {
          text: 'Nombre(s) y Apellido(s) Referido',
          dataField: 'nomb_ases',
          width: `${nombAsesGlob}%`,
          cellsalign: 'left',
          align: 'center',
          editable: false,
        },
        {
          text: 'Departamento',
          dataField: 'nomb_dpto',
          width: `${nombDptoGlob}%`,
          cellsalign: 'left',
          align: 'center',
          editable: false,
        },
        {
          text: 'Provincia',
          dataField: 'nomb_prov',
          width: `${nombProvGlob}%`,
          cellsalign: 'left',
          align: 'center',
          editable: false,
        },
        {
          text: 'Distrito',
          dataField: 'nomb_dist',
          width: `${nombDistGlob}%`,
          cellsalign: 'left',
          align: 'center',
          editable: false,
        },
        {
          text: 'Dirección',
          dataField: 'dire_ases',
          width: `${direAsesGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
      ]
      if (
        typeof this.$refs.proc_come_asig_posi_ases_grid_glob !== 'undefined'
      ) {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.proc_come_asig_posi_ases_grid_glob.height = this.height
        this.$refs.proc_come_asig_posi_ases_grid_glob.columns = this.columnsGlobal
      }
    },
    async handleFileUpload() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      // eslint-disable-next-line
      this.file = this.$refs.uploadInput.files[0]
      const data = new FormData()
      data.append('fileToUpload', this.file)
      data.append('codi_usua', this.$session.get('codigoUsuario'))
      data.append('codi_acce', this.userData.codigoAcceso)
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_asig_posi_ases/asig_posi_ases_arch`,
          timeout: `${1000 * store.state.app.timeout}`,
          data,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        this.file = null
        this.$refs.uploadInput.value = null
        document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
        this.popupActive = false
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'CheckCircleIcon',
              variant: 'success',
              text: 'Registro de posibles asesoras satisfactorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
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
    async proc_come_asig_posi_ases_apro() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const rowindexes = this.$refs.proc_come_asig_posi_ases_grid_glob.getselectedrowindexes()
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
              text: 'Debe de seleccionar una posible asesora para aprobar.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        let dataNumeIden = ''
        let i = 0
        let dataRecord = null
        let numeIden = ''
        let codiZona = ''
        let codiCamp = ''
        let validacion = ''
        for (i = 0; i < rowindexes.length; i += 1) {
          if (validacion === '') {
            dataRecord = this.$refs.proc_come_asig_posi_ases_grid_glob.getrowdata(
              rowindexes[i],
            )
            numeIden = dataRecord.nume_iden
            codiCamp = dataRecord.codi_camp
            codiZona = dataRecord.codi_zona
            if (codiCamp === '' || codiZona === '') {
              validacion = `Campo campaña o zona obligatorio para el dni - ruc ${numeIden}`
            }
            dataNumeIden = `${dataNumeIden}'${numeIden}',`
          }
        }
        if (validacion === '') {
          dataNumeIden = dataNumeIden.slice(0, -1)
          try {
            const servicio = await axios({
              method: 'post',
              url: `${store.state.app.webService}/sami_v1/proc_come_asig_posi_ases/asig_posi_ases_apro`,
              timeout: `${1000 * store.state.app.timeout}`,
              data: {
                codi_usua: this.$session.get('codigoUsuario'),
                codi_acce: this.userData.codigoAcceso,
                nume_iden: dataNumeIden,
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
            setTimeout(() => {
              this.$vs.loading.close()
              this.proc_come_asig_posi_ases_gene()
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
        } else {
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          validacion = validacion.toLowerCase()
          validacion = validacion.charAt(0).toUpperCase() + validacion.slice(1)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
                text: validacion,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
        }
      }
    },
    proc_come_asig_posi_ases_rech() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const rowindexes = this.$refs.proc_come_asig_posi_ases_grid_glob.getselectedrowindexes()
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
              text: 'Debe de seleccionar una posible asesora para rechazar.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
        this.popupActiveObservacion = true
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
      }
    },
    proc_come_asig_posi_ases_arch() {
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
      this.popupActive = true
    },
    async proc_come_asig_posi_ases_regi_obse() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const rowindexes = this.$refs.proc_come_asig_posi_ases_grid_glob.getselectedrowindexes()
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
              text: 'Debe de seleccionar una posible asesora para aprobar.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else if (this.observacionPosibleAsesora.trim() === '') {
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
        let dataNumeIden = ''
        let i = 0
        let dataRecord = ''
        let numeIden = ''
        for (i = 0; i < rowindexes.length; i += 1) {
          dataRecord = this.$refs.proc_come_asig_posi_ases_grid_glob.getrowdata(
            rowindexes[i],
          )
          numeIden = dataRecord.nume_iden
          dataNumeIden = `${dataNumeIden}'${numeIden}',`
        }
        dataNumeIden = dataNumeIden.slice(0, -1)
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_asig_posi_ases/asig_posi_ases_rech`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden: dataNumeIden,
              obse_rech: this.observacionPosibleAsesora.trim(),
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
          this.popupActiveObservacion = false
          this.proc_come_asig_posi_ases_limp_obse()
          setTimeout(() => {
            this.$vs.loading.close()
            this.proc_come_asig_posi_ases_gene()
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
    proc_come_asig_posi_ases_limp_obse() {
      this.observacionPosibleAsesora = ''
    },
    proc_come_asig_posi_ases_limp() {
      this.$refs.proc_come_asig_posi_ases_grid_glob.clear()
      this.$refs.proc_come_asig_posi_ases_grid_glob.clearselection()
      this.file = null
    },
    async proc_come_asig_posi_ases_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'proc_come_asig_posi_ases',
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
    async proc_come_asig_posi_ases_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.proc_come_asig_posi_ases_limp()
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_asig_posi_ases/asig_posi_ases_gene`,
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
        this.$refs.proc_come_asig_posi_ases_grid_glob.updatebounddata('cells')
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
    proc_come_asig_posi_ases_cerr() {
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
    },
    async proc_come_asig_posi_ases_codi_zona(event) {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const { args } = event
      const rowIndex = args.rowindex
      const numeIden = this.$refs.proc_come_asig_posi_ases_grid_glob.getcellvaluebyid(rowIndex, 'nume_iden')
      const codiZona = args.value
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_asig_posi_ases/asig_posi_ases_actu`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            nume_iden: numeIden,
            codi_zona: codiZona,
          },
        })
        let data = await servicio.data.data
        if (data !== '') {
          data = data.toLowerCase()
          data = data.charAt(0).toUpperCase() + data.slice(1)
          this.$refs.proc_come_asig_posi_ases_grid_glob.clearselection()
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
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
        }
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
    async proc_come_asig_posi_ases_dire_ases(event) {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const { args } = event
      const rowIndex = args.rowindex
      const numeIden = this.$refs.proc_come_asig_posi_ases_grid_glob.getcellvaluebyid(rowIndex, 'nume_iden')
      const direAses = args.value
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_asig_posi_ases/asig_posi_ases_actu_dire`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            nume_iden: numeIden,
            dire_ases: direAses,
          },
        })
        let data = await servicio.data.data
        if (data !== '') {
          data = data.toLowerCase()
          data = data.charAt(0).toUpperCase() + data.slice(1)
          this.$refs.proc_come_asig_posi_ases_grid_glob.clearselection()
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
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
        }
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
  },
}
</script>
<style lang="scss"></style>
