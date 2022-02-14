<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_segu_cier_camp_gene()"
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
        @click="repo_come_segu_cier_camp_limp()"
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
        @click="repo_come_segu_cier_camp_gene()"
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
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="repo_come_segu_cier_camp_exce()"
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
        @click="repo_come_segu_cier_camp_limp()"
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
              cols="2"
              class="text-center"
            >
              <span class="font-weight-bolder">Concepto</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-bolder">Obj. Zona</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-bolder">Facturado</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-bolder">% Cumplimiento</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-bolder">Fact. + Pend.</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-bolder">% Cump. Total</span>
            </b-col>
          </b-row>
          <b-row class="mt-1">
            <b-col cols="2">
              <span class="font-weight-normal">Objetivo Incorporación</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ objetivoIncorporacion }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ totalFacturadoIncorporacion }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ cumplimientoFacturadoIncorporacion }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ totalPendienteFacturadoIncorporacion }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ cumplimientoPendienteFacturadoIncorporacion }}</span>
            </b-col>
          </b-row>
          <b-row class="mt-1">
            <b-col cols="2">
              <span class="font-weight-normal">Objetivo Retención</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ objetivoRetencion }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ totalFacturadoRetencion }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ cumplimientoFacturadoRetencion }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ totalPendienteFacturadoRetencion }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ cumplimientoPendienteFacturadoRetencion }}</span>
            </b-col>
          </b-row>
          <b-row class="mt-1">
            <b-col cols="2">
              <span class="font-weight-normal">Objetivo % Actividad</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ objetivoActividad }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ totalFacturadoActividad }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ cumplimientoFacturadoActividad }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ totalPendienteFacturadoActividad }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{ cumplimientoPendienteFacturadoActividad }}</span>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card title="Variables">
          <div class="demo-inline-spacing">
            <b-form-radio
              v-model="variable"
              name="variable"
              value="0"
              class="custom-control-primary"
              @change="onChangeVariable()"
            >
              Todos
            </b-form-radio>
            <b-form-radio
              v-model="variable"
              name="variable"
              value="1"
              class="custom-control-primary"
              @change="onChangeVariable()"
            >
              Pedidos Totales
            </b-form-radio>
            <b-form-radio
              v-model="variable"
              name="variable"
              value="2"
              class="custom-control-primary"
              @change="onChangeVariable()"
            >
              Pedidos de Actividad
            </b-form-radio>
            <b-form-radio
              v-model="variable"
              name="variable"
              value="3"
              class="custom-control-primary"
              @change="onChangeVariable()"
            >
              Pedidos de Retención
            </b-form-radio>
            <b-form-radio
              v-model="variable"
              name="variable"
              value="4"
              class="custom-control-primary"
              @change="onChangeVariable()"
            >
              Capitalización
            </b-form-radio>
            <b-form-radio
              v-model="variable"
              name="variable"
              value="5"
              class="custom-control-primary"
              @change="onChangeVariable()"
            >
              Cobranza
            </b-form-radio>
            <b-form-radio
              v-model="variable"
              name="variable"
              value="6"
              class="custom-control-primary"
              @change="onChangeVariable()"
            >
              Consecutividad
            </b-form-radio>
            <b-form-radio
              v-model="variable"
              name="variable"
              value="7"
              class="custom-control-primary"
              @change="onChangeVariable()"
            >
              Macro variable
            </b-form-radio>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_segu_cier_camp_grid_glob"
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
  </section>
</template>
<script>
import {
  BRow, BCol, BButton, BCard, BFormRadio,
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import selectCampanaZona from '@/views/components/FiltroCampanaZona.vue'
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

let sumaActiInic = 0
let sumaNumePedi = 0
let sumaTotaIngr = 0
let sumaTotaRein = 0
let sumaFact = 0
let sumaObje = 0

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
    BFormRadio,
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
          text: 'Pedidos Totales',
          align: 'center',
          name: 'tota',
        },
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
          text: 'Consecutividad Pedidos de Retención 90%',
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
          text: 'Suma de Pegs 35%',
          align: 'center',
          name: 'suma',
        },
        {
          text: 'Reingresos 10%',
          align: 'center',
          name: 'rein',
        },
        {
          text: 'Capitalización',
          align: 'center',
          name: 'capi',
        },
        {
          text: 'Cobranza',
          align: 'center',
          name: 'cobr',
        },
        {
          text: 'Ppp',
          align: 'center',
          name: 'pppp',
        },
        {
          text: 'Productividad Retención Lider',
          align: 'center',
          name: 'lide',
        },
      ],
      variable: '0',
      codigoCampana: '0',
      codigoZona: '0',
      objetivoIncorporacion: '0',
      totalFacturadoIncorporacion: '0',
      cumplimientoFacturadoIncorporacion: '0.00',
      totalPendienteFacturadoIncorporacion: '0',
      cumplimientoPendienteFacturadoIncorporacion: '0.00',
      objetivoRetencion: '0',
      totalFacturadoRetencion: '0',
      cumplimientoFacturadoRetencion: '0.00',
      totalPendienteFacturadoRetencion: '0',
      cumplimientoPendienteFacturadoRetencion: '0.00',
      objetivoActividad: '0.00',
      totalFacturadoActividad: '0.00',
      cumplimientoFacturadoActividad: '0.00',
      totalPendienteFacturadoActividad: '0.00',
      cumplimientoPendienteFacturadoActividad: '0.00',
    }
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
        { name: 'codi_sect', type: 'string' },
        { name: 'nomb_lide', type: 'string' },
        { name: 'acti_fina_ante', type: 'number' },
        { name: 'obje_tota', type: 'number' },
        { name: 'fact_tota', type: 'number' },
        { name: 'cump_fact_tota', type: 'number' },
        { name: 'pend_fact_tota', type: 'number' },
        { name: 'tota_tota', type: 'number' },
        { name: 'cump_tota', type: 'number' },
        { name: 'dife_tota', type: 'number' },
        { name: 'obje_tota_ocul', type: 'number' },
        { name: 'fact_tota_ocul', type: 'number' },
        { name: 'cump_fact_tota_ocul', type: 'number' },
        { name: 'pend_fact_tota_ocul', type: 'number' },
        { name: 'tota_tota_ocul', type: 'number' },
        { name: 'cump_tota_ocul', type: 'number' },
        { name: 'obje_inco', type: 'number' },
        { name: 'fact_inco', type: 'number' },
        { name: 'cump_fact_inco', type: 'number' },
        { name: 'pend_fact_inco', type: 'number' },
        { name: 'tota_inco', type: 'number' },
        { name: 'cump_inco', type: 'number' },
        { name: 'obje_inco_ocul', type: 'number' },
        { name: 'fact_inco_ocul', type: 'number' },
        { name: 'cump_fact_inco_ocul', type: 'number' },
        { name: 'pend_fact_inco_ocul', type: 'number' },
        { name: 'tota_inco_ocul', type: 'number' },
        { name: 'cump_inco_ocul', type: 'number' },
        { name: 'obje_rete', type: 'number' },
        { name: 'fact_rete', type: 'number' },
        { name: 'cump_fact_rete', type: 'number' },
        { name: 'pend_fact_rete', type: 'number' },
        { name: 'tota_rete', type: 'number' },
        { name: 'cump_rete', type: 'number' },
        { name: 'dife_rete', type: 'number' },
        { name: 'obje_rete_ocul', type: 'number' },
        { name: 'fact_rete_ocul', type: 'number' },
        { name: 'cump_fact_rete_ocul', type: 'number' },
        { name: 'pend_fact_rete_ocul', type: 'number' },
        { name: 'tota_rete_ocul', type: 'number' },
        { name: 'cump_rete_ocul', type: 'number' },
        { name: 'fact_rete_cons_ante', type: 'number' },
        { name: 'obje_rete_cons', type: 'number' },
        { name: 'fact_rete_cons', type: 'number' },
        { name: 'cump_fact_rete_cons', type: 'number' },
        { name: 'pend_fact_rete_cons', type: 'number' },
        { name: 'tota_rete_cons', type: 'number' },
        { name: 'cump_rete_cons', type: 'number' },
        { name: 'fact_rete_cons_ante_ocul', type: 'number' },
        { name: 'obje_rete_cons_ocul', type: 'number' },
        { name: 'obje_rete_cons_sist_ocul', type: 'number' },
        { name: 'fact_rete_cons_ocul', type: 'number' },
        { name: 'cump_fact_rete_cons_ocul', type: 'number' },
        { name: 'pend_fact_rete_cons_ocul', type: 'number' },
        { name: 'tota_rete_cons_ocul', type: 'number' },
        { name: 'cump_rete_cons_ocul', type: 'number' },
        { name: 'obje_rete_cons_segu', type: 'number' },
        { name: 'fact_rete_cons_segu', type: 'number' },
        { name: 'cump_fact_rete_cons_segu', type: 'number' },
        { name: 'pend_fact_rete_cons_segu', type: 'number' },
        { name: 'tota_rete_cons_segu', type: 'number' },
        { name: 'cump_rete_cons_segu', type: 'number' },
        { name: 'obje_rete_cons_segu_ocul', type: 'number' },
        { name: 'fact_rete_cons_segu_ocul', type: 'number' },
        { name: 'cump_fact_rete_cons_segu_ocul', type: 'number' },
        { name: 'pend_fact_rete_cons_segu_ocul', type: 'number' },
        { name: 'tota_rete_cons_segu_ocul', type: 'number' },
        { name: 'cump_rete_cons_segu_ocul', type: 'number' },
        { name: 'obje_rete_cons_terc', type: 'number' },
        { name: 'fact_rete_cons_terc', type: 'number' },
        { name: 'cump_fact_rete_cons_terc', type: 'number' },
        { name: 'pend_fact_rete_cons_terc', type: 'number' },
        { name: 'tota_rete_cons_terc', type: 'number' },
        { name: 'cump_rete_cons_terc', type: 'number' },
        { name: 'obje_rete_cons_terc_ocul', type: 'number' },
        { name: 'fact_rete_cons_terc_ocul', type: 'number' },
        { name: 'cump_fact_rete_cons_terc_ocul', type: 'number' },
        { name: 'pend_fact_rete_cons_terc_ocul', type: 'number' },
        { name: 'tota_rete_cons_terc_ocul', type: 'number' },
        { name: 'cump_rete_cons_terc_ocul', type: 'number' },
        { name: 'obje_rete_cons_cuar', type: 'number' },
        { name: 'fact_rete_cons_cuar', type: 'number' },
        { name: 'cump_fact_rete_cons_cuar', type: 'number' },
        { name: 'pend_fact_rete_cons_cuar', type: 'number' },
        { name: 'tota_rete_cons_cuar', type: 'number' },
        { name: 'cump_rete_cons_cuar', type: 'number' },
        { name: 'obje_rete_cons_cuar_ocul', type: 'number' },
        { name: 'fact_rete_cons_cuar_ocul', type: 'number' },
        { name: 'cump_fact_rete_cons_cuar_ocul', type: 'number' },
        { name: 'pend_fact_rete_cons_cuar_ocul', type: 'number' },
        { name: 'tota_rete_cons_cuar_ocul', type: 'number' },
        { name: 'cump_rete_cons_cuar_ocul', type: 'number' },
        { name: 'nume_pedi_pend', type: 'number' },
        { name: 'nume_pedi', type: 'number' },
        { name: 'tota_ingr', type: 'number' },
        { name: 'tota_rein', type: 'number' },
        { name: 'acti_inic', type: 'number' },
        { name: 'tota_ingr_pend', type: 'number' },
        { name: 'tota_rein_pend', type: 'number' },
        { name: 'nume_acti', type: 'number' },
        { name: 'obje_acti', type: 'number' },
        { name: 'porc_acti', type: 'number' },
        { name: 'nume_pedi_acti', type: 'number' },
        { name: 'porc_acti_pend', type: 'number' },
        { name: 'obje_acti_ocul', type: 'number' },
        { name: 'fact_pe21_ante', type: 'number' },
        { name: 'obje_pe21', type: 'number' },
        { name: 'fact_pe21', type: 'number' },
        { name: 'porc_pe21', type: 'number' },
        { name: 'pend_fact_pe21', type: 'number' },
        { name: 'tota_pe21', type: 'number' },
        { name: 'cump_pe21', type: 'number' },
        { name: 'fact_pe21_ante_ocul', type: 'number' },
        { name: 'obje_pe21_ocul', type: 'number' },
        { name: 'obje_pe21_sist_ocul', type: 'number' },
        { name: 'fact_pe21_ocul', type: 'number' },
        { name: 'porc_pe21_ocul', type: 'number' },
        { name: 'pend_fact_pe21_ocul', type: 'number' },
        { name: 'tota_pe21_ocul', type: 'number' },
        { name: 'cump_pe21_ocul', type: 'number' },
        { name: 'fact_pe42_ante', type: 'number' },
        { name: 'obje_pe42', type: 'number' },
        { name: 'fact_pe42', type: 'number' },
        { name: 'porc_pe42', type: 'number' },
        { name: 'pend_fact_pe42', type: 'number' },
        { name: 'tota_pe42', type: 'number' },
        { name: 'cump_pe42', type: 'number' },
        { name: 'fact_pe42_ante_ocul', type: 'number' },
        { name: 'obje_pe42_ocul', type: 'number' },
        { name: 'obje_pe42_sist_ocul', type: 'number' },
        { name: 'fact_pe42_ocul', type: 'number' },
        { name: 'porc_pe42_ocul', type: 'number' },
        { name: 'pend_fact_pe42_ocul', type: 'number' },
        { name: 'tota_pe42_ocul', type: 'number' },
        { name: 'cump_pe42_ocul', type: 'number' },
        { name: 'fact_pe63_ante', type: 'number' },
        { name: 'obje_pe63', type: 'number' },
        { name: 'fact_pe63', type: 'number' },
        { name: 'porc_pe63', type: 'number' },
        { name: 'pend_fact_pe63', type: 'number' },
        { name: 'tota_pe63', type: 'number' },
        { name: 'cump_pe63', type: 'number' },
        { name: 'fact_pe63_ante_ocul', type: 'number' },
        { name: 'obje_pe63_ocul', type: 'number' },
        { name: 'obje_pe63_sist_ocul', type: 'number' },
        { name: 'fact_pe63_ocul', type: 'number' },
        { name: 'porc_pe63_ocul', type: 'number' },
        { name: 'pend_fact_pe63_ocul', type: 'number' },
        { name: 'tota_pe63_ocul', type: 'number' },
        { name: 'cump_pe63_ocul', type: 'number' },
        { name: 'fact_pegs_ante', type: 'number' },
        { name: 'obje_pegs', type: 'number' },
        { name: 'fact_pegs', type: 'number' },
        { name: 'porc_pegs', type: 'number' },
        { name: 'pend_fact_pegs', type: 'number' },
        { name: 'tota_pegs', type: 'number' },
        { name: 'cump_pegs', type: 'number' },
        { name: 'fact_pegs_ante_ocul', type: 'number' },
        { name: 'obje_pegs_ocul', type: 'number' },
        { name: 'obje_pegs_sist_ocul', type: 'number' },
        { name: 'fact_pegs_ocul', type: 'number' },
        { name: 'porc_pegs_ocul', type: 'number' },
        { name: 'pend_fact_pegs_ocul', type: 'number' },
        { name: 'tota_pegs_ocul', type: 'number' },
        { name: 'cump_pegs_ocul', type: 'number' },
        { name: 'fact_rein_ante', type: 'number' },
        { name: 'obje_rein', type: 'number' },
        { name: 'fact_rein', type: 'number' },
        { name: 'porc_rein', type: 'number' },
        { name: 'pend_fact_rein', type: 'number' },
        { name: 'tota_fact_rein', type: 'number' },
        { name: 'cump_rein', type: 'number' },
        { name: 'fact_rein_ante_ocul', type: 'number' },
        { name: 'obje_rein_ocul', type: 'number' },
        { name: 'obje_rein_sist_ocul', type: 'number' },
        { name: 'fact_rein_ocul', type: 'number' },
        { name: 'porc_rein_ocul', type: 'number' },
        { name: 'pend_fact_rein_ocul', type: 'number' },
        { name: 'tota_fact_rein_ocul', type: 'number' },
        { name: 'cump_rein_ocul', type: 'number' },
        { name: 'fact_capi', type: 'number' },
        { name: 'obje_capi', type: 'number' },
        { name: 'pend_capi', type: 'number' },
        { name: 'pend_capi_obje', type: 'number' },
        { name: 'porc_tota_capi', type: 'number' },
        { name: 'fact_capi_ocul', type: 'number' },
        { name: 'obje_capi_ocul', type: 'number' },
        { name: 'pend_capi_ocul', type: 'number' },
        { name: 'porc_tota_capi_ocul', type: 'number' },
        { name: 'valo_docu', type: 'number' },
        { name: 'obje_docu', type: 'number' },
        { name: 'porc_21di', type: 'number' },
        { name: 'sald_21di', type: 'number' },
        { name: 'sald_docu', type: 'number' },
        { name: 'porc_docu', type: 'number' },
        { name: 'pend_cobr', type: 'number' },
        { name: 'tota_line', type: 'number' },
        { name: 'tota_rece', type: 'number' },
        { name: 'pppp_fact', type: 'number' },
        { name: 'pppp_rece', type: 'number' },
        { name: 'pppp_fact_ocul', type: 'number' },
        { name: 'pppp_rece_ocul', type: 'number' },
        { name: 'camp_ingr', type: 'number' },
        { name: 'nive_lide', type: 'string' },
        { name: 'nive_lide_proy', type: 'string' },
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
    this.repo_come_segu_cier_camp_visi()
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
          text: 'obje tota',
          datafield: 'obje_tota_ocul',
          cellsformat: 'N',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact tota',
          datafield: 'fact_tota_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact tota',
          datafield: 'cump_fact_tota_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
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
          text: 'pend fact tota',
          datafield: 'pend_fact_tota_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'tota tota',
          datafield: 'tota_tota_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump tota',
          datafield: 'cump_tota_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_tota
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
          text: 'obje inco',
          datafield: 'obje_inco_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact inco',
          datafield: 'fact_inco_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact inco',
          datafield: 'cump_fact_inco_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
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
          text: 'pend fact inco',
          datafield: 'pend_fact_inco_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'tota inco',
          datafield: 'tota_inco_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump inco',
          datafield: 'cump_inco_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_inco
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
          text: 'obje rete',
          datafield: 'obje_rete_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact rete',
          datafield: 'fact_rete_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact rete',
          datafield: 'cump_fact_rete_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
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
          text: 'pend fact rete',
          datafield: 'pend_fact_rete_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'tota rete',
          datafield: 'tota_rete_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump rete',
          datafield: 'cump_rete_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_rete
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
          text: 'fact rete cons ante',
          datafield: 'fact_rete_cons_ante_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje rete cons',
          datafield: 'obje_rete_cons_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje rete cons sist',
          datafield: 'obje_rete_cons_sist_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact rete cons',
          datafield: 'fact_rete_cons_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact rete cons',
          datafield: 'cump_fact_rete_cons_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons
                sumaObje += record.obje_rete_cons
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
          text: 'pend fact rete cons',
          datafield: 'pend_fact_rete_cons_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'tota rete cons',
          datafield: 'tota_rete_cons_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump rete cons',
          datafield: 'cump_rete_cons_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_rete_cons
                sumaObje += record.obje_rete_cons
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
          text: 'obje rete cons segu',
          datafield: 'obje_rete_cons_segu_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact rete cons segu',
          datafield: 'fact_rete_cons_segu_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue

                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact rete cons segu',
          datafield: 'cump_fact_rete_cons_segu_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons_segu
                sumaObje += record.obje_rete_cons_segu
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
          text: 'pend fact rete cons segu',
          datafield: 'pend_fact_rete_cons_segu_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'tota rete cons segu',
          datafield: 'tota_rete_cons_segu_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump rete cons segu',
          datafield: 'cump_rete_cons_segu_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_rete_cons_segu
                sumaObje += record.obje_rete_cons_segu
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
          text: 'obje rete cons terc',
          datafield: 'obje_rete_cons_terc_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact rete cons terc',
          datafield: 'fact_rete_cons_terc_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact rete cons terc',
          datafield: 'cump_fact_rete_cons_terc_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons_terc
                sumaObje += record.obje_rete_cons_terc
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
          text: 'pend fact rete cons terc',
          datafield: 'pend_fact_rete_cons_terc_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'tota rete cons terc',
          datafield: 'tota_rete_cons_terc_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump rete cons terc',
          datafield: 'cump_rete_cons_terc_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_rete_cons_terc
                sumaObje += record.obje_rete_cons_terc
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
          text: 'obje rete cons cuar',
          datafield: 'obje_rete_cons_cuar_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact rete cons cuar',
          datafield: 'fact_rete_cons_cuar_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact rete cons cuar',
          datafield: 'cump_fact_rete_cons_cuar_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons_cuar
                sumaObje += record.obje_rete_cons_cuar
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
          text: 'pend fact rete cons cuar',
          datafield: 'pend_fact_rete_cons_cuar_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'tota rete cons cuar',
          datafield: 'tota_rete_cons_cuar_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump rete cons cuar',
          datafield: 'cump_rete_cons_cuar_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_rete_cons_cuar
                sumaObje += record.obje_rete_cons_cuar
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
          text: 'nume pedi pend',
          datafield: 'nume_pedi_pend',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'nume pedi',
          datafield: 'nume_pedi',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'tota line',
          datafield: 'tota_line',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'tota rece',
          datafield: 'tota_rece',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'tota ingr',
          datafield: 'tota_ingr',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'tota rein',
          datafield: 'tota_rein',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'acti_inic',
          datafield: 'acti_inic',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'tota ingr pend',
          datafield: 'tota_ingr_pend',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'tota rein pend',
          datafield: 'tota_rein_pend',
          hidden: true,
          cellsformat: 'N',
        },
        {
          text: 'obje acti',
          datafield: 'obje_acti_ocul',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.acti_fina_ante
                sumaObje += record.nume_pedi_acti
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaObje) > 0 && parseInt(sumaFact) > 0) {
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
          text: 'fact pe21 ante',
          datafield: 'fact_pe21_ante_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pe21',
          datafield: 'obje_pe21_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pe21 sist',
          datafield: 'obje_pe21_sist_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact peg21',
          datafield: 'fact_pe21_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'porc pe21',
          datafield: 'porc_pe21_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_pe21
                sumaObje += record.obje_pe21
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
          text: 'pend fact pe21',
          datafield: 'pend_fact_pe21_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'tota pe21',
          datafield: 'tota_pe21_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump pe21',
          datafield: 'cump_pe21_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_pe21
                sumaObje += record.obje_pe21
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
          text: 'fact pe42 ante',
          datafield: 'fact_pe42_ante_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pe42',
          datafield: 'obje_pe42_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pe42 sist',
          datafield: 'obje_pe42_sist_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue

                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact peg42',
          datafield: 'fact_pe42_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'porc pe42',
          datafield: 'porc_pe42_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_pe42
                sumaObje += record.obje_pe42
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
          text: 'pend fact pe42',
          datafield: 'pend_fact_pe42_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'tota pe42',
          datafield: 'tota_pe42_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump pe42',
          datafield: 'cump_pe42_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_pe42
                sumaObje += record.obje_pe42
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
          text: 'fact pe63 ante',
          datafield: 'fact_pe63_ante_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pe63',
          datafield: 'obje_pe63_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pe63 sist',
          datafield: 'obje_pe63_sist_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact peg63',
          datafield: 'fact_pe63_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'porc pe63',
          datafield: 'porc_pe63_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_pe63
                sumaObje += record.obje_pe63
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
          text: 'pend fact pe63',
          datafield: 'pend_fact_pe63_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'tota pe63',
          datafield: 'tota_pe63_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump pe63',
          datafield: 'cump_pe63_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_pe63
                sumaObje += record.obje_pe63
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
          text: 'fact pegs ante',
          datafield: 'fact_pegs_ante_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pegs sist',
          datafield: 'obje_pegs_sist_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje pegs',
          datafield: 'obje_pegs_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact pegs',
          datafield: 'fact_pegs_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'porc pegs',
          datafield: 'porc_pegs_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_pegs
                sumaObje += record.obje_pegs
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
          text: 'pend fact pegs',
          datafield: 'pend_fact_pegs_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'tota pegs',
          datafield: 'tota_pegs_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump pegs',
          datafield: 'cump_pegs_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_pegs
                sumaObje += record.obje_pegs
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
          text: 'fact rein ante',
          datafield: 'fact_rein_ante_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje rein',
          datafield: 'obje_rein_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'obje rein sist',
          datafield: 'obje_rein_sist_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact rein',
          datafield: 'fact_rein_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue

                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'porc rein',
          datafield: 'porc_rein_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rein
                sumaObje += record.obje_rein
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
          text: 'pend fact rein',
          datafield: 'pend_fact_rein_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'tota fact rein',
          datafield: 'tota_fact_rein_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump rein',
          datafield: 'cump_rein_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_fact_rein
                sumaObje += record.obje_rein
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
          text: 'obje capi',
          datafield: 'obje_capi_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'fact capi',
          datafield: 'fact_capi_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'capi pend',
          datafield: 'pend_capi_ocul',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'porc capi',
          datafield: 'porc_tota_capi_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_capi
                sumaObje += record.obje_capi
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
          text: 'pppp fact',
          datafield: 'pppp_fact_ocul',
          hidden: true,
          cellsformat: 'c2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_line
                sumaObje += record.nume_pedi
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaObje) > 0 && parseInt(sumaFact) > 0) {
                  // eslint-disable-next-line
                  total = parseFloat(
                    parseFloat(sumaFact) / parseFloat(sumaObje),
                  )
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'pppp rece',
          datafield: 'pppp_rece_ocul',
          hidden: true,
          cellsformat: 'c2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_rece
                sumaObje += record.nume_pedi
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaObje) > 0 && parseInt(sumaFact) > 0) {
                  // eslint-disable-next-line
                  total = parseFloat(parseFloat(sumaFact) / parseFloat(sumaObje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Sector',
          datafield: 'codi_sect',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Lider',
          datafield: 'nomb_lide',
          width: '250',
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
        {
          text: 'Act. Inic.',
          datafield: 'acti_fina_ante',
          width: '80',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Objetivo',
          datafield: 'obje_tota',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'cump_fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
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
          cellclassname: this.repo_come_segu_cier_camp_cump_tota_clas,
        },
        {
          text: 'Pend. Fact.',
          datafield: 'pend_fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'tota',
        },
        {
          text: 'Total',
          datafield: 'tota_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'tota',
        },
        {
          text: '% Cump.',
          datafield: 'cump_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_tota
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
        },
        {
          text: 'Dife. Tota.',
          datafield: 'dife_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'tota',
          cellsrenderer: this.repo_come_segu_cier_camp_dife_tota_clas,
        },
        {
          text: 'Objetivo',
          datafield: 'obje_inco',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'cump_fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
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
          cellclassname: this.repo_come_segu_cier_camp_cump_inco_clas,
        },
        {
          text: 'Pend. Fact.',
          datafield: 'pend_fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'inco',
        },
        {
          text: 'Total',
          datafield: 'tota_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'inco',
        },
        {
          text: '% Cump.',
          datafield: 'cump_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_inco
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
        },
        {
          text: 'Objetivo',
          datafield: 'obje_rete',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'cump_fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
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
          cellclassname: this.repo_come_segu_cier_camp_cump_rete_clas,
        },
        {
          text: 'Pend. Fact.',
          datafield: 'pend_fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'rete',
        },
        {
          text: 'Total',
          datafield: 'tota_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'rete',
        },
        {
          text: '% Cump.',
          datafield: 'cump_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_rete
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
        },
        {
          text: 'Dife. Rete.',
          datafield: 'dife_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'rete',
          cellsrenderer: this.repo_come_segu_cier_camp_dife_rete_clas,
        },
        {
          text: 'nume acti',
          datafield: 'nume_acti',
          hidden: true,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Objetivo',
          datafield: 'obje_acti',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.acti_fina_ante
                sumaObje += record.nume_pedi_acti
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaObje) > 0 && parseInt(sumaFact) > 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseFloat(sumaObje) / parseInt(sumaFact))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'acti',
        },
        {
          text: 'Obje. Pedi.',
          datafield: 'nume_pedi_acti',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'acti',
        },
        {
          text: '% Acti. Fact.',
          datafield: 'porc_acti',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaActiInic = 0
                  sumaNumePedi = 0
                  sumaTotaIngr = 0
                  sumaTotaRein = 0
                }
                sumaActiInic += record.acti_fina_ante
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
          cellclassname: this.repo_come_segu_cier_camp_porc_acti_clas,
        },
        {
          text: '% Acti. Pend.',
          datafield: 'porc_acti_pend',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaActiInic = 0
                  sumaNumePedi = 0
                  sumaTotaIngr = 0
                  sumaTotaRein = 0
                }
                sumaActiInic += record.acti_fina_ante
                sumaNumePedi += record.nume_pedi_pend
                sumaTotaIngr += record.tota_ingr_pend
                sumaTotaRein += record.tota_rein_pend
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
          text: 'Rete. Camp. Ant.',
          datafield: 'fact_rete_cons_ante',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'obje_rete_cons',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons',
          cellsrenderer: this.repo_come_segu_cier_camp_obje_rete_cons_clas,
        },
        {
          text: 'Facturado',
          datafield: 'fact_rete_cons',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'cump_fact_rete_cons',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons
                sumaObje += record.obje_rete_cons
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
          columngroup: 'cons',
          cellclassname: this.repo_come_segu_cier_camp_cump_fact_rete_cons_clas,
        },
        {
          text: 'Pend. Fact.',
          datafield: 'pend_fact_rete_cons',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons',
        },
        {
          text: 'Total',
          datafield: 'tota_rete_cons',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons',
        },
        {
          text: '% Cump.',
          datafield: 'cump_rete_cons',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_rete_cons
                sumaObje += record.obje_rete_cons
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
          columngroup: 'cons',
        },
        {
          text: '1 Camp. Ante.',
          datafield: 'obje_rete_cons_segu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'fact_rete_cons_segu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'cump_fact_rete_cons_segu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons_segu
                sumaObje += record.obje_rete_cons_segu
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
          columngroup: 'cons_segu',
          cellclassname: this
            .repo_come_segu_cier_camp_cump_fact_rete_cons_segu_clas,
        },
        {
          text: 'Pend. Fact.',
          datafield: 'pend_fact_rete_cons_segu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons_segu',
        },
        {
          text: 'Total',
          datafield: 'tota_rete_cons_segu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons_segu',
        },
        {
          text: '% Cump.',
          datafield: 'cump_rete_cons_segu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_rete_cons_segu
                sumaObje += record.obje_rete_cons_segu
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
          columngroup: 'cons_segu',
        },
        {
          text: '2 Camp. Ante.',
          datafield: 'obje_rete_cons_terc',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'fact_rete_cons_terc',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'cump_fact_rete_cons_terc',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons_terc
                sumaObje += record.obje_rete_cons_terc
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
          columngroup: 'cons_terc',
          cellclassname: this
            .repo_come_segu_cier_camp_cump_fact_rete_cons_terc_clas,
        },
        {
          text: 'Pend. Fact.',
          datafield: 'pend_fact_rete_cons_terc',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons_terc',
        },
        {
          text: 'Total',
          datafield: 'tota_rete_cons_terc',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons_terc',
        },
        {
          text: '% Cump.',
          datafield: 'cump_rete_cons_terc',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_rete_cons_terc
                sumaObje += record.obje_rete_cons_terc
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
          columngroup: 'cons_terc',
        },
        {
          text: '3 Camp. Ante.',
          datafield: 'obje_rete_cons_cuar',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'fact_rete_cons_cuar',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'cump_fact_rete_cons_cuar',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rete_cons_cuar
                sumaObje += record.obje_rete_cons_cuar
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
          columngroup: 'cons_cuar',
          cellclassname: this
            .repo_come_segu_cier_camp_cump_fact_rete_cons_cuar_clas,
        },
        {
          text: 'Pend. Fact.',
          datafield: 'pend_fact_rete_cons_cuar',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons_cuar',
        },
        {
          text: 'Total',
          datafield: 'tota_rete_cons_cuar',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cons_cuar',
        },
        {
          text: '% Cump.',
          datafield: 'cump_rete_cons_cuar',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_rete_cons_cuar
                sumaObje += record.obje_rete_cons_cuar
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
          columngroup: 'cons_cuar',
        },
        {
          text: 'Peg21',
          datafield: 'fact_pe21_ante',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'obje_pe21',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe21',
          cellsrenderer: this.repo_come_segu_cier_camp_obje_pe21_clas,
        },
        {
          text: 'Ret. peg21',
          datafield: 'fact_pe21',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe21',
        },
        {
          text: '% Ret. Pend.',
          datafield: 'porc_pe21',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_pe21
                sumaObje += record.obje_pe21
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
          columngroup: 'pe21',
          cellclassname: this.repo_come_segu_cier_camp_porc_pe21_clas,
        },
        {
          text: 'Pend. Fact.',
          datafield: 'pend_fact_pe21',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe21',
        },
        {
          text: 'Total',
          datafield: 'tota_pe21',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe21',
        },
        {
          text: '% Ret. Pend.',
          datafield: 'cump_pe21',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_pe21
                sumaObje += record.obje_pe21
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
          columngroup: 'pe21',
        },
        {
          text: 'Peg42',
          datafield: 'fact_pe42_ante',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'obje_pe42',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe42',
          cellsrenderer: this.repo_come_segu_cier_camp_obje_pe42_clas,
        },
        {
          text: 'Ret. peg42',
          datafield: 'fact_pe42',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe42',
        },
        {
          text: '% Ret. Pend.',
          datafield: 'porc_pe42',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_pe42
                sumaObje += record.obje_pe42
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
          columngroup: 'pe42',
          cellclassname: this.repo_come_segu_cier_camp_porc_pe42_clas,
        },
        {
          text: 'Pend. Fact.',
          datafield: 'pend_fact_pe42',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe42',
        },
        {
          text: 'Total',
          datafield: 'tota_pe42',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe42',
        },
        {
          text: '% Ret. Pend.',
          datafield: 'cump_pe42',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_pe42
                sumaObje += record.obje_pe42
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
          columngroup: 'pe42',
        },
        {
          text: 'Peg63',
          datafield: 'fact_pe63_ante',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'obje_pe63',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe63',
          cellsrenderer: this.repo_come_segu_cier_camp_obje_pe63_clas,
        },
        {
          text: 'Ret. Peg63',
          datafield: 'fact_pe63',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe63',
        },
        {
          text: '% Ret. Pend.',
          datafield: 'porc_pe63',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_pe63
                sumaObje += record.obje_pe63
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
          columngroup: 'pe63',
          cellclassname: this.repo_come_segu_cier_camp_porc_pe63_clas,
        },
        {
          text: 'Pend. Fact.',
          datafield: 'pend_fact_pe63',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe63',
        },
        {
          text: 'Total',
          datafield: 'tota_pe63',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'pe63',
        },
        {
          text: '% Ret. Pend.',
          datafield: 'cump_pe63',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_pe63
                sumaObje += record.obje_pe63
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
          columngroup: 'pe63',
        },
        {
          text: 'Pegs',
          datafield: 'fact_pegs_ante',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'obje_pegs',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'suma',
          cellsrenderer: this.repo_come_segu_cier_camp_obje_pegs_clas,
        },
        {
          text: 'Ret. Pegs',
          datafield: 'fact_pegs',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
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
          datafield: 'porc_pegs',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_pegs
                sumaObje += record.obje_pegs
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
          columngroup: 'suma',
          cellclassname: this.repo_come_segu_cier_camp_porc_pegs_clas,
        },
        {
          text: 'Pend. Fact.',
          datafield: 'pend_fact_pegs',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'suma',
        },
        {
          text: 'Total',
          datafield: 'tota_pegs',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'suma',
        },
        {
          text: '% Cump',
          datafield: 'cump_pegs',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_pegs
                sumaObje += record.obje_pegs
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
          columngroup: 'suma',
        },
        {
          text: 'Pos. Reing.',
          datafield: 'fact_rein_ante',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue

                return aggregatedValue
              },
            },
          ],
          columngroup: 'rein',
        },
        {
          text: 'Objetivo',
          datafield: 'obje_rein',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue

                return aggregatedValue
              },
            },
          ],
          columngroup: 'rein',
          cellsrenderer: this.repo_come_segu_cier_camp_obje_rein_clas,
        },
        {
          text: 'Facturado',
          datafield: 'fact_rein',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'rein',
        },
        {
          text: 'Cump. Fact.',
          datafield: 'porc_rein',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.fact_rein
                sumaObje += record.obje_rein
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
          columngroup: 'rein',
          cellclassname: this.repo_come_segu_cier_camp_porc_rein_clas,
        },
        {
          text: 'Pend. Fact.',
          datafield: 'pend_fact_rein',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'rein',
        },
        {
          text: 'Total',
          datafield: 'tota_fact_rein',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'rein',
        },
        {
          text: '% Cump',
          datafield: 'cump_rein',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_fact_rein
                sumaObje += record.obje_rein
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
          columngroup: 'rein',
        },
        {
          text: 'Objetivo',
          datafield: 'obje_capi',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'capi',
        },
        {
          text: 'Facturado',
          datafield: 'fact_capi',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'capi',
          cellclassname: this.repo_come_segu_cier_camp_fact_capi_clas,
        },
        {
          text: 'Capi. Pend.',
          datafield: 'pend_capi',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'capi',
        },
        {
          text: 'Pedi. Falt. Obje.',
          datafield: 'pend_capi_obje',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'capi',
          cellsrenderer: this.repo_come_segu_cier_camp_pend_capi_obje_clas,
        },
        {
          text: 'Valor',
          datafield: 'valo_docu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'c2',
          editable: false,
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cobr',
        },
        {
          text: 'Objetivo 88%',
          datafield: 'obje_docu',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'c2',
          editable: false,
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cobr',
        },
        {
          text: 'Saldo 21di.',
          datafield: 'sald_21di',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'c2',
          editable: false,
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cobr',
        },
        {
          text: 'Pend por Cobr 88%',
          datafield: 'pend_cobr',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'c2',
          editable: false,
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cobr',
        },
        {
          text: '% Cobr. 21di.',
          datafield: 'porc_21di',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          editable: false,
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.valo_docu
                sumaObje += record.sald_21di
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaFact) > 0) {
                  total = 100 * (1 - sumaObje / sumaFact)
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'cobr',
          cellclassname: this.repo_come_segu_cier_camp_porc_21di_clas,
        },
        {
          text: 'Saldo Actu.',
          datafield: 'sald_docu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'c2',
          editable: false,
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          columngroup: 'cobr',
        },
        {
          text: '% Cobr. Actu.',
          datafield: 'porc_docu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'P2',
          editable: false,
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.valo_docu
                sumaObje += record.sald_docu
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaObje) > 0 && parseInt(sumaFact) > 0) {
                  total = 100 * (1 - sumaObje / sumaFact)
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'cobr',
        },
        {
          text: 'Facturado',
          datafield: 'pppp_fact',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'c2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_line
                sumaObje += record.nume_pedi
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaObje) > 0 && parseInt(sumaFact) > 0) {
                  total = parseFloat(
                    parseFloat(sumaFact) / parseFloat(sumaObje),
                  )
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'pppp',
        },
        {
          text: 'Recepcionado',
          datafield: 'pppp_rece',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'c2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record.uid === 0) {
                  sumaFact = 0
                  sumaObje = 0
                }
                sumaFact += record.tota_rece
                sumaObje += record.nume_pedi
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaObje) > 0 && parseInt(sumaFact) > 0) {
                  total = parseFloat(
                    parseFloat(sumaFact) / parseFloat(sumaObje),
                  )
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          columngroup: 'pppp',
        },
        {
          text: 'Nivel',
          datafield: 'nive_lide',
          width: '200',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          columngroup: 'lide',
        },
        {
          text: 'Nivel Proyectado',
          datafield: 'nive_lide_proy',
          width: '200',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          columngroup: 'lide',
        },
      ]

      if (
        typeof this.$refs.repo_come_segu_cier_camp_grid_glob !== 'undefined'
      ) {
        if (window.innerHeight - 300 < 350) {
          this.height = '350px'
        } else {
          this.height = `${window.innerHeight - 300}px`
        }
        this.$refs.repo_come_segu_cier_camp_grid_glob.columns = this.columnsGlobal
        this.$refs.repo_come_segu_cier_camp_grid_glob.height = this.height
      }
    },
    setCampana(value) {
      this.seleccionCampana = value
    },
    setZona(value) {
      this.seleccionZona = value
    },
    onChangeVariable() {
      this.$refs.repo_come_segu_cier_camp_grid_glob.beginupdate()
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('obje_tota')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_tota')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('cump_fact_tota')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('pend_fact_tota')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('tota_tota')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('cump_tota')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('dife_tota')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('obje_inco')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_inco')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('cump_fact_inco')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('pend_fact_inco')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('tota_inco')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('cump_inco')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('obje_rete')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_rete')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('cump_fact_rete')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('pend_fact_rete')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('tota_rete')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('cump_rete')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('dife_rete')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'fact_rete_cons_ante',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('obje_rete_cons')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_rete_cons')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'cump_fact_rete_cons',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'pend_fact_rete_cons',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('tota_rete_cons')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('cump_rete_cons')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'obje_rete_cons_segu',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'fact_rete_cons_segu',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'cump_fact_rete_cons_segu',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'pend_fact_rete_cons_segu',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'tota_rete_cons_segu',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'cump_rete_cons_segu',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'obje_rete_cons_terc',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'fact_rete_cons_terc',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'cump_fact_rete_cons_terc',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'pend_fact_rete_cons_terc',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'tota_rete_cons_terc',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'cump_rete_cons_terc',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'obje_rete_cons_cuar',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'fact_rete_cons_cuar',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'cump_fact_rete_cons_cuar',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'pend_fact_rete_cons_cuar',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'tota_rete_cons_cuar',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn(
        'cump_rete_cons_cuar',
      )
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('obje_acti')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('porc_acti')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('nume_pedi_acti')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('porc_acti_pend')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_pe21_ante')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('obje_pe21')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_pe21')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('porc_pe21')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('pend_fact_pe21')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('tota_pe21')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('cump_pe21')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_pe42_ante')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('obje_pe42')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_pe42')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('porc_pe42')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('pend_fact_pe42')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('tota_pe42')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('cump_pe42')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_pe63_ante')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('obje_pe63')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_pe63')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('porc_pe63')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('pend_fact_pe63')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('tota_pe63')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('cump_pe63')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_pegs_ante')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('obje_pegs')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_pegs')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('porc_pegs')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('pend_fact_pegs')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('tota_pegs')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('cump_pegs')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_rein_ante')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('obje_rein')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_rein')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('porc_rein')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('pend_fact_rein')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('tota_fact_rein')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('cump_rein')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('fact_capi')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('obje_capi')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('pend_capi')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('pend_capi_obje')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('valo_docu')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('obje_docu')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('pend_cobr')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('porc_21di')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('sald_21di')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('sald_docu')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('porc_docu')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('pppp_fact')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('pppp_rece')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('nive_lide')
      this.$refs.repo_come_segu_cier_camp_grid_glob.hidecolumn('nive_lide_proy')

      if (this.variable === '0') {
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_tota',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_tota',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('dife_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_inco',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_inco',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('dife_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'obje_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'obje_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'obje_rete_cons_terc',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons_terc',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete_cons_terc',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete_cons_terc',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_rete_cons_terc',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_rete_cons_terc',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'obje_rete_cons_cuar',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons_cuar',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete_cons_cuar',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete_cons_cuar',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_rete_cons_cuar',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_rete_cons_cuar',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_acti')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_acti')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'nume_pedi_acti',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'porc_acti_pend',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_pe21_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_pe21')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_pe21')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_pe21')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_pe21',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_pe21')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_pe21')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_pe42_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_pe42')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_pe42')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_pe42')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_pe42',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_pe42')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_pe42')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_pe63_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_pe63',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_pegs_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_pegs')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_pegs')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_pegs')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_pegs',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_pegs')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_pegs')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rein_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_rein')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_rein')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_rein')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rein',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_fact_rein',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_rein')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_capi')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_capi')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('pend_capi')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_capi_obje',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('valo_docu')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_docu')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('pend_cobr')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_21di')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('sald_21di')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('sald_docu')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_docu')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('pppp_fact')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('pppp_rece')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('nive_lide')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'nive_lide_proy',
        )
      }
      if (this.variable === '1') {
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_tota',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_tota',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('dife_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_inco',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_inco',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_inco')

        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('dife_rete')
      }
      if (this.variable === '2') {
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_acti')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_acti')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'nume_pedi_acti',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'porc_acti_pend',
        )

        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'obje_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_rete_cons',
        )

        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'obje_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_rete_cons_segu',
        )

        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_pe21_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_pe21')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_pe21')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_pe21')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_pe21',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_pe21')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_pe21')

        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_pe42_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_pe42')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_pe42')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_pe42')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_pe42',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_pe42')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_pe42')

        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_pe63_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_pe63',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_pe63')

        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_pegs_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_pegs')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_pegs')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_pegs')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_pegs',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_pegs')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_pegs')
      }
      if (this.variable === '3') {
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('dife_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'obje_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'obje_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_pe21_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_pe21')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_pe21')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_pe21')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_pe21',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_pe21')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_pe21')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_pe42_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_pe42')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_pe42')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_pe42')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_pe42',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_pe42')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_pe42')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_pe63_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_pe63',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_pegs_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_pegs')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_pegs')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_pegs')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_pegs',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_pegs')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_pegs')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rein_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_rein')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_rein')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_rein')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rein',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_fact_rein',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_rein')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('nive_lide')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'nive_lide_proy',
        )
      }
      if (this.variable === '4') {
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_inco',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_inco',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rein_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_rein')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_rein')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_rein')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rein',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_fact_rein',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_rein')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_pe63_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_pe63',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_pe63')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_capi')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_capi')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('pend_capi')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_capi_obje',
        )
      }
      if (this.variable === '5') {
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('valo_docu')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_docu')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('pend_cobr')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_21di')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('sald_21di')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('sald_docu')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_docu')

        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('pppp_fact')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('pppp_rece')
      }
      if (this.variable === '6') {
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons_ante',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'obje_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_rete_cons',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_rete_cons',
        )

        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'obje_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_rete_cons_segu',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_rete_cons_segu',
        )

        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'obje_rete_cons_terc',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons_terc',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete_cons_terc',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete_cons_terc',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_rete_cons_terc',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_rete_cons_terc',
        )

        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'obje_rete_cons_cuar',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'fact_rete_cons_cuar',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete_cons_cuar',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete_cons_cuar',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'tota_rete_cons_cuar',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_rete_cons_cuar',
        )
      }
      if (this.variable === '7') {
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_tota',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_tota',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('dife_tota')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_inco',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_inco',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_inco')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'cump_fact_rete',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_fact_rete',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('tota_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('cump_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('dife_rete')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_acti')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_acti')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'nume_pedi_acti',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'porc_acti_pend',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('fact_capi')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_capi')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('pend_capi')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn(
          'pend_capi_obje',
        )
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('valo_docu')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('obje_docu')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('pend_cobr')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_21di')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('sald_21di')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('sald_docu')
        this.$refs.repo_come_segu_cier_camp_grid_glob.showcolumn('porc_docu')
      }
      this.$refs.repo_come_segu_cier_camp_grid_glob.endupdate()
    },
    repo_come_segu_cier_camp_limp() {
      this.objetivoIncorporacion = '0'
      this.totalFacturadoIncorporacion = '0'
      this.cumplimientoFacturadoIncorporacion = '0.00'
      this.totalPendienteFacturadoIncorporacion = '0'
      this.cumplimientoPendienteFacturadoIncorporacion = '0.00'
      this.objetivoRetencion = '0'
      this.totalFacturadoRetencion = '0'
      this.cumplimientoFacturadoRetencion = '0.00'
      this.totalPendienteFacturadoRetencion = '0'
      this.cumplimientoPendienteFacturadoRetencion = '0.00'
      this.objetivoActividad = '0.00'
      this.totalFacturadoActividad = '0.00'
      this.cumplimientoFacturadoActividad = '0.00'
      this.totalPendienteFacturadoActividad = '0.00'
      this.cumplimientoPendienteFacturadoActividad = '0.00'
      this.codigoCampana = '0'
      this.codigoZona = '0'
      this.$refs.repo_come_segu_cier_camp_grid_glob.clear()
      this.$refs.repo_come_segu_cier_camp_grid_glob.clearselection()
    },
    async repo_come_segu_cier_camp_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_segu_cier_camp',
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
    repo_come_segu_cier_camp_obje_rete_cons_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objeReteSist = parseInt(dataRecord.obje_rete_cons_sist_ocul)
      // eslint-disable-next-line
      const objeRete = parseInt(value)
      let porcReteCons = 100 * (objeRete / objeReteSist)
      porcReteCons = parseFloat(porcReteCons).toFixed(2)

      if (objeReteSist === 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${
            value
          }</div>`
        )
      } if (porcReteCons >= 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${
            value
          }</div>`
        )
      } if (porcReteCons >= 80 && porcReteCons < 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00; font-weight: bold; font-size: 1.15rem;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${
          value
        }</div>`
      )
    },
    repo_come_segu_cier_camp_dife_tota_clas(row, columnfield, value) {
      // eslint-disable-next-line
      const difeRete = parseInt(value)

      if (difeRete >= 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${
          value
        }</div>`
      )
    },
    repo_come_segu_cier_camp_dife_rete_clas(row, columnfield, value) {
      // eslint-disable-next-line
      const difeRete = parseInt(value)

      if (difeRete >= 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${
          value
        }</div>`
      )
    },
    repo_come_segu_cier_camp_pend_capi_obje_clas(row, columnfield, value) {
      // eslint-disable-next-line
      const difeRete = parseInt(value)

      if (difeRete >= 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${
          value
        }</div>`
      )
    },
    repo_come_segu_cier_camp_cump_fact_rete_cons_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objeReteCons = parseInt(dataRecord.obje_rete_cons)
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
    repo_come_segu_cier_camp_cump_fact_rete_cons_segu_clas(
      row,
      columnfield,
      value,
    ) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objeData = parseInt(dataRecord.obje_rete_cons_segu)
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
    repo_come_segu_cier_camp_cump_fact_rete_cons_terc_clas(
      row,
      columnfield,
      value,
    ) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objeData = parseInt(dataRecord.obje_rete_cons_terc)
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
    repo_come_segu_cier_camp_porc_21di_clas(row, columnfield, value) {
      const valoData = parseFloat(value).toFixed(2)
      if (valoData === 0) {
        return ''
      } if (valoData >= 88) {
        return 'text-white bg-success'
      }
      return 'text-white bg-danger'
    },
    repo_come_segu_cier_camp_cump_fact_rete_cons_cuar_clas(
      row,
      columnfield,
      value,
    ) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objeData = parseInt(dataRecord.obje_rete_cons_cuar)
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
    repo_come_segu_cier_camp_obje_pe21_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objePe21 = parseInt(dataRecord.obje_pe21_sist_ocul)
      // eslint-disable-next-line
      const factPe21 = parseInt(value)

      let porcPe21 = 100 * (factPe21 / objePe21)
      porcPe21 = parseFloat(porcPe21).toFixed(2)

      if (factPe21 === 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${
            value
          }</div>`
        )
      } if (porcPe21 >= 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${
            value
          }</div>`
        )
      } if (porcPe21 >= 80 && porcPe21 < 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00; font-weight: bold; font-size: 1.15rem;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${
          value
        }</div>`
      )
    },
    repo_come_segu_cier_camp_porc_pe21_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objePe21 = parseInt(dataRecord.obje_pe21)
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
    repo_come_segu_cier_camp_obje_pe42_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objePe42 = parseInt(dataRecord.obje_pe42_sist_ocul)
      // eslint-disable-next-line
      const factPe42 = parseInt(value)

      let porcPe42 = 100 * (factPe42 / objePe42)
      porcPe42 = parseFloat(porcPe42).toFixed(2)

      if (factPe42 === 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${
            value
          }</div>`
        )
      } if (porcPe42 >= 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${
            value
          }</div>`
        )
      } if (porcPe42 >= 80 && porcPe42 < 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00; font-weight: bold; font-size: 1.15rem;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${
          value
        }</div>`
      )
    },
    repo_come_segu_cier_camp_porc_pe42_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objePe42 = parseInt(dataRecord.obje_pe42)
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
    repo_come_segu_cier_camp_obje_pe63_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objePe63 = parseInt(dataRecord.obje_pe63_sist_ocul)
      // eslint-disable-next-line
      const factPe63 = parseInt(value)

      let porcPe63 = 100 * (factPe63 / objePe63)
      porcPe63 = parseFloat(porcPe63).toFixed(2)

      if (factPe63 === 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${
            value
          }</div>`
        )
      } if (porcPe63 >= 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${
            value
          }</div>`
        )
      } if (porcPe63 >= 80 && porcPe63 < 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00; font-weight: bold; font-size: 1.15rem;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${
          value
        }</div>`
      )
    },
    repo_come_segu_cier_camp_porc_pe63_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objePe63 = parseInt(dataRecord.obje_pe63)
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
    repo_come_segu_cier_camp_obje_pegs_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objePegs = parseInt(dataRecord.obje_pegs_sist_ocul)
      // eslint-disable-next-line
      const factPegs = parseInt(value)

      let porcPegs = 100 * (factPegs / objePegs)
      porcPegs = parseFloat(porcPegs).toFixed(2)

      if (factPegs === 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${
            value
          }</div>`
        )
      } if (porcPegs >= 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${
            value
          }</div>`
        )
      } if (porcPegs >= 80 && porcPegs < 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00; font-weight: bold; font-size: 1.15rem;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${
          value
        }</div>`
      )
    },
    repo_come_segu_cier_camp_porc_pegs_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objePegs = parseInt(dataRecord.obje_pegs)
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
    repo_come_segu_cier_camp_obje_rein_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objeRein = parseInt(dataRecord.obje_rein_sist_ocul)
      // eslint-disable-next-line
      const factRein = parseInt(value)

      let porcRein = 100 * (factRein / objeRein)
      porcRein = parseFloat(porcRein).toFixed(2)

      if (factRein === 0) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${
            value
          }</div>`
        )
      } if (porcRein >= 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${
            value
          }</div>`
        )
      } if (porcRein >= 80 && porcRein < 100) {
        return (
          `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00; font-weight: bold; font-size: 1.15rem;">${
            value
          }</div>`
        )
      }
      return (
        `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${
          value
        }</div>`
      )
    },
    repo_come_segu_cier_camp_porc_rein_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objeRein = parseInt(dataRecord.obje_rein)
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
    repo_come_segu_cier_camp_fact_capi_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
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
    repo_come_segu_cier_camp_cump_tota_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objeTota = parseInt(dataRecord.obje_tota)
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
    repo_come_segu_cier_camp_cump_inco_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objeInco = parseInt(dataRecord.obje_inco)
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
    repo_come_segu_cier_camp_cump_rete_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const objeRete = parseInt(dataRecord.obje_rete)
      const cumpRete = parseFloat(value).toFixed(2)

      if (objeRete === 0) {
        return ''
      } if (cumpRete >= 100) {
        return 'text-white bg-success'
      } if (cumpRete >= 95 && cumpRete < 100) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_segu_cier_camp_porc_acti_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_segu_cier_camp_grid_glob.getrowdata(
        row,
      )
      const objeActi = parseFloat(dataRecord.obje_acti).toFixed(2)
      const porcActi = parseFloat(value).toFixed(2)
      if (objeActi === 0) {
        return ''
      } if (porcActi >= objeActi) {
        return 'text-white bg-success'
      }
      return 'text-white bg-danger'
    },
    async repo_come_segu_cier_camp_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_segu_cier_camp_limp()
      if (
        this.seleccionCampana === null
        || this.seleccionCampana.length === 0
      ) {
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
              text: 'Campo campaña es obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else if (this.seleccionZona === null || this.seleccionZona.length === 0) {
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
              text: 'Campo zona es obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        this.codigoCampana = this.seleccionCampana
        this.codigoZona = this.seleccionZona
        const itemMainCampana = JSON.parse(localStorage.getItem('mainCampana'))
        let campActu = 0
        if (itemMainCampana.camp_actu.length > 0) {
          campActu = itemMainCampana.camp_actu[0].codi_camp
        }
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_segu_cier_camp/segu_cier_camp_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.codigoCampana,
              codi_zona: this.codigoZona,
              camp_actu: campActu,
            },
          })
          this.objetivoIncorporacion = await servicio.data.obje_inco
          this.totalFacturadoIncorporacion = await servicio.data.fact_inco
          this.cumplimientoFacturadoIncorporacion = await servicio.data.cump_fact_inco
          this.totalPendienteFacturadoIncorporacion = await servicio.data.pend_fact_inco
          this.cumplimientoPendienteFacturadoIncorporacion = await servicio.data.cump_pend_fact_inco
          this.objetivoRetencion = await servicio.data.obje_rete
          this.totalFacturadoRetencion = await servicio.data.fact_rete
          this.cumplimientoFacturadoRetencion = await servicio.data.cump_fact_rete
          this.totalPendienteFacturadoRetencion = await servicio.data.pend_fact_rete
          this.cumplimientoPendienteFacturadoRetencion = await servicio.data.cump_pend_fact_rete
          this.objetivoActividad = await servicio.data.obje_acti
          this.totalFacturadoActividad = await servicio.data.fact_acti
          this.cumplimientoFacturadoActividad = await servicio.data.cump_fact_acti
          this.totalPendienteFacturadoActividad = await servicio.data.pend_fact_acti
          this.cumplimientoPendienteFacturadoActividad = await servicio.data.cump_pend_fact_acti
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_segu_cier_camp_grid_glob.updatebounddata(
            'cells',
          )
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
    async repo_come_segu_cier_camp_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_segu_cier_camp_grid_glob.getdatainformation()
      const dataRowsGlob = dataInfoGlob.rowscount
      if (dataRowsGlob === 0) {
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
              text: 'No tiene información para exportar a excel',
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
            url: `${store.state.app.webService}/sami_v1/repo_come_segu_cier_camp/segu_cier_camp_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              obje_inco: this.objetivoIncorporacion,
              fact_inco: this.totalFacturadoIncorporacion,
              cump_fact_inco: this.cumplimientoFacturadoIncorporacion,
              pend_fact_inco: this.totalPendienteFacturadoIncorporacion,
              cump_pend_fact_inco: this.cumplimientoPendienteFacturadoIncorporacion,
              obje_rete: this.objetivoRetencion,
              fact_rete: this.totalFacturadoRetencion,
              cump_fact_rete: this.cumplimientoFacturadoRetencion,
              pend_fact_rete: this.totalPendienteFacturadoRetencion,
              cump_pend_fact_rete: this.cumplimientoPendienteFacturadoRetencion,
              obje_acti: this.objetivoActividad,
              fact_acti: this.totalFacturadoActividad,
              cump_fact_acti: this.cumplimientoFacturadoActividad,
              pend_fact_acti: this.totalPendienteFacturadoActividad,
              cump_pend_fact_acti: this.cumplimientoPendienteFacturadoActividad,
              data_glob: this.$refs.repo_come_segu_cier_camp_grid_glob.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_esta: this.$refs.repo_come_segu_cier_camp_grid_glob.getstate(),
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
