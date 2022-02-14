<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <vuexy-logo />
        <h2
          class="brand-text text-primary ml-1"
        >Sami
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img
            fluid
            :src="imgUrl"
            alt="Login Sami"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title
            class="mb-1 font-weight-bold"
            title-tag="h2"
          >
            Bienvenidos a SAMI!
          </b-card-title>
          <b-card-text
            class="mb-2"
          >
            Por favor de ingresar usuario y contraseña.
          </b-card-text>

          <!-- form -->
          <validation-observer ref="loginForm">
            <!-- email -->
            <b-form-group
              label="Usuario"
              label-for="login-email"
            >
              <validation-provider
                #default="{ errors }"
                name="usuario"
                vid="usuario"
                rules="obligatorio"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid' : null"
                >
                  <b-input-group-prepend
                    v-if="!show"
                    is-text
                  >
                    <feather-icon
                      icon="UserIcon"
                    />
                  </b-input-group-prepend>
                  <b-form-input
                    ref="refUsuario"
                    v-model="usuarioUsuario"
                    :state="errors.length > 0 ? false : null"
                    placeholder="Ingresar usuario."
                    :autofocus="true"
                    :disabled="disabled"
                    @keyup.enter="setFocus('refContrasena')"
                    @keypress="main_logi_usua($event)"
                  />
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- forgot password -->
            <b-form-group>
              <div class="d-flex justify-content-between">
                <label for="login-password">Contraseña</label>
                <b-link :to="{ name: 'recuperar-contrasena' }">
                  <small>Olvido su contraseña?</small>
                </b-link>
              </div>
              <validation-provider
                #default="{ errors }"
                name="contraseña"
                vid="contraseña"
                rules="obligatorio"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid' : null"
                >
                  <b-input-group-prepend
                    v-if="!show"
                    is-text
                  >
                    <feather-icon icon="LockIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    ref="refContrasena"
                    v-model="usuarioContrasena"
                    :state="errors.length > 0 ? false : null"
                    class="form-control-merge"
                    :type="passwordFieldType"
                    name="login-password"
                    placeholder="Contraseña"
                    :disabled="disabled"
                    @keyup.enter="validarFormulario()"
                    @keypress="main_logi_cont($event)"
                  />
                  <b-input-group-append
                    v-if="!show"
                    is-text
                  >
                    <feather-icon
                      class="cursor-pointer"
                      :icon="passwordToggleIcon"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- checkbox -->
            <b-form-group>
              <b-form-checkbox
                v-model="checkbox_remember_me"
                :disabled="disabled"
              >
                Recordar usuario y contraseña
              </b-form-checkbox>
            </b-form-group>
          </validation-observer>
          <b-row>
            <b-col
              sm="12"
              md="12"
              lg="6"
              class="mt-1 mt-lg-0"
            >
              <b-button
                variant="primary"
                :disabled="disabled"
                block
                @click="validarFormulario()"
              >
                <b-spinner
                  v-if="show"
                  small
                  class="mr-50"
                  type="grow"
                />
                <feather-icon
                  v-if="!show"
                  icon="UserCheckIcon"
                  class="mr-50 text-black"
                />
                <span class="text-black">Ingresar</span>
              </b-button>
            </b-col>
            <b-col
              sm="12"
              md="12"
              lg="6"
              class="mt-1 mt-lg-0"
            >
              <b-button
                variant="danger"
                :disabled="disabled"
                block
                @click="limpiarFormulario()"
              >
                <feather-icon
                  icon="FileIcon"
                  class="mr-50"
                />
                Limpiar
              </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-col>
      <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint no-shadow: ["error", { "allow": ["dato"] }] */
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import 'animate.css'

import {
  BRow,
  BCol,
  BLink,
  BFormGroup,
  BFormInput,
  BInputGroupPrepend,
  BInputGroupAppend,
  BInputGroup,
  BFormCheckbox,
  BCardText,
  BCardTitle,
  BImg,
  BButton,
  VBTooltip,
  BSpinner,
} from 'bootstrap-vue'
import DatabaseService from '@/Database.service'
import { obligatorio } from '@validations'
import { initialAbility } from '@/libs/acl/config'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'

export default {
  directives: {
    'b-tooltip': VBTooltip,
  },
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupPrepend,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BButton,
    BSpinner,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      checkbox_remember_me: true,
      usuarioContrasena: '',
      usuarioUsuario: '',
      sideImg: require('@/assets/images/pages/login-v2.svg'),
      obligatorio,
      show: false,
      disabled: false,
      interval: '',
      database: null,
      version: '',
      mensajeActualizacion: null,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  async created() {
    localStorage.removeItem('mainCampana')
    this.$session.destroy()
    // Reset ability
    this.$ability.update(initialAbility)
    const userData = JSON.parse(localStorage.getItem('userData'))
    if (userData) {
      if (userData.recordarLogin === true) {
        this.usuarioUsuario = userData.codigoUsuario
        this.usuarioContrasena = userData.claveUsuario
      }
    }
    const database = new DatabaseService()
    this.database = database.getInstance()
    const { data } = await this.database
      .from('vers_sami')
      .select('numero, mensaje')
      .eq('pais', 'PER')
    if (data.length > 0) {
      this.version = data[0].numero
      this.mensajeActualizacion = data[0].mensaje
      if (localStorage.getItem('versionSami') === null) {
        this.mensajeVersion()
      } else {
        const numeVers = localStorage.getItem('versionSami')
        if (numeVers !== this.version) {
          this.mensajeVersion()
        }
      }
    }
  },
  methods: {
    mensajeVersion() {
      let mensajeTexto = ''
      if (this.mensajeActualizacion !== null) {
        mensajeTexto = `SAMI tiene una nueva actualización, ${this.mensajeActualizacion}`
      } else {
        mensajeTexto = 'SAMI tiene una nueva actualización !!'
      }
      this.$swal({
        title: 'Actualización SAMI',
        text: mensajeTexto,
        icon: 'warning',
        confirmButtonText: 'Si, actualizar SAMI!',
        customClass: {
          confirmButton: 'btn btn-success',
        },
        showClass: {
          popup: 'animate__animated animate__bounceIn',
        },
        buttonsStyling: false,
      }).then(result => {
        if (result.isConfirmed) {
          localStorage.setItem('versionSami', this.version)
          // window.location.reload(true)
          // eslint-disable-next-line no-self-assign
          window.location.href = window.location.href
        }
      })
    },
    limpiarFormulario() {
      this.usuarioContrasena = ''
      this.usuarioUsuario = ''
      this.$refs.loginForm.reset()
      this.setFocus('refUsuario')
    },
    validarFormulario() {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          this.show = true
          this.disabled = true
          const codigoAcceso = Math.random().toString().slice(2, 11)
          axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/dato/usua_logi`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.usuarioUsuario.trim(),
              clav_usua: this.usuarioContrasena.trim(),
              codi_acce: codigoAcceso,
            },
          }).then(dato => {
            const resLogin = {}
            resLogin.datos = dato.data.datos
            resLogin.area = dato.data.data_area
            resLogin.zona = dato.data.data_zona
            resLogin.zonaLista = dato.data.usua_zona
            resLogin.areaLista = dato.data.usua_area
            if (Object.keys(resLogin.datos).length > 0) {
              const programaMain = resLogin.datos[0].prog_main
              const nombreUsuario = resLogin.datos[0].nomb_usua.charAt(0).toUpperCase() + resLogin.datos[0].nomb_usua.slice(1).toLowerCase()
              const apellidoUsuario = resLogin.datos[0].apel_usua.charAt(0).toUpperCase() + resLogin.datos[0].apel_usua.slice(1).toLowerCase()
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: `Bienvenido ${nombreUsuario} ${apellidoUsuario}`,
                  icon: 'CheckSquareIcon',
                  variant: 'success',
                  text: 'Sami esta obteniendo su configuración de acceso.',
                },
              }, {
                position: 'bottom-right',
                timeout: 8000,
              })
              axios({
                method: 'post',
                url: `${store.state.app.webService}/sami_v1/dato/usua_menu`,
                timeout: `${1000 * store.state.app.timeout}`,
                data: {
                  codi_usua: this.usuarioUsuario.trim(),
                  codi_acce: codigoAcceso,
                },
              }).then(dato => {
                const resConfiguracion = {}
                resConfiguracion.menu = dato.data.datos
                resConfiguracion.menuModulos = dato.data.modulos
                if (Object.keys(resConfiguracion.menuModulos).length > 0) {
                  this.$session.start()
                  this.$session.set('codigoUsuario', this.usuarioUsuario.trim())
                  const userData = {
                    codigoAcceso: codigoAcceso.trim(),
                    codigoUsuario: this.usuarioUsuario.trim(),
                    claveUsuario: this.usuarioContrasena.trim(),
                    programaMain: `${programaMain}`,
                    recordarLogin: this.checkbox_remember_me,
                    numeroIdentificacion: resLogin.datos[0].nume_iden.trim(),
                    nombreUsuario: `${nombreUsuario} ${apellidoUsuario}`,
                    tipoUsuario: resLogin.datos[0].tipo_usua.trim(),
                    areaUsuario: JSON.stringify(resLogin.area),
                    zonaUsuario: JSON.stringify(resLogin.zona),
                    area: JSON.stringify(resLogin.areaLista),
                    zona: JSON.stringify(resLogin.zonaLista),
                    menuUsuario: JSON.stringify(resConfiguracion.menu),
                    modulosUsuario: JSON.stringify(resConfiguracion.menuModulos),
                    ability: [{ action: 'manage', subject: 'all' }],
                  }

                  localStorage.setItem('userData', JSON.stringify(userData))
                  this.$ability.update(userData.ability)
                  localStorage.removeItem('mainSami')
                  this.fetchUsuario(this.usuarioUsuario, nombreUsuario, apellidoUsuario, resLogin.area, resLogin.zona, resLogin.datos[0].tipo_usua)
                }
              }).catch(error => {
                let mensajeError = ''
                if (error.response) {
                  if (error.response.status === 500) {
                    mensajeError = error.response.statusText
                  } else if (error.response.status === 404) {
                    mensajeError = error.response.data.message
                  }
                } else if (error.request) {
                  mensajeError = error.request.responseText
                } else if (error.message === 'Network Error') {
                  mensajeError = 'Error de conexión con el servidor.'
                } else if (error.code === 'ECONNABORTED') {
                  // eslint-disable-next-line
                  const tiempo = `${parseInt(store.state.app.timeout / 60)}`
                  mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
                }
                if (mensajeError === '') {
                  this.$router.push({ name: 'error-servicio' }).catch(() => {})
                } else {
                  mensajeError = mensajeError.toLowerCase()
                  mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
                  this.show = false
                  this.disabled = false
                  this.$toast({
                    component: ToastificationContent,
                    props: {
                      title: 'Notificación',
                      icon: 'AlertTriangleIcon',
                      variant: 'danger',
                      text: mensajeError,
                    },
                  }, {
                    position: 'bottom-right',
                    timeout: 8000,
                  })
                }
              })
            }
          }).catch(error => {
            this.show = false
            this.disabled = false
            let mensajeError = ''
            if (error.response) {
              if (error.response.status === 500) {
                mensajeError = error.response.statusText
              } else if (error.response.status === 404) {
                mensajeError = error.response.data.message
              }
            } else if (error.request) {
              mensajeError = error.request.responseText
            } else if (error.message === 'Network Error') {
              mensajeError = 'Error de conexión con el servidor.'
            } else if (error.code === 'ECONNABORTED') {
              // eslint-disable-next-line
              const tiempo = `${parseInt(store.state.app.timeout / 60)}`
              mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
            }
            if (mensajeError === '') {
              this.$router.push({ name: 'error-servicio' }).catch(() => {})
            } else {
              mensajeError = mensajeError.toLowerCase()
              mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
              this.show = false
              this.disabled = false
              this.$toast({
                component: ToastificationContent,
                props: {
                  title: 'Notificación',
                  icon: 'AlertTriangleIcon',
                  variant: 'danger',
                  text: mensajeError,
                },
              }, {
                position: 'bottom-right',
                timeout: 8000,
              })
            }
          })
        } else {
          this.show = false
          this.disabled = false
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'Existe errores en la validación del formulario.',
            },
          }, {
            position: 'bottom-right',
            timeout: 8000,
          })
        }
      })
    },
    setFocus(referencia) {
      this.$refs[referencia].focus()
    },
    main_logi_usua(event) {
      const regex = new RegExp('^[a-zA-Z0-9_.*]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    main_logi_cont(event) {
      const regex = new RegExp('^[a-zA-Z0-9_.*]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    async fetchUsuario(codiUsua, nombUsua, apelUsua, areaUsua, zonaUsua, tipoUsua) {
      let codiArea = ''
      let codiZona = ''
      if (Object.keys(areaUsua).length > 0) {
        codiArea = areaUsua[0].codi_area
      }
      if (Object.keys(zonaUsua).length > 0) {
        codiZona = zonaUsua[0].codi_zona
        codiArea = zonaUsua[0].codi_area
      }
      const { data: usuaEntr } = await this.database
        .from('usua_entr')
        .select('codi_usua')
        .eq('codi_usua', codiUsua)
        .eq('codi_pais', 'PER')

      if (usuaEntr.length > 0) {
        await this.database
          .from('usua_entr')
          .delete()
          .eq('codi_usua', codiUsua)
          .eq('codi_pais', 'PER')

        await this.database
          .from('usua_sali')
          .insert([{
            codi_usua: codiUsua,
            codi_zona: codiZona,
            codi_area: codiArea,
            nomb_usua: `${nombUsua} ${apelUsua}`,
            tipo_usua: tipoUsua,
            codi_pais: 'PER',
          }])
      }
      await this.database
        .from('usua_sali')
        .delete()
        .eq('codi_usua', codiUsua)
        .eq('codi_pais', 'PER')
      await this.database
        .from('usua_entr')
        .insert([{
          codi_usua: codiUsua,
          codi_zona: codiZona,
          codi_area: codiArea,
          nomb_usua: `${nombUsua} ${apelUsua}`,
          tipo_usua: tipoUsua,
          codi_pais: 'PER',
        }])
      this.$router.push({ name: 'inicio' }).catch(() => {})
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
