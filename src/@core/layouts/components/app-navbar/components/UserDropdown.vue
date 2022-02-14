<template>
  <div>
    <b-nav-item-dropdown
      right
      toggle-class="d-flex align-items-center dropdown-user-link"
      class="dropdown-user"
    >
      <template #button-content>
        <div class="d-sm-flex d-none user-nav">
          <p class="user-name font-weight-bolder mb-0">
            {{ userData.nombreUsuario }}
          </p>
          <span class="user-status">{{ tipoUser }}</span>
        </div>
        <b-avatar
          size="40"
          :src="fotoUser"
          variant="light-success"
          badge
          class="badge-minimal"
          badge-variant="success"
        >
          <feather-icon
            v-if="!userData.nombreUsuario"
            icon="UserIcon"
            size="22"
          />
        </b-avatar>
      </template>
      <b-dropdown-item
        link-class="d-flex align-items-center"
        @click="comentario"
      >
        <feather-icon
          size="16"
          icon="MessageSquareIcon"
          class="mr-50"
        />
        <span>Comentario</span>
      </b-dropdown-item>

      <b-dropdown-divider />
      <b-dropdown-item
        link-class="d-flex align-items-center"
        @click="logout"
      >
        <feather-icon
          size="16"
          icon="LogOutIcon"
          class="mr-50"
        />
        <span>Cerrar sesión</span>
      </b-dropdown-item>
    </b-nav-item-dropdown>
    <b-modal
      ref="comentarioModal"
      hide-footer
      no-close-on-backdrop
      :modal-class="claseModal"
      centered
      title="Sami comentario"
      @shown="siguienteInput('refComentario')"
      @hidden="proc_come_sami_come_limp()"
    >
      <b-row>
        <b-col>
          <b-form-textarea
            ref="refComentario"
            v-model="comentarioSami"
            class="char-textarea"
            :class="comentarioSami.length >= maxChar ? 'text-danger' : ''"
            placeholder="Ingresar solo 200 caracteres"
            rows="3"
          />
          <small
            class="textarea-counter-value float-right"
            :class="comentarioSami.length >= maxChar ? 'bg-danger' : ''"
          >
            <span class="char-count">{{ comentarioSami.length }}</span> / {{ maxChar }}
          </small>
          <div class="d-flex align-items-center justify-content-end mt-2">
            <b-button
              variant="primary"
              class="ml-1"
              @click="proc_come_sami_come_regi()"
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
              @click="proc_come_sami_come_limp()"
            >
              <feather-icon
                icon="FileIcon"
                class="mr-50"
              />
              Limpiar
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import DatabaseService from '@/Database.service'
import {
  BNavItemDropdown,
  BDropdownItem,
  BDropdownDivider,
  BAvatar,
  BRow,
  BCol,
  BButton,
  BModal,
  BFormTextarea,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import { $themeColors } from '@themeConfig'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'
import axios from 'axios'

export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,
    BRow,
    BCol,
    BButton,
    BModal,
    BFormTextarea,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      avatarText,
      fotoUser: '',
      tipoUser: '',
      popupActive: false,
      counterDanger: false,
      comentarioSami: '',
      database: null,
      maxChar: 200,
    }
  },
  computed: {
    claseModal() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'modal-primary'
      }
      return ''
    },
  },
  created() {
    switch (this.userData.tipoUsuario) {
      case 'REG':
        this.tipoUser = 'Gerente Regional'
        break
      case 'ZON':
        this.tipoUser = 'Gerente Zonal'
        break
      default:
        this.tipoUser = 'Disponible'
        break
    }
    const database = new DatabaseService()
    this.database = database.getInstance()
  },
  methods: {
    siguienteInput(referencia) {
      this.$refs[referencia].focus()
    },
    async logout() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const codiUsua = this.userData.codigoUsuario
      const areaUsua = JSON.parse(this.userData.areaUsuario)
      const zonaUsua = JSON.parse(this.userData.zonaUsuario)
      const nombUsua = this.userData.nombreUsuario
      const tipoUsua = this.userData.tipoUsuario
      let codiArea = ''
      let codiZona = ''
      if (Object.keys(areaUsua).length > 0) {
        codiArea = areaUsua[0].codi_area
      }
      if (Object.keys(zonaUsua).length > 0) {
        codiZona = zonaUsua[0].codi_zona
        codiArea = zonaUsua[0].codi_area
      }
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
          nomb_usua: `${nombUsua}`,
          tipo_usua: tipoUsua,
          codi_pais: 'PER',
        }])
      this.$store.commit('notificacion/CLEAR_NOTIFICACION')
      setTimeout(() => {
        this.$vs.loading.close()
      }, 1000)
    },
    comentario() {
      this.$refs.comentarioModal.show()
    },
    proc_come_sami_come_limp() {
      this.comentarioSami = ''
      this.siguienteInput('refComentario')
    },
    async proc_come_sami_come_regi() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      if (this.comentarioSami.trim() === '') {
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
              text: 'Campo comentarios obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
        this.siguienteInput('refComentario')
      } else if (this.comentarioSami.length > 200) {
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
              text: 'Campo comentarios debe contener máximo 200 caracteres.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
        this.siguienteInput('refComentario')
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/dato/sami_come`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              sami_come: this.comentarioSami.trim(),
            },
            headers: {
              'Content-Type': 'text/plain',
            },
          })
          let mensaje = await servicio.data.mensaje
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
            this.siguienteInput('refComentario')
          } else {
            this.$toast(
              {
                component: ToastificationContent,
                props: {
                  title: 'Notificación',
                  icon: 'CheckCircleIcon',
                  variant: 'success',
                  text: 'Mensaje se envio con éxito.',
                },
              },
              {
                position: 'bottom-right',
                timeout: 8000,
              },
            )
            this.$refs.comentarioModal.hide()
            setTimeout(() => {
              this.$vs.loading.close()
            }, 500)
          }
        } catch (error) {
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          let mensajeError = error.message
          if (mensajeError === 'Network Error') {
            mensajeError = 'Error de conexión con el servidor.'
          }
          if (error.code === 'ECONNABORTED') {
            // eslint-disable-next-line
            const tiempo = `${parseInt(store.state.app.timeout / 60)}`
            mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
          }
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
    },
  },
}
</script>
