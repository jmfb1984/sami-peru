<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="proc_come_actu_dato_simp_regi()"
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
        @click="proc_come_actu_dato_simp_limp()"
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
        @click="proc_come_actu_dato_simp_regi()"
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
        @click="proc_come_actu_dato_simp_limp()"
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
          <b-row class="ml-0 mr-0">
            <b-col
              class="border-bottom d-flex align-items-between flex-column py-50 mb-1"
            >
              <h4>Datos Asesora</h4>
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              DNI - RUC
            </b-col>
            <b-col
              xl="3"
              lg="3"
              md="4"
              sm="5"
              class="mb-1"
            >
              <b-form-input
                ref="refDniAsesora"
                v-model="dniAsesora"
                placeholder="DNI - RUC"
                @keyup.enter="proc_come_actu_dato_simp_vali_nume_iden()"
                @keydown.tab="proc_come_actu_dato_simp_vali_nume_iden()"
                @keypress="proc_come_actu_dato_simp_bind_nume_iden($event)"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Nombre(s)
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="3"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="nombreAsesora"
                disabled
              />
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Apellido(s)
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="3"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="apellidoAsesora"
                disabled
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Zona
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="4"
              class="mb-1"
            >
              <b-form-input
                v-model="zonaAsesora"
                disabled
              />
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 d-none d-lg-block"
            />
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Sector
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="4"
              class="mb-1"
            >
              <b-form-input
                v-model="sectorAsesora"
                disabled
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Dirección
            </b-col>
            <b-col
              xl="10"
              lg="10"
              md="9"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="direccionAsesora"
                disabled
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              class="border-bottom d-flex align-items-between flex-column py-50 mb-1"
            >
              <h4>Datos Simples</h4>
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Teléfono Casa
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="3"
              sm="5"
              class="mb-1"
            >
              <b-form-input
                ref="refTelefonoAsesora"
                v-model="telefonoAsesora"
                placeholder="Teléfono"
                @keyup.enter="siguienteInput('refCelularAsesora')"
                @keypress="proc_come_actu_dato_simp_bind_tele_terc($event)"
              />
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Teléfono Celular
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="3"
              sm="5"
              class="mb-1"
            >
              <b-form-input
                ref="refCelularAsesora"
                v-model="celularAsesora"
                placeholder="Teléfono Celular"
                @keyup.enter="siguienteInput('refCorreoAsesora')"
                @keypress="proc_come_actu_dato_simp_bind_tele_terc($event)"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Correo Electrónico
            </b-col>
            <b-col
              xl="10"
              lg="10"
              md="9"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                ref="refCorreoAsesora"
                v-model="correoAsesora"
                placeholder="Correo Electrónico"
                @keypress="proc_come_actu_dato_simp_bind_corr_terc($event)"
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
  BRow, BCol, BButton, BCard, BFormInput,
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
    BFormInput,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      dniAsesora: '',
      nombreAsesora: '',
      apellidoAsesora: '',
      telefonoAsesora: '',
      correoAsesora: '',
      zonaAsesora: '',
      sectorAsesora: '',
      direccionAsesora: '',
      celularAsesora: '',
    }
  },
  beforeCreate() {},
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  mounted() {
    this.proc_come_actu_dato_simp_visi()
    this.siguienteInput('refDniAsesora')
  },
  methods: {
    proc_come_actu_dato_simp_bind_nume_iden(event) {
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
    proc_come_actu_dato_simp_bind_tele_terc(event) {
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
    proc_come_actu_dato_simp_bind_corr_terc(event) {
      const regex = new RegExp('^[a-zA-Z0-9_@. ]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    siguienteInput(referencia) {
      this.$refs[referencia].focus()
    },
    proc_come_actu_dato_simp_limp() {
      this.dniAsesora = ''
      this.nombreAsesora = ''
      this.apellidoAsesora = ''
      this.telefonoAsesora = ''
      this.correoAsesora = ''
      this.zonaAsesora = ''
      this.sectorAsesora = ''
      this.direccionAsesora = ''
      this.celularAsesora = ''
      this.siguienteInput('refDniAsesora')
    },
    async proc_come_actu_dato_simp_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'proc_come_actu_dato_simp',
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
    async proc_come_actu_dato_simp_vali_nume_iden() {
      if (this.dniAsesora.trim() === '') {
        this.nombreAsesora = ''
        this.apellidoAsesora = ''
        this.correoAsesora = ''
        this.telefonoAsesora = ''
        this.zonaAsesora = ''
        this.sectorAsesora = ''
        this.direccionAsesora = ''
        this.celularAsesora = ''
      } else {
        this.$vs.loading({
          color: $themeColors.primary,
        })

        try {
          const userData = JSON.parse(localStorage.getItem('userData'))
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_actu_dato_simp/actu_dato_simp_nume_iden`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden: this.dniAsesora.trim(),
              codi_zona: JSON.parse(userData.zona),
            },
          })
          const data = await servicio.data.data_glob
          this.nombreAsesora = data.nomb_terc
          this.apellidoAsesora = data.apel_terc
          this.correoAsesora = data.corr_ases
          this.telefonoAsesora = data.tele_ases
          this.zonaAsesora = data.codi_zona
          this.sectorAsesora = data.codi_sect
          this.direccionAsesora = data.dire_terc
          this.celularAsesora = data.celu_ases
          this.siguienteInput('refTelefonoAsesora')
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
        } catch (error) {
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          this.dniAsesora = ''
          this.nombreAsesora = ''
          this.apellidoAsesora = ''
          this.correoAsesora = ''
          this.telefonoAsesora = ''
          this.zonaAsesora = ''
          this.sectorAsesora = ''
          this.direccionAsesora = ''
          this.celularAsesora = ''
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
    async proc_come_actu_dato_simp_regi() {
      this.$vs.loading({
        color: $themeColors.primary,
      })

      let mensaje = ''
      if (mensaje === '' && this.dniAsesora === '') {
        mensaje = 'Error campo dni - ruc asesora obligatorio.'
      }
      if (mensaje === '' && (this.telefonoAsesora === '' || this.celularAsesora === '')) {
        mensaje = 'Error campo teléfono casa o teléfono celular asesora obligatorio.'
      }
      if (mensaje === '' && this.correoAsesora === '') {
        mensaje = 'Error campo correo electrónico asesora obligatorio.'
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
            url: `${store.state.app.webService}/sami_v1/proc_come_actu_dato_simp/actu_dato_simp_regi`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden: this.dniAsesora.trim(),
              tele_terc: this.telefonoAsesora.trim(),
              celu_terc: this.celularAsesora.trim(),
              corr_ases: this.correoAsesora.trim(),
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
          this.proc_come_actu_dato_simp_limp()
          this.siguienteInput('refDniAsesora')
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
