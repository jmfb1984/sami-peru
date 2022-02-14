<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="proc_come_gest_posi_ases_gene()"
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
        @click="proc_come_gest_posi_ases_limp()"
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
        @click="proc_come_gest_posi_ases_gene()"
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
        @click="proc_come_gest_posi_ases_exce()"
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
        @click="proc_come_gest_posi_ases_limp()"
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
            ref="proc_come_gest_posi_ases_grid_glob"
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
            @rowdoubleclick="proc_come_gest_posi_ases_deta($event)"
          />
        </b-card>
      </b-col>
    </b-row>
    <vs-popup
      title="Gestionar Posible Asesora"
      :active.sync="popupActive"
      :background-color-popup="clasePopUp"
      @close="proc_come_gest_posi_ases_cerr()"
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
                  class=""
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
                <vs-textarea
                  v-model="observacionGestion"
                  counter="100"
                  :counter-danger.sync="counterDanger"
                />
              </b-col>
            </b-row>
            <div class="d-flex align-items-center justify-content-end">
              <b-button
                variant="primary"
                class="ml-1"
                @click="proc_come_gest_posi_ases_grab()"
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
                @click="proc_come_gest_posi_ases_limp_grab()"
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
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      popupActive: false,
      observacionGestion: '',
      counterDanger: false,
      dataEstado: ['Si contactada(o)', 'No contactada(o)'],
      seleccionEstado: [],
      consecutivoPosibleAsesora: 0,
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
        { name: 'cons_posi', type: 'integer' },
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
        { name: 'tele_ases', type: 'string' },
        { name: 'corr_ases', type: 'string' },
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
    this.proc_come_gest_posi_ases_visi()
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
      let teleAsesGlob = ''
      let corrAsesGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiCampGlob = '20'
          codiZonaGlob = '15'
          numeRefeGlob = '20'
          nombRefeGlob = '40'
          numeIdenGlob = '20'
          nombAsesGlob = '40'
          nombDptoGlob = '20'
          nombProvGlob = '20'
          nombDistGlob = '20'
          direAsesGlob = '50'
          teleAsesGlob = '20'
          corrAsesGlob = '25'
          break
        case 'sm':
          codiCampGlob = '20'
          codiZonaGlob = '15'
          numeRefeGlob = '20'
          nombRefeGlob = '40'
          numeIdenGlob = '20'
          nombAsesGlob = '40'
          nombDptoGlob = '20'
          nombProvGlob = '20'
          nombDistGlob = '20'
          direAsesGlob = '50'
          teleAsesGlob = '20'
          corrAsesGlob = '25'
          break
        case 'md':
          codiCampGlob = '15'
          codiZonaGlob = '10'
          numeRefeGlob = '15'
          nombRefeGlob = '35'
          numeIdenGlob = '15'
          nombAsesGlob = '35'
          nombDptoGlob = '15'
          nombProvGlob = '15'
          nombDistGlob = '15'
          direAsesGlob = '40'
          teleAsesGlob = '15'
          corrAsesGlob = '20'
          break
        default:
          codiCampGlob = '7'
          codiZonaGlob = '5'
          numeRefeGlob = '10'
          nombRefeGlob = '20'
          numeIdenGlob = '10'
          nombAsesGlob = '20'
          nombDptoGlob = '10'
          nombProvGlob = '10'
          nombDistGlob = '10'
          direAsesGlob = '25'
          teleAsesGlob = '10'
          corrAsesGlob = '15'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Código',
          dataField: 'cons_posi',
          hidden: true,
        },
        {
          text: 'Campaña',
          dataField: 'codi_camp',
          width: `${codiCampGlob}%`,
          cellsalign: 'center',
          align: 'center',
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
        },
        {
          text: 'Nombre(s) y Apellido(s) Referente',
          dataField: 'nomb_refe',
          width: `${nombRefeGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'DNI - RUC Referido',
          dataField: 'nume_iden',
          width: `${numeIdenGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Nombre(s) y Apellido(s) Referido',
          dataField: 'nomb_ases',
          width: `${nombAsesGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Departamento',
          dataField: 'nomb_dpto',
          width: `${nombDptoGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Provincia',
          dataField: 'nomb_prov',
          width: `${nombProvGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Distrito',
          dataField: 'nomb_dist',
          width: `${nombDistGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Dirección',
          dataField: 'dire_ases',
          width: `${direAsesGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Teléfono',
          dataField: 'tele_ases',
          width: `${teleAsesGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Correo Electrónico',
          dataField: 'corr_ases',
          width: `${corrAsesGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
      ]
      if (
        typeof this.$refs.proc_come_gest_posi_ases_grid_glob !== 'undefined'
      ) {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.proc_come_gest_posi_ases_grid_glob.height = this.height
        this.$refs.proc_come_gest_posi_ases_grid_glob.columns = this.columnsGlobal
      }
    },
    proc_come_gest_posi_ases_limp() {
      this.$refs.proc_come_gest_posi_ases_grid_glob.clear()
      this.$refs.proc_come_gest_posi_ases_grid_glob.clearselection()
    },
    async proc_come_gest_posi_ases_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'proc_come_gest_posi_ases',
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
    async proc_come_gest_posi_ases_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.proc_come_gest_posi_ases_limp()

      try {
        const userData = JSON.parse(localStorage.getItem('userData'))
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_gest_posi_ases/gest_posi_ases_gene`,
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
        this.$refs.proc_come_gest_posi_ases_grid_glob.updatebounddata('cells')
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
    async proc_come_gest_posi_ases_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.proc_come_gest_posi_ases_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/proc_come_gest_posi_ases/gest_posi_ases_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.proc_come_gest_posi_ases_grid_glob.exportdata(
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
    proc_come_gest_posi_ases_deta(event) {
      this.seleccionEstado = null
      this.observacionGestion = ''
      document.body.style.overflow = 'hidden'
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
      this.popupActive = true
      const { args } = event
      const row = args.rowindex
      const dataRecord = this.$refs.proc_come_gest_posi_ases_grid_glob.getrowdata(
        row,
      )
      this.consecutivoPosibleAsesora = dataRecord.cons_posi
    },
    proc_come_gest_posi_ases_limp_grab() {
      this.seleccionEstado = null
      this.observacionGestion = ''
    },
    async proc_come_gest_posi_ases_grab() {
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
            url: `${store.state.app.webService}/sami_v1/proc_come_gest_posi_ases/gest_posi_ases_grab`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              cons_posi: this.consecutivoPosibleAsesora,
              esta_zona: this.seleccionEstado.trim(),
              obse_zona: this.observacionGestion.trim(),
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
          document.body.style.overflow = 'visible'
          document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
          this.popupActive = false
          this.proc_come_gest_posi_ases_limp_grab()
          setTimeout(() => {
            this.$vs.loading.close()
            this.proc_come_gest_posi_ases_gene()
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
    proc_come_gest_posi_ases_cerr() {
      document.body.style.overflow = 'visible'
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
    },
  },
}
</script>
<style lang="scss"></style>
