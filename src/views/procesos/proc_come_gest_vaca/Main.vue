<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="proc_come_gest_vaca_gene()"
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
        @click="proc_come_gest_vaca_apro()"
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
        @click="proc_come_gest_vaca_rech()"
      >
        <feather-icon
          icon="UserXIcon"
          class="mr-50"
        />
        Rechazar
      </b-button>
      <b-button
        variant="danger"
        block
        @click="proc_come_gest_vaca_limp()"
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
        @click="proc_come_gest_vaca_gene()"
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
        @click="proc_come_gest_vaca_apro()"
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
        @click="proc_come_gest_vaca_rech()"
      >
        <feather-icon
          icon="UserXIcon"
          class="mr-50"
        />
        Rechazar
      </b-button>
      <b-button
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="proc_come_gest_vaca_exce()"
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
        @click="proc_come_gest_vaca_limp()"
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
            ref="proc_come_gest_vaca_grid_glob"
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
            :scrollmode="'logical'"
            :selectionmode="'singlerow'"
            :editable="true"
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
import 'animate.css'
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
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      localization: store.state.app.localizationobj,
    }
  },
  computed: {
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
        { name: 'cons_vaca', type: 'number' },
        { name: 'codi_zona', type: 'string' },
        { name: 'nomb_vend', type: 'string' },
        { name: 'fech_inic', type: 'string' },
        { name: 'fech_fina', type: 'string' },
        { name: 'nume_diaa', type: 'number' },
        { name: 'zona_reem', type: 'string' },
        { name: 'obse_modi', type: 'string' },
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
    this.proc_come_gest_vaca_visi()
  },
  created() {
    this.handleWindowResize()
  },
  methods: {
    handleWindowResize() {
      let consVacaGlob = ''
      let codiZonaGlob = ''
      let fechInicGlob = ''
      let fechFinaGlob = ''
      let numeDiaaGlob = ''
      let nombVendGlob = ''
      let zonaReemGlob = ''
      let obseModiGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          consVacaGlob = '10'
          codiZonaGlob = '20'
          fechInicGlob = '20'
          fechFinaGlob = '20'
          numeDiaaGlob = '20'
          nombVendGlob = '60'
          zonaReemGlob = '20'
          obseModiGlob = '50'
          break
        case 'sm':
          consVacaGlob = '10'
          codiZonaGlob = '20'
          fechInicGlob = '20'
          fechFinaGlob = '20'
          numeDiaaGlob = '20'
          nombVendGlob = '60'
          zonaReemGlob = '20'
          obseModiGlob = '50'
          break
        case 'md':
          consVacaGlob = '5'
          codiZonaGlob = '8'
          fechInicGlob = '9'
          fechFinaGlob = '9'
          numeDiaaGlob = '5'
          nombVendGlob = '60'
          zonaReemGlob = '10'
          obseModiGlob = '44'
          break
        default:
          consVacaGlob = '5'
          codiZonaGlob = '8'
          fechInicGlob = '9'
          fechFinaGlob = '9'
          numeDiaaGlob = '6'
          nombVendGlob = '27'
          zonaReemGlob = '10'
          obseModiGlob = '26'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Código',
          dataField: 'cons_vaca',
          width: `${consVacaGlob}%`,
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
          editable: false,
        },
        {
          text: 'Nombre(s) y Apellido(s)',
          dataField: 'nomb_vend',
          width: `${nombVendGlob}%`,
          cellsalign: 'left',
          align: 'center',
          editable: false,
        },
        {
          text: 'Fecha inicial',
          dataField: 'fech_inic',
          width: `${fechInicGlob}%`,
          cellsalign: 'center',
          align: 'center',
          editable: false,
        },
        {
          text: 'Fecha final',
          dataField: 'fech_fina',
          width: `${fechFinaGlob}%`,
          cellsalign: 'center',
          align: 'center',
          editable: false,
        },
        {
          text: 'Dia(s)',
          dataField: 'nume_diaa',
          width: `${numeDiaaGlob}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'N',
          editable: false,
        },
        {
          text: 'Reemplazo?',
          dataField: 'zona_reem',
          width: `${zonaReemGlob}%`,
          cellsalign: 'center',
          align: 'center',
          columntype: 'combobox',
          createeditor(row, column, editor) {
            // assign a new data source to the combobox.
            const list = ['No', 'Backup', 'Lider']
            editor.jqxComboBox({ autoDropDownHeight: true, source: list, promptText: 'Seleccionar:' })
          },
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
        typeof this.$refs.proc_come_gest_vaca_grid_glob !== 'undefined'
      ) {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.proc_come_gest_vaca_grid_glob.height = this.height
        this.$refs.proc_come_gest_vaca_grid_glob.columns = this.columnsGlobal
      }
    },
    async proc_come_gest_vaca_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'proc_come_gest_vaca',
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
    async proc_come_gest_vaca_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.proc_come_gest_vaca_limp()
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_gest_vaca/gest_vaca_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        this.sourceGlobal.localdata = await servicio.data.data_glob
        this.sourceGlobal.datatype = 'json'
        this.$refs.proc_come_gest_vaca_grid_glob.updatebounddata('cells')
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
    async proc_come_gest_vaca_apro() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const rowindex = this.$refs.proc_come_gest_vaca_grid_glob.getselectedrowindex()
      if (rowindex < 0) {
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
              text: 'Debe de seleccionar una solicitud para aprobar.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        const dataRecord = this.$refs.proc_come_gest_vaca_grid_glob.getrowdata(rowindex)
        const consVaca = dataRecord.cons_vaca
        const zonaReem = dataRecord.zona_reem
        const zonaObse = dataRecord.obse_modi
        if (zonaReem === '') {
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
                text: 'Debe de seleccionar si tiene reemplazo.',
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
        } else if (zonaReem !== 'No' && zonaObse === '') {
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
                text: 'Debe de ingresar observación.',
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
              url: `${store.state.app.webService}/sami_v1/proc_come_gest_vaca/gest_vaca_apro`,
              timeout: `${1000 * store.state.app.timeout}`,
              data: {
                codi_usua: this.$session.get('codigoUsuario'),
                codi_acce: this.userData.codigoAcceso,
                cons_vaca: consVaca,
                zona_reem: zonaReem,
                obse_modi: zonaObse,
              },
            })
            let data = await servicio.data.data_glob
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
              this.proc_come_gest_vaca_gene()
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
      }
    },
    async proc_come_gest_vaca_rech() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const rowindex = this.$refs.proc_come_gest_vaca_grid_glob.getselectedrowindex()
      if (rowindex < 0) {
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
              text: 'Debe de seleccionar una solicitud para rechazar.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        const dataRecord = this.$refs.proc_come_gest_vaca_grid_glob.getrowdata(rowindex)
        const consVaca = dataRecord.cons_vaca
        const zonaReem = dataRecord.zona_reem
        const zonaObse = dataRecord.obse_modi
        if (zonaReem !== '') {
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
                text: 'No debe de seleccionar si tiene reemplazo.',
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
        } else if (zonaObse === '') {
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
                text: 'Debe de ingresar observación.',
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
              url: `${store.state.app.webService}/sami_v1/proc_come_gest_vaca/gest_vaca_rech`,
              timeout: `${1000 * store.state.app.timeout}`,
              data: {
                codi_usua: this.$session.get('codigoUsuario'),
                codi_acce: this.userData.codigoAcceso,
                cons_vaca: consVaca,
                obse_modi: zonaObse,
              },
            })
            let data = await servicio.data.data_glob
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
              this.proc_come_gest_vaca_gene()
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
      }
    },
    async proc_come_gest_vaca_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.proc_come_gest_vaca_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/proc_come_gest_vaca/gest_vaca_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.proc_come_gest_vaca_grid_glob.exportdata(
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
    proc_come_gest_vaca_limp() {
      this.$refs.proc_come_gest_vaca_grid_glob.clear()
      this.$refs.proc_come_gest_vaca_grid_glob.clearselection()
    },
  },
}
</script>
