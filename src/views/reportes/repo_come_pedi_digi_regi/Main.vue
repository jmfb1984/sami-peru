<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_pedi_digi_regi_gene()"
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
        @click="repo_come_pedi_digi_regi_limp()"
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
        @click="repo_come_pedi_digi_regi_gene()"
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
        @click="repo_come_pedi_digi_regi_exce()"
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
        @click="repo_come_pedi_digi_regi_limp()"
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
          :index-campana="1"
          @campana="setCampana"
          @region="setRegion"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_pedi_digi_regi_grid_glob"
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
        <b-card>
          <JqxGrid
            ref="repo_come_pedi_digi_regi_grid_deta"
            :width="'100%'"
            :source="dataAdapterDetalle"
            :sortable="false"
            :theme="'sami'"
            :enablehover="false"
            :filterable="false"
            :columns="columnsDetalle"
            :enableanimations="false"
            :localization="localization"
            :columnsresize="true"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
            @rowdoubleclick="repo_come_pedi_digi_regi_deta($event)"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card title="Consolidado corte pedido">
          <JqxGrid
            ref="repo_come_pedi_digi_regi_grid_cort"
            :theme="'sami'"
            :width="'100%'"
            :enablehover="false"
            :height="250"
            :source="dataAdapterCorte"
            :columns="columnsCorte"
            :columngroups="columnsGroupCorte"
            :localization="localization"
            :enableanimations="true"
            :sortable="true"
            :sortmode="'many'"
            :filterable="true"
            :columnsresize="true"
            :altrows="false"
            :showemptyrow="false"
            :columnsreorder="true"
            :showstatusbar="true"
            :showaggregates="true"
            :selectionmode="'singlecell'"
            :scrollmode="'logical'"
            @cellselect="repo_come_pedi_digi_regi_grid_cort_sele($event)"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card title="Detalle zona pedido">
          <JqxGrid
            ref="repo_come_pedi_digi_regi_grid_zona"
            :theme="'sami'"
            :width="'100%'"
            :enablehover="false"
            :height="350"
            :source="dataAdapterZona"
            :columns="columnsZona"
            :columngroups="columnsGroupZona"
            :localization="localization"
            :columnsresize="true"
            :sortable="true"
            :sortmode="'many'"
            :filterable="true"
            :altrows="false"
            :showemptyrow="false"
            :columnsreorder="true"
            :showstatusbar="true"
            :showaggregates="true"
            :groupable="false"
            :scrollmode="'logical'"
          />
        </b-card>
      </b-col>
    </b-row>
    <vs-popup
      :title="popupActiveTitulo"
      :active.sync="popupActive"
      fullscreen
      :background-color-popup="clasePopUp"
      @close="repo_come_pedi_digi_regi_deta_deta_cerr()"
    >
      <b-row>
        <b-col>
          <div class="d-none d-md-flex align-items-center justify-content-end mb-2">
            <b-button
              variant="primary"
              :class="repo_come_pedi_digi_regi_grid_deta_deta_cerr_clas"
              @click="repo_come_pedi_digi_regi_deta_deta_cart()"
            >
              <feather-icon
                icon="SearchIcon"
                class="mr-50 text-black"
              />
              <span
                class="text-black"
              >
                Cartera
              </span>
            </b-button>
            <b-button
              variant="primary"
              :class="repo_come_pedi_digi_regi_grid_deta_deta_cerr_clas"
              @click="repo_come_pedi_digi_regi_deta_deta_bloq()"
            >
              <feather-icon
                icon="SearchIcon"
                class="mr-50 text-black"
              />
              <span
                class="text-black"
              >
                Bloqueo
              </span>
            </b-button>
            <b-button
              variant="success"
              class="ml-1 d-none d-lg-block"
              @click="repo_come_pedi_digi_regi_deta_deta_exce()"
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
            ref="repo_come_pedi_digi_regi_grid_deta_deta"
            :width="'100%'"
            :height="heightDetalle"
            :theme="'sami'"
            :enablehover="false"
            :source="dataAdapterDetalleDetalle"
            :columns="columnsDetalleDetalle"
            :showemptyrow="false"
            :sortable="true"
            :filterable="true"
            :groupable="true"
            :enableanimations="true"
            :autoshowloadelement="true"
            :showaggregates="true"
            :showstatusbar="true"
            :localization="localization"
            :selectionmode="'multiplecells'"
            :scrollmode="'logical'"
          />
        </b-col>
      </b-row>
      <vs-popup
        :title="popupActiveDetalleTitulo"
        :active.sync="popupActiveDetalle"
        fullscreen
        :background-color-popup="clasePopUp"
        @close="repo_come_pedi_digi_regi_deta_deta_deta_cerr()"
      >
        <b-row>
          <b-col>
            <div class="d-flex align-items-center justify-content-end mb-2">
              <b-button
                variant="success"
                class="ml-1 d-none d-lg-block"
                @click="repo_come_pedi_digi_regi_deta_deta_deta_exce()"
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
              ref="repo_come_pedi_digi_regi_grid_deta_deta_deta"
              :width="'100%'"
              :height="heightDetalle"
              :theme="'sami'"
              :enablehover="false"
              :source="dataAdapterDetalleDetalleDetalle"
              :columns="columnsDetalleDetalleDetalle"
              :showemptyrow="false"
              :sortable="true"
              :filterable="true"
              :groupable="true"
              :enableanimations="true"
              :autoshowloadelement="true"
              :showaggregates="true"
              :showstatusbar="true"
              :localization="localization"
              :selectionmode="'multiplecells'"
              :scrollmode="'logical'"
            />
          </b-col>
        </b-row>
      </vs-popup>
    </vs-popup>
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
import selectCampanaRegion from '@/views/components/FiltroCampanaRegion.vue'
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

let sumaFactIncoCorte = 0
let sumaObjeIncoCorte = 0
let sumaTotaIncoCorte = 0
let sumaFactReteCorte = 0
let sumaObjeReteCorte = 0
let sumaTotaReteCorte = 0
let sumaActiInicCorte = 0
let sumaNumePediCorte = 0
let sumaTotaIngrCorte = 0
let sumaTotaReinCorte = 0
let sumaFactTotaCorte = 0
let sumaObjeTotaCorte = 0
let sumaTotaTotaCorte = 0
let sumaValoDocuCorte = 0
let sumaSald21diCorte = 0
let sumaSaldDocuCorte = 0
let sumaFactIncoZona = 0
let sumaObjeIncoZona = 0
let sumaTotaIncoZona = 0
let sumaFactReteZona = 0
let sumaObjeReteZona = 0
let sumaTotaReteZona = 0
let sumaActiInicZona = 0
let sumaNumePediZona = 0
let sumaTotaIngrZona = 0
let sumaTotaReinZona = 0
let sumaFactTotaZona = 0
let sumaObjeTotaZona = 0
let sumaTotaTotaZona = 0
let sumaVentFaltZona = 0
let sumaVentReceZona = 0
let sumaVentLineZona = 0
let sumaValoDocuZona = 0
let sumaSald21diZona = 0
let sumaSaldDocuZona = 0

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
      // eslint-disable-next-line
      dataAdapterDetalle: new jqx.dataAdapter(this.sourceDetalle),
      // eslint-disable-next-line
      dataAdapterCorte: new jqx.dataAdapter(this.sourceCorte),
      columnsGroupCorte: [
        { text: 'Incorporación', align: 'center', name: 'inco' },
        { text: 'Retención', align: 'center', name: 'rete' },
        { text: 'Pedidos Totales', align: 'center', name: 'tota' },
        { text: 'Cobranza', align: 'center', name: 'cobr' },
      ],
      // eslint-disable-next-line
      dataAdapterZona: new jqx.dataAdapter(this.sourceZona),
      columnsGroupZona: [
        { text: 'Incorporación', align: 'center', name: 'inco' },
        { text: 'Retención', align: 'center', name: 'rete' },
        { text: 'Pedidos Totales', align: 'center', name: 'tota' },
        { text: 'Facturación', align: 'center', name: 'fact' },
        { text: 'P.P.P.', align: 'center', name: 'ppp' },
        { text: 'Cobranza', align: 'center', name: 'cobr' },
      ],
      popupActive: false,
      popupActiveCodigo: '',
      popupActiveTitulo: '',
      // eslint-disable-next-line
      dataAdapterDetalleDetalle: new jqx.dataAdapter(this.sourceDetalleDetalle),
      // eslint-disable-next-line
      dataAdapterDetalleDetalleDetalle: new jqx.dataAdapter(this.sourceDetalleDetalleDetalle),
      columnsDetalleDetalle: [],
      columnsDetalleDetalleDetalle: [],
      heightDetalle: '',
      popupActiveDetalleCodigo: '',
      popupActiveDetalle: false,
      popupActiveDetalleTitulo: '',
      repo_come_pedi_digi_regi_grid_deta_deta_cerr_clas: 'ml-1 d-none',
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

    this.sourceDetalle = {
      localdata: [],
      datafields: [
        { name: 'cons_fila', type: 'number' },
        { name: 'esta_conc', type: 'string' },
        { name: 'nomb_conc', type: 'string' },
        { name: 'cant_conc', type: 'string' },
        { name: 'porc_conc', type: 'string' },
      ],
      datatype: 'array',
    }
    this.sourceCorte = {
      localdata: [],
      datafields: [
        { name: 'cons_fila', type: 'string' },
        { name: 'codi_cort', type: 'string' },
        { name: 'codi_area', type: 'string' },
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
        { name: 'nume_pedi', type: 'number' },
        { name: 'tota_ingr', type: 'number' },
        { name: 'tota_rein', type: 'number' },
        { name: 'acti_inic', type: 'number' },
        { name: 'cump_fact_inco_hidd', type: 'number' },
        { name: 'cump_inco_hidd', type: 'number' },
        { name: 'cump_fact_rete_hidd', type: 'number' },
        { name: 'cump_rete_hidd', type: 'number' },
        { name: 'acti_rete_hidd', type: 'number' },
        { name: 'cump_fact_tota_hidd', type: 'number' },
        { name: 'cump_tota_hidd', type: 'number' },
        { name: 'fact_capi', type: 'number' },
        { name: 'valo_docu', type: 'number' },
        { name: 'sald_docu', type: 'number' },
        { name: 'porc_docu', type: 'number' },
        { name: 'sald_21di', type: 'number' },
        { name: 'porc_21di', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceZona = {
      localdata: [],
      datafields: [
        { name: 'cons_fila', type: 'string' },
        { name: 'codi_cort', type: 'string' },
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'nomb_vend', type: 'string' },
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
        { name: 'obje_fact', type: 'number' },
        { name: 'vent_line', type: 'number' },
        { name: 'cump_fact', type: 'number' },
        { name: 'vent_falt', type: 'number' },
        { name: 'porc_falt', type: 'number' },
        { name: 'vent_rece', type: 'number' },
        { name: 'pppp_fact', type: 'number' },
        { name: 'pppp_rece', type: 'number' },
        { name: 'tota_rein', type: 'number' },
        { name: 'tota_egre', type: 'number' },
        { name: 'posi_eg21', type: 'number' },
        { name: 'posi_eg42', type: 'number' },
        { name: 'posi_eg63', type: 'number' },
        { name: 'rete_eg21', type: 'number' },
        { name: 'rete_eg42', type: 'number' },
        { name: 'rete_eg63', type: 'number' },
        { name: 'acti_fina', type: 'number' },
        { name: 'posi_rein', type: 'number' },
        { name: 'valo_docu', type: 'number' },
        { name: 'sald_docu', type: 'number' },
        { name: 'porc_docu', type: 'number' },
        { name: 'sald_21di', type: 'number' },
        { name: 'porc_21di', type: 'number' },
        { name: 'nume_pedi', type: 'number' },
        { name: 'tota_ingr', type: 'number' },
        { name: 'tota_rein_deta', type: 'number' },
        { name: 'acti_inic', type: 'number' },
        { name: 'cump_fact_inco_hidd', type: 'number' },
        { name: 'cump_inco_hidd', type: 'number' },
        { name: 'cump_fact_rete_hidd', type: 'number' },
        { name: 'cump_rete_hidd', type: 'number' },
        { name: 'acti_rete_hidd', type: 'number' },
        { name: 'cump_fact_tota_hidd', type: 'number' },
        { name: 'cump_tota_hidd', type: 'number' },
        { name: 'cump_fact_hidd', type: 'number' },
        { name: 'porc_falt_hidd', type: 'number' },
        { name: 'pppp_fact_hidd', type: 'number' },
        { name: 'pppp_rece_hidd', type: 'number' },
        { name: 'fact_capi', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceDetalleDetalle = {
      localdata: [],
      datafields: [],
      datatype: 'array',
    }
    this.sourceDetalleDetalleDetalle = {
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
    this.repo_come_pedi_digi_regi_inic()
    this.repo_come_pedi_digi_regi_visi()
  },
  created() {
    this.handleWindowResize()
    const userData = JSON.parse(localStorage.getItem('userData'))
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    const itemRegion = JSON.parse(userData.area)

    const itemCampana1 = itemCampana.camp_sigu.slice(1, 4)
    const itemCampana2 = itemCampana.camp.slice(2, 18)
    itemCampana = itemCampana1.concat(itemCampana2)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))

    itemRegion.forEach(element => this.dataRegion.push(element.codi_area))
    this.seleccionCampana = itemCampana[1].codi_camp
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
      let nombConcGlob = ''
      let lineDescGlob = ''
      let objeConcGlob = ''
      let faltDescGlob = ''
      let faltConcGlob = ''
      let receDescGlob = ''
      let porcConcGlob = ''
      let estaConcDeta = ''
      let nombConcDeta = ''
      let cantConcDeta = ''
      let porcConcDeta = ''
      let pinned = true
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          nombConcGlob = '50'
          lineDescGlob = '20'
          objeConcGlob = '20'
          faltDescGlob = '20'
          faltConcGlob = '20'
          receDescGlob = '20'
          porcConcGlob = '20'
          estaConcDeta = '5'
          nombConcDeta = '80'
          cantConcDeta = '20'
          porcConcDeta = '20'
          pinned = false
          break
        case 'sm':
          nombConcGlob = '40'
          lineDescGlob = '20'
          objeConcGlob = '20'
          faltDescGlob = '20'
          faltConcGlob = '20'
          receDescGlob = '20'
          porcConcGlob = '20'
          estaConcDeta = '5'
          nombConcDeta = '80'
          cantConcDeta = '20'
          porcConcDeta = '20'
          pinned = false
          break
        case 'md':
          nombConcGlob = '30'
          lineDescGlob = '10'
          objeConcGlob = '20'
          faltDescGlob = '10'
          faltConcGlob = '20'
          receDescGlob = '15'
          porcConcGlob = '20'
          estaConcDeta = '5'
          nombConcDeta = '80'
          cantConcDeta = '20'
          porcConcDeta = '20'
          pinned = false
          break
        default:
          nombConcGlob = '40'
          lineDescGlob = '10'
          objeConcGlob = '10'
          faltDescGlob = '10'
          faltConcGlob = '10'
          receDescGlob = '10'
          porcConcGlob = '10'
          estaConcDeta = '5'
          nombConcDeta = '80'
          cantConcDeta = '7.5'
          porcConcDeta = '7.5'
          pinned = true
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
          width: `${faltConcGlob}%`,
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
      this.columnsDetalle = [
        {
          text: 'Fila',
          dataField: 'cons_fila',
          hidden: true,
        },
        {
          text: ' ',
          dataField: 'esta_conc',
          width: `${estaConcDeta}%`,
          cellsalign: 'center',
        },
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConcDeta}%`,
        },
        {
          text: 'Cantidad',
          dataField: 'cant_conc',
          width: `${cantConcDeta}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Porcentaje',
          dataField: 'porc_conc',
          width: `${porcConcDeta}%`,
          align: 'center',
          cellsalign: 'center',
        },
      ]
      this.columnsCorte = [
        {
          text: 'nume pedi',
          dataField: 'nume_pedi',
          hidden: true,
        },
        {
          text: 'tota ingr',
          dataField: 'tota_ingr',
          hidden: true,
        },
        {
          text: 'tota rein',
          dataField: 'tota_rein',
          hidden: true,
        },
        {
          text: 'acti inic',
          dataField: 'acti_inic',
          hidden: true,
        },
        {
          text: 'fila',
          dataField: 'cons_fila',
          hidden: true,
        },
        {
          text: 'Corte',
          dataField: 'codi_cort',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Región',
          dataField: 'codi_area',
          width: '70',
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'N° Zonas',
          dataField: 'codi_zona',
          width: '80',
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Objetivo',
          columngroup: 'inco',
          dataField: 'obje_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Facturado',
          columngroup: 'inco',
          dataField: 'fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact inco',
          columngroup: 'inco',
          dataField: 'cump_fact_inco_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactIncoCorte = 0
                  sumaObjeIncoCorte = 0
                }
                // eslint-disable-next-line
                sumaFactIncoCorte = sumaFactIncoCorte + record['fact_inco']
                // eslint-disable-next-line
                sumaObjeIncoCorte = sumaObjeIncoCorte + record['obje_inco']
                let sumaCumpCorte = 0
                // eslint-disable-next-line
                if (parseInt(sumaFactIncoCorte) > 0 && parseInt(sumaObjeIncoCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 * (parseInt(sumaFactIncoCorte) / parseInt(sumaObjeIncoCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: 'Cump. Fact.',
          columngroup: 'inco',
          dataField: 'cump_fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactIncoCorte = 0
                  sumaObjeIncoCorte = 0
                }
                // eslint-disable-next-line
                sumaFactIncoCorte = sumaFactIncoCorte + record['fact_inco']
                // eslint-disable-next-line
                sumaObjeIncoCorte = sumaObjeIncoCorte + record['obje_inco']
                let sumaCumpCorte = 0
                // eslint-disable-next-line
                if (parseInt(sumaFactIncoCorte) > 0 && parseInt(sumaObjeIncoCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 * (parseInt(sumaFactIncoCorte) / parseInt(sumaObjeIncoCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: 'Pend. Fact.',
          columngroup: 'inco',
          dataField: 'pend_fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Total',
          columngroup: 'inco',
          dataField: 'tota_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump inco',
          columngroup: 'inco',
          dataField: 'cump_inco_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaTotaIncoCorte = 0
                  sumaObjeIncoCorte = 0
                }
                // eslint-disable-next-line
                sumaTotaIncoCorte = sumaTotaIncoCorte + record['tota_inco']
                // eslint-disable-next-line
                sumaObjeIncoCorte = sumaObjeIncoCorte + record['obje_inco']
                let sumaCumpCorte = 0
                // eslint-disable-next-line
                if (parseInt(sumaTotaIncoCorte) > 0 && parseInt(sumaObjeIncoCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte =  100 * (parseInt(sumaTotaIncoCorte) / parseInt(sumaObjeIncoCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: '% Cump.',
          columngroup: 'inco',
          dataField: 'cump_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaTotaIncoCorte = 0
                  sumaObjeIncoCorte = 0
                }
                // eslint-disable-next-line
                sumaTotaIncoCorte = sumaTotaIncoCorte + record['tota_inco']
                // eslint-disable-next-line
                sumaObjeIncoCorte = sumaObjeIncoCorte + record['obje_inco']
                let sumaCumpCorte = 0
                // eslint-disable-next-line
                if (parseInt(sumaTotaIncoCorte) > 0 && parseInt(sumaObjeIncoCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 * (parseInt(sumaTotaIncoCorte) / parseInt(sumaObjeIncoCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: 'Objetivo',
          columngroup: 'rete',
          dataField: 'obje_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Facturado',
          columngroup: 'rete',
          dataField: 'fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact rete',
          columngroup: 'rete',
          dataField: 'cump_fact_rete_hidd',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactReteCorte = 0
                  sumaObjeReteCorte = 0
                }
                // eslint-disable-next-line
                sumaFactReteCorte = sumaFactReteCorte + record['fact_rete']
                // eslint-disable-next-line
                sumaObjeReteCorte = sumaObjeReteCorte + record['obje_rete']
                let sumaCumpCorte = 0
                // eslint-disable-next-line
                if (parseInt(sumaFactReteCorte) > 0 && parseInt(sumaObjeReteCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 * (parseInt(sumaFactReteCorte) / parseInt(sumaObjeReteCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: 'Cump. Fact.',
          columngroup: 'rete',
          dataField: 'cump_fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactReteCorte = 0
                  sumaObjeReteCorte = 0
                }
                // eslint-disable-next-line
                sumaFactReteCorte = sumaFactReteCorte + record['fact_rete']
                // eslint-disable-next-line
                sumaObjeReteCorte = sumaObjeReteCorte + record['obje_rete']
                let sumaCumpCorte = 0
                // eslint-disable-next-line
                if (parseInt(sumaFactReteCorte) > 0 && parseInt(sumaObjeReteCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 * (parseInt(sumaFactReteCorte) / parseInt(sumaObjeReteCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: 'Pend. Fact.',
          columngroup: 'rete',
          dataField: 'pend_fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Total',
          columngroup: 'rete',
          dataField: 'tota_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump rete',
          columngroup: 'rete',
          dataField: 'cump_rete_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaTotaReteCorte = 0
                  sumaObjeReteCorte = 0
                }
                // eslint-disable-next-line
                sumaTotaReteCorte = sumaTotaReteCorte + record['tota_rete']
                // eslint-disable-next-line
                sumaObjeReteCorte = sumaObjeReteCorte + record['obje_rete']
                let sumaCumpCorte = 0
                // eslint-disable-next-line
                if (parseInt(sumaTotaReteCorte) > 0 && parseInt(sumaObjeReteCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 * (parseInt(sumaTotaReteCorte) / parseInt(sumaObjeReteCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: '% Cump.',
          columngroup: 'rete',
          dataField: 'cump_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaTotaReteCorte = 0
                  sumaObjeReteCorte = 0
                }
                // eslint-disable-next-line
                sumaTotaReteCorte = sumaTotaReteCorte + record['tota_rete']
                // eslint-disable-next-line
                sumaObjeReteCorte = sumaObjeReteCorte + record['obje_rete']
                let sumaCumpCorte = 0
                // eslint-disable-next-line
                if (parseInt(sumaTotaReteCorte) > 0 && parseInt(sumaObjeReteCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 * (parseInt(sumaTotaReteCorte) / parseInt(sumaObjeReteCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: 'acti rete',
          columngroup: 'rete',
          dataField: 'acti_rete_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaActiInicCorte = 0
                  sumaNumePediCorte = 0
                  sumaTotaIngrCorte = 0
                  sumaTotaReinCorte = 0
                }
                // eslint-disable-next-line
                sumaActiInicCorte = sumaActiInicCorte + record['acti_inic']
                // eslint-disable-next-line
                sumaNumePediCorte = sumaNumePediCorte + record['nume_pedi']
                // eslint-disable-next-line
                sumaTotaIngrCorte = sumaTotaIngrCorte + record['tota_ingr']
                // eslint-disable-next-line
                sumaTotaReinCorte = sumaTotaReinCorte + record['tota_rein']
                let sumaCumpCorte = 0
                // eslint-disable-next-line
                if (parseInt(sumaActiInicCorte) > 0 && parseInt(sumaNumePediCorte) - parseInt(sumaTotaIngrCorte) -  parseInt(sumaTotaReinCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 *(parseInt(parseInt(sumaNumePediCorte) - parseInt(sumaTotaIngrCorte) -  parseInt(sumaTotaReinCorte)) / parseInt(sumaActiInicCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: '% Acti.',
          columngroup: 'rete',
          dataField: 'acti_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaActiInicCorte = 0
                  sumaNumePediCorte = 0
                  sumaTotaIngrCorte = 0
                  sumaTotaReinCorte = 0
                }
                // eslint-disable-next-line
                sumaActiInicCorte = sumaActiInicCorte + record['acti_inic']
                // eslint-disable-next-line
                sumaNumePediCorte = sumaNumePediCorte + record['nume_pedi']
                // eslint-disable-next-line
                sumaTotaIngrCorte = sumaTotaIngrCorte + record['tota_ingr']
                // eslint-disable-next-line
                sumaTotaReinCorte = sumaTotaReinCorte + record['tota_rein']

                let sumaCumpCorte = 0
                // eslint-disable-next-line
                if (parseInt(sumaActiInicCorte) > 0 && parseInt(sumaNumePediCorte) -  parseInt(sumaTotaIngrCorte) - parseInt(sumaTotaReinCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 * (parseInt(parseInt(sumaNumePediCorte) - parseInt(sumaTotaIngrCorte) - parseInt(sumaTotaReinCorte)) / parseInt(sumaActiInicCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: 'Objetivo',
          columngroup: 'tota',
          dataField: 'obje_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Facturado',
          columngroup: 'tota',
          dataField: 'fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact tota',
          columngroup: 'tota',
          dataField: 'cump_fact_tota_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactTotaCorte = 0
                  sumaObjeTotaCorte = 0
                }
                // eslint-disable-next-line
                sumaFactTotaCorte = sumaFactTotaCorte + record['fact_tota']
                // eslint-disable-next-line
                sumaObjeTotaCorte = sumaObjeTotaCorte + record['obje_tota']
                let sumaCumpCorte = 0
                // eslint-disable-next-line
                if (parseInt(sumaFactTotaCorte) > 0 && parseInt(sumaObjeTotaCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 * (parseInt(sumaFactTotaCorte) / parseInt(sumaObjeTotaCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: 'Cump. Fact.',
          columngroup: 'tota',
          dataField: 'cump_fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactTotaCorte = 0
                  sumaObjeTotaCorte = 0
                }
                // eslint-disable-next-line
                sumaFactTotaCorte = sumaFactTotaCorte + record['fact_tota']
                // eslint-disable-next-line
                sumaObjeTotaCorte = sumaObjeTotaCorte + record['obje_tota']
                let sumaCumpCorte = 0
                // eslint-disable-next-line
                if (parseInt(sumaFactTotaCorte) > 0 && parseInt(sumaObjeTotaCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 * (parseInt(sumaFactTotaCorte) / parseInt(sumaObjeTotaCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: 'Pend. Fact.',
          columngroup: 'tota',
          dataField: 'pend_fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Total',
          columngroup: 'tota',
          dataField: 'tota_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump tota',
          columngroup: 'tota',
          dataField: 'cump_tota_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaTotaTotaCorte = 0
                  sumaObjeTotaCorte = 0
                }
                // eslint-disable-next-line
                sumaTotaTotaCorte = sumaTotaTotaCorte + record['fact_tota']
                // eslint-disable-next-line
                sumaObjeTotaCorte = sumaObjeTotaCorte + record['obje_tota']
                let sumaCumpCorte = 0
                // eslint-disable-next-line
                if (parseInt(sumaTotaTotaCorte) > 0 && parseInt(sumaObjeTotaCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 * (parseInt(sumaTotaTotaCorte) / parseInt(sumaObjeTotaCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: '% Cump.',
          columngroup: 'tota',
          dataField: 'cump_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaTotaTotaCorte = 0
                  sumaObjeTotaCorte = 0
                }
                // eslint-disable-next-line
                sumaTotaTotaCorte = sumaTotaTotaCorte + record['fact_tota']
                // eslint-disable-next-line
                sumaObjeTotaCorte = sumaObjeTotaCorte + record['obje_tota']
                let sumaCumpCorte = 0
                // eslint-disable-next-line
                if (parseInt(sumaTotaTotaCorte) > 0 && parseInt(sumaObjeTotaCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 * (parseInt(sumaTotaTotaCorte) / parseInt(sumaObjeTotaCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: 'Capi.',
          columngroup: 'tota',
          dataField: 'fact_capi',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Facturación',
          columngroup: 'cobr',
          dataField: 'valo_docu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Saldo 21di',
          columngroup: 'cobr',
          dataField: 'sald_21di',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: '% Cobr. 21di',
          columngroup: 'cobr',
          dataField: 'porc_21di',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaValoDocuCorte = 0
                  sumaSald21diCorte = 0
                }
                // eslint-disable-next-line
                sumaValoDocuCorte = sumaValoDocuCorte + record['valo_docu']
                // eslint-disable-next-line
                sumaSald21diCorte = sumaSald21diCorte + record['sald_21di']
                // eslint-disable-next-line
                let sumaCumpCorte = 0.0
                // eslint-disable-next-line
                if (parseInt(sumaValoDocuCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 * (1 - parseInt(sumaSald21diCorte) / parseInt(sumaValoDocuCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
        {
          text: 'Saldo Actu.',
          columngroup: 'cobr',
          dataField: 'sald_docu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          editable: false,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: '% Actu.',
          columngroup: 'cobr',
          dataField: 'porc_docu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          editable: false,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaValoDocuCorte = 0
                  sumaSaldDocuCorte = 0
                }
                // eslint-disable-next-line
                sumaValoDocuCorte = sumaValoDocuCorte + record['valo_docu']
                // eslint-disable-next-line
                sumaSaldDocuCorte = sumaSaldDocuCorte + record['sald_docu']
                let sumaCumpCorte = 0.0
                // eslint-disable-next-line
                if (parseInt(sumaValoDocuCorte) > 0) {
                  // eslint-disable-next-line
                  sumaCumpCorte = 100 * (1 - parseInt(sumaSaldDocuCorte) / parseInt(sumaValoDocuCorte))
                }
                sumaCumpCorte = parseFloat(sumaCumpCorte).toFixed(2)
                return sumaCumpCorte
              },
            },
          ],
        },
      ]
      this.columnsZona = [
        {
          text: 'nume pedi',
          dataField: 'nume_pedi',
          hidden: true,
        },
        {
          text: 'tota ingr',
          dataField: 'tota_ingr',
          hidden: true,
        },
        {
          text: 'tota rein',
          dataField: 'tota_rein_deta',
          hidden: true,
        },
        {
          text: 'acti inic',
          dataField: 'acti_inic',
          hidden: true,
        },
        {
          text: 'fila',
          dataField: 'cons_fila',
          hidden: true,
        },
        {
          text: 'Corte',
          dataField: 'codi_cort',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Región',
          dataField: 'codi_area',
          width: '70',
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: '80',
          align: 'center',
          cellsalign: 'center',
          pinned,
        },
        {
          text: 'Gerente Zonal',
          dataField: 'nomb_vend',
          width: '250',
          align: 'center',
          pinned,
        },
        {
          text: 'Objetivo',
          columngroup: 'inco',
          dataField: 'obje_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Facturado',
          columngroup: 'inco',
          dataField: 'fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact inco',
          columngroup: 'inco',
          dataField: 'cump_fact_inco_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactIncoZona = 0
                  sumaObjeIncoZona = 0
                }
                // eslint-disable-next-line
                sumaFactIncoZona = sumaFactIncoZona + record['fact_inco']
                // eslint-disable-next-line
                sumaObjeIncoZona = sumaObjeIncoZona + record['obje_inco']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseInt(sumaFactIncoZona) > 0 && parseInt(sumaObjeIncoZona) > 0) {
                  // eslint-disable-next-line
                  sumaCumpZona = 100 * (parseInt(sumaFactIncoZona) / parseInt(sumaObjeIncoZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'Cump. Fact.',
          columngroup: 'inco',
          dataField: 'cump_fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactIncoZona = 0
                  sumaObjeIncoZona = 0
                }
                // eslint-disable-next-line
                sumaFactIncoZona = sumaFactIncoZona + record['fact_inco']
                // eslint-disable-next-line
                sumaObjeIncoZona = sumaObjeIncoZona + record['obje_inco']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseInt(sumaFactIncoZona) > 0 && parseInt(sumaObjeIncoZona) > 0) {
                  // eslint-disable-next-line
                  sumaCumpZona = 100 * (parseInt(sumaFactIncoZona) / parseInt(sumaObjeIncoZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'Pend. Fact.',
          columngroup: 'inco',
          dataField: 'pend_fact_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Total',
          columngroup: 'inco',
          dataField: 'tota_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump inco',
          columngroup: 'inco',
          dataField: 'cump_inco_hidd',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaTotaIncoZona = 0
                  sumaObjeIncoZona = 0
                }
                // eslint-disable-next-line
                sumaTotaIncoZona = sumaTotaIncoZona + record['tota_inco']
                // eslint-disable-next-line
                sumaObjeIncoZona = sumaObjeIncoZona + record['obje_inco']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseInt(sumaTotaIncoZona) > 0 && parseInt(sumaObjeIncoZona) > 0) {
                  // eslint-disable-next-line
                  sumaCumpZona = 100 * (parseInt(sumaTotaIncoZona) / parseInt(sumaObjeIncoZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: '% Cump.',
          columngroup: 'inco',
          dataField: 'cump_inco',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-black bg-primary',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaTotaIncoZona = 0
                  sumaObjeIncoZona = 0
                }
                // eslint-disable-next-line
                sumaTotaIncoZona = sumaTotaIncoZona + record['tota_inco']
                // eslint-disable-next-line
                sumaObjeIncoZona = sumaObjeIncoZona + record['obje_inco']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseInt(sumaTotaIncoZona) > 0 && parseInt(sumaObjeIncoZona) > 0) {
                  // eslint-disable-next-line
                  sumaCumpZona = 100 * (parseInt(sumaTotaIncoZona) / parseInt(sumaObjeIncoZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'Objetivo',
          columngroup: 'rete',
          dataField: 'obje_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Facturado',
          columngroup: 'rete',
          dataField: 'fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact rete',
          columngroup: 'rete',
          dataField: 'cump_fact_rete_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactReteZona = 0
                  sumaObjeReteZona = 0
                }
                // eslint-disable-next-line
                sumaFactReteZona = sumaFactReteZona + record['fact_rete']
                // eslint-disable-next-line
                sumaObjeReteZona = sumaObjeReteZona + record['obje_rete']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseInt(sumaFactReteZona) > 0 && parseInt(sumaObjeReteZona) > 0) {
                  // eslint-disable-next-line
                  sumaCumpZona = 100 * (parseInt(sumaFactReteZona) / parseInt(sumaObjeReteZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'Cump. Fact.',
          columngroup: 'rete',
          dataField: 'cump_fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactReteZona = 0
                  sumaObjeReteZona = 0
                }
                // eslint-disable-next-line
                sumaFactReteZona = sumaFactReteZona + record['fact_rete']
                // eslint-disable-next-line
                sumaObjeReteZona = sumaObjeReteZona + record['obje_rete']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseInt(sumaFactReteZona) > 0 && parseInt(sumaObjeReteZona) > 0) {
                  // eslint-disable-next-line
                  sumaCumpZona = 100 * (parseInt(sumaFactReteZona) / parseInt(sumaObjeReteZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'Pend. Fact.',
          columngroup: 'rete',
          dataField: 'pend_fact_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Total',
          columngroup: 'rete',
          dataField: 'tota_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump rete',
          columngroup: 'rete',
          dataField: 'cump_rete_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaTotaReteZona = 0
                  sumaObjeReteZona = 0
                }
                // eslint-disable-next-line
                sumaTotaReteZona = sumaTotaReteZona + record['tota_rete']
                // eslint-disable-next-line
                sumaObjeReteZona = sumaObjeReteZona + record['obje_rete']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseInt(sumaTotaReteZona) > 0 && parseInt(sumaObjeReteZona) > 0) {
                  // eslint-disable-next-line
                  sumaCumpZona = 100 * (parseInt(sumaTotaReteZona) / parseInt(sumaObjeReteZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: '% Cump.',
          columngroup: 'rete',
          dataField: 'cump_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaTotaReteZona = 0
                  sumaObjeReteZona = 0
                }
                // eslint-disable-next-line
                sumaTotaReteZona = sumaTotaReteZona + record['tota_rete']
                // eslint-disable-next-line
                sumaObjeReteZona = sumaObjeReteZona + record['obje_rete']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseInt(sumaTotaReteZona) > 0 && parseInt(sumaObjeReteZona) > 0) {
                  // eslint-disable-next-line
                  sumaCumpZona = 100 * (parseInt(sumaTotaReteZona) / parseInt(sumaObjeReteZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'acti rete',
          columngroup: 'rete',
          dataField: 'acti_rete_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaActiInicZona = 0
                  sumaNumePediZona = 0
                  sumaTotaIngrZona = 0
                  sumaTotaReinZona = 0
                }
                // eslint-disable-next-line
                sumaActiInicZona = sumaActiInicZona + record['acti_inic']
                // eslint-disable-next-line
                sumaNumePediZona = sumaNumePediZona + record['nume_pedi']
                // eslint-disable-next-line
                sumaTotaIngrZona = sumaTotaIngrZona + record['tota_ingr']
                // eslint-disable-next-line
                sumaTotaReinZona = sumaTotaReinZona + record['tota_rein_deta']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseInt(sumaActiInicZona) > 0 && parseInt(sumaNumePediZona) - parseInt(sumaTotaIngrZona) - parseInt(sumaTotaReinZona) > 0) {
                  // eslint-disable-next-line
                  sumaCumpZona = 100 * (parseInt(parseInt(sumaNumePediZona) - parseInt(sumaTotaIngrZona) - parseInt(sumaTotaReinZona)) / parseInt(sumaActiInicZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: '% Acti.',
          columngroup: 'rete',
          dataField: 'acti_rete',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-success',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaActiInicZona = 0
                  sumaNumePediZona = 0
                  sumaTotaIngrZona = 0
                  sumaTotaReinZona = 0
                }
                // eslint-disable-next-line
                sumaActiInicZona = sumaActiInicZona + record['acti_inic']
                // eslint-disable-next-line
                sumaNumePediZona = sumaNumePediZona + record['nume_pedi']
                // eslint-disable-next-line
                sumaTotaIngrZona = sumaTotaIngrZona + record['tota_ingr']
                // eslint-disable-next-line
                sumaTotaReinZona = sumaTotaReinZona + record['tota_rein_deta']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseInt(sumaActiInicZona) > 0 && parseInt(sumaNumePediZona) - parseInt(sumaTotaIngrZona) - parseInt(sumaTotaReinZona) > 0) {
                  // eslint-disable-next-line
                  sumaCumpZona = 100 * ((parseInt(sumaNumePediZona) - parseInt(sumaTotaIngrZona) - parseInt(sumaTotaReinZona)) / parseInt(sumaActiInicZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'Objetivo',
          columngroup: 'tota',
          dataField: 'obje_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Facturado',
          columngroup: 'tota',
          dataField: 'fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump fact tota',
          columngroup: 'tota',
          dataField: 'cump_fact_tota_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactTotaZona = 0
                  sumaObjeTotaZona = 0
                }
                // eslint-disable-next-line
                sumaFactTotaZona = sumaFactTotaZona + record['fact_tota']
                // eslint-disable-next-line
                sumaObjeTotaZona = sumaObjeTotaZona + record['obje_tota']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseInt(sumaFactTotaZona) > 0 && parseInt(sumaObjeTotaZona) > 0) {
                  // eslint-disable-next-line
                  sumaCumpZona = 100 * (parseInt(sumaFactTotaZona) / parseInt(sumaObjeTotaZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'Cump. Fact.',
          columngroup: 'tota',
          dataField: 'cump_fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactTotaZona = 0
                  sumaObjeTotaZona = 0
                }
                // eslint-disable-next-line
                sumaFactTotaZona = sumaFactTotaZona + record['fact_tota']
                // eslint-disable-next-line
                sumaObjeTotaZona = sumaObjeTotaZona + record['obje_tota']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseInt(sumaFactTotaZona) > 0 && parseInt(sumaObjeTotaZona) > 0) {
                  // eslint-disable-next-line
                  sumaCumpZona = 100 * (parseInt(sumaFactTotaZona) / parseInt(sumaObjeTotaZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'Pend. Fact.',
          columngroup: 'tota',
          dataField: 'pend_fact_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Total',
          columngroup: 'tota',
          dataField: 'tota_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'cump tota',
          columngroup: 'tota',
          dataField: 'cump_tota_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaTotaTotaZona = 0
                  sumaObjeTotaZona = 0
                }
                // eslint-disable-next-line
                sumaTotaTotaZona = sumaTotaTotaZona + record['tota_tota']
                // eslint-disable-next-line
                sumaObjeTotaZona = sumaObjeTotaZona + record['obje_tota']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseInt(sumaTotaTotaZona) > 0 && parseInt(sumaObjeTotaZona) > 0 ) {
                  // eslint-disable-next-line
                  sumaCumpZona = 100 * (parseInt(sumaTotaTotaZona) / parseInt(sumaObjeTotaZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: '% Cump.',
          columngroup: 'tota',
          dataField: 'cump_tota',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaTotaTotaZona = 0
                  sumaObjeTotaZona = 0
                }
                // eslint-disable-next-line
                sumaTotaTotaZona = sumaTotaTotaZona + record['tota_tota']
                // eslint-disable-next-line
                sumaObjeTotaZona = sumaObjeTotaZona + record['obje_tota']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseInt(sumaTotaTotaZona) > 0 && parseInt(sumaObjeTotaZona) > 0) {
                  // eslint-disable-next-line
                  sumaCumpZona = 100 * (parseInt(sumaTotaTotaZona) / parseInt(sumaObjeTotaZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },

        {
          text: 'Capi.',
          columngroup: 'tota',
          dataField: 'fact_capi',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellclassname: 'text-white bg-danger',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },

        {
          text: 'Vta. Linea',
          columngroup: 'fact',
          dataField: 'vent_line',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Faltante',
          columngroup: 'fact',
          dataField: 'vent_falt',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Vta. Rece.',
          columngroup: 'fact',
          dataField: 'vent_rece',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'falt fact',
          columngroup: 'fact',
          dataField: 'porc_falt_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaVentFaltZona = 0
                  sumaVentReceZona = 0
                }
                // eslint-disable-next-line
                sumaVentFaltZona = sumaVentFaltZona + record['vent_falt']
                // eslint-disable-next-line
                sumaVentReceZona = sumaVentReceZona + record['vent_rece']
                let sumaCumpZona = 0
                // eslint-disable-next-line
                if (parseFloat(sumaVentFaltZona) > 0 && parseFloat(sumaVentReceZona) > 0) {
                  sumaCumpZona = 100 * (parseFloat(sumaVentFaltZona) / parseFloat(sumaVentReceZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: '% Falt.',
          columngroup: 'fact',
          dataField: 'porc_falt',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaVentFaltZona = 0
                  sumaVentReceZona = 0
                }
                // eslint-disable-next-line
                sumaVentFaltZona = sumaVentFaltZona + record['vent_falt']
                // eslint-disable-next-line
                sumaVentReceZona = sumaVentReceZona + record['vent_rece']
                let sumaCumpZona = 0
                if (parseFloat(sumaVentFaltZona) > 0 && parseFloat(sumaVentReceZona) > 0) {
                  sumaCumpZona = 100 * (parseFloat(sumaVentFaltZona) / parseFloat(sumaVentReceZona))
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'fact pppp',
          columngroup: 'ppp',
          dataField: 'pppp_fact_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactTotaZona = 0
                  sumaVentLineZona = 0
                }
                // eslint-disable-next-line
                sumaFactTotaZona = sumaFactTotaZona + record['fact_tota']
                // eslint-disable-next-line
                sumaVentLineZona = sumaVentLineZona + record['vent_line']
                let sumaCumpZona = 0
                if (parseFloat(sumaFactTotaZona) > 0 && parseFloat(sumaVentLineZona) > 0) {
                  sumaCumpZona = parseFloat(sumaVentLineZona) / parseFloat(sumaFactTotaZona)
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'Facturado',
          columngroup: 'ppp',
          dataField: 'pppp_fact',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactTotaZona = 0
                  sumaVentLineZona = 0
                }
                // eslint-disable-next-line
                sumaFactTotaZona = sumaFactTotaZona + record['fact_tota']
                // eslint-disable-next-line
                sumaVentLineZona = sumaVentLineZona + record['vent_line']
                let sumaCumpZona = 0
                if (parseFloat(sumaFactTotaZona) > 0 && parseFloat(sumaVentLineZona) > 0) {
                  sumaCumpZona = parseFloat(sumaVentLineZona) / parseFloat(sumaFactTotaZona)
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'rece pppp',
          columngroup: 'ppp',
          dataField: 'pppp_rece_hidd',
          cellsformat: 'D2',
          hidden: true,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactTotaZona = 0
                  sumaVentReceZona = 0
                }
                // eslint-disable-next-line
                sumaFactTotaZona = sumaFactTotaZona + record['fact_tota']
                // eslint-disable-next-line
                sumaVentReceZona = sumaVentReceZona + record['vent_rece']
                let sumaCumpZona = 0
                if (parseFloat(sumaFactTotaZona) > 0 && parseFloat(sumaVentReceZona) > 0) {
                  sumaCumpZona = parseFloat(sumaVentReceZona) / parseFloat(sumaFactTotaZona)
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'Recepcionado',
          columngroup: 'ppp',
          dataField: 'pppp_rece',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaFactTotaZona = 0
                  sumaVentReceZona = 0
                }
                // eslint-disable-next-line
                sumaFactTotaZona = sumaFactTotaZona + record['fact_tota']
                // eslint-disable-next-line
                sumaVentReceZona = sumaVentReceZona + record['vent_rece']
                let sumaCumpZona = 0
                if (parseFloat(sumaFactTotaZona) > 0 && parseFloat(sumaVentReceZona) > 0) {
                  sumaCumpZona = parseFloat(sumaVentReceZona) / parseFloat(sumaFactTotaZona)
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },

        {
          text: 'Facturación',
          columngroup: 'cobr',
          dataField: 'valo_docu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Saldo 21di',
          columngroup: 'cobr',
          dataField: 'sald_21di',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: '% Cobr. 21di',
          columngroup: 'cobr',
          dataField: 'porc_21di',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaValoDocuZona = 0
                  sumaSald21diZona = 0
                }
                // eslint-disable-next-line
                sumaValoDocuZona = sumaValoDocuZona + record['valo_docu']
                // eslint-disable-next-line
                sumaSald21diZona = sumaSald21diZona + record['sald_21di']
                let sumaCumpZona = 0
                if (parseFloat(sumaValoDocuZona) > 0 && parseFloat(sumaSald21diZona) > 0) {
                  sumaCumpZona = 100 * (1 - sumaSald21diZona / sumaValoDocuZona)
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'Saldo Actu.',
          columngroup: 'cobr',
          dataField: 'sald_docu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          editable: false,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: '% Actu.',
          columngroup: 'cobr',
          dataField: 'porc_docu',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          editable: false,
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaValoDocuZona = 0
                  sumaSaldDocuZona = 0
                }
                // eslint-disable-next-line
                sumaValoDocuZona = sumaValoDocuZona + record['valo_docu']
                // eslint-disable-next-line
                sumaSaldDocuZona = sumaSaldDocuZona + record['sald_docu']
                let sumaCumpZona = 0
                if (parseFloat(sumaValoDocuZona) > 0 && parseFloat(sumaSaldDocuZona) > 0) {
                  sumaCumpZona = 100 * (1 - sumaSaldDocuZona / sumaValoDocuZona)
                }
                sumaCumpZona = parseFloat(sumaCumpZona).toFixed(2)
                return sumaCumpZona
              },
            },
          ],
        },
        {
          text: 'Reingresos',
          dataField: 'tota_rein',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Egresos',
          dataField: 'tota_egre',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'Act. Final',
          dataField: 'acti_fina',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
        {
          text: 'P Rreingreso',
          dataField: 'posi_rein',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
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
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
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
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },

        {
          text: 'Peg63',
          dataField: 'posi_eg63',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },

        {
          text: 'Ret. Peg21',
          dataField: 'rete_eg21',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },

        {
          text: 'Ret. Peg42',
          dataField: 'rete_eg42',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },

        {
          text: 'Ret. Peg63',
          dataField: 'rete_eg63',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
          aggregates: [
            {
              // eslint-disable-next-line
              T: function (aggregatedValue, currentValue) {
                // eslint-disable-next-line
                aggregatedValue = aggregatedValue + currentValue
                return aggregatedValue
              },
            },
          ],
        },
      ]

      if (this.popupActiveCodigo !== '') {
        let codiTercDetaDeta = ''
        let numeIdenDetaDeta = ''
        let codiCortDetaDeta = ''
        let codiZonaDetaDeta = ''
        let codiSectDetaDeta = ''
        let codiEstaDetaDeta = ''
        let nombTercDetaDeta = ''
        let totaPublDetaDeta = ''
        let nombIngrDetaDeta = ''
        let codiCampDetaDeta = ''
        let obsePediDetaDeta = ''
        let teleTercDetaDeta = ''
        let motiCartDetaDeta = ''
        let motiCupoDetaDeta = ''
        let motiCodeDetaDeta = ''
        let motiBloqDetaDeta = ''
        let motiMiniDetaDeta = ''
        let motiCerrDetaDeta = ''
        this.heightDetalle = `${window.innerHeight - 250}px`
        switch (store.getters['app/currentBreakPoint']) {
          case 'xs':
            codiTercDetaDeta = '20'
            numeIdenDetaDeta = '25'
            codiCortDetaDeta = '20'
            codiZonaDetaDeta = '20'
            codiSectDetaDeta = '20'
            codiEstaDetaDeta = '25'
            nombTercDetaDeta = '60'
            totaPublDetaDeta = '20'
            nombIngrDetaDeta = '25'
            codiCampDetaDeta = '25'
            obsePediDetaDeta = '20'
            if (this.popupActiveCodigo === '4') {
              teleTercDetaDeta = '20'
              motiCartDetaDeta = '15'
              motiCupoDetaDeta = '15'
              motiCodeDetaDeta = '15'
              motiBloqDetaDeta = '15'
              motiMiniDetaDeta = '15'
              motiCerrDetaDeta = '15'
            }
            if (this.popupActiveCodigo === '5') {
              motiCartDetaDeta = '15'
              motiCupoDetaDeta = '15'
              motiCodeDetaDeta = '15'
              motiBloqDetaDeta = '15'
              motiMiniDetaDeta = '15'
              motiCerrDetaDeta = '15'
            }
            break
          case 'sm':
            codiTercDetaDeta = '20'
            numeIdenDetaDeta = '25'
            codiCortDetaDeta = '20'
            codiZonaDetaDeta = '20'
            codiSectDetaDeta = '20'
            codiEstaDetaDeta = '25'
            nombTercDetaDeta = '60'
            totaPublDetaDeta = '20'
            nombIngrDetaDeta = '25'
            codiCampDetaDeta = '25'
            obsePediDetaDeta = '20'
            if (this.popupActiveCodigo === '4') {
              teleTercDetaDeta = '20'
              motiCartDetaDeta = '15'
              motiCupoDetaDeta = '15'
              motiCodeDetaDeta = '15'
              motiBloqDetaDeta = '15'
              motiMiniDetaDeta = '15'
              motiCerrDetaDeta = '15'
            }
            if (this.popupActiveCodigo === '5') {
              motiCartDetaDeta = '15'
              motiCupoDetaDeta = '15'
              motiCodeDetaDeta = '15'
              motiBloqDetaDeta = '15'
              motiMiniDetaDeta = '15'
              motiCerrDetaDeta = '15'
            }
            break
          case 'md':
            codiTercDetaDeta = '20'
            numeIdenDetaDeta = '25'
            codiCortDetaDeta = '20'
            codiZonaDetaDeta = '20'
            codiSectDetaDeta = '20'
            codiEstaDetaDeta = '25'
            nombTercDetaDeta = '60'
            totaPublDetaDeta = '20'
            nombIngrDetaDeta = '25'
            codiCampDetaDeta = '25'
            obsePediDetaDeta = '20'
            if (this.popupActiveCodigo === '4') {
              teleTercDetaDeta = '20'
              motiCartDetaDeta = '15'
              motiCupoDetaDeta = '15'
              motiCodeDetaDeta = '15'
              motiBloqDetaDeta = '15'
              motiMiniDetaDeta = '15'
              motiCerrDetaDeta = '15'
            }
            if (this.popupActiveCodigo === '5') {
              motiCartDetaDeta = '15'
              motiCupoDetaDeta = '15'
              motiCodeDetaDeta = '15'
              motiBloqDetaDeta = '15'
              motiMiniDetaDeta = '15'
              motiCerrDetaDeta = '15'
            }
            break
          default:
            codiTercDetaDeta = '7.5'
            numeIdenDetaDeta = '7.5'
            codiCortDetaDeta = '7.5'
            codiZonaDetaDeta = '7.5'
            codiSectDetaDeta = '5'
            codiEstaDetaDeta = '10'
            nombTercDetaDeta = '40'
            totaPublDetaDeta = '10'
            nombIngrDetaDeta = '10'
            codiCampDetaDeta = '10'
            obsePediDetaDeta = '7.5'
            if (this.popupActiveCodigo === '4') {
              teleTercDetaDeta = '8'
              motiCartDetaDeta = '5'
              motiCupoDetaDeta = '5'
              motiCodeDetaDeta = '5'
              motiBloqDetaDeta = '5'
              motiMiniDetaDeta = '5'
              motiCerrDetaDeta = '5'
            }
            if (this.popupActiveCodigo === '5') {
              motiCartDetaDeta = '5'
              motiCupoDetaDeta = '5'
              motiCodeDetaDeta = '5'
              motiBloqDetaDeta = '5'
              motiMiniDetaDeta = '5'
              motiCerrDetaDeta = '5'
            }
            break
        }
        if (this.popupActiveCodigo === '1' || this.popupActiveCodigo === '2') {
          this.columnsDetalleDetalle = [
            {
              text: 'Código',
              dataField: 'codi_terc',
              width: `${codiTercDetaDeta}%`,
              cellsrenderer: this.claseSegundoTotalPedidosDigitadosRegion,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'DNI - RUC',
              dataField: 'nume_iden',
              width: `${numeIdenDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Corte',
              dataField: 'codi_cort',
              width: `${codiCortDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Zona',
              dataField: 'codi_zona',
              width: `${codiZonaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Sector',
              dataField: 'codi_sect',
              width: `${codiSectDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Status',
              dataField: 'codi_esta',
              width: `${codiEstaDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Nombre(s) y Apellido(s)',
              dataField: 'nomb_terc',
              width: `${nombTercDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Público',
              dataField: 'tota_publ',
              width: `${totaPublDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              cellsformat: 'D2',
            },
            {
              text: 'Ingresado por',
              dataField: 'nomb_ingr',
              width: `${nombIngrDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Ulti. Campaña',
              dataField: 'codi_camp',
              width: `${codiCampDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Observación',
              dataField: 'obse_pedi',
              width: `${obsePediDetaDeta}%`,
              cellsrenderer: this.claseSegundoTotalPedidosDigitadosRegion,
              align: 'center',
              cellsalign: 'center',
            },
          ]
        }
        if (this.popupActiveCodigo === '4') {
          this.columnsDetalleDetalle = [
            {
              text: 'Código',
              dataField: 'codi_terc',
              width: `${codiTercDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              cellsrenderer: this.claseSegundoTotalPedidosDigitadosRegion,
            },
            {
              text: 'DNI - RUC',
              dataField: 'nume_iden',
              width: `${numeIdenDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Corte',
              dataField: 'codi_cort',
              width: `${codiCortDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Zona',
              dataField: 'codi_zona',
              width: `${codiZonaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Sector',
              dataField: 'codi_sect',
              width: `${codiSectDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Status',
              dataField: 'codi_esta',
              width: `${codiEstaDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Nombre(s) y Apellido(s)',
              dataField: 'nomb_terc',
              width: `${nombTercDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Teléfono',
              dataField: 'tele_terc',
              width: `${teleTercDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Público',
              dataField: 'tota_publ',
              width: `${totaPublDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              cellsformat: 'D2',
            },
            {
              text: 'Publ. Tota.',
              dataField: 'tota_publ_tota',
              cellsformat: 'D2',
              hidden: true,
            },
            {
              text: 'Ingresado por',
              dataField: 'nomb_ingr',
              width: `${nombIngrDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Ulti. Campaña',
              dataField: 'codi_camp',
              width: `${codiCampDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Observación',
              dataField: 'obse_pedi',
              width: `${obsePediDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              cellsrenderer: this.claseSegundoTotalPedidosDigitadosRegion,
            },
            {
              text: 'Cart',
              dataField: 'moti_cart',
              width: `${motiCartDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              aggregates: [
                {
                  // eslint-disable-next-line
                  Cart: function (aggregatedValue, currentValue) {
                    if (currentValue === 'X') {
                      return aggregatedValue + 1
                    }
                    return aggregatedValue
                  },
                },
              ],
            },
            {
              text: 'Cupo',
              dataField: 'moti_cupo',
              width: `${motiCupoDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              aggregates: [
                {
                  // eslint-disable-next-line
                  Cupo: function (aggregatedValue, currentValue) {
                    if (currentValue === 'X') {
                      return aggregatedValue + 1
                    }
                    return aggregatedValue
                  },
                },
              ],
            },
            {
              text: 'Code',
              dataField: 'moti_code',
              width: `${motiCodeDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              aggregates: [
                {
                  // eslint-disable-next-line
                  Code: function (aggregatedValue, currentValue) {
                    if (currentValue === 'X') {
                      return aggregatedValue + 1
                    }
                    return aggregatedValue
                  },
                },
              ],
            },
            {
              text: 'Mini',
              dataField: 'moti_mini',
              width: `${motiMiniDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              aggregates: [
                {
                  // eslint-disable-next-line
                  Mini: function (aggregatedValue, currentValue) {
                    if (currentValue === 'X') {
                      return aggregatedValue + 1
                    }
                    return aggregatedValue
                  },
                },
              ],
            },
            {
              text: 'Cerr',
              dataField: 'moti_cerr',
              width: `${motiCerrDetaDeta}%`,
              align: 'center',
              hidden: true,
              cellsalign: 'center',
              aggregates: [
                {
                  // eslint-disable-next-line
                  Cerr: function (aggregatedValue, currentValue) {
                    if (currentValue === 'X') {
                      return aggregatedValue + 1
                    }
                    return aggregatedValue
                  },
                },
              ],
            },
            {
              text: 'Bloq',
              dataField: 'moti_bloq',
              width: `${motiBloqDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              aggregates: [
                {
                  // eslint-disable-next-line
                  Bloq: function (aggregatedValue, currentValue) {
                    if (currentValue === 'X') {
                      return aggregatedValue + 1
                    }
                    return aggregatedValue
                  },
                },
              ],
            },
          ]
        }
        if (this.popupActiveCodigo === '5') {
          this.columnsDetalleDetalle = [
            {
              text: 'Código',
              dataField: 'codi_terc',
              width: `${codiTercDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              cellsrenderer: this.claseSegundoTotalPedidosDigitadosRegion,
            },
            {
              text: 'DNI - RUC',
              dataField: 'nume_iden',
              width: `${numeIdenDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Corte',
              dataField: 'codi_cort',
              width: `${codiCortDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Zona',
              dataField: 'codi_zona',
              width: `${codiZonaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Sector',
              dataField: 'codi_sect',
              width: `${codiSectDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Status',
              dataField: 'codi_esta',
              width: `${codiEstaDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Nombre(s) y Apellido(s)',
              dataField: 'nomb_terc',
              width: `${nombTercDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Público',
              dataField: 'tota_publ',
              width: `${totaPublDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              cellsformat: 'D2',
            },
            {
              text: 'Publ. Tota.',
              dataField: 'tota_publ_tota',
              cellsformat: 'D2',
              hidden: true,
            },
            {
              text: 'Ingresado por',
              dataField: 'nomb_ingr',
              width: `${nombIngrDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Ulti. Campaña',
              dataField: 'codi_camp',
              width: `${codiCampDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Observación',
              dataField: 'obse_pedi',
              width: `${obsePediDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              cellsrenderer: this.claseSegundoTotalPedidosDigitadosRegion,
            },
            {
              text: 'Cart',
              dataField: 'moti_cart',
              width: `${motiCartDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              aggregates: [
                {
                  // eslint-disable-next-line
                  Cart: function (aggregatedValue, currentValue) {
                    if (currentValue === 'X') {
                      return aggregatedValue + 1
                    }
                    return aggregatedValue
                  },
                },
              ],
            },
            {
              text: 'Cupo',
              dataField: 'moti_cupo',
              width: `${motiCupoDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              aggregates: [
                {
                  // eslint-disable-next-line
                  Cupo: function (aggregatedValue, currentValue) {
                    if (currentValue === 'X') {
                      return aggregatedValue + 1
                    }
                    return aggregatedValue
                  },
                },
              ],
            },
            {
              text: 'Code',
              dataField: 'moti_code',
              width: `${motiCodeDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              aggregates: [
                {
                  // eslint-disable-next-line
                  Code: function (aggregatedValue, currentValue) {
                    if (currentValue === 'X') {
                      return aggregatedValue + 1
                    }
                    return aggregatedValue
                  },
                },
              ],
            },
            {
              text: 'Mini',
              dataField: 'moti_mini',
              width: `${motiMiniDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              aggregates: [
                {
                  // eslint-disable-next-line
                  Mini: function (aggregatedValue, currentValue) {
                    if (currentValue === 'X') {
                      return aggregatedValue + 1
                    }
                    return aggregatedValue
                  },
                },
              ],
            },
            {
              text: 'Cerr',
              dataField: 'moti_cerr',
              width: `${motiCerrDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              hidden: true,
              aggregates: [
                {
                  // eslint-disable-next-line
                  Cerr: function (aggregatedValue, currentValue) {
                    if (currentValue === 'X') {
                      return aggregatedValue + 1
                    }
                    return aggregatedValue
                  },
                },
              ],
            },
            {
              text: 'Bloq',
              dataField: 'moti_bloq',
              width: `${motiBloqDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              aggregates: [
                {
                  // eslint-disable-next-line
                  Bloq: function (aggregatedValue, currentValue) {
                    if (currentValue === 'X') {
                      return aggregatedValue + 1
                    }
                    return aggregatedValue
                  },
                },
              ],
            },
          ]
        }
      }

      if (this.popupActiveDetalleCodigo !== '') {
        let codiTercDetaDetaDeta = ''
        let numeIdenDetaDetaDeta = ''
        let codiCortDetaDetaDeta = ''
        let codiZonaDetaDetaDeta = ''
        let codiSectDetaDetaDeta = ''
        let nombTercDetaDetaDeta = ''
        let teleTercDetaDetaDeta = ''
        let nombIngrDetaDetaDeta = ''
        let codiCampDetaDetaDeta = ''
        let saldDocuDetaDetaDeta = ''
        let descDocuDetaDetaDeta = ''
        let obsePediDetaDetaDeta = ''
        let nombSancDetaDetaDeta = ''

        switch (store.getters['app/currentBreakPoint']) {
          case 'xs':
            codiTercDetaDetaDeta = '20'
            numeIdenDetaDetaDeta = '20'
            codiCortDetaDetaDeta = '10'
            codiZonaDetaDetaDeta = '10'
            codiSectDetaDetaDeta = '10'
            nombTercDetaDetaDeta = '50'
            teleTercDetaDetaDeta = '20'
            nombIngrDetaDetaDeta = '20'
            codiCampDetaDetaDeta = '15'
            saldDocuDetaDetaDeta = '15'
            descDocuDetaDetaDeta = '15'
            obsePediDetaDetaDeta = '15'
            if (this.popupActiveDetalleCodigo === 'b') {
              nombTercDetaDetaDeta = '55'
              nombSancDetaDetaDeta = '40'
              obsePediDetaDetaDeta = '15'
            }
            break
          case 'sm':
            codiTercDetaDetaDeta = '20'
            numeIdenDetaDetaDeta = '20'
            codiCortDetaDetaDeta = '10'
            codiZonaDetaDetaDeta = '10'
            codiSectDetaDetaDeta = '10'
            nombTercDetaDetaDeta = '50'
            teleTercDetaDetaDeta = '20'
            nombIngrDetaDetaDeta = '20'
            codiCampDetaDetaDeta = '15'
            saldDocuDetaDetaDeta = '15'
            descDocuDetaDetaDeta = '15'
            obsePediDetaDetaDeta = '15'
            if (this.popupActiveDetalleCodigo === 'b') {
              nombTercDetaDetaDeta = '55'
              nombSancDetaDetaDeta = '40'
              obsePediDetaDetaDeta = '15'
            }
            break
          default:
            codiTercDetaDetaDeta = '10'
            numeIdenDetaDetaDeta = '10'
            codiCortDetaDetaDeta = '5'
            codiZonaDetaDetaDeta = '5'
            codiSectDetaDetaDeta = '5'
            nombTercDetaDetaDeta = '25'
            teleTercDetaDetaDeta = '10'
            nombIngrDetaDetaDeta = '10'
            codiCampDetaDetaDeta = '7.5'
            saldDocuDetaDetaDeta = '7.5'
            descDocuDetaDetaDeta = '7.5'
            obsePediDetaDetaDeta = '7.5'
            if (this.popupActiveDetalleCodigo === 'b') {
              nombTercDetaDetaDeta = '27.5'
              nombSancDetaDetaDeta = '20'
              obsePediDetaDetaDeta = '7.5'
            }
            break
        }
        if (this.popupActiveDetalleCodigo === 'c') {
          this.columnsDetalleDetalleDetalle = [
            {
              text: 'Código',
              dataField: 'codi_terc',
              width: `${codiTercDetaDetaDeta}%`,
              cellsrenderer: this.claseSegundoTotalPedidosDigitadosRegion,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'DNI - RUC',
              dataField: 'nume_iden',
              width: `${numeIdenDetaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Corte',
              dataField: 'codi_cort',
              width: `${codiCortDetaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Zona',
              dataField: 'codi_zona',
              width: `${codiZonaDetaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Sector',
              dataField: 'codi_sect',
              width: `${codiSectDetaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Nombre(s) y Apellido(s)',
              dataField: 'nomb_terc',
              width: `${nombTercDetaDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Teléfono',
              dataField: 'tele_terc',
              width: `${teleTercDetaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Ingresado por',
              dataField: 'nomb_ingr',
              width: `${nombIngrDetaDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Campaña',
              dataField: 'codi_camp',
              width: `${codiCampDetaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Saldo',
              dataField: 'sald_docu',
              width: `${saldDocuDetaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              cellsformat: 'D2',
            },
            {
              text: 'Documento',
              dataField: 'desc_docu',
              width: `${descDocuDetaDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Observación',
              dataField: 'obse_pedi',
              width: `${obsePediDetaDetaDeta}%`,
              cellsrenderer: this.claseSegundoTotalPedidosDigitadosRegion,
              align: 'center',
              cellsalign: 'center',
            },
          ]
        }
        if (this.popupActiveDetalleCodigo === 'b') {
          this.columnsDetalleDetalleDetalle = [
            {
              text: 'Código',
              dataField: 'codi_terc',
              width: `${codiTercDetaDetaDeta}%`,
              cellsrenderer: this.claseSegundoTotalPedidosDigitadosRegion,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'DNI - RUC',
              dataField: 'nume_iden',
              width: `${numeIdenDetaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Corte',
              dataField: 'codi_cort',
              width: `${codiCortDetaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Zona',
              dataField: 'codi_zona',
              width: `${codiZonaDetaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Sector',
              dataField: 'codi_sect',
              width: `${codiSectDetaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Nombre(s) y Apellido(s)',
              dataField: 'nomb_terc',
              width: `${nombTercDetaDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Teléfono',
              dataField: 'tele_terc',
              width: `${teleTercDetaDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Ingresado por',
              dataField: 'nomb_ingr',
              width: `${nombIngrDetaDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Bloqueo',
              dataField: 'nomb_sanc',
              width: `${nombSancDetaDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Observación',
              dataField: 'obse_pedi',
              width: `${obsePediDetaDetaDeta}%`,
              cellsrenderer: this.claseSegundoTotalPedidosDigitadosRegion,
              align: 'center',
              cellsalign: 'center',
            },
          ]
        }
      }
      if (typeof this.$refs.repo_come_pedi_digi_regi_grid_glob !== 'undefined') {
        this.$refs.repo_come_pedi_digi_regi_grid_glob.columns = this.columnsGlobal
        this.$refs.repo_come_pedi_digi_regi_grid_deta.columns = this.columnsDetalle
        this.$refs.repo_come_pedi_digi_regi_grid_cort.columns = this.columnsCorte
        this.$refs.repo_come_pedi_digi_regi_grid_zona.columns = this.columnsZona
      }
      if (typeof this.$refs.repo_come_pedi_digi_regi_grid_deta_deta !== 'undefined') {
        this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.columns = this.columnsDetalleDetalle
        this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.height = this.heightDetalle
      }
      if (typeof this.$refs.repo_come_pedi_digi_regi_grid_deta_deta_deta !== 'undefined') {
        this.$refs.repo_come_pedi_digi_regi_grid_deta_deta_deta.columns = this.columnsDetalleDetalleDetalle
        this.$refs.repo_come_pedi_digi_regi_grid_deta_deta_deta.height = this.heightDetalle
      }
    },
    repo_come_pedi_digi_regi_limp() {
      this.repo_come_pedi_digi_regi_inic()
    },
    repo_come_pedi_digi_regi_inic() {
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
      this.$refs.repo_come_pedi_digi_regi_grid_glob.updatebounddata('cells')

      this.sourceDetalle.localdata = [
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Pedidos pendientes de retención consecutivas',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Pedidos pendientes de retención consecutivas 2do pedido',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Pedidos pendientes de retención consecutivas 3er pedido',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Pedidos pendientes de retención consecutivas 4to pedido',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Pedidos pendientes de retención peg21',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Pedidos pendientes de retención peg42',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Pedidos pendientes de retención peg63',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Pedidos pendientes de retención reingresos',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '1',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer></i>',
          nomb_conc: 'Pedidos pendientes de retención',
          cant_conc: '0',
          porc_conc: '0.00 %',
        },
        {
          cons_fila: '2',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer></i>',
          nomb_conc: 'Pedidos pendientes de incorporación',
          cant_conc: '0',
          porc_conc: '0.00 %',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Total pedidos pendientes por facturar',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '4',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer></i>',
          nomb_conc: 'Retenidos de retención',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '5',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer></i>',
          nomb_conc: 'Retenidos de incorporación',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Total pedidos retenidos',
          cant_conc: '0',
          porc_conc: '',
        },
      ]
      this.sourceDetalle.datatype = 'array'
      this.$refs.repo_come_pedi_digi_regi_grid_deta.updatebounddata('cells')

      this.sourceZona.localdata = []
      this.sourceZona.datatype = 'array'
      this.$refs.repo_come_pedi_digi_regi_grid_zona.updatebounddata('cells')

      this.sourceCorte.localdata = []
      this.sourceCorte.datatype = 'array'
      this.$refs.repo_come_pedi_digi_regi_grid_cort.updatebounddata('cells')
    },
    async repo_come_pedi_digi_regi_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_pedi_digi_regi',
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
    async repo_come_pedi_digi_regi_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoCort = this.$refs.repo_come_pedi_digi_regi_grid_cort.getdatainformation()
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
            text: 'No tiene información para exportar consolidado corte pedido',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        const dataInfoZona = this.$refs.repo_come_pedi_digi_regi_grid_zona.getdatainformation()
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
              text: 'No tiene información para exportar detalle zona pedido',
            },
          }, {
            position: 'bottom-right',
            timeout: 8000,
          })
        } else {
          try {
            const servicio = await axios({
              method: 'post',
              url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_regi_exce`,
              timeout: `${1000 * store.state.app.timeout}`,
              data: {
                codi_usua: this.$session.get('codigoUsuario'),
                codi_acce: this.userData.codigoAcceso,
                data_glob: this.$refs.repo_come_pedi_digi_regi_grid_glob.exportdata('json', null, true, null, true),
                data_deta: this.$refs.repo_come_pedi_digi_regi_grid_deta.exportdata('json', null, true, null, true),
                data_cort: this.$refs.repo_come_pedi_digi_regi_grid_cort.exportdata('json', null, true, null, true),
                data_zona: this.$refs.repo_come_pedi_digi_regi_grid_zona.exportdata('json', null, true, null, true),
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
      }
    },
    async repo_come_pedi_digi_regi_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_pedi_digi_regi_limp()
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
      } else if (this.seleccionRegion === null || this.seleccionRegion.length === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'Campo región es obligatorio.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_regi_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_area: this.seleccionRegion,
              codi_camp: this.seleccionCampana,
              camp_actu: campActu,
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_pedi_digi_regi_grid_glob.updatebounddata('cells')
          this.sourceDetalle.localdata = await servicio.data.data_deta
          this.sourceDetalle.datatype = 'json'
          this.$refs.repo_come_pedi_digi_regi_grid_deta.updatebounddata('cells')
          this.sourceCorte.localdata = await servicio.data.data_cort
          this.sourceCorte.datatype = 'json'
          this.$refs.repo_come_pedi_digi_regi_grid_cort.updatebounddata('cells')
          this.sourceZona.localdata = await servicio.data.data_zona
          this.sourceZona.datatype = 'json'
          this.$refs.repo_come_pedi_digi_regi_grid_zona.updatebounddata('cells')
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
    repo_come_pedi_digi_regi_deta(event) {
      let args = {}
      args = event.args
      const row = args.rowindex
      const dataRecord = this.$refs.repo_come_pedi_digi_regi_grid_deta.getrowdata(row)
      // eslint-disable-next-line
      const consFila = parseInt(dataRecord.cons_fila)
      if (consFila > 0) {
        // eslint-disable-next-line
        const cantConc = parseInt(dataRecord.cant_conc)
        const nombConc = dataRecord.nomb_conc
        if (cantConc === 0) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: `No tiene informacion para el concepto ${nombConc}.`,
            },
          }, {
            position: 'bottom-right',
            timeout: 8000,
          })
        } else {
          this.popupActiveTitulo = nombConc
          switch (consFila) {
            case 1:
              this.popupActiveCodigo = '1'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_cort', type: 'string' },
                { name: 'codi_zona', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'obse_pedi', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_regi_pend_rete()
              break
            case 2:
              this.popupActiveCodigo = '2'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_cort', type: 'string' },
                { name: 'codi_zona', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'obse_pedi', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_regi_pend_inco()
              break
            case 4:
              this.repo_come_pedi_digi_regi_grid_deta_deta_cerr_clas = 'ml-1 d-block'
              this.popupActiveCodigo = '4'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_cort', type: 'string' },
                { name: 'codi_zona', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tele_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'moti_cart', type: 'string' },
                { name: 'moti_cupo', type: 'string' },
                { name: 'moti_code', type: 'string' },
                { name: 'moti_mini', type: 'string' },
                { name: 'moti_cerr', type: 'string' },
                { name: 'moti_bloq', type: 'string' },
                { name: 'obse_pedi', type: 'string' },
                { name: 'tota_publ_tota', type: 'number' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_regi_rete_rete()
              break
            case 5:
              this.repo_come_pedi_digi_regi_grid_deta_deta_cerr_clas = 'ml-1 d-block'
              this.popupActiveCodigo = '5'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_cort', type: 'string' },
                { name: 'codi_zona', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'moti_cart', type: 'string' },
                { name: 'moti_cupo', type: 'string' },
                { name: 'moti_code', type: 'string' },
                { name: 'moti_mini', type: 'string' },
                { name: 'moti_cerr', type: 'string' },
                { name: 'moti_bloq', type: 'string' },
                { name: 'tota_publ_tota', type: 'number' },
                { name: 'obse_pedi', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_regi_rete_inco()
              break
            default:
          }
        }
      }
    },
    async repo_come_pedi_digi_regi_pend_rete() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_regi_gene_pend_rete`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        document.body.style.overflow = 'hidden'
        document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
        this.popupActive = true
        this.sourceDetalleDetalle.localdata = await servicio.data.dato
        this.sourceDetalleDetalle.datatype = 'json'
        this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_regi_pend_rete_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_regi_exce_pend_rete`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_regi_pend_inco() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_regi_gene_pend_inco`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        document.body.style.overflow = 'hidden'
        document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
        this.popupActive = true
        this.sourceDetalleDetalle.localdata = await servicio.data.dato
        this.sourceDetalleDetalle.datatype = 'json'
        this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_regi_pend_inco_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_regi_exce_pend_inco`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_regi_rete_rete() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_regi_gene_rete_rete`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        document.body.style.overflow = 'hidden'
        document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
        this.popupActive = true
        this.sourceDetalleDetalle.localdata = await servicio.data.dato
        this.sourceDetalleDetalle.datatype = 'json'
        this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_regi_rete_rete_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_regi_exce_rete_rete`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_regi_rete_inco() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_regi_gene_rete_inco`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        document.body.style.overflow = 'hidden'
        document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
        this.popupActive = true
        this.sourceDetalleDetalle.localdata = await servicio.data.dato
        this.sourceDetalleDetalle.datatype = 'json'
        this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_regi_rete_inco_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_regi_exce_rete_inco`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.exportdata('json'),
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
    repo_come_pedi_digi_regi_deta_deta_exce() {
      const dataInfo = this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.getdatainformation()
      const dataRows = dataInfo.rowscount
      if (dataRows === 0) {
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'No tiene información para exportar.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        const codigoPopup = this.popupActiveCodigo
        switch (codigoPopup) {
          case '1':
            this.repo_come_pedi_digi_regi_pend_rete_exce()
            break
          case '2':
            this.repo_come_pedi_digi_regi_pend_inco_exce()
            break
          case '4':
            this.repo_come_pedi_digi_regi_rete_rete_exce()
            break
          case '5':
            this.repo_come_pedi_digi_regi_rete_inco_exce()
            break
          default:
        }
      }
    },
    repo_come_pedi_digi_regi_deta_deta_cerr() {
      document.body.style.overflow = 'visible'
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
      this.repo_come_pedi_digi_regi_grid_deta_deta_cerr_clas = 'ml-1 d-none'
      this.popupActiveCodigo = ''
    },
    repo_come_pedi_digi_regi_deta_deta_deta_cerr() {
      this.popupActiveDetalleCodigo = ''
    },
    repo_come_pedi_digi_regi_deta_deta_cart() {
      this.popupActiveDetalleCodigo = 'c'
      this.popupActiveDetalleTitulo = `${this.popupActiveTitulo} - Cartera`
      this.popupActiveDetalle = true
      this.sourceDetalleDetalleDetalle.datafields = [
        { name: 'codi_terc', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'codi_cort', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'nomb_terc', type: 'string' },
        { name: 'tele_terc', type: 'string' },
        { name: 'codi_camp', type: 'string' },
        { name: 'nomb_ingr', type: 'string' },
        { name: 'sald_docu', type: 'number' },
        { name: 'desc_docu', type: 'string' },
        { name: 'obse_pedi', type: 'string' },
      ]
      this.sourceDetalleDetalleDetalle.localdata = []
      this.$refs.repo_come_pedi_digi_regi_grid_deta_deta_deta.updatebounddata()
      this.handleWindowResize()
      this.repo_come_pedi_digi_regi_deta_deta_deta_cart(this.popupActiveTitulo)
    },
    async repo_come_pedi_digi_regi_deta_deta_deta_cart(titulo) {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      let url = ''
      if (titulo === 'Retenidos de retención') {
        url = '/dato/pedi_digi_regi_gene_rete_rete_cart'
      } else {
        url = '/dato/pedi_digi_regi_gene_rete_inco_cart'
      }
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1${url}`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        document.body.style.overflow = 'hidden'
        document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
        this.popupActive = true
        this.sourceDetalleDetalleDetalle.localdata = await servicio.data.dato
        this.sourceDetalleDetalleDetalle.datatype = 'json'
        this.$refs.repo_come_pedi_digi_regi_grid_deta_deta_deta.updatebounddata('cells')
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
    repo_come_pedi_digi_regi_deta_deta_bloq() {
      this.popupActiveDetalleCodigo = 'b'
      this.popupActiveDetalleTitulo = `${this.popupActiveTitulo} - Bloqueo`
      this.popupActiveDetalle = true
      this.sourceDetalleDetalleDetalle.datafields = [
        { name: 'codi_terc', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'codi_cort', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'nomb_terc', type: 'string' },
        { name: 'tele_terc', type: 'string' },
        { name: 'nomb_ingr', type: 'string' },
        { name: 'nomb_sanc', type: 'string' },
        { name: 'obse_pedi', type: 'string' },
      ]
      this.sourceDetalleDetalleDetalle.localdata = []
      this.$refs.repo_come_pedi_digi_regi_grid_deta_deta_deta.updatebounddata()
      this.handleWindowResize()
      this.repo_come_pedi_digi_regi_deta_deta_deta_bloq(this.popupActiveTitulo)
    },
    async repo_come_pedi_digi_regi_deta_deta_deta_bloq(titulo) {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      let url = ''
      if (titulo === 'Retenidos de retención') {
        url = '/dato/pedi_digi_regi_gene_rete_rete_bloq'
      } else {
        url = '/dato/pedi_digi_regi_gene_rete_inco_bloq'
      }
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1${url}`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        document.body.style.overflow = 'hidden'
        document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
        this.popupActive = true
        this.sourceDetalleDetalleDetalle.localdata = await servicio.data.dato
        this.sourceDetalleDetalleDetalle.datatype = 'json'
        this.$refs.repo_come_pedi_digi_regi_grid_deta_deta_deta.updatebounddata('cells')
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
    repo_come_pedi_digi_regi_deta_deta_deta_exce() {
      const dataInfo = this.$refs.repo_come_pedi_digi_regi_grid_deta_deta_deta.getdatainformation()
      const dataRows = dataInfo.rowscount
      if (dataRows === 0) {
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'No tiene información para exportar.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        const codigoPopup = this.popupActiveCodigo
        const codigoDetallePopup = this.popupActiveDetalleCodigo
        /* Retenidos Retención */
        if (codigoPopup === '4') {
          if (codigoDetallePopup === 'c') {
            this.repo_come_pedi_digi_regi_deta_deta_deta_cart_rete_rete_exce()
          }
          if (codigoDetallePopup === 'b') {
            this.repo_come_pedi_digi_regi_deta_deta_deta_bloq_rete_rete_exce()
          }
        }
        /* Retenidos Incorporación */
        if (codigoPopup === '5') {
          if (codigoDetallePopup === 'c') {
            this.repo_come_pedi_digi_regi_deta_deta_deta_cart_rete_inco_exce()
          }
          if (codigoDetallePopup === 'b') {
            this.repo_come_pedi_digi_regi_deta_deta_deta_bloq_rete_inco_exce()
          }
        }
      }
    },
    async repo_come_pedi_digi_regi_deta_deta_deta_cart_rete_rete_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_regi_exce_rete_rete_cart`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_regi_grid_deta_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_regi_deta_deta_deta_bloq_rete_rete_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_regi_exce_rete_rete_bloq`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_regi_grid_deta_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_regi_deta_deta_deta_cart_rete_inco_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_regi_exce_rete_inco_cart`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_regi_grid_deta_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_regi_deta_deta_deta_bloq_rete_inco_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_regi_exce_rete_inco_bloq`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_regi_grid_deta_deta_deta.exportdata('json'),
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
    repo_come_pedi_digi_regi_grid_cort_sele(event) {
      const nombColu = this.$refs.repo_come_pedi_digi_regi_grid_cort.getcolumn(event.args.datafield).text
      const row = event.args.rowindex
      const dataRecord = this.$refs.repo_come_pedi_digi_regi_grid_cort.getrowdata(row)
      const codiCort = dataRecord.codi_cort
      if (nombColu === 'Corte') {
        this.$refs.repo_come_pedi_digi_regi_grid_zona.beginupdate()
        this.$refs.repo_come_pedi_digi_regi_grid_zona.clearfilters()
        this.$refs.repo_come_pedi_digi_regi_grid_zona.removefilter('codi_cort')
        // eslint-disable-next-line
        let filtGrouCort = new jqx.filter()
        const filtCort = filtGrouCort.createfilter('stringfilter', codiCort, 'EQUAL')
        filtGrouCort.addfilter('1', filtCort)
        this.$refs.repo_come_pedi_digi_regi_grid_zona.addfilter('codi_cort', filtGrouCort)
        this.$refs.repo_come_pedi_digi_regi_grid_zona.applyfilters()
        this.$refs.repo_come_pedi_digi_regi_grid_zona.endupdate()
      }
    },
    claseSegundoTotalPedidosDigitadosRegion(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_pedi_digi_regi_grid_deta_deta.getrowdata(row)
      const obsePedi = dataRecord.obse_pedi
      if (obsePedi === 'Pend 2da O. C.' || obsePedi === 'Rete. 2da O. C.' || obsePedi === '2da O. C.') {
        return (`<div class = 'jqx-grid-cell-middle-align' style='margin-top: 7px; color: #EA5455'>${value}</div>`)
      }
      return (`<div class = 'jqx-grid-cell-middle-align' style='margin-top: 7px'>${value}</div>`)
    },
  },
}
</script>
<style lang='scss'>

</style>
