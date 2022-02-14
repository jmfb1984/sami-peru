<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_pedi_digi_pais_gene()"
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
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_pedi_digi_pais_corr()"
      >
        <feather-icon
          icon="MailIcon"
          class="mr-50 text-black"
        />
        <span
          class="text-black"
        >
          Correo
        </span>
      </b-button>
      <b-button
        variant="danger"
        block
        @click="repo_come_pedi_digi_pais_limp()"
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
        @click="repo_come_pedi_digi_pais_gene()"
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
        variant="primary"
        class="ml-1"
        @click="repo_come_pedi_digi_pais_corr()"
      >
        <feather-icon
          icon="MailIcon"
          class="mr-50 text-black"
        />
        <span
          class="text-black"
        >
          Correo
        </span>
      </b-button>
      <b-button
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="repo_come_pedi_digi_pais_exce()"
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
        @click="repo_come_pedi_digi_pais_limp()"
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
        <selectCampana
          :array-campana="dataCampana"
          @campana="setCampana"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_pedi_digi_pais_grid_glob"
            :width="'100%'"
            :autoheight="true"
            :source="dataAdapterGlobal"
            :sortable="false"
            :theme="'sami'"
            :filterable="false"
            :columns="columnsGlobal"
            :enableanimations="false"
            :localization="localization"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
            :enablehover="false"
            :selectionmode="'none'"
            :columnsresize="true"
            :autorowheight="true"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card title="Cumplimiento al corte">
          <b-row>
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
              xl="4"
              lg="4"
              md="6"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <v-select
                ref="refCorte"
                v-model="seleccionCorte"
                :options="dataCorte"
                @input="changeCortePedidosDigitadosPais"
              >
                <span
                  slot="no-options"
                  @click="$refs.refCorte.open = false"
                >
                  Corte no existe.
                </span>
              </v-select>
            </b-col>
          </b-row>
          <b-row class="mt-1">
            <b-col>
              <JqxGrid
                ref="repo_come_pedi_digi_pais_grid_cort"
                :width="'100%'"
                :height="130"
                :enablehover="false"
                :source="dataAdapterCorte"
                :sortable="false"
                :theme="'sami'"
                :filterable="false"
                :columns="columnsCorte"
                :columngroups="columnsGroupCorte"
                :enableanimations="false"
                :localization="localization"
                :columnsresize="true"
                :showemptyrow="false"
              />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card title="Consolidado corte pedido">
          <b-row>
            <b-col>
              <JqxGrid
                ref="repo_come_pedi_digi_pais_grid_cons"
                :theme="'sami'"
                :width="'100%'"
                :height="250"
                :enablehover="false"
                :source="dataAdapterConsolidado"
                :columns="columnsConsolidado"
                :columngroups="columnsGroupConsolidado"
                :localization="localization"
                :enableanimations="true"
                :sortable="true"
                :sortmode="'many'"
                :filterable="true"
                :columnsresize="true"
                :altrows="false"
                :showemptyrow="false"
                :columnsreorder="true"
                :showstatusbar="false"
                :showaggregates="false"
                :selectionmode="'singlecell'"
                :scrollmode="'logical'"
              />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card title="Detalle región pedido">
          <JqxGrid
            ref="repo_come_pedi_digi_pais_grid_area"
            :theme="'sami'"
            :width="'100%'"
            :height="350"
            :enablehover="false"
            :source="dataAdapterArea"
            :columns="columnsArea"
            :columngroups="columnsGroupArea"
            :localization="localization"
            :columnsresize="true"
            :sortable="true"
            :sortmode="'many'"
            :filterable="true"
            :altrows="false"
            :showemptyrow="false"
            :columnsreorder="true"
            :showstatusbar="false"
            :showaggregates="false"
            :groupable="false"
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
import vSelect from 'vue-select'
import { $themeColors } from '@themeConfig'
import selectCampana from '@/views/components/FiltroCampana.vue'
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
    selectCampana,
    // eslint-disable-next-line vue/no-unused-components
    JqxGrid,
    vSelect,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      width: '',
      dataCampana: [],
      seleccionCampana: [],
      dataCorte: [],
      seleccionCorte: [],
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      // eslint-disable-next-line
      dataAdapterConsolidado: new jqx.dataAdapter(this.sourceConsolidado),
      columnsGroupConsolidado: [
        { text: 'Incorporación', align: 'center', name: 'inco' },
        { text: 'Retención', align: 'center', name: 'rete' },
        { text: 'Pedidos Totales', align: 'center', name: 'tota' },
      ],
      // eslint-disable-next-line
      dataAdapterArea: new jqx.dataAdapter(this.sourceArea),
      columnsGroupArea: [
        { text: 'Incorporación', align: 'center', name: 'inco' },
        { text: 'Retención', align: 'center', name: 'rete' },
        { text: 'Pedidos Totales', align: 'center', name: 'tota' },
      ],
      // eslint-disable-next-line
      dataAdapterCorte: new jqx.dataAdapter(this.sourceCorte),
      columnsGroupCorte: [
        { text: 'Incorporación', align: 'center', name: 'inco' },
        { text: 'Retención', align: 'center', name: 'rete' },
        { text: 'Pedidos Totales', align: 'center', name: 'tota' },
        { text: 'Venta', align: 'center', name: 'vent' },
      ],
    }
  },
  beforeCreate() {
    this.sourceGlobal = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'line_desc', type: 'string' },
        { name: 'obje_conc', type: 'string' },
        { name: 'falt_desc', type: 'string' },
        { name: 'fact_conc', type: 'string' },
        { name: 'rece_desc', type: 'string' },
        { name: 'porc_conc', type: 'string' },
      ],
      datatype: 'array',
    }
    this.sourceConsolidado = {
      localdata: [],
      datafields: [
        { name: 'cons_fila', type: 'string' },
        { name: 'codi_cort', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'obje_inco', type: 'number' },
        { name: 'fact_inco', type: 'number' },
        { name: 'pend_fact_inco', type: 'number' },
        { name: 'tota_fact_inco', type: 'number' },
        { name: 'cump_fact_inco', type: 'number' },
        { name: 'tota_inco', type: 'number' },
        { name: 'cump_inco', type: 'number' },
        { name: 'obje_rete', type: 'number' },
        { name: 'fact_rete', type: 'number' },
        { name: 'pend_fact_rete', type: 'number' },
        { name: 'tota_fact_rete', type: 'number' },
        { name: 'cump_fact_rete', type: 'number' },
        { name: 'tota_rete', type: 'number' },
        { name: 'cump_rete', type: 'number' },
        { name: 'acti_rete', type: 'number' },
        { name: 'obje_tota', type: 'number' },
        { name: 'fact_tota', type: 'number' },
        { name: 'pend_fact_tota', type: 'number' },
        { name: 'tota_fact_tota', type: 'number' },
        { name: 'cump_fact_tota', type: 'number' },
        { name: 'tota_tota', type: 'number' },
        { name: 'cump_tota', type: 'number' },
        { name: 'capi_tota', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceCorte = {
      localdata: [],
      datafields: [
        { name: 'cons_fila', type: 'string' },
        { name: 'codi_cort', type: 'string' },
        { name: 'obje_inco', type: 'number' },
        { name: 'fact_inco', type: 'number' },
        { name: 'cump_inco', type: 'number' },
        { name: 'obje_rete', type: 'number' },
        { name: 'fact_rete', type: 'number' },
        { name: 'cump_rete', type: 'number' },
        { name: 'acti_rete', type: 'number' },
        { name: 'obje_tota', type: 'number' },
        { name: 'fact_tota', type: 'number' },
        { name: 'cump_tota', type: 'number' },
        { name: 'vent_ppfa', type: 'number' },
        { name: 'vent_ppre', type: 'number' },
        { name: 'vent_cobr', type: 'number' },
        { name: 'fact_capi', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceArea = {
      localdata: [],
      datafields: [
        { name: 'cons_fila', type: 'string' },
        { name: 'codi_cort', type: 'string' },
        { name: 'codi_area', type: 'string' },
        { name: 'obje_inco', type: 'number' },
        { name: 'fact_inco', type: 'number' },
        { name: 'pend_fact_inco', type: 'number' },
        { name: 'tota_fact_inco', type: 'number' },
        { name: 'cump_fact_inco', type: 'number' },
        { name: 'tota_inco', type: 'number' },
        { name: 'cump_inco', type: 'number' },
        { name: 'obje_rete', type: 'number' },
        { name: 'fact_rete', type: 'number' },
        { name: 'pend_fact_rete', type: 'number' },
        { name: 'tota_fact_rete', type: 'number' },
        { name: 'cump_fact_rete', type: 'number' },
        { name: 'tota_rete', type: 'number' },
        { name: 'cump_rete', type: 'number' },
        { name: 'acti_rete', type: 'number' },
        { name: 'obje_tota', type: 'number' },
        { name: 'fact_tota', type: 'number' },
        { name: 'pend_fact_tota', type: 'number' },
        { name: 'tota_fact_tota', type: 'number' },
        { name: 'cump_fact_tota', type: 'number' },
        { name: 'tota_tota', type: 'number' },
        { name: 'cump_tota', type: 'number' },
        { name: 'capi_tota', type: 'number' },
      ],
      datatype: 'array',
    }
  },
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
    this.repo_come_pedi_digi_pais_inic()
    this.repo_come_pedi_digi_pais_visi()
  },
  created() {
    this.handleWindowResize()
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    itemCampana = itemCampana.camp.slice(0, 18)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))
    this.seleccionCampana = itemCampana[0].codi_camp
    this.repo_come_pedi_digi_pais_cort()
  },
  methods: {
    handleWindowResize() {
      let nombConcGlob = ''
      let lineDescGlob = ''
      let objeConcGlob = ''
      let faltDescGlob = ''
      let factConcGlob = ''
      let receDescGlob = ''
      let porcConcGlob = ''
      let pinned = true
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          nombConcGlob = '50'
          lineDescGlob = '20'
          objeConcGlob = '20'
          faltDescGlob = '20'
          factConcGlob = '20'
          receDescGlob = '20'
          porcConcGlob = '20'
          pinned = false
          break
        case 'sm':
          nombConcGlob = '40'
          lineDescGlob = '20'
          objeConcGlob = '20'
          faltDescGlob = '20'
          factConcGlob = '20'
          receDescGlob = '20'
          porcConcGlob = '20'
          pinned = false
          break
        case 'md':
          nombConcGlob = '30'
          lineDescGlob = '10'
          objeConcGlob = '20'
          faltDescGlob = '10'
          factConcGlob = '20'
          receDescGlob = '15'
          porcConcGlob = '20'
          pinned = true
          break
        default:
          nombConcGlob = '40'
          lineDescGlob = '10'
          objeConcGlob = '10'
          faltDescGlob = '10'
          factConcGlob = '10'
          receDescGlob = '10'
          porcConcGlob = '10'
          pinned = false
          break
      }
      this.columnsGlobal = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConcGlob}%`,
        },
        {
          text: '',
          dataField: 'line_desc',
          width: `${lineDescGlob}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Objetivo',
          dataField: 'obje_conc',
          width: `${objeConcGlob}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: '',
          dataField: 'falt_desc',
          width: `${faltDescGlob}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Facturado',
          dataField: 'fact_conc',
          width: `${factConcGlob}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: '',
          dataField: 'rece_desc',
          width: `${receDescGlob}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Porcentaje',
          dataField: 'porc_conc',
          width: `${porcConcGlob}%`,
          align: 'center',
          cellsalign: 'center',
        },
      ]
      this.columnsConsolidado = [
        {
          text: 'fila',
          datafield: 'cons_fila',
          hidden: true,
        },
        {
          text: 'Corte',
          datafield: 'codi_cort',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Nro zonas',
          datafield: 'codi_zona',
          width: '80',
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Objetivo',
          columngroup: 'inco',
          datafield: 'obje_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Facturado',
          columngroup: 'inco',
          datafield: 'fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Cump. Fact.',
          columngroup: 'inco',
          datafield: 'cump_fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Pend. Fact.',
          columngroup: 'inco',
          datafield: 'pend_fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Total',
          columngroup: 'inco',
          datafield: 'tota_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: '% Cump.',
          columngroup: 'inco',
          datafield: 'cump_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          cellsformat: 'd2',
        },
        {
          text: 'Objetivo',
          columngroup: 'rete',
          datafield: 'obje_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Facturado',
          columngroup: 'rete',
          datafield: 'fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Cump. Fact.',
          columngroup: 'rete',
          datafield: 'cump_fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Pend. Fact.',
          columngroup: 'rete',
          datafield: 'pend_fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Total',
          columngroup: 'rete',
          datafield: 'tota_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
        },
        {
          text: '% Cump.',
          columngroup: 'rete',
          datafield: 'cump_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          cellsformat: 'd2',
        },
        {
          text: '% Acti.',
          columngroup: 'rete',
          datafield: 'acti_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          cellsformat: 'd2',
        },
        {
          text: 'Objetivo',
          columngroup: 'tota',
          datafield: 'obje_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Facturado',
          columngroup: 'tota',
          datafield: 'fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Cump. Fact.',
          columngroup: 'tota',
          datafield: 'cump_fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Pend. Fact.',
          columngroup: 'tota',
          datafield: 'pend_fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Total',
          columngroup: 'tota',
          datafield: 'tota_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: '% Cump.',
          columngroup: 'tota',
          datafield: 'cump_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          cellsformat: 'd2',
        },
        {
          text: 'Capi.',
          columngroup: 'tota',
          datafield: 'capi_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
      ]
      this.columnsArea = [
        {
          text: 'fila',
          datafield: 'cons_fila',
          hidden: true,
        },
        {
          text: 'Corte',
          datafield: 'codi_cort',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Región',
          datafield: 'codi_area',
          width: '70',
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Objetivo',
          columngroup: 'inco',
          datafield: 'obje_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Facturado',
          columngroup: 'inco',
          datafield: 'fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Cump. Fact.',
          columngroup: 'inco',
          datafield: 'cump_fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Pend. Fact.',
          columngroup: 'inco',
          datafield: 'pend_fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Total',
          columngroup: 'inco',
          datafield: 'tota_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: '% Cump.',
          columngroup: 'inco',
          datafield: 'cump_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          cellsformat: 'd2',
        },
        {
          text: 'Objetivo',
          columngroup: 'rete',
          datafield: 'obje_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Facturado',
          columngroup: 'rete',
          datafield: 'fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Cump. Fact.',
          columngroup: 'rete',
          datafield: 'cump_fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Pend. Fact.',
          columngroup: 'rete',
          datafield: 'pend_fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Total',
          columngroup: 'rete',
          datafield: 'tota_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
        },
        {
          text: '% Cump.',
          columngroup: 'rete',
          datafield: 'cump_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          cellsformat: 'd2',
        },
        {
          text: '% Acti.',
          columngroup: 'rete',
          datafield: 'acti_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          cellsformat: 'd2',
        },
        {
          text: 'Objetivo',
          columngroup: 'tota',
          datafield: 'obje_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Facturado',
          columngroup: 'tota',
          datafield: 'fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Cump. Fact.',
          columngroup: 'tota',
          datafield: 'cump_fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Pend. Fact.',
          columngroup: 'tota',
          datafield: 'pend_fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Total',
          columngroup: 'tota',
          datafield: 'tota_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: '% Cump.',
          columngroup: 'tota',
          datafield: 'cump_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          cellsformat: 'd2',
        },
        {
          text: 'Capi.',
          columngroup: 'tota',
          datafield: 'capi_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
      ]
      this.columnsCorte = [
        {
          text: 'fila',
          dataField: 'cons_fila',
          pinned: true,
        },
        {
          text: 'Corte',
          dataField: 'codi_cort',
          width: '90',
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Objetivo',
          columngroup: 'inco',
          dataField: 'obje_inco',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Facturado',
          columngroup: 'inco',
          dataField: 'fact_inco',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
        },
        {
          text: '% Cump.',
          columngroup: 'inco',
          dataField: 'cump_inco',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          cellsformat: 'D2',
        },
        {
          text: 'Objetivo',
          columngroup: 'rete',
          dataField: 'obje_rete',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Facturado',
          columngroup: 'rete',
          dataField: 'fact_rete',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
        },
        {
          text: '% Cump.',
          columngroup: 'rete',
          dataField: 'cump_rete',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          cellsformat: 'D2',
        },
        {
          text: '% Acti.',
          columngroup: 'rete',
          dataField: 'acti_rete',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          cellsformat: 'D2',
        },
        {
          text: 'Objetivo',
          columngroup: 'tota',
          dataField: 'obje_tota',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Facturado',
          columngroup: 'tota',
          dataField: 'fact_tota',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
        },
        {
          text: '% Cump.',
          columngroup: 'tota',
          dataField: 'cump_tota',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          cellsformat: 'D2',
        },
        {
          text: 'Capi.',
          columngroup: 'tota',
          dataField: 'fact_capi',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          cellsformat: 'D2',
        },

        {
          text: 'P.P. Fact.',
          columngroup: 'vent',
          dataField: 'vent_ppfa',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'C2',
        },
        {
          text: 'P.P. Rece.',
          columngroup: 'vent',
          dataField: 'vent_ppre',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'C2',
        },
        {
          text: '% Cobr.',
          columngroup: 'vent',
          dataField: 'vent_cobr',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
        },
      ]
      if (typeof this.$refs.repo_come_pedi_digi_pais_grid_glob !== 'undefined') {
        this.$refs.repo_come_pedi_digi_pais_grid_glob.columns = this.columnsGlobal
        this.$refs.repo_come_pedi_digi_pais_grid_cons.columns = this.columnsConsolidado
        this.$refs.repo_come_pedi_digi_pais_grid_area.columns = this.columnsArea
        this.$refs.repo_come_pedi_digi_pais_grid_cort.columns = this.columnsCorte
      }
    },
    setCampana(value) {
      this.seleccionCampana = value
    },
    async changeCortePedidosDigitadosPais() {
      this.sourceCorte.localdata = []
      this.sourceCorte.datatype = 'array'
      this.$refs.repo_come_pedi_digi_pais_grid_cort.updatebounddata('cells')
      if (this.seleccionCorte !== null || this.seleccionCorte.length > 0) {
        this.$vs.loading({
          color: $themeColors.primary,
        })
        const dataInfo = this.$refs.repo_come_pedi_digi_pais_grid_cons.getdatainformation()
        const dataRows = dataInfo.rowscount
        if (dataRows === 0) {
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          this.seleccionCorte = ''
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'Debe de generar reporte para obtener el cumplimiento por corte.',
            },
          }, {
            position: 'bottom-right',
            timeout: 8000,
          })
        } else {
          try {
            const servicio = await axios({
              method: 'post',
              url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_pais_cump`,
              timeout: `${1000 * store.state.app.timeout}`,
              data: {
                codi_usua: this.$session.get('codigoUsuario'),
                codi_acce: this.userData.codigoAcceso,
                codi_cort: this.seleccionCorte,
              },
            })
            this.sourceCorte.localdata = await servicio.data.data_cump
            this.sourceCorte.datatype = 'json'
            this.$refs.repo_come_pedi_digi_pais_grid_cort.updatebounddata('cells')
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
      }
    },
    async repo_come_pedi_digi_pais_corr() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfo = this.$refs.repo_come_pedi_digi_pais_grid_cort.getdatainformation()
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
            text: 'Debe de generar cumplimiento al corte para el envio de correo.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_pais_corr`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_deta: this.$refs.repo_come_pedi_digi_pais_grid_cort.exportdata('json', null, true, null, true),
            },
          })
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'CheckCircleIcon',
              variant: 'success',
              text: 'Se envio correo electrónico con éxito.',
            },
          }, {
            position: 'bottom-right',
            timeout: 8000,
          })
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
    async repo_come_pedi_digi_pais_cort() {
      try {
        const servicioCortePedidosDigitadosPais = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_cort`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        const dataCortePedidosDigitadosPais = await servicioCortePedidosDigitadosPais.data.datos
        dataCortePedidosDigitadosPais.forEach(element => this.dataCorte.push(element.codi_cort))
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
    async repo_come_pedi_digi_pais_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_pedi_digi_pais',
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
    repo_come_pedi_digi_pais_inic() {
      this.seleccionCorte = ''
      this.sourceGlobal.localdata = [
        {
          nomb_conc: 'Incorporación',
          line_desc: '',
          obje_conc: '0',
          falt_desc: '',
          fact_conc: '0',
          rece_desc: '',
          porc_conc: '0.00 %',
        },
        {
          nomb_conc: 'Retención',
          line_desc: '',
          obje_conc: '0',
          falt_desc: '',
          fact_conc: '0',
          rece_desc: '',
          porc_conc: '0.00 %',
        },
        {
          nomb_conc: 'Pedidos Totales',
          line_desc: '',
          obje_conc: '0',
          falt_desc: '',
          fact_conc: '0',
          rece_desc: '',
          porc_conc: '0.00 %',
        },
        {
          nomb_conc: 'Venta',
          line_desc: 'Linea',
          obje_conc: 'S/ 0.00',
          falt_desc: 'Faltante',
          fact_conc: 'S/ 0.00',
          rece_desc: 'Recepcionado',
          porc_conc: 'S/ 0.00',
        },
        {
          nomb_conc: 'P.P. Facturado',
          line_desc: '',
          obje_conc: 'S/ 0.00',
          falt_desc: '',
          fact_conc: 'P.P. Recepcionado',
          rece_desc: '',
          porc_conc: 'S/ 0.00',
        },
        {
          nomb_conc: 'Cobranza 21 días',
          line_desc: '',
          obje_conc: 'S/ 0.00',
          falt_desc: '',
          fact_conc: 'S/ 0.00',
          rece_desc: '',
          porc_conc: '0.00 %',
        },
        {
          nomb_conc: 'Cobranza saldo actual',
          line_desc: '',
          obje_conc: 'S/ 0.00',
          falt_desc: '',
          fact_conc: 'S/ 0.00',
          rece_desc: '',
          porc_conc: '0.00 %',
        },
        {
          nomb_conc: '% Actividad',
          line_desc: '',
          obje_conc: '0.00 %',
          falt_desc: '',
          fact_conc: 'Capitalización',
          rece_desc: '',
          porc_conc: '0',
        },
      ]
      this.sourceGlobal.datatype = 'array'
      this.$refs.repo_come_pedi_digi_pais_grid_glob.updatebounddata('cells')
      this.sourceConsolidado.localdata = []
      this.sourceConsolidado.datatype = 'array'
      this.$refs.repo_come_pedi_digi_pais_grid_cons.updatebounddata('cells')
      this.sourceArea.localdata = []
      this.sourceArea.datatype = 'array'
      this.$refs.repo_come_pedi_digi_pais_grid_area.updatebounddata('cells')
      this.sourceCorte.localdata = []
      this.sourceCorte.datatype = 'array'
      this.$refs.repo_come_pedi_digi_pais_grid_cort.updatebounddata('cells')
    },
    repo_come_pedi_digi_pais_limp() {
      this.repo_come_pedi_digi_pais_inic()
    },
    async repo_come_pedi_digi_pais_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_pedi_digi_pais_limp()
      const itemMainCampana = JSON.parse(localStorage.getItem('mainCampana'))
      let campActu = 0
      if (itemMainCampana.camp_actu.length > 0) {
        campActu = itemMainCampana.camp_actu[0].codi_camp
      }
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
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_pais_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.seleccionCampana,
              camp_actu: campActu,
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_pedi_digi_pais_grid_glob.updatebounddata('cells')
          this.sourceConsolidado.localdata = await servicio.data.data_cort
          this.sourceConsolidado.datatype = 'json'
          this.$refs.repo_come_pedi_digi_pais_grid_cons.updatebounddata('cells')
          this.sourceArea.localdata = await servicio.data.data_area
          this.sourceArea.datatype = 'json'
          this.$refs.repo_come_pedi_digi_pais_grid_area.updatebounddata('cells')
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
    async repo_come_pedi_digi_pais_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoCump = this.$refs.repo_come_pedi_digi_pais_grid_cort.getdatainformation()
      const dataRowsCump = dataInfoCump.rowscount
      if (dataRowsCump === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'Debe de generar cumplimiento al corte para exportar a excel',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        const dataInfoCort = this.$refs.repo_come_pedi_digi_pais_grid_cons.getdatainformation()
        const dataRowsCort = dataInfoCort.rowscount
        if (dataRowsCort === 0) {
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'No tiene información para exportar consolidado corte pedido.',
            },
          }, {
            position: 'bottom-right',
            timeout: 8000,
          })
        } else {
          const dataInfoZona = this.$refs.repo_come_pedi_digi_pais_grid_area.getdatainformation()
          const dataRowsZona = dataInfoZona.rowscount
          if (dataRowsZona === 0) {
            setTimeout(() => {
              this.$vs.loading.close()
            }, 500)
            this.$toast({
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
                text: 'No tiene información para exportar detalle región pedido.',
              },
            }, {
              position: 'bottom-right',
              timeout: 8000,
            })
          } else {
            try {
              const pedidos = await axios({
                method: 'post',
                url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_pais_exce`,
                timeout: `${1000 * store.state.app.timeout}`,
                data: {
                  codi_usua: this.$session.get('codigoUsuario'),
                  codi_acce: this.userData.codigoAcceso,
                  data_glob: this.$refs.repo_come_pedi_digi_pais_grid_glob.exportdata('json', null, true, null, true),
                  data_cump: this.$refs.repo_come_pedi_digi_pais_grid_cort.exportdata('json', null, true, null, true),
                  data_cort: this.$refs.repo_come_pedi_digi_pais_grid_cons.exportdata('json', null, true, null, true),
                  data_area: this.$refs.repo_come_pedi_digi_pais_grid_area.exportdata('json', null, true, null, true),
                },
              })
              const datoHtml = await pedidos.data.html
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
        }
      }
    },
  },
}
</script>
<style lang='scss'>

</style>
