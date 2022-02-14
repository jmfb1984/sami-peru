<template>
  <section id="mainPaqueteLider">
    <b-card>
      <div class="d-flex justify-content-between align-items-center">
        <div class="truncate">
          <span :class="claseSpan">Consecutivo : {{ consTerc }}</span>
          <h4 class="mb-25 mt-50 font-weight-bolder">
            <b-link
              :class="claseLink"
              @click="proc_come_cons_gene_lide_gene()"
            >
              Paquete Líder
            </b-link>
          </h4>
        </div>
        <b-avatar
          variant="light-primary"
          size="45"
        >
          <feather-icon
            size="21"
            icon="ShoppingBagIcon"
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
    <b-modal
      ref="ref-paquete-lider"
      hide-footer
      scrollable
      no-close-on-backdrop
      size="xl"
      :modal-class="claseModal"
      title="Paquete Líder"
    >
      <b-card>
        <b-row>
          <b-col
            xl="2"
            lg="2"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseLink"
              class="font-weight-normal"
            >
              Código
            </span>
          </b-col>
          <b-col
            xl="10"
            lg="10"
            md="9"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseSpan"
            >
              {{ codigoLider }}
            </span>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            xl="2"
            lg="2"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseLink"
              class="font-weight-normal"
            >
              Nombre(s)
            </span>
          </b-col>
          <b-col
            xl="4"
            lg="4"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseSpan"
            >
              {{ nombreLider }}
            </span>
          </b-col>
          <b-col
            xl="2"
            lg="2"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseLink"
              class="font-weight-normal"
            >
              Apellido(s)
            </span>
          </b-col>
          <b-col
            xl="4"
            lg="4"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseSpan"
            >
              {{ apellidoLider }}
            </span>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            xl="2"
            lg="2"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseLink"
              class="font-weight-normal"
            >
              Fec. Ing.
            </span>
          </b-col>
          <b-col
            xl="4"
            lg="4"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseSpan"
            >
              {{ fechaIngresoLider }}
            </span>
          </b-col>
          <b-col
            xl="2"
            lg="2"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseLink"
              class="font-weight-normal"
            >
              Camp. Ing.
            </span>
          </b-col>
          <b-col
            xl="4"
            lg="4"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseSpan"
            >
              {{ campanaIngresoLider }}
            </span>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            xl="2"
            lg="2"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseLink"
              class="font-weight-normal"
            >
              Esta. Cal.
            </span>
          </b-col>
          <b-col
            xl="4"
            lg="4"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseSpan"
            >
              {{ estadoCalcLider }}
            </span>
          </b-col>
          <b-col
            xl="2"
            lg="2"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseLink"
              class="font-weight-normal"
            >
              Esta. Act.
            </span>
          </b-col>
          <b-col
            xl="4"
            lg="4"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseSpan"
            >
              {{ estadoActuLider }}
            </span>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            xl="2"
            lg="2"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseLink"
              class="font-weight-normal"
            >
              Camp. Ret.
            </span>
          </b-col>
          <b-col
            xl="4"
            lg="4"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseSpan"
            >
              {{ campanaRetiroLider }}
            </span>
          </b-col>
          <b-col
            xl="2"
            lg="2"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseLink"
              class="font-weight-normal"
            >
              Moti. Ret.
            </span>
          </b-col>
          <b-col
            xl="4"
            lg="4"
            md="3"
            sm="12"
            xs="12"
            class="mb-1"
          >
            <span
              :class="claseSpan"
            >
              {{ motivoRetiroLider }}
            </span>
          </b-col>
        </b-row>
        <b-table
          v-for="(item, index) in itemsPaqueteLider"
          :key="index"
          responsive
          striped
          hover
          caption-top
          bordered
          show-empty
          :small="true"
          :items="item.data_deta"
          :fields="fieldsPaqueteLider"
          empty-text="Paquete líder vacio"
          class="mb-1"
        >
          <template #empty="scope">
            <h4
              class="text-center my-2"
            >
              {{ scope.emptyText }}
            </h4>
          </template>
          <template #table-caption>
            <div class="d-flex justify-content-between align-items-center">
              <span class="text-warning">Campaña : {{ item.codi_camp }}</span>
              <span class="text-warning">Código Paquete : {{ item.codi_prod }} {{ item.nomb_prod }}</span>
              <span class="text-warning">Referido : {{ item.cant_refe }}</span>
            </div>
          </template>
        </b-table>
      </b-card>
    </b-modal>
  </section>
</template>
<script>
import { $themeColors } from '@themeConfig'
import {
  BRow,
  BCol,
  BCard,
  BAvatar,
  BProgress,
  BLink,
  BModal,
  BTable,
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BAvatar,
    BProgress,
    BLink,
    BModal,
    BTable,
  },
  props: {
    consTerc: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      codigoLider: '',
      nombreLider: '',
      apellidoLider: '',
      fechaIngresoLider: '',
      campanaIngresoLider: '',
      estadoCalcLider: '',
      estadoActuLider: '',
      campanaRetiroLider: '',
      motivoRetiroLider: '',
      fieldsPaqueteLider: [
        {
          label: 'Producto',
          key: 'codi_prod',
          sortable: true,
          class: 'class-width-120',
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Nombre',
          key: 'nomb_prod',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-left',
        },
        {
          label: 'Cantidad',
          key: 'cant_prod',
          sortable: true,
          class: 'class-width-120',
          thClass: 'text-center',
          tdClass: 'text-center',
        },
      ],
      itemsPaqueteLider: [],
    }
  },
  computed: {
    claseSpan() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'text-white'
      }
      return ''
    },
    claseCargando() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'text-center text-primary my-2'
      }
      return 'text-center my-2'
    },
    claseModal() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'modal-primary'
      }
      return ''
    },
    claseLink() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'text-secondary'
      }
      return 'text-dark'
    },
  },
  methods: {
    async proc_come_cons_gene_lide_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/cons_come_cons_gene/cons_clie_gene_lide_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            cons_terc: this.consTerc,
          },
        })
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$refs['ref-paquete-lider'].show()
        const data = await servicio.data.data_glob
        this.codigoLider = data[0].codi_terc
        this.nombreLider = data[0].nomb_terc
        this.apellidoLider = data[0].apel_terc
        this.fechaIngresoLider = data[0].fech_ingr
        this.campanaIngresoLider = data[0].camp_ingr
        this.estadoCalcLider = data[0].acti_calc
        this.estadoActuLider = data[0].acti_esta
        this.campanaRetiroLider = data[0].camp_reti
        this.motivoRetiroLider = data[0].moti_reti
        this.itemsPaqueteLider = await servicio.data.data_deta
      } catch (error) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.itemsPaqueteLider = []
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
  },
}
</script>
