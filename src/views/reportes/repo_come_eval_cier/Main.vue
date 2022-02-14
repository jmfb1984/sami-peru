<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_eval_cier_gene()"
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
        variant="secondary"
        class="mb-1"
        block
        @click="repo_come_eval_cier_rank()"
      >
        <feather-icon
          icon="CheckCircleIcon"
          class="mr-50"
        />
        Ranking
      </b-button>
      <b-button
        variant="danger"
        block
        @click="repo_come_eval_cier_limp()"
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
        @click="repo_come_eval_cier_gene()"
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
        variant="secondary"
        class="ml-1"
        @click="repo_come_eval_cier_rank()"
      >
        <feather-icon
          icon="CheckCircleIcon"
          class="mr-50"
        />
        Ranking
      </b-button>
      <b-button
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="repo_come_eval_cier_exce()"
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
        @click="repo_come_eval_cier_limp()"
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
        <selectCampanaZona
          :array-campana="dataCampana"
          :array-zona="dataZona"
          :multiple-zona="false"
          @campana="setCampana"
          @zona="setZona"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card title="Información General">
          <b-row class="mt-1">
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">Lima - Provincia</span>
            </b-col>
            <b-col
              lg="10"
              md="9"
              sm="12"
              xs="12"
            >
              <span class="">{{ limaProvincia }}</span>
            </b-col>
          </b-row>
          <b-row class="mt-1">
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">Objetivo Incorporación</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ objetivoIncorporacion }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">Facturado Incorporación</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ facturadoIncorporacion }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">% Cumplimiento Incorporación</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ cumplimientoIncorporacion }}</span>
            </b-col>
          </b-row>
          <b-row class="mt-1">
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">Objetivo Retención</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ objetivoRetencion }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">Facturado Retención</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ facturadoRetencion }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">% Cumplimiento Retención</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ cumplimientoRetencion }}</span>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_eval_cier_grid_glob"
            :width="'100%'"
            :height="height"
            :columngroups="columnsGroupGlobal"
            :columns="columnsGlobal"
            :source="dataAdapterGlobal"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="true"
            :sortmode="'many'"
            :filterable="true"
            :altrows="false"
            :selectionmode="'singlerow'"
            :enablebrowserselection="true"
            :showemptyrow="false"
            :columnsreorder="true"
            :enablehover="false"
            :groupable="false"
            :autoshowfiltericon="true"
            :enableanimations="true"
            :localization="localization"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
            :editable="false"
            :editmode="'click'"
            :showstatusbar="true"
            :showaggregates="true"
            :scrollmode="'logical'"
          />
        </b-card>
      </b-col>
    </b-row>
    <vs-popup
      title="Evaluación Cierre - Ranking"
      :active.sync="popupActive"
      fullscreen
      :background-color-popup="clasePopUp"
      @close="repo_come_eval_cier_rank_cerr()"
    >
      <b-row>
        <b-col>
          <div class="d-flex align-items-center justify-content-end mb-2">
            <b-button
              variant="success"
              class="ml-1 d-none d-lg-block"
              @click="repo_come_eval_cier_rank_exce()"
            >
              <feather-icon
                icon="DownloadIcon"
                class="mr-50"
              />
              Excel
            </b-button>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <JqxGrid
            ref="repo_come_eval_cier_grid_deta"
            :width="'100%'"
            :height="heightDetalle"
            :theme="'sami'"
            :enablehover="false"
            :source="dataAdapterDetalle"
            :columns="columnsDetalle"
            :showemptyrow="false"
            :sortable="true"
            :filterable="true"
            :groupable="true"
            :enableanimations="true"
            :autoshowloadelement="true"
            :showaggregates="true"
            :showstatusbar="true"
            :localization="localization"
            :columnsresize="true"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
            :scrollmode="'logical'"
          />
        </b-col>
      </b-row>
    </vs-popup>
  </section>
</template>
<script>
import {
  BRow, BCol, BButton, BCard,
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import selectCampanaZona from '@/views/components/FiltroCampanaZona.vue'
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

let sumaFact = 0
let sumaObje = 0
let sumaPedi = 0
let sumaRece = 0
let sumaLine = 0
let sumaSald = 0
let sumaValo = 0
let sumaActiInic = 0
let sumaNumePedi = 0
let sumaTotaIngr = 0
let sumaTotaRein = 0

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BCard,
    // eslint-disable-next-line vue/no-unused-components
    selectCampanaZona,
    // eslint-disable-next-line vue/no-unused-components
    JqxGrid,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      dataCampana: [],
      seleccionCampana: [],
      dataZona: [],
      seleccionZona: [],
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      columnsGroupGlobal: [
        {
          text: 'Incorporación',
          align: 'center',
          name: 'inco',
        },
        {
          text: 'Pedidos de Retención',
          align: 'center',
          name: 'rete',
        },
        {
          text: 'Pedidos Totales',
          align: 'center',
          name: 'tota',
        },
        {
          text: 'Consecutividad Pedido de Retención 90%',
          align: 'center',
          name: 'cons',
        },
        {
          text: 'Consecutividad 2do Pedido 100%',
          align: 'center',
          name: 'cons_segu',
        },
        {
          text: 'Consecutividad 3er Pedido 80%',
          align: 'center',
          name: 'cons_terc',
        },
        {
          text: 'Consecutividad 4to Pedido 70%',
          align: 'center',
          name: 'cons_cuar',
        },
        {
          text: 'Ppp',
          align: 'center',
          name: 'pppp',
        },
        {
          text: 'Cobranza',
          align: 'center',
          name: 'cobr',
        },
        {
          text: 'Capitalización',
          align: 'center',
          name: 'capi',
        },
        {
          text: '% Actividad',
          align: 'center',
          name: 'acti',
        },
        {
          text: 'Peg21 40%',
          align: 'center',
          name: 'pe21',
        },
        {
          text: 'Peg42 30%',
          align: 'center',
          name: 'pe42',
        },
        {
          text: 'Peg63 25%',
          align: 'center',
          name: 'pe63',
        },
        {
          text: 'Suma Pegs 35%',
          align: 'center',
          name: 'suma',
        },
        {
          text: 'Reingresos 10%',
          align: 'center',
          name: 'rein',
        },
        {
          text: 'Productividad Retención Líder',
          align: 'center',
          name: 'lide',
        },
      ],
      limaProvincia: '-',
      objetivoIncorporacion: '0',
      facturadoIncorporacion: '0',
      cumplimientoIncorporacion: '0.00',
      objetivoRetencion: '0',
      facturadoRetencion: '0',
      cumplimientoRetencion: '0.00',
      popupActiveCodigo: '',
      popupActive: false,
      // eslint-disable-next-line
      dataAdapterDetalle: new jqx.dataAdapter(this.sourceDetalle),
      heightDetalle: '',
      columnsDetalle: [],
      codigoCampana: '0',
      codigoZona: '0',
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
  beforeCreate() {
    if (window.innerHeight - 300 < 350) {
      this.height = '350px'
    } else {
      this.height = `${window.innerHeight - 300}px`
    }
    this.sourceGlobal = {
      localdata: [],
      datafields: [
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'nomb_lide', type: 'string' },
        { name: 'acti_inic', type: 'number' },
        { name: 'obje_tota', type: 'number' },
        { name: 'fact_tota', type: 'number' },
        { name: 'cump_fact_tota', type: 'number' },
        { name: 'obje_tota_ocul', type: 'number' },
        { name: 'fact_tota_ocul', type: 'number' },
        { name: 'cump_fact_tota_ocul', type: 'number' },
        { name: 'obje_inco', type: 'number' },
        { name: 'fact_inco', type: 'number' },
        { name: 'cump_fact_inco', type: 'number' },
        { name: 'obje_inco_ocul', type: 'number' },
        { name: 'fact_inco_ocul', type: 'number' },
        { name: 'cump_fact_inco_ocul', type: 'number' },
        { name: 'obje_rete', type: 'number' },
        { name: 'fact_rete', type: 'number' },
        { name: 'cump_fact_rete', type: 'number' },
        { name: 'obje_rete_ocul', type: 'number' },
        { name: 'fact_rete_ocul', type: 'number' },
        { name: 'cump_fact_rete_ocul', type: 'number' },
        { name: 'nume_pedi', type: 'number' },
        { name: 'tota_ingr', type: 'number' },
        { name: 'tota_rein', type: 'number' },
        { name: 'acti_inic', type: 'number' },
        { name: 'nume_pedi_ante', type: 'number' },
        { name: 'tota_ingr_ante', type: 'number' },
        { name: 'tota_rein_ante', type: 'number' },
        { name: 'acti_inic_ante', type: 'number' },
        { name: 'obje_acti', type: 'number' },
        { name: 'porc_acti', type: 'number' },
        { name: 'nume_pedi_acti', type: 'number' },
        { name: 'porc_acti_ante', type: 'number' },
        { name: 'obje_acti_ocul', type: 'number' },
        { name: 'porc_acti_ocul', type: 'number' },
        { name: 'fact_rete_cons_ante', type: 'number' },
        { name: 'obje_rete_cons', type: 'number' },
        { name: 'fact_rete_cons', type: 'number' },
        { name: 'cump_fact_rete_cons', type: 'number' },
        { name: 'fact_rete_cons_ante_ocul', type: 'number' },
        { name: 'obje_rete_cons_ocul', type: 'number' },
        { name: 'obje_rete_cons_sist_ocul', type: 'number' },
        { name: 'fact_rete_cons_ocul', type: 'number' },
        { name: 'cump_fact_rete_cons_ocul', type: 'number' },
        { name: 'obje_rete_cons_segu', type: 'number' },
        { name: 'fact_rete_cons_segu', type: 'number' },
        { name: 'cump_fact_rete_cons_segu', type: 'number' },
        { name: 'obje_rete_cons_segu_ocul', type: 'number' },
        { name: 'fact_rete_cons_segu_ocul', type: 'number' },
        { name: 'cump_fact_rete_cons_segu_ocul', type: 'number' },
        { name: 'obje_rete_cons_terc', type: 'number' },
        { name: 'fact_rete_cons_terc', type: 'number' },
        { name: 'cump_fact_rete_cons_terc', type: 'number' },
        { name: 'obje_rete_cons_terc_ocul', type: 'number' },
        { name: 'fact_rete_cons_terc_ocul', type: 'number' },
        { name: 'cump_fact_rete_cons_terc_ocul', type: 'number' },
        { name: 'obje_rete_cons_cuar', type: 'number' },
        { name: 'fact_rete_cons_cuar', type: 'number' },
        { name: 'cump_fact_rete_cons_cuar', type: 'number' },
        { name: 'obje_rete_cons_cuar_ocul', type: 'number' },
        { name: 'fact_rete_cons_cuar_ocul', type: 'number' },
        { name: 'cump_fact_rete_cons_cuar_ocul', type: 'number' },
        { name: 'fact_pe21_ante', type: 'number' },
        { name: 'obje_pe21', type: 'number' },
        { name: 'fact_pe21', type: 'number' },
        { name: 'porc_pe21', type: 'number' },
        { name: 'fact_pe21_ante_ocul', type: 'number' },
        { name: 'obje_pe21_ocul', type: 'number' },
        { name: 'obje_pe21_sist_ocul', type: 'number' },
        { name: 'fact_pe21_ocul', type: 'number' },
        { name: 'porc_pe21_ocul', type: 'number' },
        { name: 'fact_pe42_ante', type: 'number' },
        { name: 'obje_pe42', type: 'number' },
        { name: 'fact_pe42', type: 'number' },
        { name: 'porc_pe42', type: 'number' },
        { name: 'fact_pe42_ante_ocul', type: 'number' },
        { name: 'obje_pe42_ocul', type: 'number' },
        { name: 'obje_pe42_sist_ocul', type: 'number' },
        { name: 'fact_pe42_ocul', type: 'number' },
        { name: 'porc_pe42_ocul', type: 'number' },
        { name: 'fact_pe63_ante', type: 'number' },
        { name: 'obje_pe63', type: 'number' },
        { name: 'fact_pe63', type: 'number' },
        { name: 'porc_pe63', type: 'number' },
        { name: 'fact_pe63_ante_ocul', type: 'number' },
        { name: 'obje_pe63_ocul', type: 'number' },
        { name: 'obje_pe63_sist_ocul', type: 'number' },
        { name: 'fact_pe63_ocul', type: 'number' },
        { name: 'porc_pe63_ocul', type: 'number' },
        { name: 'fact_pegs_ante', type: 'number' },
        { name: 'obje_pegs', type: 'number' },
        { name: 'fact_pegs', type: 'number' },
        { name: 'porc_pegs', type: 'number' },
        { name: 'fact_pegs_ante_ocul', type: 'number' },
        { name: 'obje_pegs_ocul', type: 'number' },
        { name: 'obje_pegs_sist_ocul', type: 'number' },
        { name: 'fact_pegs_ocul', type: 'number' },
        { name: 'porc_pegs_ocul', type: 'number' },
        { name: 'fact_rein_ante', type: 'number' },
        { name: 'obje_rein', type: 'number' },
        { name: 'fact_rein', type: 'number' },
        { name: 'porc_rein', type: 'number' },
        { name: 'fact_rein_ante_ocul', type: 'number' },
        { name: 'obje_rein_ocul', type: 'number' },
        { name: 'obje_rein_sist_ocul', type: 'number' },
        { name: 'fact_rein_ocul', type: 'number' },
        { name: 'porc_rein_ocul', type: 'number' },
        { name: 'fact_capi', type: 'number' },
        { name: 'obje_capi', type: 'number' },
        { name: 'valo_docu', type: 'number' },
        { name: 'porc_21di', type: 'number' },
        { name: 'sald_21di', type: 'number' },
        { name: 'porc_31di', type: 'number' },
        { name: 'sald_31di', type: 'number' },
        { name: 'porc_21di_ocul', type: 'number' },
        { name: 'porc_31di_ocul', type: 'number' },
        { name: 'fact_capi_ocul', type: 'number' },
        { name: 'obje_capi_ocul', type: 'number' },
        { name: 'tota_line', type: 'number' },
        { name: 'tota_rece', type: 'number' },
        { name: 'pppp_fact', type: 'number' },
        { name: 'pppp_rece', type: 'number' },
        { name: 'pppp_fact_ocul', type: 'number' },
        { name: 'pppp_rece_ocul', type: 'number' },
        { name: 'camp_ingr', type: 'number' },
        { name: 'nive_lide', type: 'string' },
        { name: 'nive_lide_proy', type: 'string' },
        { name: 'porc_canj', type: 'number' },
        { name: 'vent_neto', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceDetalle = {
      localdata: [],
      datafields: [],
      datatype: 'array',
    }
  },
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
    this.repo_come_eval_cier_visi()
  },
  created() {
    this.handleWindowResize()
    const userData = JSON.parse(localStorage.getItem('userData'))
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    const itemZona = JSON.parse(userData.zona)
    itemCampana = itemCampana.camp.slice(0, 6)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))
    itemZona.forEach(element => this.dataZona.push(element.codi_zona))
    this.seleccionCampana = itemCampana[0].codi_camp
    this.seleccionZona = itemZona[0].codi_zona
  },
  methods: {
    handleWindowResize() {
      this.columnsGlobal = [
        {
          text: 'Zona',
          dataField: 'codi_zona',
          hidden: true,
        },
        {
          text: 'Sector',
          dataField: 'codi_sect',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          pinned: true,
        },
        {
          text: 'Lider',
          dataField: 'nomb_lide',
          width: '250',
          align: 'center',
          pinned: true,
        },
        {
          text: 'Act. Inic.',
          dataField: 'acti_inic',
          width: '80',
          align: 'center',
          cellsalign: 'center',
          pinned: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje tota',
          dataField: 'obje_tota_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact tota',
          dataField: 'fact_tota_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact tota',
          dataField: 'cump_fact_tota_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_tota
                sumaObje += record.obje_tota
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaObje) > 0 && parseInt(sumaFact) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Objetivo',
          dataField: 'obje_tota',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'tota',
        },
        {
          text: 'Facturado',
          dataField: 'fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'tota',
        },
        {
          text: 'Cump. Fact.',
          dataField: 'cump_fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_tota
                sumaObje += record.obje_tota
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaObje) > 0 && parseInt(sumaFact) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'tota',
          cellclassname: this.repo_come_eval_cier_cump_tota_clas,
        },
        {
          text: 'obje inco',
          dataField: 'obje_inco_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact inco',
          dataField: 'fact_inco_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact inco',
          dataField: 'cump_fact_inco_ocul',
          hidden: true,
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_inco
                sumaObje += record.obje_inco
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaObje) > 0 && parseInt(sumaFact) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Objetivo',
          dataField: 'obje_inco',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'inco',
        },
        {
          text: 'Facturado',
          dataField: 'fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'inco',
        },
        {
          text: 'Cump. Fact.',
          dataField: 'cump_fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_inco
                sumaObje += record.obje_inco
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaObje) > 0 && parseInt(sumaFact) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'inco',
          cellclassname: this.repo_come_eval_cier_cump_inco_clas,
        },
        {
          text: 'obje rete',
          dataField: 'obje_rete_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact rete',
          dataField: 'fact_rete_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact rete',
          dataField: 'cump_fact_rete_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete
                sumaObje += record.obje_rete
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaObje) > 0 && parseInt(sumaFact) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Objetivo',
          dataField: 'obje_rete',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'rete',
        },
        {
          text: 'Facturado',
          dataField: 'fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'rete',
        },
        {
          text: 'Cump. Fact.',
          dataField: 'cump_fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete
                sumaObje += record.obje_rete
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaObje) > 0 && parseInt(sumaFact) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'rete',
          cellclassname: this.repo_come_eval_cier_cump_rete_clas,
        },
        {
          text: 'acti inic ante',
          dataField: 'acti_inic_ante',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'nume pedi ante',
          dataField: 'nume_pedi_ante',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'tota ingr ante',
          dataField: 'tota_ingr_ante',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'tota rein ante',
          dataField: 'tota_rein_ante',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'nume pedi',
          dataField: 'nume_pedi',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'tota ingr',
          dataField: 'tota_ingr',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'tota rein',
          dataField: 'tota_rein',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'nume pedi acti',
          dataField: 'nume_pedi_acti',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'obje acti',
          dataField: 'obje_acti_ocul',
          hidden: true,
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.acti_inic
                sumaObje += record.nume_pedi_acti
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseFloat(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseFloat(sumaObje) / parseInt(sumaFact))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'porc acti',
          dataField: 'porc_acti_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaActiInic = 0
                  sumaNumePedi = 0
                  sumaTotaIngr = 0
                  sumaTotaRein = 0
                }
                sumaActiInic += record.acti_inic
                sumaNumePedi += record.nume_pedi
                sumaTotaIngr += record.tota_ingr
                sumaTotaRein += record.tota_rein
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaActiInic) > 0 && parseInt(sumaNumePedi) - parseInt(sumaTotaIngr) - parseInt(sumaTotaRein) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(parseInt(sumaNumePedi) - parseInt(sumaTotaIngr) - parseInt(sumaTotaRein)) / parseInt(sumaActiInic))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Camp. Ante.',
          dataField: 'porc_acti_ante',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaActiInic = 0
                  sumaNumePedi = 0
                  sumaTotaIngr = 0
                  sumaTotaRein = 0
                }
                sumaActiInic += record.acti_inic_ante
                sumaNumePedi += record.nume_pedi_ante
                sumaTotaIngr += record.tota_ingr_ante
                sumaTotaRein += record.tota_rein_ante
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaActiInic) > 0 && parseInt(sumaNumePedi) - parseInt(sumaTotaIngr) - parseInt(sumaTotaRein) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(parseInt(sumaNumePedi) - parseInt(sumaTotaIngr) - parseInt(sumaTotaRein)) / parseInt(sumaActiInic))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'acti',
        },
        {
          text: 'Objetivo',
          dataField: 'obje_acti',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          columngroup: 'acti',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.acti_inic
                sumaObje += record.nume_pedi_acti
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseFloat(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseFloat(sumaObje) / parseInt(sumaFact))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Facturado',
          dataField: 'porc_acti',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaActiInic = 0
                  sumaNumePedi = 0
                  sumaTotaIngr = 0
                  sumaTotaRein = 0
                }
                sumaActiInic += record.acti_inic
                sumaNumePedi += record.nume_pedi
                sumaTotaIngr += record.tota_ingr
                sumaTotaRein += record.tota_rein
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaActiInic) > 0 && parseInt(sumaNumePedi) - parseInt(sumaTotaIngr) - parseInt(sumaTotaRein) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(parseInt(sumaNumePedi) - parseInt(sumaTotaIngr) - parseInt(sumaTotaRein)) / parseInt(sumaActiInic))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'acti',
          cellclassname: this.repo_come_eval_cier_porc_acti_clas,
        },
        {
          text: 'fact rete cons ante',
          dataField: 'fact_rete_cons_ante_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje rete cons sist',
          dataField: 'obje_rete_cons_sist_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje rete cons',
          dataField: 'obje_rete_cons_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact rete cons',
          dataField: 'fact_rete_cons_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact rete cons',
          dataField: 'cump_fact_rete_cons_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons
                sumaObje += record.obje_rete_cons
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Rete. Camp. Ant.',
          dataField: 'fact_rete_cons_ante',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons',
        },
        {
          text: 'Objetivo',
          dataField: 'obje_rete_cons',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons',
          cellsrenderer: this.repo_come_eval_cier_obje_rete_cons_clas,
        },
        {
          text: 'Facturado',
          dataField: 'fact_rete_cons',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons',
        },
        {
          text: 'Cump. Fact.',
          dataField: 'cump_fact_rete_cons',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons
                sumaObje += record.obje_rete_cons
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'cons',
          cellclassname: this.repo_come_eval_cier_cump_fact_rete_cons_clas,
        },
        {
          text: 'obje rete cons segu',
          dataField: 'obje_rete_cons_segu_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact rete cons segu',
          dataField: 'fact_rete_cons_segu_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact rete cons segu',
          dataField: 'cump_fact_rete_cons_segu_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons_segu
                sumaObje += record.obje_rete_cons_segu
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: '1 Camp. Ante.',
          dataField: 'obje_rete_cons_segu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons_segu',
        },
        {
          text: 'Facturado',
          dataField: 'fact_rete_cons_segu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons_segu',
        },
        {
          text: 'Cump. Fact.',
          dataField: 'cump_fact_rete_cons_segu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons_segu
                sumaObje += record.obje_rete_cons_segu
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'cons_segu',
          cellclassname: this.repo_come_eval_cier_cump_fact_rete_cons_segu_clas,
        },
        {
          text: 'obje rete cons terc',
          dataField: 'obje_rete_cons_terc_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact rete cons terc',
          dataField: 'fact_rete_cons_terc_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact rete cons terc',
          dataField: 'cump_fact_rete_cons_terc_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons_terc
                sumaObje += record.obje_rete_cons_terc
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: '2 Camp. Ante.',
          dataField: 'obje_rete_cons_terc',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons_terc',
        },
        {
          text: 'Facturado',
          dataField: 'fact_rete_cons_terc',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons_terc',
        },
        {
          text: 'Cump. Fact.',
          dataField: 'cump_fact_rete_cons_terc',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons_terc
                sumaObje += record.obje_rete_cons_terc
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'cons_terc',
          cellclassname: this.repo_come_eval_cier_cump_fact_rete_cons_terc_clas,
        },
        {
          text: 'obje rete cons cuar',
          dataField: 'obje_rete_cons_cuar_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact rete cons cuar',
          dataField: 'fact_rete_cons_cuar_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact rete cons cuar',
          dataField: 'cump_fact_rete_cons_cuar_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons_cuar
                sumaObje += record.obje_rete_cons_cuar
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: '3 Camp. Ante.',
          dataField: 'obje_rete_cons_cuar',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons_cuar',
        },
        {
          text: 'Facturado',
          dataField: 'fact_rete_cons_cuar',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons_cuar',
        },
        {
          text: 'Cump. Fact.',
          dataField: 'cump_fact_rete_cons_cuar',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons_cuar
                sumaObje += record.obje_rete_cons_cuar
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'cons_cuar',
          cellclassname: this.repo_come_eval_cier_cump_fact_rete_cons_cuar_clas,
        },
        {
          text: 'fact pe21 ante',
          dataField: 'fact_pe21_ante_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pe21 sist',
          dataField: 'obje_pe21_sist_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pe21',
          dataField: 'obje_pe21_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact pe21',
          dataField: 'fact_pe21_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'porc pe21',
          dataField: 'porc_pe21_ocul',
          hidden: true,
          cellsformat: 'P2',
        },
        {
          text: 'fact pe42 ante',
          dataField: 'fact_pe42_ante_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pe42',
          dataField: 'obje_pe42_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pe42 sist',
          dataField: 'obje_pe42_sist_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact pe42',
          dataField: 'fact_pe42_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'porc pe42',
          dataField: 'porc_pe42_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_pe42
                sumaObje += record.obje_pe42
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'fact pe63 ante',
          dataField: 'fact_pe63_ante_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pe63',
          dataField: 'obje_pe63_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pe63 sist',
          dataField: 'obje_pe63_sist_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact pe63',
          dataField: 'fact_pe63_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'porc pe63',
          dataField: 'porc_pe63_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_pe63
                sumaObje += record.obje_pe63
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'fact pegs ante',
          dataField: 'fact_pegs_ante_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pegs',
          dataField: 'obje_pegs_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pegs sist',
          dataField: 'obje_pegs_sist_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact pegs',
          dataField: 'fact_pegs_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'porc pegs',
          dataField: 'porc_pegs_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_pegs
                sumaObje += record.obje_pegs
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Peg21',
          dataField: 'fact_pe21_ante',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe21',
        },
        {
          text: 'Objetivo',
          dataField: 'obje_pe21',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe21',
          cellsrenderer: this.repo_come_eval_cier_obje_pe21_clas,
        },
        {
          text: 'Ret. Peg21',
          dataField: 'fact_pe21',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe21',
        },
        {
          text: '% Ret. Fact.',
          dataField: 'porc_pe21',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',

          columngroup: 'pe21',
          cellclassname: this.repo_come_eval_cier_porc_pe21_clas,
        },
        {
          text: 'Peg42',
          dataField: 'fact_pe42_ante',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe42',
        },
        {
          text: 'Objetivo',
          dataField: 'obje_pe42',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe42',
          cellsrenderer: this.repo_come_eval_cier_obje_pe42_clas,
        },
        {
          text: 'Ret. Peg42',
          dataField: 'fact_pe42',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe42',
        },
        {
          text: '% Ret. Fact.',
          dataField: 'porc_pe42',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_pe42
                sumaObje += record.obje_pe42
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'pe42',
          cellclassname: this.repo_come_eval_cier_porc_pe42_clas,
        },
        {
          text: 'Peg63',
          dataField: 'fact_pe63_ante',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe63',
        },
        {
          text: 'Objetivo',
          dataField: 'obje_pe63',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe63',
          cellsrenderer: this.repo_come_eval_cier_obje_pe63_clas,
        },
        {
          text: 'Ret. Peg63',
          dataField: 'fact_pe63',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe63',
        },
        {
          text: '% Ret. Fact.',
          dataField: 'porc_pe63',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_pe63
                sumaObje += record.obje_pe63
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'pe63',
          cellclassname: this.repo_come_eval_cier_porc_pe63_clas,
        },
        {
          text: 'Pegs',
          dataField: 'fact_pegs_ante',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'suma',
        },
        {
          text: 'Objetivo',
          dataField: 'obje_pegs',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'suma',
          cellsrenderer: this.repo_come_eval_cier_obje_pegs_clas,
        },
        {
          text: 'Ret. Pegs',
          dataField: 'fact_pegs',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'suma',
        },
        {
          text: 'Cump. Fact.',
          dataField: 'porc_pegs',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_pegs
                sumaObje += record.obje_pegs
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'suma',
          cellclassname: this.repo_come_eval_cier_porc_pegs_clas,
        },
        {
          text: 'fact rein ante',
          dataField: 'fact_rein_ante_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje rein',
          dataField: 'obje_rein_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje rein sist',
          dataField: 'obje_rein_sist_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact rein',
          dataField: 'fact_rein_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'porc rein',
          dataField: 'porc_rein_ocul',
          hidden: true,
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rein
                sumaObje += record.obje_rein
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Pos. Reing.',
          columngroup: 'rein',
          dataField: 'fact_rein_ante',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Objetivo',
          columngroup: 'rein',
          dataField: 'obje_rein',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          cellsrenderer: this.repo_come_eval_cier_obje_rein_clas,
        },
        {
          text: 'Facturado',
          columngroup: 'rein',
          dataField: 'fact_rein',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: '% Cump',
          columngroup: 'rein',
          dataField: 'porc_rein',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: this.repo_come_eval_cier_porc_rein_clas,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rein
                sumaObje += record.obje_rein
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0 && parseInt(sumaObje) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(sumaFact) / parseInt(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'obje capi',
          dataField: 'obje_capi_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact capi',
          dataField: 'fact_capi_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Objetivo',
          columngroup: 'capi',
          dataField: 'obje_capi',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Facturado',
          columngroup: 'capi',
          dataField: 'fact_capi',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          cellclassname: this.repo_come_eval_cier_fact_capi_clas,
        },
        {
          text: 'valo docu',
          dataField: 'valo_docu',
          hidden: true,
          cellsformat: 'D2',
        },
        {
          text: 'sald 21di',
          dataField: 'sald_21di',
          hidden: true,
          cellsformat: 'D2',
        },
        {
          text: 'sald 31di',
          dataField: 'sald_31di',
          hidden: true,
          cellsformat: 'D2',
        },
        {
          text: 'porc 21di',
          dataField: 'porc_21di_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaValo = 0
                  sumaSald = 0
                }
                sumaValo += record.valo_docu
                sumaSald += record.sald_21di
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaValo) > 0 && parseInt(sumaSald) > 0) {
                  total = 100 - 100 * (parseFloat(sumaSald) / parseFloat(sumaValo))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'porc 31di',
          dataField: 'porc_31di_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaValo = 0
                  sumaSald = 0
                }
                sumaValo += record.valo_docu
                sumaSald += record.sald_31di
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaValo) > 0 && parseInt(sumaSald) > 0) {
                  total = 100 - 100 * (parseFloat(sumaSald) / parseFloat(sumaValo))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          cellclassname: this.repo_come_eval_cier_porc_31di_clas,
        },
        {
          text: '% Cobr. 21di.',
          columngroup: 'cobr',
          dataField: 'porc_21di',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaValo = 0
                  sumaSald = 0
                }
                sumaValo += record.valo_docu
                sumaSald += record.sald_21di
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaValo) > 0 && parseInt(sumaSald) > 0) {
                  total = 100 - 100 * (parseFloat(sumaSald) / parseFloat(sumaValo))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          cellclassname: this.repo_come_eval_cier_porc_21di_clas,
        },
        {
          text: '% Cobr. 31di.',
          columngroup: 'cobr',
          dataField: 'porc_31di',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaValo = 0
                  sumaSald = 0
                }
                sumaValo += record.valo_docu
                sumaSald += record.sald_31di
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaValo) > 0 && parseInt(sumaSald) > 0) {
                  total = 100 - 100 * (parseFloat(sumaSald) / parseFloat(sumaValo))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          cellclassname: this.repo_come_eval_cier_porc_31di_clas,
        },
        {
          text: 'tota line',
          dataField: 'tota_line',
          hidden: true,
          cellsformat: 'D2',
        },
        {
          text: 'tota rece',
          dataField: 'tota_rece',
          hidden: true,
          cellsformat: 'D2',
        },
        {
          text: 'pppp fact',
          dataField: 'pppp_fact_ocul',
          hidden: true,
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaLine = 0
                  sumaPedi = 0
                }
                sumaLine += record.tota_line
                sumaPedi += record.nume_pedi
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaPedi) > 0 && parseInt(sumaLine) > 0) {
                  // eslint-disable-next-line
                  total = parseFloat(sumaLine) / parseInt(sumaPedi)
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'pppp rece',
          dataField: 'pppp_rece_ocul',
          hidden: true,
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaRece = 0
                  sumaPedi = 0
                }
                sumaRece += record.tota_rece
                sumaPedi += record.nume_pedi
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaPedi) > 0 && parseInt(sumaRece) > 0) {
                  // eslint-disable-next-line
                  total = parseFloat(sumaRece) / parseFloat(sumaPedi)
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Facturado',
          columngroup: 'pppp',
          dataField: 'pppp_fact',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaLine = 0
                  sumaPedi = 0
                }
                sumaLine += record.tota_line
                sumaPedi += record.nume_pedi
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaPedi) > 0 && parseInt(sumaLine) > 0) {
                  // eslint-disable-next-line
                  total = parseFloat(sumaLine) / parseFloat(sumaPedi)
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Recepcionado',
          columngroup: 'pppp',
          dataField: 'pppp_rece',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaRece = 0
                  sumaPedi = 0
                }
                sumaRece += record.tota_rece
                sumaPedi += record.nume_pedi
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaPedi) > 0 && parseInt(sumaRece) > 0) {
                  // eslint-disable-next-line
                  total = parseFloat(sumaRece) / parseFloat(sumaPedi)
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Ingreso Lider',
          columngroup: 'lide',
          dataField: 'camp_ingr',
          width: '150',
          align: 'left',
          cellsalign: 'center',
        },
        {
          text: 'Nivel de Lider',
          columngroup: 'lide',
          dataField: 'nive_lide',
          width: '150',
          align: 'left',
          cellsalign: 'center',
        },
        {
          text: 'porc canj',
          dataField: 'porc_canj',
          hidden: true,
        },
        {
          text: 'vent neto',
          dataField: 'vent_neto',
          hidden: true,
        },
      ]
      if (this.popupActiveCodigo !== '') {
        this.heightDetalle = `${window.innerHeight - 250}px`
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
        this.columnsDetalle = [
          {
            text: 'Puesto',
            dataField: 'nume_fila',
            width: 60,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'N',
            pinned,
          }, {
            text: 'Sector',
            dataField: 'codi_sect',
            width: 60,
            align: 'center',
            cellsalign: 'center',
            pinned,
          }, {
            text: 'Lider',
            dataField: 'nomb_lide',
            width: 200,
            align: 'center',
            cellsalign: 'left',
            pinned,
          }, {
            text: 'obje pedi',
            dataField: 'obje_pedi',
            cellsformat: 'N',
            hidden: true,
          }, {
            text: 'Pedi. Total',
            dataField: 'porc_pedi',
            width: 100,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'D2',
            cellclassname: this.repo_come_eval_cier_rank_porc_tota_clas,
          }, {
            text: 'obje inco',
            dataField: 'obje_inco',
            cellsformat: 'N',
            hidden: true,
          }, {
            text: 'Incorporación',
            dataField: 'porc_inco',
            width: 110,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'D2',
            cellclassname: this.repo_come_eval_cier_rank_porc_inco_clas,
          }, {
            text: 'obje rete',
            dataField: 'obje_rete',
            cellsformat: 'N',
            hidden: true,
          }, {
            text: 'Pedi. Rete.',
            dataField: 'porc_rete',
            width: 100,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'D2',
            cellclassname: this.repo_come_eval_cier_rank_porc_rete_clas,
          }, {
            text: '% Acti.',
            dataField: 'porc_acti',
            width: 100,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'D2',
            cellclassname: this.repo_come_eval_cier_rank_porc_acti_clas,
          }, {
            text: 'fact ante rete cons',
            dataField: 'fact_ante_rete_cons',
            cellsformat: 'N',
            hidden: true,
          }, {
            text: 'Cons. Pedi. Rete.',
            dataField: 'porc_rete_cons',
            width: 120,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'D2',
            cellclassname: this.repo_come_eval_cier_rank_porc_rete_cons_clas,
          }, {
            text: 'obje rete segu',
            dataField: 'obje_rete_segu',
            cellsformat: 'N',
            hidden: true,
          }, {
            text: 'Cons. 2do Pedi.',
            dataField: 'porc_rete_segu',
            width: 100,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'D2',
            cellclassname: this.repo_come_eval_cier_rank_porc_rete_segu_clas,
          }, {
            text: 'obje rete terc',
            dataField: 'obje_rete_terc',
            cellsformat: 'N',
            hidden: true,
          }, {
            text: 'Cons. 3er Pedi.',
            dataField: 'porc_rete_terc',
            width: 100,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'D2',
            cellclassname: this.repo_come_eval_cier_rank_porc_rete_terc_clas,
          }, {
            text: 'obje rete cuar',
            dataField: 'obje_rete_cuar',
            cellsformat: 'N',
            hidden: true,
          }, {
            text: 'Cons. 4to Pedi.',
            dataField: 'porc_rete_cuar',
            width: 100,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'D2',
            cellclassname: this.repo_come_eval_cier_rank_porc_rete_cuar_clas,
          }, {
            text: 'fact ante pegs',
            dataField: 'fact_ante_pegs',
            cellsformat: 'N',
            hidden: true,
          }, {
            text: 'Suma Ret. Pegs',
            dataField: 'porc_pegs',
            width: 100,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'D2',
            cellclassname: this.repo_come_eval_cier_rank_porc_pegs_clas,
          }, {
            text: 'obje capi',
            dataField: 'obje_capi',
            cellsformat: 'N',
            hidden: true,
          }, {
            text: 'Capi.',
            dataField: 'fact_capi',
            width: 100,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'N',
            cellclassname: this.repo_come_eval_cier_rank_fact_capi_clas,
          }, {
            text: 'valo docu',
            dataField: 'valo_docu',
            cellsformat: 'N',
            hidden: true,
          }, {
            text: 'Cobr. 21di.',
            dataField: 'porc_cobr',
            width: 120,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'D2',
            cellclassname: this.repo_come_eval_cier_rank_porc_cobr_clas,
          }, {
            text: 'obje acti',
            dataField: 'obje_acti',
            cellsformat: 'N',
            hidden: true,
          }, {
            text: 'vent neta',
            dataField: 'vent_neto',
            cellsformat: 'D2',
            hidden: true,
          }, {
            text: 'Canjes & Devo.',
            dataField: 'porc_canj',
            width: 100,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'D2',
            cellclassname: this.repo_come_eval_cier_rank_porc_canj_clas,
          }, {
            text: 'Nivel de Lider',
            dataField: 'nume_nive',
            width: 120,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'N',
          }, {
            text: 'Puntaje',
            dataField: 'peso_tota',
            width: 120,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'N',
          },
        ]
      }
      if (typeof this.$refs.repo_come_eval_cier_grid_glob !== 'undefined') {
        if (window.innerHeight - 300 < 350) {
          this.height = '350px'
        } else {
          this.height = `${window.innerHeight - 300}px`
        }
        this.$refs.repo_come_eval_cier_grid_glob.columns = this.columnsGlobal
        this.$refs.repo_come_eval_cier_grid_glob.height = this.height
      }
      if (typeof this.$refs.repo_come_eval_cier_grid_deta !== 'undefined') {
        this.$refs.repo_come_eval_cier_grid_deta.columns = this.columnsDetalle
        this.$refs.repo_come_eval_cier_grid_deta.height = this.heightDetalle
      }
    },
    setCampana(value) {
      this.seleccionCampana = value
    },
    setZona(value) {
      this.seleccionZona = value
    },
    repo_come_eval_cier_limp() {
      this.$refs.repo_come_eval_cier_grid_glob.clear()
      this.$refs.repo_come_eval_cier_grid_glob.clearselection()
      this.limaProvincia = '-'
      this.objetivoIncorporacion = '0'
      this.facturadoIncorporacion = '0'
      this.cumplimientoIncorporacion = '0.00'
      this.objetivoRetencion = '0'
      this.facturadoRetencion = '0'
      this.cumplimientoRetencion = '0.00'
      this.codigoCampana = '0'
      this.codigoZona = '0'
    },
    async repo_come_eval_cier_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_eval_cier_visi',
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
    repo_come_eval_cier_cump_tota_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeTota = parseFloat(dataRecord.obje_tota).toFixed(2)
      const cumpTota = parseFloat(value).toFixed(2)
      if (objeTota === 0) {
        return ''
      } if (cumpTota >= 100) {
        return 'text-white bg-success'
      } if (cumpTota >= 80 && cumpTota < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_rank_porc_tota_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objePedi = parseFloat(dataRecord.obje_pedi).toFixed(2)
      const porcPedi = parseFloat(value).toFixed(2)
      if (objePedi === 0) {
        return ''
      } if (porcPedi >= 100) {
        return 'text-white bg-success'
      } if (porcPedi >= 80 && porcPedi < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_cump_inco_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeInco = parseFloat(dataRecord.obje_inco).toFixed(2)
      const cumpInco = parseFloat(value).toFixed(2)
      if (objeInco === 0) {
        return ''
      } if (cumpInco >= 100) {
        return 'text-white bg-success'
      } if (cumpInco >= 80 && cumpInco < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_rank_porc_inco_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeInco = parseFloat(dataRecord.obje_inco).toFixed(2)
      const porcInco = parseFloat(value).toFixed(2)
      if (objeInco === 0) {
        return ''
      } if (porcInco >= 100) {
        return 'text-white bg-success'
      } if (porcInco >= 80 && porcInco < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_cump_rete_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeRete = parseFloat(dataRecord.obje_rete).toFixed(2)
      const porcRete = parseFloat(value).toFixed(2)
      if (objeRete === 0) {
        return ''
      } if (porcRete >= 100) {
        return 'text-white bg-success'
      } if (porcRete >= 95 && porcRete < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_rank_porc_rete_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeRete = parseFloat(dataRecord.obje_rete).toFixed(2)
      const porcRete = parseFloat(value).toFixed(2)
      if (objeRete === 0) {
        return ''
      } if (porcRete >= 100) {
        return 'text-white bg-success'
      } if (porcRete >= 95 && porcRete < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_cump_fact_rete_cons_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeReteCons = parseFloat(dataRecord.fact_rete_cons_ante).toFixed(2)
      const porcReteCons = parseFloat(value).toFixed(2)
      if (objeReteCons === 0) {
        return ''
      } if (porcReteCons >= 100) {
        return 'text-white bg-success'
      } if (porcReteCons >= 90 && porcReteCons < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_rank_porc_rete_cons_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeReteCons = parseFloat(dataRecord.fact_ante_rete_cons).toFixed(2)
      const porcReteCons = parseFloat(value).toFixed(2)
      if (objeReteCons === 0) {
        return ''
      } if (porcReteCons >= 100) {
        return 'text-white bg-success'
      } if (porcReteCons >= 90 && porcReteCons < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_obje_rete_cons_clas(
      row,
      columnfield,
      value,
      // eslint-disable-next-line
      defaulthtml,
      // eslint-disable-next-line
      columnproperties,
      // eslint-disable-next-line
      rowdata,
    ) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      // eslint-disable-next-line
      const objeReteSist = parseInt(dataRecord.obje_rete_cons_sist_ocul)
      // eslint-disable-next-line
      const objeRete = parseInt(value)
      let porcReteCons = 100 * (objeRete / objeReteSist)
      porcReteCons = parseFloat(porcReteCons).toFixed(2)

      if (objeReteSist === 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 8.5px;">${
            value
          }</div>`
        )
      } if (porcReteCons >= 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #00c602 ; font-weight: bold; font-size : 14px;">${
            value
          }</div>`
        )
      } if (porcReteCons >= 80 && porcReteCons < 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #ecaf00; font-weight: bold; font-size : 14px;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #ff3f39; font-weight: bold; font-size : 14px;">${
          value
        }</div>`
      )
    },
    repo_come_eval_cier_cump_fact_rete_cons_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeData = parseFloat(dataRecord.obje_rete_cons_segu).toFixed(2)
      const valoData = parseFloat(value).toFixed(2)
      if (objeData === 0) {
        return ''
      } if (valoData >= 100) {
        return 'text-white bg-success'
      } if (valoData >= 80 && valoData < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_rank_porc_rete_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeData = parseFloat(dataRecord.obje_rete_segu).toFixed(2)
      const valoData = parseFloat(value).toFixed(2)
      if (objeData === 0) {
        return ''
      } if (valoData >= 100) {
        return 'text-white bg-success'
      } if (valoData >= 80 && valoData < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_cump_fact_rete_cons_terc_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeData = parseFloat(dataRecord.obje_rete_cons_terc).toFixed(2)
      const valoData = parseFloat(value).toFixed(2)
      if (objeData === 0) {
        return ''
      } if (valoData >= 80) {
        return 'text-white bg-success'
      } if (valoData >= 70 && valoData < 80) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_rank_porc_rete_terc_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeData = parseFloat(dataRecord.obje_rete_terc).toFixed(2)
      const valoData = parseFloat(value).toFixed(2)
      if (objeData === 0) {
        return ''
      } if (valoData >= 80) {
        return 'text-white bg-success'
      } if (valoData >= 70 && valoData < 80) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_cump_fact_rete_cons_cuar_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeData = parseFloat(dataRecord.obje_rete_cons_cuar).toFixed(2)
      const valoData = parseFloat(value).toFixed(2)
      if (objeData === 0) {
        return ''
      } if (valoData >= 70) {
        return 'text-white bg-success'
      } if (valoData >= 60 && valoData < 70) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_rank_porc_rete_cuar_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeData = parseFloat(dataRecord.obje_rete_cuar).toFixed(2)
      const valoData = parseFloat(value).toFixed(2)
      if (objeData === 0) {
        return ''
      } if (valoData >= 70) {
        return 'text-white bg-success'
      } if (valoData >= 60 && valoData < 70) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_porc_pe21_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objePe21 = parseFloat(dataRecord.obje_pe21).toFixed(2)
      const porcPe21 = parseFloat(value).toFixed(2)
      if (objePe21 === 0) {
        return ''
      } if (porcPe21 >= 100) {
        return 'text-white bg-success'
      } if (porcPe21 >= 90 && porcPe21 < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_obje_pe21_clas(
      row,
      columnfield,
      value,
      // eslint-disable-next-line
      defaulthtml,
      // eslint-disable-next-line
      columnproperties,
      // eslint-disable-next-line
      rowdata,
    ) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      // eslint-disable-next-line
      const objePe21 = parseInt(dataRecord.obje_pe21_sist_ocul)
      // eslint-disable-next-line
      const factPe21 = parseInt(value)

      let porcPe21 = 100 * (factPe21 / objePe21)
      porcPe21 = parseFloat(porcPe21).toFixed(2)

      if (factPe21 === 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 8.5px;">${
            value
          }</div>`
        )
      } if (porcPe21 >= 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #00c602 ; font-weight: bold; font-size : 14px;">${
            value
          }</div>`
        )
      } if (porcPe21 >= 80 && porcPe21 < 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #ecaf00; font-weight: bold; font-size : 14px;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #ff3f39; font-weight: bold; font-size : 14px;">${
          value
        }</div>`
      )
    },
    repo_come_eval_cier_porc_pe42_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objePe42 = parseFloat(dataRecord.obje_pe42).toFixed(2)
      const porcPe42 = parseFloat(value).toFixed(2)
      if (objePe42 === 0) {
        return ''
      } if (porcPe42 >= 100) {
        return 'text-white bg-success'
      } if (porcPe42 >= 90 && porcPe42 < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_obje_pe42_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      // eslint-disable-next-line
      const objePe42 = parseInt(dataRecord.obje_pe42_sist_ocul)
      // eslint-disable-next-line
      const factPe42 = parseInt(value)

      let porcPe42 = 100 * (factPe42 / objePe42)
      porcPe42 = parseFloat(porcPe42).toFixed(2)

      if (factPe42 === 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 8.5px;">${
            value
          }</div>`
        )
      } if (porcPe42 >= 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #00c602 ; font-weight: bold; font-size : 14px;">${
            value
          }</div>`
        )
      } if (porcPe42 >= 80 && porcPe42 < 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #ecaf00; font-weight: bold; font-size : 14px;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #ff3f39; font-weight: bold; font-size : 14px;">${
          value
        }</div>`
      )
    },
    repo_come_eval_cier_porc_pe63_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objePe63 = parseFloat(dataRecord.obje_pe63).toFixed(2)
      const porcPe63 = parseFloat(value).toFixed(2)
      if (objePe63 === 0) {
        return ''
      } if (porcPe63 >= 100) {
        return 'text-white bg-success'
      } if (porcPe63 >= 90 && porcPe63 < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_obje_pe63_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      // eslint-disable-next-line
      const objePe63 = parseInt(dataRecord.obje_pe63_sist_ocul)
      // eslint-disable-next-line
      const factPe63 = parseInt(value)

      let porcPe63 = 100 * (factPe63 / objePe63)
      porcPe63 = parseFloat(porcPe63).toFixed(2)

      if (factPe63 === 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 8.5px;">${
            value
          }</div>`
        )
      } if (porcPe63 >= 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #00c602 ; font-weight: bold; font-size : 14px;">${
            value
          }</div>`
        )
      } if (porcPe63 >= 80 && porcPe63 < 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #ecaf00; font-weight: bold; font-size : 14px;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #ff3f39; font-weight: bold; font-size : 14px;">${
          value
        }</div>`
      )
    },
    repo_come_eval_cier_porc_pegs_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objePegs = parseFloat(dataRecord.obje_pegs).toFixed(2)
      const porcPegs = parseFloat(value).toFixed(2)
      if (objePegs === 0) {
        return ''
      } if (porcPegs >= 100) {
        return 'text-white bg-success'
      } if (porcPegs >= 90 && porcPegs < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_obje_pegs_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      // eslint-disable-next-line
      const objePegs = parseInt(dataRecord.obje_pegs_sist_ocul)
      // eslint-disable-next-line
      const factPegs = parseInt(value)

      let porcPegs = 100 * (factPegs / objePegs)
      porcPegs = parseFloat(porcPegs).toFixed(2)

      if (factPegs === 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 8.5px;">${
            value
          }</div>`
        )
      } if (porcPegs >= 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #00c602 ; font-weight: bold; font-size : 14px;">${
            value
          }</div>`
        )
      } if (porcPegs >= 80 && porcPegs < 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #ecaf00; font-weight: bold; font-size : 14px;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #ff3f39; font-weight: bold; font-size : 14px;">${
          value
        }</div>`
      )
    },
    repo_come_eval_cier_rank_porc_pegs_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeData = parseFloat(dataRecord.fact_ante_pegs).toFixed(2)
      const valoData = parseFloat(value).toFixed(2)
      if (objeData === 0) {
        return ''
      } if (valoData >= 100) {
        return 'text-white bg-success'
      } if (valoData >= 90 && valoData < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_porc_rein_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeRein = parseFloat(dataRecord.obje_rein).toFixed(2)
      const factRein = parseFloat(value).toFixed(2)

      if (objeRein === 0) {
        return ''
      } if (factRein >= 100) {
        return 'text-white bg-success'
      } if (factRein >= 90 && factRein < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_obje_rein_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeRein = parseFloat(dataRecord.obje_rein_sist_ocul).toFixed(2)
      // eslint-disable-next-line
      const factRein = parseInt(value)
      let porcRein = 100 * (factRein / objeRein)
      porcRein = parseFloat(porcRein).toFixed(2)

      if (factRein === 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 8.5px;">${
            value
          }</div>`
        )
      } if (porcRein >= 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #00c602 ; font-weight: bold; font-size : 14px;">${
            value
          }</div>`
        )
      } if (porcRein >= 80 && porcRein < 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #ecaf00; font-weight: bold; font-size : 14px;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #ff3f39; font-weight: bold; font-size : 14px;">${
          value
        }</div>`
      )
    },
    repo_come_eval_cier_porc_acti_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeActi = parseFloat(dataRecord.obje_acti).toFixed(2)
      const porcActi = parseFloat(value).toFixed(2)
      if (objeActi === 0) {
        return ''
      } if (porcActi >= objeActi) {
        return 'text-white bg-success'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_rank_porc_acti_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeActi = parseFloat(dataRecord.obje_acti).toFixed(2)
      const porcActi = parseFloat(value).toFixed(2)
      if (objeActi === 0) {
        return ''
      } if (porcActi >= objeActi) {
        return 'text-white bg-success'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_fact_capi_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      // eslint-disable-next-line
      const objeCapi = parseInt(dataRecord.obje_capi)
      // eslint-disable-next-line
      const factCapi = parseInt(value)
      if (objeCapi === 0) {
        return ''
      } if (factCapi >= objeCapi) {
        return 'text-white bg-success'
      } if (factCapi >= 1 && factCapi < objeCapi) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_rank_fact_capi_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      // eslint-disable-next-line
      const objeData = parseInt(dataRecord.obje_capi)
      // eslint-disable-next-line
      const valoData = parseInt(value)
      if (objeData === 0) {
        return ''
      } if (valoData >= objeData) {
        return 'text-white bg-success'
      } if (valoData >= 1 && valoData < objeData) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_porc_21di_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const valoDocu = parseFloat(dataRecord.valo_docu).toFixed(2)
      const porc21di = parseFloat(value).toFixed(2)
      if (valoDocu === 0) {
        return ''
      } if (porc21di >= 88) {
        return 'text-white bg-success'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_porc_31di_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const valoDocu = parseFloat(dataRecord.valo_docu).toFixed(2)
      const porc31di = parseFloat(value).toFixed(2)

      if (valoDocu === 0) {
        return ''
      } if (porc31di >= 92) {
        return 'text-white bg-success'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_rank_porc_cobr_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(row)
      const objeData = parseFloat(dataRecord.valo_docu).toFixed(2)
      const valoData = parseFloat(value).toFixed(2)
      if (objeData === 0) {
        return ''
      } if (valoData >= 88) {
        return 'text-white bg-success'
      }
      return 'text-white bg-danger'
    },
    repo_come_eval_cier_rank_porc_canj_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_eval_cier_grid_glob.getrowdata(
        row,
      )
      const ventNeto = parseFloat(dataRecord.vent_neto).toFixed(2)
      const porcCanj = parseFloat(value).toFixed(2)
      if (ventNeto === 0) {
        return ''
      } if (porcCanj >= 0 && porcCanj <= 2) {
        return 'text-white bg-success'
      } if (porcCanj > 2 && porcCanj < 2.8) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    async repo_come_eval_cier_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_eval_cier_limp()
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
      } else if (this.seleccionZona === null || this.seleccionZona.length === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'Campo zona es obligatorio.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          this.codigoCampana = this.seleccionCampana
          this.codigoZona = this.seleccionZona
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_eval_cier/eval_cier_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.seleccionCampana,
              codi_zona: this.seleccionZona,
            },
          })
          this.limaProvincia = await servicio.data.lima_prov
          this.objetivoIncorporacion = await servicio.data.obje_inco
          this.facturadoIncorporacion = await servicio.data.fact_inco
          this.cumplimientoIncorporacion = await servicio.data.porc_inco
          this.objetivoRetencion = await servicio.data.obje_rete
          this.facturadoRetencion = await servicio.data.fact_rete
          this.cumplimientoRetencion = await servicio.data.porc_rete

          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_eval_cier_grid_glob.updatebounddata('cells')
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
    async repo_come_eval_cier_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_eval_cier_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/repo_come_eval_cier/eval_cier_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              lima_prov: this.limaProvincia,
              obje_inco: this.objetivoIncorporacion,
              fact_inco: this.facturadoIncorporacion,
              porc_inco: this.cumplimientoIncorporacion,
              obje_rete: this.objetivoRetencion,
              fact_rete: this.facturadoRetencion,
              porc_rete: this.cumplimientoRetencion,
              data_glob: this.$refs.repo_come_eval_cier_grid_glob.exportdata('json', null, true, null, true),
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
    async repo_come_eval_cier_rank() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_eval_cier_grid_glob.getdatainformation()
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
            text: 'No tiene información para generar ranking de líderes',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_eval_cier/eval_cier_rank_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              lima_prov: this.limaProvincia,
              codi_camp: this.codigoCampana,
              codi_zona: this.codigoZona,
              data_glob: this.$refs.repo_come_eval_cier_grid_glob.exportdata('json', null, true, null, true),
            },
          })
          this.popupActiveCodigo = '1'
          document.body.style.overflow = 'hidden'
          document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
          this.popupActive = true
          this.sourceDetalle.datafields = [
            { name: 'nume_fila', type: 'number' },
            { name: 'codi_sect', type: 'string' },
            { name: 'nomb_lide', type: 'string' },
            { name: 'obje_pedi', type: 'number' },
            { name: 'porc_pedi', type: 'number' },
            { name: 'obje_inco', type: 'number' },
            { name: 'porc_inco', type: 'number' },
            { name: 'obje_rete', type: 'number' },
            { name: 'porc_rete', type: 'number' },
            { name: 'fact_ante_rete_cons', type: 'number' },
            { name: 'porc_rete_cons', type: 'number' },
            { name: 'obje_rete_segu', type: 'number' },
            { name: 'porc_rete_segu', type: 'number' },
            { name: 'obje_rete_terc', type: 'number' },
            { name: 'porc_rete_terc', type: 'number' },
            { name: 'obje_rete_cuar', type: 'number' },
            { name: 'porc_rete_cuar', type: 'number' },
            { name: 'fact_ante_pegs', type: 'number' },
            { name: 'porc_pegs', type: 'number' },
            { name: 'obje_capi', type: 'number' },
            { name: 'fact_capi', type: 'number' },
            { name: 'valo_docu', type: 'number' },
            { name: 'porc_cobr', type: 'number' },
            { name: 'obje_acti', type: 'number' },
            { name: 'porc_acti', type: 'number' },
            { name: 'nume_nive', type: 'number' },
            { name: 'peso_tota', type: 'number' },
            { name: 'porc_canj', type: 'number' },
            { name: 'vent_neto', type: 'number' },
          ]
          this.sourceDetalle.localdata = []
          this.$refs.repo_come_eval_cier_grid_deta.updatebounddata()
          this.handleWindowResize()
          this.sourceDetalle.localdata = await servicio.data.data_glob
          this.sourceDetalle.datatype = 'json'
          this.$refs.repo_come_eval_cier_grid_deta.updatebounddata('cells')
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
    repo_come_eval_cier_rank_cerr() {
      document.body.style.overflow = 'visible'
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
      this.popupActiveCodigo = ''
    },
    async repo_come_eval_cier_rank_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfo = this.$refs.repo_come_eval_cier_grid_deta.getdatainformation()
      const dataRows = dataInfo.rowscount
      if (dataRows === 0) {
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
            url: `${store.state.app.webService}/sami_v1/repo_come_eval_cier/eval_cier_rank_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_eval_cier_grid_deta.exportdata('json', null, true, null, true),
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
<style lang="scss"></style>
