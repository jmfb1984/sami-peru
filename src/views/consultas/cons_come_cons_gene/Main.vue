<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="proc_come_cons_gene_gene()"
      >
        <feather-icon
          icon="SearchIcon"
          class="mr-50 text-black"
        />
        <span class="text-black">
          Generar
        </span>
      </b-button>
      <b-button
        variant="danger"
        block
        @click="proc_come_cons_gene_limp()"
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
        @click="proc_come_cons_gene_gene()"
      >
        <feather-icon
          icon="SearchIcon"
          class="mr-50 text-black"
        />
        <span class="text-black">
          Generar
        </span>
      </b-button>
      <b-button
        variant="danger"
        class="ml-1"
        @click="proc_come_cons_gene_limp()"
      >
        <feather-icon
          icon="FileIcon"
          class="mr-50"
        />
        Limpiar
      </b-button>
    </div>
    <b-row>
      <b-col
        xl="2"
        lg="2"
        md="3"
        sm="12"
        xs="12"
        class="mb-1"
      >
        <span class="d-flex mt-50">Documento Identidad</span>
      </b-col>
      <b-col
        xl="4"
        lg="4"
        md="6"
        sm="12"
        xs="12"
        class="mb-1"
      >
        <b-form-input
          ref="refDocumentoIdentidad"
          v-model="documentoIdentidad"
          placeholder="DNI - RUC"
        />
      </b-col>
      <b-col
        class="d-block d-lg-none"
      />
      <b-col
        xl="2"
        lg="2"
        md="3"
        sm="12"
        xs="12"
        class="mb-1"
      >
        <span class="d-flex mt-50">Código</span>
      </b-col>
      <b-col
        xl="4"
        lg="4"
        md="6"
        sm="12"
        xs="12"
        class="mb-1"
      >
        <b-form-input
          ref="refCodigoCliente"
          v-model="codigoCliente"
          placeholder="Código Asesora"
        />
      </b-col>
    </b-row>
    <transition
      name="zoom-out"
      mode="out-in"
    >
      <b-row v-if="show && segmClie!==''">
        <b-col>
          <b-card>
            <div class="d-flex justify-content-between align-items-center">
              <div class="truncate">
                <h4 class="mb-25 mt-50 font-weight-bolder">
                  {{ segmClie }}
                </h4>
              </div>
              <b-avatar
                variant="light-primary"
                size="45"
              >
                <feather-icon
                  size="21"
                  icon="InfoIcon"
                />
              </b-avatar>
            </div>
            <div class="mt-50">
              <b-progress
                value="100"
                max="100"
                height="6px"
                variant="primary"
              />
            </div>
          </b-card>
        </b-col>
      </b-row>
    </transition>
    <transition
      name="zoom-out"
      mode="out-in"
    >
      <b-row v-if="show">
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-cartera-general
            :cons-terc="consTerc"
            :codi-terc="codiTerc"
          />
        </b-col>
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-factura-general
            :cons-terc="consTerc"
            :nume-iden="numeIden"
          />
        </b-col>
      </b-row>
    </transition>
    <transition
      name="zoom-out"
      mode="out-in"
    >
      <b-row v-if="show">
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-paquete-lider
            :cons-terc="consTerc"
          />
        </b-col>
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-premio-enviado
            :cons-terc="consTerc"
            :codi-zona="codiZona"
            :codi-cort="codiCort"
          />
        </b-col>
      </b-row>
    </transition>
    <transition
      name="zoom-out"
      mode="out-in"
    >
      <b-row v-if="show">
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-ingreso
            :cons-terc="consTerc"
            :nomb-terc="nombTerc"
          />
        </b-col>
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-movimiento-servicio
            :cons-terc="consTerc"
            :apel-terc="apelTerc"
          />
        </b-col>
      </b-row>
    </transition>
    <transition
      name="zoom-out"
      mode="out-in"
    >
      <b-row v-if="show">
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-premio-referido
            :cons-terc="consTerc"
            :fech-naci="fechNaci"
          />
        </b-col>
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-premio-venta
            :cons-terc="consTerc"
            :tele-terc="teleTerc"
          />
        </b-col>
      </b-row>
    </transition>
    <transition
      name="zoom-out"
      mode="out-in"
    >
      <b-row v-if="show">
        <b-col>
          <main-direccion
            :cons-terc="consTerc"
            :dire-terc="direTerc"
          />
        </b-col>
      </b-row>
    </transition>
    <transition
      name="zoom-out"
      mode="out-in"
    >
      <b-row v-if="show">
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-reclamo-premio
            :cons-terc="consTerc"
            :dist-terc="distTerc"
          />
        </b-col>
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-premio-enviar
            :cons-terc="consTerc"
            :prov-terc="provTerc"
          />
        </b-col>
      </b-row>
    </transition>
    <transition
      name="zoom-out"
      mode="out-in"
    >
      <b-row v-if="show">
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-recodificacion
            :cons-terc="consTerc"
            :camp-ingr="campIngr"
          />
        </b-col>
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-sancion
            :cons-terc="consTerc"
            :digi-terc="digiTerc"
            :ante-terc="anteTerc"
          />
        </b-col>
      </b-row>
    </transition>
    <transition
      name="zoom-out"
      mode="out-in"
    >
      <b-row v-if="show">
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-cupo
            :cons-terc="consTerc"
            :cupo-terc="cupoTerc"
          />
        </b-col>
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-cartera-documento
            :cons-terc="consTerc"
            :sald-cart="saldCart"
          />
        </b-col>
      </b-row>
    </transition>
    <transition
      name="zoom-out"
      mode="out-in"
    >
      <b-row v-if="show">
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-recibo
            :cons-terc="consTerc"
            :rrcc-terc="rrccTerc"
          />
        </b-col>
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-nota-credito
            :cons-terc="consTerc"
            :nncc-terc="nnccTerc"
          />
        </b-col>
      </b-row>
    </transition>
    <transition
      name="zoom-out"
      mode="out-in"
    >
      <b-row v-if="show">
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-estado-cuenta
            :cons-terc="consTerc"
            :nume-pedi="numePedi"
          />
        </b-col>
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-movimiento-referido
            :cons-terc="consTerc"
          />
        </b-col>
      </b-row>
    </transition>
    <transition
      name="zoom-out"
      mode="out-in"
    >
      <b-row v-if="show">
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-referencia-personal
            :cons-terc="consTerc"
            :valo-cast="valoCast"
          />
        </b-col>
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-sorteo-aniversario
            :cons-terc="consTerc"
          />
        </b-col>
      </b-row>
    </transition>
    <transition
      name="zoom-out"
      mode="out-in"
    >
      <b-row v-if="show">
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-ultima-reunion
            :cons-terc="consTerc"
            :refe-clie="refeClie"
          />
        </b-col>
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-club-felicidad
            :cons-terc="consTerc"
            :lide-clie="lideClie"
            :nomb-clie="nombTerc"
            :apel-clie="apelTerc"
          />
        </b-col>
      </b-row>
    </transition>
    <transition
      name="zoom-out"
      mode="out-in"
    >
      <b-row v-if="showGema">
        <b-col
          xl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <main-gema
            :cons-terc="consTerc"
            :nive-gema="niveGema"
          />
        </b-col>
      </b-row>
    </transition>
  </section>
</template>
<script>
import {
  BRow,
  BCol,
  BButton,
  BFormInput,
  BCard,
  BAvatar,
  BProgress,
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'
import MainCarteraGeneral from './MainCarteraGeneral.vue'
import MainFacturaGeneral from './MainFacturaGeneral.vue'
import MainPaqueteLider from './MainPaqueteLider.vue'
import MainPremioEnviado from './MainPremioEnviado.vue'
import MainIngreso from './MainIngreso.vue'
import MainMovimientoServicio from './MainMovimientoServicio.vue'
import MainPremioVenta from './MainPremioVenta.vue'
import MainPremioReferido from './MainPremioReferido.vue'
import MainDireccion from './MainDireccion.vue'
import MainReclamoPremio from './MainReclamoPremio.vue'
import MainPremioEnviar from './MainPremioEnviar.vue'
import MainRecodificacion from './MainRecodificacion.vue'
import MainSancion from './MainSancion.vue'
import MainCupo from './MainCupo.vue'
import MainCarteraDocumento from './MainCarteraDocumento.vue'
import MainRecibo from './MainRecibo.vue'
import MainNotaCredito from './MainNotaCredito.vue'
import MainEstadoCuenta from './MainEstadoCuenta.vue'
import MainMovimientoReferido from './MainMovimientoReferido.vue'
import MainReferenciaPersonal from './MainReferenciaPersonal.vue'
import MainSorteoAniversario from './MainSorteoAniversario.vue'
import MainUltimaReunion from './MainUltimaReunion.vue'
import MainClubFelicidad from './MainClubFelicidad.vue'
import MainGema from './MainGema.vue'

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BFormInput,
    MainCarteraGeneral,
    MainFacturaGeneral,
    MainPaqueteLider,
    MainPremioEnviado,
    MainIngreso,
    MainMovimientoServicio,
    MainPremioVenta,
    MainPremioReferido,
    MainDireccion,
    MainReclamoPremio,
    MainPremioEnviar,
    MainRecodificacion,
    MainSancion,
    MainCupo,
    MainCarteraDocumento,
    MainRecibo,
    MainNotaCredito,
    MainEstadoCuenta,
    MainMovimientoReferido,
    MainReferenciaPersonal,
    MainSorteoAniversario,
    MainUltimaReunion,
    MainClubFelicidad,
    MainGema,
    BCard,
    BAvatar,
    BProgress,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      documentoIdentidad: '',
      codigoCliente: '',
      show: false,
      showGema: false,
      codiTerc: '',
      numeIden: '',
      consTerc: 0,
      codiZona: '',
      codiCort: '',
      nombTerc: '',
      apelTerc: '',
      fechNaci: '',
      teleTerc: '',
      direTerc: '',
      distTerc: '',
      provTerc: '',
      digiTerc: '',
      anteTerc: '',
      saldCart: '',
      cupoTerc: '',
      rrccTerc: '',
      nnccTerc: '',
      numePedi: '',
      campIngr: '',
      valoCast: '',
      refeClie: '',
      lideClie: '',
      clieGema: '',
      niveGema: '',
      segmClie: '',
    }
  },
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
    this.proc_come_cons_gene_visi()
  },
  methods: {
    async proc_come_cons_gene_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'cons_come_cons_gene',
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
    async proc_come_cons_gene_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.proc_come_cons_gene_limp()
      if (this.documentoIdentidad.trim() === '' && this.codigoCliente.trim() === '') {
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
              text: 'Campo Documento Identidad o Código es obligatorio.',
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
            url: `${store.state.app.webService}/sami_v1/cons_come_cons_gene/cons_clie_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden: this.documentoIdentidad.trim(),
              codi_terc: this.codigoCliente.trim(),
              codi_zona: JSON.parse(this.userData.zona),
            },
          })
          const data = await servicio.data.data_glob
          this.codiTerc = data[0].codi_terc
          this.numeIden = data[0].nume_iden
          // eslint-disable-next-line
          this.consTerc = parseInt(data[0].cons_terc)
          this.nombTerc = data[0].nomb_terc
          this.apelTerc = data[0].apel_terc
          this.codiZona = data[0].codi_zona
          this.codiCort = data[0].codi_cort
          this.fechNaci = data[0].fech_naci
          this.teleTerc = data[0].tele_terc
          this.direTerc = data[0].dire_terc
          this.distTerc = data[0].nomb_barr
          this.provTerc = data[0].nomb_ciud
          this.digiTerc = data[0].digi_terc
          this.anteTerc = data[0].ante_terc
          this.cupoTerc = data[0].cupo_cred
          this.saldCart = data[0].sald_docu
          this.rrccTerc = data[0].sald_ingr
          this.nnccTerc = data[0].sald_nota
          this.numePedi = data[0].nume_pedi
          this.campIngr = data[0].camp_ingr
          this.valoCast = data[0].valo_cast
          this.refeClie = data[0].refe_clie
          this.lideClie = data[0].lide_clie
          this.clieGema = data[0].clie_gema
          this.niveGema = data[0].nive_gema
          if (this.clieGema === 'X') {
            this.showGema = true
          }
          const descSegm = data[0].desc_segm
          const asesEstr = data[0].ases_estr
          if (descSegm !== '') {
            this.segmClie += `${descSegm}`
          }
          if (asesEstr !== '') {
            if (this.segmClie !== '') {
              this.segmClie += ' | '
            }
            this.segmClie += 'Asesora estrella'
          }
          if (this.clieGema !== '') {
            if (this.segmClie !== '') {
              this.segmClie += ' | '
            }
            this.segmClie += `Nivel gemmas ${this.niveGema}`
          }
          this.show = true
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
    async proc_come_cons_gene_limp() {
      this.show = false
      this.codiTerc = ''
      this.numeIden = ''
      this.consTerc = 0
      this.codiZona = ''
      this.codiCort = ''
      this.nombTerc = ''
      this.apelTerc = ''
      this.fechNaci = ''
      this.teleTerc = ''
      this.direTerc = ''
      this.distTerc = ''
      this.provTerc = ''
      this.digiTerc = ''
      this.anteTerc = ''
      this.saldCart = ''
      this.cupoTerc = ''
      this.rrccTerc = ''
      this.nnccTerc = ''
      this.numePedi = ''
      this.campIngr = ''
      this.valoCast = ''
      this.refeClie = ''
      this.lideClie = ''
      this.segmClie = ''
    },
  },
}
</script>
