<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="cons_come_logg_pedi_gene()"
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
        @click="cons_come_logg_pedi_limp()"
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
        @click="cons_come_logg_pedi_gene()"
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
        @click="cons_come_logg_pedi_limp()"
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
              class="mb-1"
            >
              <span class="d-flex mt-50">Campaña</span>
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="6"
              sm="12"
              xs="12"
              class="mb-1"
            >
              <v-select
                ref="refCampana"
                v-model="seleccionCampana"
                :options="dataCampana"
                class="dropdown-150"
              >
                <span
                  slot="no-options"
                  @click="$refs.refCampana.open = false"
                >
                  Campaña no existe.
                </span>
              </v-select>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Documento Identidad</span>
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
                ref="refDocumentoIdentidad"
                v-model="documentoIdentidad"
                placeholder="DNI - RUC"
              />
            </b-col>
          </b-row>
          <template #code>
            {{ codeLogPedido }}
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
import vSelect from 'vue-select'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

export default {
  components: {
    BRow,
    BCol,
    BButton,
    vSelect,
    BFormInput,
    BCardCode,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      dataCampana: [],
      seleccionCampana: [],
      documentoIdentidad: '',
      codeLogPedido: 'Sin datos para mostrar',
      codeLog: false,
    }
  },
  beforeCreate() {
  },
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  mounted() {
    this.setFocus('refDocumentoIdentidad')
    this.cons_come_logg_pedi_visi()
  },
  created() {
    this.handleWindowResize()
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    itemCampana = itemCampana.camp.slice(0, 3)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))
    this.seleccionCampana = itemCampana[0].codi_camp
  },
  methods: {
    setFocus(referencia) {
      this.$refs[referencia].focus()
    },
    handleWindowResize() {
    },
    cons_come_logg_pedi_limp() {
      this.codeLog = false
      this.codeLogPedido = 'Sin datos para mostrar'
      this.documentoIdentidad = ''
      this.setFocus('refDocumentoIdentidad')
    },
    async cons_come_logg_pedi_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'cons_come_logg_pedi',
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
    async cons_come_logg_pedi_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.codeLog = false
      this.codeLogPedido = 'Sin datos para mostrar'
      if (this.seleccionCampana === null || this.seleccionCampana.length === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'Campo campaña es obligatorio.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else if (this.documentoIdentidad.trim() === '') {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'Campo documento identidad es obligatorio.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/cons_come_logg_pedi/logg_pedi_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.seleccionCampana,
              nume_iden: this.documentoIdentidad.trim(),
            },
          })
          this.codeLog = true
          const txt = await servicio.data.html
          this.codeLogPedido = `\n${txt}`
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
