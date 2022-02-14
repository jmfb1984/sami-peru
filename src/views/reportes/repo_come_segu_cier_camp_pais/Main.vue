<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_segu_cier_camp_pais_gene()"
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
        @click="repo_come_segu_cier_camp_pais_limp()"
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
        @click="repo_come_segu_cier_camp_pais_gene()"
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
        @click="repo_come_segu_cier_camp_pais_exce()"
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
        @click="repo_come_segu_cier_camp_pais_limp()"
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
        <b-card title="Información General">
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
              <span class="">Proyección Incorporación</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ proyeccionIncorporacion }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">Reproyección Incorporación</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ reproyeccionIncorporacion }}</span>
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
              <span class="">% Efectividad Incorporación</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ efectividadIncorporacion }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">% Cumplimiento Objetivo Incorporación</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ cumplimientoObjetivoIncorporacion }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">% Cumplimiento Proyeccion Incorporación</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ cumplimientoProyeccionIncorporacion }}</span>
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
              <span class="">Proyección Retención</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ proyeccionRetencion }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">Reproyección Retención</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ reproyeccionRetencion }}</span>
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
              <span class="">% Efectividad Retención</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ efectividadRetencion }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">% Cumplimiento Objetivo Retención</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ cumplimientoObjetivoRetencion }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">% Cumplimiento Proyeccion Retención</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ cumplimientoProyeccionRetencion }}</span>
            </b-col>
          </b-row>
          <b-row class="mt-1">
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">Objetivo Pedidos T.</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ objetivoPedidos }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">Proyección Pedidos T.</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ proyeccionPedidos }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">Reproyección Pedidos T.</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ reproyeccionPedidos }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">Facturado Pedidos T.</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ facturadoPedidos }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">% Efectividad Pedidos T.</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ efectividadPedidos }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">% Cumplimiento Objetivo Pedidos T.</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ cumplimientoObjetivoPedidos }}</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">% Cumplimiento Proyeccion Pedidos T.</span>
            </b-col>
            <b-col
              lg="2"
              md="3"
              sm="12"
              xs="12"
            >
              <span class="">{{ cumplimientoProyeccionPedidos }}</span>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card title="Consolidado Corte">
          <JqxGrid
            ref="repo_come_segu_cier_camp_pais_grid_cort"
            :width="'100%'"
            :height="350"
            :columngroups="columnsGroupCorte"
            :columns="columnsCorte"
            :source="dataAdapterCorte"
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
        <b-card title="Consolidado Corte Región">
          <JqxGrid
            ref="repo_come_segu_cier_camp_pais_grid_regi"
            :width="'100%'"
            :height="350"
            :columngroups="columnsGroupRegion"
            :columns="columnsRegion"
            :source="dataAdapterRegion"
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
        <b-card title="Detalle Zona">
          <JqxGrid
            ref="repo_come_segu_cier_camp_pais_grid_zona"
            :width="'100%'"
            :height="350"
            :columngroups="columnsGroupZona"
            :columns="columnsZona"
            :source="dataAdapterZona"
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
  BRow, BCol, BButton, BCard,
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import selectCampana from '@/views/components/FiltroCampana.vue'
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

let data = 0
let obje = 0

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BCard,
    selectCampana,
    // eslint-disable-next-line vue/no-unused-components
    JqxGrid,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      dataCampana: [],
      seleccionCampana: [],
      // eslint-disable-next-line
      dataAdapterCorte: new jqx.dataAdapter(this.sourceCorte),
      columnsGroupCorte: [
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
          text: 'Capitalización',
          align: 'center',
          name: 'capi',
        },
      ],
      // eslint-disable-next-line
      dataAdapterRegion: new jqx.dataAdapter(this.sourceRegion),
      columnsGroupRegion: [
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
          text: 'Capitalización',
          align: 'center',
          name: 'capi',
        },
      ],
      // eslint-disable-next-line
      dataAdapterZona: new jqx.dataAdapter(this.sourceZona),
      columnsGroupZona: [
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
          text: 'Capitalización',
          align: 'center',
          name: 'capi',
        },
      ],
      objetivoIncorporacion: '0',
      proyeccionIncorporacion: '0',
      reproyeccionIncorporacion: '0',
      facturadoIncorporacion: '0',
      efectividadIncorporacion: '0.00',
      cumplimientoObjetivoIncorporacion: '0.00',
      cumplimientoProyeccionIncorporacion: '0.00',
      objetivoRetencion: '0',
      proyeccionRetencion: '0',
      reproyeccionRetencion: '0',
      facturadoRetencion: '0',
      efectividadRetencion: '0.00',
      cumplimientoObjetivoRetencion: '0.00',
      cumplimientoProyeccionRetencion: '0.00',
      objetivoPedidos: '0',
      proyeccionPedidos: '0',
      reproyeccionPedidos: '0',
      facturadoPedidos: '0',
      efectividadPedidos: '0.00',
      cumplimientoObjetivoPedidos: '0.00',
      cumplimientoProyeccionPedidos: '0.00',
      codigoCampana: '0',
    }
  },
  beforeCreate() {
    this.sourceCorte = {
      localdata: [],
      datafields: [
        { name: 'codi_cort', type: 'number' },
        { name: 'nume_zona', type: 'number' },
        { name: 'acti_inic', type: 'number' },
        { name: 'obje_tota_camp', type: 'number' },
        { name: 'obje_tota', type: 'number' },
        { name: 'obje_tota_prim', type: 'number' },
        { name: 'porc_tota_prim', type: 'number' },
        { name: 'obje_tota_segu', type: 'number' },
        { name: 'fact_tota', type: 'number' },
        { name: 'cump_fact_tota', type: 'number' },
        { name: 'cump_tota', type: 'number' },
        { name: 'dife_tota', type: 'number' },
        { name: 'obje_tota_camp_ocul', type: 'number' },
        { name: 'obje_tota_ocul', type: 'number' },
        { name: 'obje_tota_prim_ocul', type: 'number' },
        { name: 'porc_tota_prim_ocul', type: 'number' },
        { name: 'obje_tota_segu_ocul', type: 'number' },
        { name: 'fact_tota_ocul', type: 'number' },
        { name: 'cump_fact_tota_ocul', type: 'number' },
        { name: 'cump_tota_ocul', type: 'number' },
        { name: 'dife_tota_ocul', type: 'number' },
        { name: 'obje_inco_camp', type: 'number' },
        { name: 'obje_inco', type: 'number' },
        { name: 'obje_inco_prim', type: 'number' },
        { name: 'porc_inco_prim', type: 'number' },
        { name: 'obje_inco_segu', type: 'number' },
        { name: 'fact_inco', type: 'number' },
        { name: 'cump_fact_inco', type: 'number' },
        { name: 'cump_inco', type: 'number' },
        { name: 'dife_inco', type: 'number' },
        { name: 'obje_inco_camp_ocul', type: 'number' },
        { name: 'obje_inco_ocul', type: 'number' },
        { name: 'obje_inco_prim_ocul', type: 'number' },
        { name: 'porc_inco_prim_ocul', type: 'number' },
        { name: 'obje_inco_segu_ocul', type: 'number' },
        { name: 'fact_inco_ocul', type: 'number' },
        { name: 'cump_fact_inco_ocul', type: 'number' },
        { name: 'cump_inco_ocul', type: 'number' },
        { name: 'dife_inco_ocul', type: 'number' },
        { name: 'obje_rete_camp', type: 'number' },
        { name: 'obje_rete', type: 'number' },
        { name: 'obje_rete_prim', type: 'number' },
        { name: 'porc_rete_prim', type: 'number' },
        { name: 'obje_rete_segu', type: 'number' },
        { name: 'fact_rete', type: 'number' },
        { name: 'cump_fact_rete', type: 'number' },
        { name: 'cump_rete', type: 'number' },
        { name: 'dife_rete', type: 'number' },
        { name: 'obje_rete_camp_ocul', type: 'number' },
        { name: 'obje_rete_ocul', type: 'number' },
        { name: 'obje_rete_prim_ocul', type: 'number' },
        { name: 'porc_rete_prim_ocul', type: 'number' },
        { name: 'obje_rete_segu_ocul', type: 'number' },
        { name: 'fact_rete_ocul', type: 'number' },
        { name: 'cump_fact_rete_ocul', type: 'number' },
        { name: 'cump_rete_ocul', type: 'number' },
        { name: 'dife_rete_ocul', type: 'number' },
        { name: 'obje_capi', type: 'number' },
        { name: 'repr_capi', type: 'number' },
        { name: 'fact_capi', type: 'number' },
        { name: 'porc_capi', type: 'number' },
        { name: 'obje_capi_ocul', type: 'number' },
        { name: 'repr_capi_ocul', type: 'number' },
        { name: 'fact_capi_ocul', type: 'number' },
        { name: 'porc_capi_ocul', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceRegion = {
      localdata: [],
      datafields: [
        { name: 'codi_cort', type: 'number' },
        { name: 'codi_area', type: 'string' },
        { name: 'nume_zona', type: 'number' },
        { name: 'acti_inic', type: 'number' },
        { name: 'obje_tota_camp', type: 'number' },
        { name: 'obje_tota', type: 'number' },
        { name: 'obje_tota_prim', type: 'number' },
        { name: 'porc_tota_prim', type: 'number' },
        { name: 'obje_tota_segu', type: 'number' },
        { name: 'fact_tota', type: 'number' },
        { name: 'cump_fact_tota', type: 'number' },
        { name: 'cump_tota', type: 'number' },
        { name: 'dife_tota', type: 'number' },
        { name: 'obje_tota_camp_ocul', type: 'number' },
        { name: 'obje_tota_ocul', type: 'number' },
        { name: 'obje_tota_prim_ocul', type: 'number' },
        { name: 'porc_tota_prim_ocul', type: 'number' },
        { name: 'obje_tota_segu_ocul', type: 'number' },
        { name: 'fact_tota_ocul', type: 'number' },
        { name: 'cump_fact_tota_ocul', type: 'number' },
        { name: 'cump_tota_ocul', type: 'number' },
        { name: 'dife_tota_ocul', type: 'number' },
        { name: 'obje_inco_camp', type: 'number' },
        { name: 'obje_inco', type: 'number' },
        { name: 'obje_inco_prim', type: 'number' },
        { name: 'porc_inco_prim', type: 'number' },
        { name: 'obje_inco_segu', type: 'number' },
        { name: 'fact_inco', type: 'number' },
        { name: 'cump_fact_inco', type: 'number' },
        { name: 'cump_inco', type: 'number' },
        { name: 'dife_inco', type: 'number' },
        { name: 'obje_inco_camp_ocul', type: 'number' },
        { name: 'obje_inco_ocul', type: 'number' },
        { name: 'obje_inco_prim_ocul', type: 'number' },
        { name: 'porc_inco_prim_ocul', type: 'number' },
        { name: 'obje_inco_segu_ocul', type: 'number' },
        { name: 'fact_inco_ocul', type: 'number' },
        { name: 'cump_fact_inco_ocul', type: 'number' },
        { name: 'cump_inco_ocul', type: 'number' },
        { name: 'dife_inco_ocul', type: 'number' },
        { name: 'obje_rete_camp', type: 'number' },
        { name: 'obje_rete', type: 'number' },
        { name: 'obje_rete_prim', type: 'number' },
        { name: 'porc_rete_prim', type: 'number' },
        { name: 'obje_rete_segu', type: 'number' },
        { name: 'fact_rete', type: 'number' },
        { name: 'cump_fact_rete', type: 'number' },
        { name: 'cump_rete', type: 'number' },
        { name: 'dife_rete', type: 'number' },
        { name: 'obje_rete_camp_ocul', type: 'number' },
        { name: 'obje_rete_ocul', type: 'number' },
        { name: 'obje_rete_prim_ocul', type: 'number' },
        { name: 'porc_rete_prim_ocul', type: 'number' },
        { name: 'obje_rete_segu_ocul', type: 'number' },
        { name: 'fact_rete_ocul', type: 'number' },
        { name: 'cump_fact_rete_ocul', type: 'number' },
        { name: 'cump_rete_ocul', type: 'number' },
        { name: 'dife_rete_ocul', type: 'number' },
        { name: 'obje_capi', type: 'number' },
        { name: 'repr_capi', type: 'number' },
        { name: 'fact_capi', type: 'number' },
        { name: 'porc_capi', type: 'number' },
        { name: 'obje_capi_ocul', type: 'number' },
        { name: 'repr_capi_ocul', type: 'number' },
        { name: 'fact_capi_ocul', type: 'number' },
        { name: 'porc_capi_ocul', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceZona = {
      localdata: [],
      datafields: [
        { name: 'codi_cort', type: 'number' },
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'acti_inic', type: 'number' },
        { name: 'obje_tota_camp', type: 'number' },
        { name: 'obje_tota', type: 'number' },
        { name: 'obje_tota_prim', type: 'number' },
        { name: 'porc_tota_prim', type: 'number' },
        { name: 'obje_tota_segu', type: 'number' },
        { name: 'porc_tota_segu', type: 'number' },
        { name: 'fact_tota', type: 'number' },
        { name: 'cump_fact_tota', type: 'number' },
        { name: 'pend_fact_tota', type: 'number' },
        { name: 'tota_tota', type: 'number' },
        { name: 'cump_tota', type: 'number' },
        { name: 'dife_tota', type: 'number' },
        { name: 'obje_tota_camp_ocul', type: 'number' },
        { name: 'obje_tota_ocul', type: 'number' },
        { name: 'obje_tota_prim_ocul', type: 'number' },
        { name: 'porc_tota_prim_ocul', type: 'number' },
        { name: 'obje_tota_segu_ocul', type: 'number' },
        { name: 'porc_tota_segu_ocul', type: 'number' },
        { name: 'fact_tota_ocul', type: 'number' },
        { name: 'cump_fact_tota_ocul', type: 'number' },
        { name: 'pend_fact_tota_ocul', type: 'number' },
        { name: 'tota_tota_ocul', type: 'number' },
        { name: 'cump_tota_ocul', type: 'number' },
        { name: 'dife_tota_ocul', type: 'number' },
        { name: 'obje_inco_camp', type: 'number' },
        { name: 'obje_inco', type: 'number' },
        { name: 'obje_inco_prim', type: 'number' },
        { name: 'porc_inco_prim', type: 'number' },
        { name: 'obje_inco_segu', type: 'number' },
        { name: 'porc_inco_segu', type: 'number' },
        { name: 'fact_inco', type: 'number' },
        { name: 'cump_fact_inco', type: 'number' },
        { name: 'pend_fact_inco', type: 'number' },
        { name: 'tota_inco', type: 'number' },
        { name: 'cump_inco', type: 'number' },
        { name: 'dife_inco', type: 'number' },
        { name: 'obje_inco_camp_ocul', type: 'number' },
        { name: 'obje_inco_ocul', type: 'number' },
        { name: 'obje_inco_prim_ocul', type: 'number' },
        { name: 'porc_inco_prim_ocul', type: 'number' },
        { name: 'obje_inco_segu_ocul', type: 'number' },
        { name: 'porc_inco_segu_ocul', type: 'number' },
        { name: 'fact_inco_ocul', type: 'number' },
        { name: 'cump_fact_inco_ocul', type: 'number' },
        { name: 'pend_fact_inco_ocul', type: 'number' },
        { name: 'tota_inco_ocul', type: 'number' },
        { name: 'cump_inco_ocul', type: 'number' },
        { name: 'dife_inco_ocul', type: 'number' },
        { name: 'obje_rete_camp', type: 'number' },
        { name: 'obje_rete', type: 'number' },
        { name: 'obje_rete_prim', type: 'number' },
        { name: 'porc_rete_prim', type: 'number' },
        { name: 'obje_rete_segu', type: 'number' },
        { name: 'porc_rete_segu', type: 'number' },
        { name: 'fact_rete', type: 'number' },
        { name: 'cump_fact_rete', type: 'number' },
        { name: 'pend_fact_rete', type: 'number' },
        { name: 'tota_rete', type: 'number' },
        { name: 'cump_rete', type: 'number' },
        { name: 'dife_rete', type: 'number' },
        { name: 'obje_rete_camp_ocul', type: 'number' },
        { name: 'obje_rete_ocul', type: 'number' },
        { name: 'obje_rete_prim_ocul', type: 'number' },
        { name: 'porc_rete_prim_ocul', type: 'number' },
        { name: 'obje_rete_segu_ocul', type: 'number' },
        { name: 'porc_rete_segu_ocul', type: 'number' },
        { name: 'fact_rete_ocul', type: 'number' },
        { name: 'cump_fact_rete_ocul', type: 'number' },
        { name: 'pend_fact_rete_ocul', type: 'number' },
        { name: 'tota_rete_ocul', type: 'number' },
        { name: 'cump_rete_ocul', type: 'number' },
        { name: 'dife_rete_ocul', type: 'number' },
        { name: 'obje_capi', type: 'number' },
        { name: 'repr_capi', type: 'number' },
        { name: 'fact_capi', type: 'number' },
        { name: 'porc_capi', type: 'number' },
        { name: 'obje_capi_ocul', type: 'number' },
        { name: 'repr_capi_ocul', type: 'number' },
        { name: 'fact_capi_ocul', type: 'number' },
        { name: 'porc_capi_ocul', type: 'number' },
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
    this.repo_come_segu_cier_camp_pais_visi()
  },
  created() {
    this.handleWindowResize()
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    itemCampana = itemCampana.camp_sigu.slice(1, 7)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))
    this.seleccionCampana = itemCampana[0].codi_camp
  },
  methods: {
    setCampana(value) {
      this.seleccionCampana = value
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

      this.columnsCorte = [
        {
          text: 'obje tota camp',
          datafield: 'obje_tota_camp_ocul',
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
          text: 'obje tota',
          datafield: 'obje_tota_ocul',
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
          text: 'obje tota prim',
          datafield: 'obje_tota_prim_ocul',
          hidden: true,
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
        },
        {
          text: 'porc tota prim',
          datafield: 'porc_tota_prim_ocul',
          hidden: true,
          cellsformat: 'P2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_prim
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
          text: 'obje tota segu',
          datafield: 'obje_tota_segu_ocul',
          hidden: true,
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
        },
        {
          text: 'fact tota',
          datafield: 'fact_tota_ocul',
          hidden: true,
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
        },
        {
          text: 'cump fact tota',
          datafield: 'cump_fact_tota_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_segu
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
          text: 'dife tota',
          datafield: 'dife_tota_ocul',
          hidden: true,
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
        },
        {
          text: 'cump tota',
          datafield: 'cump_tota_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_camp
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
          text: 'obje inco camp',
          datafield: 'obje_inco_camp_ocul',
          hidden: true,
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
        },
        {
          text: 'obje inco',
          datafield: 'obje_inco_ocul',
          hidden: true,
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
        },
        {
          text: 'obje inco prim',
          datafield: 'obje_inco_prim_ocul',
          hidden: true,
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
        },
        {
          text: 'porc inco prim',
          datafield: 'porc_inco_prim_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_prim
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
          text: 'obje inco segu',
          datafield: 'obje_inco_segu_ocul',
          hidden: true,
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
        },
        {
          text: 'fact inco',
          datafield: 'fact_inco_ocul',
          hidden: true,
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
        },
        {
          text: 'cump fact inco',
          datafield: 'cump_fact_inco_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_segu
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
          text: 'dife inco',
          datafield: 'dife_inco_ocul',
          hidden: true,
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
        },
        {
          text: 'cump inco',
          datafield: 'cump_inco_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_camp
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
          text: 'obje rete camp',
          datafield: 'obje_rete_camp_ocul',
          hidden: true,
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
        },
        {
          text: 'obje rete',
          datafield: 'obje_rete_ocul',
          hidden: true,
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
        },
        {
          text: 'obje rete prim',
          datafield: 'obje_rete_prim_ocul',
          hidden: true,
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
        },
        {
          text: 'porc rete prim',
          datafield: 'porc_rete_prim_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_prim
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
          text: 'obje rete segu',
          datafield: 'obje_rete_segu_ocul',
          hidden: true,
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
        },
        {
          text: 'fact rete',
          datafield: 'fact_rete_ocul',
          hidden: true,
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
        },
        {
          text: 'cump fact rete',
          datafield: 'cump_fact_rete_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_segu
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
          text: 'dife rete',
          datafield: 'dife_rete_ocul',
          hidden: true,
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
        },
        {
          text: 'cump rete',
          datafield: 'cump_rete_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_camp
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
          text: 'obje capi',
          datafield: 'obje_capi_ocul',
          hidden: true,
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
        },
        {
          text: 'repr capi',
          datafield: 'repr_capi_ocul',
          hidden: true,
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
        },
        {
          text: 'fact capi',
          datafield: 'fact_capi_ocul',
          hidden: true,
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
        },
        {
          text: 'porc capi',
          datafield: 'porc_capi_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_capi
                obje += record.repr_capi
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
          text: 'Corte',
          datafield: 'codi_cort',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
          groupable: false,
          pinned,
        },
        {
          text: 'Nro Zonas',
          datafield: 'nume_zona',
          width: '80',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          pinned,
        },
        {
          text: 'Act. Inic.',
          datafield: 'acti_inic',
          width: '80',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'n',
          pinned,
          groupable: false,
          aggregates: [
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
          text: 'Obje. Camp.',
          datafield: 'obje_tota_camp',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: 'Obje. Form. Exito',
          datafield: 'obje_tota',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'n',
          groupable: false,
          aggregates: [
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
          text: 'Proyeccion',
          datafield: 'obje_tota_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: '% Cump. Proy.',
          datafield: 'porc_tota_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_prim
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
          columngroup: 'tota',
        },
        {
          text: 'Peproyeccion',
          datafield: 'obje_tota_segu',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: 'Facturado',
          datafield: 'fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: '% Efec.',
          datafield: 'cump_fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_segu
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
          columngroup: 'tota',
        },
        {
          text: 'Diferencia',
          datafield: 'dife_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: '% Cump. Obje.',
          datafield: 'cump_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_camp
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
          columngroup: 'tota',
        },
        {
          text: 'Obje. Camp.',
          datafield: 'obje_inco_camp',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: 'Obje. Form. Exito',
          datafield: 'obje_inco',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: 'Proyeccion',
          datafield: 'obje_inco_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: '% Cump. Proy',
          datafield: 'porc_inco_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_prim
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
          columngroup: 'inco',
        },
        {
          text: 'Reproyeccion',
          datafield: 'obje_inco_segu',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: 'Facturado',
          datafield: 'fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: '% Efec.',
          datafield: 'cump_fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_segu
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
          columngroup: 'inco',
        },
        {
          text: 'Diferencia',
          datafield: 'dife_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: '% Cump. Obje.',
          datafield: 'cump_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_camp
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
          columngroup: 'inco',
        },
        {
          text: 'Obje. Camp.',
          datafield: 'obje_rete_camp',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: 'Obje. Form. Exito',
          datafield: 'obje_rete',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: 'Proyeccion',
          datafield: 'obje_rete_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: '% Cump. Proy.',
          datafield: 'porc_rete_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_prim
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
          columngroup: 'rete',
        },
        {
          text: 'Reproyeccion',
          datafield: 'obje_rete_segu',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: 'Facturado',
          datafield: 'fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: '% Efec.',
          datafield: 'cump_fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_segu
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
          columngroup: 'rete',
        },
        {
          text: 'Diferencia',
          datafield: 'dife_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: '% Cump. Obje.',
          datafield: 'cump_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_camp
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
          columngroup: 'rete',
        },
        {
          text: 'Proyeccion',
          datafield: 'obje_capi',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'capi',
        },
        {
          text: 'Reproyeccion',
          datafield: 'repr_capi',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'capi',
        },
        {
          text: 'Facturado',
          datafield: 'fact_capi',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'capi',
        },
        {
          text: '% Efec.',
          datafield: 'porc_capi',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_capi
                obje += record.repr_capi
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
          columngroup: 'capi',
        },
      ]
      this.columnsRegion = [
        {
          text: 'obje tota camp',
          datafield: 'obje_tota_camp_ocul',
          hidden: true,
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
        },
        {
          text: 'obje tota',
          datafield: 'obje_tota_ocul',
          hidden: true,
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
        },
        {
          text: 'obje tota prim',
          datafield: 'obje_tota_prim_ocul',
          hidden: true,
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
        },
        {
          text: 'porc tota prim',
          datafield: 'porc_tota_prim_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_prim
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
          text: 'obje tota segu',
          datafield: 'obje_tota_segu_ocul',
          hidden: true,
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
        },
        {
          text: 'fact tota',
          datafield: 'fact_tota_ocul',
          hidden: true,
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
        },
        {
          text: 'cump fact tota',
          datafield: 'cump_fact_tota_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_segu
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
          text: 'dife tota',
          datafield: 'dife_tota_ocul',
          hidden: true,
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
        },
        {
          text: 'cump tota',
          datafield: 'cump_tota_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_camp
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
          text: 'obje inco camp',
          datafield: 'obje_inco_camp_ocul',
          hidden: true,
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
        },
        {
          text: 'obje inco',
          datafield: 'obje_inco_ocul',
          hidden: true,
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
        },
        {
          text: 'obje inco prim',
          datafield: 'obje_inco_prim_ocul',
          hidden: true,
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
        },
        {
          text: 'porc inco prim',
          datafield: 'porc_inco_prim_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_prim
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
          text: 'obje inco segu',
          datafield: 'obje_inco_segu_ocul',
          hidden: true,
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
        },
        {
          text: 'fact inco',
          datafield: 'fact_inco_ocul',
          hidden: true,
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
        },
        {
          text: 'cump fact inco',
          datafield: 'cump_fact_inco_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_segu
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
          text: 'dife inco',
          datafield: 'dife_inco_ocul',
          hidden: true,
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
        },
        {
          text: 'cump inco',
          datafield: 'cump_inco_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_camp
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
          text: 'obje rete camp',
          datafield: 'obje_rete_camp_ocul',
          hidden: true,
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
        },
        {
          text: 'obje rete',
          datafield: 'obje_rete_ocul',
          hidden: true,
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
        },
        {
          text: 'obje rete prim',
          datafield: 'obje_rete_prim_ocul',
          hidden: true,
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
        },
        {
          text: 'porc rete prim',
          datafield: 'porc_rete_prim_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_prim
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
          text: 'obje rete segu',
          datafield: 'obje_rete_segu_ocul',
          hidden: true,
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
        },
        {
          text: 'fact rete',
          datafield: 'fact_rete_ocul',
          hidden: true,
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
        },
        {
          text: 'cump fact rete',
          datafield: 'cump_fact_rete_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_segu
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
          text: 'dife rete',
          datafield: 'dife_rete_ocul',
          hidden: true,
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
        },
        {
          text: 'cump rete',
          datafield: 'cump_rete_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_camp
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
          text: 'obje capi',
          datafield: 'obje_capi_ocul',
          hidden: true,
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
        },
        {
          text: 'repr capi',
          datafield: 'repr_capi_ocul',
          hidden: true,
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
        },
        {
          text: 'fact capi',
          datafield: 'fact_capi_ocul',
          hidden: true,
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
        },
        {
          text: 'porc capi',
          datafield: 'porc_capi_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_capi
                obje += record.repr_capi
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
          text: 'Corte',
          datafield: 'codi_cort',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
          groupable: false,
          pinned,
        },
        {
          text: 'Area',
          datafield: 'codi_area',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
          groupable: false,
          pinned,
        },
        {
          text: 'Nro Zonas',
          datafield: 'nume_zona',
          width: '80',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          pinned,
        },
        {
          text: 'Act. Inic.',
          datafield: 'acti_inic',
          width: '80',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'n',
          pinned,
          groupable: false,
          aggregates: [
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
          text: 'Obje. Camp.',
          datafield: 'obje_tota_camp',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: 'Obje. Form. Exito',
          datafield: 'obje_tota',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'n',
          groupable: false,
          aggregates: [
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
          text: 'Proyeccion',
          datafield: 'obje_tota_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: '% Cump. Proy.',
          datafield: 'porc_tota_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_prim
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
          columngroup: 'tota',
        },
        {
          text: 'Reproyeccion',
          datafield: 'obje_tota_segu',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: 'Facturado',
          datafield: 'fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: '% Efec.',
          datafield: 'cump_fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_segu
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
          columngroup: 'tota',
        },
        {
          text: 'Diferencia',
          datafield: 'dife_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: '% Cump. Obje.',
          datafield: 'cump_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_camp
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
          columngroup: 'tota',
        },
        {
          text: 'Obje. Camp.',
          datafield: 'obje_inco_camp',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: 'Obje. Form. Exito',
          datafield: 'obje_inco',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: 'Proyeccion',
          datafield: 'obje_inco_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: '% Cump. Proy',
          datafield: 'porc_inco_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_prim
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
          columngroup: 'inco',
        },
        {
          text: 'Reproyeccion',
          datafield: 'obje_inco_segu',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: 'Facturado',
          datafield: 'fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: '% Efec.',
          datafield: 'cump_fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_segu
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
          columngroup: 'inco',
        },
        {
          text: 'Diferencia',
          datafield: 'dife_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: '% Cump. Obje.',
          datafield: 'cump_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_camp
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
          columngroup: 'inco',
        },
        {
          text: 'Obje. Camp.',
          datafield: 'obje_rete_camp',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: 'Obje. Form. Exito',
          datafield: 'obje_rete',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: 'Proyeccion',
          datafield: 'obje_rete_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: '% Cump. Proy.',
          datafield: 'porc_rete_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_prim
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
          columngroup: 'rete',
        },
        {
          text: 'Reproyeccion',
          datafield: 'obje_rete_segu',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: 'Facturado',
          datafield: 'fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: '% Efec.',
          datafield: 'cump_fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_segu
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
          columngroup: 'rete',
        },
        {
          text: 'Diferencia',
          datafield: 'dife_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: '% Cump. Obje.',
          datafield: 'cump_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_camp
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
          columngroup: 'rete',
        },
        {
          text: 'Proyeccion',
          datafield: 'obje_capi',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'capi',
        },
        {
          text: 'Reproyeccion',
          datafield: 'repr_capi',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'capi',
        },
        {
          text: 'Facturado',
          datafield: 'fact_capi',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'capi',
        },
        {
          text: '% Efec.',
          datafield: 'porc_capi',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_capi
                obje += record.repr_capi
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
          columngroup: 'capi',
        },
      ]
      this.columnsZona = [
        {
          text: 'obje tota camp',
          datafield: 'obje_tota_camp_ocul',
          hidden: true,
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
        },
        {
          text: 'obje tota',
          datafield: 'obje_tota_ocul',
          hidden: true,
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
        },
        {
          text: 'obje tota prim',
          datafield: 'obje_tota_prim_ocul',
          hidden: true,
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
        },
        {
          text: 'porc tota prim',
          datafield: 'porc_tota_prim_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_prim
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
          text: 'obje tota segu',
          datafield: 'obje_tota_segu_ocul',
          hidden: true,
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
        },
        {
          text: 'fact tota',
          datafield: 'fact_tota_ocul',
          hidden: true,
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
        },
        {
          text: 'cump fact tota',
          datafield: 'cump_fact_tota_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_segu
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
          text: 'dife tota',
          datafield: 'dife_tota_ocul',
          hidden: true,
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
        },
        {
          text: 'cump tota',
          datafield: 'cump_tota_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_camp
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
          text: 'obje inco camp',
          datafield: 'obje_inco_camp_ocul',
          hidden: true,
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
        },
        {
          text: 'obje inco',
          datafield: 'obje_inco_ocul',
          hidden: true,
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
        },
        {
          text: 'obje inco prim',
          datafield: 'obje_inco_prim_ocul',
          hidden: true,
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
        },
        {
          text: 'porc inco prim',
          datafield: 'porc_inco_prim_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_prim
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
          text: 'obje inco segu',
          datafield: 'obje_inco_segu_ocul',
          hidden: true,
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
        },
        {
          text: 'fact inco',
          datafield: 'fact_inco_ocul',
          hidden: true,
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
        },
        {
          text: 'cump fact inco',
          datafield: 'cump_fact_inco_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_segu
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
          text: 'dife inco',
          datafield: 'dife_inco_ocul',
          hidden: true,
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
        },
        {
          text: 'cump inco',
          datafield: 'cump_inco_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_camp
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
          text: 'obje rete camp',
          datafield: 'obje_rete_camp_ocul',
          hidden: true,
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
        },
        {
          text: 'obje rete',
          datafield: 'obje_rete_ocul',
          hidden: true,
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
        },
        {
          text: 'obje rete prim',
          datafield: 'obje_rete_prim_ocul',
          hidden: true,
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
        },
        {
          text: 'porc rete prim',
          datafield: 'porc_rete_prim_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_prim
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
          text: 'obje rete segu',
          datafield: 'obje_rete_segu_ocul',
          hidden: true,
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
        },
        {
          text: 'fact rete',
          datafield: 'fact_rete_ocul',
          hidden: true,
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
        },
        {
          text: 'cump fact rete',
          datafield: 'cump_fact_rete_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_segu
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
          text: 'dife rete',
          datafield: 'dife_rete_ocul',
          hidden: true,
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
        },
        {
          text: 'cump rete',
          datafield: 'cump_rete_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_camp
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
          text: 'obje capi',
          datafield: 'obje_capi_ocul',
          hidden: true,
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
        },
        {
          text: 'repr capi',
          datafield: 'repr_capi_ocul',
          hidden: true,
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
        },
        {
          text: 'fact capi',
          datafield: 'fact_capi_ocul',
          hidden: true,
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
        },
        {
          text: 'porc capi',
          datafield: 'porc_capi_ocul',
          hidden: true,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_capi
                obje += record.repr_capi
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
          text: 'Corte',
          datafield: 'codi_cort',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
          groupable: false,
          pinned,
        },
        {
          text: 'Area',
          datafield: 'codi_area',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
          groupable: false,
          pinned,
        },
        {
          text: 'Zona',
          datafield: 'codi_zona',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
          groupable: false,
          pinned,
        },
        {
          text: 'Act. Inic.',
          datafield: 'acti_inic',
          width: '80',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'n',
          pinned,
          groupable: false,
          aggregates: [
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
          text: 'Obje. Camp.',
          datafield: 'obje_tota_camp',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: 'Obje. Form. Exito',
          datafield: 'obje_tota',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'n',
          groupable: false,
          aggregates: [
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
          text: 'Proyeccion',
          datafield: 'obje_tota_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: '% Cump. Proy.',
          datafield: 'porc_tota_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_prim
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
          columngroup: 'tota',
        },
        {
          text: 'Reproyeccion',
          datafield: 'obje_tota_segu',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: 'Facturado',
          datafield: 'fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: '% Efec.',
          datafield: 'cump_fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_segu
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
          columngroup: 'tota',
        },
        {
          text: 'Diferencia',
          datafield: 'dife_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'tota',
        },
        {
          text: '% Cump. Obje.',
          datafield: 'cump_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_tota
                obje += record.obje_tota_camp
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
          columngroup: 'tota',
        },
        {
          text: 'Obje. Camp.',
          datafield: 'obje_inco_camp',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: 'Obje. Form. Exito',
          datafield: 'obje_inco',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: 'Proyeccion',
          datafield: 'obje_inco_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: '% Cump. Proy',
          datafield: 'porc_inco_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_prim
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
          columngroup: 'inco',
        },
        {
          text: 'Reproyeccion',
          datafield: 'obje_inco_segu',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: 'Facturado',
          datafield: 'fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: '% Efec.',
          datafield: 'cump_fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_segu
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
          columngroup: 'inco',
        },
        {
          text: 'Diferencia',
          datafield: 'dife_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'inco',
        },
        {
          text: '% Cump. Obje.',
          datafield: 'cump_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_inco
                obje += record.obje_inco_camp
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
          columngroup: 'inco',
        },
        {
          text: 'Obje. Camp.',
          datafield: 'obje_rete_camp',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: 'Obje. Form. Exito',
          datafield: 'obje_rete',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: 'Proyeccion',
          datafield: 'obje_rete_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: '% Cump. Proy.',
          datafield: 'porc_rete_prim',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_prim
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
          columngroup: 'rete',
        },
        {
          text: 'Reproyeccion',
          datafield: 'obje_rete_segu',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: 'Facturado',
          datafield: 'fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: '% Efec.',
          datafield: 'cump_fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_segu
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
          columngroup: 'rete',
        },
        {
          text: 'Diferencia',
          datafield: 'dife_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'rete',
        },
        {
          text: '% Cump. Obje.',
          datafield: 'cump_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_rete
                obje += record.obje_rete_camp
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
          columngroup: 'rete',
        },
        {
          text: 'Proyeccion',
          datafield: 'obje_capi',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'capi',
        },
        {
          text: 'Reproyeccion',
          datafield: 'repr_capi',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'capi',
        },
        {
          text: 'Facturado',
          datafield: 'fact_capi',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
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
          columngroup: 'capi',
        },
        {
          text: '% Efec.',
          datafield: 'porc_capi',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          editable: false,
          groupable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              T(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  data = 0
                  obje = 0
                }
                data += record.fact_capi
                obje += record.repr_capi
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
          columngroup: 'capi',
        },
      ]

      if (
        typeof this.$refs.repo_come_segu_cier_camp_pais_grid_cort
        !== 'undefined'
      ) {
        this.$refs.repo_come_segu_cier_camp_pais_grid_cort.columns = this.columnsCorte
      }
      if (
        typeof this.$refs.repo_come_segu_cier_camp_pais_grid_regi
        !== 'undefined'
      ) {
        this.$refs.repo_come_segu_cier_camp_pais_grid_regi.columns = this.columnsRegion
      }
      if (
        typeof this.$refs.repo_come_segu_cier_camp_pais_grid_zona
        !== 'undefined'
      ) {
        this.$refs.repo_come_segu_cier_camp_pais_grid_zona.columns = this.columnsZona
      }
    },
    repo_come_segu_cier_camp_pais_limp() {
      this.objetivoIncorporacion = '0'
      this.proyeccionIncorporacion = '0'
      this.reproyeccionIncorporacion = '0'
      this.facturadoIncorporacion = '0'
      this.efectividadIncorporacion = '0.00'
      this.cumplimientoObjetivoIncorporacion = '0.00'
      this.cumplimientoProyeccionIncorporacion = '0.00'
      this.objetivoRetencion = '0'
      this.proyeccionRetencion = '0'
      this.reproyeccionRetencion = '0'
      this.facturadoRetencion = '0'
      this.efectividadRetencion = '0.00'
      this.cumplimientoObjetivoRetencion = '0.00'
      this.cumplimientoProyeccionRetencion = '0.00'
      this.objetivoPedidos = '0'
      this.proyeccionPedidos = '0'
      this.reproyeccionPedidos = '0'
      this.facturadoPedidos = '0'
      this.efectividadPedidos = '0.00'
      this.cumplimientoObjetivoPedidos = '0.00'
      this.cumplimientoProyeccionPedidos = '0.00'
      this.codigoCampana = '0'
      this.$refs.repo_come_segu_cier_camp_pais_grid_cort.clear()
      this.$refs.repo_come_segu_cier_camp_pais_grid_cort.clearselection()
      this.$refs.repo_come_segu_cier_camp_pais_grid_regi.clear()
      this.$refs.repo_come_segu_cier_camp_pais_grid_regi.clearselection()
      this.$refs.repo_come_segu_cier_camp_pais_grid_zona.clear()
      this.$refs.repo_come_segu_cier_camp_pais_grid_zona.clearselection()
    },
    async repo_come_segu_cier_camp_pais_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_segu_cier_camp_pais',
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
    async repo_come_segu_cier_camp_pais_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_segu_cier_camp_pais_limp()
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
      } else {
        this.codigoCampana = this.seleccionCampana
        const itemMainCampana = JSON.parse(localStorage.getItem('mainCampana'))
        let campActu = 0
        if (itemMainCampana.camp_actu.length > 0) {
          campActu = itemMainCampana.camp_actu[0].codi_camp
        }
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_segu_cier_camp_pais/segu_cier_camp_pais_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.codigoCampana,
              camp_actu: campActu,
            },
          })
          this.objetivoIncorporacion = await servicio.data.data.obje_inco
          this.proyeccionIncorporacion = await servicio.data.data.proy_inco
          this.reproyeccionIncorporacion = await servicio.data.data.repr_inco
          this.facturadoIncorporacion = await servicio.data.data.fact_inco
          this.efectividadIncorporacion = await servicio.data.data.efec_inco
          this.cumplimientoObjetivoIncorporacion = await servicio.data.data.cump_inco
          this.cumplimientoProyeccionIncorporacion = await servicio.data.data.cump_inco_proy
          this.objetivoRetencion = await servicio.data.data.obje_rete
          this.proyeccionRetencion = await servicio.data.data.proy_rete
          this.reproyeccionRetencion = await servicio.data.data.repr_rete
          this.facturadoRetencion = await servicio.data.data.fact_rete
          this.efectividadRetencion = await servicio.data.data.efec_rete
          this.cumplimientoObjetivoRetencion = await servicio.data.data.cump_rete
          this.cumplimientoProyeccionRetencion = await servicio.data.data.cump_rete_proy
          this.objetivoPedidos = await servicio.data.data.obje_tota
          this.proyeccionPedidos = await servicio.data.data.proy_tota
          this.reproyeccionPedidos = await servicio.data.data.repr_tota
          this.facturadoPedidos = await servicio.data.data.fact_tota
          this.efectividadPedidos = await servicio.data.data.efec_tota
          this.cumplimientoObjetivoPedidos = await servicio.data.data.cump_tota
          this.cumplimientoProyeccionPedidos = await servicio.data.data.cump_tota_proy
          this.sourceCorte.localdata = await servicio.data.data_glob
          this.sourceCorte.datatype = 'json'
          this.$refs.repo_come_segu_cier_camp_pais_grid_cort.updatebounddata(
            'cells',
          )
          this.sourceRegion.localdata = await servicio.data.data_glob_area
          this.sourceRegion.datatype = 'json'
          this.$refs.repo_come_segu_cier_camp_pais_grid_regi.updatebounddata(
            'cells',
          )
          this.sourceZona.localdata = await servicio.data.data_deta
          this.sourceZona.datatype = 'json'
          this.$refs.repo_come_segu_cier_camp_pais_grid_zona.updatebounddata(
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
    async repo_come_segu_cier_camp_pais_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoCort = this.$refs.repo_come_segu_cier_camp_pais_grid_cort.getdatainformation()
      const dataRowsCort = dataInfoCort.rowscount
      const dataInfoRegi = this.$refs.repo_come_segu_cier_camp_pais_grid_regi.getdatainformation()
      const dataRowsRegi = dataInfoRegi.rowscount
      const dataInfoZona = this.$refs.repo_come_segu_cier_camp_pais_grid_zona.getdatainformation()
      const dataRowsZona = dataInfoZona.rowscount
      if (dataRowsCort === 0) {
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
                'No tiene información para exportar a excel (Consolidado Corte)',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else if (dataRowsRegi === 0) {
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
                'No tiene información para exportar a excel (Consolidado Corte Región)',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else if (dataRowsZona === 0) {
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
              text: 'No tiene información para exportar a excel (Detalle Zona)',
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
            url: `${store.state.app.webService}/sami_v1/repo_come_segu_cier_camp_pais/segu_cier_camp_pais_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              obje_inco: this.objetivoIncorporacion,
              proy_inco: this.proyeccionIncorporacion,
              repr_inco: this.reproyeccionIncorporacion,
              fact_inco: this.facturadoIncorporacion,
              efec_inco: this.efectividadIncorporacion,
              cump_inco: this.cumplimientoObjetivoIncorporacion,
              cump_inco_proy: this.cumplimientoProyeccionIncorporacion,
              obje_rete: this.objetivoRetencion,
              proy_rete: this.proyeccionRetencion,
              repr_rete: this.reproyeccionRetencion,
              fact_rete: this.facturadoRetencion,
              efec_rete: this.efectividadRetencion,
              cump_rete: this.cumplimientoObjetivoRetencion,
              cump_rete_proy: this.cumplimientoProyeccionRetencion,
              obje_tota: this.objetivoPedidos,
              proy_tota: this.proyeccionPedidos,
              repr_tota: this.reproyeccionPedidos,
              fact_tota: this.facturadoPedidos,
              efec_tota: this.efectividadPedidos,
              cump_tota: this.cumplimientoObjetivoPedidos,
              cump_tota_proy: this.cumplimientoProyeccionPedidos,
              data_glob: this.$refs.repo_come_segu_cier_camp_pais_grid_cort.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_glob_area: this.$refs.repo_come_segu_cier_camp_pais_grid_regi.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_deta: this.$refs.repo_come_segu_cier_camp_pais_grid_zona.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
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
