<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_proy_camp_gene()"
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
        @click="repo_come_proy_camp_regi()"
      >
        <feather-icon
          icon="SaveIcon"
          class="mr-50"
        />
        <span class="">
          Grabar
        </span>
      </b-button>
      <b-button
        variant="danger"
        block
        @click="repo_come_proy_camp_limp()"
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
        @click="repo_come_proy_camp_gene()"
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
        @click="repo_come_proy_camp_regi()"
      >
        <feather-icon
          icon="SaveIcon"
          class="mr-50"
        />
        <span class="">
          Grabar
        </span>
      </b-button>
      <b-button
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="repo_come_proy_camp_exce()"
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
        @click="repo_come_proy_camp_limp()"
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
              cols="3"
              class="text-center"
            >
              <span class="font-weight-bolder">Concepto</span></b-col>
            <b-col
              cols="3"
              class="text-center"
            >
              <span class="font-weight-bolder">Obj. Zona</span></b-col>
            <b-col
              cols="3"
              class="text-center"
            >
              <span class="font-weight-bolder">Obj. Proyec.</span></b-col>
            <b-col
              cols="3"
              class="text-center"
            >
              <span class="font-weight-bolder">Reproyección</span></b-col>
          </b-row>
          <b-row class="mt-1">
            <b-col cols="3">
              <span class="font-weight-normal">Lima - Provincia</span></b-col>
            <b-col
              cols="3"
              class="text-center"
            >
              <span class="font-weight-normal">{{ limaProvincia }}</span></b-col>
            <b-col cols="3" />
            <b-col cols="3" />
          </b-row>
          <b-row class="mt-1">
            <b-col cols="3">
              <span class="font-weight-normal">Objetivo Incorporación</span>
            </b-col>
            <b-col
              cols="3"
              class="text-center"
            >
              <span class="font-weight-normal">{{ objetivoIncorporacion }}</span>
            </b-col>
            <b-col
              cols="3"
              class="text-center"
            >
              <span class="font-weight-normal">{{ objetivoIncorporacionProyeccion }}</span>
            </b-col>
            <b-col
              cols="3"
              class="text-center"
            >
              <span class="font-weight-normal">{{ objetivoIncorporacionReproyeccion }}</span>
            </b-col>
          </b-row>
          <b-row class="mt-1">
            <b-col cols="3">
              <span class="font-weight-normal">Objetivo Retención</span>
            </b-col>
            <b-col
              cols="3"
              class="text-center"
            >
              <span class="font-weight-normal">{{ objetivoRetencion }}</span>
            </b-col>
            <b-col
              cols="3"
              class="text-center"
            >
              <span class="font-weight-normal">{{ objetivoRetencionProyeccion }}</span>
            </b-col>
            <b-col
              cols="3"
              class="text-center"
            >
              <span class="font-weight-normal">{{ objetivoRetencionReproyeccion }}</span>
            </b-col>
          </b-row>
          <b-row class="mt-1">
            <b-col cols="3">
              <span class="font-weight-normal">Objetivo % Actividad</span>
            </b-col>
            <b-col
              cols="3"
              class="text-center"
            >
              <span class="font-weight-normal">{{ objetivoActividad }}</span>
            </b-col>
            <b-col
              cols="3"
              class="text-center"
            >
              <span class="font-weight-normal">{{ objetivoActividadProyeccion }}</span>
            </b-col>
            <b-col
              cols="3"
              class="text-center"
            >
              <span class="font-weight-normal">{{ objetivoActividadReproyeccion }}</span>
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
              Obj. Form. Éxito
            </b-form-radio>
            <b-form-radio
              v-model="columna"
              name="columna"
              value="1"
              class="custom-control-primary"
              @change="onChangeColumna()"
            >
              Objetivo Proyección
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
        <b-card>
          <JqxGrid
            ref="repo_come_proy_camp_grid_glob"
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
            :editable="true"
            :editmode="'click'"
            :showstatusbar="true"
            :showaggregates="true"
            :scrollmode="'logical'"
            @cellendedit="repo_come_proy_camp_grid_glob_edit($event)"
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

let sumaNumePedi = 0
let sumaTotaIngr = 0
let sumaTotaRein = 0
let sumaActiObjePedi = 0
let sumaActiInic = 0
let sumaActiPrim = 0
let sumaActiSegu = 0

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
      limaProvincia: '-',
      objetivoIncorporacion: '0',
      objetivoIncorporacionProyeccion: '0',
      objetivoIncorporacionReproyeccion: '0',
      objetivoRetencion: '0',
      objetivoRetencionProyeccion: '0',
      objetivoRetencionReproyeccion: '0',
      objetivoActividad: '0.00',
      objetivoActividadProyeccion: '0.00',
      objetivoActividadReproyeccion: '0.00',
      variable: '0',
      columna: '0',
      codigoCampana: '0',
      codigoZona: '0',
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
        { name: 'codi_cort', type: 'string' },
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'nomb_vend', type: 'string' },
        { name: 'acti_inic', type: 'number' },
        { name: 'pedi_tota_obje_ocul', type: 'number' },
        { name: 'pedi_tota_prim_ocul', type: 'number' },
        { name: 'pedi_tota_segu_ocul', type: 'number' },
        { name: 'pedi_tota_obje', type: 'number' },
        { name: 'pedi_tota_prim', type: 'number' },
        { name: 'pedi_tota_segu', type: 'number' },
        { name: 'pedi_inco_obje_ocul', type: 'number' },
        { name: 'pedi_inco_prim_ocul', type: 'number' },
        { name: 'pedi_inco_segu_ocul', type: 'number' },
        { name: 'pedi_inco_obje', type: 'number' },
        { name: 'pedi_inco_prim', type: 'number' },
        { name: 'pedi_inco_segu', type: 'number' },
        { name: 'pedi_rete_obje_ocul', type: 'number' },
        { name: 'pedi_rete_prim_ocul', type: 'number' },
        { name: 'pedi_rete_segu_ocul', type: 'number' },
        { name: 'pedi_rete_obje', type: 'number' },
        { name: 'pedi_rete_prim', type: 'number' },
        { name: 'pedi_rete_segu', type: 'number' },
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
        { name: 'nive_lide', type: 'string' },
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
    this.repo_come_proy_camp_visi()
  },
  created() {
    this.handleWindowResize()
    const userData = JSON.parse(localStorage.getItem('userData'))
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    const itemZona = JSON.parse(userData.zona)
    itemCampana = itemCampana.camp_sigu.slice(1, 7)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))
    itemZona.forEach(element => this.dataZona.push(element.codi_zona))
    this.seleccionCampana = itemCampana[0].codi_camp
    this.seleccionZona = itemZona[0].codi_zona
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
          text: 'Sector',
          dataField: 'codi_sect',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned,
        },
        {
          text: 'Lider',
          dataField: 'nomb_vend',
          width: '250',
          align: 'center',
          cellsalign: 'left',
          editable: false,
          pinned,
        },
        {
          text: 'Act. Inic.',
          dataField: 'acti_inic',
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
                // eslint-disable-next-line
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'pedi tota obje',
          dataField: 'pedi_tota_obje_ocul',
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
                // eslint-disable-next-line
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'pedi tota prim',
          dataField: 'pedi_tota_prim_ocul',
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
                // eslint-disable-next-line
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'pedi tota segu',
          dataField: 'pedi_tota_segu_ocul',
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
                // eslint-disable-next-line
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Obje. Form. Exito',
          dataField: 'pedi_tota_obje',
          width: '140',
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
                // eslint-disable-next-line
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Obj. Proyección',
          dataField: 'pedi_tota_prim',
          hidden: true,
          width: '130',
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
                // eslint-disable-next-line
                return aggregatedValue
              },
            },
          ],
          cellsrenderer: this.repo_come_proy_camp_pedi_tota_prim_clas,
        },
        {
          text: 'Reproyección',
          dataField: 'pedi_tota_segu',
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
                // eslint-disable-next-line
                return aggregatedValue
              },
            },
          ],
          cellsrenderer: this.repo_come_proy_camp_pedi_tota_segu_clas,
        },
        {
          text: 'pedi inco obje',
          dataField: 'pedi_inco_obje_ocul',
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
                // eslint-disable-next-line
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'pedi inco prim',
          dataField: 'pedi_inco_prim_ocul',
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
                // eslint-disable-next-line
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'pedi inco segu',
          dataField: 'pedi_inco_segu_ocul',
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
                // eslint-disable-next-line
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Obje. Form. Exito',
          dataField: 'pedi_inco_obje',
          width: '140',
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
                // eslint-disable-next-line
                return aggregatedValue
              },
            },
          ],
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
        },
        {
          text: 'Obj. Proyección',
          dataField: 'pedi_inco_prim',
          hidden: true,
          width: '130',
          align: 'center',
          cellsalign: 'center',
          editable: true,
          pinned: false,
          columngroup: 'inco',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                // eslint-disable-next-line
                return aggregatedValue
              },
            },
          ],
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellsrenderer: this.repo_come_proy_camp_pedi_inco_prim_clas,
          cellclassname() {
            return 'text-black bg-primary'
          },
        },
        {
          text: 'Reproyección',
          dataField: 'pedi_inco_segu',
          hidden: true,
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: true,
          pinned: false,
          columngroup: 'inco',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                // eslint-disable-next-line
                return aggregatedValue
              },
            },
          ],
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellsrenderer: this.repo_come_proy_camp_pedi_inco_segu_clas,
          cellclassname() {
            return 'text-black bg-primary'
          },
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
                // eslint-disable-next-line
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
                // eslint-disable-next-line
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
                // eslint-disable-next-line
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Obje. Form. Exito',
          datafield: 'pedi_rete_obje',
          width: '140',
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
          width: '130',
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
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellsrenderer: this.repo_come_proy_camp_pedi_rete_prim_clas,
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
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellsrenderer: this.repo_come_proy_camp_pedi_rete_segu_clas,
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
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
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

                let total = 0
                // eslint-disable-next-line
                if (
                  // eslint-disable-next-line radix
                  parseInt(sumaNumePedi)
                    // eslint-disable-next-line radix
                    - parseInt(sumaTotaIngr)
                    // eslint-disable-next-line radix
                    - parseInt(sumaTotaRein)
                    > 0
                  // eslint-disable-next-line radix
                  && parseInt(sumaActiInic) > 0
                ) {
                  // eslint-disable-next-line
                  total =
                    100
                    // eslint-disable-next-line radix
                    * ((parseInt(sumaNumePedi)
                      // eslint-disable-next-line radix
                      - parseInt(sumaTotaIngr)
                      // eslint-disable-next-line radix
                      - parseInt(sumaTotaRein))
                      // eslint-disable-next-line radix
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
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaActiInic = 0
                  sumaActiObjePedi = 0
                }
                sumaActiInic += record.acti_inic
                sumaActiObjePedi += record.acti_obje_pedi
                let total = 0
                // eslint-disable-next-line
                if (
                  // eslint-disable-next-line radix
                  parseInt(sumaActiInic) > 0
                  // eslint-disable-next-line radix
                  && parseInt(sumaActiObjePedi) > 0
                ) {
                  // eslint-disable-next-line
                  total =
                    100
                    * (parseFloat(sumaActiObjePedi) / parseFloat(sumaActiInic))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
        },
        {
          text: 'Obje. %',
          datafield: 'acti_obje',
          width: '140',
          align: 'center',
          cellsalign: 'center',
          editable: true,
          pinned: false,
          columngroup: 'acti',
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaActiInic = 0
                  sumaActiObjePedi = 0
                }
                sumaActiInic += record.acti_inic
                sumaActiObjePedi += record.acti_obje_pedi
                let total = 0
                // eslint-disable-next-line
                if (
                  // eslint-disable-next-line radix
                  parseInt(sumaActiInic) > 0
                  && parseFloat(sumaActiObjePedi) > 0
                ) {
                  // eslint-disable-next-line
                  total =
                    100
                    // eslint-disable-next-line radix
                    * (parseFloat(sumaActiObjePedi) / parseInt(sumaActiInic))
                }
                total = parseFloat(total).toFixed(2)
                return total
              },
            },
          ],
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellclassname() {
            return 'text-black bg-primary'
          },
        },
        {
          text: 'Obje. Pedi.',
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
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaActiPrim = 0
                  sumaActiInic = 0
                }
                sumaActiPrim += record.acti_prim
                sumaActiInic += record.acti_inic
                let total = 0
                // eslint-disable-next-line
                if (parseInt(sumaActiPrim) > 0 && parseInt(sumaActiInic) > 0) {
                  // eslint-disable-next-line
                  total =
                    100 * (parseFloat(sumaActiPrim) / parseFloat(sumaActiInic))
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
          width: '130',
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
          cellsrenderer: this.repo_come_proy_camp_acti_prim_clas,
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
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaActiSegu = 0
                  sumaActiInic = 0
                }
                sumaActiSegu += record.acti_segu
                sumaActiInic += record.acti_inic
                let total = 0
                if (
                  // eslint-disable-next-line radix
                  parseInt(sumaActiSegu) > 0
                  && parseFloat(sumaActiInic) > 0
                ) {
                  // eslint-disable-next-line
                  total =
                    // eslint-disable-next-line radix
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
          cellsrenderer: this.repo_come_proy_camp_acti_segu_clas,
        },
        {
          text: 'Rete. Camp. Ante.',
          datafield: 'cons_rete_camp_ante',
          width: '150',
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
          width: '130',
          align: 'center',
          cellsalign: 'center',
          editable: true,
          pinned: false,
          columngroup: 'cons_rete',
          cellsformat: 'n',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function(aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue += currentValue
                return aggregatedValue
              },
            },
          ],
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellsrenderer: this.repo_come_proy_camp_cons_rete_prim_clas,
          cellclassname() {
            return 'text-black bg-primary'
          },
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
          editable: true,
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
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellsrenderer: this.repo_come_proy_camp_cons_rete_segu_clas,
          cellclassname() {
            return 'text-black bg-primary'
          },
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
          width: '130',
          align: 'center',
          cellsalign: 'center',
          editable: true,
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
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellsrenderer: this.repo_come_proy_camp_pe21_prim_clas,
          cellclassname() {
            return 'text-black bg-primary'
          },
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
          editable: true,
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
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellsrenderer: this.repo_come_proy_camp_pe21_segu_clas,
          cellclassname() {
            return 'text-black bg-primary'
          },
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
          width: '130',
          align: 'center',
          cellsalign: 'center',
          editable: true,
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
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellsrenderer: this.repo_come_proy_camp_pe42_prim_clas,
          cellclassname() {
            return 'text-black bg-primary'
          },
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
          editable: true,
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
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellsrenderer: this.repo_come_proy_camp_pe42_segu_clas,
          cellclassname() {
            return 'text-black bg-primary'
          },
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
          width: '130',
          align: 'center',
          cellsalign: 'center',
          editable: true,
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
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellsrenderer: this.repo_come_proy_camp_pe63_prim_clas,
          cellclassname() {
            return 'text-black bg-primary'
          },
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
          editable: true,
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
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellsrenderer: this.repo_come_proy_camp_pe63_segu_clas,
          cellclassname() {
            return 'text-black bg-primary'
          },
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
          width: '130',
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
          cellsrenderer: this.repo_come_proy_camp_pegs_prim_clas,
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
          cellsrenderer: this.repo_come_proy_camp_pegs_segu_clas,
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
          width: '130',
          align: 'center',
          cellsalign: 'center',
          editable: true,
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
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellsrenderer: this.repo_come_proy_camp_rein_prim_clas,
          cellclassname() {
            return 'text-black bg-primary'
          },
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
          editable: true,
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
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return false
            }
            return true
          },
          cellsrenderer: this.repo_come_proy_camp_rein_segu_clas,
          cellclassname() {
            return 'text-black bg-primary'
          },
        },
        {
          text: 'Obj. Proyección',
          datafield: 'capi_obje',
          width: '130',
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
          cellsrenderer: this.repo_come_proy_camp_capi_obje_clas,
        },
        {
          text: 'Reproyección',
          datafield: 'capi_repr',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
          hidden: true,
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
          cellsrenderer: this.repo_come_proy_camp_capi_obje_clas,
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
          text: 'Cobranza 88%(te puedes quedar)',
          datafield: 'cobr_colc',
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
          text: 'Nivel Lider Obje. Proy.',
          datafield: 'nive_lide',
          width: '180',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: false,
        },
      ]
      if (typeof this.$refs.repo_come_proy_camp_grid_glob !== 'undefined') {
        if (window.innerHeight - 300 < 350) {
          this.height = '350px'
        } else {
          this.height = `${window.innerHeight - 300}px`
        }
        this.$refs.repo_come_proy_camp_grid_glob.columns = this.columnsGlobal
        this.$refs.repo_come_proy_camp_grid_glob.height = this.height
      }
    },
    setCampana(value) {
      this.seleccionCampana = value
    },
    setZona(value) {
      this.seleccionZona = value
    },
    onChangeVariable() {
      this.$refs.repo_come_proy_camp_grid_glob.beginupdate()
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_tota_obje')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_tota_prim')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_tota_segu')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_inco_obje')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_inco_prim')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_inco_segu')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_rete_obje')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_rete_prim')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_rete_segu')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_camp_ante')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_obje')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_obje_pedi')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_porc_prim')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_prim')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_porc_segu')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_segu')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_camp_ante')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_obje')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_prim')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_segu')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_segu_camp_ante')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_segu_obje')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_terc_camp_ante')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_terc_obje')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_cuar_camp_ante')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_cuar_obje')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe21')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe21_obje')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe21_prim')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe21_segu')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe42')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe42_obje')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe42_prim')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe42_segu')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_obje')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_prim')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_segu')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pegs')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pegs_obje')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pegs_prim')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pegs_segu')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('rein')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('rein_obje')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('rein_prim')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('rein_segu')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('capi_obje')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('capi_repr')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('tota_vent')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cobr')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cobr_colc')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('co92')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('co92_colc')
      this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('nive_lide')
      if (this.variable === '0') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_camp_ante')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje_pedi')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_terc_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_cuar_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_obje')
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_camp_ante')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje_pedi')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_porc_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_terc_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_cuar_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_obje')
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_camp_ante')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje_pedi')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_porc_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_porc_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_terc_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_cuar_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_repr')
        }
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('tota_vent')
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cobr')
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cobr_colc')
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('co92')
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('co92_colc')
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('nive_lide')
      }
      if (this.variable === '1') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_prim')
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_segu')
        }
      }
      if (this.variable === '2') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_camp_ante')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje_pedi')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_camp_ante')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje_pedi')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_porc_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_prim')
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_camp_ante')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje_pedi')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_porc_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_porc_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_segu')
        }
      }
      if (this.variable === '3') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_prim')
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_segu')
        }
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('nive_lide')
      }
      if (this.variable === '4') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_obje')
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_obje')
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_repr')
        }
      }
      if (this.variable === '5') {
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('tota_vent')
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cobr')
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cobr_colc')
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('co92')
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('co92_colc')
      }
      if (this.variable === '6') {
        if (this.columna === '0') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
        }
        if (this.columna === '1') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
        }
        if (this.columna === '2') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_segu')
        }
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
          'cons_segu_camp_ante',
        )
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
          'cons_terc_camp_ante',
        )
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_terc_obje')
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
          'cons_cuar_camp_ante',
        )
        this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_cuar_obje')
      }
      this.$refs.repo_come_proy_camp_grid_glob.endupdate()
    },
    onChangeColumna() {
      this.$refs.repo_come_proy_camp_grid_glob.beginupdate()
      const rows = this.$refs.repo_come_proy_camp_grid_glob.getboundrows()
      let row = 0
      let totaSaliProy = 0
      let totaIncoProy = 0
      let totaReinProy = 0
      let totaSaliRepr = 0
      let totaIncoRepr = 0
      let totaReinRepr = 0
      let pediReteObje = 0
      let pediRetePrim = 0
      let pediReteSegu = 0
      let pe63 = 0
      let pe63Prim = 0
      let pe63Segu = 0
      let pe63Obje = 0
      let reinObje = 0
      let reinPrim = 0
      let reinSegu = 0
      let pediIncoObje = 0
      let pediIncoPrim = 0
      let pediIncoSegu = 0
      let factRete = '0'
      let niveLide = 'Nivel 0'
      let capiObje = 0
      let capiRepr = 0
      for (let i = 0; i < rows.length; i += 1) {
        row = rows[i]
        totaSaliProy = 0
        totaIncoProy = 0
        totaReinProy = 0
        totaSaliRepr = 0
        totaIncoRepr = 0
        totaReinRepr = 0
        // eslint-disable-next-line
        pediReteObje = parseInt(row.pedi_rete_obje)
        // eslint-disable-next-line
        pediRetePrim = parseInt(row.pedi_rete_prim)
        // eslint-disable-next-line
        pediReteSegu = parseInt(row.pedi_rete_segu)
        // eslint-disable-next-line
        pe63 = parseInt(row.pe63)
        // eslint-disable-next-line
        pe63Prim = parseInt(row.pe63_prim)
        // eslint-disable-next-line
        pe63Segu = parseInt(row.pe63_segu)
        // eslint-disable-next-line
        pe63Obje = parseInt(row.pe63_obje)
        // eslint-disable-next-line
        reinObje = parseInt(row.rein_obje)
        // eslint-disable-next-line
        reinPrim = parseInt(row.rein_prim)
        // eslint-disable-next-line
        reinSegu = parseInt(row.rein_segu)
        // eslint-disable-next-line
        pediIncoObje = parseInt(row.pedi_inco_obje)
        // eslint-disable-next-line
        pediIncoPrim = parseInt(row.pedi_inco_prim)
        // eslint-disable-next-line
        pediIncoSegu = parseInt(row.pedi_inco_segu)
        factRete = '0'
        if (this.columna === '2') {
          factRete = pediReteSegu
          totaSaliRepr = pe63Segu
          totaIncoRepr = pediIncoSegu
          totaReinRepr = reinSegu

          totaSaliProy = pe63Prim
          totaIncoProy = pediIncoPrim
          totaReinProy = reinPrim
        }
        if (this.columna === '1') {
          factRete = pediRetePrim
          totaSaliProy = pe63Prim
          totaIncoProy = pediIncoPrim
          totaReinProy = reinPrim
        }
        if (this.columna === '0') {
          factRete = pediReteObje
          totaSaliProy = pe63Obje
          totaIncoProy = pediIncoObje
          totaReinProy = reinObje
        }
        if (pe63 > 0) {
          totaSaliProy = pe63 - totaSaliProy
          totaSaliRepr = pe63 - totaSaliRepr
        }
        if (totaSaliProy < 0) {
          totaSaliProy = 0
        }
        if (totaSaliRepr < 0) {
          totaSaliRepr = 0
        }
        // eslint-disable-next-line
        factRete = parseInt(factRete)
        niveLide = 'Nivel 0'
        if (this.limaProvincia === 'Lima') {
          if (factRete < 11) {
            niveLide = 'Nivel 0'
          }
          if (factRete >= 11 && factRete < 26) {
            niveLide = 'Nivel 1'
          }
          if (factRete >= 26 && factRete < 36) {
            niveLide = 'Nivel 2'
          }
          if (factRete >= 36 && factRete < 51) {
            niveLide = 'Nivel 3'
          }
          if (factRete >= 51 && factRete < 71) {
            niveLide = 'Nivel 4'
          }
          if (factRete >= 71) {
            niveLide = 'Nivel 5'
          }
        }
        if (this.limaProvincia === 'Provincia') {
          if (factRete < 11) {
            niveLide = 'Nivel 0'
          }
          if (factRete >= 11 && factRete < 26) {
            niveLide = 'Nivel 1'
          }
          if (factRete >= 26 && factRete < 41) {
            niveLide = 'Nivel 2'
          }
          if (factRete >= 41 && factRete < 61) {
            niveLide = 'Nivel 3'
          }
          if (factRete >= 61 && factRete < 86) {
            niveLide = 'Nivel 4'
          }
          if (factRete >= 86) {
            niveLide = 'Nivel 5'
          }
        }
        this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
          i,
          'nive_lide',
          niveLide,
        )
        // eslint-disable-next-line
        totaSaliProy = parseInt(totaSaliProy)
        // eslint-disable-next-line
        totaIncoProy = parseInt(totaIncoProy)
        // eslint-disable-next-line
        totaReinProy = parseInt(totaReinProy)
        capiObje = totaIncoProy + totaReinProy - totaSaliProy
        // eslint-disable-next-line
        capiObje = parseInt(capiObje)
        // eslint-disable-next-line
        totaSaliRepr = parseInt(totaSaliRepr)
        // eslint-disable-next-line
        totaIncoRepr = parseInt(totaIncoRepr)
        // eslint-disable-next-line
        totaReinRepr = parseInt(totaReinRepr)
        capiRepr = totaIncoRepr + totaReinRepr - totaSaliRepr
        // eslint-disable-next-line
        capiRepr = parseInt(capiRepr)

        this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
          i,
          'capi_repr',
          capiRepr,
        )
        this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
          i,
          'capi_obje',
          capiObje,
        )
      }
      if (this.columna === '0') {
        if (this.variable === '0') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_tota_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_tota_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_inco_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_camp_ante')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje_pedi')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_porc_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_porc_segu')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_terc_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_cuar_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('rein_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('rein_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('capi_repr')
        }
        if (this.variable === '1') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_tota_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_tota_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_inco_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_rete_segu')
        }
        if (this.variable === '2') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_camp_ante')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje_pedi')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_segu')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_porc_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_porc_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pegs_segu')
        }
        if (this.variable === '3') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('rein_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('rein_segu')
        }
        if (this.variable === '4') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_inco_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('rein_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('rein_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('capi_repr')
        }
        if (this.variable === '6') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_segu')
        }
      }
      if (this.columna === '1') {
        if (this.variable === '0') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_tota_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_inco_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_camp_ante')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje_pedi')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_porc_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_porc_segu')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_terc_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_cuar_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('rein_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('capi_repr')
        }
        if (this.variable === '1') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_tota_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_inco_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_rete_segu')
        }
        if (this.variable === '2') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_camp_ante')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje_pedi')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_porc_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('acti_porc_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pegs_segu')
        }
        if (this.variable === '3') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('rein_segu')
        }
        if (this.variable === '4') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pedi_inco_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('rein_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('capi_repr')
        }
        if (this.variable === '6') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.hidecolumn('cons_rete_segu')
        }
      }
      if (this.columna === '2') {
        if (this.variable === '0') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_camp_ante')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje_pedi')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_porc_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_porc_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_terc_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_terc_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_cuar_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_cuar_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_repr')
        }
        if (this.variable === '1') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_tota_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_segu')
        }
        if (this.variable === '2') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_camp_ante')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_obje_pedi')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_porc_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('acti_porc_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_segu')
        }
        if (this.variable === '3') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_segu_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_segu_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe21_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe42_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pegs_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_segu')
        }
        if (this.variable === '4') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pedi_inco_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('rein_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('pe63_segu')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('capi_repr')
        }
        if (this.variable === '6') {
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn(
            'cons_rete_camp_ante',
          )
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_obje')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_prim')
          this.$refs.repo_come_proy_camp_grid_glob.showcolumn('cons_rete_segu')
        }
      }
      this.$refs.repo_come_proy_camp_grid_glob.endupdate()
    },
    repo_come_proy_camp_pedi_tota_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_tota_obje)
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
    repo_come_proy_camp_pedi_tota_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_tota_obje)
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
    repo_come_proy_camp_pedi_inco_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_inco_obje)
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
    repo_come_proy_camp_pedi_inco_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_inco_obje)
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
    repo_come_proy_camp_pedi_rete_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_rete_obje)
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
    repo_come_proy_camp_pedi_rete_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
        row,
      )
      // eslint-disable-next-line
      const dataObje = parseInt(dataRecord.pedi_rete_obje)
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
    repo_come_proy_camp_acti_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
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
    repo_come_proy_camp_acti_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
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
    repo_come_proy_camp_cons_rete_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
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
    repo_come_proy_camp_cons_rete_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
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
    repo_come_proy_camp_pe21_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
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
    repo_come_proy_camp_pe21_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
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
    repo_come_proy_camp_pe42_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
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
    repo_come_proy_camp_pe42_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
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
    repo_come_proy_camp_pe63_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
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
    repo_come_proy_camp_pe63_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
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
    repo_come_proy_camp_pegs_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
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
    repo_come_proy_camp_pegs_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
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
    repo_come_proy_camp_rein_prim_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
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
    repo_come_proy_camp_rein_segu_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_proy_camp_grid_glob.getrowdata(
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
    repo_come_proy_camp_capi_obje_clas(row, columnfield, value) {
      if (value <= 0) {
        return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; color: #ff3f39; font-weight: bold; font-size: 1.15rem;">${value}</div>`
      }
      return `<div class = "jqx-grid-cell-middle-align" style="margin-top: 6.5px; font-weight: bold; font-size: 1.15rem;">${value}</div>`
    },
    repo_come_proy_camp_limp() {
      this.limaProvincia = '-'
      this.objetivoIncorporacion = '0'
      this.objetivoIncorporacionProyeccion = '0'
      this.objetivoIncorporacionReproyeccion = '0'
      this.objetivoRetencion = '0'
      this.objetivoRetencionProyeccion = '0'
      this.objetivoRetencionReproyeccion = '0'
      this.objetivoActividad = '0.00'
      this.objetivoActividadProyeccion = '0.00'
      this.objetivoActividadReproyeccion = '0.00'
      this.codigoCampana = '0'
      this.codigoZona = '0'
      this.$refs.repo_come_proy_camp_grid_glob.clear()
      this.$refs.repo_come_proy_camp_grid_glob.clearselection()
    },
    async repo_come_proy_camp_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_proy_camp',
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
    async repo_come_proy_camp_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_proy_camp_limp()
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
      } else if (
        this.seleccionZona === null
        || this.seleccionZona.length === 0
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
              text: 'Campo zona es obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        try {
          this.codigoCampana = this.seleccionCampana
          this.codigoZona = this.seleccionZona
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_proy_camp/proy_camp_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.codigoCampana,
              codi_zona: this.codigoZona,
              codi_colu: this.columna,
            },
          })

          this.limaProvincia = await servicio.data.lima_prov

          this.objetivoIncorporacion = await servicio.data.obje_inco
          this.objetivoIncorporacionProyeccion = await servicio.data.obje_inco_proy
          this.objetivoIncorporacionReproyeccion = await servicio.data.obje_inco_repr

          this.objetivoRetencion = await servicio.data.obje_rete
          this.objetivoRetencionProyeccion = await servicio.data.obje_rete_proy
          this.objetivoRetencionReproyeccion = await servicio.data.obje_rete_repr

          this.objetivoActividad = await servicio.data.obje_acti
          this.objetivoActividadProyeccion = await servicio.data.obje_acti_proy
          this.objetivoActividadReproyeccion = await servicio.data.obje_acti_repr

          const fechProy = await servicio.data.fech_proy
          const fechRepr = await servicio.data.fech_repr

          if (fechProy === 'false') {
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pedi_inco_prim',
              'editable',
              false,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'cons_rete_prim',
              'editable',
              false,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pe21_prim',
              'editable',
              false,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pe42_prim',
              'editable',
              false,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pe63_prim',
              'editable',
              false,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pegs_prim',
              'editable',
              false,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'rein_prim',
              'editable',
              false,
            )
          } else {
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pedi_inco_prim',
              'editable',
              true,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'cons_rete_prim',
              'editable',
              true,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pe21_prim',
              'editable',
              true,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pe42_prim',
              'editable',
              true,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pe63_prim',
              'editable',
              true,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pegs_prim',
              'editable',
              false,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'rein_prim',
              'editable',
              true,
            )
          }
          if (fechRepr === 'false') {
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pedi_inco_segu',
              'editable',
              false,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'cons_rete_segu',
              'editable',
              false,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pe21_segu',
              'editable',
              false,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pe42_segu',
              'editable',
              false,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pe63_segu',
              'editable',
              false,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pegs_segu',
              'editable',
              false,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'rein_segu',
              'editable',
              false,
            )
          } else {
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pedi_inco_segu',
              'editable',
              true,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'cons_rete_segu',
              'editable',
              true,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pe21_segu',
              'editable',
              true,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pe42_segu',
              'editable',
              true,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pe63_segu',
              'editable',
              true,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'pegs_segu',
              'editable',
              false,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcolumnproperty(
              'rein_segu',
              'editable',
              true,
            )
          }
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_proy_camp_grid_glob.updatebounddata('cells')

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
    async repo_come_proy_camp_grid_glob_edit(event) {
      const { args } = event
      const columnDataField = args.datafield
      const rowIndex = args.rowindex
      const cellValue = args.value
      if (columnDataField === 'rein_prim') {
        let pe63 = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63',
        )
        let pe63Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_prim',
        )
        let pe63Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_segu',
        )
        let pe63Obje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_obje',
        )

        let reinObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_obje',
        )
        // eslint-disable-next-line
        let reinPrim = parseInt(cellValue)
        let reinSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_segu',
        )

        let pediIncoObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_obje',
        )
        let pediIncoPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_prim',
        )
        let pediIncoSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_segu',
        )
        let consSeguObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_segu_obje',
        )
        let consRetePrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_rete_prim',
        )
        let pe21Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe21_prim',
        )
        let pe42Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe42_prim',
        )
        if (!Number.isNaN(reinPrim)) {
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'rein_prim_ocul',
            reinPrim,
          )
          // eslint-disable-next-line
          pe63 = parseInt(pe63)
          // eslint-disable-next-line
          pe63Obje = parseInt(pe63Obje)
          // eslint-disable-next-line
          pe63Prim = parseInt(pe63Prim)
          // eslint-disable-next-line
          pe63Segu = parseInt(pe63Segu)
          // eslint-disable-next-line
          reinObje = parseInt(reinObje)
          // eslint-disable-next-line
          reinPrim = parseInt(reinPrim)
          // eslint-disable-next-line
          reinSegu = parseInt(reinSegu)
          // eslint-disable-next-line
          pediIncoObje = parseInt(pediIncoObje)
          // eslint-disable-next-line
          pediIncoPrim = parseInt(pediIncoPrim)
          // eslint-disable-next-line
          pediIncoSegu = parseInt(pediIncoSegu)
          let totaSali = 0
          let totaInco = 0
          let totaRein = 0

          if (this.columna === '2') {
            totaSali = pe63Segu
            totaInco = pediIncoSegu
            totaRein = reinSegu
          }
          if (this.columna === '1') {
            totaSali = pe63Prim
            totaInco = pediIncoPrim
            totaRein = reinPrim
          }
          if (this.columna === '0') {
            totaSali = pe63Obje
            totaInco = pediIncoObje
            totaRein = reinObje
          }
          if (pe63 > 0) {
            totaSali = pe63 - totaSali
          }

          if (totaSali < 0) {
            totaSali = 0
          }
          // eslint-disable-next-line
          consSeguObje = parseInt(consSeguObje)
          // eslint-disable-next-line
          consRetePrim = parseInt(consRetePrim)
          // eslint-disable-next-line
          pe21Prim = parseInt(pe21Prim)
          // eslint-disable-next-line
          pe42Prim = parseInt(pe42Prim)
          let pediRetePrim = consRetePrim
            + consSeguObje
            + pe21Prim
            + pe42Prim
            + pe63Prim
            + reinPrim
          // eslint-disable-next-line
          pediRetePrim = parseInt(pediRetePrim)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_prim_ocul',
            pediRetePrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_prim',
            pediRetePrim,
          )
          // eslint-disable-next-line
          totaSali = parseInt(totaSali)
          // eslint-disable-next-line
          totaInco = parseInt(totaInco)
          // eslint-disable-next-line
          totaRein = parseInt(totaRein)
          let capiObje = totaInco + totaRein - totaSali
          // eslint-disable-next-line
          capiObje = parseInt(capiObje)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'capi_obje',
            capiObje,
          )

          let pediReteObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_obje',
          )
          let pediReteSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_segu',
          )
          // eslint-disable-next-line
          pediIncoPrim = parseInt(pediIncoPrim)
          // eslint-disable-next-line
          pediReteObje = parseInt(pediReteObje)
          // eslint-disable-next-line
          pediReteSegu = parseInt(pediReteSegu)

          if (!Number.isNaN(pediRetePrim)) {
            let pediTotaPrim = pediIncoPrim + pediRetePrim
            // eslint-disable-next-line
            pediTotaPrim = parseInt(pediTotaPrim)
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_prim_ocul',
              pediTotaPrim,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_prim',
              pediTotaPrim,
            )
            let factRete = 0
            if (this.columna === '2') {
              if (pediReteSegu > 0) {
                factRete = pediReteSegu
              } else if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '1') {
              if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '0') {
              if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            // eslint-disable-next-line
            factRete = parseInt(factRete)
            let niveLide = 'Nivel 0'
            if (this.limaProvincia === 'Lima') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 36) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 36 && factRete < 51) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 51 && factRete < 71) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 71) {
                niveLide = 'Nivel 5'
              }
            }
            if (this.limaProvincia === 'Provincia') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 41) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 41 && factRete < 61) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 61 && factRete < 86) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 86) {
                niveLide = 'Nivel 5'
              }
            }

            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'nive_lide',
              niveLide,
            )
          }
        }
      }
      if (columnDataField === 'rein_segu') {
        let pe63 = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63',
        )
        let pe63Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_prim',
        )
        let pe63Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_segu',
        )
        let pe63Obje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_obje',
        )

        let reinObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_obje',
        )
        let reinPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_prim',
        )
        // eslint-disable-next-line
        let reinSegu = parseInt(cellValue)

        let pediIncoObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_obje',
        )
        let pediIncoPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_prim',
        )
        let pediIncoSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_segu',
        )
        let consSeguObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_segu_obje',
        )
        let consReteSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_rete_segu',
        )
        let pe21Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe21_segu',
        )
        let pe42Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe42_segu',
        )

        if (!Number.isNaN(reinSegu)) {
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'rein_segu_ocul',
            reinSegu,
          )
          // eslint-disable-next-line
          pe63 = parseInt(pe63)
          // eslint-disable-next-line
          pe63Obje = parseInt(pe63Obje)
          // eslint-disable-next-line
          pe63Prim = parseInt(pe63Prim)
          // eslint-disable-next-line
          pe63Segu = parseInt(pe63Segu)
          // eslint-disable-next-line
          reinObje = parseInt(reinObje)
          // eslint-disable-next-line
          reinPrim = parseInt(reinPrim)
          // eslint-disable-next-line
          reinSegu = parseInt(reinSegu)
          // eslint-disable-next-line
          pediIncoObje = parseInt(pediIncoObje)
          // eslint-disable-next-line
          pediIncoPrim = parseInt(pediIncoPrim)
          // eslint-disable-next-line
          pediIncoSegu = parseInt(pediIncoSegu)
          let totaSali = 0
          let totaInco = 0
          let totaRein = 0

          if (this.columna === '2') {
            totaSali = pe63Segu
            totaInco = pediIncoSegu
            totaRein = reinSegu
          }
          if (this.columna === '1') {
            totaSali = pe63Prim
            totaInco = pediIncoPrim
            totaRein = reinPrim
          }
          if (this.columna === '0') {
            totaSali = pe63Obje
            totaInco = pediIncoObje
            totaRein = reinObje
          }

          if (pe63 > 0) {
            totaSali = pe63 - totaSali
          }

          if (totaSali < 0) {
            totaSali = 0
          }
          // eslint-disable-next-line
          consSeguObje = parseInt(consSeguObje)
          // eslint-disable-next-line
          consReteSegu = parseInt(consReteSegu)
          // eslint-disable-next-line
          pe21Segu = parseInt(pe21Segu)
          // eslint-disable-next-line
          pe42Segu = parseInt(pe42Segu)

          let pediReteSegu = consReteSegu
            + consSeguObje
            + pe21Segu
            + pe42Segu
            + pe63Segu
            + reinSegu
          // eslint-disable-next-line
          pediReteSegu = parseInt(pediReteSegu)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_segu_ocul',
            pediReteSegu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_segu',
            pediReteSegu,
          )
          // eslint-disable-next-line
          totaSali = parseInt(totaSali)
          // eslint-disable-next-line
          totaInco = parseInt(totaInco)
          // eslint-disable-next-line
          totaRein = parseInt(totaRein)
          let capiObje = totaInco + totaRein - totaSali
          // eslint-disable-next-line
          capiObje = parseInt(capiObje)

          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'capi_repr',
            capiObje,
          )

          let pediReteObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_obje',
          )
          let pediRetePrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_prim',
          )
          // eslint-disable-next-line
          pediIncoSegu = parseInt(pediIncoSegu)
          // eslint-disable-next-line
          pediRetePrim = parseInt(pediRetePrim)
          // eslint-disable-next-line
          pediReteObje = parseInt(pediReteObje)
          if (!Number.isNaN(pediReteSegu)) {
            let pediTotaSegu = pediIncoSegu + pediReteSegu
            // eslint-disable-next-line
            pediTotaSegu = parseInt(pediTotaSegu)
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_segu_ocul',
              pediTotaSegu,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_segu',
              pediTotaSegu,
            )
            let factRete = 0
            if (this.columna === '2') {
              if (pediReteSegu > 0) {
                factRete = pediReteSegu
              } else if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '1') {
              if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '0') {
              if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            // eslint-disable-next-line
            factRete = parseInt(factRete)
            let niveLide = 'Nivel 0'
            if (this.limaProvincia === 'Lima') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 36) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 36 && factRete < 51) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 51 && factRete < 71) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 71) {
                niveLide = 'Nivel 5'
              }
            }
            if (this.limaProvincia === 'Provincia') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 41) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 41 && factRete < 61) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 61 && factRete < 86) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 86) {
                niveLide = 'Nivel 5'
              }
            }
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'nive_lide',
              niveLide,
            )
          }
        }
      }
      if (columnDataField === 'pegs_prim') {
        // eslint-disable-next-line
        const pegsPrim = parseInt(cellValue)
        if (!Number.isNaN(pegsPrim)) {
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pegs_prim_ocul',
            pegsPrim,
          )
        }
      }
      if (columnDataField === 'pegs_segu') {
        // eslint-disable-next-line
        const pegsSegu = parseInt(cellValue)
        if (!Number.isNaN(pegsSegu)) {
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pegs_segu_ocul',
            pegsSegu,
          )
        }
      }
      if (columnDataField === 'pe63_prim') {
        let pe63 = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63',
        )
        let pe63Obje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_obje',
        )
        // eslint-disable-next-line
        let pe63Prim = parseInt(cellValue)
        let pe63Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_segu',
        )

        let reinObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_obje',
        )
        let reinPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_prim',
        )
        let reinSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_segu',
        )

        let pediIncoObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_obje',
        )
        let pediIncoPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_prim',
        )
        let pediIncoSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_segu',
        )

        let consSeguObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_segu_obje',
        )
        let consRetePrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_rete_prim',
        )
        let pe21Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe21_prim',
        )
        let pe42Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe42_prim',
        )

        if (!Number.isNaN(pe63Prim)) {
          // eslint-disable-next-line
          pe63 = parseInt(pe63)
          // eslint-disable-next-line
          pe63Obje = parseInt(pe63Obje)
          // eslint-disable-next-line
          pe63Prim = parseInt(pe63Prim)
          // eslint-disable-next-line
          pe63Segu = parseInt(pe63Segu)
          // eslint-disable-next-line
          reinObje = parseInt(reinObje)
          // eslint-disable-next-line
          reinPrim = parseInt(reinPrim)
          // eslint-disable-next-line
          reinSegu = parseInt(reinSegu)
          // eslint-disable-next-line
          pediIncoObje = parseInt(pediIncoObje)
          // eslint-disable-next-line
          pediIncoPrim = parseInt(pediIncoPrim)
          // eslint-disable-next-line
          pediIncoSegu = parseInt(pediIncoSegu)

          let totaSali = 0
          let totaInco = 0
          let totaRein = 0

          if (this.columna === '2') {
            totaSali = pe63Segu
            totaInco = pediIncoSegu
            totaRein = reinSegu
          }
          if (this.columna === '1') {
            totaSali = pe63Prim
            totaInco = pediIncoPrim
            totaRein = reinPrim
          }
          if (this.columna === '0') {
            totaSali = pe63Obje
            totaInco = pediIncoObje
            totaRein = reinObje
          }

          if (pe63 > 0) {
            totaSali = pe63 - totaSali
          }

          if (totaSali < 0) {
            totaSali = 0
          }
          // eslint-disable-next-line
          consSeguObje = parseInt(consSeguObje)
          // eslint-disable-next-line
          consRetePrim = parseInt(consRetePrim)
          // eslint-disable-next-line
          pe21Prim = parseInt(pe21Prim)
          // eslint-disable-next-line
          pe42Prim = parseInt(pe42Prim)

          const pegsPrim = pe63Prim + pe42Prim + pe21Prim
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pegs_prim_ocul',
            pegsPrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pegs_prim',
            pegsPrim,
          )

          let pediRetePrim = consRetePrim
            + consSeguObje
            + pe21Prim
            + pe42Prim
            + pe63Prim
            + reinPrim
          // eslint-disable-next-line
          pediRetePrim = parseInt(pediRetePrim)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pe63_prim_ocul',
            pe63Prim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_prim_ocul',
            pediRetePrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_prim',
            pediRetePrim,
          )

          let actiPrim = consRetePrim + consSeguObje + pe21Prim + pe42Prim + pe63Prim
          // eslint-disable-next-line
          actiPrim = parseInt(actiPrim)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_prim_ocul',
            actiPrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_prim',
            actiPrim,
          )

          let actiInic = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'acti_inic',
          )
          if (!Number.isNaN(actiPrim)) {
            let actiPorcPrim = '0.00'
            // eslint-disable-next-line
            actiInic = parseInt(actiInic)
            if (actiInic !== '0' && actiPrim !== '0') {
              actiPorcPrim = (actiPrim / actiInic) * 100
              actiPorcPrim = parseFloat(actiPorcPrim).toFixed(2)
            }
            actiPorcPrim = parseFloat(actiPorcPrim).toFixed(2)
            if (actiPorcPrim > 0) {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_prim',
                '1',
              )
            } else {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_prim',
                '0',
              )
            }
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'acti_porc_prim',
              actiPorcPrim,
            )
          }
          // eslint-disable-next-line
          totaSali = parseInt(totaSali)
          // eslint-disable-next-line
          totaInco = parseInt(totaInco)
          // eslint-disable-next-line
          totaRein = parseInt(totaRein)
          let capiObje = totaInco + totaRein - totaSali
          // eslint-disable-next-line
          capiObje = parseInt(capiObje)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'capi_obje',
            capiObje,
          )
          let pediReteObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_obje',
          )
          let pediReteSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_segu',
          )
          // eslint-disable-next-line
          pediIncoPrim = parseInt(pediIncoPrim)
          // eslint-disable-next-line
          pediReteObje = parseInt(pediReteObje)
          // eslint-disable-next-line
          pediReteSegu = parseInt(pediReteSegu)
          if (!Number.isNaN(pediRetePrim)) {
            let pediTotaPrim = pediIncoPrim + pediRetePrim
            // eslint-disable-next-line
            pediTotaPrim = parseInt(pediTotaPrim)
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_prim_ocul',
              pediTotaPrim,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_prim',
              pediTotaPrim,
            )
            let factRete = 0
            if (this.columna === '2') {
              if (pediReteSegu > 0) {
                factRete = pediReteSegu
              } else if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '1') {
              if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '0') {
              if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            // eslint-disable-next-line
            factRete = parseInt(factRete)
            let niveLide = 'Nivel 0'
            if (this.limaProvincia === 'Lima') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 36) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 36 && factRete < 51) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 51 && factRete < 71) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 71) {
                niveLide = 'Nivel 5'
              }
            }
            if (this.limaProvincia === 'Provincia') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 41) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 41 && factRete < 61) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 61 && factRete < 86) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 86) {
                niveLide = 'Nivel 5'
              }
            }

            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'nive_lide',
              niveLide,
            )
          }
        }
      }
      if (columnDataField === 'pe63_segu') {
        let pe63 = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63',
        )
        let pe63Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_prim',
        )
        // eslint-disable-next-line
        let pe63Segu = parseInt(cellValue)
        let pe63Obje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_obje',
        )
        let reinObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_obje',
        )
        let reinPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_prim',
        )
        let reinSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_segu',
        )
        let pediIncoObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_obje',
        )
        let pediIncoPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_prim',
        )
        let pediIncoSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_segu',
        )
        let consSeguObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_segu_obje',
        )
        let consReteSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_rete_segu',
        )
        let pe21Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe21_segu',
        )
        let pe42Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe42_segu',
        )

        if (!Number.isNaN(pe63Segu)) {
          // eslint-disable-next-line
          pe63 = parseInt(pe63)
          // eslint-disable-next-line
          pe63Obje = parseInt(pe63Obje)
          // eslint-disable-next-line
          pe63Prim = parseInt(pe63Prim)
          // eslint-disable-next-line
          pe63Segu = parseInt(pe63Segu)
          // eslint-disable-next-line
          reinObje = parseInt(reinObje)
          // eslint-disable-next-line
          reinPrim = parseInt(reinPrim)
          // eslint-disable-next-line
          reinSegu = parseInt(reinSegu)
          // eslint-disable-next-line
          pediIncoObje = parseInt(pediIncoObje)
          // eslint-disable-next-line
          pediIncoPrim = parseInt(pediIncoPrim)
          // eslint-disable-next-line
          pediIncoSegu = parseInt(pediIncoSegu)
          let totaSali = 0
          let totaInco = 0
          let totaRein = 0
          if (this.columna === '2') {
            totaSali = pe63Segu
            totaInco = pediIncoSegu
            totaRein = reinSegu
          }
          if (this.columna === '1') {
            totaSali = pe63Prim
            totaInco = pediIncoPrim
            totaRein = reinPrim
          }
          if (this.columna === '0') {
            totaSali = pe63Obje
            totaInco = pediIncoObje
            totaRein = reinObje
          }

          if (pe63 > 0) {
            totaSali = pe63 - totaSali
          }

          if (totaSali < 0) {
            totaSali = 0
          }
          // eslint-disable-next-line
          consSeguObje = parseInt(consSeguObje)
          // eslint-disable-next-line
          consReteSegu = parseInt(consReteSegu)
          // eslint-disable-next-line
          pe21Segu = parseInt(pe21Segu)
          // eslint-disable-next-line
          pe42Segu = parseInt(pe42Segu)
          const pegsSegu = pe63Segu + pe42Segu + pe21Segu
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pegs_segu_ocul',
            pegsSegu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pegs_segu',
            pegsSegu,
          )

          let pediReteSegu = consReteSegu
            + consSeguObje
            + pe21Segu
            + pe42Segu
            + pe63Segu
            + reinSegu
          // eslint-disable-next-line
          pediReteSegu = parseInt(pediReteSegu)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pe63_segu_ocul',
            pe63Segu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_segu_ocul',
            pediReteSegu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_segu',
            pediReteSegu,
          )
          let actiSegu = consReteSegu + consSeguObje + pe21Segu + pe42Segu + pe63Segu
          // eslint-disable-next-line
          actiSegu = parseInt(actiSegu)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_segu_ocul',
            actiSegu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_segu',
            actiSegu,
          )

          let actiInic = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'acti_inic',
          )
          if (!Number.isNaN(actiSegu)) {
            let actiPorcSegu = '0.00'
            // eslint-disable-next-line
            actiInic = parseInt(actiInic)
            if (actiInic !== '0' && actiSegu !== '0') {
              actiPorcSegu = (actiSegu / actiInic) * 100
              actiPorcSegu = parseFloat(actiPorcSegu).toFixed(2)
            }
            actiPorcSegu = parseFloat(actiPorcSegu).toFixed(2)
            if (actiPorcSegu > 0) {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_segu',
                '1',
              )
            } else {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_segu',
                '0',
              )
            }
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'acti_porc_segu',
              actiPorcSegu,
            )
          }
          // eslint-disable-next-line
          totaSali = parseInt(totaSali)
          // eslint-disable-next-line
          totaInco = parseInt(totaInco)
          // eslint-disable-next-line
          totaRein = parseInt(totaRein)
          let capiObje = totaInco + totaRein - totaSali
          // eslint-disable-next-line
          capiObje = parseInt(capiObje)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'capi_repr',
            capiObje,
          )
          let pediReteObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_obje',
          )
          let pediRetePrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_prim',
          )
          // eslint-disable-next-line
          pediIncoSegu = parseInt(pediIncoSegu)
          // eslint-disable-next-line
          pediRetePrim = parseInt(pediRetePrim)
          // eslint-disable-next-line
          pediReteObje = parseInt(pediReteObje)
          // repo_come_proy_camp_obje(repo_come_proy_camp_codi_camp,codi_zona,codi_sect,'pedi_rete_obje',pedi_rete_obje);
          if (!Number.isNaN(pediReteSegu)) {
            let pediTotaSegu = pediIncoSegu + pediReteSegu
            // eslint-disable-next-line
            pediTotaSegu = parseInt(pediTotaSegu)
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_segu_ocul',
              pediTotaSegu,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_segu',
              pediTotaSegu,
            )
            let factRete = 0
            if (this.columna === '2') {
              if (pediReteSegu > 0) {
                factRete = pediReteSegu
              } else if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '1') {
              if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '0') {
              if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            // eslint-disable-next-line
            factRete = parseInt(factRete)
            let niveLide = 'Nivel 0'
            if (this.limaProvincia === 'Lima') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 36) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 36 && factRete < 51) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 51 && factRete < 71) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 71) {
                niveLide = 'Nivel 5'
              }
            }
            if (this.limaProvincia === 'Provincia') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 41) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 41 && factRete < 61) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 61 && factRete < 86) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 86) {
                niveLide = 'Nivel 5'
              }
            }
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'nive_lide',
              niveLide,
            )
          }
        }
      }
      if (columnDataField === 'pe42_prim') {
        // eslint-disable-next-line
        const pe42Prim = parseInt(cellValue)
        let consSeguObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_segu_obje',
        )
        let consRetePrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_rete_prim',
        )
        let pe21Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe21_prim',
        )
        let pe63Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_prim',
        )
        let reinPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_prim',
        )

        if (!Number.isNaN(pe42Prim)) {
          // eslint-disable-next-line
          consSeguObje = parseInt(consSeguObje)
          // eslint-disable-next-line
          consRetePrim = parseInt(consRetePrim)
          // eslint-disable-next-line
          pe21Prim = parseInt(pe21Prim)
          // eslint-disable-next-line
          pe63Prim = parseInt(pe63Prim)
          // eslint-disable-next-line
          reinPrim = parseInt(reinPrim)
          const pegsPrim = pe63Prim + pe42Prim + pe21Prim
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pegs_prim_ocul',
            pegsPrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pegs_prim',
            pegsPrim,
          )

          let pediRetePrim = consRetePrim
            + consSeguObje
            + pe21Prim
            + pe42Prim
            + pe63Prim
            + reinPrim
          // eslint-disable-next-line
          pediRetePrim = parseInt(pediRetePrim)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pe42_prim_ocul',
            pe42Prim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_prim_ocul',
            pediRetePrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_prim',
            pediRetePrim,
          )
          let actiPrim = consRetePrim + consSeguObje + pe21Prim + pe42Prim + pe63Prim
          // eslint-disable-next-line
          actiPrim = parseInt(actiPrim)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_prim_ocul',
            actiPrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_prim',
            actiPrim,
          )
          let actiInic = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'acti_inic',
          )
          if (!Number.isNaN(actiPrim)) {
            let actiPorcPrim = '0.00'
            // eslint-disable-next-line
            actiInic = parseInt(actiInic)
            if (actiInic !== '0' && actiPrim !== '0') {
              actiPorcPrim = (actiPrim / actiInic) * 100
              actiPorcPrim = parseFloat(actiPorcPrim).toFixed(2)
            }
            actiPorcPrim = parseFloat(actiPorcPrim).toFixed(2)
            if (actiPorcPrim > 0) {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_prim',
                '1',
              )
            } else {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_prim',
                '0',
              )
            }
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'acti_porc_prim',
              actiPorcPrim,
            )
          }
          let pediReteObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_obje',
          )
          let pediReteSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_segu',
          )
          let pediIncoPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_inco_prim',
          )
          // eslint-disable-next-line
          pediIncoPrim = parseInt(pediIncoPrim)
          // eslint-disable-next-line
          pediReteObje = parseInt(pediReteObje)
          // eslint-disable-next-line
          pediReteSegu = parseInt(pediReteSegu)
          if (!Number.isNaN(pediRetePrim)) {
            let pediTotaPrim = pediIncoPrim + pediRetePrim
            // eslint-disable-next-line
            pediTotaPrim = parseInt(pediTotaPrim)
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_prim_ocul',
              pediTotaPrim,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_prim',
              pediTotaPrim,
            )
            let factRete = 0
            if (this.columna === '2') {
              if (pediReteSegu > 0) {
                factRete = pediReteSegu
              } else if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '1') {
              if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '0') {
              if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            // eslint-disable-next-line
            factRete = parseInt(factRete)
            let niveLide = 'Nivel 0'
            if (this.limaProvincia === 'Lima') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 36) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 36 && factRete < 51) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 51 && factRete < 71) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 71) {
                niveLide = 'Nivel 5'
              }
            }
            if (this.limaProvincia === 'Provincia') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 41) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 41 && factRete < 61) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 61 && factRete < 86) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 86) {
                niveLide = 'Nivel 5'
              }
            }
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'nive_lide',
              niveLide,
            )
          }
        }
      }
      if (columnDataField === 'pe42_segu') {
        // eslint-disable-next-line
        const pe42Segu = parseInt(cellValue)
        let consSeguObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_segu_obje',
        )
        let consReteSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_rete_segu',
        )
        let pe21Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe21_segu',
        )
        let pe63Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_segu',
        )
        let reinSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_segu',
        )

        if (!Number.isNaN(pe42Segu)) {
          // eslint-disable-next-line
          consSeguObje = parseInt(consSeguObje)
          // eslint-disable-next-line
          consReteSegu = parseInt(consReteSegu)
          // eslint-disable-next-line
          pe21Segu = parseInt(pe21Segu)
          // eslint-disable-next-line
          pe63Segu = parseInt(pe63Segu)
          // eslint-disable-next-line
          reinSegu = parseInt(reinSegu)
          const pegsSegu = pe63Segu + pe42Segu + pe21Segu
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pegs_segu_ocul',
            pegsSegu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pegs_segu',
            pegsSegu,
          )
          let pediReteSegu = consReteSegu
            + consSeguObje
            + pe21Segu
            + pe42Segu
            + pe63Segu
            + reinSegu
          // eslint-disable-next-line
          pediReteSegu = parseInt(pediReteSegu)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pe42_segu_ocul',
            pe42Segu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_segu_ocul',
            pediReteSegu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_segu',
            pediReteSegu,
          )
          let actiSegu = consReteSegu + consSeguObje + pe21Segu + pe42Segu + pe63Segu
          // eslint-disable-next-line
          actiSegu = parseInt(actiSegu)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_segu_ocul',
            actiSegu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_segu',
            actiSegu,
          )
          let actiInic = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'acti_inic',
          )
          if (!Number.isNaN(actiSegu)) {
            let actiPorcSegu = '0.00'
            // eslint-disable-next-line
            actiInic = parseInt(actiInic)
            if (actiInic !== '0' && actiSegu !== '0') {
              actiPorcSegu = (actiSegu / actiInic) * 100
              actiPorcSegu = parseFloat(actiPorcSegu).toFixed(2)
            }
            actiPorcSegu = parseFloat(actiPorcSegu).toFixed(2)
            if (actiPorcSegu > 0) {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_segu',
                '1',
              )
            } else {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_segu',
                '0',
              )
            }
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'acti_porc_segu',
              actiPorcSegu,
            )
          }
          let pediReteObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_obje',
          )
          let pediIncoSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_inco_segu',
          )
          let pediRetePrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_prim',
          )
          // eslint-disable-next-line
          pediIncoSegu = parseInt(pediIncoSegu)
          // eslint-disable-next-line
          pediRetePrim = parseInt(pediRetePrim)
          // eslint-disable-next-line
          pediReteObje = parseInt(pediReteObje)
          if (!Number.isNaN(pediReteSegu)) {
            let pediTotaSegu = pediIncoSegu + pediReteSegu
            // eslint-disable-next-line
            pediTotaSegu = parseInt(pediTotaSegu)
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_segu_ocul',
              pediTotaSegu,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_segu',
              pediTotaSegu,
            )
            let factRete = 0
            if (this.columna === '2') {
              if (pediReteSegu > 0) {
                factRete = pediReteSegu
              } else if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '1') {
              if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '0') {
              if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            // eslint-disable-next-line
            factRete = parseInt(factRete)
            let niveLide = 'Nivel 0'
            if (this.limaProvincia === 'Lima') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 36) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 36 && factRete < 51) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 51 && factRete < 71) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 71) {
                niveLide = 'Nivel 5'
              }
            }
            if (this.limaProvincia === 'Provincia') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 41) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 41 && factRete < 61) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 61 && factRete < 86) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 86) {
                niveLide = 'Nivel 5'
              }
            }
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'nive_lide',
              niveLide,
            )
          }
        }
      }
      if (columnDataField === 'pe21_prim') {
        // eslint-disable-next-line
        const pe21Prim = parseInt(cellValue)
        let consSeguObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_segu_obje',
        )
        let consRetePrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_rete_prim',
        )
        let pe42Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe42_prim',
        )
        let pe63Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_prim',
        )
        let reinPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_prim',
        )
        if (!Number.isNaN(pe21Prim)) {
          // eslint-disable-next-line
          consSeguObje = parseInt(consSeguObje)
          // eslint-disable-next-line
          consRetePrim = parseInt(consRetePrim)
          // eslint-disable-next-line
          pe42Prim = parseInt(pe42Prim)
          // eslint-disable-next-line
          pe63Prim = parseInt(pe63Prim)
          // eslint-disable-next-line
          reinPrim = parseInt(reinPrim)
          const pegsPrim = pe63Prim + pe42Prim + pe21Prim
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pegs_prim_ocul',
            pegsPrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pegs_prim',
            pegsPrim,
          )
          let pediRetePrim = consRetePrim
            + consSeguObje
            + pe21Prim
            + pe42Prim
            + pe63Prim
            + reinPrim
          // eslint-disable-next-line
          pediRetePrim = parseInt(pediRetePrim)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pe21_prim_ocul',
            pe21Prim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_prim_ocul',
            pediRetePrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_prim',
            pediRetePrim,
          )
          let actiPrim = consRetePrim + consSeguObje + pe21Prim + pe42Prim + pe63Prim
          // eslint-disable-next-line
          actiPrim = parseInt(actiPrim)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_prim_ocul',
            actiPrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_prim',
            actiPrim,
          )
          let actiInic = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'acti_inic',
          )
          if (!Number.isNaN(actiPrim)) {
            let actiPorcPrim = '0.00'
            // eslint-disable-next-line
            actiInic = parseInt(actiInic)
            if (actiInic !== '0' && actiPrim !== '0') {
              actiPorcPrim = (actiPrim / actiInic) * 100
              actiPorcPrim = parseFloat(actiPorcPrim).toFixed(2)
            }
            actiPorcPrim = parseFloat(actiPorcPrim).toFixed(2)
            if (actiPorcPrim > 0) {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_prim',
                '1',
              )
            } else {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_prim',
                '0',
              )
            }
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'acti_porc_prim',
              actiPorcPrim,
            )
          }
          let pediReteObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_obje',
          )
          let pediReteSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_segu',
          )
          let pediIncoPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_inco_prim',
          )
          // eslint-disable-next-line
          pediIncoPrim = parseInt(pediIncoPrim)
          // eslint-disable-next-line
          pediReteObje = parseInt(pediReteObje)
          // eslint-disable-next-line
          pediReteSegu = parseInt(pediReteSegu)
          if (!Number.isNaN(pediRetePrim)) {
            let pediTotaPrim = pediIncoPrim + pediRetePrim
            // eslint-disable-next-line
            pediTotaPrim = parseInt(pediTotaPrim)
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_prim_ocul',
              pediTotaPrim,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_prim',
              pediTotaPrim,
            )
            let factRete = 0
            if (this.columna === '2') {
              if (pediReteSegu > 0) {
                factRete = pediReteSegu
              } else if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '1') {
              if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '0') {
              if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            // eslint-disable-next-line
            factRete = parseInt(factRete)
            let niveLide = 'Nivel 0'
            if (this.limaProvincia === 'Lima') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 36) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 36 && factRete < 51) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 51 && factRete < 71) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 71) {
                niveLide = 'Nivel 5'
              }
            }
            if (this.limaProvincia === 'Provincia') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 41) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 41 && factRete < 61) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 61 && factRete < 86) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 86) {
                niveLide = 'Nivel 5'
              }
            }

            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'nive_lide',
              niveLide,
            )
          }
        }
      }
      if (columnDataField === 'pe21_segu') {
        // eslint-disable-next-line
        const pe21Segu = parseInt(cellValue)
        let consSeguObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_segu_obje',
        )
        let consReteSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_rete_segu',
        )
        let pe42Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe42_segu',
        )
        let pe63Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_segu',
        )
        let reinSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_segu',
        )
        if (!Number.isNaN(pe21Segu)) {
          // eslint-disable-next-line
          consSeguObje = parseInt(consSeguObje)
          // eslint-disable-next-line
          consReteSegu = parseInt(consReteSegu)
          // eslint-disable-next-line
          pe42Segu = parseInt(pe42Segu)
          // eslint-disable-next-line
          pe63Segu = parseInt(pe63Segu)
          // eslint-disable-next-line
          reinSegu = parseInt(reinSegu)
          const pegsSegu = pe63Segu + pe42Segu + pe21Segu
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pegs_segu_ocul',
            pegsSegu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pegs_segu',
            pegsSegu,
          )
          let pediReteSegu = consReteSegu
            + consSeguObje
            + pe21Segu
            + pe42Segu
            + pe63Segu
            + reinSegu
          // eslint-disable-next-line
          pediReteSegu = parseInt(pediReteSegu)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pe21_segu_ocul',
            pe21Segu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_segu_ocul',
            pediReteSegu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_segu',
            pediReteSegu,
          )

          let actiSegu = consReteSegu + consSeguObje + pe21Segu + pe42Segu + pe63Segu
          // eslint-disable-next-line
          actiSegu = parseInt(actiSegu)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_segu_ocul',
            actiSegu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_segu',
            actiSegu,
          )

          let actiInic = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'acti_inic',
          )
          if (!Number.isNaN(actiSegu)) {
            let actiPorcSegu = '0.00'
            // eslint-disable-next-line
            actiInic = parseInt(actiInic)
            if (actiInic !== '0' && actiSegu !== '0') {
              actiPorcSegu = (actiSegu / actiInic) * 100
              actiPorcSegu = parseFloat(actiPorcSegu).toFixed(2)
            }
            actiPorcSegu = parseFloat(actiPorcSegu).toFixed(2)
            if (actiPorcSegu > 0) {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_segu',
                '1',
              )
            } else {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_segu',
                '0',
              )
            }
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'acti_porc_segu',
              actiPorcSegu,
            )
          }
          let pediReteObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_obje',
          )
          let pediIncoSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_inco_segu',
          )
          let pediRetePrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_prim',
          )
          // eslint-disable-next-line
          pediIncoSegu = parseInt(pediIncoSegu)
          // eslint-disable-next-line
          pediRetePrim = parseInt(pediRetePrim)
          // eslint-disable-next-line
          pediReteObje = parseInt(pediReteObje)
          if (!Number.isNaN(pediReteSegu)) {
            let pediTotaSegu = pediIncoSegu + pediReteSegu
            // eslint-disable-next-line
            pediTotaSegu = parseInt(pediTotaSegu)
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_segu_ocul',
              pediTotaSegu,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_segu',
              pediTotaSegu,
            )
            let factRete = 0
            if (this.columna === '2') {
              if (pediReteSegu > 0) {
                factRete = pediReteSegu
              } else if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '1') {
              if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '0') {
              if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            // eslint-disable-next-line
            factRete = parseInt(factRete)
            let niveLide = 'Nivel 0'
            if (this.limaProvincia === 'Lima') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 36) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 36 && factRete < 51) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 51 && factRete < 71) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 71) {
                niveLide = 'Nivel 5'
              }
            }
            if (this.limaProvincia === 'Provincia') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 41) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 41 && factRete < 61) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 61 && factRete < 86) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 86) {
                niveLide = 'Nivel 5'
              }
            }
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'nive_lide',
              niveLide,
            )
          }
        }
      }
      if (columnDataField === 'cons_rete_prim') {
        // eslint-disable-next-line
        const consRetePrim = parseInt(cellValue)
        let consSeguObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_segu_obje',
        )
        let pe21Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe21_prim',
        )
        let pe42Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe42_prim',
        )
        let pe63Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_prim',
        )
        let reinPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_prim',
        )

        if (!Number.isNaN(consRetePrim)) {
          // eslint-disable-next-line
          consSeguObje = parseInt(consSeguObje)
          // eslint-disable-next-line
          pe21Prim = parseInt(pe21Prim)
          // eslint-disable-next-line
          pe42Prim = parseInt(pe42Prim)
          // eslint-disable-next-line
          pe63Prim = parseInt(pe63Prim)
          // eslint-disable-next-line
          reinPrim = parseInt(reinPrim)

          let pediRetePrim = consRetePrim
            + consSeguObje
            + pe21Prim
            + pe42Prim
            + pe63Prim
            + reinPrim
          // eslint-disable-next-line
          pediRetePrim = parseInt(pediRetePrim)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_prim_ocul',
            pediRetePrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_prim',
            pediRetePrim,
          )
          let actiPrim = consRetePrim + consSeguObje + pe21Prim + pe42Prim + pe63Prim
          // eslint-disable-next-line
          actiPrim = parseInt(actiPrim)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'cons_rete_prim_ocul',
            consRetePrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_prim_ocul',
            actiPrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_prim',
            actiPrim,
          )

          let actiInic = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'acti_inic',
          )
          if (!Number.isNaN(actiPrim)) {
            let actiPorcPrim = '0.00'
            // eslint-disable-next-line
            actiInic = parseInt(actiInic)
            if (actiInic !== '0' && actiPrim !== '0') {
              actiPorcPrim = (actiPrim / actiInic) * 100
              actiPorcPrim = parseFloat(actiPorcPrim).toFixed(2)
            }
            actiPorcPrim = parseFloat(actiPorcPrim).toFixed(2)
            if (actiPorcPrim > 0) {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_prim',
                '1',
              )
            } else {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_prim',
                '0',
              )
            }
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'acti_porc_prim',
              actiPorcPrim,
            )
          }
          let pediReteObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_obje',
          )
          let pediReteSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_segu',
          )

          let pediIncoPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_inco_prim',
          )
          // eslint-disable-next-line
          pediIncoPrim = parseInt(pediIncoPrim)
          // eslint-disable-next-line
          pediReteObje = parseInt(pediReteObje)
          // eslint-disable-next-line
          pediReteSegu = parseInt(pediReteSegu)

          if (!Number.isNaN(pediRetePrim)) {
            let pediTotaPrim = pediIncoPrim + pediRetePrim
            // eslint-disable-next-line
            pediTotaPrim = parseInt(pediTotaPrim)
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_prim_ocul',
              pediTotaPrim,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_prim',
              pediTotaPrim,
            )
            let factRete = 0
            if (this.columna === '2') {
              if (pediReteSegu > 0) {
                factRete = pediReteSegu
              } else if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '1') {
              if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '0') {
              if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            // eslint-disable-next-line
            factRete = parseInt(factRete)
            let niveLide = 'Nivel 0'
            if (this.limaProvincia === 'Lima') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 36) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 36 && factRete < 51) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 51 && factRete < 71) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 71) {
                niveLide = 'Nivel 5'
              }
            }
            if (this.limaProvincia === 'Provincia') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 41) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 41 && factRete < 61) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 61 && factRete < 86) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 86) {
                niveLide = 'Nivel 5'
              }
            }

            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'nive_lide',
              niveLide,
            )
          }
        }
      }
      if (columnDataField === 'cons_rete_segu') {
        // eslint-disable-next-line
        const consReteSegu = parseInt(cellValue)
        let consSeguObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'cons_segu_obje',
        )
        let pe21Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe21_segu',
        )
        let pe42Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe42_segu',
        )
        let pe63Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_segu',
        )
        let reinSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_segu',
        )
        if (!Number.isNaN(consReteSegu)) {
          // eslint-disable-next-line
          consSeguObje = parseInt(consSeguObje)
          // eslint-disable-next-line
          pe21Segu = parseInt(pe21Segu)
          // eslint-disable-next-line
          pe42Segu = parseInt(pe42Segu)
          // eslint-disable-next-line
          pe63Segu = parseInt(pe63Segu)
          // eslint-disable-next-line
          reinSegu = parseInt(reinSegu)

          let pediReteSegu = consReteSegu
            + consSeguObje
            + pe21Segu
            + pe42Segu
            + pe63Segu
            + reinSegu
          // eslint-disable-next-line
          pediReteSegu = parseInt(pediReteSegu)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_segu_ocul',
            pediReteSegu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_rete_segu',
            pediReteSegu,
          )
          let actiSegu = consReteSegu + consSeguObje + pe21Segu + pe42Segu + pe63Segu
          // eslint-disable-next-line
          actiSegu = parseInt(actiSegu)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'cons_rete_segu_ocul',
            consReteSegu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_segu',
            actiSegu,
          )

          let actiInic = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'acti_inic',
          )
          if (!Number.isNaN(actiSegu)) {
            let actiPorcSegu = '0.00'
            // eslint-disable-next-line
            actiInic = parseInt(actiInic)
            if (actiInic !== '0' && actiSegu !== '0') {
              actiPorcSegu = (actiSegu / actiInic) * 100
              actiPorcSegu = parseFloat(actiPorcSegu).toFixed(2)
            }
            actiPorcSegu = parseFloat(actiPorcSegu).toFixed(2)
            if (actiPorcSegu > 0) {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_segu',
                '1',
              )
            } else {
              this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
                rowIndex,
                'acti_nume_segu',
                '0',
              )
            }
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'acti_porc_segu',
              actiPorcSegu,
            )
          }
          let pediReteObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_obje',
          )
          let pediIncoSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_inco_segu',
          )
          let pediRetePrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
            rowIndex,
            'pedi_rete_prim',
          )
          // eslint-disable-next-line
          pediIncoSegu = parseInt(pediIncoSegu)
          // eslint-disable-next-line
          pediRetePrim = parseInt(pediRetePrim)
          // eslint-disable-next-line
          pediReteObje = parseInt(pediReteObje)
          if (!Number.isNaN(pediReteSegu)) {
            let pediTotaSegu = pediIncoSegu + pediReteSegu
            // eslint-disable-next-line
            pediTotaSegu = parseInt(pediTotaSegu)
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_segu_ocul',
              pediTotaSegu,
            )
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'pedi_tota_segu',
              pediTotaSegu,
            )

            let factRete = 0
            if (this.columna === '2') {
              if (pediReteSegu > 0) {
                factRete = pediReteSegu
              } else if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '1') {
              if (pediRetePrim > 0) {
                factRete = pediRetePrim
              } else if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            if (this.columna === '0') {
              if (pediReteObje > 0) {
                factRete = pediReteObje
              }
            }
            // eslint-disable-next-line
            factRete = parseInt(factRete)
            let niveLide = 'Nivel 0'
            if (this.limaProvincia === 'Lima') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 36) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 36 && factRete < 51) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 51 && factRete < 71) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 71) {
                niveLide = 'Nivel 5'
              }
            }
            if (this.limaProvincia === 'Provincia') {
              if (factRete < 11) {
                niveLide = 'Nivel 0'
              }
              if (factRete >= 11 && factRete < 26) {
                niveLide = 'Nivel 1'
              }
              if (factRete >= 26 && factRete < 41) {
                niveLide = 'Nivel 2'
              }
              if (factRete >= 41 && factRete < 61) {
                niveLide = 'Nivel 3'
              }
              if (factRete >= 61 && factRete < 86) {
                niveLide = 'Nivel 4'
              }
              if (factRete >= 86) {
                niveLide = 'Nivel 5'
              }
            }
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'nive_lide',
              niveLide,
            )
          }
        }
      }
      if (columnDataField === 'acti_obje') {
        const actiObje = parseFloat(cellValue).toFixed(2)
        const actiInic = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'acti_inic',
        )
        if (!Number.isNaN(actiObje)) {
          let actiObjePedi = 0
          if (actiInic !== '0' && actiObje !== '0') {
            actiObjePedi = (actiInic * actiObje) / 100
            actiObjePedi = parseFloat(actiObjePedi).toFixed(2)
            actiObjePedi = Math.ceil(actiObjePedi)
          }
          if (actiObje > 0) {
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'nume_acti',
              '1',
            )
          } else {
            this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
              rowIndex,
              'nume_acti',
              '0',
            )
          }
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_obje_ocul',
            actiObje,
          )

          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'acti_obje_pedi',
            actiObjePedi,
          )
        }
      }
      if (columnDataField === 'pedi_inco_obje') {
        let pe63 = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63',
        )
        let pe63Obje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_obje',
        )
        let pe63Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_prim',
        )
        let pe63Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_segu',
        )

        let reinObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_obje',
        )
        let reinPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_prim',
        )
        let reinSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_segu',
        )
        // eslint-disable-next-line
        let pediIncoObje = parseInt(cellValue)
        let pediIncoPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_prim',
        )
        let pediIncoSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_segu',
        )
        let pediReteObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_rete_obje',
        )
        // eslint-disable-next-line
        pediReteObje = parseInt(pediReteObje)
        if (!Number.isNaN(pediIncoObje)) {
          let pediTotaObje = pediIncoObje + pediReteObje
          // eslint-disable-next-line
          pediTotaObje = parseInt(pediTotaObje)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_inco_obje_ocul',
            pediIncoObje,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_tota_obje_ocul',
            pediTotaObje,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_tota_obje',
            pediTotaObje,
          )
          // eslint-disable-next-line
          pe63 = parseInt(pe63)
          // eslint-disable-next-line
          pe63Obje = parseInt(pe63Obje)
          // eslint-disable-next-line
          pe63Prim = parseInt(pe63Prim)
          // eslint-disable-next-line
          pe63Segu = parseInt(pe63Segu)
          // eslint-disable-next-line
          reinObje = parseInt(reinObje)
          // eslint-disable-next-line
          reinPrim = parseInt(reinPrim)
          // eslint-disable-next-line
          reinSegu = parseInt(reinSegu)
          // eslint-disable-next-line
          pediIncoObje = parseInt(pediIncoObje)
          // eslint-disable-next-line
          pediIncoPrim = parseInt(pediIncoPrim)
          // eslint-disable-next-line
          pediIncoSegu = parseInt(pediIncoSegu)

          let totaSali = 0
          let totaInco = 0
          let totaRein = 0

          if (this.columna === '2') {
            totaSali = pe63Segu
            totaInco = pediIncoSegu
            totaRein = reinSegu
          }
          if (this.columna === '1') {
            totaSali = pe63Prim
            totaInco = pediIncoPrim
            totaRein = reinPrim
          }
          if (this.columna === '0') {
            totaSali = pe63Obje
            totaInco = pediIncoObje
            totaRein = reinObje
          }

          if (pe63 > 0) {
            totaSali = pe63 - totaSali
          }

          if (totaSali < 0) {
            totaSali = 0
          }
          // eslint-disable-next-line
          totaSali = parseInt(totaSali)
          // eslint-disable-next-line
          totaInco = parseInt(totaInco)
          // eslint-disable-next-line
          totaRein = parseInt(totaRein)
          let capiObje = totaInco + totaRein - totaSali
          // eslint-disable-next-line
          capiObje = parseInt(capiObje)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'capi_obje',
            capiObje,
          )
        }
      }
      if (columnDataField === 'pedi_inco_prim') {
        let pe63 = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63',
        )
        let pe63Obje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_obje',
        )
        let pe63Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_prim',
        )
        let pe63Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_segu',
        )

        let reinObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_obje',
        )
        let reinPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_prim',
        )
        let reinSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_segu',
        )

        let pediIncoObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_obje',
        )
        // eslint-disable-next-line
        let pediIncoPrim = parseInt(cellValue)
        let pediIncoSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_segu',
        )

        let pediRetePrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_rete_prim',
        )
        // eslint-disable-next-line
        pediRetePrim = parseInt(pediRetePrim)
        if (!Number.isNaN(pediIncoPrim)) {
          let pediTotaPrim = pediIncoPrim + pediRetePrim
          // eslint-disable-next-line
          pediTotaPrim = parseInt(pediTotaPrim)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_tota_prim_ocul',
            pediTotaPrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_tota_prim',
            pediTotaPrim,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_inco_prim_ocul',
            pediIncoPrim,
          )
          // eslint-disable-next-line
          pe63 = parseInt(pe63)
          // eslint-disable-next-line
          pe63Obje = parseInt(pe63Obje)
          // eslint-disable-next-line
          pe63Prim = parseInt(pe63Prim)
          // eslint-disable-next-line
          pe63Segu = parseInt(pe63Segu)
          // eslint-disable-next-line
          reinObje = parseInt(reinObje)
          // eslint-disable-next-line
          reinPrim = parseInt(reinPrim)
          // eslint-disable-next-line
          reinSegu = parseInt(reinSegu)
          // eslint-disable-next-line
          pediIncoObje = parseInt(pediIncoObje)
          // eslint-disable-next-line
          pediIncoPrim = parseInt(pediIncoPrim)
          // eslint-disable-next-line
          pediIncoSegu = parseInt(pediIncoSegu)

          let totaSali = 0
          let totaInco = 0
          let totaRein = 0

          if (this.columna === '2') {
            totaSali = pe63Segu
            totaInco = pediIncoSegu
            totaRein = reinSegu
          }
          if (this.columna === '1') {
            totaSali = pe63Prim
            totaInco = pediIncoPrim
            totaRein = reinPrim
          }
          if (this.columna === '0') {
            totaSali = pe63Obje
            totaInco = pediIncoObje
            totaRein = reinObje
          }
          if (pe63 > 0) {
            totaSali = pe63 - totaSali
          }

          if (totaSali < 0) {
            totaSali = 0
          }
          // eslint-disable-next-line
          totaSali = parseInt(totaSali)
          // eslint-disable-next-line
          totaInco = parseInt(totaInco)
          // eslint-disable-next-line
          totaRein = parseInt(totaRein)
          let capiObje = totaInco + totaRein - totaSali
          // eslint-disable-next-line
          capiObje = parseInt(capiObje)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'capi_obje',
            capiObje,
          )
        }
      }
      if (columnDataField === 'pedi_inco_segu') {
        let pe63 = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63',
        )
        let pe63Obje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_obje',
        )
        let pe63Prim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_prim',
        )
        let pe63Segu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pe63_segu',
        )

        let reinObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_obje',
        )
        let reinPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_prim',
        )
        let reinSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'rein_segu',
        )

        let pediIncoObje = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_obje',
        )
        let pediIncoPrim = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_inco_prim',
        )
        // eslint-disable-next-line
        let pediIncoSegu = parseInt(cellValue)

        let pediReteSegu = this.$refs.repo_come_proy_camp_grid_glob.getcellvaluebyid(
          rowIndex,
          'pedi_rete_segu',
        )
        // eslint-disable-next-line
        pediReteSegu = parseInt(pediReteSegu)
        if (!Number.isNaN(pediIncoSegu)) {
          let pediTotaSegu = pediIncoSegu + pediReteSegu
          // eslint-disable-next-line
          pediTotaSegu = parseInt(pediTotaSegu)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_tota_segu_ocul',
            pediTotaSegu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_tota_segu',
            pediTotaSegu,
          )
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'pedi_inco_segu_ocul',
            pediIncoSegu,
          )
          // eslint-disable-next-line
          pe63 = parseInt(pe63)
          // eslint-disable-next-line
          pe63Obje = parseInt(pe63Obje)
          // eslint-disable-next-line
          pe63Prim = parseInt(pe63Prim)
          // eslint-disable-next-line
          pe63Segu = parseInt(pe63Segu)
          // eslint-disable-next-line
          reinObje = parseInt(reinObje)
          // eslint-disable-next-line
          reinPrim = parseInt(reinPrim)
          // eslint-disable-next-line
          reinSegu = parseInt(reinSegu)
          // eslint-disable-next-line
          pediIncoObje = parseInt(pediIncoObje)
          // eslint-disable-next-line
          pediIncoPrim = parseInt(pediIncoPrim)
          // eslint-disable-next-line
          pediIncoSegu = parseInt(pediIncoSegu)

          let totaSali = 0
          let totaInco = 0
          let totaRein = 0

          if (this.columna === '2') {
            totaSali = pe63Segu
            totaInco = pediIncoSegu
            totaRein = reinSegu
          }
          if (this.columna === '1') {
            totaSali = pe63Prim
            totaInco = pediIncoPrim
            totaRein = reinPrim
          }
          if (this.columna === '0') {
            totaSali = pe63Obje
            totaInco = pediIncoObje
            totaRein = reinObje
          }

          if (pe63 > 0) {
            totaSali = pe63 - totaSali
          }

          if (totaSali < 0) {
            totaSali = 0
          }
          // eslint-disable-next-line
          totaSali = parseInt(totaSali)
          // eslint-disable-next-line
          totaInco = parseInt(totaInco)
          // eslint-disable-next-line
          totaRein = parseInt(totaRein)
          let capiObje = totaInco + totaRein - totaSali
          // eslint-disable-next-line
          capiObje = parseInt(capiObje)
          this.$refs.repo_come_proy_camp_grid_glob.setcellvalue(
            rowIndex,
            'capi_repr',
            capiObje,
          )
        }
      }
    },
    async repo_come_proy_camp_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_proy_camp_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/repo_come_proy_camp/proy_camp_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              lima_prov: this.limaProvincia,
              obje_inco: this.objetivoIncorporacion,
              obje_inco_proy: this.objetivoIncorporacionProyeccion,
              obje_inco_repr: this.objetivoIncorporacionReproyeccion,
              obje_rete: this.objetivoRetencion,
              obje_rete_proy: this.objetivoRetencionProyeccion,
              obje_rete_repr: this.objetivoRetencionReproyeccion,
              obje_acti: this.objetivoActividad,
              obje_acti_proy: this.objetivoActividadProyeccion,
              obje_acti_repr: this.objetivoActividadReproyeccion,
              data_glob: this.$refs.repo_come_proy_camp_grid_glob.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_esta: this.$refs.repo_come_proy_camp_grid_glob.getstate(),
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
    async repo_come_proy_camp_regi() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_proy_camp_grid_glob.getdatainformation()
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
              text:
                'No tiene información para registrar proyección y reproyección.',
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
            url: `${store.state.app.webService}/sami_v1/repo_come_proy_camp/proy_camp_regi`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.codigoCampana,
              codi_zona: this.codigoZona,
              data_glob: this.$refs.repo_come_proy_camp_grid_glob.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
            },
          })
          let dato = await servicio.data.data_glob
          if (dato !== ' ') {
            dato = dato.toLowerCase()
            dato = dato.charAt(0).toUpperCase() + dato.slice(1)
            this.$toast(
              {
                component: ToastificationContent,
                props: {
                  title: 'Notificación',
                  icon: 'CheckCircleIcon',
                  variant: 'success',
                  text: dato,
                },
              },
              {
                position: 'bottom-right',
                timeout: 8000,
              },
            )
            setTimeout(() => {
              this.$vs.loading.close()
            }, 500)
          }
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
