<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_proy_camp_regi_gene()"
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
        @click="repo_come_proy_camp_regi_limp()"
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
        @click="repo_come_proy_camp_regi_gene()"
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
        @click="repo_come_proy_camp_regi_exce()"
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
        @click="repo_come_proy_camp_regi_limp()"
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
        <selectCampanaRegion
          :array-campana="dataCampana"
          :array-region="dataRegion"
          :multiple-region="false"
          @campana="setCampana"
          @region="setRegion"
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
              <span class="font-weight-bolder">Concepto</span></b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-bolder">Obj. Región</span></b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-bolder">Obj. Proyec.</span></b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-bolder">% Proyección</span></b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-bolder">Reproyección</span></b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-bolder">% Reproyección</span></b-col>
          </b-row>
          <b-row class="mt-1">
            <b-col cols="2">
              <span class="font-weight-normal">Objetivo Incorporación</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{
                objetivoIncorporacion
              }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{
                objetivoIncorporacionProyeccion
              }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{
                porcentajeObjetivoIncorporacionProyeccion
              }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{
                objetivoIncorporacionReproyeccion
              }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{
                porcentajeObjetivoIncorporacionReproyeccion
              }}</span>
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
              <span class="font-weight-normal">{{
                objetivoRetencionProyeccion
              }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{
                porcentajeObjetivoRetencionProyeccion
              }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{
                objetivoRetencionReproyeccion
              }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{
                porcentajeObjetivoRetencionReproyeccion
              }}</span>
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
              <span class="font-weight-normal">{{
                objetivoActividadProyeccion
              }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{
                porcentajeObjetivoActividadProyeccion
              }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{
                objetivoActividadReproyeccion
              }}</span>
            </b-col>
            <b-col
              cols="2"
              class="text-center"
            >
              <span class="font-weight-normal">{{
                porcentajeObjetivoActividadReproyeccion
              }}</span>
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
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card title="Columnas">
          <div class="demo-inline-spacing">
            <b-form-radio
              v-model="columna"
              name="columna"
              value="0"
              class="custom-control-primary"
              @change="onChangeColumna()"
            >
              Objetivos
            </b-form-radio>
            <b-form-radio
              v-model="columna"
              name="columna"
              value="1"
              class="custom-control-primary"
              @change="onChangeColumna()"
            >
              Obj. Proyección
            </b-form-radio>
            <b-form-radio
              v-model="columna"
              name="columna"
              value="2"
              class="custom-control-primary"
              @change="onChangeColumna()"
            >
              Reproyección (C &amp; D)
            </b-form-radio>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card title="Consolidado por corte">
          <JqxGrid
            ref="repo_come_proy_camp_regi_grid_cons"
            :width="'100%'"
            height="250"
            :columngroups="columnsGroupConsolidado"
            :columns="columnsConsolidado"
            :source="dataAdapterConsolidado"
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
            :showstatusbar="true"
            :showaggregates="true"
            :scrollmode="'logical'"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card title="Detalle por zona">
          <JqxGrid
            ref="repo_come_proy_camp_regi_grid_glob"
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
import selectCampanaRegion from '@/views/components/FiltroCampanaRegion.vue'
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

let data = 0
let obje = 0
let sumaNumePedi = 0
let sumaTotaIngr = 0
let sumaTotaRein = 0
let sumaActiInic = 0
let sumaActiPrim = 0
let sumaActiSegu = 0
let sumaNumeActi = 0
let sumaActiObje = 0

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BCard,
    // eslint-disable-next-line vue/no-unused-components
    selectCampanaRegion,
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
      dataRegion: [],
      seleccionRegion: [],
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
          text: '% Actividad',
          align: 'center',
          name: 'acti',
        },
        {
          text: 'Consecutividad Pedidos de Retención 90%',
          align: 'center',
          name: 'cons_rete',
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
          name: 'pegs',
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
      ],
      objetivoIncorporacion: '0',
      objetivoIncorporacionProyeccion: '0',
      porcentajeObjetivoIncorporacionProyeccion: '0.00',
      objetivoIncorporacionReproyeccion: '0',
      porcentajeObjetivoIncorporacionReproyeccion: '0.00',
      objetivoRetencion: '0',
      objetivoRetencionProyeccion: '0',
      porcentajeObjetivoRetencionProyeccion: '0.00',
      objetivoRetencionReproyeccion: '0',
      porcentajeObjetivoRetencionReproyeccion: '0.00',
      objetivoActividad: '0.00',
      objetivoActividadProyeccion: '0.00',
      porcentajeObjetivoActividadProyeccion: '0.00',
      objetivoActividadReproyeccion: '0.00',
      porcentajeObjetivoActividadReproyeccion: '0.00',
      variable: '0',
      columna: '0',
      codigoCampana: '0',
      codigoRegion: '0',
      // eslint-disable-next-line
      dataAdapterConsolidado: new jqx.dataAdapter(this.sourceConsolidado),
      columnsGroupConsolidado: [
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
          text: '% Actividad',
          align: 'center',
          name: 'acti',
        },
        {
          text: 'Consecutividad Pedidos de Retención 90%',
          align: 'center',
          name: 'cons_rete',
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
          name: 'pegs',
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
      ],
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
        { name: 'codi_cort', type: 'number' },
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'nomb_vend', type: 'string' },
        { name: 'acti_inic', type: 'number' },
        { name: 'pedi_tota_obje_ocul', type: 'number' },
        { name: 'pedi_tota_cant_ocul', type: 'number' },
        { name: 'pedi_tota_prim_ocul', type: 'number' },
        { name: 'pedi_tota_prim_porc_ocul', type: 'number' },
        { name: 'pedi_tota_segu_ocul', type: 'number' },
        { name: 'pedi_tota_segu_porc_ocul', type: 'number' },
        { name: 'pedi_tota_obje', type: 'number' },
        { name: 'pedi_tota_cant', type: 'number' },
        { name: 'pedi_tota_prim', type: 'number' },
        { name: 'pedi_tota_segu', type: 'number' },
        { name: 'pedi_tota_prim_porc', type: 'number' },
        { name: 'pedi_tota_segu_porc', type: 'number' },
        { name: 'pedi_inco_obje_ocul', type: 'number' },
        { name: 'pedi_inco_cant_ocul', type: 'number' },
        { name: 'pedi_inco_prim_ocul', type: 'number' },
        { name: 'pedi_inco_segu_ocul', type: 'number' },
        { name: 'pedi_inco_prim_porc_ocul', type: 'number' },
        { name: 'pedi_inco_segu_porc_ocul', type: 'number' },
        { name: 'pedi_inco_obje', type: 'number' },
        { name: 'pedi_inco_cant', type: 'number' },
        { name: 'pedi_inco_prim', type: 'number' },
        { name: 'pedi_inco_segu', type: 'number' },
        { name: 'pedi_inco_prim_porc', type: 'number' },
        { name: 'pedi_inco_segu_porc', type: 'number' },
        { name: 'pedi_rete_obje_ocul', type: 'number' },
        { name: 'pedi_rete_cant_ocul', type: 'number' },
        { name: 'pedi_rete_prim_ocul', type: 'number' },
        { name: 'pedi_rete_segu_ocul', type: 'number' },
        { name: 'pedi_rete_prim_porc_ocul', type: 'number' },
        { name: 'pedi_rete_segu_porc_ocul', type: 'number' },
        { name: 'pedi_rete_obje', type: 'number' },
        { name: 'pedi_rete_cant', type: 'number' },
        { name: 'pedi_rete_prim', type: 'number' },
        { name: 'pedi_rete_segu', type: 'number' },
        { name: 'pedi_rete_prim_porc', type: 'number' },
        { name: 'pedi_rete_segu_porc', type: 'number' },
        { name: 'nume_acti_anti', type: 'number' },
        { name: 'acti_camp_ante', type: 'number' },
        { name: 'nume_acti', type: 'number' },
        { name: 'acti_obje', type: 'number' },
        { name: 'acti_obje_pedi', type: 'number' },
        { name: 'acti_prim', type: 'number' },
        { name: 'acti_segu', type: 'number' },
        { name: 'acti_porc_prim', type: 'number' },
        { name: 'acti_porc_segu', type: 'number' },
        { name: 'acti_nume_prim', type: 'number' },
        { name: 'acti_nume_segu', type: 'number' },
        { name: 'cons_rete_camp_ante', type: 'number' },
        { name: 'cons_rete_obje', type: 'number' },
        { name: 'cons_rete_prim', type: 'number' },
        { name: 'cons_rete_segu', type: 'number' },
        { name: 'cons_segu_camp_ante', type: 'number' },
        { name: 'cons_segu_obje', type: 'number' },
        { name: 'cons_terc_camp_ante', type: 'number' },
        { name: 'cons_terc_obje', type: 'number' },
        { name: 'cons_cuar_camp_ante', type: 'number' },
        { name: 'cons_cuar_obje', type: 'number' },
        { name: 'pe21', type: 'number' },
        { name: 'pe21_obje', type: 'number' },
        { name: 'pe21_prim', type: 'number' },
        { name: 'pe21_segu', type: 'number' },
        { name: 'pe42', type: 'number' },
        { name: 'pe42_obje', type: 'number' },
        { name: 'pe42_prim', type: 'number' },
        { name: 'pe42_segu', type: 'number' },
        { name: 'pe63', type: 'number' },
        { name: 'pe63_obje', type: 'number' },
        { name: 'pe63_prim', type: 'number' },
        { name: 'pe63_segu', type: 'number' },
        { name: 'pegs', type: 'number' },
        { name: 'pegs_obje', type: 'number' },
        { name: 'pegs_prim', type: 'number' },
        { name: 'pegs_segu', type: 'number' },
        { name: 'rein', type: 'number' },
        { name: 'rein_obje', type: 'number' },
        { name: 'rein_prim', type: 'number' },
        { name: 'rein_segu', type: 'number' },
        { name: 'capi_obje', type: 'number' },
        { name: 'capi_repr', type: 'number' },
        { name: 'tota_vent', type: 'number' },
        { name: 'cobr', type: 'number' },
        { name: 'cobr_colc', type: 'number' },
        { name: 'co92', type: 'number' },
        { name: 'co92_colc', type: 'number' },
        { name: 'lima_prov', type: 'string' },
        { name: 'tota_pedi_ante', type: 'number' },
        { name: 'tota_rein_ante', type: 'number' },
        { name: 'tota_ingr_ante', type: 'number' },
        { name: 'acti_inic_ante', type: 'number' },
        { name: 'acti_obje_ocul', type: 'number' },
        { name: 'acti_prim_ocul', type: 'number' },
        { name: 'acti_segu_ocul', type: 'number' },
        { name: 'cons_rete_obje_ocul', type: 'number' },
        { name: 'cons_rete_prim_ocul', type: 'number' },
        { name: 'cons_rete_segu_ocul', type: 'number' },
        { name: 'cons_segu_obje_ocul', type: 'number' },
        { name: 'cons_terc_obje_ocul', type: 'number' },
        { name: 'cons_cuar_obje_ocul', type: 'number' },
        { name: 'pe21_obje_ocul', type: 'number' },
        { name: 'pe21_prim_ocul', type: 'number' },
        { name: 'pe21_segu_ocul', type: 'number' },
        { name: 'pe42_obje_ocul', type: 'number' },
        { name: 'pe42_prim_ocul', type: 'number' },
        { name: 'pe42_segu_ocul', type: 'number' },
        { name: 'pe63_obje_ocul', type: 'number' },
        { name: 'pe63_prim_ocul', type: 'number' },
        { name: 'pe63_segu_ocul', type: 'number' },
        { name: 'pegs_obje_ocul', type: 'number' },
        { name: 'pegs_prim_ocul', type: 'number' },
        { name: 'pegs_segu_ocul', type: 'number' },
        { name: 'rein_obje_ocul', type: 'number' },
        { name: 'rein_prim_ocul', type: 'number' },
        { name: 'rein_segu_ocul', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceConsolidado = {
      localdata: [],
      datafields: [
        { name: 'codi_cort', type: 'number' },
        { name: 'codi_area', type: 'string' },
        { name: 'tota_zona', type: 'number' },
        { name: 'acti_inic', type: 'number' },
        { name: 'pedi_tota_obje_ocul', type: 'number' },
        { name: 'pedi_tota_cant_ocul', type: 'number' },
        { name: 'pedi_tota_prim_ocul', type: 'number' },
        { name: 'pedi_tota_prim_porc_ocul', type: 'number' },
        { name: 'pedi_tota_segu_ocul', type: 'number' },
        { name: 'pedi_tota_segu_porc_ocul', type: 'number' },
        { name: 'pedi_tota_obje', type: 'number' },
        { name: 'pedi_tota_cant', type: 'number' },
        { name: 'pedi_tota_prim', type: 'number' },
        { name: 'pedi_tota_segu', type: 'number' },
        { name: 'pedi_tota_prim_porc', type: 'number' },
        { name: 'pedi_tota_segu_porc', type: 'number' },
        { name: 'pedi_inco_obje_ocul', type: 'number' },
        { name: 'pedi_inco_cant_ocul', type: 'number' },
        { name: 'pedi_inco_prim_ocul', type: 'number' },
        { name: 'pedi_inco_segu_ocul', type: 'number' },
        { name: 'pedi_inco_prim_porc_ocul', type: 'number' },
        { name: 'pedi_inco_segu_porc_ocul', type: 'number' },
        { name: 'pedi_inco_obje', type: 'number' },
        { name: 'pedi_inco_cant', type: 'number' },
        { name: 'pedi_inco_prim', type: 'number' },
        { name: 'pedi_inco_segu', type: 'number' },
        { name: 'pedi_inco_prim_porc', type: 'number' },
        { name: 'pedi_inco_segu_porc', type: 'number' },
        { name: 'pedi_rete_obje_ocul', type: 'number' },
        { name: 'pedi_rete_cant_ocul', type: 'number' },
        { name: 'pedi_rete_prim_ocul', type: 'number' },
        { name: 'pedi_rete_segu_ocul', type: 'number' },
        { name: 'pedi_rete_prim_porc_ocul', type: 'number' },
        { name: 'pedi_rete_segu_porc_ocul', type: 'number' },
        { name: 'pedi_rete_obje', type: 'number' },
        { name: 'pedi_rete_cant', type: 'number' },
        { name: 'pedi_rete_prim', type: 'number' },
        { name: 'pedi_rete_segu', type: 'number' },
        { name: 'pedi_rete_prim_porc', type: 'number' },
        { name: 'pedi_rete_segu_porc', type: 'number' },
        { name: 'nume_acti_anti', type: 'number' },
        { name: 'acti_camp_ante', type: 'number' },
        { name: 'nume_acti', type: 'number' },
        { name: 'acti_obje', type: 'number' },
        { name: 'acti_obje_pedi', type: 'number' },
        { name: 'acti_prim', type: 'number' },
        { name: 'acti_segu', type: 'number' },
        { name: 'acti_porc_prim', type: 'number' },
        { name: 'acti_porc_segu', type: 'number' },
        { name: 'acti_nume_prim', type: 'number' },
        { name: 'acti_nume_segu', type: 'number' },
        { name: 'cons_rete_camp_ante', type: 'number' },
        { name: 'cons_rete_obje', type: 'number' },
        { name: 'cons_rete_prim', type: 'number' },
        { name: 'cons_rete_segu', type: 'number' },
        { name: 'cons_segu_camp_ante', type: 'number' },
        { name: 'cons_segu_obje', type: 'number' },
        { name: 'cons_terc_camp_ante', type: 'number' },
        { name: 'cons_terc_obje', type: 'number' },
        { name: 'cons_cuar_camp_ante', type: 'number' },
        { name: 'cons_cuar_obje', type: 'number' },
        { name: 'pe21', type: 'number' },
        { name: 'pe21_obje', type: 'number' },
        { name: 'pe21_prim', type: 'number' },
        { name: 'pe21_segu', type: 'number' },
        { name: 'pe42', type: 'number' },
        { name: 'pe42_obje', type: 'number' },
        { name: 'pe42_prim', type: 'number' },
        { name: 'pe42_segu', type: 'number' },
        { name: 'pe63', type: 'number' },
        { name: 'pe63_obje', type: 'number' },
        { name: 'pe63_prim', type: 'number' },
        { name: 'pe63_segu', type: 'number' },
        { name: 'pegs', type: 'number' },
        { name: 'pegs_obje', type: 'number' },
        { name: 'pegs_prim', type: 'number' },
        { name: 'pegs_segu', type: 'number' },
        { name: 'rein', type: 'number' },
        { name: 'rein_obje', type: 'number' },
        { name: 'rein_prim', type: 'number' },
        { name: 'rein_segu', type: 'number' },
        { name: 'capi_obje', type: 'number' },
        { name: 'capi_repr', type: 'number' },
        { name: 'tota_vent', type: 'number' },
        { name: 'cobr', type: 'number' },
        { name: 'cobr_colc', type: 'number' },
        { name: 'co92', type: 'number' },
        { name: 'co92_colc', type: 'number' },
        { name: 'lima_prov', type: 'string' },
        { name: 'tota_pedi_ante', type: 'number' },
        { name: 'tota_rein_ante', type: 'number' },
        { name: 'tota_ingr_ante', type: 'number' },
        { name: 'acti_inic_ante', type: 'number' },
        { name: 'acti_obje_ocul', type: 'number' },
        { name: 'acti_prim_ocul', type: 'number' },
        { name: 'acti_segu_ocul', type: 'number' },
        { name: 'cons_rete_obje_ocul', type: 'number' },
        { name: 'cons_rete_prim_ocul', type: 'number' },
        { name: 'cons_rete_segu_ocul', type: 'number' },
        { name: 'cons_segu_obje_ocul', type: 'number' },
        { name: 'cons_terc_obje_ocul', type: 'number' },
        { name: 'cons_cuar_obje_ocul', type: 'number' },
        { name: 'pe21_obje_ocul', type: 'number' },
        { name: 'pe21_prim_ocul', type: 'number' },
        { name: 'pe21_segu_ocul', type: 'number' },
        { name: 'pe42_obje_ocul', type: 'number' },
        { name: 'pe42_prim_ocul', type: 'number' },
        { name: 'pe42_segu_ocul', type: 'number' },
        { name: 'pe63_obje_ocul', type: 'number' },
        { name: 'pe63_prim_ocul', type: 'number' },
        { name: 'pe63_segu_ocul', type: 'number' },
        { name: 'pegs_obje_ocul', type: 'number' },
        { name: 'pegs_prim_ocul', type: 'number' },
        { name: 'pegs_segu_ocul', type: 'number' },
        { name: 'rein_obje_ocul', type: 'number' },
        { name: 'rein_prim_ocul', type: 'number' },
        { name: 'rein_segu_ocul', type: 'number' },
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
    this.repo_come_proy_camp_regi_visi()
  },
  created() {
    this.handleWindowResize()
    const userData = JSON.parse(localStorage.getItem('userData'))
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    const itemRegion = JSON.parse(userData.area)
    itemCampana = itemCampana.camp_sigu.slice(1, 7)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))
    itemRegion.forEach(element => this.dataRegion.push(element.codi_area))
    this.seleccionCampana = itemCampana[0].codi_camp
    this.seleccionRegion = itemRegion[0].codi_area
  },
  methods: {
    setCampana(value) {
      this.seleccionCampana = value
    },
    setRegion(value) {
      this.seleccionRegion = value
    },
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
          text: 'Corte',
          datafield: 'codi_cort',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned,
          filtertype: 'checkedlist',
        },
        {
          text: 'Zona',
          datafield: 'codi_zona',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned,
          filtertype: 'checkedlist',
        },
        {
          text: 'Gerente',
          datafield: 'nomb_vend',
          width: '250',
          align: 'center',
          cellsalign: 'left',
          editable: false,
          pinned,
        },
        {
          text: 'Act. Inic.',
          datafield: 'acti_inic',
          width: '80',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned,
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
          text: 'pedi tota obje',
          datafield: 'pedi_tota_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'tota',
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
          text: 'pedi tota cant',
          datafield: 'pedi_tota_cant_ocul',
          width: '120',
          hidden: true,
          columngroup: 'tota',
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
          text: 'pedi tota prim',
          datafield: 'pedi_tota_prim_ocul',
          width: '120',
          hidden: true,
          columngroup: 'tota',
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
          text: 'pedi tota segu',
          datafield: 'pedi_tota_segu_ocul',
          width: '120',
          hidden: true,
          columngroup: 'tota',
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
          text: 'pedi tota prim porc',
          datafield: 'pedi_tota_prim_porc_ocul',
          width: '120',
          hidden: true,
          columngroup: 'tota',
          cellsformat: 'P2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_tota_prim
                obje += record.pedi_tota_cant
                let total = 0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'pedi tota segu porc',
          datafield: 'pedi_tota_segu_porc_ocul',
          width: '120',
          hidden: true,
          columngroup: 'tota',
          cellsformat: 'P2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_tota_segu
                obje += record.pedi_tota_cant
                let total = 0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Obje. Camp.',
          datafield: 'pedi_tota_cant',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'tota',
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
          text: 'Obj. Proyección',
          datafield: 'pedi_tota_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'tota',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pedi_tota_prim_clas,
        },
        {
          text: 'Proyección (%)',
          datafield: 'pedi_tota_prim_porc',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'tota',
          cellsformat: 'P2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_tota_prim
                obje += record.pedi_tota_cant
                let total = 0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Reproyección',
          datafield: 'pedi_tota_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'tota',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pedi_tota_segu_clas,
        },
        {
          text: 'Reproyección (%)',
          datafield: 'pedi_tota_segu_porc',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'tota',
          cellsformat: 'P2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_tota_segu
                obje += record.pedi_tota_cant
                let total = 0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'pedi inco cant',
          datafield: 'pedi_inco_cant_ocul',
          width: '120',
          hidden: true,
          columngroup: 'inco',
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
          text: 'pedi inco obje',
          datafield: 'pedi_inco_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'inco',
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
          text: 'pedi inco prim',
          datafield: 'pedi_inco_prim_ocul',
          width: '120',
          hidden: true,
          columngroup: 'inco',
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
          text: 'pedi inco segu',
          datafield: 'pedi_inco_segu_ocul',
          width: '120',
          hidden: true,
          columngroup: 'inco',
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
          text: 'pedi inco prim porc',
          datafield: 'pedi_inco_prim_porc_ocul',
          width: '120',
          hidden: true,
          columngroup: 'inco',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_inco_prim
                obje += record.pedi_inco_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'pedi inco segu porc',
          datafield: 'pedi_inco_segu_porc_ocul',
          width: '120',
          hidden: true,
          columngroup: 'inco',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_inco_segu
                obje += record.pedi_inco_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Obje. Camp.',
          datafield: 'pedi_inco_cant',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'inco',
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
          text: 'Obj. Proyección',
          datafield: 'pedi_inco_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'inco',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pedi_inco_prim_clas,
        },
        {
          text: 'Proyección (%)',
          datafield: 'pedi_inco_prim_porc',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'inco',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_inco_prim
                obje += record.pedi_inco_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Reproyección',
          datafield: 'pedi_inco_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'inco',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pedi_inco_segu_clas,
        },
        {
          text: 'Reproyección (%)',
          datafield: 'pedi_inco_segu_porc',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'inco',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_inco_segu
                obje += record.pedi_inco_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'pedi rete cant',
          datafield: 'pedi_rete_cant_ocul',
          width: '120',
          hidden: true,
          columngroup: 'rete',
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
          text: 'pedi rete obje',
          datafield: 'pedi_rete_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'rete',
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
          text: 'pedi rete prim',
          datafield: 'pedi_rete_prim_ocul',
          width: '120',
          hidden: true,
          columngroup: 'rete',
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
          text: 'pedi rete segu',
          datafield: 'pedi_rete_segu_ocul',
          width: '120',
          hidden: true,
          columngroup: 'rete',
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
          text: 'pedi rete prim porc',
          datafield: 'pedi_rete_prim_porc_ocul',
          width: '120',
          hidden: true,
          columngroup: 'rete',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_rete_prim
                obje += record.pedi_rete_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'pedi rete segu porc',
          datafield: 'pedi_rete_segu_porc_ocul',
          width: '120',
          hidden: true,
          columngroup: 'rete',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_rete_segu
                obje += record.pedi_rete_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Obje. Camp.',
          datafield: 'pedi_rete_cant',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rete',
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
          text: 'Obj. Proyección',
          datafield: 'pedi_rete_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rete',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pedi_rete_prim_clas,
        },
        {
          text: 'Proyección (%)',
          datafield: 'pedi_rete_prim_porc',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rete',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_rete_prim
                obje += record.pedi_rete_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Reproyección',
          datafield: 'pedi_rete_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rete',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pedi_rete_segu_clas,
        },
        {
          text: 'Reproyección (%)',
          datafield: 'pedi_rete_segu_porc',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rete',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_rete_segu
                obje += record.pedi_rete_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'nume acti ante',
          datafield: 'nume_acti_ante',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'tota ingr ante',
          datafield: 'tota_ingr_ante',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'tota rein ante',
          datafield: 'tota_rein_ante',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'acti inic ante',
          datafield: 'acti_inic_ante',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'tota pedi ante',
          datafield: 'tota_pedi_ante',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'Camp. Ante.',
          datafield: 'acti_camp_ante',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'acti',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaNumePedi = 0
                  sumaTotaIngr = 0
                  sumaTotaRein = 0
                  sumaActiInic = 0
                }
                sumaNumePedi += record.tota_pedi_ante
                sumaTotaIngr += record.tota_ingr_ante
                sumaTotaRein += record.tota_rein_ante
                sumaActiInic += record.acti_inic_ante

                let total = 0.0
                // eslint-disable-next-line
                if (
                  // eslint-disable-next-line
                  parseInt(sumaNumePedi)
                    // eslint-disable-next-line
                    - parseInt(sumaTotaIngr)
                    // eslint-disable-next-line
                    - parseInt(sumaTotaRein)
                    > 0
                  // eslint-disable-next-line
                  && parseInt(sumaActiInic) > 0
                ) {
                  // eslint-disable-next-line
                  total =
                    100
                    // eslint-disable-next-line
                    * ((parseInt(sumaNumePedi)
                      // eslint-disable-next-line
                      - parseInt(sumaTotaIngr)
                      // eslint-disable-next-line
                      - parseInt(sumaTotaRein))
                      // eslint-disable-next-line
                      / parseInt(sumaActiInic))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'nume acti',
          datafield: 'nume_acti',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'acti nume prim',
          datafield: 'acti_nume_prim',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'acti nume segu',
          datafield: 'acti_nume_segu',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'acti obje',
          datafield: 'acti_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'acti',
          cellsformat: 'P2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaNumeActi = 0
                  sumaActiObje = 0
                }
                sumaNumeActi += record.acti_inic
                sumaActiObje += record.acti_obje_pedi
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaNumeActi) > 0 && parseInt(sumaActiObje) > 0) {
                  // eslint-disable-next-line
                  total =
                    100 * (parseFloat(sumaActiObje) / parseFloat(sumaNumeActi))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Obje. % Acti. Camp.',
          datafield: 'acti_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'acti',
          cellsformat: 'P2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaNumeActi = 0
                  sumaActiObje = 0
                }
                sumaNumeActi += record.acti_inic
                sumaActiObje += record.acti_obje_pedi
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaNumeActi) > 0 && parseInt(sumaActiObje) > 0) {
                  // eslint-disable-next-line
                  total =
                    100 * (parseFloat(sumaActiObje) / parseFloat(sumaNumeActi))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Obje. Pedi. Act.',
          datafield: 'acti_obje_pedi',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'acti',
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
          text: 'Proyección (%)',
          datafield: 'acti_porc_prim',
          hidden: true,
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'acti',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaActiPrim = 0
                  sumaActiInic = 0
                }
                sumaActiPrim += record.acti_prim
                sumaActiInic += record.acti_inic
                let total = 0
                // eslint-disable-next-line
                if (
                  // eslint-disable-next-line
                  parseInt(sumaActiPrim) > 0
                  // eslint-disable-next-line
                  && parseFloat(sumaActiInic) > 0
                ) {
                  // eslint-disable-next-line
                  total =
                    // eslint-disable-next-line
                    100 * (parseInt(sumaActiPrim) / parseInt(sumaActiInic))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'acti prim',
          datafield: 'acti_prim_ocul',
          width: '120',
          hidden: true,
          columngroup: 'acti',
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
          text: 'Obj. Proyección',
          datafield: 'acti_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'acti',
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
          cellsrenderer: this.repo_come_proy_camp_regi_acti_prim_clas,
        },
        {
          text: 'Reproyección (%)',
          datafield: 'acti_porc_segu',
          hidden: true,
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'acti',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaActiSegu = 0
                  sumaActiInic = 0
                }
                sumaActiSegu += record.acti_segu
                sumaActiInic += record.acti_inic
                let total = 0
                // eslint-disable-next-line
                if (
                  // eslint-disable-next-line
                  parseInt(sumaActiSegu) > 0
                  // eslint-disable-next-line
                  && parseFloat(sumaActiInic) > 0
                ) {
                  // eslint-disable-next-line
                  total =
                    // eslint-disable-next-line
                    100 * (parseInt(sumaActiSegu) / parseInt(sumaActiInic))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'acti segu',
          datafield: 'acti_segu_ocul',
          width: '120',
          hidden: true,
          columngroup: 'acti',
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
          text: 'Reproyección',
          datafield: 'acti_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'acti',
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
          cellsrenderer: this.repo_come_proy_camp_regi_acti_segu_clas,
        },
        {
          text: 'Rete. Camp. Ante.',
          datafield: 'cons_rete_camp_ante',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_rete',
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
          text: 'cons rete obje',
          datafield: 'cons_rete_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'cons_rete',
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
          text: 'Obje. Form. Exito',
          datafield: 'cons_rete_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_rete',
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
          text: 'cons rete prim',
          datafield: 'cons_rete_prim_ocul',
          hidden: true,
          columngroup: 'cons_rete',
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
          text: 'Obj. Proyección',
          datafield: 'cons_rete_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_rete',
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
          cellsrenderer: this.repo_come_proy_camp_regi_cons_rete_prim_clas,
        },
        {
          text: 'cons rete segu',
          datafield: 'cons_rete_segu_ocul',
          hidden: true,
          columngroup: 'cons_rete',
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
          text: 'Reproyección',
          datafield: 'cons_rete_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_rete',
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
          cellsrenderer: this.repo_come_proy_camp_regi_cons_rete_segu_clas,
        },
        {
          text: '1 Camp. Ante.',
          datafield: 'cons_segu_camp_ante',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_segu',
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
          text: 'cons segu obje',
          datafield: 'cons_segu_obje_ocul',
          hidden: true,
          columngroup: 'cons_segu',
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
          text: 'Obje. Form. Exito',
          datafield: 'cons_segu_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_segu',
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
          text: '2 Camp. Ante.',
          datafield: 'cons_terc_camp_ante',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_terc',
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
          text: 'cons terc obje',
          datafield: 'cons_terc_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'cons_terc',
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
          text: 'Obje. Form. Exito',
          datafield: 'cons_terc_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_terc',
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
          text: '3 Camp. Ante.',
          datafield: 'cons_cuar_camp_ante',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_cuar',
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
          text: 'cons cuar obje',
          datafield: 'cons_cuar_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'cons_cuar',
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
          text: 'Obje. Form. Exito',
          datafield: 'cons_cuar_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_cuar',
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
          text: 'Peg21',
          datafield: 'pe21',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe21',
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
          text: 'pe21 obje',
          datafield: 'pe21_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'pe21',
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
          text: 'Obje. Form. Exito',
          datafield: 'pe21_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe21',
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
          text: 'pe21 prim',
          datafield: 'pe21_prim_ocul',
          hidden: true,
          columngroup: 'pe21',
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
          text: 'Obj. Proyección',
          datafield: 'pe21_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe21',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pe21_prim_clas,
        },
        {
          text: 'pe21 segu',
          hidden: true,
          datafield: 'pe21_segu_ocul',
          columngroup: 'pe21',
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
          text: 'Reproyección',
          hidden: true,
          datafield: 'pe21_segu',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe21',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pe21_segu_clas,
        },
        {
          text: 'Peg42',
          datafield: 'pe42',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe42',
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
          text: 'pe42 obje',
          datafield: 'pe42_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'pe42',
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
          text: 'Obje. Form. Exito',
          datafield: 'pe42_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe42',
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
          text: 'pe42 prim',
          datafield: 'pe42_prim_ocul',
          hidden: true,
          columngroup: 'pe42',
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
          text: 'Obj. Proyección',
          datafield: 'pe42_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe42',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pe42_prim_clas,
        },
        {
          text: 'pe42 segu',
          datafield: 'pe42_segu_ocul',
          hidden: true,
          columngroup: 'pe42',
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
          text: 'Reproyección',
          datafield: 'pe42_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe42',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pe42_segu_clas,
        },
        {
          text: 'Peg63',
          datafield: 'pe63',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe63',
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
          text: 'pe63 obje',
          datafield: 'pe63_obje_ocul',
          hidden: true,
          columngroup: 'pe63',
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
          text: 'Obje. Form. Exito',
          datafield: 'pe63_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe63',
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
          text: 'pe63 prim',
          datafield: 'pe63_prim_ocul',
          hidden: true,
          columngroup: 'pe63',
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
          text: 'Obj. Proyección',
          datafield: 'pe63_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe63',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pe63_prim_clas,
        },
        {
          text: 'pe63 segu',
          datafield: 'pe63_segu_ocul',
          hidden: true,
          columngroup: 'pe63',
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
          text: 'Reproyección',
          datafield: 'pe63_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe63',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pe63_segu_clas,
        },
        {
          text: 'Pegs',
          datafield: 'pegs',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pegs',
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
          text: 'pegs obje',
          datafield: 'pegs_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'pegs',
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
          text: 'Obje. Form. Exito',
          datafield: 'pegs_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pegs',
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
          text: 'pegs prim',
          datafield: 'pegs_prim_ocul',
          hidden: true,
          columngroup: 'pegs',
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
          text: 'Obj. Proyección',
          datafield: 'pegs_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pegs',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pegs_prim_clas,
        },
        {
          text: 'pegs segu',
          datafield: 'pegs_segu_ocul',
          hidden: true,
          columngroup: 'pegs',
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
          text: 'Reproyección',
          datafield: 'pegs_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pegs',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pegs_segu_clas,
        },
        {
          text: 'Pos. Rein.',
          datafield: 'rein',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rein',
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
          text: 'rein obje',
          datafield: 'rein_obje_ocul',
          hidden: true,
          columngroup: 'rein',
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
          text: 'Obje. Form. Exito',
          datafield: 'rein_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rein',
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
          text: 'rein prim',
          datafield: 'rein_prim_ocul',
          hidden: true,
          columngroup: 'rein',
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
          text: 'Obj. Proyección',
          datafield: 'rein_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rein',
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
          cellsrenderer: this.repo_come_proy_camp_regi_rein_prim_clas,
        },
        {
          text: 'rein segu',
          datafield: 'rein_segu_ocul',
          hidden: true,
          columngroup: 'rein',
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
          text: 'Reproyección',
          datafield: 'rein_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rein',
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
          cellsrenderer: this.repo_come_proy_camp_regi_rein_segu_clas,
        },
        {
          text: 'Obj. Proyección',
          datafield: 'capi_obje',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'capi',
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
          cellsrenderer: this.repo_come_proy_camp_regi_capi_obje_clas,
        },
        {
          text: 'Reproyección',
          datafield: 'capi_repr',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          hidden: true,
          editable: false,
          pinned: false,
          columngroup: 'capi',
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
          cellsrenderer: this.repo_come_proy_camp_regi_capi_obje_clas,
        },
        {
          text: 'Venta',
          datafield: 'tota_vent',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          cellsformat: 'D2',
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
          text: 'Cobranza 88%(por cobrar)',
          datafield: 'cobr',
          width: '160',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          cellsformat: 'D2',
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
          text: 'Cobranza 88%(te puedes quedar)',
          datafield: 'cobr_colc',
          width: '180',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          cellsformat: 'd2',
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
          text: 'Cobranza 92%(por cobrar)',
          datafield: 'co92',
          width: '160',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          cellsformat: 'D2',
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
          text: 'Cobranza 92%(te puedes quedar)',
          datafield: 'co92_colc',
          width: '180',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          cellsformat: 'D2',
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
          text: 'Lima Provincia',
          datafield: 'lima_prov',
          hidden: true,
        },
      ]
      this.columnsConsolidado = [
        {
          text: 'Corte',
          datafield: 'codi_cort',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned,
          filtertype: 'checkedlist',
        },
        {
          text: 'Región',
          datafield: 'codi_area',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned,
          filtertype: 'checkedlist',
        },
        {
          text: 'Nro Zonas',
          datafield: 'tota_zona',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned,
          filtertype: 'checkedlist',
        },
        {
          text: 'Act. Inic.',
          datafield: 'acti_inic',
          width: '80',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned,
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
          text: 'pedi tota obje',
          datafield: 'pedi_tota_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'tota',
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
          text: 'pedi tota cant',
          datafield: 'pedi_tota_cant_ocul',
          width: '120',
          hidden: true,
          columngroup: 'tota',
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
          text: 'pedi tota prim',
          datafield: 'pedi_tota_prim_ocul',
          width: '120',
          hidden: true,
          columngroup: 'tota',
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
          text: 'pedi tota segu',
          datafield: 'pedi_tota_segu_ocul',
          width: '120',
          hidden: true,
          columngroup: 'tota',
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
          text: 'pedi tota prim porc',
          datafield: 'pedi_tota_prim_porc_ocul',
          width: '120',
          hidden: true,
          columngroup: 'tota',
          cellsformat: 'P2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_tota_prim
                obje += record.pedi_tota_cant
                let total = 0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'pedi tota segu porc',
          datafield: 'pedi_tota_segu_porc_ocul',
          width: '120',
          hidden: true,
          columngroup: 'tota',
          cellsformat: 'P2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_tota_segu
                obje += record.pedi_tota_cant
                let total = 0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Obje. Camp.',
          datafield: 'pedi_tota_cant',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'tota',
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
          text: 'Obj. Proyección',
          datafield: 'pedi_tota_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'tota',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pedi_tota_prim_clas_cons,
        },
        {
          text: 'Proyección (%)',
          datafield: 'pedi_tota_prim_porc',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'tota',
          cellsformat: 'P2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_tota_prim
                obje += record.pedi_tota_cant
                let total = 0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Reproyección',
          datafield: 'pedi_tota_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'tota',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pedi_tota_segu_clas_cons,
        },
        {
          text: 'Reproyección (%)',
          datafield: 'pedi_tota_segu_porc',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'tota',
          cellsformat: 'P2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_tota_segu
                obje += record.pedi_tota_cant
                let total = 0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'pedi inco cant',
          datafield: 'pedi_inco_cant_ocul',
          width: '120',
          hidden: true,
          columngroup: 'inco',
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
          text: 'pedi inco obje',
          datafield: 'pedi_inco_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'inco',
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
          text: 'pedi inco prim',
          datafield: 'pedi_inco_prim_ocul',
          width: '120',
          hidden: true,
          columngroup: 'inco',
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
          text: 'pedi inco segu',
          datafield: 'pedi_inco_segu_ocul',
          width: '120',
          hidden: true,
          columngroup: 'inco',
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
          text: 'pedi inco prim porc',
          datafield: 'pedi_inco_prim_porc_ocul',
          width: '120',
          hidden: true,
          columngroup: 'inco',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_inco_prim
                obje += record.pedi_inco_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'pedi inco segu porc',
          datafield: 'pedi_inco_segu_porc_ocul',
          width: '120',
          hidden: true,
          columngroup: 'inco',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_inco_segu
                obje += record.pedi_inco_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Obje. Camp.',
          datafield: 'pedi_inco_cant',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'inco',
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
          text: 'Obj. Proyección',
          datafield: 'pedi_inco_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'inco',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pedi_inco_prim_clas_cons,
        },
        {
          text: 'Proyección (%)',
          datafield: 'pedi_inco_prim_porc',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'inco',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_inco_prim
                obje += record.pedi_inco_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Reproyección',
          datafield: 'pedi_inco_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'inco',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pedi_inco_segu_clas_cons,
        },
        {
          text: 'Reproyección (%)',
          datafield: 'pedi_inco_segu_porc',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'inco',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_inco_segu
                obje += record.pedi_inco_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'pedi rete cant',
          datafield: 'pedi_rete_cant_ocul',
          width: '120',
          hidden: true,
          columngroup: 'rete',
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
          text: 'pedi rete obje',
          datafield: 'pedi_rete_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'rete',
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
          text: 'pedi rete prim',
          datafield: 'pedi_rete_prim_ocul',
          width: '120',
          hidden: true,
          columngroup: 'rete',
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
          text: 'pedi rete segu',
          datafield: 'pedi_rete_segu_ocul',
          width: '120',
          hidden: true,
          columngroup: 'rete',
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
          text: 'pedi rete prim porc',
          datafield: 'pedi_rete_prim_porc_ocul',
          width: '120',
          hidden: true,
          columngroup: 'rete',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_rete_prim
                obje += record.pedi_rete_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'pedi rete segu porc',
          datafield: 'pedi_rete_segu_porc_ocul',
          width: '120',
          hidden: true,
          columngroup: 'rete',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_rete_segu
                obje += record.pedi_rete_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Obje. Camp.',
          datafield: 'pedi_rete_cant',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rete',
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
          text: 'Obj. Proyección',
          datafield: 'pedi_rete_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rete',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pedi_rete_prim_clas_cons,
        },
        {
          text: 'Proyección (%)',
          datafield: 'pedi_rete_prim_porc',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rete',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_rete_prim
                obje += record.pedi_rete_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Reproyección',
          datafield: 'pedi_rete_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rete',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pedi_rete_segu_clas_cons,
        },
        {
          text: 'Reproyección (%)',
          datafield: 'pedi_rete_segu_porc',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rete',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.pedi_rete_segu
                obje += record.pedi_rete_cant
                let total = 0.0
                // eslint-disable-next-line
                if (parseInt(data) != 0 && parseInt(obje) != 0) {
                  // eslint-disable-next-line
                  total = 100 * (parseInt(data) / parseInt(obje))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'nume acti ante',
          datafield: 'nume_acti_ante',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'tota ingr ante',
          datafield: 'tota_ingr_ante',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'tota rein ante',
          datafield: 'tota_rein_ante',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'acti inic ante',
          datafield: 'acti_inic_ante',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'tota pedi ante',
          datafield: 'tota_pedi_ante',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'Camp. Ante.',
          datafield: 'acti_camp_ante',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'acti',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaNumePedi = 0
                  sumaTotaIngr = 0
                  sumaTotaRein = 0
                  sumaActiInic = 0
                }
                sumaNumePedi += record.tota_pedi_ante
                sumaTotaIngr += record.tota_ingr_ante
                sumaTotaRein += record.tota_rein_ante
                sumaActiInic += record.acti_inic_ante

                let total = 0.0
                // eslint-disable-next-line
                if (
                  // eslint-disable-next-line
                  parseInt(sumaNumePedi)
                    // eslint-disable-next-line
                    - parseInt(sumaTotaIngr)
                    // eslint-disable-next-line
                    - parseInt(sumaTotaRein)
                    > 0
                  // eslint-disable-next-line
                  && parseInt(sumaActiInic) > 0
                ) {
                  // eslint-disable-next-line
                  total =
                    100
                    // eslint-disable-next-line
                    * ((parseInt(sumaNumePedi)
                      // eslint-disable-next-line
                      - parseInt(sumaTotaIngr)
                      // eslint-disable-next-line
                      - parseInt(sumaTotaRein))
                      // eslint-disable-next-line
                      / parseInt(sumaActiInic))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'nume acti',
          datafield: 'nume_acti',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'acti nume prim',
          datafield: 'acti_nume_prim',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'acti nume segu',
          datafield: 'acti_nume_segu',
          hidden: true,
          cellsformat: 'N',
          columngroup: 'acti',
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
          text: 'acti obje',
          datafield: 'acti_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'acti',
          cellsformat: 'P2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaNumeActi = 0
                  sumaActiObje = 0
                }
                sumaNumeActi += record.acti_inic
                sumaActiObje += record.acti_obje_pedi
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaNumeActi) > 0 && parseInt(sumaActiObje) > 0) {
                  // eslint-disable-next-line
                  total =
                    100 * (parseFloat(sumaActiObje) / parseFloat(sumaNumeActi))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Obje. % Acti. Camp.',
          datafield: 'acti_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'acti',
          cellsformat: 'P2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaNumeActi = 0
                  sumaActiObje = 0
                }
                sumaNumeActi += record.acti_inic
                sumaActiObje += record.acti_obje_pedi
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaNumeActi) > 0 && parseInt(sumaActiObje) > 0) {
                  // eslint-disable-next-line
                  total =
                    100 * (parseFloat(sumaActiObje) / parseFloat(sumaNumeActi))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Obje. Pedi. Act.',
          datafield: 'acti_obje_pedi',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'acti',
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
          text: 'Proyección (%)',
          datafield: 'acti_porc_prim',
          hidden: true,
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'acti',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaActiPrim = 0
                  sumaActiInic = 0
                }
                sumaActiPrim += record.acti_prim
                sumaActiInic += record.acti_inic
                let total = 0
                // eslint-disable-next-line
                if (
                  // eslint-disable-next-line
                  parseInt(sumaActiPrim) > 0
                  // eslint-disable-next-line
                  && parseFloat(sumaActiInic) > 0
                ) {
                  // eslint-disable-next-line
                  total =
                    // eslint-disable-next-line
                    100 * (parseInt(sumaActiPrim) / parseInt(sumaActiInic))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'acti prim',
          datafield: 'acti_prim_ocul',
          width: '120',
          hidden: true,
          columngroup: 'acti',
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
          text: 'Obj. Proyección',
          datafield: 'acti_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'acti',
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
          cellsrenderer: this.repo_come_proy_camp_regi_acti_prim_clas_cons,
        },
        {
          text: 'Reproyección (%)',
          datafield: 'acti_porc_segu',
          hidden: true,
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'acti',
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaActiSegu = 0
                  sumaActiInic = 0
                }
                sumaActiSegu += record.acti_segu
                sumaActiInic += record.acti_inic
                let total = 0
                // eslint-disable-next-line
                if (
                  // eslint-disable-next-line
                  parseInt(sumaActiSegu) > 0
                  // eslint-disable-next-line
                  && parseFloat(sumaActiInic) > 0
                ) {
                  // eslint-disable-next-line
                  total =
                    // eslint-disable-next-line
                    100 * (parseInt(sumaActiSegu) / parseInt(sumaActiInic))
                }
                // eslint-disable-next-line
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'acti segu',
          datafield: 'acti_segu_ocul',
          width: '120',
          hidden: true,
          columngroup: 'acti',
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
          text: 'Reproyección',
          datafield: 'acti_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'acti',
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
          cellsrenderer: this.repo_come_proy_camp_regi_acti_segu_clas_cons,
        },
        {
          text: 'Rete. Camp. Ante.',
          datafield: 'cons_rete_camp_ante',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_rete',
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
          text: 'cons rete obje',
          datafield: 'cons_rete_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'cons_rete',
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
          text: 'Obje. Form. Exito',
          datafield: 'cons_rete_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_rete',
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
          text: 'cons rete prim',
          datafield: 'cons_rete_prim_ocul',
          hidden: true,
          columngroup: 'cons_rete',
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
          text: 'Obj. Proyección',
          datafield: 'cons_rete_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_rete',
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
          cellsrenderer: this.repo_come_proy_camp_regi_cons_rete_prim_clas_cons,
        },
        {
          text: 'cons rete segu',
          datafield: 'cons_rete_segu_ocul',
          hidden: true,
          columngroup: 'cons_rete',
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
          text: 'Reproyección',
          datafield: 'cons_rete_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_rete',
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
          cellsrenderer: this.repo_come_proy_camp_regi_cons_rete_segu_clas_cons,
        },
        {
          text: '1 Camp. Ante.',
          datafield: 'cons_segu_camp_ante',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_segu',
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
          text: 'cons segu obje',
          datafield: 'cons_segu_obje_ocul',
          hidden: true,
          columngroup: 'cons_segu',
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
          text: 'Obje. Form. Exito',
          datafield: 'cons_segu_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_segu',
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
          text: '2 Camp. Ante.',
          datafield: 'cons_terc_camp_ante',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_terc',
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
          text: 'cons terc obje',
          datafield: 'cons_terc_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'cons_terc',
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
          text: 'Obje. Form. Exito',
          datafield: 'cons_terc_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_terc',
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
          text: '3 Camp. Ante.',
          datafield: 'cons_cuar_camp_ante',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_cuar',
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
          text: 'cons cuar obje',
          datafield: 'cons_cuar_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'cons_cuar',
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
          text: 'Obje. Form. Exito',
          datafield: 'cons_cuar_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'cons_cuar',
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
          text: 'Peg21',
          datafield: 'pe21',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe21',
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
          text: 'pe21 obje',
          datafield: 'pe21_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'pe21',
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
          text: 'Obje. Form. Exito',
          datafield: 'pe21_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe21',
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
          text: 'pe21 prim',
          datafield: 'pe21_prim_ocul',
          hidden: true,
          columngroup: 'pe21',
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
          text: 'Obj. Proyección',
          datafield: 'pe21_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe21',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pe21_prim_clas_cons,
        },
        {
          text: 'pe21 segu',
          hidden: true,
          datafield: 'pe21_segu_ocul',
          columngroup: 'pe21',
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
          text: 'Reproyección',
          hidden: true,
          datafield: 'pe21_segu',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe21',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pe21_segu_clas_cons,
        },
        {
          text: 'Peg42',
          datafield: 'pe42',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe42',
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
          text: 'pe42 obje',
          datafield: 'pe42_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'pe42',
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
          text: 'Obje. Form. Exito',
          datafield: 'pe42_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe42',
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
          text: 'pe42 prim',
          datafield: 'pe42_prim_ocul',
          hidden: true,
          columngroup: 'pe42',
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
          text: 'Obj. Proyección',
          datafield: 'pe42_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe42',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pe42_prim_clas_cons,
        },
        {
          text: 'pe42 segu',
          datafield: 'pe42_segu_ocul',
          hidden: true,
          columngroup: 'pe42',
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
          text: 'Reproyección',
          datafield: 'pe42_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe42',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pe42_segu_clas_cons,
        },
        {
          text: 'Peg63',
          datafield: 'pe63',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe63',
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
          text: 'pe63 obje',
          datafield: 'pe63_obje_ocul',
          hidden: true,
          columngroup: 'pe63',
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
          text: 'Obje. Form. Exito',
          datafield: 'pe63_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe63',
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
          text: 'pe63 prim',
          datafield: 'pe63_prim_ocul',
          hidden: true,
          columngroup: 'pe63',
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
          text: 'Obj. Proyección',
          datafield: 'pe63_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe63',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pe63_prim_clas_cons,
        },
        {
          text: 'pe63 segu',
          datafield: 'pe63_segu_ocul',
          hidden: true,
          columngroup: 'pe63',
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
          text: 'Reproyección',
          datafield: 'pe63_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pe63',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pe63_segu_clas_cons,
        },
        {
          text: 'Pegs',
          datafield: 'pegs',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pegs',
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
          text: 'pegs obje',
          datafield: 'pegs_obje_ocul',
          width: '120',
          hidden: true,
          columngroup: 'pegs',
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
          text: 'Obje. Form. Exito',
          datafield: 'pegs_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pegs',
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
          text: 'pegs prim',
          datafield: 'pegs_prim_ocul',
          hidden: true,
          columngroup: 'pegs',
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
          text: 'Obj. Proyección',
          datafield: 'pegs_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pegs',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pegs_prim_clas_cons,
        },
        {
          text: 'pegs segu',
          datafield: 'pegs_segu_ocul',
          hidden: true,
          columngroup: 'pegs',
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
          text: 'Reproyección',
          datafield: 'pegs_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'pegs',
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
          cellsrenderer: this.repo_come_proy_camp_regi_pegs_segu_clas_cons,
        },
        {
          text: 'Pos. Rein.',
          datafield: 'rein',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rein',
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
          text: 'rein obje',
          datafield: 'rein_obje_ocul',
          hidden: true,
          columngroup: 'rein',
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
          text: 'Obje. Form. Exito',
          datafield: 'rein_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rein',
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
          text: 'rein prim',
          datafield: 'rein_prim_ocul',
          hidden: true,
          columngroup: 'rein',
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
          text: 'Obj. Proyección',
          datafield: 'rein_prim',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rein',
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
          cellsrenderer: this.repo_come_proy_camp_regi_rein_prim_clas_cons,
        },
        {
          text: 'rein segu',
          datafield: 'rein_segu_ocul',
          hidden: true,
          columngroup: 'rein',
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
          text: 'Reproyección',
          datafield: 'rein_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'rein',
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
          cellsrenderer: this.repo_come_proy_camp_regi_rein_segu_clas_cons,
        },
        {
          text: 'Obj. Proyección',
          datafield: 'capi_obje',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          columngroup: 'capi',
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
          cellsrenderer: this.repo_come_proy_camp_regi_capi_obje_clas_cons,
        },
        {
          text: 'Reproyección',
          datafield: 'capi_repr',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          hidden: true,
          editable: false,
          pinned: false,
          columngroup: 'capi',
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
          cellsrenderer: this.repo_come_proy_camp_regi_capi_obje_clas_cons,
        },
        {
          text: 'Venta',
          datafield: 'tota_vent',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          cellsformat: 'D2',
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
          text: 'Cobranza 88%(por cobrar)',
          datafield: 'cobr',
          width: '160',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          cellsformat: 'D2',
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
          text: 'Cobranza 88%(te puedes quedar)',
          datafield: 'cobr_colc',
          width: '180',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          cellsformat: 'd2',
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
          text: 'Cobranza 92%(por cobrar)',
          datafield: 'co92',
          width: '160',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          cellsformat: 'D2',
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
          text: 'Cobranza 92%(te puedes quedar)',
          datafield: 'co92_colc',
          width: '180',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          cellsformat: 'D2',
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
          text: 'Lima Provincia',
          datafield: 'lima_prov',
          hidden: true,
        },
      ]
      if (
        typeof this.$refs.repo_come_proy_camp_regi_grid_glob !== 'undefined'
      ) {
        if (window.innerHeight - 300 < 350) {
          this.height = '350px'
        } else {
          this.height = `${window.innerHeight - 300}px`
        }
        this.$refs.repo_come_proy_camp_regi_grid_glob.columns = this.columnsGlobal
        this.$refs.repo_come_proy_camp_regi_grid_glob.height = this.height
        this.$refs.repo_come_proy_camp_regi_grid_cons.columns = this.columnsConsolidado
      }
    },
    onChangeVariable() {
      this.$refs.repo_come_proy_camp_regi_grid_glob.beginupdate()
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pedi_tota_cant')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pedi_tota_prim')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pedi_tota_segu')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
        'pedi_tota_prim_porc',
      )
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
        'pedi_tota_segu_porc',
      )
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pedi_inco_cant')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pedi_inco_prim')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pedi_inco_segu')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
        'pedi_inco_prim_porc',
      )
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
        'pedi_inco_segu_porc',
      )
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pedi_rete_cant')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pedi_rete_prim')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pedi_rete_segu')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
        'pedi_rete_prim_porc',
      )
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
        'pedi_rete_segu_porc',
      )
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('acti_camp_ante')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('acti_obje')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('acti_obje_pedi')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('acti_porc_prim')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('acti_prim')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('acti_porc_segu')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('acti_segu')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
        'cons_rete_camp_ante',
      )
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('cons_rete_obje')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('cons_rete_prim')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('cons_rete_segu')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
        'cons_segu_camp_ante',
      )
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('cons_segu_obje')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
        'cons_terc_camp_ante',
      )
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('cons_terc_obje')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
        'cons_cuar_camp_ante',
      )
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('cons_cuar_obje')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe21')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe21_obje')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe21_prim')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe21_segu')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe42')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe42_obje')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe42_prim')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe42_segu')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_obje')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_prim')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_segu')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pegs')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pegs_obje')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pegs_prim')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pegs_segu')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('rein')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('rein_obje')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('rein_prim')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('rein_segu')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('capi_obje')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('capi_repr')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('tota_vent')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('cobr')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('cobr_colc')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('co92')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('co92_colc')
      this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('lima_prov')
      if (this.variable === '0') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_terc_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_cuar_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_obje')
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_terc_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_cuar_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_obje')
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_terc_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_cuar_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_repr')
        }
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('tota_vent')
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('cobr')
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('cobr_colc')
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('co92')
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('co92_colc')
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('lima_prov')
      }
      if (this.variable === '1') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim_porc',
          )
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_segu_porc',
          )
        }
      }
      if (this.variable === '2') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_prim')
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_segu')
        }
      }
      if (this.variable === '3') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_prim')
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_segu')
        }
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('lima_prov')
      }
      if (this.variable === '4') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_obje')
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_obje')
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_repr')
        }
      }
      if (this.variable === '5') {
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('tota_vent')
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('cobr')
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('cobr_colc')
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('co92')
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('co92_colc')
      }
      if (this.variable === '6') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_segu',
          )
        }
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
          'cons_segu_camp_ante',
        )
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
          'cons_segu_obje',
        )
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
          'cons_terc_camp_ante',
        )
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
          'cons_terc_obje',
        )
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
          'cons_cuar_camp_ante',
        )
        this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
          'cons_cuar_obje',
        )
      }
      this.$refs.repo_come_proy_camp_regi_grid_glob.endupdate()
      this.$refs.repo_come_proy_camp_regi_grid_cons.beginupdate()
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pedi_tota_cant')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pedi_tota_prim')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pedi_tota_segu')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
        'pedi_tota_prim_porc',
      )
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
        'pedi_tota_segu_porc',
      )
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pedi_inco_cant')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pedi_inco_prim')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pedi_inco_segu')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
        'pedi_inco_prim_porc',
      )
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
        'pedi_inco_segu_porc',
      )
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pedi_rete_cant')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pedi_rete_prim')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pedi_rete_segu')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
        'pedi_rete_prim_porc',
      )
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
        'pedi_rete_segu_porc',
      )
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('acti_camp_ante')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('acti_obje')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('acti_obje_pedi')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('acti_porc_prim')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('acti_prim')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('acti_porc_segu')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('acti_segu')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
        'cons_rete_camp_ante',
      )
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('cons_rete_obje')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('cons_rete_prim')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('cons_rete_segu')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
        'cons_segu_camp_ante',
      )
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('cons_segu_obje')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
        'cons_terc_camp_ante',
      )
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('cons_terc_obje')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
        'cons_cuar_camp_ante',
      )
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('cons_cuar_obje')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe21')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe21_obje')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe21_prim')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe21_segu')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe42')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe42_obje')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe42_prim')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe42_segu')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_obje')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_prim')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_segu')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pegs')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pegs_obje')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pegs_prim')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pegs_segu')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('rein')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('rein_obje')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('rein_prim')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('rein_segu')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('capi_obje')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('capi_repr')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('tota_vent')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('cobr')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('cobr_colc')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('co92')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('co92_colc')
      this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('lima_prov')
      if (this.variable === '0') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_terc_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_cuar_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_obje')
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_terc_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_cuar_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_obje')
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_terc_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_cuar_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_repr')
        }
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('tota_vent')
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('cobr')
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('cobr_colc')
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('co92')
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('co92_colc')
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('lima_prov')
      }
      if (this.variable === '1') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim_porc',
          )
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_segu_porc',
          )
        }
      }
      if (this.variable === '2') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_prim')
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_segu')
        }
      }
      if (this.variable === '3') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_prim')
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_segu')
        }
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('lima_prov')
      }
      if (this.variable === '4') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_obje')
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_obje')
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_repr')
        }
      }
      if (this.variable === '5') {
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('tota_vent')
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('cobr')
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('cobr_colc')
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('co92')
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('co92_colc')
      }
      if (this.variable === '6') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_segu',
          )
        }
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
          'cons_segu_camp_ante',
        )
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
          'cons_segu_obje',
        )
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
          'cons_terc_camp_ante',
        )
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
          'cons_terc_obje',
        )
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
          'cons_cuar_camp_ante',
        )
        this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
          'cons_cuar_obje',
        )
      }
      this.$refs.repo_come_proy_camp_regi_grid_cons.endupdate()
    },
    onChangeColumna() {
      this.$refs.repo_come_proy_camp_regi_grid_glob.beginupdate()
      if (this.columna === '0') {
        if (this.variable === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_terc_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_cuar_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('capi_repr')
        }
        if (this.variable === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_segu_porc',
          )
        }
        if (this.variable === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pegs_segu')
        }
        if (this.variable === '3') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('rein_segu')
        }
        if (this.variable === '4') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('capi_repr')
        }
        if (this.variable === '6') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'cons_rete_segu',
          )
        }
      }
      if (this.columna === '1') {
        if (this.variable === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_terc_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_cuar_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('capi_repr')
        }
        if (this.variable === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_segu_porc',
          )
        }
        if (this.variable === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pegs_segu')
        }
        if (this.variable === '3') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('rein_segu')
        }
        if (this.variable === '4') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn('capi_repr')
        }
        if (this.variable === '6') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.hidecolumn(
            'cons_rete_segu',
          )
        }
      }
      if (this.columna === '2') {
        if (this.variable === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_terc_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_cuar_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_repr')
        }
        if (this.variable === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_segu_porc',
          )
        }
        if (this.variable === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_segu')
        }
        if (this.variable === '3') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_segu')
        }
        if (this.variable === '4') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn('capi_repr')
        }
        if (this.variable === '6') {
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_glob.showcolumn(
            'cons_rete_segu',
          )
        }
      }
      this.$refs.repo_come_proy_camp_regi_grid_glob.endupdate()
      this.$refs.repo_come_proy_camp_regi_grid_cons.beginupdate()
      if (this.columna === '0') {
        if (this.variable === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_terc_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_cuar_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('capi_repr')
        }
        if (this.variable === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_segu_porc',
          )
        }
        if (this.variable === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pegs_segu')
        }
        if (this.variable === '3') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('rein_segu')
        }
        if (this.variable === '4') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('capi_repr')
        }
        if (this.variable === '6') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'cons_rete_segu',
          )
        }
      }
      if (this.columna === '1') {
        if (this.variable === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_terc_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_cuar_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('capi_repr')
        }
        if (this.variable === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_segu_porc',
          )
        }
        if (this.variable === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pegs_segu')
        }
        if (this.variable === '3') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('rein_segu')
        }
        if (this.variable === '4') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn('capi_repr')
        }
        if (this.variable === '6') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.hidecolumn(
            'cons_rete_segu',
          )
        }
      }
      if (this.columna === '2') {
        if (this.variable === '0') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_terc_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_cuar_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_repr')
        }
        if (this.variable === '1') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_tota_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_segu_porc',
          )
        }
        if (this.variable === '2') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_obje_pedi',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('acti_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_porc_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'acti_porc_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_segu')
        }
        if (this.variable === '3') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_rete_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_segu_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_segu')
        }
        if (this.variable === '4') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_cant',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_segu',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_prim_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'pedi_inco_segu_porc',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('rein_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn('capi_repr')
        }
        if (this.variable === '6') {
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_obje',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_prim',
          )
          this.$refs.repo_come_proy_camp_regi_grid_cons.showcolumn(
            'cons_rete_segu',
          )
        }
      }
      this.$refs.repo_come_proy_camp_regi_grid_cons.endupdate()
    },
    repo_come_proy_camp_regi_pedi_tota_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_tota_cant)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pedi_tota_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)
      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pedi_tota_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_tota_cant)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pedi_tota_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pedi_inco_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_inco_cant)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pedi_inco_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pedi_inco_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_inco_cant)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pedi_inco_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pedi_rete_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_rete_cant)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pedi_rete_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pedi_rete_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_rete_cant)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pedi_rete_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_acti_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.acti_obje_pedi)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.acti_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_acti_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.acti_obje_pedi)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.acti_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_cons_rete_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.cons_rete_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.cons_rete_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_cons_rete_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.cons_rete_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.cons_rete_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pe21_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pe21_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pe21_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pe21_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pe21_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pe21_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pe42_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pe42_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pe42_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pe42_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pe42_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pe42_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pe63_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pe63_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pe63_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pe63_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pe63_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pe63_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pegs_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pegs_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pegs_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pegs_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pegs_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pegs_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_rein_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.rein_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.rein_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_rein_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.rein_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.rein_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_capi_obje_clas(row, columnfield, value) {
      if (value <= 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pedi_tota_prim_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_tota_cant)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pedi_tota_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)
      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pedi_tota_segu_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_tota_cant)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pedi_tota_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pedi_inco_prim_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_inco_cant)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pedi_inco_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pedi_inco_segu_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_inco_cant)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pedi_inco_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pedi_rete_prim_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_rete_cant)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pedi_rete_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pedi_rete_segu_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_rete_cant)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pedi_rete_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_acti_prim_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.acti_obje_pedi)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.acti_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_acti_segu_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.acti_obje_pedi)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.acti_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_cons_rete_prim_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.cons_rete_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.cons_rete_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_cons_rete_segu_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.cons_rete_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.cons_rete_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pe21_prim_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pe21_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pe21_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pe21_segu_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pe21_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pe21_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pe42_prim_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pe42_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pe42_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pe42_segu_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pe42_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pe42_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pe63_prim_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pe63_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pe63_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pe63_segu_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pe63_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pe63_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pegs_prim_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pegs_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pegs_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_pegs_segu_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pegs_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.pegs_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_rein_prim_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.rein_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.rein_prim)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_rein_segu_clas_cons(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_regi_grid_cons.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.rein_obje)
      // eslint-disable-next-line
      const dataProy = parseInt(dataRecord.rein_segu)
      let porcProy = 100 * (dataProy / dataObje)
      porcProy = parseFloat(porcProy).toFixed(2)

      if (dataObje === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (dataProy === 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px;">${value}</div>`
      }
      if (porcProy >= 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #00c602 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      if (porcProy >= 80 && porcProy < 100) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ecaf00 ; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_capi_obje_clas_cons(row, columnfield, value) {
      if (value <= 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 5px; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_regi_limp() {
      this.objetivoIncorporacion = '0'
      this.objetivoIncorporacionProyeccion = '0'
      this.porcentajeObjetivoIncorporacionProyeccion = '0.00'
      this.objetivoIncorporacionReproyeccion = '0'
      this.porcentajeObjetivoIncorporacionReproyeccion = '0.00'
      this.objetivoRetencion = '0'
      this.objetivoRetencionProyeccion = '0'
      this.porcentajeObjetivoRetencionProyeccion = '0.00'
      this.objetivoRetencionReproyeccion = '0'
      this.porcentajeObjetivoRetencionReproyeccion = '0.00'
      this.objetivoActividad = '0.00'
      this.objetivoActividadProyeccion = '0.00'
      this.porcentajeObjetivoActividadProyeccion = '0.00'
      this.objetivoActividadReproyeccion = '0.00'
      this.porcentajeObjetivoActividadReproyeccion = '0.00'
      this.codigoCampana = '0'
      this.codigoRegion = '0'
      this.$refs.repo_come_proy_camp_regi_grid_glob.clear()
      this.$refs.repo_come_proy_camp_regi_grid_glob.clearselection()
      this.$refs.repo_come_proy_camp_regi_grid_cons.clear()
      this.$refs.repo_come_proy_camp_regi_grid_cons.clearselection()
    },
    async repo_come_proy_camp_regi_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_proy_camp_regi',
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
    async repo_come_proy_camp_regi_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_proy_camp_regi_limp()
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
      } else if (this.seleccionRegion === null || this.seleccionRegion === 0) {
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
              text: 'Campo región es obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        this.codigoCampana = this.seleccionCampana
        this.codigoRegion = this.seleccionRegion
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_proy_camp_regi/proy_camp_regi_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.codigoCampana,
              codi_area: this.codigoRegion,
              codi_colu: this.columna,
            },
          })
          this.objetivoIncorporacion = await servicio.data.obje_inco
          this.objetivoIncorporacionProyeccion = await servicio.data
            .obje_inco_proy
          this.porcentajeObjetivoIncorporacionProyeccion = await servicio.data
            .obje_inco_proy_porc
          this.objetivoIncorporacionReproyeccion = await servicio.data
            .obje_inco_repr
          this.porcentajeObjetivoIncorporacionReproyeccion = await servicio
            .data.obje_inco_repr_porc

          this.objetivoRetencion = await servicio.data.obje_rete
          this.objetivoRetencionProyeccion = await servicio.data
            .obje_rete_proy
          this.porcentajeObjetivoRetencionProyeccion = await servicio.data
            .obje_rete_proy_porc
          this.objetivoRetencionReproyeccion = await servicio.data
            .obje_rete_repr
          this.porcentajeObjetivoRetencionReproyeccion = await servicio.data
            .obje_rete_repr_porc

          this.objetivoActividad = await servicio.data.obje_acti
          this.objetivoActividadProyeccion = await servicio.data
            .obje_acti_proy
          this.porcentajeObjetivoActividadProyeccion = await servicio.data
            .obje_acti_proy_porc
          this.objetivoActividadReproyeccion = await servicio.data
            .obje_acti_repr
          this.porcentajeObjetivoActividadReproyeccion = await servicio.data
            .obje_acti_repr_porc

          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_proy_camp_regi_grid_glob.updatebounddata(
            'cells',
          )

          this.sourceConsolidado.localdata = await servicio.data.data_cons
          this.sourceConsolidado.datatype = 'json'
          this.$refs.repo_come_proy_camp_regi_grid_cons.updatebounddata(
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
    async repo_come_proy_camp_regi_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_proy_camp_regi_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/repo_come_proy_camp_regi/proy_camp_regi_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              obje_inco: this.objetivoIncorporacion,
              obje_inco_proy: this.objetivoIncorporacionProyeccion,
              obje_inco_proy_porc: this
                .porcentajeObjetivoIncorporacionProyeccion,
              obje_inco_repr: this.objetivoIncorporacionReproyeccion,
              obje_inco_repr_porc: this
                .porcentajeObjetivoIncorporacionReproyeccion,
              obje_rete: this.objetivoRetencion,
              obje_rete_proy: this.objetivoRetencionProyeccion,
              obje_rete_proy_porc: this.porcentajeObjetivoRetencionProyeccion,
              obje_rete_repr: this.objetivoRetencionReproyeccion,
              obje_rete_repr_porc: this.porcentajeObjetivoRetencionReproyeccion,
              obje_acti: this.objetivoActividad,
              obje_acti_proy: this.objetivoActividadProyeccion,
              obje_acti_proy_porc: this.porcentajeObjetivoActividadProyeccion,
              obje_acti_repr: this.objetivoActividadReproyeccion,
              obje_acti_repr_porc: this.porcentajeObjetivoActividadReproyeccion,
              data_glob: this.$refs.repo_come_proy_camp_regi_grid_glob.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_esta: this.$refs.repo_come_proy_camp_regi_grid_glob.getstate(),
              data_cons: this.$refs.repo_come_proy_camp_regi_grid_cons.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_esta_cons: this.$refs.repo_come_proy_camp_regi_grid_cons.getstate(),
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
