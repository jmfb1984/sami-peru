<template>
  <section id="mainFacturaGeneral">
    <b-card>
      <div class="d-flex justify-content-between align-items-center">
        <div class="truncate">
          <span :class="claseSpan">Identificación : {{ numeIden }}</span>
          <h4 class="mb-25 mt-50 font-weight-bolder">
            <b-link
              :class="claseLink"
              @click="proc_come_cons_gene_fact_gene()"
            >
              Facturas Generales
            </b-link>
          </h4>
        </div>
        <b-avatar
          variant="light-primary"
          size="45"
        >
          <feather-icon
            size="21"
            icon="ShoppingCartIcon"
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
      ref="ref-factura-general"
      hide-footer
      scrollable
      no-close-on-backdrop
      :modal-class="claseModal"
      size="xl"
      title="Factura General"
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
                v-model="filterFacturaGeneral"
                type="search"
                placeholder="Ingresar filtro"
              />
              <b-input-group-append>
                <b-button
                  :disabled="!filterFacturaGeneral"
                  @click="filterFacturaGeneral = ''"
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
          :busy="cargandoFacturaGeneral"
          :items="itemsFacturaGeneral"
          :fields="fieldsFacturaGeneral"
          :filter="filterFacturaGeneral"
          :filter-included-fields="filterOnFacturaGeneral"
          empty-filtered-text="No se encontro ningun resultado"
          empty-text="Factura general vacia"
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
          <template #cell(nume_fact)="row">
            <b-button
              class="mr-1"
              variant="flat-warning"
              @click="proc_come_cons_gene_fact_deta_gene(row.item.nume_fact)"
            >
              {{ row.item.nume_fact }}
            </b-button>
          </template>
        </b-table>
      </b-card>
    </b-modal>
    <b-modal
      ref="ref-factura-general-detalle"
      hide-footer
      scrollable
      no-close-on-backdrop
      :modal-class="claseModal"
      size="xl"
      title="Detalle Factura"
    >
      <b-card>
        <div class="d-flex justify-content-between flex-wrap">
          <!-- filter -->
          <b-form-group
            label="Filtro"
            label-cols-sm="2"
            label-align-sm="left"
            label-for="filterInput"
            class="mb-0 ml-0"
          >
            <b-input-group size="sm">
              <b-form-input
                id="filterInput"
                v-model="filterFacturaGeneralDetalle"
                type="search"
                placeholder="Ingresar filtro"
              />
              <b-input-group-append>
                <b-button
                  :disabled="!filterFacturaGeneralDetalle"
                  @click="filterFacturaGeneralDetalle = ''"
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
          caption-top
          bordered
          :small="true"
          :busy="cargandoFacturaGeneralDetalle"
          :items="itemsFacturaGeneralDetalle"
          :fields="fieldsFacturaGeneralDetalle"
          :filter="filterFacturaGeneralDetalle"
          :filter-included-fields="filterOnFacturaGeneralDetalle"
          empty-filtered-text="No se encontro ningun resultado"
          empty-text="Detalle factura vacio"
        >
          <template #table-caption>
            <span class="text-warning">Documento : {{ facturaDetalle }}</span>
          </template>
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
        </b-table>
      </b-card>
    </b-modal>
  </section>
</template>
<script>
import {
  BButton,
  BCard,
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
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

export default {
  components: {
    BButton,
    BCard,
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
  },
  props: {
    consTerc: {
      type: Number,
      default: 0,
    },
    numeIden: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      cargandoFacturaGeneral: false,
      filterFacturaGeneral: null,
      filterOnFacturaGeneral: [],
      fieldsFacturaGeneral: [
        {
          label: 'Numero',
          key: 'nume_fact',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Tipo Documento',
          key: 'tipo_docu',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-left',
        },
        {
          label: 'Factura Electrónica',
          key: 'fact_srii',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Campaña',
          key: 'codi_camp',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'F. Ingreso',
          key: 'fech_ingr',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Fecha',
          key: 'fech_docu',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Nro Pedido',
          key: 'nume_iden',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Total',
          key: 'tota_fact',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Neto',
          key: 'tota_neto',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Orden',
          key: 'tota_orde',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Flete',
          key: 'tota_flet',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Igv',
          key: 'tota_ivaa',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Público',
          key: 'tota_publ',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Ptos Descontados',
          key: 'punt_desc',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Estado',
          key: 'esta_pedi',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Pedidos',
          key: 'nume_pedi',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Embalaje',
          key: 'esta_emba',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'F. Embalaje',
          key: 'fech_emba',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'F. Recibido',
          key: 'fech_reci',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Empaque',
          key: 'fech_empa',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'F. Envio',
          key: 'fech_envi',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'E. Envio',
          key: 'esta_envi',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Usuario',
          key: 'acti_usua',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'C. Cajas',
          key: 'cant_caja',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
      ],
      itemsFacturaGeneral: [],
      cargandoFacturaGeneralDetalle: false,
      filterFacturaGeneralDetalle: null,
      filterOnFacturaGeneralDetalle: [],
      fieldsFacturaGeneralDetalle: [
        {
          label: 'Codi. Prod.',
          key: 'codi_prod',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Codi. Vent.',
          key: 'codi_vent',
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
          label: 'Linea',
          key: 'nomb_line',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-left',
        },
        {
          label: 'Unid.',
          key: 'nomb_unid',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Cant. Pedi.',
          key: 'camt_pedi',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Cant. Desp.',
          key: 'cant_desp',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Cant. Eval.',
          key: 'cant_eval',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Cant. Emba.',
          key: 'cant_emba',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Cant. Devo.',
          key: 'cant_devo',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Valor Cata.',
          key: 'valo_cata',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Igv',
          key: 'valo_ivaa',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Indi.',
          key: 'indi_ofer',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: '% Desc.',
          key: 'porc_desc',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Prec. Neto',
          key: 'prec_neto',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Neto + Igv',
          key: 'prec_tota',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Catálogo',
          key: 'tota_cata',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Ganancia',
          key: 'tota_gana',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Esta. Emba.',
          key: 'esta_emba',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Puntos',
          key: 'tota_punt',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Pagina',
          key: 'nume_pagi',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Desc. Conc.',
          key: 'desc_conc',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
      ],
      itemsFacturaGeneralDetalle: [],
      facturaDetalle: '',
    }
  },
  computed: {
    clasePopUp() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return '#283046'
      }
      return ''
    },
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
    async proc_come_cons_gene_fact_gene() {
      this.filterFacturaGeneral = null
      this.filterOnFacturaGeneral = []
      this.cargandoFacturaGeneral = true
      this.$refs['ref-factura-general'].show()
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/cons_come_cons_gene/cons_clie_gene_fact_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            cons_terc: this.consTerc,
          },
        })
        this.itemsFacturaGeneral = await servicio.data.data_glob
        this.cargandoFacturaGeneral = false
      } catch (error) {
        this.itemsFacturaGeneral = []
        this.cargandoFacturaGeneral = false
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
    async proc_come_cons_gene_fact_deta_gene(numeDocu, ctrlIndi) {
      this.facturaDetalle = numeDocu
      this.filterFacturaGeneralDetalle = null
      this.filterOnFacturaGeneralDetalle = []
      this.cargandoFacturaGeneralDetalle = true
      this.$refs['ref-factura-general-detalle'].show()
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/cons_come_cons_gene/cons_clie_gene_fact_deta_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            cons_terc: this.consTerc,
            nume_docu: numeDocu,
            ctrl_indi: ctrlIndi,
          },
        })
        this.itemsFacturaGeneralDetalle = await servicio.data.data_glob
        this.cargandoFacturaGeneralDetalle = false
      } catch (error) {
        this.itemsFacturaGeneralDetalle = []
        this.cargandoFacturaGeneralDetalle = false
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
