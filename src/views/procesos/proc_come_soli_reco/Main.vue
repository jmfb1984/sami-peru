<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="proc_come_soli_reco_regi()"
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
        @click="proc_come_soli_reco_limp()"
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
        @click="proc_come_soli_reco_regi()"
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
        @click="proc_come_soli_reco_limp()"
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
                @keyup.enter="proc_come_soli_reco_vali_nume_iden()"
                @keydown.tab="proc_come_soli_reco_vali_nume_iden()"
                @keypress="proc_come_soli_reco_bind_nume_iden($event)"
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
                v-model="telefonoAsesora"
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
                v-model="celularAsesora"
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
                v-model="correoAsesora"
                disabled
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              class="border-bottom d-flex align-items-between flex-column py-50 mb-1"
            >
              <h4>Datos Solicitud</h4>
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              class="mb-1 align-self-center"
            >
              Tipo Recodificación
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              class="mb-1"
            >
              <b-form-radio-group
                v-model="selectedTipoRecodificacion"
                :options="optionsTipoRecodificacion"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              class="mb-1 align-self-center"
            >
              Observación (máximo 100 caracteres)
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col>
              <b-form-textarea
                ref="refObsercacionAsesora"
                v-model="observacionAsesora"
                :state="observacionAsesora.length > maxChar ? false : null"
                :class="observacionAsesora.length >= maxChar ? 'text-danger' : ''"
                placeholder="Ingresar observación solicitud"
                rows="3"
                class="mb-1"
              />
              <small
                class="text-black textarea-counter-value float-right"
                :class="observacionAsesora.length >= maxChar ? 'bg-danger' : ''"
              >
                <span
                  class="char-count"
                >
                  {{ observacionAsesora.length }}</span> / {{ maxChar }}
              </small>
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="3"
              lg="3"
              md="4"
              sm="6"
              xs="12"
            >
              <b-card
                class="text-center"
              >
                <b-img
                  :src="srcFormato"
                  alt="Formato"
                  fluid-grow
                  @error="proc_come_soli_reco_foto_erro($event)"
                />
                <h4
                  class="mb-1 mt-1"
                >
                  Formato
                </h4>
                <span
                  class="text-grey"
                >
                  Foto formato solicitud.
                </span>
                <div
                  class="mt-1 d-flex align-items-center justify-content-center"
                >
                  <input
                    ref="uploadInputFormato"
                    type="file"
                    class="hidden"
                    accept=".jpg"
                    @change="handleFileUpload('1')"
                  >
                  <b-button
                    variant="primary"
                    class="ml-1"
                    @click="$refs.uploadInputFormato.click()"
                  >
                    <feather-icon
                      icon="UploadIcon"
                      class="mr-50 text-black"
                    />
                    <span class="text-black">
                      Subir
                    </span>
                  </b-button>
                  <b-button
                    variant="dark"
                    class="ml-1"
                    @click="proc_come_soli_reco_foto('1', srcFormato)"
                  >
                    <feather-icon
                      icon="SearchIcon"
                      class="mr-50"
                    />
                    <span class="">
                      Ver
                    </span>
                  </b-button>
                </div>
              </b-card>
            </b-col>
            <b-col
              xl="3"
              lg="3"
              md="4"
              sm="6"
              xs="12"
            >
              <b-card
                class="text-center"
              >
                <b-img
                  :src="srcReciboServicio"
                  alt="Recibo Servicio"
                  fluid-grow
                  @error="proc_come_soli_reco_foto_erro($event)"
                />
                <h4
                  class="mb-1 mt-1"
                >
                  Recibo Servicio
                </h4>
                <span
                  class="text-grey"
                >
                  Foto recibo servicio.
                </span>
                <div
                  class="mt-1 d-flex align-items-center justify-content-center"
                >
                  <input
                    ref="uploadInputReciboServicio"
                    type="file"
                    class="hidden"
                    accept=".jpg"
                    @change="handleFileUpload('2')"
                  >
                  <b-button
                    variant="primary"
                    class="ml-1"
                    @click="$refs.uploadInputReciboServicio.click()"
                  >
                    <feather-icon
                      icon="UploadIcon"
                      class="mr-50 text-black"
                    />
                    <span class="text-black">
                      Subir
                    </span>
                  </b-button>
                  <b-button
                    variant="dark"
                    class="ml-1"
                    @click="proc_come_soli_reco_foto('2', srcReciboServicio)"
                  >
                    <feather-icon
                      icon="SearchIcon"
                      class="mr-50"
                    />
                    <span class="">
                      Ver
                    </span>
                  </b-button>
                </div>
              </b-card>
            </b-col>
            <b-col
              xl="3"
              lg="3"
              md="4"
              sm="6"
              xs="12"
            >
              <b-card
                class="text-center"
              >
                <b-img
                  :src="srcDni"
                  alt="Dni"
                  fluid-grow
                  @error="proc_come_soli_reco_foto_erro($event)"
                />
                <h4
                  class="mb-1 mt-1"
                >
                  Dni
                </h4>
                <span
                  class="text-grey"
                >
                  Foto dni.
                </span>
                <div
                  class="mt-1 d-flex align-items-center justify-content-center"
                >
                  <input
                    ref="uploadInputDni"
                    type="file"
                    class="hidden"
                    accept=".jpg"
                    @change="handleFileUpload('3')"
                  >
                  <b-button
                    variant="primary"
                    class="ml-1"
                    @click="$refs.uploadInputDni.click()"
                  >
                    <feather-icon
                      icon="UploadIcon"
                      class="mr-50 text-black"
                    />
                    <span class="text-black">
                      Subir
                    </span>
                  </b-button>
                  <b-button
                    variant="dark"
                    class="ml-1"
                    @click="proc_come_soli_reco_foto('3', srcDni)"
                  >
                    <feather-icon
                      icon="SearchIcon"
                      class="mr-50"
                    />
                    <span class="">
                      Ver
                    </span>
                  </b-button>
                </div>
              </b-card>
            </b-col>
            <b-col
              xl="3"
              lg="3"
              md="4"
              sm="6"
              xs="12"
            >
              <b-card
                class="text-center"
              >
                <b-img
                  :src="srcFormatoRuc"
                  alt="Formato Ruc"
                  fluid-grow
                  @error="proc_come_soli_reco_foto_erro($event)"
                />
                <h4
                  class="mb-1 mt-1"
                >
                  Formato Ruc
                </h4>
                <span
                  class="text-grey"
                >
                  Foto formato ruc.
                </span>
                <div
                  class="mt-1 d-flex align-items-center justify-content-center"
                >
                  <input
                    ref="uploadInputFormatoRuc"
                    type="file"
                    class="hidden"
                    accept=".jpg"
                    @change="handleFileUpload('4')"
                  >
                  <b-button
                    variant="primary"
                    class="ml-1"
                    @click="$refs.uploadInputFormatoRuc.click()"
                  >
                    <feather-icon
                      icon="UploadIcon"
                      class="mr-50 text-black"
                    />
                    <span class="text-black">
                      Subir
                    </span>
                  </b-button>
                  <b-button
                    variant="dark"
                    class="ml-1"
                    @click="proc_come_soli_reco_foto('4', srcFormatoRuc)"
                  >
                    <feather-icon
                      icon="SearchIcon"
                      class="mr-50"
                    />
                    <span class="">
                      Ver
                    </span>
                  </b-button>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <vs-popup
      :title="popupTituloDetalle"
      :active.sync="popupActiveDetalle"
      class-content="scrollbar"
      :background-color-popup="clasePopUp"
      @close="proc_come_soli_reco_cerr()"
    >
      <b-row>
        <b-col>
          <b-card
            :img-src="popupFotoDetalle"
            :img-alt="popupAltDetalle"
            img-top
            tag="article"
            class="mb-0 text-center"
          />
        </b-col>
      </b-row>
    </vs-popup>
  </section>
</template>
<script>
import {
  BRow, BCol, BButton, BCard, BFormInput, BFormRadioGroup, BImg, BFormTextarea,
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
    BFormRadioGroup,
    BImg,
    BFormTextarea,
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
      observacionAsesora: '',
      selectedTipoRecodificacion: 'dni_ruc',
      optionsTipoRecodificacion: [
        { text: 'Cambio dni por Ruc', value: 'dni_ruc' },
        { text: 'Cambio ruc por dni', value: 'ruc_dni' },
        { text: 'Cambio Zona', value: 'zona' },
        { text: 'Cambio Sector', value: 'sector' },
        { text: 'Cambio Dirección', value: 'direccion' },
      ],
      // eslint-disable-next-line
      srcFormato: require('@/assets/images/portrait/small/sin_imagen.png'),
      // eslint-disable-next-line
      srcReciboServicio: require('@/assets/images/portrait/small/sin_imagen.png'),
      // eslint-disable-next-line
      srcDni: require('@/assets/images/portrait/small/sin_imagen.png'),
      // eslint-disable-next-line
      srcFormatoRuc: require('@/assets/images/portrait/small/sin_imagen.png'),
      codigoFormato: 0,
      codigoReciboServicio: 0,
      codigoDni: 0,
      codigoFormatoRuc: 0,
      maxChar: 100,
      file: null,
      popupTituloDetalle: '',
      popupActiveDetalle: false,
      popupFotoDetalle: '',
      popupAltDetalle: '',
    }
  },
  computed: {
    clasePopUp() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return '#283046'
      }
      return ''
    },
  },
  beforeCreate() {},
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  mounted() {
    this.proc_come_soli_reco_visi()
    this.siguienteInput('refDniAsesora')
  },
  methods: {
    async handleFileUpload(codiFile) {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      if (this.dniAsesora.trim() === '') {
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
              text: 'Campo DNI - RUC obligatorio para subir la imagen.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        switch (codiFile) {
          case '1':
            // eslint-disable-next-line
            this.file = this.$refs.uploadInputFormato.files[0]
            break
          case '2':
            // eslint-disable-next-line
            this.file = this.$refs.uploadInputReciboServicio.files[0]
            break
          case '3':
            // eslint-disable-next-line
            this.file = this.$refs.uploadInputDni.files[0]
            break
          case '4':
            // eslint-disable-next-line
            this.file = this.$refs.uploadInputFormatoRuc.files[0]
            break
          default:
        }
        const data = new FormData()
        data.append('fileToUpload', this.file)
        data.append('codi_usua', this.$session.get('codigoUsuario'))
        data.append('nume_iden', this.dniAsesora)
        data.append('codi_imag', codiFile)
        data.append('codi_acce', this.userData.codigoAcceso)
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_soli_reco/soli_reco_arch`,
            timeout: `${1000 * store.state.app.timeout}`,
            data,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          switch (codiFile) {
            case '1':
              this.file = null
              this.$refs.uploadInputFormato.value = null
              break
            case '2':
              this.file = null
              this.$refs.uploadInputReciboServicio.value = null
              break
            case '3':
              this.file = null
              this.$refs.uploadInputDni.value = null
              break
            case '4':
              this.file = null
              this.$refs.uploadInputFormatoRuc.value = null
              break
            default:
          }
          const foto = await servicio.data.data_glob
          switch (codiFile) {
            case '1':
              this.srcFormato = foto
              this.codigoFormato = 1
              break
            case '2':
              this.srcReciboServicio = foto
              this.codigoReciboServicio = 1
              break
            case '3':
              this.srcDni = foto
              this.codigoDni = 1
              break
            case '4':
              this.srcFormatoRuc = foto
              this.codigoFormatoRuc = 1
              break
            default:
          }
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'CheckCircleIcon',
                variant: 'success',
                text: 'Imagen cargada con éxito.',
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
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
    proc_come_soli_reco_foto(codiFoto, direFoto) {
      switch (codiFoto) {
        case '1':
          this.popupTituloDetalle = 'Formato'
          this.popupAltDetalle = 'Formato'
          break
        case '2':
          this.popupTituloDetalle = 'Recibo Servicio'
          this.popupAltDetalle = 'Recibo Servicio'
          break
        case '3':
          this.popupTituloDetalle = 'Dni'
          this.popupAltDetalle = 'Dni'
          break
        case '4':
          this.popupTituloDetalle = 'Formato Ruc'
          this.popupAltDetalle = 'Formato Ruc'
          break
        default:
      }
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
      this.popupFotoDetalle = direFoto
      this.popupActiveDetalle = true
    },
    proc_come_soli_reco_cerr() {
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
    },
    proc_come_soli_reco_foto_erro(event) {
      // eslint-disable-next-line
      event.target.src = require('@/assets/images/portrait/small/sin_imagen.png')
    },
    proc_come_soli_reco_bind_nume_iden(event) {
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
    proc_come_soli_reco_limp() {
      this.dniAsesora = ''
      this.nombreAsesora = ''
      this.apellidoAsesora = ''
      this.telefonoAsesora = ''
      this.correoAsesora = ''
      this.zonaAsesora = ''
      this.sectorAsesora = ''
      this.direccionAsesora = ''
      this.celularAsesora = ''
      this.observacionAsesora = ''
      this.selectedTipoRecodificacion = 'dni_ruc'
      // eslint-disable-next-line
      this.srcFormato = require('@/assets/images/portrait/small/sin_imagen.png'),
      this.codigoFormato = 0
      // eslint-disable-next-line
      this.srcReciboServicio = require('@/assets/images/portrait/small/sin_imagen.png'),
      this.codigoReciboServicio = 0
      // eslint-disable-next-line
      this.srcDni = require('@/assets/images/portrait/small/sin_imagen.png'),
      this.codigoDni = 0
      // eslint-disable-next-line
      this.srcFormatoRuc = require('@/assets/images/portrait/small/sin_imagen.png'),
      this.codigoFormatoRuc = 0
      this.file = null
      this.$refs.uploadInputFormato.value = null
      this.$refs.uploadInputFormatoRuc.value = null
      this.$refs.uploadInputReciboServicio.value = null
      this.$refs.uploadInputDni.value = null
      this.siguienteInput('refDniAsesora')
    },
    async proc_come_soli_reco_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'proc_come_soli_reco',
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
    async proc_come_soli_reco_vali_nume_iden() {
      if (this.dniAsesora.trim() === '') {
        this.nombreAsesora = ''
        this.apellidoAsesora = ''
        this.correoAsesora = ''
        this.telefonoAsesora = ''
        this.zonaAsesora = ''
        this.sectorAsesora = ''
        this.direccionAsesora = ''
        this.celularAsesora = ''
        this.observacionAsesora = ''
        this.selectedTipoRecodificacion = 'dni_ruc'
        // eslint-disable-next-line
        this.srcFormato = require('@/assets/images/portrait/small/sin_imagen.png'),
        // eslint-disable-next-line
        this.srcReciboServicio = require('@/assets/images/portrait/small/sin_imagen.png'),
        // eslint-disable-next-line
        this.srcDni = require('@/assets/images/portrait/small/sin_imagen.png'),
        // eslint-disable-next-line
        this.srcFormatoRuc = require('@/assets/images/portrait/small/sin_imagen.png'),
        this.codigoFormatoRuc = 0
        this.codigoFormato = 0
        this.codigoReciboServicio = 0
        this.codigoDni = 0
        this.file = null
        this.$refs.uploadInputFormato.value = null
        this.$refs.uploadInputFormatoRuc.value = null
        this.$refs.uploadInputReciboServicio.value = null
        this.$refs.uploadInputDni.value = null
      } else {
        this.$vs.loading({
          color: $themeColors.primary,
        })

        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_soli_reco/soli_reco_nume_iden`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden: this.dniAsesora.trim(),
              codi_zona: JSON.parse(this.userData.zona),
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
          // eslint-disable-next-line
          this.srcFormato = require('@/assets/images/portrait/small/sin_imagen.png'),
          // eslint-disable-next-line
          this.srcReciboServicio = require('@/assets/images/portrait/small/sin_imagen.png'),
          // eslint-disable-next-line
          this.srcDni = require('@/assets/images/portrait/small/sin_imagen.png'),
          // eslint-disable-next-line
          this.srcFormatoRuc = require('@/assets/images/portrait/small/sin_imagen.png'),
          this.codigoFormatoRuc = 0
          this.codigoFormato = 0
          this.codigoReciboServicio = 0
          this.codigoDni = 0
          this.file = null
          this.$refs.uploadInputFormato.value = null
          this.$refs.uploadInputFormatoRuc.value = null
          this.$refs.uploadInputReciboServicio.value = null
          this.$refs.uploadInputDni.value = null
          this.siguienteInput('refObsercacionAsesora')

          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
        } catch (error) {
          this.dniAsesora = ''
          this.nombreAsesora = ''
          this.apellidoAsesora = ''
          this.correoAsesora = ''
          this.telefonoAsesora = ''
          this.zonaAsesora = ''
          this.sectorAsesora = ''
          this.direccionAsesora = ''
          this.celularAsesora = ''
          // eslint-disable-next-line
          this.srcFormato = require('@/assets/images/portrait/small/sin_imagen.png'),
          // eslint-disable-next-line
          this.srcReciboServicio = require('@/assets/images/portrait/small/sin_imagen.png'),
          // eslint-disable-next-line
          this.srcDni = require('@/assets/images/portrait/small/sin_imagen.png'),
          // eslint-disable-next-line
          this.srcFormatoRuc = require('@/assets/images/portrait/small/sin_imagen.png'),
          this.codigoFormatoRuc = 0
          this.codigoFormato = 0
          this.codigoReciboServicio = 0
          this.codigoDni = 0
          this.file = null
          this.$refs.uploadInputFormato.value = null
          this.$refs.uploadInputFormatoRuc.value = null
          this.$refs.uploadInputReciboServicio.value = null
          this.$refs.uploadInputDni.value = null
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
    async proc_come_soli_reco_regi() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      let mensaje = ''
      if (mensaje === '' && this.dniAsesora === '') {
        mensaje = 'Error campo dni - ruc asesora obligatorio.'
      }
      if (mensaje === '' && this.observacionAsesora === '') {
        mensaje = 'Error campo observación obligatorio.'
      }
      if (mensaje === '' && this.codigoFormato === 0) {
        mensaje = 'Error imagen formato obligatorio.'
      }
      if (mensaje === '' && this.selectedTipoRecodificacion === 'direccion' && this.codigoReciboServicio === 0) {
        mensaje = 'Error imagen recibo servicio obligatorio.'
      }
      if (mensaje === '' && this.selectedTipoRecodificacion === 'zona' && this.codigoReciboServicio === 0) {
        mensaje = 'Error imagen recibo servicio obligatorio.'
      }
      if (mensaje === '' && this.selectedTipoRecodificacion === 'zona' && this.codigoDni === 0) {
        mensaje = 'Error imagen dni obligatorio.'
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
            url: `${store.state.app.webService}/sami_v1/proc_come_soli_reco/soli_reco_regi`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden: this.dniAsesora.trim(),
              tipo_reco: this.selectedTipoRecodificacion,
              obse_reco: this.observacionAsesora,
              codi_form: this.codigoFormato,
              codi_reci: this.codigoReciboServicio,
              codi_dnii: this.codigoDni,
              codi_rucc: this.codigoFormatoRuc,
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
          this.proc_come_soli_reco_limp()
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
