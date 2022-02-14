<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="proc_come_posi_ases_regi()"
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
        @click="proc_come_posi_ases_limp()"
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
        @click="proc_come_posi_ases_regi()"
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
        @click="proc_come_posi_ases_limp()"
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
              <h4>Datos Referente</h4>
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
              xl="4"
              lg="4"
              md="5"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                ref="refDniReferente"
                v-model="dniReferente"
                placeholder="DNI - RUC"
                @keyup.enter="proc_come_posi_ases_vali_nume_iden_padr()"
                @keydown.tab="proc_come_posi_ases_vali_nume_iden_padr()"
                @keypress="proc_come_posi_ases_bind_nume_iden($event)"
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
                v-model="nombreReferente"
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
                v-model="apellidoReferente"
                disabled
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              class="border-bottom d-flex align-items-between flex-column py-50 mb-1"
            >
              <h4>Datos Referido</h4>
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
              xl="4"
              lg="4"
              md="5"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                ref="refDniReferido"
                v-model="dniReferido"
                placeholder="DNI - RUC"
                @keyup.enter="proc_come_posi_ases_vali_nume_iden_hijo()"
                @keydown.tab="proc_come_posi_ases_vali_nume_iden_hijo()"
                @keypress="proc_come_posi_ases_bind_nume_iden($event)"
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
                ref="refNombreReferido"
                v-model="nombreReferido"
                placeholder="Nombre(s)"
                @keyup.enter="siguienteInput('refApellidoReferido')"
                @keypress="proc_come_posi_ases_bind_nomb_terc($event)"
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
                ref="refApellidoReferido"
                v-model="apellidoReferido"
                placeholder="Apellido(s)"
                @keyup.enter="siguienteInput('refTelefonoReferido')"
                @keypress="proc_come_posi_ases_bind_apel_terc($event)"
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
              Teléfono
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="3"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                ref="refTelefonoReferido"
                v-model="telefonoReferido"
                placeholder="Teléfono"
                @keyup.enter="siguienteInput('refCorreoReferido')"
                @keypress="proc_come_posi_ases_bind_tele_terc($event)"
              />
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Correo
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="3"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                ref="refCorreoReferido"
                v-model="correoReferido"
                placeholder="Correo Electrónico"
                @keypress="proc_come_posi_ases_bind_corr_terc($event)"
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
              Departamento
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="3"
              sm="12"
              class="mb-1"
            >
              <v-select
                ref="refDepartamento"
                v-model="seleccionDepartamento"
                :options="dataDepartamento"
                class="w-100"
                placeholder="Seleccionar Departamento"
                append-to-body
                :calculate-position="withPopper"
                @input="proc_come_posi_ases_inpu_dpto()"
              >
                <span
                  slot="no-options"
                  @click="$refs.refDepartamento.open=false"
                >
                  Departamento no existe.
                </span>
              </v-select>
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Provincia
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="3"
              sm="12"
              class="mb-1"
            >
              <v-select
                ref="refProvincia"
                v-model="seleccionProvincia"
                :options="dataProvincia"
                class="w-100"
                placeholder="Seleccionar Provincia"
                append-to-body
                :calculate-position="withPopper"
                @input="proc_come_posi_ases_inpu_prov()"
              >
                <span
                  slot="no-options"
                  @click="$refs.refProvincia.open = false"
                >
                  Provincia no existe.
                </span>
              </v-select>
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Distrito
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="3"
              sm="12"
              class="mb-1"
            >
              <v-select
                ref="refDistrito"
                v-model="seleccionDistrito"
                :options="dataDistrito"
                class="w-100"
                placeholder="Seleccionar Distrito"
                append-to-body
                :calculate-position="withPopper"
              >
                <span
                  slot="no-options"
                  @click="$refs.refDistrito.open=false"
                >
                  Distrito no existe.
                </span>
              </v-select>
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
              xl="6"
              lg="6"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                ref="refUrbanizacionReferido"
                v-model="urbanizacionReferido"
                placeholder="Nombre de la urbanización"
                @keyup.enter="siguienteInput('refCalleReferido')"
                @keypress="proc_come_posi_ases_bind_urba_terc($event)"
              />
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              <b-form-input
                ref="refCalleReferido"
                v-model="calleReferido"
                placeholder="Nombre de la calle"
                @keyup.enter="siguienteInput('refCruceReferido')"
                @keypress="proc_come_posi_ases_bind_call_terc($event)"
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
            />
            <b-col
              xl="5"
              lg="5"
              md="4"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                ref="refCruceReferido"
                v-model="cruceReferido"
                placeholder="Cruce con calle"
                @keyup.enter="siguienteInput('refMzReferido')"
                @keypress="proc_come_posi_ases_bind_cruc_terc($event)"
              />
            </b-col>
            <b-col
              xl="1"
              lg="1"
              md="1"
              sm="2"
              class="mb-1 align-self-center"
            >
              <b-form-input
                ref="refMzReferido"
                v-model="mzReferido"
                placeholder="Mz"
                @keyup.enter="siguienteInput('refLtReferido')"
                @keypress="proc_come_posi_ases_bind_manz_terc($event)"
              />
            </b-col>
            <b-col
              xl="1"
              lg="1"
              md="1"
              sm="2"
              class="mb-1 align-self-center"
            >
              <b-form-input
                ref="refLtReferido"
                v-model="ltReferido"
                placeholder="Lt"
                @keyup.enter="siguienteInput('refNroReferido')"
                @keypress="proc_come_posi_ases_bind_lote_terc($event)"
              />
            </b-col>
            <b-col
              xl="1"
              lg="1"
              md="1"
              sm="2"
              class="mb-1 align-self-center"
            >
              <b-form-input
                ref="refNroReferido"
                v-model="nroReferido"
                placeholder="Nro"
                @keyup.enter="siguienteInput('refKmReferido')"
                @keypress="proc_come_posi_ases_bind_nume_terc($event)"
              />
            </b-col>
            <b-col
              xl="1"
              lg="1"
              md="1"
              sm="2"
              class="mb-1 align-self-center"
            >
              <b-form-input
                ref="refKmReferido"
                v-model="kmReferido"
                placeholder="Km"
                @keyup.enter="siguienteInput('refIntReferido')"
                @keypress="proc_come_posi_ases_bind_kilo_terc($event)"
              />
            </b-col>
            <b-col
              xl="1"
              lg="1"
              md="1"
              sm="2"
              class="mb-1 align-self-center"
            >
              <b-form-input
                ref="refIntReferido"
                v-model="intReferido"
                placeholder="Int"
                @keyup.enter="siguienteInput('refReferenciaReferido')"
                @keypress="proc_come_posi_ases_bind_inte_terc($event)"
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
              Referencia
            </b-col>
            <b-col
              xl="10"
              lg="10"
              md="9"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                ref="refReferenciaReferido"
                v-model="referenciaReferido"
                placeholder="Referencia"
                @keypress="proc_come_posi_ases_bind_refe_terc($event)"
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
              Medio Contacto
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="3"
              sm="12"
              class="mb-1"
            >
              <v-select
                ref="refMedioContacto"
                v-model="seleccionMedioContacto"
                :options="dataMedioContacto"
                class="w-100"
                placeholder="Seleccionar Medio Contacto"
                append-to-body
                :calculate-position="withPopper"
              >
                <span
                  slot="no-options"
                  @click="$refs.refMedioContacto.open = false"
                >
                  Medio contacto no existe.
                </span>
              </v-select>
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
import vSelect from 'vue-select'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'
import { createPopper } from '@popperjs/core'

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BCard,
    BFormInput,
    vSelect,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      placement: 'top',
      seleccionDepartamento: null,
      dataDepartamento: [],
      seleccionProvincia: null,
      dataProvincia: [],
      seleccionDistrito: null,
      dataDistrito: [],
      seleccionMedioContacto: null,
      dataMedioContacto: [],
      dniReferente: '',
      nombreReferente: '',
      apellidoReferente: '',
      dniReferido: '',
      nombreReferido: '',
      apellidoReferido: '',
      telefonoReferido: '',
      correoReferido: '',
      urbanizacionReferido: '',
      calleReferido: '',
      cruceReferido: '',
      mzReferido: '',
      ltReferido: '',
      nroReferido: '',
      kmReferido: '',
      intReferido: '',
      referenciaReferido: '',
    }
  },
  beforeCreate() {},
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  mounted() {
    this.proc_come_posi_ases_visi()
  },
  created() {
    this.proc_come_posi_ases_medi_cont()
    this.proc_come_posi_ases_dpto()
  },
  methods: {
    withPopper(dropdownList, component, { width }) {
      // eslint-disable-next-line
      dropdownList.style.width = width
      const popper = createPopper(component.$refs.toggle, dropdownList, {
        placement: this.placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -1],
            },
          },
          {
            name: 'toggleClass',
            enabled: true,
            phase: 'write',
            fn({ state }) {
              component.$el.classList.toggle(
                'drop-up',
                state.placement === 'top',
              )
            },
          },
        ],
      })
      return () => popper.destroy()
    },
    proc_come_posi_ases_bind_nume_iden(event) {
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
    proc_come_posi_ases_bind_nomb_terc(event) {
      const regex = new RegExp('^[a-zA-Z0-9 ]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_posi_ases_bind_apel_terc(event) {
      const regex = new RegExp('^[a-zA-Z0-9 ]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_posi_ases_bind_tele_terc(event) {
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
    proc_come_posi_ases_bind_corr_terc(event) {
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
    proc_come_posi_ases_bind_urba_terc(event) {
      const regex = new RegExp('^[a-zA-Z0-9 ]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_posi_ases_bind_call_terc(event) {
      const regex = new RegExp('^[a-zA-Z0-9 ]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_posi_ases_bind_cruc_terc(event) {
      const regex = new RegExp('^[a-zA-Z0-9 ]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_posi_ases_bind_manz_terc(event) {
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
    proc_come_posi_ases_bind_lote_terc(event) {
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
    proc_come_posi_ases_bind_nume_terc(event) {
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
    proc_come_posi_ases_bind_kilo_terc(event) {
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
    proc_come_posi_ases_bind_inte_terc(event) {
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
    proc_come_posi_ases_bind_refe_terc(event) {
      const regex = new RegExp('^[a-zA-Z0-9 ]+$')
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
    proc_come_posi_ases_inpu_dpto() {
      this.dataProvincia = []
      this.dataDistrito = []
      this.seleccionProvincia = null
      this.seleccionDistrito = null
      if (this.seleccionDepartamento !== null) {
        this.proc_come_posi_ases_prov()
      }
    },
    proc_come_posi_ases_inpu_prov() {
      this.dataDistrito = []
      this.seleccionDistrito = null
      if (this.seleccionProvincia !== null) {
        this.proc_come_posi_ases_dist()
      }
    },
    proc_come_posi_ases_limp() {
      this.seleccionDepartamento = null
      this.seleccionProvincia = null
      this.dataProvincia = []
      this.seleccionDistrito = null
      this.dataDistrito = []
      this.seleccionMedioContacto = null
      this.dniReferente = ''
      this.nombreReferente = ''
      this.apellidoReferente = ''
      this.dniReferido = ''
      this.nombreReferido = ''
      this.apellidoReferido = ''
      this.telefonoReferido = ''
      this.correoReferido = ''
      this.urbanizacionReferido = ''
      this.calleReferido = ''
      this.cruceReferido = ''
      this.mzReferido = ''
      this.ltReferido = ''
      this.nroReferido = ''
      this.kmReferido = ''
      this.intReferido = ''
      this.referenciaReferido = ''
    },
    async proc_come_posi_ases_medi_cont() {
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_posi_ases/posi_ases_medi_cont`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        const dato = await servicio.data.data_glob
        dato.forEach(element => this.dataMedioContacto.push({
          label: element.nomb_medi,
          value: element.cons_medi,
        }))
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
    async proc_come_posi_ases_dpto() {
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_posi_ases/posi_ases_dpto`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        const dato = await servicio.data.data_glob
        dato.forEach(element => this.dataDepartamento.push({
          label: element.nomb_dpto,
          value: element.cons_dpto,
        }))
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
    async proc_come_posi_ases_prov() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_posi_ases/posi_ases_ciud`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            cons_dpto: this.seleccionDepartamento.value,
          },
        })
        const dato = await servicio.data.data_glob
        dato.forEach(element => this.dataProvincia.push({
          label: element.nomb_ciud,
          value: element.cons_ciud,
        }))
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
    async proc_come_posi_ases_dist() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_posi_ases/posi_ases_dist`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            cons_ciud: this.seleccionProvincia.value,
          },
        })
        const dato = await servicio.data.data_glob
        dato.forEach(element => this.dataDistrito.push({
          label: element.nomb_barr,
          value: element.cons_barr,
        }))
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
    async proc_come_posi_ases_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'proc_come_posi_ases',
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
    async proc_come_posi_ases_vali_nume_iden_padr() {
      if (this.dniReferente.trim() === '') {
        this.nombreReferente = ''
        this.apellidoReferente = ''
      } else {
        this.$vs.loading({
          color: $themeColors.primary,
        })

        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_posi_ases/posi_ases_nume_iden_refe`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden: this.dniReferente.trim(),
            },
          })
          const data = await servicio.data.data_glob
          this.nombreReferente = data.nomb_terc
          this.apellidoReferente = data.apel_terc
          this.siguienteInput('refDniReferido')
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
    async proc_come_posi_ases_vali_nume_iden_hijo() {
      if (this.dniReferido.trim() === '') {
        this.siguienteInput('refDniReferido')
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'Error campo dni - ruc obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        this.$vs.loading({
          color: $themeColors.primary,
        })

        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_posi_ases/posi_ases_nume_iden`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden: this.dniReferido.trim(),
            },
          })
          let advertencia = await servicio.data.advertencia
          if (advertencia !== '') {
            advertencia = advertencia.toLowerCase()
            advertencia = advertencia.charAt(0).toUpperCase() + advertencia.slice(1)
            this.siguienteInput('refNombreReferido')
            setTimeout(() => {
              this.$vs.loading.close()
            }, 500)
            this.$toast(
              {
                component: ToastificationContent,
                props: {
                  title: 'Notificación',
                  icon: 'AlertTriangleIcon',
                  variant: 'warning',
                  text: advertencia,
                },
              },
              {
                position: 'bottom-right',
                timeout: 8000,
              },
            )
          } else {
            this.siguienteInput('refNombreReferido')
            setTimeout(() => {
              this.$vs.loading.close()
            }, 500)
          }
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
    async proc_come_posi_ases_regi() {
      this.$vs.loading({
        color: $themeColors.primary,
      })

      let mensaje = ''
      if (mensaje === '' && this.dniReferente === '') {
        mensaje = 'Error campo dni - ruc referente obligatorio.'
      }
      if (mensaje === '' && this.dniReferido === '') {
        mensaje = 'Error campo dni - ruc referido obligatorio.'
      }
      if (mensaje === '' && this.nombreReferido === '') {
        mensaje = 'Error campo nombre(s) obligatorio.'
      }
      if (mensaje === '' && this.apellidoReferido === '') {
        mensaje = 'Error campo apellido(s) obligatorio.'
      }
      if (mensaje === '' && this.seleccionDepartamento === null) {
        mensaje = 'Error campo departamento obligatorio.'
      }
      if (mensaje === '' && this.seleccionProvincia === null) {
        mensaje = 'Error campo provincia obligatorio.'
      }
      if (mensaje === '' && this.seleccionDistrito === null) {
        mensaje = 'Error campo distrito obligatorio.'
      }
      if (mensaje === '' && this.seleccionMedioContacto === null) {
        mensaje = 'Error campo medio contacto obligatorio.'
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
        let direAses = ''
        if (this.urbanizacionReferido.trim() !== '') {
          direAses += `Urb ${this.urbanizacionReferido.trim()} `
        }
        if (this.calleReferido.trim() !== '') {
          direAses += `Calle ${this.calleReferido.trim()} `
        }
        if (this.cruceReferido.trim() !== '') {
          direAses += `Cruce ${this.cruceReferido.trim()} `
        }
        if (this.mzReferido.trim() !== '') {
          direAses += `Mz ${this.mzReferido.trim()} `
        }
        if (this.ltReferido.trim() !== '') {
          direAses += `Lt ${this.ltReferido.trim()} `
        }
        if (this.nroReferido.trim() !== '') {
          direAses += `Nro ${this.nroReferido.trim()} `
        }
        if (this.kmReferido.trim() !== '') {
          direAses += `Km ${this.kmReferido.trim()} `
        }
        if (this.intReferido.trim() !== '') {
          direAses += `Int ${this.intReferido.trim()} `
        }
        direAses = direAses.trim()
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_posi_ases/posi_ases_regi`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden_refe: this.dniReferente.trim(),
              nume_iden: this.dniReferido.trim(),
              nomb_ases: this.nombreReferido.trim(),
              apel_ases: this.apellidoReferido.trim(),
              tele_ases: this.telefonoReferido.trim(),
              corr_ases: this.correoReferido.trim(),
              dire_ases: direAses,
              refe_ases: this.referenciaReferido.trim(),
              nomb_dpto: this.seleccionDepartamento.value,
              nomb_prov: this.seleccionProvincia.value,
              nomb_dist: this.seleccionDistrito.value,
              medi_cont: this.seleccionMedioContacto.value,
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
          this.proc_come_posi_ases_limp()
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
