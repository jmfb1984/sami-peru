<template>
  <section id="mainMovimientoServicio">
    <b-card>
      <div class="d-flex justify-content-between align-items-center">
        <div class="truncate">
          <span :class="claseSpan">Apellido(s) : {{ apelTerc }}</span>
          <h4 class="mb-25 mt-50 font-weight-bolder">
            <b-link
              :class="claseLink"
              @click="proc_come_cons_gene_serv_gene()"
            >
              Movimiento Servicio
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
      ref="ref-servicio"
      hide-footer
      scrollable
      no-close-on-backdrop
      :modal-class="claseModal"
      size="xl"
      title="Movimiento de Servicios"
    >
      <b-card>
        <div class="d-flex justify-content-between flex-wrap">
          <!-- filter -->
          <b-form-group
            label="Filtro"
            label-cols-sm="2"
            label-align-sm="left"
            label-for="filterInput"
            class="mb-1 ml-0"
          >
            <b-input-group size="sm">
              <b-form-input
                id="filterInput"
                v-model="filterServicio"
                type="search"
                placeholder="Ingresar filtro"
              />
              <b-input-group-append>
                <b-button
                  :disabled="!filterServicio"
                  @click="filterServicio = ''"
                >
                  Limpiar
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </div>
        <b-table
          responsive
          striped
          hover
          show-empty
          bordered
          :small="true"
          :busy="cargandoServicio"
          :items="itemsServicio"
          :fields="fieldsServicio"
          :filter="filterServicio"
          :filter-included-fields="filterOnServicio"
          empty-filtered-text="No se encontro ningun resultado"
          empty-text="Servicio vacio"
        >
          <template #empty="scope">
            <h4
              class="text-center my-2"
            >
              {{ scope.emptyText }}
            </h4>
          </template>
          <template #emptyfiltered="scope">
            <h4
              class="text-center my-2"
            >
              {{ scope.emptyFilteredText }}
            </h4>
          </template>
          <template #table-busy>
            <div :class="claseCargando">
              <b-spinner class="align-middle" />
              <strong class="ml-1">Cargando ...</strong>
            </div>
          </template>
          <template #cell(codi_sali)="row">
            <b-button
              class="mr-1"
              variant="flat-warning"
              @click="proc_come_cons_gene_serv_deta_gene(row.item.codi_sali)"
            >
              {{ row.item.codi_sali }}
            </b-button>
          </template>
        </b-table>
      </b-card>
    </b-modal>
    <b-modal
      ref="ref-servicio-detalle"
      hide-footer
      scrollable
      no-close-on-backdrop
      :modal-class="claseModal"
      title="Producto Salida"
    >
      <b-overlay
        :show="show"
        spinner-variant="primary"
        variant="transparent"
      >
        <b-card>
          <b-card-text
            class="item-description"
          >
            {{ codigoProducto }}
          </b-card-text>
          <b-card-text
            class="item-description"
          >
            {{ nombreProducto }}
          </b-card-text>
          <b-card-text
            class="item-description"
          >
            {{ unidadProducto }}
          </b-card-text>
        </b-card>
      </b-overlay>
    </b-modal>
  </section>
</template>
<script>
import {
  BButton,
  BCard,
  BCardText,
  BFormInput,
  BAvatar,
  BProgress,
  BLink,
  BModal,
  BTable,
  BFormGroup,
  BInputGroup,
  BInputGroupAppend,
  BSpinner,
  BOverlay,
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

export default {
  components: {
    BButton,
    BCard,
    BCardText,
    BFormInput,
    BAvatar,
    BProgress,
    BLink,
    BModal,
    BTable,
    BFormGroup,
    BInputGroup,
    BInputGroupAppend,
    BSpinner,
    BOverlay,
  },
  props: {
    consTerc: {
      type: Number,
      default: 0,
    },
    apelTerc: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      cargandoServicio: false,
      filterServicio: null,
      filterOnServicio: [],
      fieldsServicio: [
        {
          label: 'Fecha Movimiento',
          key: 'fech_movi',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Nro Documento',
          key: 'nume_docu',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Nro Servicio',
          key: 'nume_serv',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Camp. Fact.',
          key: 'codi_camp',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Camp. Recl.',
          key: 'codi_cams',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Tipo',
          key: 'tipo_serv',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Indi.',
          key: 'proc_indi',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Factura',
          key: 'nume_fact',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Producto',
          key: 'codi_prod',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Descripción',
          key: 'nomb_prod',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-left',
        },
        {
          label: 'Salida',
          key: 'codi_sali',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Cantidad',
          key: 'cant_movi',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Ofer.',
          key: 'indi_ofer',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Nro Nota',
          key: 'nume_nota',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Conc.',
          key: 'codi_conc',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Sub Conc.',
          key: 'codi_subc',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Usuario',
          key: 'acti_usua',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-left',
        },
        {
          label: 'Observación',
          key: 'obse_item',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-left',
        },
      ],
      itemsServicio: [],
      codigoProducto: '',
      nombreProducto: '',
      unidadProducto: '',
      show: false,
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
    async proc_come_cons_gene_serv_gene() {
      this.filterServicio = null
      this.filterOnServicio = []
      this.cargandoServicio = true
      this.$refs['ref-servicio'].show()
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/cons_come_cons_gene/cons_clie_gene_serv_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            cons_terc: this.consTerc,
          },
        })
        this.itemsServicio = await servicio.data.data_glob
        this.cargandoServicio = false
      } catch (error) {
        this.itemsServicio = []
        this.cargandoServicio = false
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
    async proc_come_cons_gene_serv_deta_gene(codiProd) {
      this.codigoProducto = ''
      this.nombreProducto = ''
      this.unidadProducto = ''
      this.show = true
      this.$refs['ref-servicio-detalle'].show()
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/cons_come_cons_gene/cons_clie_gene_serv_deta_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            cons_terc: this.consTerc,
            codi_prod: codiProd,
          },
        })
        const resultado = await servicio.data.data_glob
        this.codigoProducto = `Código : ${resultado[0].codi_prod}`
        this.nombreProducto = `Producto : ${resultado[0].nomb_prod}`
        this.unidadProducto = `Unidad : ${resultado[0].codi_unid}`
        this.show = false
      } catch (error) {
        this.show = false
        this.$refs['ref-servicio-detalle'].hide()
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
