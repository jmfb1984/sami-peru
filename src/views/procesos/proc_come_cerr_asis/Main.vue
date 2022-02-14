<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="proc_come_cerr_asis_regi()"
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
        @click="proc_come_cerr_asis_limp()"
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
        @click="proc_come_cerr_asis_regi()"
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
        @click="proc_come_cerr_asis_limp()"
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
              lg="2"
              md="3"
              sm="12"
              xs="12"
              class="mb-1"
            >
              <span class="d-flex mt-50">Campaña lanzamiento</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="6"
              xs="12"
              class="mb-1 d-flex"
            >
              <b-form-select
                ref="refCampana"
                v-model="seleccionCampana"
                :options="dataCampana"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
              class="mb-1"
            >
              <span class="d-flex mt-50">Zona</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="6"
              xs="12"
              class="mb-1 d-flex"
            >
              <b-form-select
                ref="refZona"
                v-model="seleccionZona"
                :options="dataZona"
              />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import {
  BRow,
  BCol,
  BButton,
  BCard,
  BFormSelect,
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BCard,
    BFormSelect,
  },
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const minDate = new Date(today)
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      fecha: now,
      codigo: '',
      dataCampana: [],
      seleccionCampana: [],
      dataZona: [],
      seleccionZona: [],
      min: minDate,
    }
  },
  beforeCreate() {},
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  mounted() {
    this.proc_come_cerr_asis_visi()
  },
  created() {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const itemZona = JSON.parse(userData.zona)
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    itemCampana = itemCampana.camp_sigu.slice(0, 3)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))
    itemZona.forEach(element => this.dataZona.push(element.codi_zona))
    this.seleccionCampana = itemCampana[0].codi_camp
    this.seleccionZona = itemZona[0].codi_zona
  },
  methods: {
    async proc_come_cerr_asis_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'proc_come_cerr_asis',
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
    proc_come_cerr_asis_codi(event) {
      const regex = new RegExp('^[a-zA-Z0-9]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_cerr_asis_limp() {
      // eslint-disable-next-line prefer-destructuring
      this.seleccionCampana = this.dataCampana[0]
      // eslint-disable-next-line prefer-destructuring
      this.seleccionZona = this.dataZona[0]
    },
    async proc_come_cerr_asis_regi() {
      this.$vs.loading({
        color: $themeColors.primary,
      })

      let mensaje = ''
      if (mensaje === '' && (this.seleccionCampana === null || this.seleccionCampana.length === 0)) {
        mensaje = 'Error campo campaña obligatorio.'
      } else if (mensaje === '' && (this.seleccionZona === null || this.seleccionZona.length === 0)) {
        mensaje = 'Error campo zona obligatorio.'
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
            url: `${store.state.app.webService}/sami_v1/proc_come_cerr_asis/cerr_asis_regi`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.seleccionCampana,
              codi_zona: this.seleccionZona,
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
          this.proc_come_cerr_asis_limp()
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
  },
}
</script>
