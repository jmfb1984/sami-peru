<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="admi_logg_usua_gene()"
      >
        <feather-icon
          icon="SearchIcon"
          class="mr-50 text-black"
        />
        <span
          class="text-black"
        >
          Generar
        </span>
      </b-button>
      <b-button
        variant="danger"
        block
        @click="admi_logg_usua_limp()"
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
        @click="admi_logg_usua_gene()"
      >
        <feather-icon
          icon="SearchIcon"
          class="mr-50 text-black"
        />
        <span
          class="text-black"
        >
          Generar
        </span>
      </b-button>
      <b-button
        variant="danger"
        class="ml-1"
        @click="admi_logg_usua_limp()"
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
        <b-card-code
          :code-visible="codeLog"
        >
          <b-row>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Usuario</span>
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="6"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <b-form-input
                ref="refCodigoUsuario"
                v-model="codigoUsuario"
                placeholder="Usuario"
              />
            </b-col>
          </b-row>
          <template #code>
            {{ codeLogUsuario }}
          </template>
        </b-card-code>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import {
  BRow,
  BCol,
  BButton,
  BFormInput,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { $themeColors } from '@themeConfig'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BFormInput,
    BCardCode,
  },
  data() {
    return {
      codigoUsuario: '',
      codeLogUsuario: 'Sin datos para mostrar',
      codeLog: false,
      userData: JSON.parse(localStorage.getItem('userData')),
    }
  },
  beforeCreate() {
  },
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  mounted() {
    this.setFocus('refCodigoUsuario')
  },
  created() {
    this.handleWindowResize()
  },
  methods: {
    setFocus(referencia) {
      this.$refs[referencia].focus()
    },
    handleWindowResize() {
    },
    admi_logg_usua_limp() {
      this.codeLog = false
      this.codeLogUsuario = 'Sin datos para mostrar'
      this.codigoUsuario = ''
      this.setFocus('refCodigoUsuario')
    },
    async admi_logg_usua_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.codeLog = false
      this.codeLogUsuario = 'Sin datos para mostrar'
      if (this.codigoUsuario.trim() === '') {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'Campo codigo usuario es obligatorio.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/admi_logg_usua/logg_usua_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_usua_cons: this.codigoUsuario.trim(),
            },
          })
          this.codeLog = true
          const txt = await servicio.data.html
          this.codeLogUsuario = `\n${txt}`
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
