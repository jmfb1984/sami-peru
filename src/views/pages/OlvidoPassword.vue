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
          Olvido su contraseña? 🔒
        </b-card-title>
        <b-card-text class="mb-2">
          Ingresar su correo electrónico y sami le enviará su contraseña
        </b-card-text>

        <!-- form -->
        <validation-observer ref="simpleRules">
          <b-form
            class="auth-forgot-password-form mt-2"
            @submit.prevent="validationForm"
          >
            <!-- email -->
            <b-form-group
              label="Correo Eletrónico"
              label-for="forgot-password-email"
            >
              <validation-provider
                #default="{ errors }"
                name="correo electrónico"
                rules="obligatorio|email"
              >
                <b-form-input
                  id="forgot-password-email"
                  v-model="userEmail"
                  :state="errors.length > 0 ? false : null"
                  name="forgot-password-email"
                  placeholder="azzorti@dupree.com.pe"
                  autocomplete="off"
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
              <span class="text-black">Enviar contraseña</span>
            </b-button>
          </b-form>
        </validation-observer>

        <b-card-text class="text-center mt-2">
          <b-link :to="{ name: 'login' }">
            <feather-icon icon="ChevronLeftIcon" /> Regresar Login
          </b-link>
        </b-card-text>
      </b-card>
      <!-- /Forgot Password v1 -->
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
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
import { obligatorio, email } from '@validations'
import { $themeColors } from '@themeConfig'
import store from '@/store'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'

export default {
  components: {
    VuexyLogo,
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
      userEmail: '',
      // validation
      obligatorio,
      email,
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.$vs.loading({
            color: $themeColors.primary,
          })
          try {
            axios({
              method: 'post',
              url: `${store.state.app.webService}/sami_v1/dato/usua_corr`,
              timeout: `${1000 * store.state.app.timeout}`,
              data: {
                corr_usua: this.userEmail,
              },
            }).then(() => {
              this.$toast(
                {
                  component: ToastificationContent,
                  props: {
                    title: 'Notificación',
                    icon: 'CheckCircleIcon',
                    variant: 'success',
                    text: 'Se envio su contraseña al correo electrónico.',
                  },
                },
                {
                  position: 'bottom-right',
                  timeout: 8000,
                },
              )

              this.userEmail = ''
              this.$router.push({ name: 'login' })
              setTimeout(() => {
                this.$vs.loading.close()
              }, 500)
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
