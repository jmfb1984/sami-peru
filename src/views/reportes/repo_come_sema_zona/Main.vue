<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_sema_zona_gene()"
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
        @click="repo_come_sema_zona_limp()"
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
        @click="repo_come_sema_zona_gene()"
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
        @click="repo_come_sema_zona_exce()"
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
        @click="repo_come_sema_zona_limp()"
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
              class="mb-1 mb-md-0"
              lg="2"
              md="2"
              sm="12"
              xs="12"
            >
              <span class="">Lima - Provincia</span>
            </b-col>
            <b-col
              class="mb-1 mb-md-0"
              lg="2"
              md="2"
              sm="12"
              xs="12"
            >
              <span class="">{{ limaProvincia }}</span>
            </b-col>
            <b-col
              class="mb-1 mb-md-0"
              lg="2"
              md="2"
              sm="12"
              xs="12"
            >
              <span class="">Nacional - Advance</span>
            </b-col>
            <b-col
              class="mb-1 mb-md-0"
              lg="2"
              md="2"
              sm="12"
              xs="12"
            >
              <span class="">{{ nacionalAdvance }}</span>
            </b-col>
            <b-col
              class="mb-1 mb-md-0"
              lg="2"
              md="2"
              sm="12"
              xs="12"
            >
              <span class="">Nivel Zona</span>
            </b-col>
            <b-col
              lg="2"
              md="2"
              sm="12"
              xs="12"
            >
              <span class="">{{ nivelZona }}</span>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card title="Incorporación">
          <JqxGrid
            ref="repo_come_sema_zona_grid_inco"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsIncorporacion"
            :source="dataAdapterIncorporacion"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Consecutividad Nuevas">
          <JqxGrid
            ref="repo_come_sema_zona_grid_cons_nuev"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsConsecutividadNuevas"
            :source="dataAdapterConsecutividadNuevas"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Pedido de retención">
          <JqxGrid
            ref="repo_come_sema_zona_grid_rete"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsRetencion"
            :source="dataAdapterRetencion"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Pedidos totales">
          <JqxGrid
            ref="repo_come_sema_zona_grid_pedi_tota"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsPedidosTotales"
            :source="dataAdapterPedidosTotales"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Plan de carrera">
          <JqxGrid
            ref="repo_come_sema_zona_grid_plan_carr"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsPlanCarrera"
            :source="dataAdapterPlanCarrera"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Consecutividad pedido de retención">
          <JqxGrid
            ref="repo_come_sema_zona_grid_cons_rete"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsConsecutividadRetencion"
            :source="dataAdapterConsecutividadRetencion"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="% Actividad">
          <JqxGrid
            ref="repo_come_sema_zona_grid_acti"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsActividad"
            :source="dataAdapterActividad"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Cobranza">
          <JqxGrid
            ref="repo_come_sema_zona_grid_cobr"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsCobranza"
            :source="dataAdapterCobranza"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Capitalización">
          <JqxGrid
            ref="repo_come_sema_zona_grid_capi"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsCapitalizacion"
            :source="dataAdapterCapitalizacion"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Retención pegs">
          <JqxGrid
            ref="repo_come_sema_zona_grid_rete_pegs"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsRetencionPegs"
            :source="dataAdapterRetencionPegs"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Nro de líderes">
          <JqxGrid
            ref="repo_come_sema_zona_grid_nume_lide"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsNumeroLideres"
            :source="dataAdapterNumeroLideres"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Nivel de líderes">
          <JqxGrid
            ref="repo_come_sema_zona_grid_nive_lide"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsNivelLider"
            :source="dataAdapterNivelLider"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Líderes segun plan de carrera">
          <JqxGrid
            ref="repo_come_sema_zona_grid_lide_plan_carr"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsLiderPlanCarrera"
            :source="dataAdapterLiderPlanCarrera"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Venta linea">
          <JqxGrid
            ref="repo_come_sema_zona_grid_vent_line"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsVentaLinea"
            :source="dataAdapterVentaLinea"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="PPP facturado">
          <JqxGrid
            ref="repo_come_sema_zona_grid_pppp_fact"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsPppFacturado"
            :source="dataAdapterPppFacturado"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Venta recepcionada">
          <JqxGrid
            ref="repo_come_sema_zona_grid_vent_rece"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsVentaRecepcionada"
            :source="dataAdapterVentaRecepcionada"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="PPP recepcionado">
          <JqxGrid
            ref="repo_come_sema_zona_grid_pppp_rece"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsPppRecepcionado"
            :source="dataAdapterPppRecepcionado"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Faltante">
          <JqxGrid
            ref="repo_come_sema_zona_grid_falt"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsFaltante"
            :source="dataAdapterFaltante"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
          />
        </b-card>
        <b-card title="Canjes y devoluciones">
          <JqxGrid
            ref="repo_come_sema_zona_grid_canj"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsCanje"
            :source="dataAdapterCanje"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="false"
            :sortmode="'many'"
            :filterable="false"
            :altrows="false"
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
import selectCampanaZona from '@/views/components/FiltroCampanaZona.vue'
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
      codi_camp_1: '0',
      codi_camp_2: '0',
      codi_camp_3: '0',
      codi_camp_4: '0',
      codi_camp_5: '0',
      codi_camp_6: '0',
      codigoZona: '',
      limaProvincia: '-',
      nacionalAdvance: '-',
      nivelZona: '-',
      // eslint-disable-next-line
      dataAdapterPedidosTotales: new jqx.dataAdapter(this.sourcePedidosTotales),
      // eslint-disable-next-line
      dataAdapterIncorporacion: new jqx.dataAdapter(this.sourceIncorporacion),
      // eslint-disable-next-line
      dataAdapterRetencion: new jqx.dataAdapter(this.sourceRetencion),
      // eslint-disable-next-line
      dataAdapterActividad: new jqx.dataAdapter(this.sourceActividad),
      // eslint-disable-next-line
      dataAdapterConsecutividadNuevas: new jqx.dataAdapter(
        this.sourceConsecutividadNuevas,
      ),
      // eslint-disable-next-line
      dataAdapterCapitalizacion: new jqx.dataAdapter(this.sourceCapitalizacion),
      // eslint-disable-next-line
      dataAdapterCobranza: new jqx.dataAdapter(this.sourceCobranza),
      // eslint-disable-next-line
      dataAdapterPlanCarrera: new jqx.dataAdapter(this.sourcePlanCarrera),
      // eslint-disable-next-line
      dataAdapterConsecutividadRetencion: new jqx.dataAdapter(
        this.sourceConsecutividadRetencion,
      ),
      // eslint-disable-next-line
      dataAdapterNumeroLideres: new jqx.dataAdapter(this.sourceNumeroLideres),
      // eslint-disable-next-line
      dataAdapterPppFacturado: new jqx.dataAdapter(this.sourcePppFacturado),
      // eslint-disable-next-line
      dataAdapterPppRecepcionado: new jqx.dataAdapter(
        this.sourcePppRecepcionado,
      ),
      // eslint-disable-next-line
      dataAdapterVentaLinea: new jqx.dataAdapter(this.sourceVentaLinea),
      // eslint-disable-next-line
      dataAdapterVentaRecepcionada: new jqx.dataAdapter(
        this.sourceVentaRecepcionada,
      ),
      // eslint-disable-next-line
      dataAdapterFaltante: new jqx.dataAdapter(this.sourceFaltante),
      // eslint-disable-next-line
      dataAdapterCanje: new jqx.dataAdapter(this.sourceCanje),
      // eslint-disable-next-line
      dataAdapterRetencionPegs: new jqx.dataAdapter(this.sourceRetencionPegs),
      // eslint-disable-next-line
      dataAdapterNivelLider: new jqx.dataAdapter(this.sourceNivelLider),
      // eslint-disable-next-line
      dataAdapterLiderPlanCarrera: new jqx.dataAdapter(
        this.sourceLiderPlanCarrera,
      ),
    }
  },
  beforeCreate() {
    this.sourcePedidosTotales = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'string' },
        { name: 'codi_camp_2', type: 'string' },
        { name: 'codi_camp_3', type: 'string' },
        { name: 'codi_camp_4', type: 'string' },
        { name: 'codi_camp_5', type: 'string' },
        { name: 'codi_camp_6', type: 'string' },
        { name: 'tota_camp', type: 'string' },
      ],
      datatype: 'array',
    }
    this.sourceIncorporacion = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'string' },
        { name: 'codi_camp_2', type: 'string' },
        { name: 'codi_camp_3', type: 'string' },
        { name: 'codi_camp_4', type: 'string' },
        { name: 'codi_camp_5', type: 'string' },
        { name: 'codi_camp_6', type: 'string' },
        { name: 'tota_camp', type: 'string' },
      ],
      datatype: 'array',
    }
    this.sourceRetencion = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'string' },
        { name: 'codi_camp_2', type: 'string' },
        { name: 'codi_camp_3', type: 'string' },
        { name: 'codi_camp_4', type: 'string' },
        { name: 'codi_camp_5', type: 'string' },
        { name: 'codi_camp_6', type: 'string' },
        { name: 'tota_camp', type: 'string' },
      ],
      datatype: 'array',
    }
    this.sourceActividad = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_camp_5', type: 'number' },
        { name: 'codi_camp_6', type: 'number' },
        { name: 'tota_camp', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceConsecutividadNuevas = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_camp_5', type: 'number' },
        { name: 'codi_camp_6', type: 'number' },
        { name: 'tota_camp', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceCapitalizacion = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_camp_5', type: 'number' },
        { name: 'codi_camp_6', type: 'number' },
        { name: 'tota_camp', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceCobranza = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_camp_5', type: 'number' },
        { name: 'codi_camp_6', type: 'number' },
        { name: 'tota_camp', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourcePlanCarrera = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'string' },
        { name: 'codi_camp_2', type: 'string' },
        { name: 'codi_camp_3', type: 'string' },
        { name: 'codi_camp_4', type: 'string' },
        { name: 'codi_camp_5', type: 'string' },
        { name: 'codi_camp_6', type: 'string' },
        { name: 'tota_camp', type: 'string' },
      ],
      datatype: 'array',
    }
    this.sourceConsecutividadRetencion = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_camp_5', type: 'number' },
        { name: 'codi_camp_6', type: 'number' },
        { name: 'tota_camp', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceNumeroLideres = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_camp_5', type: 'number' },
        { name: 'codi_camp_6', type: 'number' },
        { name: 'tota_camp', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourcePppFacturado = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_camp_5', type: 'number' },
        { name: 'codi_camp_6', type: 'number' },
        { name: 'tota_camp', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourcePppRecepcionado = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_camp_5', type: 'number' },
        { name: 'codi_camp_6', type: 'number' },
        { name: 'tota_camp', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceVentaLinea = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_camp_5', type: 'number' },
        { name: 'codi_camp_6', type: 'number' },
        { name: 'tota_camp', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceVentaRecepcionada = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_camp_5', type: 'number' },
        { name: 'codi_camp_6', type: 'number' },
        { name: 'tota_camp', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceFaltante = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_camp_5', type: 'number' },
        { name: 'codi_camp_6', type: 'number' },
        { name: 'tota_camp', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceCanje = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_camp_5', type: 'number' },
        { name: 'codi_camp_6', type: 'number' },
        { name: 'tota_camp', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceRetencionPegs = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_camp_5', type: 'number' },
        { name: 'codi_camp_6', type: 'number' },
        { name: 'tota_camp', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceNivelLider = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_camp_5', type: 'number' },
        { name: 'codi_camp_6', type: 'number' },
        { name: 'tota_camp', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceLiderPlanCarrera = {
      localdata: [],
      datafields: [
        { name: 'nomb_conc', type: 'string' },
        { name: 'codi_camp_1', type: 'string' },
        { name: 'codi_camp_2', type: 'string' },
        { name: 'codi_camp_3', type: 'string' },
        { name: 'codi_camp_4', type: 'string' },
        { name: 'codi_camp_5', type: 'string' },
        { name: 'codi_camp_6', type: 'string' },
        { name: 'tota_camp', type: 'string' },
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
    this.repo_come_sema_zona_inic()
    this.repo_come_sema_zona_visi()
  },
  created() {
    this.handleWindowResize()
    const userData = JSON.parse(localStorage.getItem('userData'))
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    const itemZona = JSON.parse(userData.zona)
    itemCampana = itemCampana.camp.slice(0, 19)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))
    itemZona.forEach(element => this.dataZona.push(element.codi_zona))
    this.seleccionCampana = itemCampana[0].codi_camp
    this.seleccionZona = itemZona[0].codi_zona
  },
  methods: {
    setCampana(value) {
      this.seleccionCampana = value
    },
    setZona(value) {
      this.seleccionZona = value
    },
    async repo_come_sema_zona_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_sema_zona',
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
    handleWindowResize() {
      let nombConc = ''
      let camp1 = ''
      let camp2 = ''
      let camp3 = ''
      let camp4 = ''
      let camp5 = ''
      let camp6 = ''
      let totaCamp = ''

      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          nombConc = '50'
          camp1 = '20'
          camp2 = '20'
          camp3 = '20'
          camp4 = '20'
          camp5 = '20'
          camp6 = '20'
          totaCamp = '20'
          break
        case 'sm':
          nombConc = '50'
          camp1 = '20'
          camp2 = '20'
          camp3 = '20'
          camp4 = '20'
          camp5 = '20'
          camp6 = '20'
          totaCamp = '20'
          break
        case 'md':
          nombConc = '23'
          camp1 = '11'
          camp2 = '11'
          camp3 = '11'
          camp4 = '11'
          camp5 = '11'
          camp6 = '11'
          totaCamp = '11'
          break
        default:
          nombConc = '23'
          camp1 = '11'
          camp2 = '11'
          camp3 = '11'
          camp4 = '11'
          camp5 = '11'
          camp6 = '11'
          totaCamp = '11'
          break
      }
      this.columnsPedidosTotales = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_tota_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_tota_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_tota_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_tota_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_tota_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_tota_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_tota_clas,
        },
      ]
      this.columnsIncorporacion = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_inco_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_inco_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_inco_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_inco_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_inco_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_inco_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_inco_clas,
        },
      ]
      this.columnsRetencion = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_rete_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_rete_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_rete_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_rete_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_rete_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_rete_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_pedi_rete_clas,
        },
      ]
      this.columnsActividad = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_acti_clas,
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_acti_clas,
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_acti_clas,
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_acti_clas,
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_acti_clas,
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_acti_clas,
          cellsformat: 'P2',
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_acti_clas,
          cellsformat: 'P2',
        },
      ]
      this.columnsConsecutividadNuevas = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
          cellclassname: this.repo_come_sema_zona_cons_nuev_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
          cellclassname: this.repo_come_sema_zona_cons_nuev_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
          cellclassname: this.repo_come_sema_zona_cons_nuev_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
          cellclassname: this.repo_come_sema_zona_cons_nuev_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
          cellclassname: this.repo_come_sema_zona_cons_nuev_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
          cellclassname: this.repo_come_sema_zona_cons_nuev_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
          cellclassname: this.repo_come_sema_zona_cons_nuev_clas,
        },
      ]
      this.columnsCapitalizacion = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_capi_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_capi_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_capi_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_capi_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_capi_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_capi_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_capi_clas,
        },
      ]
      this.columnsCobranza = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_cobr_clas,
          cellsformat: 'D2',
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_cobr_clas,
          cellsformat: 'D2',
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_cobr_clas,
          cellsformat: 'D2',
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_cobr_clas,
          cellsformat: 'D2',
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_cobr_clas,
          cellsformat: 'D2',
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_cobr_clas,
          cellsformat: 'D2',
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_cobr_clas,
          cellsformat: 'D2',
        },
      ]
      this.columnsPlanCarrera = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_plan_carr_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_plan_carr_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_plan_carr_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_plan_carr_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_plan_carr_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_plan_carr_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_plan_carr_clas,
        },
      ]
      this.columnsConsecutividadRetencion = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_cons_rete_clas,
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_cons_rete_clas,
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_cons_rete_clas,
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_cons_rete_clas,
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_cons_rete_clas,
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_cons_rete_clas,
          cellsformat: 'P2',
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_cons_rete_clas,
          cellsformat: 'P2',
        },
      ]
      this.columnsNumeroLideres = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'N',
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'N',
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'N',
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'N',
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'N',
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'N',
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'D2',
        },
      ]
      this.columnsPppFacturado = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
      ]
      this.columnsPppRecepcionado = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
      ]
      this.columnsVentaLinea = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
      ]
      this.columnsVentaRecepcionada = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'C2',
        },
      ]
      this.columnsFaltante = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
      ]
      this.columnsCanje = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
      ]
      this.columnsRetencionPegs = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
      ]
      this.columnsNivelLider = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'D2',
        },
      ]
      this.columnsLiderPlanCarrera = [
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_lide_plan_carr_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_lide_plan_carr_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_lide_plan_carr_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_lide_plan_carr_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_lide_plan_carr_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_lide_plan_carr_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_zona_lide_plan_carr_clas,
        },
      ]
      if (
        typeof this.$refs.repo_come_sema_zona_grid_pedi_tota !== 'undefined'
      ) {
        this.$refs.repo_come_sema_zona_grid_pedi_tota.columns = this.columnsPedidosTotales
        this.$refs.repo_come_sema_zona_grid_inco.columns = this.columnsIncorporacion
        this.$refs.repo_come_sema_zona_grid_rete.columns = this.columnsRetencion
        this.$refs.repo_come_sema_zona_grid_acti.columns = this.columnsActividad
        this.$refs.repo_come_sema_zona_grid_cons_nuev.columns = this.columnsConsecutividadNuevas
        this.$refs.repo_come_sema_zona_grid_capi.columns = this.columnsCapitalizacion
        this.$refs.repo_come_sema_zona_grid_cobr.columns = this.columnsCobranza
        this.$refs.repo_come_sema_zona_grid_plan_carr.columns = this.columnsPlanCarrera
        this.$refs.repo_come_sema_zona_grid_cons_rete.columns = this.columnsConsecutividadRetencion
        this.$refs.repo_come_sema_zona_grid_nume_lide.columns = this.columnsNumeroLideres
        this.$refs.repo_come_sema_zona_grid_pppp_fact.columns = this.columnsPppFacturado
        this.$refs.repo_come_sema_zona_grid_pppp_rece.columns = this.columnsPppRecepcionado
        this.$refs.repo_come_sema_zona_grid_vent_line.columns = this.columnsVentaLinea
        this.$refs.repo_come_sema_zona_grid_vent_rece.columns = this.columnsVentaRecepcionada
        this.$refs.repo_come_sema_zona_grid_falt.columns = this.columnsFaltante
        this.$refs.repo_come_sema_zona_grid_canj.columns = this.columnsCanje
        this.$refs.repo_come_sema_zona_grid_rete_pegs.columns = this.columnsRetencionPegs
        this.$refs.repo_come_sema_zona_grid_nive_lide.columns = this.columnsNivelLider
        this.$refs.repo_come_sema_zona_grid_lide_plan_carr.columns = this.columnsLiderPlanCarrera
      }
    },
    repo_come_sema_zona_inic() {
      this.sourcePedidosTotales.localdata = [
        {
          nomb_conc: 'Facturado',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
        {
          nomb_conc: 'Objetivo',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
        {
          nomb_conc: '% Cumplimiento',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourcePedidosTotales.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_pedi_tota.updatebounddata('cells')

      this.sourceIncorporacion.localdata = [
        {
          nomb_conc: 'Facturado',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
        {
          nomb_conc: 'Objetivo',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
        {
          nomb_conc: '% Cumplimiento',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourceIncorporacion.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_inco.updatebounddata('cells')

      this.sourceRetencion.localdata = [
        {
          nomb_conc: 'Facturado',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
        {
          nomb_conc: 'Objetivo',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
        {
          nomb_conc: '% Cumplimiento',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourceRetencion.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_rete.updatebounddata('cells')

      this.sourceActividad.localdata = [
        {
          nomb_conc: 'Facturado',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
        {
          nomb_conc: 'Objetivo',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
        {
          nomb_conc: 'Diferencia',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourceActividad.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_acti.updatebounddata('cells')

      this.sourceConsecutividadNuevas.localdata = [
        {
          nomb_conc: '2do Pedido',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
        {
          nomb_conc: '3er Pedido',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
        {
          nomb_conc: '4to Pedido',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourceConsecutividadNuevas.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_cons_nuev.updatebounddata('cells')

      this.sourceCapitalizacion.localdata = [
        {
          nomb_conc: 'Facturado',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
      ]
      this.sourceCapitalizacion.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_capi.updatebounddata('cells')

      this.sourceCobranza.localdata = [
        {
          nomb_conc: 'Deuda 21 dias',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
        {
          nomb_conc: 'Venta Facturada',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
        {
          nomb_conc: '% 21 días',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
        {
          nomb_conc: '% 31 días',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
        {
          nomb_conc: 'Saldo Actual',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourceCobranza.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_cobr.updatebounddata('cells')

      this.sourcePlanCarrera.localdata = [
        {
          nomb_conc: 'Objetivo',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
        {
          nomb_conc: 'Diferencia',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
        {
          nomb_conc: '% Cumplimiento',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourcePlanCarrera.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_plan_carr.updatebounddata('cells')

      this.sourceConsecutividadRetencion.localdata = [
        {
          nomb_conc: 'Facturado',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
        {
          nomb_conc: 'Objetivo',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
        {
          nomb_conc: 'Diferencia',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourceConsecutividadRetencion.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_cons_rete.updatebounddata('cells')

      this.sourceNumeroLideres.localdata = [
        {
          nomb_conc: 'Nro',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0.00',
        },
      ]
      this.sourceNumeroLideres.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_nume_lide.updatebounddata('cells')

      this.sourcePppFacturado.localdata = [
        {
          nomb_conc: 'Facturado',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourcePppFacturado.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_pppp_fact.updatebounddata('cells')

      this.sourcePppRecepcionado.localdata = [
        {
          nomb_conc: 'Recepcionado',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourcePppRecepcionado.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_pppp_rece.updatebounddata('cells')

      this.sourceVentaLinea.localdata = [
        {
          nomb_conc: 'Facturado',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourceVentaLinea.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_vent_line.updatebounddata('cells')

      this.sourceVentaRecepcionada.localdata = [
        {
          nomb_conc: 'Recepcionado',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourceVentaRecepcionada.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_vent_rece.updatebounddata('cells')

      this.sourceFaltante.localdata = [
        {
          nomb_conc: 'Porcentaje',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
        {
          nomb_conc: 'Corte',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
        {
          nomb_conc: 'Diferencia',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourceFaltante.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_falt.updatebounddata('cells')

      this.sourceCanje.localdata = [
        {
          nomb_conc: 'Porcentaje',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourceCanje.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_canj.updatebounddata('cells')

      this.sourceRetencionPegs.localdata = [
        {
          nomb_conc: 'Ret. Peg 21',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
        {
          nomb_conc: 'Ret. Peg 42',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
        {
          nomb_conc: 'Ret. Peg 63',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourceRetencionPegs.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_rete_pegs.updatebounddata('cells')

      this.sourceNivelLider.localdata = [
        {
          nomb_conc: 'Nivel 0',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
        {
          nomb_conc: 'Nivel 1',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
        {
          nomb_conc: 'Nivel 2',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
        {
          nomb_conc: 'Nivel 3',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
        {
          nomb_conc: 'Nivel 4',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
        {
          nomb_conc: 'Nivel 5',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
      ]
      this.sourceNivelLider.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_nive_lide.updatebounddata('cells')

      this.sourceLiderPlanCarrera.localdata = [
        {
          nomb_conc: '',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        },
        {
          nomb_conc: 'Porcentaje',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        },
      ]
      this.sourceLiderPlanCarrera.datatype = 'array'
      this.$refs.repo_come_sema_zona_grid_lide_plan_carr.updatebounddata(
        'cells',
      )
    },
    repo_come_sema_zona_limp() {
      this.codi_camp_1 = '0'
      this.codi_camp_2 = '0'
      this.codi_camp_3 = '0'
      this.codi_camp_4 = '0'
      this.codi_camp_5 = '0'
      this.codi_camp_6 = '0'
      this.codigoZona = ''
      this.limaProvincia = '-'
      this.nacionalAdvance = '-'
      this.nivelZona = '-'
      this.handleWindowResize()
      this.repo_come_sema_zona_inic()
    },
    async repo_come_sema_zona_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_sema_zona_limp()
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
          this.codigoZona = this.seleccionZona
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_sema_zona/sema_zona_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.seleccionCampana,
              codi_zona: this.seleccionZona,
            },
          })
          this.limaProvincia = await servicio.data.lima_prov
          this.nivelZona = await servicio.data.nive_zona
          this.nacionalAdvance = await servicio.data.naci_adva
          this.codi_camp_1 = await servicio.data.codi_camp_1
          this.codi_camp_2 = await servicio.data.codi_camp_2
          this.codi_camp_3 = await servicio.data.codi_camp_3
          this.codi_camp_4 = await servicio.data.codi_camp_4
          this.codi_camp_5 = await servicio.data.codi_camp_5
          this.codi_camp_6 = await servicio.data.codi_camp_6
          this.handleWindowResize()
          this.sourcePedidosTotales.localdata = await servicio.data
            .data_pedi_tota
          this.sourcePedidosTotales.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_pedi_tota.updatebounddata(
            'cells',
          )

          this.sourceIncorporacion.localdata = await servicio.data
            .data_pedi_inco
          this.sourceIncorporacion.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_inco.updatebounddata('cells')

          this.sourceRetencion.localdata = await servicio.data.data_pedi_rete
          this.sourceRetencion.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_rete.updatebounddata('cells')

          this.sourceActividad.localdata = await servicio.data.data_acti
          this.sourceActividad.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_acti.updatebounddata('cells')

          this.sourceConsecutividadNuevas.localdata = await servicio.data
            .data_cons_nuev
          this.sourceConsecutividadNuevas.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_cons_nuev.updatebounddata(
            'cells',
          )

          this.sourceCapitalizacion.localdata = await servicio.data.data_capi
          this.sourceCapitalizacion.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_capi.updatebounddata('cells')

          this.sourceCobranza.localdata = await servicio.data.data_cobr
          this.sourceCobranza.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_cobr.updatebounddata('cells')

          this.sourcePlanCarrera.localdata = await servicio.data
            .data_plan_carr
          this.sourcePlanCarrera.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_plan_carr.updatebounddata(
            'cells',
          )

          this.sourceConsecutividadRetencion.localdata = await servicio.data
            .data_cons_rete
          this.sourceConsecutividadRetencion.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_cons_rete.updatebounddata(
            'cells',
          )

          this.sourceNumeroLideres.localdata = await servicio.data
            .data_nume_lide
          this.sourceNumeroLideres.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_nume_lide.updatebounddata(
            'cells',
          )

          this.sourcePppFacturado.localdata = await servicio.data
            .data_pppp_fact
          this.sourcePppFacturado.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_pppp_fact.updatebounddata(
            'cells',
          )

          this.sourcePppRecepcionado.localdata = await servicio.data
            .data_pppp_rece
          this.sourcePppRecepcionado.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_pppp_rece.updatebounddata(
            'cells',
          )

          this.sourceVentaLinea.localdata = await servicio.data.data_vent_line
          this.sourceVentaLinea.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_vent_line.updatebounddata(
            'cells',
          )

          this.sourceVentaRecepcionada.localdata = await servicio.data
            .data_vent_rece
          this.sourceVentaRecepcionada.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_vent_rece.updatebounddata(
            'cells',
          )

          this.sourceFaltante.localdata = await servicio.data.data_falt
          this.sourceFaltante.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_falt.updatebounddata('cells')

          this.sourceCanje.localdata = await servicio.data.data_canj
          this.sourceCanje.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_canj.updatebounddata('cells')

          this.sourceRetencionPegs.localdata = await servicio.data
            .data_rete_pegs
          this.sourceRetencionPegs.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_rete_pegs.updatebounddata(
            'cells',
          )

          this.sourceNivelLider.localdata = await servicio.data.data_nive_lide
          this.sourceNivelLider.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_nive_lide.updatebounddata(
            'cells',
          )

          this.sourceLiderPlanCarrera.localdata = await servicio.data
            .data_lide_plan_carr
          this.sourceLiderPlanCarrera.datatype = 'json'
          this.$refs.repo_come_sema_zona_grid_lide_plan_carr.updatebounddata(
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
    async repo_come_sema_zona_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      if (this.codigoZona === '') {
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
              text: 'Para exportar a excel debe de generar el reporte',
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
            url: `${store.state.app.webService}/sami_v1/repo_come_sema_zona/sema_zona_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_zona: this.codigoZona,
              lima_prov: this.limaProvincia,
              naci_adva: this.nacionalAdvance,
              nive_zona: this.nivelZona,
              data_inco: this.$refs.repo_come_sema_zona_grid_inco.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_inco_esta: this.$refs.repo_come_sema_zona_grid_inco.getstate(),
              data_cons_nuev: this.$refs.repo_come_sema_zona_grid_cons_nuev.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_cons_nuev_esta: this.$refs.repo_come_sema_zona_grid_cons_nuev.getstate(),
              data_rete: this.$refs.repo_come_sema_zona_grid_rete.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_rete_esta: this.$refs.repo_come_sema_zona_grid_rete.getstate(),
              data_pedi_tota: this.$refs.repo_come_sema_zona_grid_pedi_tota.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_pedi_tota_esta: this.$refs.repo_come_sema_zona_grid_pedi_tota.getstate(),
              data_plan_carr: this.$refs.repo_come_sema_zona_grid_plan_carr.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_plan_carr_esta: this.$refs.repo_come_sema_zona_grid_plan_carr.getstate(),
              data_cons_rete: this.$refs.repo_come_sema_zona_grid_cons_rete.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_cons_rete_esta: this.$refs.repo_come_sema_zona_grid_cons_rete.getstate(),
              data_acti: this.$refs.repo_come_sema_zona_grid_acti.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_acti_esta: this.$refs.repo_come_sema_zona_grid_acti.getstate(),
              data_cobr: this.$refs.repo_come_sema_zona_grid_cobr.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_cobr_esta: this.$refs.repo_come_sema_zona_grid_cobr.getstate(),
              data_capi: this.$refs.repo_come_sema_zona_grid_capi.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_capi_esta: this.$refs.repo_come_sema_zona_grid_capi.getstate(),
              data_rete_pegs: this.$refs.repo_come_sema_zona_grid_rete_pegs.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_rete_pegs_esta: this.$refs.repo_come_sema_zona_grid_rete_pegs.getstate(),
              data_nume_lide: this.$refs.repo_come_sema_zona_grid_nume_lide.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_nume_lide_esta: this.$refs.repo_come_sema_zona_grid_nume_lide.getstate(),
              data_nive_lide: this.$refs.repo_come_sema_zona_grid_nive_lide.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_nive_lide_esta: this.$refs.repo_come_sema_zona_grid_nive_lide.getstate(),
              data_lide_plan_carr: this.$refs.repo_come_sema_zona_grid_lide_plan_carr.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_lide_plan_carr_esta: this.$refs.repo_come_sema_zona_grid_lide_plan_carr.getstate(),
              data_vent_line: this.$refs.repo_come_sema_zona_grid_vent_line.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_vent_line_esta: this.$refs.repo_come_sema_zona_grid_vent_line.getstate(),
              data_pppp_fact: this.$refs.repo_come_sema_zona_grid_pppp_fact.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_pppp_fact_esta: this.$refs.repo_come_sema_zona_grid_pppp_fact.getstate(),
              data_vent_rece: this.$refs.repo_come_sema_zona_grid_vent_rece.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_vent_rece_esta: this.$refs.repo_come_sema_zona_grid_vent_rece.getstate(),
              data_pppp_rece: this.$refs.repo_come_sema_zona_grid_pppp_rece.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_pppp_rece_esta: this.$refs.repo_come_sema_zona_grid_pppp_rece.getstate(),
              data_falt: this.$refs.repo_come_sema_zona_grid_falt.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_falt_esta: this.$refs.repo_come_sema_zona_grid_falt.getstate(),
              data_canj: this.$refs.repo_come_sema_zona_grid_canj.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_canj_esta: this.$refs.repo_come_sema_zona_grid_canj.getstate(),
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
    repo_come_sema_zona_pedi_tota_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_zona_grid_pedi_tota.getrowdata(
          1,
        )
        let objeTota = ''
        if (columnfield === 'codi_camp_1') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_1)
        }
        if (columnfield === 'codi_camp_2') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_2)
        }
        if (columnfield === 'codi_camp_3') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_3)
        }
        if (columnfield === 'codi_camp_4') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_4)
        }
        if (columnfield === 'codi_camp_5') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_5)
        }
        if (columnfield === 'codi_camp_6') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_6)
        }
        if (columnfield === 'tota_camp') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.tota_camp)
        }
        const cumpTota = parseFloat(value).toFixed(2)
        if (objeTota === 0) {
          return ''
        }
        if (cumpTota >= 100) {
          return 'text-white bg-success'
        }
        if (cumpTota >= 94.99 && cumpTota < 100) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_zona_pedi_inco_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_zona_grid_inco.getrowdata(
          1,
        )
        let objeTota = ''
        if (columnfield === 'codi_camp_1') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_1)
        }
        if (columnfield === 'codi_camp_2') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_2)
        }
        if (columnfield === 'codi_camp_3') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_3)
        }
        if (columnfield === 'codi_camp_4') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_4)
        }
        if (columnfield === 'codi_camp_5') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_5)
        }
        if (columnfield === 'codi_camp_6') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_6)
        }
        if (columnfield === 'tota_camp') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.tota_camp)
        }
        const cumpTota = parseFloat(value).toFixed(2)
        if (objeTota === 0) {
          return ''
        }
        if (cumpTota >= 100) {
          return 'text-white bg-success'
        }
        if (cumpTota >= 94.99 && cumpTota < 100) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_zona_pedi_rete_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_zona_grid_rete.getrowdata(
          1,
        )
        let objeTota = ''
        if (columnfield === 'codi_camp_1') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_1)
        }
        if (columnfield === 'codi_camp_2') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_2)
        }
        if (columnfield === 'codi_camp_3') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_3)
        }
        if (columnfield === 'codi_camp_4') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_4)
        }
        if (columnfield === 'codi_camp_5') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_5)
        }
        if (columnfield === 'codi_camp_6') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_6)
        }
        if (columnfield === 'tota_camp') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.tota_camp)
        }
        const cumpTota = parseFloat(value).toFixed(2)
        if (objeTota === 0) {
          return ''
        }
        if (cumpTota >= 100) {
          return 'text-white bg-success'
        }
        if (cumpTota >= 94.99 && cumpTota < 100) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_zona_acti_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_zona_grid_acti.getrowdata(
          1,
        )
        let objeTota = ''
        if (columnfield === 'codi_camp_1') {
          objeTota = parseFloat(dataRecord.codi_camp_1).toFixed(2)
        }
        if (columnfield === 'codi_camp_2') {
          objeTota = parseFloat(dataRecord.codi_camp_2).toFixed(2)
        }
        if (columnfield === 'codi_camp_3') {
          objeTota = parseFloat(dataRecord.codi_camp_3).toFixed(2)
        }
        if (columnfield === 'codi_camp_4') {
          objeTota = parseFloat(dataRecord.codi_camp_4).toFixed(2)
        }
        if (columnfield === 'codi_camp_5') {
          objeTota = parseFloat(dataRecord.codi_camp_5).toFixed(2)
        }
        if (columnfield === 'codi_camp_6') {
          objeTota = parseFloat(dataRecord.codi_camp_6).toFixed(2)
        }
        if (columnfield === 'tota_camp') {
          objeTota = parseFloat(dataRecord.tota_camp).toFixed(2)
        }
        if (objeTota === '0.00') {
          return ''
        }
        if (parseFloat(value).toFixed(2) >= 0.0) {
          return 'text-white bg-success'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_zona_cobr_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_zona_grid_cobr.getrowdata(
          1,
        )
        let objeTota = ''
        if (columnfield === 'codi_camp_1') {
          objeTota = parseFloat(dataRecord.codi_camp_1).toFixed(2)
        }
        if (columnfield === 'codi_camp_2') {
          objeTota = parseFloat(dataRecord.codi_camp_2).toFixed(2)
        }
        if (columnfield === 'codi_camp_3') {
          objeTota = parseFloat(dataRecord.codi_camp_3).toFixed(2)
        }
        if (columnfield === 'codi_camp_4') {
          objeTota = parseFloat(dataRecord.codi_camp_4).toFixed(2)
        }
        if (columnfield === 'codi_camp_5') {
          objeTota = parseFloat(dataRecord.codi_camp_5).toFixed(2)
        }
        if (columnfield === 'codi_camp_6') {
          objeTota = parseFloat(dataRecord.codi_camp_6).toFixed(2)
        }
        if (columnfield === 'tota_camp') {
          objeTota = parseFloat(dataRecord.tota_camp).toFixed(2)
        }
        const cumpTota = parseFloat(value).toFixed(2)
        if (objeTota === '0.00') {
          return ''
        }
        if (cumpTota >= '87.50') {
          return 'text-white bg-success'
        }
        return 'text-white bg-danger'
      }
      if (row === 3) {
        const dataRecord = this.$refs.repo_come_sema_zona_grid_cobr.getrowdata(
          1,
        )
        let objeTota = ''
        if (columnfield === 'codi_camp_1') {
          objeTota = parseFloat(dataRecord.codi_camp_1).toFixed(2)
        }
        if (columnfield === 'codi_camp_2') {
          objeTota = parseFloat(dataRecord.codi_camp_2).toFixed(2)
        }
        if (columnfield === 'codi_camp_3') {
          objeTota = parseFloat(dataRecord.codi_camp_3).toFixed(2)
        }
        if (columnfield === 'codi_camp_4') {
          objeTota = parseFloat(dataRecord.codi_camp_4).toFixed(2)
        }
        if (columnfield === 'codi_camp_5') {
          objeTota = parseFloat(dataRecord.codi_camp_5).toFixed(2)
        }
        if (columnfield === 'codi_camp_6') {
          objeTota = parseFloat(dataRecord.codi_camp_6).toFixed(2)
        }
        if (columnfield === 'tota_camp') {
          objeTota = parseFloat(dataRecord.tota_camp).toFixed(2)
        }
        const cumpTota = parseFloat(value).toFixed(2)
        if (objeTota === '0.00') {
          return ''
        }
        if (cumpTota >= '91.50') {
          return 'text-white bg-success'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_zona_lide_plan_carr_clas(row, columnfield, value) {
      if (row === 1) {
        const cumpTota = parseFloat(value).toFixed(2)
        if (value === '0.00') {
          return ''
        }
        if (cumpTota >= 70) {
          return 'text-white bg-success'
        }
        if (cumpTota >= 50 && cumpTota < 70) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_zona_capi_clas(row, columnfield, value) {
      if (this.codigoZona !== '') {
        if (columnfield === 'codi_camp_1') {
          if (this.codi_camp_1 === '0') {
            return ''
          }
          if (value >= 0) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_2') {
          if (this.codi_camp_2 === '0') {
            return ''
          }
          if (value >= 0) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_3') {
          if (this.codi_camp_3 === '0') {
            return ''
          }
          if (value >= 0) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_4') {
          if (this.codi_camp_4 === '0') {
            return ''
          }
          if (value >= 0) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_5') {
          if (this.codi_camp_5 === '0') {
            return ''
          }
          if (value >= 0) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_6') {
          if (this.codi_camp_6 === '0') {
            return ''
          }
          if (value >= 0) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'tota_camp') {
          if (value >= 0) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
      }
      return ''
    },
    repo_come_sema_zona_cons_nuev_clas(row, columnfield, value) {
      if (row === 0 && this.codigoZona !== '') {
        const cumpTota = parseFloat(value).toFixed(2)
        if (columnfield === 'codi_camp_1') {
          if (this.codi_camp_1 === '0') {
            return ''
          }
          if (cumpTota >= 80) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_2') {
          if (this.codi_camp_2 === '0') {
            return ''
          }
          if (cumpTota >= 80) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_3') {
          if (this.codi_camp_3 === '0') {
            return ''
          }
          if (cumpTota >= 80) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_4') {
          if (this.codi_camp_4 === '0') {
            return ''
          }
          if (cumpTota >= 80) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_5') {
          if (this.codi_camp_5 === '0') {
            return ''
          }
          if (cumpTota >= 80) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_6') {
          if (this.codi_camp_6 === '0') {
            return ''
          }
          if (cumpTota >= 80) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'tota_camp') {
          if (cumpTota >= 80) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
      }
      if (row === 1 && this.codigoZona !== '') {
        const cumpTota = parseFloat(value).toFixed(2)
        if (columnfield === 'codi_camp_1') {
          if (this.codi_camp_1 === '0') {
            return ''
          }
          if (cumpTota >= 70) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_2') {
          if (this.codi_camp_2 === '0') {
            return ''
          }
          if (cumpTota >= 70) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_3') {
          if (this.codi_camp_3 === '0') {
            return ''
          }
          if (cumpTota >= 70) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_4') {
          if (this.codi_camp_4 === '0') {
            return ''
          }
          if (cumpTota >= 70) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_5') {
          if (this.codi_camp_5 === '0') {
            return ''
          }
          if (cumpTota >= 70) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_6') {
          if (this.codi_camp_6 === '0') {
            return ''
          }
          if (cumpTota >= 70) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'tota_camp') {
          if (cumpTota >= 70) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
      }
      if (row === 2 && this.codigoZona !== '') {
        const cumpTota = parseFloat(value).toFixed(2)
        if (columnfield === 'codi_camp_1') {
          if (this.codi_camp_1 === '0') {
            return ''
          }
          if (cumpTota >= 60) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_2') {
          if (this.codi_camp_2 === '0') {
            return ''
          }
          if (cumpTota >= 60) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_3') {
          if (this.codi_camp_3 === '0') {
            return ''
          }
          if (cumpTota >= 60) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_4') {
          if (this.codi_camp_4 === '0') {
            return ''
          }
          if (cumpTota >= 60) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_5') {
          if (this.codi_camp_5 === '0') {
            return ''
          }
          if (cumpTota >= 60) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'codi_camp_6') {
          if (this.codi_camp_6 === '0') {
            return ''
          }
          if (cumpTota >= 60) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        if (columnfield === 'tota_camp') {
          if (cumpTota >= 60) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
      }
      return ''
    },
    repo_come_sema_zona_plan_carr_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_zona_grid_plan_carr.getrowdata(
          0,
        )
        let objeTota = ''
        if (columnfield === 'codi_camp_1') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_1)
        }
        if (columnfield === 'codi_camp_2') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_2)
        }
        if (columnfield === 'codi_camp_3') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_3)
        }
        if (columnfield === 'codi_camp_4') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_4)
        }
        if (columnfield === 'codi_camp_5') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_5)
        }
        if (columnfield === 'codi_camp_6') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.codi_camp_6)
        }
        if (columnfield === 'tota_camp') {
          // eslint-disable-next-line
          objeTota = parseInt(dataRecord.tota_camp)
        }
        const cumpTota = parseFloat(value).toFixed(2)
        if (objeTota === 0) {
          return ''
        }
        if (cumpTota >= 100) {
          return 'text-white bg-success'
        }
        if (cumpTota >= 94.99 && cumpTota < 100) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_zona_cons_rete_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_zona_grid_cons_rete.getrowdata(
          0,
        )
        let objeTota = ''
        if (columnfield === 'codi_camp_1') {
          // eslint-disable-next-line
          objeTota = parseFloat(dataRecord.codi_camp_1).toFixed(2)
        }
        if (columnfield === 'codi_camp_2') {
          // eslint-disable-next-line
          objeTota = parseFloat(dataRecord.codi_camp_2).toFixed(2)
        }
        if (columnfield === 'codi_camp_3') {
          // eslint-disable-next-line
          objeTota = parseFloat(dataRecord.codi_camp_3).toFixed(2)
        }
        if (columnfield === 'codi_camp_4') {
          // eslint-disable-next-line
          objeTota = parseFloat(dataRecord.codi_camp_4).toFixed(2)
        }
        if (columnfield === 'codi_camp_5') {
          // eslint-disable-next-line
          objeTota = parseFloat(dataRecord.codi_camp_5).toFixed(2)
        }
        if (columnfield === 'codi_camp_6') {
          // eslint-disable-next-line
          objeTota = parseFloat(dataRecord.codi_camp_6).toFixed(2)
        }
        if (columnfield === 'tota_camp') {
          // eslint-disable-next-line
          objeTota = parseFloat(dataRecord.tota_camp).toFixed(2)
        }
        const cumpTota = parseFloat(value).toFixed(2)
        if (objeTota > 0) {
          if (cumpTota >= 0) {
            return 'text-white bg-success'
          }
          return 'text-white bg-danger'
        }
        return ''
      }
      return ''
    },
  },
}
</script>
<style lang="scss"></style>
