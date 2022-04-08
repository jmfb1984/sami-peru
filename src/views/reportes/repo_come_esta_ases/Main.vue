<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="repo_come_esta_ases_gene()"
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
        @click="repo_come_esta_ases_limp()"
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
        @click="repo_come_esta_ases_gene()"
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
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="repo_come_esta_ases_exce()"
      >
        <feather-icon
          icon="DownloadIcon"
          class="mr-50"
        />
        Excel
      </b-button>
      <b-button
        variant="danger"
        class="ml-1"
        @click="repo_come_esta_ases_limp()"
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
          <b-row>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Región</span>
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="6"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <v-select
                ref="refArea"
                v-model="seleccionArea"
                :options="dataArea"
              >
                <span
                  slot="no-options"
                  @click="$refs.refArea.open=false"
                >
                  Región no existe.
                </span>
              </v-select>
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
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Corte</span>
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="6"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <v-select
                ref="refCorte"
                v-model="seleccionCorte"
                :options="dataCorte"
              >
                <span
                  slot="no-options"
                  @click="$refs.refCorte.open=false"
                >
                  Corte no existe.
                </span>
              </v-select>
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
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Estado</span>
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="6"
              sm="12"
              xs="12"
              class="mb-0"
            >
              <v-select
                ref="refEstado"
                v-model="seleccionEstado"
                :options="dataEstado"
              >
                <span
                  slot="no-options"
                  @click="$refs.refEstado.open=false"
                >
                  Estado no existe.
                </span>
              </v-select>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_esta_ases_grid_glob"
            :width="'100%'"
            :height="height"
            :columns="columnsGlobal"
            :source="dataAdapterGlobal"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="true"
            :sortmode="'many'"
            :filterable="true"
            :altrows="false"
            :selectionmode="'singlecell'"
            :enablebrowserselection="true"
            :showemptyrow="false"
            :columnsreorder="true"
            :enablehover="false"
            :groupable="true"
            :autoshowfiltericon="true"
            :enableanimations="true"
            :localization="localization"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
            :scrollmode="'logical'"
          />
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>
<script>

import {
  BRow,
  BCol,
  BButton,
  BCard,
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import vSelect from 'vue-select'
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BCard,
    // eslint-disable-next-line vue/no-unused-components
    JqxGrid,
    vSelect,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      dataArea: [],
      seleccionArea: '',
      dataCorte: [],
      seleccionCorte: '',
      dataEstado: [],
      seleccionEstado: [],
      columnsGlobal: [],
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
    }
  },
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  beforeCreate() {
    if (window.innerHeight - 200 < 400) {
      this.height = '400px'
    } else {
      this.height = `${window.innerHeight - 200}px`
    }
    this.sourceGlobal = {
      localdata: [],
      datafields: [
        {
          name: 'codi_area',
          type: 'string',
        },
        {
          name: 'codi_zona',
          type: 'string',
        },
        {
          name: 'codi_sect',
          type: 'string',
        },
        {
          name: 'codi_terc',
          type: 'string',
        },
        {
          name: 'nume_iden',
          type: 'string',
        },
        {
          name: 'nomb_clie',
          type: 'string',
        },
        {
          name: 'codi_camp_1',
          type: 'number',
        },
        {
          name: 'tota_publ_1',
          type: 'number',
        },
        {
          name: 'tota_devo_1',
          type: 'number',
        },
        {
          name: 'tota_orde_1',
          type: 'number',
        },
        {
          name: 'tota_fact_1',
          type: 'number',
        },
        {
          name: 'codi_camp_2',
          type: 'number',
        },
        {
          name: 'tota_publ_2',
          type: 'number',
        },
        {
          name: 'tota_devo_2',
          type: 'number',
        },
        {
          name: 'tota_orde_2',
          type: 'number',
        },
        {
          name: 'tota_fact_2',
          type: 'number',
        },
        {
          name: 'codi_camp_3',
          type: 'number',
        },
        {
          name: 'tota_publ_3',
          type: 'number',
        },
        {
          name: 'tota_devo_3',
          type: 'number',
        },
        {
          name: 'tota_orde_3',
          type: 'number',
        },
        {
          name: 'tota_fact_3',
          type: 'number',
        },
        {
          name: 'codi_camp_4',
          type: 'number',
        },
        {
          name: 'tota_publ_4',
          type: 'number',
        },
        {
          name: 'tota_devo_4',
          type: 'number',
        },
        {
          name: 'tota_orde_4',
          type: 'number',
        },
        {
          name: 'tota_fact_4',
          type: 'number',
        },
        {
          name: 'nomb_barr',
          type: 'string',
        },
        {
          name: 'dire_terc',
          type: 'string',
        },
        {
          name: 'tele_ter1',
          type: 'string',
        },
        {
          name: 'tele_ter2',
          type: 'string',
        },
        {
          name: 'sald_docu',
          type: 'number',
        },
        {
          name: 'tipo_clie',
          type: 'string',
        },
        {
          name: 'fech_naci',
          type: 'string',
        },
        {
          name: 'camp_ingr',
          type: 'number',
        },
        {
          name: 'nomb_ciud',
          type: 'string',
        },
        {
          name: 'nomb_dpto',
          type: 'string',
        },
        {
          name: 'cupo_cred',
          type: 'string',
        },
        {
          name: 'esta_pedi',
          type: 'string',
        },
      ],
      datatype: 'array',
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
    this.repo_come_esta_ases_visi()
  },
  created() {
    this.handleWindowResize()
    const userData = JSON.parse(localStorage.getItem('userData'))
    const itemArea = JSON.parse(userData.area)
    const itemEstado = [
      { nomb_esta: 'Peg21' },
      { nomb_esta: 'Peg42' },
      { nomb_esta: 'Peg63' },
      { nomb_esta: 'Posible reingreso' },
      { nomb_esta: 'Posible reincorporacion' },
      { nomb_esta: 'Sin pedido' },
      { nomb_esta: 'Reincorporacion' },
      { nomb_esta: 'Reingreso' },
      { nomb_esta: 'Ret. Peg63' },
      { nomb_esta: 'Ret. Peg42' },
      { nomb_esta: 'Ret. Peg21' },
      { nomb_esta: 'Consecutivas' },
      { nomb_esta: 'Incorporacion' },
    ]
    const itemCorte = [
      { codi_cort: '1' },
      { codi_cort: '2' },
      { codi_cort: '3' },
      { codi_cort: '4' },
      { codi_cort: '5' },
      { codi_cort: '6' },
      { codi_cort: '7' },
      { codi_cort: '8' },
      { codi_cort: '9' },
      { codi_cort: '10' },
      { codi_cort: '11' },
    ]
    itemArea.forEach(element => this.dataArea.push(element.codi_area))
    itemEstado.forEach(element => this.dataEstado.push(element.nomb_esta))
    itemCorte.forEach(element => this.dataCorte.push(element.codi_cort))
    this.seleccionEstado = itemEstado[0].nomb_esta
  },
  methods: {
    handleWindowResize() {
      let pinned = true
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          pinned = false
          break
        case 'sm':
          pinned = false
          break
        case 'md':
          pinned = false
          break
        default:
          pinned = true
          break
      }
      this.columnsGlobal = [
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: '65',
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Sector',
          dataField: 'codi_sect',
          width: '65',
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'DNI - RUC',
          dataField: 'nume_iden',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Nombre(s) y Apellido(s)',
          dataField: 'nomb_clie',
          width: '320',
          align: 'center',
          cellsalign: 'left',
          pinned,
        },
        {
          text: 'Cumpleaños',
          dataField: 'fech_naci',
          width: '110',
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Distrito',
          dataField: 'nomb_barr',
          width: '150',
          align: 'center',
          cellsalign: 'left',
        },
        {
          text: 'Dirección',
          dataField: 'dire_terc',
          width: '400',
          align: 'center',
          cellsalign: 'left',
        },
        {
          text: 'Teléfono 1',
          dataField: 'tele_ter1',
          width: '90',
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Teléfono 2',
          dataField: 'tele_ter2',
          width: '90',
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Status',
          dataField: 'tipo_clie',
          width: '130',
          align: 'center',
          cellsalign: 'center',
          filtertype: 'checkedlist',
        },
        {
          text: 'Cupo',
          dataField: 'cupo_cred',
          width: '90',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
        },
        {
          text: 'Saldo',
          dataField: 'sald_docu',
          width: '90',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
        },
        {
          text: 'Camp. Ingr.',
          dataField: 'camp_ingr',
          width: '100',
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Ult. Camp1',
          dataField: 'codi_camp_1',
          width: '90',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Ptos Azzo. Ult. Camp1',
          dataField: 'tota_publ_1',
          width: '150',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Fact. Ult. Camp1',
          dataField: 'tota_fact_1',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Devo. Ult. Camp1',
          dataField: 'tota_devo_1',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Ult. Camp2',
          dataField: 'codi_camp_2',
          width: '90',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Ptos Azzo. Ult. Camp2',
          dataField: 'tota_publ_2',
          width: '150',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Fact. Ult. Camp2',
          dataField: 'tota_fact_2',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Devo. Ult. Camp2',
          dataField: 'tota_devo_2',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Ult. Camp3',
          dataField: 'codi_camp_3',
          width: '90',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'bg-celeste',
        },
        {
          text: 'Ptos Azzo. Ult. Camp3',
          dataField: 'tota_publ_3',
          width: '159',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'bg-celeste',
        },
        {
          text: 'Fact. Ult. Camp3',
          dataField: 'tota_fact_3',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          cellclassname: 'bg-celeste',
        },
        {
          text: 'Devo. Ult. Camp3',
          dataField: 'tota_devo_3',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          cellclassname: 'bg-celeste',
        },
        {
          text: 'Ult. Camp4',
          dataField: 'codi_camp_4',
          width: '90',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Ptos Azzo. Ult. Camp4',
          dataField: 'tota_publ_4',
          width: '150',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Fact. Ult. Camp4',
          dataField: 'tota_fact_4',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Devo. Ult. Camp4',
          dataField: 'tota_devo_4',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Estado Pedido',
          dataField: 'esta_pedi',
          width: '150',
          align: 'center',
          cellsalign: 'left',
          filtertype: 'checkedlist',
        },
      ]
      if (typeof this.$refs.repo_come_esta_ases_grid_glob !== 'undefined') {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.repo_come_esta_ases_grid_glob.height = this.height
        this.$refs.repo_come_esta_ases_grid_glob.columns = this.columnsGlobal
      }
    },
    repo_come_esta_ases_limp() {
      this.$refs.repo_come_esta_ases_grid_glob.clear()
      this.$refs.repo_come_esta_ases_grid_glob.clearselection()
    },
    async repo_come_esta_ases_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_esta_ases',
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
    async repo_come_esta_ases_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_esta_ases_limp()
      if (this.seleccionArea === '' && this.seleccionCorte === '') {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'Campo región o corte es obligatorio.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else if (this.seleccionEstado === null || this.seleccionEstado.length === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'Campo estado es obligatorio.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        const itemMainCampana = JSON.parse(localStorage.getItem('mainCampana'))
        let campActu = 0
        if (itemMainCampana.camp_actu.length > 0) {
          campActu = itemMainCampana.camp_actu[0].codi_camp
        }
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_esta_ases/esta_ases_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: campActu,
              codi_area: this.seleccionArea,
              codi_cort: this.seleccionCorte,
              codi_esta: this.seleccionEstado,
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_esta_ases_grid_glob.updatebounddata('cells')
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
    async repo_come_esta_ases_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_esta_ases_grid_glob.getdatainformation()
      const dataRowsGlob = dataInfoGlob.rowscount
      if (dataRowsGlob === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'No tiene información para exportar a excel',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_esta_ases/esta_ases_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_esta_ases_grid_glob.exportdata('json', null, true, null, true),
            },
          })
          const datoHtml = await servicio.data.html
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          window.open(`${store.state.app.webTemporal}${datoHtml}`, '_blank')
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
<style lang='scss'>

</style>
