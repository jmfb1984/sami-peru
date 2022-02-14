<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="proc_come_soli_vaca_open()"
      >
        <feather-icon
          icon="CheckCircleIcon"
          class="mr-50 text-black"
        />
        <span class="text-black">
          Nueva solicitud
        </span>
      </b-button>
    </div>
    <div class="d-none d-md-flex align-items-center justify-content-end mb-2">
      <b-button
        variant="primary"
        class="ml-1"
        @click="proc_come_soli_vaca_open()"
      >
        <feather-icon
          icon="CheckCircleIcon"
          class="mr-50 text-black"
        />
        <span class="text-black">
          Nueva solicitud
        </span>
      </b-button>
    </div>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="proc_come_soli_vaca_grid_glob"
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
          />
        </b-card>
      </b-col>
    </b-row>
    <b-modal
      ref="ref-solicitud-vacaciones"
      hide-footer
      scrollable
      no-close-on-backdrop
      :modal-class="claseModal"
      size="lg"
      title="Solicitud vacaciones"
      @show="proc_come_soli_vaca_init"
      @hidden="proc_come_soli_vaca_gene"
    >
      <div class="d-block d-md-none mb-2">
        <b-button
          variant="primary"
          block
          class="mb-1"
          @click="proc_come_soli_vaca_regi()"
        >
          <feather-icon
            icon="SaveIcon"
            class="mr-50 text-black"
          />
          <span class="text-black">
            Registrar
          </span>
        </b-button>
        <b-button
          variant="danger"
          block
          @click="proc_come_soli_vaca_limp()"
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
          @click="proc_come_soli_vaca_regi()"
        >
          <feather-icon
            icon="SaveIcon"
            class="mr-50 text-black"
          />
          <span class="text-black">
            Registrar
          </span>
        </b-button>
        <b-button
          variant="danger"
          class="ml-1"
          @click="proc_come_soli_vaca_limp()"
        >
          <feather-icon
            icon="FileIcon"
            class="mr-50"
          />
          Limpiar
        </b-button>
      </div>
      <b-card>
        <b-row class="ml-0 mr-0">
          <b-col
            class="border-bottom d-flex align-items-between flex-column py-50 mb-1"
          >
            <h4>Información general</h4>
          </b-col>
        </b-row>
        <b-row class="ml-0 mr-0">
          <b-col
            lg="2"
            md="12"
            class="mb-1 align-self-center"
          >
            Fecha ingreso <small>(dd/mm/aaaa)</small>
          </b-col>
          <b-col
            lg="4"
            md="12"
            class="mb-1"
          >
            <b-form-input
              ref="refFechaIngreso"
              v-model="fechaIngreso"
              placeholder="Fecha ingreso"
              disabled="disabled"
            />
          </b-col>
          <b-col
            lg="2"
            md="12"
            class="mb-1 align-self-center"
          >
            Dias disponible(s)
          </b-col>
          <b-col
            lg="2"
            md="12"
            class="mb-1"
          >
            <b-form-input
              ref="refPendienteCumplido"
              v-model="pendienteCumplido"
              placeholder="Pendiente cumplido"
              disabled="disabled"
            />
          </b-col>
        </b-row>
      </b-card>
      <b-card>
        <b-row class="ml-0 mr-0">
          <b-col
            class="border-bottom d-flex align-items-between flex-column py-50 mb-1"
          >
            <h4>Detalle solicitud</h4>
          </b-col>
        </b-row>
        <b-row class="ml-0 mr-0">
          <b-col
            lg="2"
            md="12"
            class="mb-1 align-self-center"
          >
            Fecha inicio
          </b-col>
          <b-col
            lg="4"
            md="12"
            class="mb-1"
          >
            <b-form-datepicker
              v-model="fechaInicio"
              selected-variant="primary"
              :min="min"
              :hide-header="true"
              placeholder="Fecha inicio"
              autocomplete="off"
              @input="proc_come_soli_vaca_fech_inic"
            />
          </b-col>
          <b-col
            lg="2"
            md="12"
            class="mb-1 align-self-center"
          >
            Fecha fin
          </b-col>
          <b-col
            lg="4"
            md="12"
            class="mb-1"
          >
            <b-form-datepicker
              v-model="fechaFin"
              selected-variant="primary"
              :min="minFin"
              :hide-header="true"
              placeholder="Fecha fin"
              autocomplete="off"
              @input="proc_come_soli_vaca_fech_fina"
            />
          </b-col>
        </b-row>
        <b-row class="ml-0 mr-0">
          <b-col
            lg="2"
            md="12"
            class="mb-1 align-self-center"
          >
            Nro días
          </b-col>
          <b-col
            lg="2"
            md="12"
            class="mb-1"
          >
            <b-form-spinbutton
              v-model="nroDia"
              placeholder="0"
              class="mb-1"
              disabled
            />
          </b-col>
        </b-row>
        <b-row class="ml-0 mr-0">
          <b-col
            lg="2"
            md="12"
            class="mb-1 align-self-center"
          >
            Aprobador
          </b-col>
          <b-col
            lg="4"
            md="12"
            class="mb-1"
          >
            <b-form-select
              ref="refAprobador"
              v-model="seleccionAprobador"
              :options="dataAprobador"
            />
          </b-col>
        </b-row>
      </b-card>
    </b-modal>
  </section>
</template>
<script>
import {
  BRow, BCol, BButton, BCard, BFormInput, BFormDatepicker, BFormSpinbutton, BFormSelect, BModal,
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
    BFormInput,
    BFormDatepicker,
    BFormSpinbutton,
    BFormSelect,
    BModal,
    // eslint-disable-next-line vue/no-unused-components
    JqxGrid,
  },
  data() {
    const now = new Date()
    now.setDate(1)
    now.setMonth(now.getMonth() + 1)
    const minDate = new Date(now)

    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      fechaIngreso: null,
      pendienteCumplido: null,
      fechaInicio: null,
      fechaFin: null,
      nroDia: 0,
      min: minDate,
      minFin: minDate,
      hoy: minDate,
      seleccionAprobador: null,
      dataAprobador: [
        { value: null, text: 'Seleccionar aprobador', disabled: true },
      ],
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      localization: store.state.app.localizationobj,
    }
  },
  computed: {
    clasePopUp() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return '#283046'
      }
      return ''
    },
    claseModal() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'modal-primary'
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
        { name: 'cons_vaca', type: 'number' },
        { name: 'codi_zona', type: 'string' },
        { name: 'fech_inic', type: 'string' },
        { name: 'fech_fina', type: 'string' },
        { name: 'nume_diaa', type: 'number' },
        { name: 'usua_apro', type: 'string' },
        { name: 'acti_esta', type: 'string' },
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
    this.proc_come_soli_vaca_visi()
    setTimeout(() => {
      this.proc_come_soli_vaca_gene()
    }, 1000)
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
      let actiEstaGlob = ''
      let usuaAproGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          consVacaGlob = '20'
          codiZonaGlob = '20'
          fechInicGlob = '20'
          fechFinaGlob = '20'
          numeDiaaGlob = '20'
          actiEstaGlob = '20'
          usuaAproGlob = '50'
          break
        case 'sm':
          consVacaGlob = '20'
          codiZonaGlob = '20'
          fechInicGlob = '20'
          fechFinaGlob = '20'
          numeDiaaGlob = '20'
          actiEstaGlob = '20'
          usuaAproGlob = '50'
          break
        case 'md':
          consVacaGlob = '10'
          codiZonaGlob = '15'
          fechInicGlob = '15'
          fechFinaGlob = '15'
          numeDiaaGlob = '10'
          actiEstaGlob = '15'
          usuaAproGlob = '50'
          break
        default:
          consVacaGlob = '10'
          codiZonaGlob = '10'
          fechInicGlob = '15'
          fechFinaGlob = '15'
          numeDiaaGlob = '10'
          actiEstaGlob = '10'
          usuaAproGlob = '30'
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
          cellsformat: 'N',
        },
        {
          text: 'Estado',
          dataField: 'acti_esta',
          width: `${actiEstaGlob}%`,
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
      ]
      if (
        typeof this.$refs.proc_come_soli_vaca_grid_glob !== 'undefined'
      ) {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.proc_come_soli_vaca_grid_glob.height = this.height
        this.$refs.proc_come_soli_vaca_grid_glob.columns = this.columnsGlobal
      }
    },
    async proc_come_soli_vaca_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'proc_come_soli_vaca',
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
    async proc_come_soli_vaca_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_soli_vaca/soli_vaca_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        this.sourceGlobal.localdata = await servicio.data.data_glob
        this.sourceGlobal.datatype = 'json'
        this.$refs.proc_come_soli_vaca_grid_glob.updatebounddata('cells')
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
    async proc_come_soli_vaca_init() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.proc_come_soli_vaca_limp()
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_soli_vaca/soli_vaca_init`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_zona: JSON.parse(this.userData.zonaUsuario),
          },
        })
        const data = await servicio.data
        this.fechaIngreso = data.data_glob.fech_ingr
        this.pendienteCumplido = data.data_glob.pend_cump
        if (Object.keys(data.data_deta).length > 0) {
          data.data_deta.forEach(e => {
            const aprobador = {}
            aprobador.value = e.codi_usua
            aprobador.text = e.nomb_terc
            this.dataAprobador.push(aprobador)
          })
          // eslint-disable-next-line
          this.seleccionAprobador = this.dataAprobador[1].value
        }
        setTimeout(() => {
          this.$vs.loading.close()
          if (this.pendienteCumplido === '0') {
            this.$refs['ref-solicitud-vacaciones'].hide()
            this.$toast(
              {
                component: ToastificationContent,
                props: {
                  title: 'Notificación',
                  icon: 'AlertTriangleIcon',
                  variant: 'danger',
                  text: 'Usuario no tiene vacaciones pendientes.',
                },
              },
              {
                position: 'bottom-right',
                timeout: 8000,
              },
            )
          }
        }, 500)
      } catch (error) {
        this.fechaIngreso = null
        this.pendienteCumplido = null
        this.dataAprobador = [
          { value: null, text: 'Seleccionar aprobador', disabled: true },
        ]
        this.seleccionAprobador = null
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
    proc_come_soli_vaca_fech_inic() {
      this.fechaFin = null
      this.minFin = this.fechaInicio
      this.nroDia = 0
    },
    proc_come_soli_vaca_fech_fina() {
      const day1 = new Date(this.fechaInicio)
      const day2 = new Date(this.fechaFin)
      if (day2.getDay() === 4) {
        this.$swal({
          title: 'Solicitud de vacaciones',
          text: 'No se puede escoger fecha final un dia viernes, se le autoseleccionará domingo como dia final',
          icon: 'warning',
          confirmButtonText: 'Aceptar',
          customClass: {
            confirmButton: 'btn btn-success',
          },
          showClass: {
            popup: 'animate__animated animate__bounceIn',
          },
          buttonsStyling: false,
        }).then(result => {
          if (result.isConfirmed) {
            this.fechaFin = new Date(day2.setDate(day2.getDate() + 3))
            const difference = Math.abs(day2 - day1)
            const days = difference / (1000 * 3600 * 24)
            this.nroDia = days
          }
        })
      } else {
        const difference = Math.abs(day2 - day1)
        const days = difference / (1000 * 3600 * 24)
        this.nroDia = days + 1
      }
    },
    proc_come_soli_vaca_limp() {
      this.fechaInicio = null
      this.fechaFin = null
      this.min = this.hoy
      this.minFin = this.hoy
      this.nroDia = 0
      this.seleccionAprobador = null
      this.dataAprobador = [
        { value: null, text: 'Seleccionar aprobador', disabled: true },
      ]
    },
    proc_come_soli_vaca_open() {
      this.$refs['ref-solicitud-vacaciones'].show()
    },
    async proc_come_soli_vaca_regi() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      let mensaje = ''
      if (this.fechaIngreso === null) {
        mensaje = 'Error campo información adicional obligatorio.'
      } else if (this.fechaInicio === null) {
        mensaje = 'Error campo fecha inicio obligatorio.'
      } else if (this.fechaFin === null) {
        mensaje = 'Error campo fecha fin obligatorio.'
      } else if (this.seleccionAprobador === null) {
        mensaje = 'Error campo aprobador obligatorio.'
      // eslint-disable-next-line radix
      } else if (parseInt(this.nroDia) > parseInt(this.pendienteCumplido)) {
        mensaje = 'Error campo nro dias supera a dias pendientes de vacaciones.'
      }

      if (mensaje !== '') {
        mensaje = mensaje.toLowerCase()
        mensaje = mensaje.charAt(0).toUpperCase() + mensaje.slice(1)
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
            url: `${store.state.app.webService}/sami_v1/proc_come_soli_vaca/soli_vaca_regi`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden: this.userData.numeroIdentificacion,
              codi_zona: JSON.parse(this.userData.zonaUsuario),
              fech_inic: this.fechaInicio,
              fech_fina: this.fechaFin,
              nume_diaa: this.nroDia,
              usua_apro: this.seleccionAprobador,
            },
          })
          let data = await servicio.data.data_glob
          data = data.toLowerCase()
          data = data.charAt(0).toUpperCase() + data.slice(1)
          setTimeout(() => {
            this.$vs.loading.close()
            this.$refs['ref-solicitud-vacaciones'].hide()
            this.$swal({
              title: 'Solicitud de vacaciones',
              text: data,
              icon: 'success',
              confirmButtonText: 'Aceptar',
              customClass: {
                confirmButton: 'btn btn-success',
              },
              showClass: {
                popup: 'animate__animated animate__bounceIn',
              },
              buttonsStyling: false,
            }).then(result => {
              if (result.isConfirmed) {
                this.proc_come_soli_vaca_limp()
              }
            })
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
  },
}
</script>
