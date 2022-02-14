<template>
  <section id="mainClubFelicidad">
    <b-card>
      <div class="d-flex justify-content-between align-items-center">
        <div class="truncate">
          <span :class="claseSpan">Líder : {{ lideClie }}</span>
          <h4 class="mb-25 mt-50 font-weight-bolder">
            <b-link
              :class="claseLink"
              @click="proc_come_cons_gene_club_feli_gene()"
            >
              Club de la Felicidad
            </b-link>
          </h4>
        </div>
        <b-avatar
          variant="light-primary"
          size="45"
        >
          <feather-icon
            size="21"
            icon="SmileIcon"
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
      ref="ref-club-felicidad"
      hide-footer
      scrollable
      no-close-on-backdrop
      :modal-class="claseModal"
      size="xl"
      title="Club de la Felicidad"
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
                v-model="filterClubFelicidad"
                type="search"
                placeholder="Ingresar filtro"
              />
              <b-input-group-append>
                <b-button
                  :disabled="!filterClubFelicidad"
                  @click="filterClubFelicidad = ''"
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
          caption-top
          :small="true"
          :busy="cargandoClubFelicidad"
          :items="itemsClubFelicidad"
          :fields="fieldsClubFelicidad"
          :filter="filterClubFelicidad"
          :filter-included-fields="filterOnClubFelicidad"
          empty-filtered-text="No se encontro ningun resultado"
          empty-text="Club felicidad vacia"
        >
          <template #table-caption>
            <div class="d-flex justify-content-between align-items-center">
              <span class="text-warning">{{ nombConc }}</span>
              <span class="text-warning">{{ nombClie }} {{ apelClie }} | {{ campActu }}</span>
            </div>
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
        <b-table
          responsive
          striped
          hover
          show-empty
          bordered
          caption-top
          :small="true"
          :busy="cargandoClubFelicidadDetalle"
          :items="itemsClubFelicidadDetalle"
          :fields="fieldsClubFelicidadDetalle"
          :filter="filterClubFelicidadDetalle"
          :filter-included-fields="filterOnClubFelicidadDetalle"
          empty-filtered-text="No se encontro ningun resultado"
          empty-text="Club felicidad historico vacia"
        >
          <template #table-caption>
            <div class="d-flex justify-content-between align-items-center">
              <span class="text-warning">{{ nombConc }}</span>
              <span class="text-warning">{{ nombClie }} {{ apelClie }} | {{ campHist }}</span>
            </div>
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
    lideClie: {
      type: String,
      default: '',
    },
    nombClie: {
      type: String,
      default: '',
    },
    apelClie: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      cargandoClubFelicidad: false,
      filterClubFelicidad: null,
      filterOnClubFelicidad: [],
      fieldsClubFelicidad: [
        {
          label: 'Concepto',
          key: 'nomb_conc',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-left',
        },
        {
          label: 'Puntos',
          key: 'cant_conc',
          sortable: true,
          class: 'class-width-120',
          thClass: 'text-center',
          tdClass: 'text-center',
        },
      ],
      itemsClubFelicidad: [],
      cargandoClubFelicidadDetalle: false,
      filterClubFelicidadDetalle: null,
      filterOnClubFelicidadDetalle: [],
      fieldsClubFelicidadDetalle: [
        {
          label: 'Concepto',
          key: 'nomb_conc',
          sortable: true,
          thClass: 'text-center',
          tdClass: 'text-left',
        },
        {
          label: 'Puntos',
          key: 'cant_conc',
          sortable: true,
          class: 'class-width-120',
          thClass: 'text-center',
          tdClass: 'text-center',
        },
      ],
      itemsClubFelicidadDetalle: [],
      campActu: 0,
      campHist: 0,
      nombConc: '',
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
    async proc_come_cons_gene_club_feli_gene() {
      this.filterClubFelicidad = null
      this.filterOnClubFelicidad = []
      this.cargandoClubFelicidad = true
      this.filterClubFelicidadDetalle = null
      this.filterOnClubFelicidadDetalle = []
      this.cargandoClubFelicidadDetalle = true
      this.$refs['ref-club-felicidad'].show()
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/cons_come_cons_gene/cons_clie_gene_club_feli_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            cons_terc: this.consTerc,
          },
        })
        this.itemsClubFelicidad = await servicio.data.data_acti
        this.cargandoClubFelicidad = false
        this.itemsClubFelicidadDetalle = await servicio.data.data_acti_hist
        this.cargandoClubFelicidadDetalle = false
        this.campActu = await servicio.data.camp_actu
        this.campHist = await servicio.data.camp_hist
        this.nombConc = await servicio.data.nomb_conc
      } catch (error) {
        this.itemsClubFelicidad = []
        this.cargandoClubFelicidad = false
        this.itemsClubFelicidadDetalle = []
        this.cargandoClubFelicidadDetalle = false
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
