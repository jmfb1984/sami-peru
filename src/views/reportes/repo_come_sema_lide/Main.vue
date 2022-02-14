<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_sema_lide_gene()"
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
        @click="repo_come_sema_lide_limp()"
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
        @click="repo_come_sema_lide_gene()"
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
        @click="repo_come_sema_lide_exce()"
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
        @click="repo_come_sema_lide_limp()"
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
              <span class="d-flex mt-50">Campaña</span>
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
                ref="refCampana"
                v-model="seleccionCampana"
                :options="dataCampana"
                class="dropdown-150"
              >
                <span
                  slot="no-options"
                  @click="$refs.refCampana.open = false"
                >
                  Campaña no existe.
                </span>
              </v-select>
            </b-col>
            <b-col class="d-block d-lg-none" />
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Zona</span>
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
                ref="refZona"
                v-model="seleccionZona"
                :options="dataZona"
                class="dropdown-150"
                @input="setZona"
              >
                <span
                  slot="no-options"
                  @click="$refs.refZona.open = false"
                >
                  Zona no existe.
                </span>
              </v-select>
            </b-col>
            <b-col class="d-block d-lg-none" />
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Sector</span>
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
                ref="refSector"
                v-model="seleccionSector"
                :options="dataSector"
                class="dropdown-150"
              >
                <span
                  slot="no-options"
                  @click="$refs.refSector.open = false"
                >
                  Sector no existe.
                </span>
              </v-select>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card title="Pedidos Totales">
          <JqxGrid
            ref="repo_come_sema_lide_grid_pedi_tota"
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
        <b-card title="Incorporación">
          <JqxGrid
            ref="repo_come_sema_lide_grid_inco"
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
        <b-card title="Pedido de Retención">
          <JqxGrid
            ref="repo_come_sema_lide_grid_rete"
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
        <b-card title="% Actividad">
          <JqxGrid
            ref="repo_come_sema_lide_grid_acti"
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
        <b-card title="Consecutividad Pedidos de Retención">
          <JqxGrid
            ref="repo_come_sema_lide_grid_cons"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsConsecutividad"
            :source="dataAdapterConsecutividad"
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
        <b-card title="Consecutividad 2do Pedido">
          <JqxGrid
            ref="repo_come_sema_lide_grid_cons_segu"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsConsecutividadSegundo"
            :source="dataAdapterConsecutividadSegundo"
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
        <b-card title="Consecutividad 3er Pedido">
          <JqxGrid
            ref="repo_come_sema_lide_grid_cons_terc"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsConsecutividadTercero"
            :source="dataAdapterConsecutividadTercero"
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
        <b-card title="Consecutividad 4to Pedido">
          <JqxGrid
            ref="repo_come_sema_lide_grid_cons_cuar"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsConsecutividadCuarto"
            :source="dataAdapterConsecutividadCuarto"
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
        <b-card title="Suma Ret. Pegs">
          <JqxGrid
            ref="repo_come_sema_lide_grid_suma_pegs"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsSumaPegs"
            :source="dataAdapterSumaPegs"
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
            ref="repo_come_sema_lide_grid_capi"
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
        <b-card title="Cobranza 21 días">
          <JqxGrid
            ref="repo_come_sema_lide_grid_cobr"
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
        <b-card title="Canjes y Devoluciones">
          <JqxGrid
            ref="repo_come_sema_lide_grid_canj"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsCanjes"
            :source="dataAdapterCanjes"
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
        <b-card title="Nivel Lider">
          <JqxGrid
            ref="repo_come_sema_lide_grid_nive"
            :width="'100%'"
            :autoheight="true"
            :columns="columnsNivel"
            :source="dataAdapterNivel"
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
    vSelect,
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
      dataSector: [],
      seleccionSector: [],
      codi_camp_1: '0',
      codi_camp_2: '0',
      codi_camp_3: '0',
      codi_camp_4: '0',
      codi_camp_5: '0',
      codi_camp_6: '0',
      codigoSector: '0',
      // eslint-disable-next-line
      dataAdapterPedidosTotales: new jqx.dataAdapter(this.sourcePedidosTotales),
      // eslint-disable-next-line
      dataAdapterIncorporacion: new jqx.dataAdapter(this.sourceIncorporacion),
      // eslint-disable-next-line
      dataAdapterRetencion: new jqx.dataAdapter(this.sourceRetencion),
      // eslint-disable-next-line
      dataAdapterActividad: new jqx.dataAdapter(this.sourceActividad),
      // eslint-disable-next-line
      dataAdapterConsecutividad: new jqx.dataAdapter(this.sourceConsecutividad),
      // eslint-disable-next-line
      dataAdapterConsecutividadSegundo: new jqx.dataAdapter(this.sourceConsecutividadSegundo),
      // eslint-disable-next-line
      dataAdapterConsecutividadTercero: new jqx.dataAdapter(this.sourceConsecutividadTercero),
      // eslint-disable-next-line
      dataAdapterConsecutividadCuarto: new jqx.dataAdapter(this.sourceConsecutividadCuarto),
      // eslint-disable-next-line
      dataAdapterSumaPegs: new jqx.dataAdapter(this.sourceSumaPegs),
      // eslint-disable-next-line
      dataAdapterCapitalizacion: new jqx.dataAdapter(this.sourceCapitalizacion),
      // eslint-disable-next-line
      dataAdapterCobranza: new jqx.dataAdapter(this.sourceCobranza),
      // eslint-disable-next-line
      dataAdapterCanjes: new jqx.dataAdapter(this.sourceCanjes),
      // eslint-disable-next-line
      dataAdapterNivel: new jqx.dataAdapter(this.sourceNivel),
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
    this.sourceConsecutividad = {
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
    this.sourceConsecutividadSegundo = {
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
    this.sourceConsecutividadTercero = {
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
    this.sourceConsecutividadCuarto = {
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
    this.sourceSumaPegs = {
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
    this.sourceCapitalizacion = {
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
    this.sourceCobranza = {
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
    this.sourceCanjes = {
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
    this.sourceNivel = {
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
    this.repo_come_sema_lide_inic()
    this.repo_come_sema_lide_visi()
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
  },
  methods: {
    async repo_come_sema_lide_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_sema_lide',
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
    setZona() {
      this.dataSector = []
      this.seleccionSector = null
      if (this.seleccionZona !== null) {
        this.repo_come_sema_lide_sect()
      }
    },
    async repo_come_sema_lide_sect() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/repo_come_sema_lide/sema_lide_sect`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_zona: this.seleccionZona,
          },
        })
        const dato = await servicio.data.data_glob
        dato.forEach(element => this.dataSector.push(element.codi_sect))
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
          cellclassname: this.repo_come_sema_lide_pedi_tota_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_tota_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_tota_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_tota_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_tota_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_tota_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_tota_clas,
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
          cellclassname: this.repo_come_sema_lide_pedi_inco_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_inco_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_inco_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_inco_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_inco_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_inco_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_inco_clas,
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
          cellclassname: this.repo_come_sema_lide_pedi_rete_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_rete_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_rete_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_rete_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_rete_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_rete_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_pedi_rete_clas,
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
          cellclassname: this.repo_come_sema_lide_acti_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_acti_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_acti_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_acti_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_acti_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_acti_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_acti_clas,
        },
      ]
      this.columnsConsecutividad = [
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
          cellclassname: this.repo_come_sema_lide_cons_pedi_rete_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_pedi_rete_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_pedi_rete_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_pedi_rete_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_pedi_rete_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_pedi_rete_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_pedi_rete_clas,
        },
      ]
      this.columnsConsecutividadSegundo = [
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
          cellclassname: this.repo_come_sema_lide_cons_segu_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_segu_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_segu_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_segu_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_segu_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_segu_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_segu_clas,
        },
      ]
      this.columnsConsecutividadTercero = [
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
          cellclassname: this.repo_come_sema_lide_cons_terc_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_terc_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_terc_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_terc_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_terc_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_terc_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_terc_clas,
        },
      ]
      this.columnsConsecutividadCuarto = [
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
          cellclassname: this.repo_come_sema_lide_cons_cuar_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_cuar_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_cuar_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_cuar_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_cuar_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_cuar_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cons_cuar_clas,
        },
      ]
      this.columnsSumaPegs = [
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
          cellclassname: this.repo_come_sema_lide_suma_pegs_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_suma_pegs_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_suma_pegs_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_suma_pegs_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_suma_pegs_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_suma_pegs_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_suma_pegs_clas,
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
          cellclassname: this.repo_come_sema_lide_capi_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_capi_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_capi_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_capi_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_capi_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_capi_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_capi_clas,
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
          cellclassname: this.repo_come_sema_lide_cobr_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cobr_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cobr_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cobr_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cobr_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cobr_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_cobr_clas,
        },
      ]
      this.columnsCanjes = [
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
          cellclassname: this.repo_come_sema_lide_canj_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_canj_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_canj_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_canj_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_canj_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_canj_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_sema_lide_canj_clas,
        },
      ]
      this.columnsNivel = [
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
        },
      ]
      if (
        typeof this.$refs.repo_come_sema_lide_grid_pedi_tota !== 'undefined'
      ) {
        this.$refs.repo_come_sema_lide_grid_pedi_tota.columns = this.columnsPedidosTotales
        this.$refs.repo_come_sema_lide_grid_inco.columns = this.columnsIncorporacion
        this.$refs.repo_come_sema_lide_grid_rete.columns = this.columnsRetencion
        this.$refs.repo_come_sema_lide_grid_acti.columns = this.columnsActividad
        this.$refs.repo_come_sema_lide_grid_cons.columns = this.columnsConsecutividad
        this.$refs.repo_come_sema_lide_grid_cons_segu.columns = this.columnsConsecutividadSegundo
        this.$refs.repo_come_sema_lide_grid_cons_terc.columns = this.columnsConsecutividadTercero
        this.$refs.repo_come_sema_lide_grid_cons_cuar.columns = this.columnsConsecutividadCuarto
        this.$refs.repo_come_sema_lide_grid_suma_pegs.columns = this.columnsSumaPegs
        this.$refs.repo_come_sema_lide_grid_capi.columns = this.columnsCapitalizacion
        this.$refs.repo_come_sema_lide_grid_cobr.columns = this.columnsCobranza
        this.$refs.repo_come_sema_lide_grid_canj.columns = this.columnsCanjes
        this.$refs.repo_come_sema_lide_grid_nive.columns = this.columnsNivel
      }
    },
    repo_come_sema_lide_inic() {
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
        }, {
          nomb_conc: 'Objetivo',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        }, {
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
      this.$refs.repo_come_sema_lide_grid_pedi_tota.updatebounddata('cells')

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
        }, {
          nomb_conc: 'Objetivo',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        }, {
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
      this.$refs.repo_come_sema_lide_grid_inco.updatebounddata('cells')

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
        }, {
          nomb_conc: 'Objetivo',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        }, {
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
      this.$refs.repo_come_sema_lide_grid_rete.updatebounddata('cells')

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
        }, {
          nomb_conc: 'Objetivo',
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
      this.$refs.repo_come_sema_lide_grid_acti.updatebounddata('cells')

      this.sourceConsecutividad.localdata = [
        {
          nomb_conc: 'Facturado',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        }, {
          nomb_conc: 'Objetivo',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        }, {
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
      this.sourceConsecutividad.datatype = 'array'
      this.$refs.repo_come_sema_lide_grid_cons.updatebounddata('cells')

      this.sourceConsecutividadSegundo.localdata = [
        {
          nomb_conc: 'Facturado',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        }, {
          nomb_conc: 'Objetivo',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        }, {
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
      this.sourceConsecutividadSegundo.datatype = 'array'
      this.$refs.repo_come_sema_lide_grid_cons_segu.updatebounddata('cells')

      this.sourceConsecutividadTercero.localdata = [
        {
          nomb_conc: 'Facturado',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        }, {
          nomb_conc: 'Objetivo',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        }, {
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
      this.sourceConsecutividadTercero.datatype = 'array'
      this.$refs.repo_come_sema_lide_grid_cons_terc.updatebounddata('cells')

      this.sourceConsecutividadCuarto.localdata = [
        {
          nomb_conc: 'Facturado',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        }, {
          nomb_conc: 'Objetivo',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        }, {
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
      this.sourceConsecutividadCuarto.datatype = 'array'
      this.$refs.repo_come_sema_lide_grid_cons_cuar.updatebounddata('cells')

      this.sourceSumaPegs.localdata = [
        {
          nomb_conc: 'Facturado',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        }, {
          nomb_conc: 'Objetivo',
          codi_camp_1: '0',
          codi_camp_2: '0',
          codi_camp_3: '0',
          codi_camp_4: '0',
          codi_camp_5: '0',
          codi_camp_6: '0',
          tota_camp: '0',
        }, {
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
      this.sourceSumaPegs.datatype = 'array'
      this.$refs.repo_come_sema_lide_grid_suma_pegs.updatebounddata('cells')

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
        }, {
          nomb_conc: 'Objetivo',
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
      this.$refs.repo_come_sema_lide_grid_capi.updatebounddata('cells')

      this.sourceCobranza.localdata = [
        {
          nomb_conc: 'Facturado',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        }, {
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
      this.sourceCobranza.datatype = 'array'
      this.$refs.repo_come_sema_lide_grid_cobr.updatebounddata('cells')

      this.sourceCanjes.localdata = [
        {
          nomb_conc: 'Venta Neta',
          codi_camp_1: '0.00',
          codi_camp_2: '0.00',
          codi_camp_3: '0.00',
          codi_camp_4: '0.00',
          codi_camp_5: '0.00',
          codi_camp_6: '0.00',
          tota_camp: '0.00',
        }, {
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
      this.sourceCanjes.datatype = 'array'
      this.$refs.repo_come_sema_lide_grid_canj.updatebounddata('cells')

      this.sourceNivel.localdata = [
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
      this.sourceNivel.datatype = 'array'
      this.$refs.repo_come_sema_lide_grid_nive.updatebounddata('cells')
    },
    repo_come_sema_lide_limp() {
      this.codigoSector = '0'
      this.repo_come_sema_lide_inic()
    },
    async repo_come_sema_lide_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_sema_lide_limp()
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
      } else if (this.seleccionSector === null || this.seleccionSector.length === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'Campo sector es obligatorio.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          this.codigoSector = this.seleccionSector
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_sema_lide/sema_lide_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.seleccionCampana,
              codi_zona: this.seleccionZona,
              codi_sect: this.seleccionSector,
            },
          })
          this.codi_camp_1 = await servicio.data.codi_camp_1
          this.codi_camp_2 = await servicio.data.codi_camp_2
          this.codi_camp_3 = await servicio.data.codi_camp_3
          this.codi_camp_4 = await servicio.data.codi_camp_4
          this.codi_camp_5 = await servicio.data.codi_camp_5
          this.codi_camp_6 = await servicio.data.codi_camp_6
          this.handleWindowResize()
          this.sourcePedidosTotales.localdata = await servicio.data.data_pedi_tota
          this.sourcePedidosTotales.datatype = 'json'
          this.$refs.repo_come_sema_lide_grid_pedi_tota.updatebounddata('cells')

          this.sourceIncorporacion.localdata = await servicio.data.data_pedi_inco
          this.sourceIncorporacion.datatype = 'json'
          this.$refs.repo_come_sema_lide_grid_inco.updatebounddata('cells')

          this.sourceRetencion.localdata = await servicio.data.data_pedi_rete
          this.sourceRetencion.datatype = 'json'
          this.$refs.repo_come_sema_lide_grid_rete.updatebounddata('cells')

          this.sourceActividad.localdata = await servicio.data.data_acti
          this.sourceActividad.datatype = 'json'
          this.$refs.repo_come_sema_lide_grid_acti.updatebounddata('cells')

          this.sourceConsecutividad.localdata = await servicio.data.data_cons_pedi_rete
          this.sourceConsecutividad.datatype = 'json'
          this.$refs.repo_come_sema_lide_grid_cons.updatebounddata('cells')

          this.sourceConsecutividadSegundo.localdata = await servicio.data.data_cons_segu
          this.sourceConsecutividadSegundo.datatype = 'json'
          this.$refs.repo_come_sema_lide_grid_cons_segu.updatebounddata('cells')

          this.sourceConsecutividadTercero.localdata = await servicio.data.data_cons_terc
          this.sourceConsecutividadTercero.datatype = 'json'
          this.$refs.repo_come_sema_lide_grid_cons_terc.updatebounddata('cells')

          this.sourceConsecutividadCuarto.localdata = await servicio.data.data_cons_cuar
          this.sourceConsecutividadCuarto.datatype = 'json'
          this.$refs.repo_come_sema_lide_grid_cons_cuar.updatebounddata('cells')

          this.sourceSumaPegs.localdata = await servicio.data.data_suma_pegs
          this.sourceSumaPegs.datatype = 'json'
          this.$refs.repo_come_sema_lide_grid_suma_pegs.updatebounddata('cells')

          this.sourceCapitalizacion.localdata = await servicio.data.data_capi
          this.sourceCapitalizacion.datatype = 'json'
          this.$refs.repo_come_sema_lide_grid_capi.updatebounddata('cells')

          this.sourceCanjes.localdata = await servicio.data.data_canj
          this.sourceCanjes.datatype = 'json'
          this.$refs.repo_come_sema_lide_grid_canj.updatebounddata('cells')

          this.sourceCobranza.localdata = await servicio.data.data_cobr
          this.sourceCobranza.datatype = 'json'
          this.$refs.repo_come_sema_lide_grid_cobr.updatebounddata('cells')

          this.sourceNivel.localdata = await servicio.data.data_nive
          this.sourceNivel.datatype = 'json'
          this.$refs.repo_come_sema_lide_grid_nive.updatebounddata('cells')

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
    async repo_come_sema_lide_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/repo_come_sema_lide/sema_lide_exce`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_sect: this.codigoSector,
            data_pedi_tota: this.$refs.repo_come_sema_lide_grid_pedi_tota.exportdata('json', null, true, null, true),
            data_pedi_tota_esta: this.$refs.repo_come_sema_lide_grid_pedi_tota.getstate(),
            data_pedi_inco: this.$refs.repo_come_sema_lide_grid_inco.exportdata('json', null, true, null, true),
            data_pedi_inco_esta: this.$refs.repo_come_sema_lide_grid_inco.getstate(),
            data_pedi_rete: this.$refs.repo_come_sema_lide_grid_rete.exportdata('json', null, true, null, true),
            data_pedi_rete_esta: this.$refs.repo_come_sema_lide_grid_rete.getstate(),
            data_cons_pedi_rete: this.$refs.repo_come_sema_lide_grid_cons.exportdata('json', null, true, null, true),
            data_cons_pedi_rete_esta: this.$refs.repo_come_sema_lide_grid_cons.getstate(),
            data_cons_segu: this.$refs.repo_come_sema_lide_grid_cons_segu.exportdata('json', null, true, null, true),
            data_cons_segu_esta: this.$refs.repo_come_sema_lide_grid_cons_segu.getstate(),
            data_cons_terc: this.$refs.repo_come_sema_lide_grid_cons_terc.exportdata('json', null, true, null, true),
            data_cons_terc_esta: this.$refs.repo_come_sema_lide_grid_cons_terc.getstate(),
            data_cons_cuar: this.$refs.repo_come_sema_lide_grid_cons_cuar.exportdata('json', null, true, null, true),
            data_cons_cuar_esta: this.$refs.repo_come_sema_lide_grid_cons_cuar.getstate(),
            data_suma_pegs: this.$refs.repo_come_sema_lide_grid_suma_pegs.exportdata('json', null, true, null, true),
            data_suma_pegs_esta: this.$refs.repo_come_sema_lide_grid_suma_pegs.getstate(),
            data_capi: this.$refs.repo_come_sema_lide_grid_capi.exportdata('json', null, true, null, true),
            data_capi_esta: this.$refs.repo_come_sema_lide_grid_capi.getstate(),
            data_cobr: this.$refs.repo_come_sema_lide_grid_cobr.exportdata('json', null, true, null, true),
            data_cobr_esta: this.$refs.repo_come_sema_lide_grid_cobr.getstate(),
            data_acti: this.$refs.repo_come_sema_lide_grid_acti.exportdata('json', null, true, null, true),
            data_acti_esta: this.$refs.repo_come_sema_lide_grid_acti.getstate(),
            data_canj: this.$refs.repo_come_sema_lide_grid_canj.exportdata('json', null, true, null, true),
            data_canj_esta: this.$refs.repo_come_sema_lide_grid_canj.getstate(),
            data_nive: this.$refs.repo_come_sema_lide_grid_nive.exportdata('json', null, true, null, true),
            data_nive_esta: this.$refs.repo_come_sema_lide_grid_nive.getstate(),
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
    },
    repo_come_sema_lide_pedi_tota_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_lide_grid_pedi_tota.getrowdata(1)
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
        if (cumpTota >= 80 && cumpTota < 100) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_lide_pedi_inco_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_lide_grid_inco.getrowdata(1)
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
        if (cumpTota >= 80 && cumpTota < 100) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_lide_pedi_rete_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_lide_grid_rete.getrowdata(1)
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
        if (cumpTota >= 95 && cumpTota < 100) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_lide_acti_clas(row, columnfield, value) {
      if (row === 0) {
        const dataRecord = this.$refs.repo_come_sema_lide_grid_acti.getrowdata(1)
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
        if (cumpTota >= objeTota) {
          return 'text-white bg-success'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_lide_cons_pedi_rete_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_lide_grid_cons.getrowdata(1)
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
        if (cumpTota >= 90 && cumpTota < 100) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_lide_cons_segu_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_lide_grid_cons_segu.getrowdata(1)
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
        if (cumpTota >= 80 && cumpTota < 100) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_lide_cons_terc_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_lide_grid_cons_terc.getrowdata(1)
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
        if (cumpTota >= 80) {
          return 'text-white bg-success'
        }
        if (cumpTota >= 70 && cumpTota < 80) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_lide_cons_cuar_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_lide_grid_cons_cuar.getrowdata(1)
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
        if (cumpTota >= 70) {
          return 'text-white bg-success'
        }
        if (cumpTota >= 60 && cumpTota < 70) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_lide_suma_pegs_clas(row, columnfield, value) {
      if (row === 2) {
        const dataRecord = this.$refs.repo_come_sema_lide_grid_suma_pegs.getrowdata(1)
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
        if (cumpTota >= 90 && cumpTota < 100) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_lide_capi_clas(row, columnfield, value) {
      if (row === 0) {
        const dataRecord = this.$refs.repo_come_sema_lide_grid_capi.getrowdata(1)
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
        // eslint-disable-next-line
        const cumpTota = parseInt(value)   	
        if (objeTota === 0) {
          return ''
        }
        if (cumpTota >= objeTota) {
          return 'text-white bg-success'
        }
        if (cumpTota <= 0) {
          return 'text-white bg-danger'
        }
        return 'text-black bg-primary'
      }
      return ''
    },
    repo_come_sema_lide_cobr_clas(row, columnfield, value) {
      if (row === 1) {
        const dataRecord = this.$refs.repo_come_sema_lide_grid_cobr.getrowdata(0)
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
        if (cumpTota >= 88) {
          return 'text-white bg-success'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_sema_lide_canj_clas(row, columnfield, value) {
      if (row === 1) {
        const dataRecord = this.$refs.repo_come_sema_lide_grid_canj.getrowdata(0)
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
        if (cumpTota >= 0 && cumpTota <= 2) {
          return 'text-white bg-success'
        }
        if (cumpTota > 2 && cumpTota < 2.8) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
  },
}
</script>
<style lang="scss"></style>
