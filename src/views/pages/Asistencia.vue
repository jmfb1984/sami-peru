<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">
      <!-- Forgot Password v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <!-- logo -->
          <vuexy-logo />

          <h2 class="brand-text text-primary ml-1">
            Sami
          </h2>
        </b-link>

        <b-card-title class="mb-1">
          Asistencia a conferencia
        </b-card-title>
        <b-card-text class="mb-2">
          Ingresar su número de identidad y código para su registro
        </b-card-text>

        <!-- form -->
        <validation-observer ref="simpleRules">
          <b-form
            class="auth-forgot-password-form mt-2"
            @submit.prevent="validationForm"
          >
            <!-- email -->
            <b-form-group
              label="Número de identidad"
              label-for="asistencia-numero"
            >
              <validation-provider
                #default="{ errors }"
                name="numero identidad"
                rules="obligatorio"
              >
                <b-form-input
                  id="asistencia-numero"
                  ref="refNumero"
                  v-model="numeIden"
                  :state="errors.length > 0 ? false : null"
                  name="asistencia-numero"
                  placeholder=""
                  autocomplete="off"
                  @keypress="asis_nume_iden($event)"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
            <b-form-group
              label="Código"
              label-for="asistencia-codigo"
            >
              <validation-provider
                #default="{ errors }"
                name="codigo"
                rules="obligatorio"
              >
                <b-form-input
                  id="asistencia-codigo"
                  ref="refCodigo"
                  v-model="codigo"
                  :state="errors.length > 0 ? false : null"
                  name="asistencia-codigo"
                  placeholder=""
                  autocomplete="off"
                  @keypress="asis_codi_acce($event)"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
            <!-- submit button -->
            <b-button
              variant="primary"
              block
              type="submit"
            >
              <feather-icon
                icon="MailIcon"
                class="mr-50 text-black"
              />
              <span class="text-black">Enviar asistencia</span>
            </b-button>
          </b-form>
        </validation-observer>
        <b-link class="brand-logo">
          <!-- logo -->
          <azzorti-logo />
        </b-link>
      </b-card>
      <!-- /Forgot Password v1 -->
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import AzzortiLogo from '@core/layouts/components/AzzortiLogo.vue'

import {
  BCard,
  BLink,
  BCardText,
  BCardTitle,
  BFormGroup,
  BFormInput,
  BForm,
  BButton,
} from 'bootstrap-vue'
import { obligatorio } from '@validations'
import { $themeColors } from '@themeConfig'
import store from '@/store'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'

export default {
  components: {
    VuexyLogo,
    AzzortiLogo,
    BCard,
    BLink,
    BCardText,
    BCardTitle,
    BFormGroup,
    BFormInput,
    BButton,
    BForm,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      numeIden: '',
      codigo: '',
      // validation
      obligatorio,
    }
  },
  mounted() {
    this.siguienteInput('refNumero')
  },
  methods: {
    asis_nume_iden(event) {
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
    asis_codi_acce(event) {
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
    siguienteInput(referencia) {
      this.$refs[referencia].focus()
    },
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.$vs.loading({
            color: $themeColors.primary,
          })
          try {
            axios({
              method: 'post',
              url: `${store.state.app.webService}/sami_v1/proc_come_asis/asis_regi`,
              timeout: `${1000 * store.state.app.timeout}`,
              data: {
                nume_iden: this.numeIden,
                codi_asis: this.codigo,
              },
            }).then(() => {
              this.$toast(
                {
                  component: ToastificationContent,
                  props: {
                    title: 'Notificación',
                    icon: 'CheckCircleIcon',
                    variant: 'success',
                    text: 'Registro satisfactorio.',
                  },
                },
                {
                  position: 'bottom-right',
                  timeout: 8000,
                },
              )
              this.numeIden = ''
              this.codigo = ''
              this.$nextTick(() => {
                this.$refs.simpleRules.reset()
              })
              setTimeout(() => {
                this.$vs.loading.close()
              }, 500)
            }, error => {
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
          }
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
