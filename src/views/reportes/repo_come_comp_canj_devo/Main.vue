<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="repo_come_comp_canj_gene()"
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
        @click="repo_come_comp_canj_limp()"
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
        @click="repo_come_comp_canj_gene()"
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
        @click="repo_come_comp_canj_exce()"
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
        @click="repo_come_comp_canj_limp()"
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
            ref="repo_come_comp_canj_grid_glob"
            :width="'100%'"
            :autoheight="true"
            :source="dataAdapterGlobal"
            :sortable="false"
            :theme="'sami'"
            :filterable="false"
            :columns="columnsGlobal"
            :enableanimations="true"
            :localization="localization"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
            :enablehover="false"
            :columnsresize="true"
            :autorowheight="true"
            @rowdoubleclick="repo_come_comp_canj_glob_deta($event)"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_comp_canj_grid_resu"
            :width="'100%'"
            :autoheight="true"
            :source="dataAdapterResumen"
            :sortable="false"
            :theme="'sami'"
            :filterable="false"
            :columns="columnsResumen"
            :enableanimations="true"
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
            ref="repo_come_comp_canj_grid_deta"
            :width="'100%'"
            :enablehover="false"
            :source="dataAdapterDetalle"
            :columns="columnsDetalle"
            :localization="localization"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="true"
            :sortmode="'many'"
            :filterable="true"
            :altrows="false"
            :enableanimations="true"
            :showemptyrow="false"
            :columnsreorder="true"
            :showstatusbar="true"
            :showaggregates="true"
            :editable="false"
            :editmode="'click'"
            :groupable="true"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
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
      @close="repo_come_comp_canj_deta_cerr()"
    >
      <b-row>
        <b-col>
          <div class="d-flex align-items-center justify-content-end mb-2">
            <b-button
              variant="success"
              class="ml-1 d-none d-lg-block"
              @click="repo_come_comp_canj_deta_exce()"
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
            ref="repo_come_comp_canj_grid_deta_deta"
            :width="'100%'"
            :enablehover="false"
            :height="heightDetalle"
            :theme="'sami'"
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
  BRow,
  BCol,
  BButton,
  BCard,
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import selectCampanaZona from '@/views/components/FiltroCampanaZona.vue'
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

let sumaCanjDevoDetalle = 0
let sumaVentNetaDetalle = 0

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
      // eslint-disable-next-line
      dataAdapterResumen: new jqx.dataAdapter(this.sourceResumen),
      // eslint-disable-next-line
      dataAdapterDetalle: new jqx.dataAdapter(this.sourceDetalle),
      // eslint-disable-next-line
      dataAdapterDetalleDetalle: new jqx.dataAdapter(this.sourceDetalleDetalle),
      columnsDetalleDetalle: [],
      popupActiveTitulo: '',
      popupActiveCodigo: '',
      heightDetalle: '',
      popupActive: false,
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
        { name: 'cons_fila', type: 'number' },
        { name: 'esta_conc', type: 'string' },
        { name: 'nomb_conc', type: 'string' },
        { name: 'cant_conc', type: 'number' },
        { name: 'porc_conc', type: 'string' },
      ],
      datatype: 'array',
    }
    this.sourceResumen = {
      localdata: [],
      datafields: [
        { name: 'nume_pedi', type: 'number' },
        { name: 'nume_canj', type: 'number' },
        { name: 'porc_canj', type: 'number' },
        { name: 'colo_canj', type: 'string' },
      ],
      datatype: 'array',
    }
    this.sourceDetalle = {
      localdata: [],
      datafields: [
        { name: 'codi_cort', type: 'string' },
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'nomb_vend', type: 'string' },
        { name: 'vent_neta', type: 'number' },
        { name: 'canj_devo', type: 'number' },
        { name: 'porc_canj_devo', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceDetalleDetalle = {
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
    this.repo_come_comp_canj_inic()
    this.repo_come_comp_canj_visi()
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
    setCampana(value) {
      this.seleccionCampana = value
    },
    setZona(value) {
      this.seleccionZona = value
    },
    handleWindowResize() {
      let estaConcGlob = ''
      let nombConcGlob = ''
      let cantConcGlob = ''
      let porcConcGlob = ''
      let numePediResu = ''
      let numeCanjResu = ''
      let porcCanjResu = ''
      let coloCanjResu = ''
      let codiCortDeta = ''
      let codiAreaDeta = ''
      let codiZonaDeta = ''
      let codiSectDeta = ''
      let nombVendDeta = ''
      let ventNetaDeta = ''
      let canjDevoDeta = ''
      let porcCanjDevoDeta = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          estaConcGlob = '5'
          nombConcGlob = '65'
          cantConcGlob = '15'
          porcConcGlob = '15'
          numePediResu = '30'
          numeCanjResu = '30'
          porcCanjResu = '30'
          coloCanjResu = '10'
          codiCortDeta = '20'
          codiAreaDeta = '20'
          codiZonaDeta = '20'
          codiSectDeta = '20'
          nombVendDeta = '70'
          ventNetaDeta = '25'
          canjDevoDeta = '25'
          porcCanjDevoDeta = '25'
          break
        case 'sm':
          estaConcGlob = '5'
          nombConcGlob = '65'
          cantConcGlob = '15'
          porcConcGlob = '15'
          numePediResu = '30'
          numeCanjResu = '30'
          porcCanjResu = '30'
          coloCanjResu = '10'
          codiCortDeta = '20'
          codiAreaDeta = '20'
          codiZonaDeta = '20'
          codiSectDeta = '20'
          nombVendDeta = '70'
          ventNetaDeta = '25'
          canjDevoDeta = '25'
          porcCanjDevoDeta = '25'
          break
        case 'md':
          estaConcGlob = '5'
          nombConcGlob = '65'
          cantConcGlob = '15'
          porcConcGlob = '15'
          numePediResu = '30'
          numeCanjResu = '30'
          porcCanjResu = '30'
          coloCanjResu = '10'
          codiCortDeta = '15'
          codiAreaDeta = '15'
          codiZonaDeta = '15'
          codiSectDeta = '15'
          nombVendDeta = '60'
          ventNetaDeta = '20'
          canjDevoDeta = '20'
          porcCanjDevoDeta = '20'
          break
        default:
          estaConcGlob = '5'
          nombConcGlob = '75'
          cantConcGlob = '10'
          porcConcGlob = '10'
          numePediResu = '30'
          numeCanjResu = '30'
          porcCanjResu = '30'
          coloCanjResu = '10'
          codiCortDeta = '7.5'
          codiAreaDeta = '7.5'
          codiZonaDeta = '7.5'
          codiSectDeta = '7.5'
          nombVendDeta = '40'
          ventNetaDeta = '10'
          canjDevoDeta = '10'
          porcCanjDevoDeta = '10'
          break
      }
      this.columnsGlobal = [
        {
          text: 'fila',
          dataField: 'cons_fila',
          hidden: true,
        },
        {
          text: ' ',
          dataField: 'esta_conc',
          width: `${estaConcGlob}%`,
          cellsalign: 'center',
        },
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConcGlob}%`,
        },
        {
          text: 'Monto S/.',
          dataField: 'cant_conc',
          width: `${cantConcGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
        },
        {
          text: 'Porcentaje',
          dataField: 'porc_conc',
          width: `${porcConcGlob}%`,
          align: 'center',
          cellsalign: 'center',
          cellclassname: this.repo_come_comp_canj_glob_clas,
        },
      ]
      this.columnsResumen = [
        {
          text: 'Pedidos Totales',
          dataField: 'nume_pedi',
          align: 'center',
          cellsalign: 'center',
          width: `${numePediResu}%`,
        },
        {
          text: 'Asesoras C&D',
          dataField: 'nume_canj',
          align: 'center',
          cellsalign: 'center',
          width: `${numeCanjResu}%`,
        },
        {
          text: '% Asesoras sin reclamo',
          dataField: 'porc_canj',
          align: 'center',
          cellsalign: 'center',
          width: `${porcCanjResu}%`,
          cellsformat: 'D2',
        },
        {
          text: '',
          dataField: 'colo_canj',
          align: 'center',
          cellsalign: 'center',
          width: `${coloCanjResu}%`,
        },
      ]
      this.columnsDetalle = [
        {
          text: 'Corte',
          dataField: 'codi_cort',
          width: `${codiCortDeta}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Región',
          dataField: 'codi_area',
          width: `${codiAreaDeta}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: `${codiZonaDeta}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Sector',
          dataField: 'codi_sect',
          width: `${codiSectDeta}%`,
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Lider',
          dataField: 'nomb_vend',
          width: `${nombVendDeta}%`,
          align: 'center',
        },
        {
          text: 'Venta Neta',
          dataField: 'vent_neta',
          width: `${ventNetaDeta}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
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
          text: 'C&D Final',
          dataField: 'canj_devo',
          width: `${canjDevoDeta}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
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
          text: '% C&D Final',
          dataField: 'porc_canj_devo',
          width: `${porcCanjDevoDeta}%`,
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedValue, currentValue, column, record) {
                // eslint-disable-next-line
                if (record['uid'] === 0) {
                  sumaCanjDevoDetalle = 0
                  sumaVentNetaDetalle = 0
                }
                // eslint-disable-next-line
                sumaCanjDevoDetalle = sumaCanjDevoDetalle + record['canj_devo']
                // eslint-disable-next-line
                sumaVentNetaDetalle = sumaVentNetaDetalle + record['vent_neta']
                let sumaPorcDetalle = 0
                // eslint-disable-next-line
                if (parseInt(sumaCanjDevoDetalle) > 0 && parseInt(sumaVentNetaDetalle) > 0 ) {
                  // eslint-disable-next-line
                  sumaPorcDetalle = 100 * (parseInt(sumaCanjDevoDetalle) / parseInt(sumaVentNetaDetalle))
                }
                sumaPorcDetalle = parseFloat(sumaPorcDetalle).toFixed(2)
                return sumaPorcDetalle
              },
            },
          ],
          cellclassname: this.repo_come_comp_canj_deta_clas,
        },
      ]
      if (this.popupActiveCodigo !== '') {
        let codiTercDetaDeta = ''
        let numeIdenDetaDeta = ''
        let codiSectDetaDeta = ''
        let nombTercDetaDeta = ''
        let nombLineDetaDeta = ''
        let codiProdDetaDeta = ''
        let nombProdDetaDeta = ''
        let cantProdDetaDeta = ''
        let precNetoDetaDeta = ''
        let pinned = true
        this.heightDetalle = `${window.innerHeight - 250}px`
        switch (store.getters['app/currentBreakPoint']) {
          case 'xs':
            codiTercDetaDeta = '25'
            numeIdenDetaDeta = '25'
            codiSectDetaDeta = '20'
            nombTercDetaDeta = '70'
            nombLineDetaDeta = '50'
            codiProdDetaDeta = '25'
            nombProdDetaDeta = '70'
            cantProdDetaDeta = '25'
            precNetoDetaDeta = '25'
            pinned = false
            break
          case 'sm':
            codiTercDetaDeta = '25'
            numeIdenDetaDeta = '25'
            codiSectDetaDeta = '20'
            nombTercDetaDeta = '70'
            nombLineDetaDeta = '50'
            codiProdDetaDeta = '25'
            nombProdDetaDeta = '70'
            cantProdDetaDeta = '25'
            precNetoDetaDeta = '25'
            pinned = false
            break
          case 'md':
            codiTercDetaDeta = '15'
            numeIdenDetaDeta = '15'
            codiSectDetaDeta = '10'
            nombTercDetaDeta = '50'
            nombLineDetaDeta = '30'
            codiProdDetaDeta = '20'
            nombProdDetaDeta = '50'
            cantProdDetaDeta = '20'
            precNetoDetaDeta = '20'
            pinned = false
            break
          default:
            codiTercDetaDeta = '10'
            numeIdenDetaDeta = '10'
            codiSectDetaDeta = '10'
            nombTercDetaDeta = '25'
            nombLineDetaDeta = '20'
            codiProdDetaDeta = '10'
            nombProdDetaDeta = '30'
            cantProdDetaDeta = '10'
            precNetoDetaDeta = '10'
            pinned = true
            break
        }
        this.columnsDetalleDetalle = [
          {
            text: 'Código',
            dataField: 'codi_terc',
            width: `${codiTercDetaDeta}%`,
            align: 'center',
            cellsalign: 'center',
            pinned,
          },
          {
            text: 'DNI - RUC',
            dataField: 'nume_iden',
            width: `${numeIdenDetaDeta}%`,
            align: 'center',
            cellsalign: 'center',
            pinned,
          },
          {
            text: 'Sector',
            dataField: 'codi_sect',
            width: `${codiSectDetaDeta}%`,
            align: 'center',
            cellsalign: 'center',
            pinned,
          },
          {
            text: 'Nombre(s) y Apellido(s)',
            dataField: 'nomb_terc',
            width: `${nombTercDetaDeta}%`,
            align: 'center',
            pinned,
          },
          {
            text: 'Linea',
            dataField: 'nomb_line',
            width: `${nombLineDetaDeta}%`,
            align: 'center',
          },
          {
            text: 'Codi. Prod.',
            dataField: 'codi_prod',
            width: `${codiProdDetaDeta}%`,
            align: 'center',
            cellsalign: 'center',
          },
          {
            text: 'Desc. Prod.',
            dataField: 'nomb_prod',
            width: `${nombProdDetaDeta}%`,
            align: 'center',
          },
          {
            text: 'Cantidad',
            dataField: 'cant_prod',
            width: `${cantProdDetaDeta}%`,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'N',
          },
          {
            text: 'Precio',
            dataField: 'prec_neto',
            width: `${precNetoDetaDeta}%`,
            align: 'center',
            cellsalign: 'center',
            cellsformat: 'D2',
          },
        ]
      }
      if (typeof this.$refs.repo_come_comp_canj_grid_glob !== 'undefined') {
        this.$refs.repo_come_comp_canj_grid_glob.columns = this.columnsGlobal
        this.$refs.repo_come_comp_canj_grid_resu.columns = this.columnsResumen
        this.$refs.repo_come_comp_canj_grid_deta.columns = this.columnsDetalle
      }
      if (typeof this.$refs.repo_come_comp_canj_grid_deta_deta !== 'undefined') {
        this.$refs.repo_come_comp_canj_grid_deta_deta.columns = this.columnsDetalleDetalle
        this.$refs.repo_come_comp_canj_grid_deta_deta.height = this.heightDetalle
      }
    },
    repo_come_comp_canj_inic() {
      this.sourceGlobal.localdata = [
        {
          cons_fila: '0',
          esta_conc: '<i class="vs-icon feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Venta neta',
          cant_conc: '0.00',
          porc_conc: '',
        },
        {
          cons_fila: '1',
          esta_conc: '<i class="vs-icon feather icon-search text-success text-lg"></i>',
          nomb_conc: 'Devoluciones no incluidas en plan de carrera',
          cant_conc: '0.00',
          porc_conc: '',
        },
        {
          cons_fila: '2',
          esta_conc: '<i class="vs-icon feather icon-search text-success text-lg"></i>',
          nomb_conc: 'Devoluciones incluidas en plan de carrera',
          cant_conc: '0.00',
          porc_conc: '0.00 %',
        },
        {
          cons_fila: '3',
          esta_conc: '<i class="vs-icon feather icon-search text-success text-lg"></i>',
          nomb_conc: 'Canjes no refacturados por asesora que no pasa pedido',
          cant_conc: '0.00',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="vs-icon feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Canjes no refacturados por falta de stock',
          cant_conc: '0.00',
          porc_conc: '',
        },
        {
          cons_fila: '4',
          esta_conc: '<i class="vs-icon feather icon-search text-success text-lg"></i>',
          nomb_conc: 'Canjes refacturados',
          cant_conc: '0.00',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="vs-icon feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Canjes solicitados',
          cant_conc: '0.00',
          porc_conc: '0.00 %',
        },
        {
          cons_fila: '5',
          esta_conc: '<i class="vs-icon feather icon-search text-success text-lg"></i>',
          nomb_conc: 'Canjes + Devoluciones',
          cant_conc: '0.00',
          porc_conc: '0.00 %',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="vs-icon feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Canjes & Devoluciones finales',
          cant_conc: '0.00',
          porc_conc: '0.00 %',
        },
      ]
      this.$refs.repo_come_comp_canj_grid_glob.updatebounddata('cells')
      this.sourceResumen.localdata = [
        {
          nume_pedi: '0',
          nume_canj: '0',
          porc_canj: '0.0',
          colo_canj: '<i class="vs-icon feather icon-circle text-secondary text-lg"></i>',
        },
      ]
      this.$refs.repo_come_comp_canj_grid_resu.updatebounddata('cells')
      this.sourceDetalle.localdata = []
      this.sourceDetalle.datatype = 'array'
      this.$refs.repo_come_comp_canj_grid_deta.updatebounddata('cells')
    },
    async repo_come_comp_canj_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_comp_canj_devo',
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
    repo_come_comp_canj_limp() {
      this.repo_come_comp_canj_inic()
    },
    async repo_come_comp_canj_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfo = this.$refs.repo_come_comp_canj_grid_deta.getdatainformation()
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
            text: 'No tiene información del detalle para exportar a excel',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_comp_canj/comp_canj_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_comp_canj_grid_glob.exportdata('json', null, true, null, true),
              data_resu: this.$refs.repo_come_comp_canj_grid_resu.exportdata('json', null, true, null, true),
              data_deta: this.$refs.repo_come_comp_canj_grid_deta.exportdata('json', null, true, null, true),
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
    async repo_come_comp_canj_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_comp_canj_limp()
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
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_comp_canj/comp_canj_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.seleccionCampana,
              codi_zona: this.seleccionZona,
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_comp_canj_grid_glob.updatebounddata('cells')
          this.sourceResumen.localdata = await servicio.data.data_resu
          this.sourceResumen.datatype = 'json'
          this.$refs.repo_come_comp_canj_grid_resu.updatebounddata('cells')
          this.sourceDetalle.localdata = await servicio.data.data_deta
          this.sourceDetalle.datatype = 'json'
          this.$refs.repo_come_comp_canj_grid_deta.updatebounddata('cells')
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
    repo_come_comp_canj_glob_clas(row, columnfield, value) {
      if (row === 2 || row === 6 || row === 7 || row === 8) {
        const dataRecord = this.$refs.repo_come_comp_canj_grid_glob.getrowdata(0)
        // eslint-disable-next-line
        const cantConc = parseInt(dataRecord.cant_conc)
        if (cantConc === 0) {
          return ''
        }
        let valor = value.replace(' %', '')
        valor = parseFloat(valor).toFixed(2)
        if (valor >= 0 && valor <= 2) {
          return 'text-white bg-success'
        }
        if (valor > 2 && valor < 2.8) {
          return 'text-black bg-primary'
        }
        return 'text-white bg-danger'
      }
      return ''
    },
    repo_come_comp_canj_deta_clas(row) {
      const dataRecord = this.$refs.repo_come_comp_canj_grid_deta.getrowdata(row)
      let ventNeta = parseFloat(dataRecord.porc_canj_devo)
      ventNeta = parseFloat(ventNeta).toFixed(2)
      if (ventNeta === 0) {
        return ''
      }
      if (ventNeta >= 0 && ventNeta <= 2) {
        return 'text-white bg-success'
      }
      if (ventNeta > 2 && ventNeta < 2.8) {
        return 'text-black bg-primary'
      }
      return 'text-white bg-danger'
    },
    repo_come_comp_canj_glob_deta(event) {
      let args = {}
      args = event.args
      const row = args.rowindex
      const dataRecord = this.$refs.repo_come_comp_canj_grid_glob.getrowdata(row)
      // eslint-disable-next-line
      const consFila = parseInt(dataRecord.cons_fila)
      if (consFila > 0) {
        // eslint-disable-next-line
        const cantConc = parseInt(dataRecord.cant_conc)
        const nombNonc = dataRecord.nomb_conc
        if (cantConc === 0) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: `No tiene informacion para el concepto ${nombNonc}`,
            },
          }, {
            position: 'bottom-right',
            timeout: 8000,
          })
        } else {
          this.popupActiveTitulo = nombNonc
          switch (consFila) {
            case 1:
              this.popupActiveCodigo = '1'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'nomb_line', type: 'string' },
                { name: 'codi_prod', type: 'string' },
                { name: 'nomb_prod', type: 'string' },
                { name: 'cant_prod', type: 'number' },
                { name: 'prec_neto', type: 'number' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_comp_canj_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_comp_canj_devo_noin_plan()
              break
            case 2:
              this.popupActiveCodigo = '2'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'nomb_line', type: 'string' },
                { name: 'codi_prod', type: 'string' },
                { name: 'nomb_prod', type: 'string' },
                { name: 'cant_prod', type: 'number' },
                { name: 'prec_neto', type: 'number' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_comp_canj_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_comp_canj_devo_incl_plan()
              break
            case 3:
              this.popupActiveCodigo = '3'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'nomb_line', type: 'string' },
                { name: 'codi_prod', type: 'string' },
                { name: 'nomb_prod', type: 'string' },
                { name: 'cant_prod', type: 'number' },
                { name: 'prec_neto', type: 'number' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_comp_canj_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_comp_canj_devo_canj_nore()
              break
            case 4:
              this.popupActiveCodigo = '4'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'nomb_line', type: 'string' },
                { name: 'codi_prod', type: 'string' },
                { name: 'nomb_prod', type: 'string' },
                { name: 'cant_prod', type: 'number' },
                { name: 'prec_neto', type: 'number' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_comp_canj_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_comp_canj_devo_canj_refa()
              break
            case 5:
              this.popupActiveCodigo = '5'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'nomb_line', type: 'string' },
                { name: 'codi_prod', type: 'string' },
                { name: 'nomb_prod', type: 'string' },
                { name: 'cant_prod', type: 'number' },
                { name: 'prec_neto', type: 'number' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_comp_canj_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_comp_canj_devo_canj_devo()
              break
            default:
          }
        }
      }
    },
    async repo_come_comp_canj_devo_noin_plan() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/repo_come_comp_canj/comp_canj_devo_noin_plan`,
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
        this.sourceDetalleDetalle.localdata = servicio.data.dato
        this.sourceDetalleDetalle.datatype = 'json'
        this.$refs.repo_come_comp_canj_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_comp_canj_devo_incl_plan() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/repo_come_comp_canj/comp_canj_devo_incl_plan`,
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
        this.sourceDetalleDetalle.localdata = servicio.data.dato
        this.sourceDetalleDetalle.datatype = 'json'
        this.$refs.repo_come_comp_canj_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_comp_canj_devo_canj_nore() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/repo_come_comp_canj/comp_canj_devo_canj_nore`,
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
        this.sourceDetalleDetalle.localdata = servicio.data.dato
        this.sourceDetalleDetalle.datatype = 'json'
        this.$refs.repo_come_comp_canj_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_comp_canj_devo_canj_refa() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/repo_come_comp_canj/comp_canj_devo_canj_refa`,
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
        this.sourceDetalleDetalle.localdata = servicio.data.dato
        this.sourceDetalleDetalle.datatype = 'json'
        this.$refs.repo_come_comp_canj_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_comp_canj_devo_canj_devo() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/repo_come_comp_canj/comp_canj_devo_canj_devo`,
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
        this.sourceDetalleDetalle.localdata = servicio.data.dato
        this.sourceDetalleDetalle.datatype = 'json'
        this.$refs.repo_come_comp_canj_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_comp_canj_deta_exce() {
      const dataInfo = this.$refs.repo_come_comp_canj_grid_deta_deta.getdatainformation()
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
        this.$vs.loading({
          color: $themeColors.primary,
        })
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_comp_canj/comp_canj_exce_deta`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_comp_canj_grid_deta_deta.exportdata('json', null, true, null, true),
              codi_conc: this.popupActiveCodigo,
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
    repo_come_comp_canj_deta_cerr() {
      document.body.style.overflow = 'visible'
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
      this.popupActiveCodigo = ''
    },
  },
}
</script>
<style lang="scss">

</style>
