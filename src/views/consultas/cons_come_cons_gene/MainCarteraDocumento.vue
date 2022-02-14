<template>
  <section id="mainCarteraDocumento">
    <b-card>
      <div class="d-flex justify-content-between align-items-center">
        <div class="truncate">
          <span :class="claseSpan">Saldo Cartera : {{ saldCart }}</span>
          <h4 class="mb-25 mt-50 font-weight-bolder">
            <b-link
              :class="claseLink"
              @click="proc_come_cons_gene_cart_docu_gene()"
            >
              Cartera por Documento
            </b-link>
          </h4>
        </div>
        <b-avatar
          variant="light-primary"
          size="45"
        >
          <feather-icon
            size="21"
            icon="DollarSignIcon"
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
      ref="ref-cartera-documento"
      hide-footer
      scrollable
      no-close-on-backdrop
      :modal-class="claseModal"
      size="xl"
      title="Cartera Detallada por Documento"
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
                v-model="filterCarteraDocumento"
                type="search"
                placeholder="Ingresar filtro"
              />
              <b-input-group-append>
                <b-button
                  :disabled="!filterCarteraDocumento"
                  @click="filterCarteraDocumento = ''"
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
          :busy="cargandoCarteraDocumento"
          :items="itemsCarteraDocumento"
          :fields="fieldsCarteraDocumento"
          :filter="filterCarteraDocumento"
          :filter-included-fields="filterOnCarteraDocumento"
          empty-filtered-text="No se encontro ningun resultado"
          empty-text="Cartera detallada por documento vacio"
        >
          <template #cell(nume_docu)="row">
            <b-button
              class="mr-1"
              variant="flat-warning"
              @click="proc_come_cons_gene_cart_docu_deta_gene(row.item.nume_docu, row.item.indi_inte)"
            >
              {{ row.item.nume_docu }}
            </b-button>
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
    <b-modal
      ref="ref-cartera-documento-detalle"
      hide-footer
      scrollable
      no-close-on-backdrop
      :modal-class="claseModal"
      size="xl"
      title="Detalle de Ingreso Aplicado"
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
                v-model="filterCarteraDocumentoDetalle"
                type="search"
                placeholder="Ingresar filtro"
              />
              <b-input-group-append>
                <b-button
                  :disabled="!filterCarteraDocumentoDetalle"
                  @click="filterCarteraDocumentoDetalle = ''"
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
          :busy="cargandoCarteraDocumentoDetalle"
          :items="itemsCarteraDocumentoDetalle"
          :fields="fieldsCarteraDocumentoDetalle"
          :filter="filterCarteraDocumentoDetalle"
          :filter-included-fields="filterOnCarteraDocumentoDetalle"
          empty-filtered-text="No se encontro ningun resultado"
          empty-text="Detalle de ingreso aplicado vacio"
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
    saldCart: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      cargandoCarteraDocumento: false,
      filterCarteraDocumento: null,
      filterOnCarteraDocumento: [],
      fieldsCarteraDocumento: [
        {
          label: 'Campaña',
          key: 'codi_camp',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Tipo',
          key: 'codi_docu',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Documento',
          key: 'desc_docu',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-left',
        },
        {
          label: 'Número',
          key: 'nume_docu',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Fecha Documento',
          key: 'fech_docu',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Nro Cuota',
          key: 'indi_inte',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Fech. Cierre 01',
          key: 'fech_ve31',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Fech. Cierre 02',
          key: 'fech_ve31',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Fech. Cierre 03',
          key: 'fech_ve45',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Valor Docu.',
          key: 'valo_docu',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Saldo Docu.',
          key: 'sald_docu',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Estado',
          key: 'esta_docu',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
      ],
      itemsCarteraDocumento: [],
      cargandoCarteraDocumentoDetalle: false,
      filterCarteraDocumentoDetalle: null,
      filterOnCarteraDocumentoDetalle: [],
      fieldsCarteraDocumentoDetalle: [
        {
          label: 'Campaña',
          key: 'codi_camp',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Nro Ingreso',
          key: 'nume_ingr',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-left',
        },
        {
          label: 'Concepto',
          key: 'codi_conc',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Documento',
          key: 'desc_docu',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-left',
        },
        {
          label: 'Numero',
          key: 'nume_docu',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Nro Cuota',
          key: 'indi_inte',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Valor Ingreso',
          key: 'valo_ingr',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Fecha',
          key: 'fech_apli',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
        {
          label: 'Estado',
          key: 'acti_ingr',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-center',
        },
      ],
      itemsCarteraDocumentoDetalle: [],
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
    async proc_come_cons_gene_cart_docu_gene() {
      this.filterCarteraDocumento = null
      this.filterOnCarteraDocumento = []
      this.cargandoCarteraDocumento = true
      this.$refs['ref-cartera-documento'].show()
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/cons_come_cons_gene/cons_clie_gene_cart_docu_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            cons_terc: this.consTerc,
          },
        })
        this.itemsCarteraDocumento = await servicio.data.data_glob
        this.cargandoCarteraDocumento = false
      } catch (error) {
        this.itemsCarteraDocumento = []
        this.cargandoCarteraDocumento = false
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
    async proc_come_cons_gene_cart_docu_deta_gene(numeDocu, indiInte) {
      this.filterCarteraDocumentoDetalle = null
      this.filterOnCarteraDocumentoDetalle = []
      this.cargandoCarteraDocumentoDetalle = true
      this.$refs['ref-cartera-documento-detalle'].show()
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/cons_come_cons_gene/cons_clie_gene_cart_docu_deta_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            cons_terc: this.consTerc,
            nume_docu: numeDocu,
            indi_inte: indiInte,
          },
        })
        this.itemsCarteraDocumentoDetalle = await servicio.data.data_glob
        this.cargandoCarteraDocumentoDetalle = false
      } catch (error) {
        this.itemsCarteraDocumentoDetalle = []
        this.cargandoCarteraDocumentoDetalle = false
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
