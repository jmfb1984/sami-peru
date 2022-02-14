<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_pedi_digi_gene()"
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
        @click="repo_come_pedi_digi_limp()"
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
        @click="repo_come_pedi_digi_gene()"
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
        @click="repo_come_pedi_digi_exce()"
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
        @click="repo_come_pedi_digi_limp()"
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
          :index-campana="1"
          @campana="setCampana"
          @zona="setZona"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_pedi_digi_grid_glob"
            :width="'100%'"
            :theme="'sami'"
            :autoheight="true"
            :source="dataAdapterGlobal"
            :sortable="false"
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
            ref="repo_come_pedi_digi_grid_deta"
            :width="'100%'"
            :theme="'sami'"
            :source="dataAdapterDetalle"
            :sortable="false"
            :filterable="false"
            :columns="columnsDetalle"
            :localization="localization"
            :columnsresize="true"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
            @rowdoubleclick="repo_come_pedi_digi_grid_deta_sele($event)"
          />
        </b-card>
      </b-col>
    </b-row>
    <vs-popup
      :title="popupActiveTitulo"
      :active.sync="popupActive"
      fullscreen
      :background-color-popup="clasePopUp"
      @close="repo_come_pedi_digi_deta_deta_cerr()"
    >
      <b-row>
        <b-col>
          <div class="d-flex align-items-center justify-content-end mb-2">
            <b-button
              variant="primary"
              :class="repo_come_pedi_digi_deta_deta_cerr_clas"
              @click="repo_come_pedi_digi_deta_deta_cart()"
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
              :class="repo_come_pedi_digi_deta_deta_cerr_clas"
              @click="repo_come_pedi_digi_deta_deta_bloq()"
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
              @click="repo_come_pedi_digi_deta_deta_exce()"
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
            ref="repo_come_pedi_digi_grid_deta_deta"
            :width="'100%'"
            :height="heightDetalle"
            :theme="'sami'"
            :source="dataAdapterDetalleDetalle"
            :columns="columnsDetalleDetalle"
            :enablehover="false"
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
        @close="repo_come_pedi_digi_deta_deta_deta_cerr()"
      >
        <b-row>
          <b-col>
            <div class="d-flex align-items-center justify-content-end mb-2">
              <b-button
                variant="success"
                class="ml-1 d-none d-lg-block"
                @click="repo_come_pedi_digi_deta_deta_deta_exce()"
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
              ref="repo_come_pedi_digi_grid_deta_deta_deta"
              :width="'100%'"
              :height="heightDetalle"
              :theme="'sami'"
              :source="dataAdapterDetalleDetalleDetalle"
              :columns="columnsDetalleDetalleDetalle"
              :enablehover="false"
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
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      // eslint-disable-next-line
      dataAdapterDetalle: new jqx.dataAdapter(this.sourceDetalle),
      // eslint-disable-next-line
      dataAdapterDetalleDetalle: new jqx.dataAdapter(this.sourceDetalleDetalle),
      // eslint-disable-next-line
      dataAdapterDetalleDetalleDetalle: new jqx.dataAdapter(this.sourceDetalleDetalleDetalle),
      columnsDetalleDetalle: [],
      columnsDetalleDetalleDetalle: [],
      heightDetalle: '',
      popupActiveCodigo: '',
      popupActiveDetalleCodigo: '',
      popupActive: false,
      popupActiveDetalle: false,
      popupActiveTitulo: '',
      popupActiveDetalleTitulo: '',
      repo_come_pedi_digi_deta_deta_cerr_clas: 'ml-1 d-none',
    }
  },
  computed: {
    clasePopUp() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return '#283046'
      }
      return ''
    },
    textoAmarillo() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'text-primary'
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
    this.repo_come_pedi_digi_inic()
    this.repo_come_pedi_digi_visi()
  },
  created() {
    this.handleWindowResize()
    const userData = JSON.parse(localStorage.getItem('userData'))
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    const itemZona = JSON.parse(userData.zona)
    itemCampana = itemCampana.camp_sigu.slice(1, 4)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))
    itemZona.forEach(element => this.dataZona.push(element.codi_zona))
    this.seleccionCampana = itemCampana[1].codi_camp
    this.seleccionZona = itemZona[0].codi_zona
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
      let estaConcDeta = ''
      let nombConcDeta = ''
      let cantConcDeta = ''
      let porcConcDeta = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          nombConcGlob = '50'
          lineDescGlob = '20'
          objeConcGlob = '20'
          faltDescGlob = '20'
          factConcGlob = '20'
          receDescGlob = '20'
          porcConcGlob = '20'
          estaConcDeta = '5'
          nombConcDeta = '80'
          cantConcDeta = '20'
          porcConcDeta = '20'
          break
        case 'sm':
          nombConcGlob = '40'
          lineDescGlob = '20'
          objeConcGlob = '20'
          faltDescGlob = '20'
          factConcGlob = '20'
          receDescGlob = '20'
          porcConcGlob = '20'
          estaConcDeta = '5'
          nombConcDeta = '80'
          cantConcDeta = '20'
          porcConcDeta = '20'
          break
        case 'md':
          nombConcGlob = '30'
          lineDescGlob = '10'
          objeConcGlob = '20'
          faltDescGlob = '10'
          factConcGlob = '20'
          receDescGlob = '15'
          porcConcGlob = '20'
          estaConcDeta = '5'
          nombConcDeta = '80'
          cantConcDeta = '20'
          porcConcDeta = '20'
          break
        default:
          nombConcGlob = '40'
          lineDescGlob = '10'
          objeConcGlob = '10'
          faltDescGlob = '10'
          factConcGlob = '10'
          receDescGlob = '10'
          porcConcGlob = '10'
          estaConcDeta = '5'
          nombConcDeta = '80'
          cantConcDeta = '7.5'
          porcConcDeta = '7.5'
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
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Concepto',
          dataField: 'nomb_conc',
          width: `${nombConcDeta}%`,
          align: 'center',
          cellsalign: 'left',
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
      if (this.popupActiveCodigo !== '') {
        let codiTercDetaDeta = ''
        let numeIdenDetaDeta = ''
        let codiSectDetaDeta = ''
        let codiEstaDetaDeta = ''
        let nombTercDetaDeta = ''
        let totaPubldetaDeta = ''
        let nombIngrDetaDeta = ''
        let codiCampDetaDeta = ''
        let fechDocuDetaDeta = ''
        let obsePediDetaDeta = ''
        let teleTercDetaDeta = ''
        let saldDocuDetaDeta = ''
        let totaCredDetaDeta = ''
        let credExceDetaDeta = ''
        let motiCartDetaDeta = ''
        let motiCupoDetaDeta = ''
        let motiCodeDetaDeta = ''
        let motiBloqDetaDeta = ''
        let motiMiniDetaDeta = ''
        let motiCerrDetaDeta = ''
        let codiRechDetaDeta = ''
        let nombRechDetaDeta = ''
        let obseGeneDetaDeta = ''
        this.heightDetalle = `${window.innerHeight - 250}px`
        switch (store.getters['app/currentBreakPoint']) {
          case 'xs':
            codiTercDetaDeta = '20'
            numeIdenDetaDeta = '25'
            codiSectDetaDeta = '20'
            codiEstaDetaDeta = '25'
            nombTercDetaDeta = '60'
            totaPubldetaDeta = '20'
            nombIngrDetaDeta = '25'
            codiCampDetaDeta = '25'
            fechDocuDetaDeta = '25'
            if (this.popupActiveCodigo === '13' || this.popupActiveCodigo === '7' || this.popupActiveCodigo === '8') {
              nombTercDetaDeta = '50'
              obsePediDetaDeta = '20'
            }
            if (this.popupActiveCodigo === '11' || this.popupActiveCodigo === '12') {
              nombTercDetaDeta = '50'
              obsePediDetaDeta = '25'
              teleTercDetaDeta = '20'
              saldDocuDetaDeta = '20'
              totaCredDetaDeta = '20'
              credExceDetaDeta = '20'
              motiCartDetaDeta = '15'
              motiCupoDetaDeta = '15'
              motiCodeDetaDeta = '15'
              motiBloqDetaDeta = '15'
              motiMiniDetaDeta = '15'
              motiCerrDetaDeta = '15'
            }
            if (this.popupActiveCodigo === '9') {
              codiTercDetaDeta = '20'
              numeIdenDetaDeta = '20'
              codiSectDetaDeta = '10'
              codiEstaDetaDeta = '20'
              nombTercDetaDeta = '70'
              nombIngrDetaDeta = '20'
              codiCampDetaDeta = '20'
            }
            if (this.popupActiveCodigo === '10') {
              numeIdenDetaDeta = '20'
              nombTercDetaDeta = '50'
              codiRechDetaDeta = '15'
              nombRechDetaDeta = '40'
              obseGeneDetaDeta = '50'
            }
            break
          case 'sm':
            codiTercDetaDeta = '20'
            numeIdenDetaDeta = '25'
            codiSectDetaDeta = '20'
            codiEstaDetaDeta = '25'
            nombTercDetaDeta = '60'
            totaPubldetaDeta = '20'
            nombIngrDetaDeta = '25'
            codiCampDetaDeta = '25'
            fechDocuDetaDeta = '25'
            if (this.popupActiveCodigo === '13' || this.popupActiveCodigo === '7' || this.popupActiveCodigo === '8') {
              nombTercDetaDeta = '50'
              obsePediDetaDeta = '20'
            }
            if (this.popupActiveCodigo === '11' || this.popupActiveCodigo === '12') {
              nombTercDetaDeta = '50'
              obsePediDetaDeta = '25'
              teleTercDetaDeta = '20'
              saldDocuDetaDeta = '20'
              totaCredDetaDeta = '20'
              credExceDetaDeta = '20'
              motiCartDetaDeta = '15'
              motiCupoDetaDeta = '15'
              motiCodeDetaDeta = '15'
              motiBloqDetaDeta = '15'
              motiMiniDetaDeta = '15'
              motiCerrDetaDeta = '15'
            }
            if (this.popupActiveCodigo === '9') {
              codiTercDetaDeta = '20'
              numeIdenDetaDeta = '20'
              codiSectDetaDeta = '10'
              codiEstaDetaDeta = '20'
              nombTercDetaDeta = '70'
              nombIngrDetaDeta = '20'
              codiCampDetaDeta = '20'
            }
            if (this.popupActiveCodigo === '10') {
              numeIdenDetaDeta = '20'
              nombTercDetaDeta = '50'
              codiRechDetaDeta = '15'
              nombRechDetaDeta = '40'
              obseGeneDetaDeta = '50'
            }
            break
          case 'md':
            codiTercDetaDeta = '20'
            numeIdenDetaDeta = '25'
            codiSectDetaDeta = '20'
            codiEstaDetaDeta = '25'
            nombTercDetaDeta = '60'
            totaPubldetaDeta = '20'
            nombIngrDetaDeta = '25'
            codiCampDetaDeta = '25'
            fechDocuDetaDeta = '25'
            if (this.popupActiveCodigo === '13' || this.popupActiveCodigo === '7' || this.popupActiveCodigo === '8') {
              nombTercDetaDeta = '50'
              obsePediDetaDeta = '20'
            }
            if (this.popupActiveCodigo === '11' || this.popupActiveCodigo === '12') {
              nombTercDetaDeta = '50'
              obsePediDetaDeta = '25'
              teleTercDetaDeta = '20'
              saldDocuDetaDeta = '20'
              totaCredDetaDeta = '20'
              credExceDetaDeta = '20'
              motiCartDetaDeta = '15'
              motiCupoDetaDeta = '15'
              motiCodeDetaDeta = '15'
              motiBloqDetaDeta = '15'
              motiMiniDetaDeta = '15'
              motiCerrDetaDeta = '15'
            }
            if (this.popupActiveCodigo === '9') {
              codiTercDetaDeta = '20'
              numeIdenDetaDeta = '20'
              codiSectDetaDeta = '10'
              codiEstaDetaDeta = '20'
              nombTercDetaDeta = '70'
              nombIngrDetaDeta = '20'
              codiCampDetaDeta = '20'
            }
            if (this.popupActiveCodigo === '10') {
              numeIdenDetaDeta = '20'
              nombTercDetaDeta = '50'
              codiRechDetaDeta = '15'
              nombRechDetaDeta = '40'
              obseGeneDetaDeta = '50'
            }
            break
          default:
            codiTercDetaDeta = '7.5'
            numeIdenDetaDeta = '7.5'
            codiSectDetaDeta = '5'
            codiEstaDetaDeta = '10'
            nombTercDetaDeta = '40'
            totaPubldetaDeta = '10'
            nombIngrDetaDeta = '10'
            codiCampDetaDeta = '10'
            fechDocuDetaDeta = '10'
            if (this.popupActiveCodigo === '13' || this.popupActiveCodigo === '7' || this.popupActiveCodigo === '8') {
              nombTercDetaDeta = '30'
              obsePediDetaDeta = '10'
            }
            if (this.popupActiveCodigo === '11' || this.popupActiveCodigo === '12') {
              nombTercDetaDeta = '30'
              obsePediDetaDeta = '10'
              teleTercDetaDeta = '10'
              saldDocuDetaDeta = '10'
              totaCredDetaDeta = '10'
              credExceDetaDeta = '10'
              motiCartDetaDeta = '5'
              motiCupoDetaDeta = '5'
              motiCodeDetaDeta = '5'
              motiBloqDetaDeta = '5'
              motiMiniDetaDeta = '5'
              motiCerrDetaDeta = '5'
            }
            if (this.popupActiveCodigo === '9') {
              codiTercDetaDeta = '10'
              numeIdenDetaDeta = '10'
              codiSectDetaDeta = '5'
              codiEstaDetaDeta = '10'
              nombTercDetaDeta = '45'
              nombIngrDetaDeta = '10'
              codiCampDetaDeta = '10'
            }
            if (this.popupActiveCodigo === '10') {
              numeIdenDetaDeta = '10'
              nombTercDetaDeta = '30'
              codiRechDetaDeta = '7'
              nombRechDetaDeta = '23'
              obseGeneDetaDeta = '30'
            }
            break
        }
        if (this.popupActiveCodigo === '1' || this.popupActiveCodigo === '2' || this.popupActiveCodigo === '3' || this.popupActiveCodigo === '4' || this.popupActiveCodigo === '5' || this.popupActiveCodigo === '6' || this.popupActiveCodigo === '14' || this.popupActiveCodigo === '15') {
          this.columnsDetalleDetalle = [
            {
              text: 'Código',
              dataField: 'codi_terc',
              width: `${codiTercDetaDeta}%`,
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
              width: `${totaPubldetaDeta}%`,
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
              text: 'Fecha',
              dataField: 'fech_docu',
              width: `${fechDocuDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
          ]
        }
        if (this.popupActiveCodigo === '13') {
          this.columnsDetalleDetalle = [
            {
              text: 'Código',
              dataField: 'codi_terc',
              width: `${codiTercDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              cellsrenderer: this.repo_come_pedi_digi_grid_deta_deta_clas,
            },
            {
              text: 'DNI - RUC',
              dataField: 'nume_iden',
              width: `${numeIdenDetaDeta}%`,
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
              width: `${totaPubldetaDeta}%`,
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
              text: 'Fecha',
              dataField: 'fech_docu',
              width: `${fechDocuDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Observación',
              dataField: 'obse_pedi',
              width: `${obsePediDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              cellsrenderer: this.repo_come_pedi_digi_grid_deta_deta_clas,
            },
          ]
        }
        if (this.popupActiveCodigo === '7' || this.popupActiveCodigo === '8') {
          this.columnsDetalleDetalle = [
            {
              text: 'Indicador',
              dataField: 'indi_fact',
              hidden: true,
            },
            {
              text: 'Código',
              dataField: 'codi_terc',
              width: `${codiTercDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              cellsrenderer: this.repo_come_pedi_digi_grid_deta_deta_clas,
            },
            {
              text: 'DNI - RUC',
              dataField: 'nume_iden',
              width: `${numeIdenDetaDeta}%`,
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
              width: `${totaPubldetaDeta}%`,
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
              text: 'Fecha',
              dataField: 'fech_docu',
              width: `${fechDocuDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Observación',
              dataField: 'obse_pedi',
              width: `${obsePediDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
              cellsrenderer: this.repo_come_pedi_digi_grid_deta_deta_clas,
            },
          ]
        }
        if (this.popupActiveCodigo === '11' || this.popupActiveCodigo === '12') {
          this.columnsDetalleDetalle = [
            {
              text: 'Código',
              dataField: 'codi_terc',
              width: `${codiTercDetaDeta}%`,
              cellsrenderer: this.repo_come_pedi_digi_grid_deta_deta_clas,
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
              text: 'Saldo',
              dataField: 'sald_docu',
              width: `${saldDocuDetaDeta}%`,
              cellsformat: 'D2',
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Público',
              dataField: 'tota_publ',
              width: `${totaPubldetaDeta}%`,
              cellsformat: 'D2',
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Publ. Tota.',
              dataField: 'tota_publ_tota',
              cellsformat: 'D2',
              align: 'center',
              cellsalign: 'center',
              hidden: true,
            },
            {
              text: 'Crédito',
              dataField: 'tota_cred',
              width: `${totaCredDetaDeta}%`,
              cellsformat: 'D2',
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Exc. Cred.',
              dataField: 'cred_exce',
              width: `${credExceDetaDeta}%`,
              cellsformat: 'D2',
              align: 'center',
              cellsalign: 'center',
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
              cellsrenderer: this.repo_come_pedi_digi_grid_deta_deta_clas,
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
                  'Cart': function (aggregatedValue, currentValue) {
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
                  'Cupo': function (aggregatedValue, currentValue) {
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
                  'Code': function (aggregatedValue, currentValue) {
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
                  'Mini': function (aggregatedValue, currentValue) {
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
                  'Cerr': function (aggregatedValue, currentValue) {
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
                  'Bloq': function (aggregatedValue, currentValue) {
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
        if (this.popupActiveCodigo === '9') {
          this.columnsDetalleDetalle = [
            {
              text: 'Código',
              dataField: 'codi_terc',
              width: `${codiTercDetaDeta}%`,
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
              text: 'Ingresado por',
              dataField: 'nomb_ingr',
              width: `${nombIngrDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Ulti Campaña',
              dataField: 'codi_camp',
              width: `${codiCampDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
          ]
        }
        if (this.popupActiveCodigo === '10') {
          this.columnsDetalleDetalle = [
            {
              text: 'DNI - RUC',
              dataField: 'nume_iden',
              width: `${numeIdenDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Asesora',
              dataField: 'nomb_terc',
              width: `${nombTercDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Código',
              dataField: 'codi_rech',
              width: `${codiRechDetaDeta}%`,
              align: 'center',
              cellsalign: 'center',
            },
            {
              text: 'Nombre',
              dataField: 'nomb_rech',
              width: `${nombRechDetaDeta}%`,
              align: 'center',
            },
            {
              text: 'Observación',
              dataField: 'obse_gene',
              width: `${obseGeneDetaDeta}%`,
              align: 'center',
            },
          ]
        }
      }
      if (this.popupActiveDetalleCodigo !== '') {
        let codiTercDetaDetaDeta = ''
        let numeIdenDetaDetaDeta = ''
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
              cellsrenderer: this.repo_come_pedi_digi_grid_deta_deta_clas,
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
              cellsrenderer: this.repo_come_pedi_digi_grid_deta_deta_clas,
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
              cellsrenderer: this.repo_come_pedi_digi_grid_deta_deta_clas,
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
              cellsrenderer: this.repo_come_pedi_digi_grid_deta_deta_clas,
              align: 'center',
              cellsalign: 'center',
            },
          ]
        }
      }
      if (typeof this.$refs.repo_come_pedi_digi_grid_glob !== 'undefined') {
        this.$refs.repo_come_pedi_digi_grid_glob.columns = this.columnsGlobal
        this.$refs.repo_come_pedi_digi_grid_deta.columns = this.columnsDetalle
      }
      if (typeof this.$refs.repo_come_pedi_digi_grid_deta_deta !== 'undefined') {
        this.$refs.repo_come_pedi_digi_grid_deta_deta.columns = this.columnsDetalleDetalle
        this.$refs.repo_come_pedi_digi_grid_deta_deta.height = this.heightDetalle
      }
      if (typeof this.$refs.repo_come_pedi_digi_grid_deta_deta_deta !== 'undefined') {
        this.$refs.repo_come_pedi_digi_grid_deta_deta_deta.columns = this.columnsDetalleDetalleDetalle
        this.$refs.repo_come_pedi_digi_grid_deta_deta_deta.height = this.heightDetalle
      }
    },
    setCampana(value) {
      this.seleccionCampana = value
    },
    setZona(value) {
      this.seleccionZona = value
    },
    repo_come_pedi_digi_deta_deta_cerr() {
      document.body.style.overflow = 'visible'
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
      this.repo_come_pedi_digi_deta_deta_cerr_clas = 'd-none'
      this.popupActiveCodigo = ''
    },
    repo_come_pedi_digi_deta_deta_deta_cerr() {
      this.popupActiveDetalleCodigo = ''
    },
    repo_come_pedi_digi_inic() {
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
      this.$refs.repo_come_pedi_digi_grid_glob.updatebounddata('cells')

      this.sourceDetalle.localdata = [
        {
          cons_fila: '1',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Ingresados por gerente de zona',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '2',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Digitados por asesora (web)',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '3',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Ingresados por azzorti',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '15',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Ingresados por app movil',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '4',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Ingresados por microcolsa',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '13',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Total pedidos ingresados',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Total facturados consecutivas',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Total facturados consecutivas 2do pedido',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Total facturados consecutivas 3er pedido',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Total facturados consecutivas 4to pedido',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Total facturados ret. peg21',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Total facturados ret. peg42',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Total facturados ret. peg63',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Total facturados reingresos',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '5',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Pedidos facturados de retencion',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '6',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Pedidos facturados de incorporacion',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '14',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Total pedidos facturados',
          cant_conc: '0',
          porc_conc: '',
        },
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
          esta_conc: '<i  class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Pedidos pendientes de retención consecutivas 4to pedido',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i  class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Pedidos pendientes de retención peg21',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i  class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Pedidos pendientes de retención peg42',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i  class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Pedidos pendientes de retención peg63',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i  class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Pedidos pendientes de retención reingresos',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '7',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Pedidos pendientes de retención',
          cant_conc: '0',
          porc_conc: '0.00 %',
        },
        {
          cons_fila: '8',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Pedidos pendientes de incorporación',
          cant_conc: '0',
          porc_conc: '0.00 %',
        },
        {
          cons_fila: '0',
          esta_conc: '<i  class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Total pedidos pendientes por facturar',
          cant_conc: '0',
          porc_conc: '0.00 %',
        },
        {
          cons_fila: '11',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Retenidos de retención',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '12',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Retenidos de incorporación',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i  class="feather icon-search text-danger text-lg"></i>',
          nomb_conc: 'Total pedidos retenidos',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '0',
          esta_conc: '<i class="feather icon-info text-black text-lg"></i>',
          nomb_conc: 'Información adicional',
          cant_conc: '',
          porc_conc: '',
        },
        {
          cons_fila: '9',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Pedidos pendientes por grabar web asesora',
          cant_conc: '0',
          porc_conc: '',
        },
        {
          cons_fila: '10',
          esta_conc: '<i class="feather icon-search text-success text-lg" style="cursor: pointer"></i>',
          nomb_conc: 'Incorporaciones rechazadas campaña',
          cant_conc: '0',
          porc_conc: '',
        },
      ]
      this.sourceDetalle.datatype = 'array'
      this.$refs.repo_come_pedi_digi_grid_deta.updatebounddata('cells')
    },
    async repo_come_pedi_digi_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_pedi_digi',
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
    repo_come_pedi_digi_limp() {
      this.repo_come_pedi_digi_inic()
    },
    async repo_come_pedi_digi_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_pedi_digi_limp()
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
            url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_zona: this.seleccionZona,
              codi_camp: this.seleccionCampana,
              camp_actu: campActu,
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_pedi_digi_grid_glob.updatebounddata('cells')
          this.sourceDetalle.localdata = await servicio.data.data_deta
          this.sourceDetalle.datatype = 'json'
          this.$refs.repo_come_pedi_digi_grid_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_glob.exportdata('json'),
            data_deta: this.$refs.repo_come_pedi_digi_grid_deta.exportdata('json'),
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
    repo_come_pedi_digi_grid_deta_sele(event) {
      let args = {}
      args = event.args
      const row = args.rowindex
      const dataRecord = this.$refs.repo_come_pedi_digi_grid_deta.getrowdata(row)
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
              text: `No tiene informacion para el concepto ${nombConc}`,
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
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'fech_docu', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_inte()
              break
            case 2:
              this.popupActiveCodigo = '2'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'fech_docu', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_webb()
              break
            case 3:
              this.popupActiveCodigo = '3'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'fech_docu', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_azzo()
              break
            case 15:
              this.popupActiveCodigo = '15'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'fech_docu', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_movi()
              break
            case 4:
              this.popupActiveCodigo = '4'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'fech_docu', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_micr()
              break
            case 5:
              this.popupActiveCodigo = '5'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'fech_docu', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_fact_rete()
              break
            case 6:
              this.popupActiveCodigo = '6'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'fech_docu', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_fact_inco()
              break
            case 14:
              this.popupActiveCodigo = '14'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'fech_docu', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_fact_tota()
              break
            case 13:
              this.popupActiveCodigo = '13'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'obse_pedi', type: 'string' },
                { name: 'fech_docu', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_tota_pedi_ingr()
              break
            case 7:
              this.popupActiveCodigo = '7'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'indi_fact', type: 'string' },
                { name: 'obse_pedi', type: 'string' },
                { name: 'fech_docu', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_pend_rete()
              break
            case 8:
              this.popupActiveCodigo = '8'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tota_publ', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'indi_fact', type: 'string' },
                { name: 'obse_pedi', type: 'string' },
                { name: 'fech_docu', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_pend_inco()
              break
            case 11:
              this.repo_come_pedi_digi_deta_deta_cerr_clas = 'ml-1 d-block'
              this.popupActiveCodigo = '11'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tele_terc', type: 'string' },
                { name: 'sald_docu', type: 'number' },
                { name: 'tota_publ', type: 'number' },
                { name: 'tota_publ_total', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'moti_cart', type: 'string' },
                { name: 'moti_cupo', type: 'string' },
                { name: 'moti_code', type: 'string' },
                { name: 'moti_mini', type: 'string' },
                { name: 'moti_cerr', type: 'string' },
                { name: 'moti_bloq', type: 'string' },
                { name: 'tota_cred', type: 'number' },
                { name: 'cred_exce', type: 'number' },
                { name: 'obse_pedi', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_rete_rete()
              break
            case 12:
              this.repo_come_pedi_digi_deta_deta_cerr_clas = 'ml-1 d-block'
              this.popupActiveCodigo = '12'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'tele_terc', type: 'string' },
                { name: 'sald_docu', type: 'number' },
                { name: 'tota_publ', type: 'number' },
                { name: 'tota_publ_total', type: 'number' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'moti_cart', type: 'string' },
                { name: 'moti_cupo', type: 'string' },
                { name: 'moti_code', type: 'string' },
                { name: 'moti_mini', type: 'string' },
                { name: 'moti_cerr', type: 'string' },
                { name: 'moti_bloq', type: 'string' },
                { name: 'tota_cred', type: 'number' },
                { name: 'cred_exce', type: 'number' },
                { name: 'obse_pedi', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_rete_inco()
              break
            case 9:
              this.popupActiveCodigo = '9'
              this.sourceDetalleDetalle.datafields = [
                { name: 'codi_terc', type: 'string' },
                { name: 'nume_iden', type: 'string' },
                { name: 'codi_sect', type: 'string' },
                { name: 'codi_esta', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'nomb_ingr', type: 'string' },
                { name: 'codi_camp', type: 'string' },
                { name: 'fech_docu', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_pend_grab()
              break
            case 10:
              this.popupActiveCodigo = '10'
              this.sourceDetalleDetalle.datafields = [
                { name: 'nume_iden', type: 'string' },
                { name: 'nomb_terc', type: 'string' },
                { name: 'codi_rech', type: 'string' },
                { name: 'nomb_rech', type: 'string' },
                { name: 'obse_gene', type: 'string' },
              ]
              this.sourceDetalleDetalle.localdata = []
              this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata()
              this.handleWindowResize()
              this.repo_come_pedi_digi_inco_rech()
              break
            default:
          }
        }
      }
    },
    async repo_come_pedi_digi_inte() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_inte`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_inte_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_inte`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_webb() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_webb`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_webb_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_webb`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_azzo() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_scan`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_azzo_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_scan`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_movi() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_movi`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_movi_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_movi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_micr() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_micr`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_micr_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_micr`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_fact_rete() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_fact_rete`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_fact_rete_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_fact_rete`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_fact_inco() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_fact_inco`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_fact_inco_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_fact_inco`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_fact_tota() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_fact_tota`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_fact_tota_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_fact_tota`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_tota_pedi_ingr() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_tota_pedi`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_tota_pedi_ingr_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_tota_pedi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_pend_rete() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_pend_rete`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_pend_rete_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_pend_rete`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_pend_inco() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_pend_inco`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_pend_inco_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_pend_inco`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_rete_rete() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_rete_rete`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_rete_rete_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_rete_rete`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_rete_inco() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_rete_inco`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_rete_inco_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_rete_inco`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_pend_grab() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_pend_webb`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_pend_grab_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_pend_webb`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_inco_rech() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_gene_inco_rech`,
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta.updatebounddata('cells')
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
    async repo_come_pedi_digi_inco_rech_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_inco_rech`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta.exportdata('json'),
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
    repo_come_pedi_digi_deta_deta_exce() {
      const dataInfo = this.$refs.repo_come_pedi_digi_grid_deta_deta.getdatainformation()
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
            this.repo_come_pedi_digi_inte_exce()
            break
          case '2':
            this.repo_come_pedi_digi_webb_exce()
            break
          case '3':
            this.repo_come_pedi_digi_azzo_exce()
            break
          case '15':
            this.repo_come_pedi_digi_movi_exce()
            break
          case '4':
            this.repo_come_pedi_digi_micr_exce()
            break
          case '13':
            this.repo_come_pedi_digi_tota_pedi_ingr_exce()
            break
          case '5':
            this.repo_come_pedi_digi_fact_rete_exce()
            break
          case '6':
            this.repo_come_pedi_digi_fact_inco_exce()
            break
          case '14':
            this.repo_come_pedi_digi_fact_tota_exce()
            break
          case '7':
            this.repo_come_pedi_digi_pend_rete_exce()
            break
          case '8':
            this.repo_come_pedi_digi_pend_inco_exce()
            break
          case '11':
            this.repo_come_pedi_digi_rete_rete_exce()
            break
          case '12':
            this.repo_come_pedi_digi_rete_inco_exce()
            break
          case '9':
            this.repo_come_pedi_digi_pend_grab_exce()
            break
          case '10':
            this.repo_come_pedi_digi_inco_rech_exce()
            break
          default:
        }
      }
    },
    repo_come_pedi_digi_deta_deta_cart() {
      this.popupActiveDetalleCodigo = 'c'
      this.popupActiveDetalleTitulo = `${this.popupActiveTitulo} - Cartera`
      this.popupActiveDetalle = true
      this.sourceDetalleDetalleDetalle.datafields = [
        { name: 'codi_terc', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'nomb_terc', type: 'string' },
        { name: 'tele_terc', type: 'string' },
        { name: 'codi_camp', type: 'string' },
        { name: 'nomb_ingr', type: 'string' },
        { name: 'sald_docu', type: 'string' },
        { name: 'desc_docu', type: 'string' },
        { name: 'obse_pedi', type: 'string' },
      ]
      this.sourceDetalleDetalleDetalle.localdata = []
      this.$refs.repo_come_pedi_digi_grid_deta_deta_deta.updatebounddata()
      this.handleWindowResize()
      this.repo_come_pedi_digi_deta_deta_cart_deta(this.popupActiveTitulo)
    },
    repo_come_pedi_digi_deta_deta_bloq() {
      this.popupActiveDetalleCodigo = 'b'
      this.popupActiveDetalleTitulo = `${this.popupActiveTitulo} - Bloqueo`
      this.popupActiveDetalle = true
      this.sourceDetalleDetalleDetalle.datafields = [
        { name: 'codi_terc', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'nomb_terc', type: 'string' },
        { name: 'tele_terc', type: 'string' },
        { name: 'nomb_ingr', type: 'string' },
        { name: 'nomb_sanc', type: 'string' },
        { name: 'obse_pedi', type: 'string' },
      ]
      this.sourceDetalleDetalleDetalle.localdata = []
      this.$refs.repo_come_pedi_digi_grid_deta_deta_deta.updatebounddata()
      this.handleWindowResize()
      this.repo_come_pedi_digi_deta_deta_bloq_deta(this.popupActiveTitulo)
    },
    async repo_come_pedi_digi_deta_deta_cart_deta(titulo) {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      let url = ''
      if (titulo === 'Retenidos de retención') {
        url = '/dato/pedi_digi_zona_gene_rete_rete_cart'
      } else {
        url = '/dato/pedi_digi_zona_gene_rete_inco_cart'
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta_deta.updatebounddata('cells')
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

    async repo_come_pedi_digi_deta_deta_bloq_deta(titulo) {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      let url = ''
      if (titulo === 'Retenidos de retención') {
        url = '/dato/pedi_digi_zona_gene_rete_rete_bloq'
      } else {
        url = '/dato/pedi_digi_zona_gene_rete_inco_bloq'
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
        this.$refs.repo_come_pedi_digi_grid_deta_deta_deta.updatebounddata('cells')
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
    repo_come_pedi_digi_deta_deta_deta_exce() {
      const dataInfo = this.$refs.repo_come_pedi_digi_grid_deta_deta_deta.getdatainformation()
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
        if (codigoPopup === '11') {
          if (codigoDetallePopup === 'c') {
            this.repo_come_pedi_digi_deta_deta_deta_cart_rete_rete_exce()
          }
          if (codigoDetallePopup === 'b') {
            this.repo_come_pedi_digi_deta_deta_deta_bloq_rete_rete_exce()
          }
        }
        /* Retenidos Incorporación */
        if (codigoPopup === '12') {
          if (codigoDetallePopup === 'c') {
            this.repo_come_pedi_digi_deta_deta_deta_cart_rete_inco_exce()
          }
          if (codigoDetallePopup === 'b') {
            this.repo_come_pedi_digi_deta_deta_deta_bloq_rete_inco_exce()
          }
        }
      }
    },
    async repo_come_pedi_digi_deta_deta_deta_cart_rete_rete_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_rete_rete_cart`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_deta_deta_deta_bloq_rete_rete_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_rete_rete_bloq`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_deta_deta_deta_cart_rete_inco_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_rete_inco_cart`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta_deta.exportdata('json'),
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
    async repo_come_pedi_digi_deta_deta_deta_bloq_rete_inco_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/pedi_digi_zona_exce_rete_inco_bloq`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            data_glob: this.$refs.repo_come_pedi_digi_grid_deta_deta_deta.exportdata('json'),
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
    repo_come_pedi_digi_grid_deta_deta_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_pedi_digi_grid_deta_deta.getrowdata(row)
      const obsePedi = dataRecord.obse_pedi
      if (obsePedi === 'Pend 2da O. C.' || obsePedi === 'Rete. 2da O. C.' || obsePedi === '2da O. C.') {
        return (`<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px; color: #EA5455">${value}</div>`)
      }
      return (`<div class = "jqx-grid-cell-middle-align" style="margin-top: 7px">${value}</div>`)
    },
  },
}
</script>
<style lang='scss'>

</style>
