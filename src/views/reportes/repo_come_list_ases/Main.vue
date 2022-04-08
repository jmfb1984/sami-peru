<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_list_ases_gene()"
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
        @click="repo_come_list_ases_limp()"
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
        @click="repo_come_list_ases_gene()"
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
        id="popover-pdf1"
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="repo_come_list_ases_pdf1()"
      >
        <b-popover
          target="popover-pdf1"
          variant="danger"
          triggers="hover"
          placement="bottom"
        >
          <template #title>
            <span>Pdf1</span>
          </template>
          <ol class="px-1">
            <li>Consecutiva</li>
            <li>Ret. Peg21</li>
            <li>Ret. Peg42</li>
            <li>Ret. Peg63</li>
            <li>Reingreso</li>
            <li>Incorporación</li>
            <li>Reincorporación</li>
            <li>Peg21</li>
            <li>Peg42</li>
            <li>Peg63</li>
            <li>Posible Reingreso &lt;= S/. 25.00</li>
            <li>Posible Reincorporación &lt;= S/. 25.00</li>
          </ol>
        </b-popover>
        <feather-icon
          icon="FileIcon"
          class="mr-50"
        />
        Pdf1
      </b-button>
      <b-button
        id="popover-pdf2"
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="repo_come_list_ases_pdf2()"
      >
        <b-popover
          target="popover-pdf2"
          variant="danger"
          triggers="hover"
          placement="bottom"
        >
          <template #title>
            <span>Pdf2</span>
          </template>
          <ol class="px-1">
            <li>Consecutiva</li>
            <li>Ret. Peg21</li>
            <li>Ret. Peg42</li>
            <li>Ret. Peg63</li>
            <li>Incorporación</li>
            <li>Reincorporación</li>
            <li>Reingreso</li>
            <li>Peg21</li>
            <li>Peg42</li>
            <li>Peg63</li>
            <li>Posible Reingreso</li>
          </ol>
        </b-popover>
        <feather-icon
          icon="FileIcon"
          class="mr-50"
        />
        Pdf2
      </b-button>
      <b-button
        id="popover-pdf3"
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="repo_come_list_ases_pdf3()"
      >
        <b-popover
          target="popover-pdf3"
          variant="danger"
          triggers="hover"
          placement="bottom"
        >
          <template #title>
            <span>Pdf3</span>
          </template>
          <ol class="px-1">
            <li>Consecutiva</li>
            <li>Ret. Peg21</li>
            <li>Ret. Peg42</li>
            <li>Ret. Peg63</li>
            <li>Reingreso</li>
            <li>Incorporación</li>
            <li>Reincorporación</li>
            <li>Peg21</li>
            <li>Peg42</li>
            <li>Peg63</li>
          </ol>
        </b-popover>
        <feather-icon
          icon="FileIcon"
          class="mr-50"
        />
        Pdf3
      </b-button>
      <b-button
        id="popover-pdf4"
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="repo_come_list_ases_pdf4()"
      >
        <b-popover
          target="popover-pdf4"
          variant="danger"
          triggers="hover"
          placement="bottom"
        >
          <template #title>
            <span>Pdf4</span>
          </template>
          <ol class="px-1">
            <li>Consecutiva</li>
            <li>Ret. Peg21</li>
            <li>Ret. Peg42</li>
            <li>Ret. Peg63</li>
            <li>Reingreso</li>
            <li>Incorporación</li>
            <li>Reincorporación</li>
            <li>Peg21</li>
            <li>Peg42</li>
            <li>Peg63</li>
            <li>Posible Reingreso</li>
            <li>Posible Reincorporación &lt;= S/. 25.00</li>
          </ol>
        </b-popover>
        <feather-icon
          icon="FileIcon"
          class="mr-50"
        />
        Pdf4
      </b-button>
      <b-button
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="repo_come_list_ases_exce()"
      >
        <feather-icon
          icon="DownloadIcon"
          class="mr-50"
        />
        Excel
      </b-button>
      <b-button
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="repo_come_list_ases_exce_tota()"
      >
        <feather-icon
          icon="DownloadIcon"
          class="mr-50"
        />
        Excel Total
      </b-button>
      <b-button
        variant="danger"
        class="ml-1"
        @click="repo_come_list_ases_limp()"
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
        <b-card>
          <JqxGrid
            ref="repo_come_list_ases_grid_glob"
            :width="'100%'"
            :height="250"
            :theme="'sami'"
            :enablehover="false"
            :columns="columnsGlobal"
            :source="dataAdapterGlobal"
            :columngroups="columnsGroupGlobal"
            :columnsresize="true"
            :sortable="true"
            :sortmode="'many'"
            :filterable="true"
            :altrows="false"
            :showemptyrow="false"
            :columnsreorder="true"
            :showstatusbar="true"
            :showaggregates="true"
            :groupable="true"
            :selectionmode="'singlecell'"
            :enablebrowserselection="true"
            :localization="localization"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
            :scrollmode="'logical'"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        xl="2"
        lg="2"
        md="2"
        sm="12"
        xs="12"
      >
        <b-card>
          <JqxListBox
            ref="repo_come_list_ases_list"
            :checkboxes="true"
            :theme="'sami'"
            :source="sourceLista"
            :width="'100%'"
            :height="400"
            @checkChange="repo_come_list_ases_list_chec($event)"
          />
        </b-card>
      </b-col>
      <b-col
        xl="10"
        lg="10"
        md="10"
        sm="12"
        xs="12"
      >
        <b-card>
          <JqxGrid
            ref="repo_come_list_ases_grid_deta"
            :width="'100%'"
            :height="400"
            :theme="'sami'"
            :enablehover="false"
            :columns="columnsDetalle"
            :source="dataAdapterDetalle"
            :columnsresize="true"
            :sortable="true"
            :sortmode="'many'"
            :filterable="true"
            :altrows="false"
            :showemptyrow="false"
            :columnsreorder="true"
            :groupable="true"
            :selectionmode="'singlecell'"
            :enablebrowserselection="true"
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
  VBPopover,
  BPopover,
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import selectCampanaZona from '@/views/components/FiltroCampanaZona.vue'
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue'
import JqxListBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

let sumaNumePediGlobal = 0
let sumaTotaIngrGlobal = 0
let sumaTotaReinGlobal = 0
let sumaActiInicGlobal = 0
let sumaRetePe21Global = 0
let sumaPosiEg21AnteGlobal = 0
let sumaRetePe42Global = 0
let sumaPosiEg42AnteGlobal = 0
let sumaRetePe63Global = 0
let sumaPosiEg63AnteGlobal = 0
let sumaTotaLineGlobal = 0
let sumaVentReceGlobal = 0
let sumaTotaFaltGlobal = 0
let sumaTotaPublGlobal = 0
let sumaTotaFactGlobal = 0
let sumaTotaReceGlobal = 0
let sumaTotaUnidGlobal = 0

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
    JqxListBox,
    BPopover,
  },
  directives: {
    'b-popover': VBPopover,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      // eslint-disable-next-line
      dataAdapterDetalle: new jqx.dataAdapter(this.sourceDetalle),
      dataCampana: [],
      seleccionCampana: [],
      dataZona: [],
      seleccionZona: [],
      columnsGroupGlobal: [
        {
          text: 'Venta Valor Catálogo',
          align: 'center',
          name: 'vent_cata',
        },
        {
          text: 'Venta Facturada',
          align: 'center',
          name: 'vent_fact',
        },
        {
          text: 'Faltante',
          align: 'center',
          name: 'falt',
        },
        {
          text: 'Venta Linea',
          align: 'center',
          name: 'vent_line',
        },
        {
          text: 'Venta Recepcionada',
          align: 'center',
          name: 'vent_rece',
        },
        {
          text: 'Unidades',
          align: 'center',
          name: 'unid',
        },
      ],
    }
  },
  beforeCreate() {
    this.sourceLista = [
      {
        label: 'Cumpleaños',
        value: 'fech_naci',
        checked: true,
      },
      {
        label: 'Distrito',
        value: 'nomb_barr',
        checked: true,
      },
      {
        label: 'Dirección',
        value: 'dire_terc',
        checked: true,
      },
      {
        label: 'Teléfono 1',
        value: 'tele_ter1',
        checked: true,
      },
      {
        label: 'Teléfono 2',
        value: 'tele_ter2',
        checked: true,
      },
      {
        label: 'Cupo',
        value: 'cupo_cred',
        checked: true,
      },
      {
        label: 'Saldo',
        value: 'sald_docu',
        checked: true,
      },
      {
        label: 'Camp. Ingr.',
        value: 'camp_ingr',
        checked: true,
      },
      {
        label: 'Ult. Camp1',
        value: 'codi_camp_1',
        checked: true,
      },
      {
        label: 'Ptos Azzo. Ult. Camp1',
        value: 'tota_publ_1',
        checked: true,
      },
      {
        label: 'Fact. Ult. Camp1',
        value: 'tota_fact_1',
        checked: true,
      },
      {
        label: 'Devo. Ult. Camp1',
        value: 'tota_devo_1',
        checked: true,
      },
      {
        label: 'Ult. Camp2',
        value: 'codi_camp_2',
        checked: true,
      },
      {
        label: 'Ptos Azzo. Ult. Camp2',
        value: 'tota_publ_2',
        checked: true,
      },
      {
        label: 'Fact. Ult. Camp2',
        value: 'tota_fact_2',
        checked: true,
      },
      {
        label: 'Devo. Ult. Camp2',
        value: 'tota_devo_2',
        checked: true,
      },
      {
        label: 'Ult. Camp3',
        value: 'codi_camp_3',
        checked: true,
      },
      {
        label: 'Ptos Azzo. Ult. Camp3',
        value: 'tota_publ_3',
        checked: true,
      },
      {
        label: 'Fact. Ult. Camp3',
        value: 'tota_fact_3',
        checked: true,
      },
      {
        label: 'Devo. Ult. Camp3',
        value: 'tota_devo_3',
        checked: true,
      },
      {
        label: 'Ult. Camp4',
        value: 'codi_camp_4',
        checked: true,
      },
      {
        label: 'Ptos Azzo. Ult. Camp4',
        value: 'tota_publ_4',
        checked: true,
      },
      {
        label: 'Fact. Ult. Camp4',
        value: 'tota_fact_4',
        checked: true,
      },
      {
        label: 'Devo. Ult. Camp4',
        value: 'tota_devo_4',
        checked: true,
      },
      {
        label: 'Estado Pedido',
        value: 'esta_pedi',
        checked: true,
      },
    ]
    this.sourceGlobal = {
      localdata: [],
      datafields: [
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'acti_inic', type: 'number' },
        { name: 'acti_fina', type: 'number' },
        { name: 'tota_ingr', type: 'number' },
        { name: 'tota_rein', type: 'number' },
        { name: 'tota_egre', type: 'number' },
        { name: 'posi_egre', type: 'number' },
        { name: 'nume_pedi', type: 'number' },
        { name: 'pedi_rete', type: 'number' },
        { name: 'tota_line', type: 'number' },
        { name: 'tota_fact', type: 'number' },
        { name: 'tota_falt', type: 'number' },
        { name: 'tota_pedi', type: 'number' },
        { name: 'posi_rein', type: 'number' },
        { name: 'tota_capi', type: 'number' },
        { name: 'posi_eg21', type: 'number' },
        { name: 'posi_eg42', type: 'number' },
        { name: 'porc_acti', type: 'number' },
        { name: 'tota_reco', type: 'number' },
        { name: 'rete_pe21', type: 'number' },
        { name: 'rete_pe42', type: 'number' },
        { name: 'rete_pe63', type: 'number' },
        { name: 'porc_re21', type: 'number' },
        { name: 'porc_re42', type: 'number' },
        { name: 'porc_re63', type: 'number' },
        { name: 'posi_eg21_ante', type: 'number' },
        { name: 'posi_eg42_ante', type: 'number' },
        { name: 'posi_egre_ante', type: 'number' },
        { name: 'vent_rece', type: 'number' },
        { name: 'porc_falt', type: 'number' },
        { name: 'tota_unid', type: 'number' },
        { name: 'tota_uppp', type: 'number' },
        { name: 'mont_unid', type: 'number' },
        { name: 'pppp_fact', type: 'number' },
        { name: 'vent_publ', type: 'number' },
        { name: 'pppp_publ', type: 'number' },
        { name: 'pppp_rece', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceDetalle = {
      localdata: [],
      datafields: [
        {
          name: 'esta_dire',
          type: 'string',
        },
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
          name: 'acti_inic',
          type: 'number',
        },
        {
          name: 'acti_fina',
          type: 'number',
        },
        {
          name: 'tota_ingr',
          type: 'number',
        },
        {
          name: 'tota_rein',
          type: 'number',
        },
        {
          name: 'tota_egre',
          type: 'number',
        },
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
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
    this.repo_come_list_ases_visi()
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
      let codiAreaGlob = ''
      let codiZonaGlob = ''
      let codiSectGlob = ''
      let actiInicGlob = ''
      let totaIngrGlob = ''
      let totaReinGlob = ''
      let totaRecoGlob = ''
      let totaEgreGlob = ''
      let actiFinaGlob = ''
      let posiReinGlob = ''
      let totaCapiGlob = ''
      let pediReteGlob = ''
      let porcActiGlob = ''
      let numePediGlob = ''
      let totaLineGlob = ''
      let totaFactGlob = ''
      let posiEg21Glob = ''
      let posiEg42Glob = ''
      let posiEg63Glob = ''
      let retePe21Glob = ''
      let porcRe21Glob = ''
      let retePe42Glob = ''
      let porcRe42Glob = ''
      let retePe63Glob = ''
      let porcRe63Glob = ''
      let totaPediGlob = ''
      let totaFaltGlob = ''
      let ventReceGlob = ''
      let porcFaltGlob = ''
      let pinned = true

      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiAreaGlob = '20'
          codiZonaGlob = '20'
          codiSectGlob = '20'
          actiInicGlob = '20'
          totaIngrGlob = '20'
          totaReinGlob = '20'
          totaRecoGlob = '20'
          totaEgreGlob = '20'
          actiFinaGlob = '20'
          posiReinGlob = '20'
          totaCapiGlob = '20'
          pediReteGlob = '20'
          porcActiGlob = '20'
          numePediGlob = '20'
          totaLineGlob = '20'
          totaFactGlob = '20'
          posiEg21Glob = '20'
          posiEg42Glob = '20'
          posiEg63Glob = '20'
          retePe21Glob = '20'
          porcRe21Glob = '20'
          retePe42Glob = '20'
          porcRe42Glob = '20'
          retePe63Glob = '20'
          porcRe63Glob = '20'
          totaPediGlob = '20'
          totaFaltGlob = '20'
          ventReceGlob = '20'
          porcFaltGlob = '20'
          pinned = false
          break
        case 'sm':
          codiAreaGlob = '20'
          codiZonaGlob = '20'
          codiSectGlob = '20'
          actiInicGlob = '20'
          totaIngrGlob = '20'
          totaReinGlob = '20'
          totaRecoGlob = '20'
          totaEgreGlob = '20'
          actiFinaGlob = '20'
          posiReinGlob = '20'
          totaCapiGlob = '20'
          pediReteGlob = '20'
          porcActiGlob = '20'
          numePediGlob = '20'
          totaLineGlob = '20'
          totaFactGlob = '20'
          posiEg21Glob = '20'
          posiEg42Glob = '20'
          posiEg63Glob = '20'
          retePe21Glob = '20'
          porcRe21Glob = '20'
          retePe42Glob = '20'
          porcRe42Glob = '20'
          retePe63Glob = '20'
          porcRe63Glob = '20'
          totaPediGlob = '20'
          totaFaltGlob = '20'
          ventReceGlob = '20'
          porcFaltGlob = '20'
          pinned = false
          break
        case 'md':
          codiAreaGlob = '15'
          codiZonaGlob = '15'
          codiSectGlob = '15'
          actiInicGlob = '15'
          totaIngrGlob = '15'
          totaReinGlob = '15'
          totaRecoGlob = '15'
          totaEgreGlob = '15'
          actiFinaGlob = '15'
          posiReinGlob = '15'
          totaCapiGlob = '15'
          pediReteGlob = '15'
          porcActiGlob = '15'
          numePediGlob = '15'
          totaLineGlob = '15'
          totaFactGlob = '15'
          posiEg21Glob = '15'
          posiEg42Glob = '15'
          posiEg63Glob = '15'
          retePe21Glob = '15'
          porcRe21Glob = '15'
          retePe42Glob = '15'
          porcRe42Glob = '15'
          retePe63Glob = '15'
          porcRe63Glob = '15'
          totaPediGlob = '15'
          totaFaltGlob = '15'
          ventReceGlob = '15'
          porcFaltGlob = '15'
          pinned = false
          break
        default:
          codiAreaGlob = '6'
          codiZonaGlob = '6'
          codiSectGlob = '6'
          actiInicGlob = '6'
          totaIngrGlob = '6'
          totaReinGlob = '6'
          totaRecoGlob = '6'
          totaEgreGlob = '6'
          actiFinaGlob = '6'
          posiReinGlob = '6'
          totaCapiGlob = '6'
          pediReteGlob = '6'
          porcActiGlob = '6'
          numePediGlob = '6'
          totaLineGlob = '6'
          totaFactGlob = '6'
          posiEg21Glob = '6'
          posiEg42Glob = '6'
          posiEg63Glob = '6'
          retePe21Glob = '6'
          porcRe21Glob = '6'
          retePe42Glob = '6'
          porcRe42Glob = '6'
          retePe63Glob = '6'
          porcRe63Glob = '6'
          totaPediGlob = '6'
          totaFaltGlob = '6'
          ventReceGlob = '6'
          porcFaltGlob = '6'
          pinned = true
          break
      }
      this.columnsGlobal = [
        {
          text: 'Región',
          dataField: 'codi_area',
          width: `${codiAreaGlob}%`,
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: `${codiZonaGlob}%`,
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Sector',
          dataField: 'codi_sect',
          width: `${codiSectGlob}%`,
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Act. Inic.',
          dataField: 'acti_inic',
          width: `${actiInicGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Ingr.',
          dataField: 'tota_ingr',
          width: `${totaIngrGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Reing.',
          dataField: 'tota_rein',
          width: `${totaReinGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Reco.',
          dataField: 'tota_reco',
          width: `${totaRecoGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Egre.',
          dataField: 'tota_egre',
          width: `${totaEgreGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Act. Fin.',
          dataField: 'acti_fina',
          width: `${actiFinaGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Posi. Rein.',
          dataField: 'posi_rein',
          width: `${posiReinGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Capi.',
          dataField: 'tota_capi',
          width: `${totaCapiGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Pedi. Reten.',
          dataField: 'pedi_rete',
          width: `${pediReteGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: '% Acti.',
          dataField: 'porc_acti',
          width: `${porcActiGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaNumePediGlobal = 0
                  sumaTotaIngrGlobal = 0
                  sumaTotaReinGlobal = 0
                  sumaActiInicGlobal = 0
                }
                // eslint-disable-next-line
                sumaNumePediGlobal = sumaNumePediGlobal + record['nume_pedi']
                // eslint-disable-next-line
                sumaTotaIngrGlobal = sumaTotaIngrGlobal + record['tota_ingr']
                // eslint-disable-next-line
                sumaTotaReinGlobal = sumaTotaReinGlobal + record['tota_rein']
                // eslint-disable-next-line
                sumaActiInicGlobal = sumaActiInicGlobal + record['acti_inic']
                let sumaGlobal = 0
                // eslint-disable-next-line
                if (parseInt(sumaNumePediGlobal) - parseInt(sumaTotaIngrGlobal) - parseInt(sumaTotaReinGlobal) > 0 && parseInt(sumaActiInicGlobal) > 0) {
                  // eslint-disable-next-line
                  sumaGlobal = 100 * ((parseInt(sumaNumePediGlobal) - parseInt(sumaTotaIngrGlobal) - parseInt(sumaTotaReinGlobal)) / parseInt(sumaActiInicGlobal))
                }
                sumaGlobal = parseFloat(sumaGlobal).toFixed(2)
                return sumaGlobal
              },
            },
          ],
        },
        {
          text: 'Pedi. Total',
          dataField: 'nume_pedi',
          width: `${numePediGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Vta. Publ.',
          dataField: 'vent_publ',
          width: `${totaFactGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          columngroup: 'vent_cata',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'PPP Publ.',
          dataField: 'pppp_publ',
          width: `${totaPediGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          columngroup: 'vent_cata',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaNumePediGlobal = 0
                  sumaTotaPublGlobal = 0
                }
                // eslint-disable-next-line
                sumaNumePediGlobal = sumaNumePediGlobal + record['nume_pedi']
                // eslint-disable-next-line
                sumaTotaPublGlobal = sumaTotaPublGlobal + record['vent_publ']
                let sumaGlobal = 0
                // eslint-disable-next-line
                if (parseInt(sumaNumePediGlobal) > 0 && parseInt(sumaTotaPublGlobal) > 0) {
                  // eslint-disable-next-line
                  sumaGlobal = parseFloat(sumaTotaPublGlobal) / parseInt(sumaNumePediGlobal)
                }
                sumaGlobal = parseFloat(sumaGlobal).toFixed(2)
                return sumaGlobal
              },
            },
          ],
        },
        {
          text: 'Vta. Fact.',
          dataField: 'tota_fact',
          width: `${totaFactGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          columngroup: 'vent_fact',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'PPP Fact.',
          dataField: 'pppp_fact',
          width: `${totaPediGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          columngroup: 'vent_fact',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaNumePediGlobal = 0
                  sumaTotaFactGlobal = 0
                }
                // eslint-disable-next-line
                sumaNumePediGlobal = sumaNumePediGlobal + record['nume_pedi']
                // eslint-disable-next-line
                sumaTotaFactGlobal = sumaTotaFactGlobal + record['tota_fact']
                let sumaGlobal = 0
                // eslint-disable-next-line
                if (parseInt(sumaNumePediGlobal) > 0 && parseInt(sumaTotaFactGlobal) > 0) {
                  // eslint-disable-next-line
                  sumaGlobal = parseFloat(sumaTotaFactGlobal) / parseInt(sumaNumePediGlobal)
                }
                sumaGlobal = parseFloat(sumaGlobal).toFixed(2)
                return sumaGlobal
              },
            },
          ],
        },
        {
          text: 'Faltante',
          dataField: 'tota_falt',
          width: `${totaFaltGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          columngroup: 'falt',
          aggregates: [
            {
              // eslint-disable-next-line
              'T' : function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: '% Faltante',
          dataField: 'porc_falt',
          width: `${porcFaltGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          columngroup: 'falt',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaTotaFaltGlobal = 0
                  sumaVentReceGlobal = 0
                }
                // eslint-disable-next-line
                sumaTotaFaltGlobal = sumaTotaFaltGlobal + record['tota_falt']
                // eslint-disable-next-line
                sumaVentReceGlobal = sumaVentReceGlobal + record['vent_rece']
                let sumaGlobal = 0
                // eslint-disable-next-line
                if (parseInt(sumaTotaFaltGlobal) > 0 && parseInt(sumaVentReceGlobal) > 0) {
                  // eslint-disable-next-line
                  sumaGlobal = 100 * (parseFloat(sumaTotaFaltGlobal) / parseFloat(sumaVentReceGlobal))
                }
                sumaGlobal = parseFloat(sumaGlobal).toFixed(2)
                return sumaGlobal
              },
            },
          ],
        },
        {
          text: 'Vta. Linea',
          dataField: 'tota_line',
          width: `${totaLineGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          columngroup: 'vent_line',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'PPP Linea',
          dataField: 'tota_pedi',
          width: `${totaPediGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          columngroup: 'vent_line',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaNumePediGlobal = 0
                  sumaTotaLineGlobal = 0
                }
                // eslint-disable-next-line
                sumaNumePediGlobal = sumaNumePediGlobal + record['nume_pedi']
                // eslint-disable-next-line
                sumaTotaLineGlobal = sumaTotaLineGlobal + record['tota_line']
                let sumaGlobal = 0
                // eslint-disable-next-line
                if (parseInt(sumaNumePediGlobal) > 0 && parseInt(sumaTotaLineGlobal) > 0) {
                  // eslint-disable-next-line
                  sumaGlobal = parseFloat(sumaTotaLineGlobal) / parseInt(sumaNumePediGlobal)
                }
                sumaGlobal = parseFloat(sumaGlobal).toFixed(2)
                return sumaGlobal
              },
            },
          ],
        },
        {
          text: 'Vta. Rece.',
          dataField: 'vent_rece',
          width: `${ventReceGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          columngroup: 'vent_rece',
          aggregates: [
            {
              // eslint-disable-next-line
              'T' : function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'PPP Rece.',
          dataField: 'pppp_rece',
          width: `${totaPediGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          columngroup: 'vent_rece',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaNumePediGlobal = 0
                  sumaTotaReceGlobal = 0
                }
                // eslint-disable-next-line
                sumaNumePediGlobal = sumaNumePediGlobal + record['nume_pedi']
                // eslint-disable-next-line
                sumaTotaReceGlobal = sumaTotaReceGlobal + record['vent_rece']
                let sumaGlobal = 0
                // eslint-disable-next-line
                if (parseInt(sumaNumePediGlobal) > 0 && parseInt(sumaTotaReceGlobal) > 0) {
                  // eslint-disable-next-line
                  sumaGlobal = parseFloat(sumaTotaReceGlobal) / parseInt(sumaNumePediGlobal)
                }
                sumaGlobal = parseFloat(sumaGlobal).toFixed(2)
                return sumaGlobal
              },
            },
          ],
        },
        {
          text: 'Unid',
          dataField: 'tota_unid',
          width: `${totaLineGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          columngroup: 'unid',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'UPP',
          dataField: 'tota_uppp',
          width: `${totaLineGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          columngroup: 'unid',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                  if (record['uid'] === 0) {
                  sumaNumePediGlobal = 0
                  sumaTotaUnidGlobal = 0
                }
                // eslint-disable-next-line
                  sumaNumePediGlobal = sumaNumePediGlobal + record['nume_pedi']
                // eslint-disable-next-line
                  sumaTotaUnidGlobal = sumaTotaUnidGlobal + record['tota_unid']
                let sumaGlobal = 0
                // eslint-disable-next-line
                  if (parseInt(sumaNumePediGlobal) > 0 && parseInt(sumaTotaUnidGlobal) > 0) {
                  // eslint-disable-next-line
                    sumaGlobal = parseInt(sumaTotaUnidGlobal) / parseInt(sumaNumePediGlobal)
                }
                sumaGlobal = parseFloat(sumaGlobal).toFixed(2)
                return sumaGlobal
              },
            },
          ],
        },
        {
          text: 'S/. Unid',
          dataField: 'mont_unid',
          width: `${totaLineGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          columngroup: 'unid',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Peg21',
          dataField: 'posi_eg21',
          width: `${posiEg21Glob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Peg42',
          dataField: 'posi_eg42',
          width: `${posiEg42Glob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Peg63',
          dataField: 'posi_egre',
          width: `${posiEg63Glob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Ret. Peg21',
          dataField: 'rete_pe21',
          width: `${retePe21Glob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Peg21 Ante',
          dataField: 'posi_eg21_ante',
          cellsformat: 'N',
          hidden: true,
        },
        {
          text: '% Ret. Peg21',
          dataField: 'porc_re21',
          width: `${porcRe21Glob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] == 0) {
                  sumaRetePe21Global = 0
                  sumaPosiEg21AnteGlobal = 0
                }
                // eslint-disable-next-line
                sumaRetePe21Global = sumaRetePe21Global + record['rete_pe21']
                // eslint-disable-next-line
                sumaPosiEg21AnteGlobal = sumaPosiEg21AnteGlobal + record['posi_eg21_ante']
                let sumaGlobal = 0
                // eslint-disable-next-line
                if (parseInt(sumaRetePe21Global) > 0 && parseInt(sumaPosiEg21AnteGlobal) > 0) {
                  // eslint-disable-next-line
                  sumaGlobal = 100 * (parseInt(sumaRetePe21Global) / parseInt(sumaPosiEg21AnteGlobal))
                }
                sumaGlobal = parseFloat(sumaGlobal).toFixed(2)
                return sumaGlobal
              },
            },
          ],
        },
        {
          text: 'Ret. Peg42',
          dataField: 'rete_pe42',
          width: `${retePe42Glob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Peg42 Ante.',
          dataField: 'posi_eg42_ante',
          cellsformat: 'N',
          hidden: true,
        },
        {
          text: '% Ret. Peg42',
          dataField: 'porc_re42',
          width: `${porcRe42Glob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaRetePe42Global = 0
                  sumaPosiEg42AnteGlobal = 0
                }
                // eslint-disable-next-line
                sumaRetePe42Global = sumaRetePe42Global + record['rete_pe42']
                // eslint-disable-next-line
                sumaPosiEg42AnteGlobal = sumaPosiEg42AnteGlobal + record['posi_eg42_ante']
                let sumaGlobal = 0
                // eslint-disable-next-line
                if (parseInt(sumaRetePe42Global) > 0 && parseInt(sumaPosiEg42AnteGlobal) > 0) {
                  // eslint-disable-next-line
                  sumaGlobal = 100 * (parseInt(sumaRetePe42Global) / parseInt(sumaPosiEg42AnteGlobal))
                }
                sumaGlobal = parseFloat(sumaGlobal).toFixed(2)
                return sumaGlobal
              },
            },
          ],
        },
        {
          text: 'Ret. Peg63',
          dataField: 'rete_pe63',
          width: `${retePe63Glob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Peg63 Ante.',
          dataField: 'posi_egre_ante',
          cellsformat: 'N',
          hidden: true,
        },
        {
          text: '% Ret. Peg63',
          dataField: 'porc_re63',
          width: `${porcRe63Glob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaRetePe63Global = 0
                  sumaPosiEg63AnteGlobal = 0
                }
                // eslint-disable-next-line
                sumaRetePe63Global = sumaRetePe63Global + record['rete_pe63']
                // eslint-disable-next-line
                sumaPosiEg63AnteGlobal = sumaPosiEg63AnteGlobal + record['posi_egre_ante']
                let sumaGlobal = 0
                // eslint-disable-next-line
                if (parseInt(sumaRetePe63Global) > 0 && parseInt(sumaPosiEg63AnteGlobal) > 0) {
                  // eslint-disable-next-line
                  sumaGlobal = 100 * (parseInt(sumaRetePe63Global) / parseInt(sumaPosiEg63AnteGlobal))
                }
                sumaGlobal = parseFloat(sumaGlobal).toFixed(2)
                return sumaGlobal
              },
            },
          ],
        },
      ]
      this.columnsDetalle = [
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
          text: 'esta dire',
          dataField: 'esta_dire',
          hidden: true,
        },
        {
          text: 'Dirección',
          dataField: 'dire_terc',
          width: '400',
          align: 'center',
          cellsalign: 'left',
          cellclassname: this.repo_come_list_ases_dire_clas,
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
          width: '90',
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
          cellclassname: 'text-black bg-celeste',
        },
        {
          text: 'Ptos Azzo. Ult. Camp3',
          dataField: 'tota_publ_3',
          width: '159',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-celeste',
        },
        {
          text: 'Fact. Ult. Camp3',
          dataField: 'tota_fact_3',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          cellclassname: 'text-black bg-celeste',
        },
        {
          text: 'Devo. Ult. Camp3',
          dataField: 'tota_devo_3',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          cellclassname: 'text-black bg-celeste',
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
      if (typeof this.$refs.repo_come_list_ases_grid_glob !== 'undefined') {
        this.$refs.repo_come_list_ases_grid_glob.columns = this.columnsGlobal
        this.$refs.repo_come_list_ases_grid_deta.columns = this.columnsDetalle
      }
    },
    setCampana(value) {
      this.seleccionCampana = value
    },
    setZona(value) {
      this.seleccionZona = value
    },
    repo_come_list_ases_limp() {
      this.$refs.repo_come_list_ases_grid_glob.clear()
      this.$refs.repo_come_list_ases_grid_deta.clear()
    },
    async repo_come_list_ases_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_list_ases',
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
    async repo_come_list_ases_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_list_ases_limp()
      if (this.seleccionCampana == null || this.seleccionCampana.length === 0) {
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
      } else if (this.seleccionZona == null || this.seleccionZona.length === 0) {
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
          let campActu = 0
          const itemMainCampana = JSON.parse(localStorage.getItem('mainCampana'))
          if (itemMainCampana.camp_actu.length > 0) {
            campActu = itemMainCampana.camp_actu[0].codi_camp
          }
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_list_ases/list_ases_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              camp_actu: campActu,
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_zona: this.seleccionZona,
              codi_camp: this.seleccionCampana,
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_list_ases_grid_glob.updatebounddata('cells')
          this.sourceDetalle.localdata = await servicio.data.data_deta
          this.sourceDetalle.datatype = 'json'
          this.$refs.repo_come_list_ases_grid_deta.updatebounddata('cells')
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
    async repo_come_list_ases_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_list_ases_grid_glob.getdatainformation()
      const dataRowsGlob = dataInfoGlob.rowscount
      const dataInfoDeta = this.$refs.repo_come_list_ases_grid_deta.getdatainformation()
      const dataRowsDeta = dataInfoDeta.rowscount
      if (dataRowsGlob === 0 || dataRowsDeta === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'No tiene información para exportar a excel.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_list_ases/list_ases_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_list_ases_grid_glob.exportdata('json', null, true, null, true),
              data_deta: this.$refs.repo_come_list_ases_grid_deta.exportdata('json', null, true, null, true),
              data_esta: this.$refs.repo_come_list_ases_grid_deta.getstate(),
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
    async repo_come_list_ases_exce_tota() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_list_ases_grid_glob.getdatainformation()
      const dataRowsGlob = dataInfoGlob.rowscount
      const dataInfoDeta = this.$refs.repo_come_list_ases_grid_deta.getdatainformation()
      const dataRowsDeta = dataInfoDeta.rowscount
      if (dataRowsGlob === 0 || dataRowsDeta === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'No tiene información para exportar a excel.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_list_ases/list_ases_exce_tota`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_list_ases_grid_glob.exportdata('json', null, true, null, true),
              data_deta: this.$refs.repo_come_list_ases_grid_deta.exportdata('json', null, true, null, true),
              data_esta: this.$refs.repo_come_list_ases_grid_deta.getstate(),
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
    repo_come_list_ases_list_chec(event) {
      this.$refs.repo_come_list_ases_grid_deta.beginupdate()
      if (event.args.checked) {
        this.$refs.repo_come_list_ases_grid_deta.showcolumn(event.args.value)
      } else {
        this.$refs.repo_come_list_ases_grid_deta.hidecolumn(event.args.value)
      }
      this.$refs.repo_come_list_ases_grid_deta.endupdate()
    },
    async repo_come_list_ases_pdf1() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_list_ases_grid_glob.getdatainformation()
      const dataRowsGlob = dataInfoGlob.rowscount
      const dataInfoDeta = this.$refs.repo_come_list_ases_grid_deta.getdatainformation()
      const dataRowsDeta = dataInfoDeta.rowscount
      if (dataRowsGlob === 0 || dataRowsDeta === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'No tiene información para generar pdf.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_list_ases/list_ases_pdff`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_list_ases_grid_glob.exportdata('json', null, true, null, true),
              data_deta: this.$refs.repo_come_list_ases_grid_deta.exportdata('json', null, true, null, true),
              data_esta: this.$refs.repo_come_list_ases_grid_deta.getstate(),
              tipo_data: '1',
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
    async repo_come_list_ases_pdf2() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_list_ases_grid_glob.getdatainformation()
      const dataRowsGlob = dataInfoGlob.rowscount
      const dataInfoDeta = this.$refs.repo_come_list_ases_grid_deta.getdatainformation()
      const dataRowsDeta = dataInfoDeta.rowscount
      if (dataRowsGlob === 0 || dataRowsDeta === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'No tiene información para generar pdf.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_list_ases/list_ases_pdff`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_list_ases_grid_glob.exportdata('json', null, true, null, true),
              data_deta: this.$refs.repo_come_list_ases_grid_deta.exportdata('json', null, true, null, true),
              data_esta: this.$refs.repo_come_list_ases_grid_deta.getstate(),
              tipo_data: '2',
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
    async repo_come_list_ases_pdf3() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_list_ases_grid_glob.getdatainformation()
      const dataRowsGlob = dataInfoGlob.rowscount
      const dataInfoDeta = this.$refs.repo_come_list_ases_grid_deta.getdatainformation()
      const dataRowsDeta = dataInfoDeta.rowscount
      if (dataRowsGlob === 0 || dataRowsDeta === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'No tiene información para generar pdf',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_list_ases/list_ases_pdff`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_list_ases_grid_glob.exportdata('json', null, true, null, true),
              data_deta: this.$refs.repo_come_list_ases_grid_deta.exportdata('json', null, true, null, true),
              data_esta: this.$refs.repo_come_list_ases_grid_deta.getstate(),
              tipo_data: '3',
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
    async repo_come_list_ases_pdf4() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_list_ases_grid_glob.getdatainformation()
      const dataRowsGlob = dataInfoGlob.rowscount
      const dataInfoDeta = this.$refs.repo_come_list_ases_grid_deta.getdatainformation()
      const dataRowsDeta = dataInfoDeta.rowscount
      if (dataRowsGlob === 0 || dataRowsDeta === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'No tiene información para generar pdf.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_list_ases/list_ases_pdff`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_list_ases_grid_glob.exportdata('json', null, true, null, true),
              data_deta: this.$refs.repo_come_list_ases_grid_deta.exportdata('json', null, true, null, true),
              data_esta: this.$refs.repo_come_list_ases_grid_deta.getstate(),
              tipo_data: '4',
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
    repo_come_list_ases_dire_clas(row) {
      const dataRecord = this.$refs.repo_come_list_ases_grid_deta.getrowdata(row)
      const estadoDireccion = dataRecord.esta_dire
      if (estadoDireccion === 'R') {
        return 'text-white bg-danger'
      }
      return ''
    },
  },
}

</script>
<style lang='scss'>

</style>
