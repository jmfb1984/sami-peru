<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="repo_come_cons_ases_nuev_gene()"
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
        block
        class="mb-1"
        @click="repo_come_cons_ases_nuev_limp_filt()"
      >
        <feather-icon
          icon="FilterIcon"
          class="mr-50"
        />
        Limpiar Filtro
      </b-button>
      <b-button
        variant="danger"
        block
        @click="repo_come_cons_ases_nuev_limp()"
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
        @click="repo_come_cons_ases_nuev_gene()"
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
        class="ml-1"
        @click="repo_come_cons_ases_nuev_limp_filt()"
      >
        <feather-icon
          icon="FilterIcon"
          class="mr-50"
        />
        Limpiar Filtro
      </b-button>
      <b-button
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="repo_come_cons_ases_nuev_exce()"
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
        @click="repo_come_cons_ases_nuev_limp()"
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
        <b-card>
          <JqxGrid
            ref="repo_come_cons_ases_nuev_grid_glob"
            :width="'100%'"
            :height="250"
            :columns="columnsGlobal"
            :source="dataAdapterGlobal"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="true"
            :sortmode="'many'"
            :filterable="true"
            :altrows="false"
            :selectionmode="'singlecell'"
            :enablebrowserselection="true"
            :showemptyrow="false"
            :columnsreorder="true"
            :enablehover="false"
            :groupable="true"
            :autoshowfiltericon="true"
            :enableanimations="true"
            :localization="localization"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
            :scrollmode="'logical'"
            @cellselect="repo_come_cons_ases_nuev_grid_glob_sele($event)"
            @filter="repo_come_cons_ases_nuev_grid_glob_filt($event)"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_cons_ases_nuev_grid_deta"
            :theme="'sami'"
            :localization="localization"
            :width="'100%'"
            :height="350"
            :enablehover="false"
            :source="dataAdapterDetalle"
            :columns="columnsDetalle"
            :enableanimations="true"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
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
            :autoshowfiltericon="true"
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
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import selectCampana from '@/views/components/FiltroCampana.vue'
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
      columnsGlobal: [],
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      columnsDetalle: [],
      // eslint-disable-next-line
      dataAdapterDetalle: new jqx.dataAdapter(this.sourceDetalle),
      codi_camp_repo: 0,
      codi_camp_1: 0,
      codi_camp_2: 0,
      codi_camp_3: 0,
      codi_camp_4: 0,
    }
  },
  beforeCreate() {
    this.sourceGlobal = {
      localdata: [],
      datafields: [
        { name: 'cons_fila', type: 'number' },
        { name: 'codi_area', type: 'string' },
        { name: 'codi_cort', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'porc_codi_camp_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'porc_codi_camp_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'porc_codi_camp_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'porc_codi_camp_4', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceDetalle = {
      localdata: [],
      datafields: [
        { name: 'codi_terc', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'nomb_clie', type: 'string' },
        { name: 'camp_ingr', type: 'number' },
        { name: 'tele_terc', type: 'string' },
        { name: 'sald_docu', type: 'number' },
        { name: 'codi_area', type: 'string' },
        { name: 'codi_cort', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'codi_camp_1', type: 'number' },
        { name: 'codi_zona_1', type: 'string' },
        { name: 'codi_sect_1', type: 'string' },
        { name: 'tota_fact_1', type: 'number' },
        { name: 'codi_camp_2', type: 'number' },
        { name: 'codi_zona_2', type: 'string' },
        { name: 'codi_sect_2', type: 'string' },
        { name: 'tota_fact_2', type: 'number' },
        { name: 'codi_camp_3', type: 'number' },
        { name: 'codi_zona_3', type: 'string' },
        { name: 'codi_sect_3', type: 'string' },
        { name: 'tota_fact_3', type: 'number' },
        { name: 'codi_camp_4', type: 'number' },
        { name: 'codi_zona_4', type: 'string' },
        { name: 'codi_sect_4', type: 'string' },
        { name: 'tota_fact_4', type: 'number' },
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
    this.repo_come_cons_ases_nuev_visi()
  },
  created() {
    this.codi_camp_1 = 0
    this.codi_camp_2 = 0
    this.codi_camp_3 = 0
    this.codi_camp_4 = 0
    this.handleWindowResize()
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    itemCampana = itemCampana.camp.slice(1, 7)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))
    this.seleccionCampana = itemCampana[0].codi_camp
  },
  methods: {
    setCampana(value) {
      this.seleccionCampana = value
    },
    handleWindowResize() {
      let pinned = true
      let codiAreaGlob = ''
      let codiCortGlob = ''
      let codiZonaGlob = ''
      let codiSectGlob = ''
      let codiCamp1Glob = ''
      let porcCodiCamp1Glob = ''
      let codiCamp2Glob = ''
      let porcCodiCamp2Glob = ''
      let codiCamp3Glob = ''
      let porcCodiCamp3Glob = ''
      let codiCamp4Glob = ''
      let porcCodiCamp4Glob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          pinned = false
          codiAreaGlob = '20'
          codiCortGlob = '20'
          codiZonaGlob = '20'
          codiSectGlob = '20'
          codiCamp1Glob = '20'
          porcCodiCamp1Glob = '20'
          codiCamp2Glob = '20'
          porcCodiCamp2Glob = '20'
          codiCamp3Glob = '20'
          porcCodiCamp3Glob = '20'
          codiCamp4Glob = '20'
          porcCodiCamp4Glob = '20'
          break
        case 'sm':
          pinned = false
          codiAreaGlob = '15'
          codiCortGlob = '15'
          codiZonaGlob = '15'
          codiSectGlob = '15'
          codiCamp1Glob = '20'
          porcCodiCamp1Glob = '20'
          codiCamp2Glob = '20'
          porcCodiCamp2Glob = '20'
          codiCamp3Glob = '20'
          porcCodiCamp3Glob = '20'
          codiCamp4Glob = '20'
          porcCodiCamp4Glob = '20'
          break
        case 'md':
          pinned = false
          codiAreaGlob = '10'
          codiCortGlob = '10'
          codiZonaGlob = '10'
          codiSectGlob = '10'
          codiCamp1Glob = '15'
          porcCodiCamp1Glob = '15'
          codiCamp2Glob = '15'
          porcCodiCamp2Glob = '15'
          codiCamp3Glob = '15'
          porcCodiCamp3Glob = '15'
          codiCamp4Glob = '15'
          porcCodiCamp4Glob = '15'
          break
        default:
          pinned = true
          codiAreaGlob = '8'
          codiCortGlob = '8'
          codiZonaGlob = '8'
          codiSectGlob = '8'
          codiCamp1Glob = '8.5'
          porcCodiCamp1Glob = '8.5'
          codiCamp2Glob = '8.5'
          porcCodiCamp2Glob = '8.5'
          codiCamp3Glob = '8.5'
          porcCodiCamp3Glob = '8.5'
          codiCamp4Glob = '8.5'
          porcCodiCamp4Glob = '8.5'
          break
      }
      this.columnsGlobal = [
        {
          text: 'fila',
          dataField: 'cons_fila',
          hidden: true,
        },
        {
          text: 'Región',
          dataField: 'codi_area',
          width: `${codiAreaGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Corte',
          dataField: 'codi_cort',
          width: `${codiCortGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: `${codiZonaGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Sector',
          dataField: 'codi_sect',
          width: `${codiSectGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_1}`,
          dataField: 'codi_camp_1',
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'N',
          width: `${codiCamp1Glob}%`,
        },
        {
          text: `% ${this.codi_camp_1}`,
          dataField: 'porc_codi_camp_1',
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'D2',
          width: `${porcCodiCamp1Glob}%`,
        },
        {
          text: `${this.codi_camp_2}`,
          dataField: 'codi_camp_2',
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'N',
          width: `${codiCamp2Glob}%`,
        },
        {
          text: `% ${this.codi_camp_2}`,
          dataField: 'porc_codi_camp_2',
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'D2',
          width: `${porcCodiCamp2Glob}%`,
        },
        {
          text: `${this.codi_camp_3}`,
          dataField: 'codi_camp_3',
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'N',
          width: `${codiCamp3Glob}%`,
        },
        {
          text: `% ${this.codi_camp_3}`,
          dataField: 'porc_codi_camp_3',
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'D2',
          width: `${porcCodiCamp3Glob}%`,
        },
        {
          text: `${this.codi_camp_4}`,
          dataField: 'codi_camp_4',
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'N',
          width: `${codiCamp4Glob}%`,
        },
        {
          text: `% ${this.codi_camp_4}`,
          dataField: 'porc_codi_camp_4',
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'D2',
          width: `${porcCodiCamp4Glob}%`,
        },
      ]

      this.columnsDetalle = [
        {
          text: 'Región',
          dataField: 'codi_area',
          width: '60',
          cellsalign: 'center',
          align: 'center',
          pinned,
        },
        {
          text: 'Corte',
          dataField: 'codi_cort',
          width: '70',
          cellsalign: 'center',
          align: 'center',
          pinned,
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: '70',
          cellsalign: 'center',
          align: 'center',
          pinned,
        },
        {
          text: 'Sector',
          dataField: 'codi_sect',
          width: '70',
          cellsalign: 'center',
          align: 'center',
          pinned,
        },
        {
          text: 'Código',
          dataField: 'codi_terc',
          width: '80',
          cellsalign: 'center',
          align: 'center',
          pinned,
        },
        {
          text: 'DNI - RUC',
          dataField: 'nume_iden',
          width: '80',
          cellsalign: 'center',
          align: 'center',
          pinned,
        },
        {
          text: 'Nombre(s) y Apellido(s)',
          dataField: 'nomb_clie',
          width: '350',
          cellsalign: 'left',
          align: 'center',
          pinned,
        },
        {
          text: 'Camp. Ingr.',
          dataField: 'camp_ingr',
          width: '100',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Teléfono',
          dataField: 'tele_terc',
          width: '100',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Saldo',
          dataField: 'sald_docu',
          width: '100',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_1}`,
          dataField: 'codi_camp_1',
          width: '90',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_1} Zona`,
          dataField: 'codi_zona_1',
          width: '120',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_1} Sect`,
          dataField: 'codi_sect_1',
          width: '120',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_1} Fact`,
          dataField: 'tota_fact_1',
          width: '120',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_2}`,
          dataField: 'codi_camp_2',
          width: '90',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_2} Zona`,
          dataField: 'codi_zona_2',
          width: '120',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_2} Sect`,
          dataField: 'codi_sect_2',
          width: '120',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_2} Fact`,
          dataField: 'tota_fact_2',
          width: '120',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_3}`,
          dataField: 'codi_camp_3',
          width: '90',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_3} Zona`,
          dataField: 'codi_zona_3',
          width: '120',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_3} Sect`,
          dataField: 'codi_sect_3',
          width: '120',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_3} Fact`,
          dataField: 'tota_fact_3',
          width: '120',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_4}`,
          dataField: 'codi_camp_4',
          width: '90',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_4} Zona`,
          dataField: 'codi_zona_4',
          width: '120',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_4} Sect`,
          dataField: 'codi_sect_4',
          width: '120',
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: `${this.codi_camp_4} Fact`,
          dataField: 'tota_fact_4',
          width: '120',
          cellsalign: 'center',
          align: 'center',
        },
      ]
      if (typeof this.$refs.repo_come_cons_ases_nuev_grid_glob !== 'undefined') {
        this.$refs.repo_come_cons_ases_nuev_grid_glob.columns = this.columnsGlobal
        this.$refs.repo_come_cons_ases_nuev_grid_deta.columns = this.columnsDetalle
      }
    },
    repo_come_cons_ases_nuev_grid_glob_filt() {
      const dataInfo = this.$refs.repo_come_cons_ases_nuev_grid_glob.getdatainformation()
      const dataRows = dataInfo.rowscount
      if (dataRows > 0) {
        this.$refs.repo_come_cons_ases_nuev_grid_glob.clearselection()
        const repoComeConsAsesNuevGlobCodiZonaSect = []
        const repoComeConsAsesNuevGlobJson = JSON.parse(this.$refs.repo_come_cons_ases_nuev_grid_glob.exportdata('json'))
        let codiZonaSect = ''
        let i = 0
        for (i = 0; i < repoComeConsAsesNuevGlobJson.length; i += 1) {
          // eslint-disable-next-line
          codiZonaSect = repoComeConsAsesNuevGlobJson[i]['Zona']+'_'+repoComeConsAsesNuevGlobJson[i]['Sector']
          if (repoComeConsAsesNuevGlobCodiZonaSect.indexOf(codiZonaSect) === -1) {
            repoComeConsAsesNuevGlobCodiZonaSect.push(codiZonaSect)
          }
        }
        this.$refs.repo_come_cons_ases_nuev_grid_deta.beginupdate()
        this.$refs.repo_come_cons_ases_nuev_grid_deta.clearfilters()
        this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_zona')
        this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_sect')
        this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_camp_1')
        this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_camp_2')
        this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_camp_3')
        this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_camp_4')
        // eslint-disable-next-line
        let filtGrouZona = new jqx.filter
        // eslint-disable-next-line
        let filtGrouSect = new jqx.filter        
        let zonaSect = ''
        let dataZonaSect = ''
        let filtZona = ''
        let filtSect = ''
        let codiZona = ''
        let codiSect = ''
        let o = 0
        for (o = 0; o < repoComeConsAsesNuevGlobCodiZonaSect.length; o += 1) {
          zonaSect = repoComeConsAsesNuevGlobCodiZonaSect[o]
          dataZonaSect = zonaSect.split('_')
          // eslint-disable-next-line
          codiZona = dataZonaSect[0]
          // eslint-disable-next-line
          codiSect = dataZonaSect[1]
          filtZona = filtGrouZona.createfilter('stringfilter', codiZona, 'EQUAL')
          filtSect = filtGrouSect.createfilter('stringfilter', codiSect, 'EQUAL')
          filtGrouZona.addfilter('1', filtZona)
          filtGrouSect.addfilter('1', filtSect)
        }
        this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_zona', filtGrouZona)
        this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_sect', filtGrouSect)
        this.$refs.repo_come_cons_ases_nuev_grid_deta.applyfilters()
        this.$refs.repo_come_cons_ases_nuev_grid_deta.endupdate()
      }
    },
    repo_come_cons_ases_nuev_grid_glob_sele(event) {
      const nombColu = this.$refs.repo_come_cons_ases_nuev_grid_glob.getcolumn(event.args.datafield).text
      const row = event.args.rowindex
      const dataRecord = this.$refs.repo_come_cons_ases_nuev_grid_glob.getrowdata(row)
      const codiZona = dataRecord.codi_zona
      const codiSect = dataRecord.codi_sect
      let index = 0
      let u = 0
      for (u = 0; u < event.args.owner.columns.records.length; u += 1) {
        if (nombColu === event.args.owner.columns.records[u].text) {
          index = u
        }
      }
      this.$refs.repo_come_cons_ases_nuev_grid_deta.beginupdate()
      this.$refs.repo_come_cons_ases_nuev_grid_deta.clearfilters()
      this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_zona')
      this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_sect')
      this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_camp_1')
      this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_camp_2')
      this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_camp_3')
      this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_camp_4')
      // eslint-disable-next-line
      let filtGrouZona = new jqx.filter
      // eslint-disable-next-line
      let filtGrouSect = new jqx.filter
      // eslint-disable-next-line
      let filtGrouCamp1 = new jqx.filter
      // eslint-disable-next-line
      let filtGrouCamp2 = new jqx.filter
      // eslint-disable-next-line
      let filtGrouCamp3 = new jqx.filter
      // eslint-disable-next-line
      let filtGrouCamp4 = new jqx.filter
      const filtZona = filtGrouZona.createfilter('stringfilter', codiZona, 'EQUAL')
      const filtSect = filtGrouSect.createfilter('stringfilter', codiSect, 'EQUAL')
      const filtCamp = filtGrouCamp1.createfilter('stringfilter', '', 'NOT_NULL')
      switch (index) {
        case 5:
          filtGrouZona.addfilter('1', filtZona)
          filtGrouSect.addfilter('1', filtSect)
          filtGrouCamp1.addfilter('1', filtCamp)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_zona', filtGrouZona)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_sect', filtGrouSect)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_camp_1', filtGrouCamp1)
          break
        case 7:
          filtGrouZona.addfilter('1', filtZona)
          filtGrouSect.addfilter('1', filtSect)
          filtGrouCamp1.addfilter('1', filtCamp)
          filtGrouCamp2.addfilter('1', filtCamp)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_zona', filtGrouZona)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_sect', filtGrouSect)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_camp_1', filtGrouCamp1)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_camp_2', filtGrouCamp2)
          break
        case 9:
          filtGrouZona.addfilter('1', filtZona)
          filtGrouSect.addfilter('1', filtSect)
          filtGrouCamp1.addfilter('1', filtCamp)
          filtGrouCamp2.addfilter('1', filtCamp)
          filtGrouCamp3.addfilter('1', filtCamp)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_zona', filtGrouZona)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_sect', filtGrouSect)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_camp_1', filtGrouCamp1)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_camp_2', filtGrouCamp2)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_camp_3', filtGrouCamp3)
          break
        case 11:
          filtGrouZona.addfilter('1', filtZona)
          filtGrouSect.addfilter('1', filtSect)
          filtGrouCamp1.addfilter('1', filtCamp)
          filtGrouCamp2.addfilter('1', filtCamp)
          filtGrouCamp3.addfilter('1', filtCamp)
          filtGrouCamp4.addfilter('1', filtCamp)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_zona', filtGrouZona)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_sect', filtGrouSect)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_camp_1', filtGrouCamp1)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_camp_2', filtGrouCamp2)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_camp_3', filtGrouCamp3)
          this.$refs.repo_come_cons_ases_nuev_grid_deta.addfilter('codi_camp_4', filtGrouCamp4)
          break
        default:
      }
      this.$refs.repo_come_cons_ases_nuev_grid_deta.applyfilters()
      this.$refs.repo_come_cons_ases_nuev_grid_deta.endupdate()
    },
    repo_come_cons_ases_nuev_limp_filt() {
      this.$refs.repo_come_cons_ases_nuev_grid_deta.beginupdate()
      this.$refs.repo_come_cons_ases_nuev_grid_glob.clearselection()
      this.$refs.repo_come_cons_ases_nuev_grid_glob.clearfilters()
      this.$refs.repo_come_cons_ases_nuev_grid_deta.clearselection()
      this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_zona')
      this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_sect')
      this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_camp_1')
      this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_camp_2')
      this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_camp_3')
      this.$refs.repo_come_cons_ases_nuev_grid_deta.removefilter('codi_camp_4')
      this.$refs.repo_come_cons_ases_nuev_grid_deta.endupdate()
    },
    repo_come_cons_ases_nuev_limp() {
      this.codi_camp_repo = 0
      this.codi_camp_1 = 0
      this.codi_camp_2 = 0
      this.codi_camp_3 = 0
      this.codi_camp_4 = 0
      this.$refs.repo_come_cons_ases_nuev_grid_glob.clear()
      this.$refs.repo_come_cons_ases_nuev_grid_glob.clearselection()
      this.$refs.repo_come_cons_ases_nuev_grid_deta.clear()
      this.$refs.repo_come_cons_ases_nuev_grid_deta.clearselection()
      this.handleWindowResize()
    },
    async repo_come_cons_ases_nuev_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_cons_ases_nuev',
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
    async repo_come_cons_ases_nuev_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.codi_camp_repo = 0
      this.repo_come_cons_ases_nuev_limp()
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
      } else {
        this.codi_camp_repo = this.seleccionCampana
        try {
          const servicioConsecutivas = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_cons_ases_nuev/cons_ases_nuev_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.seleccionCampana,
              codi_zona: JSON.parse(this.userData.zonaUsuario),
              codi_area: JSON.parse(this.userData.areaUsuario),
            },
          })
          this.codi_camp_1 = await servicioConsecutivas.data.codi_camp_1
          this.codi_camp_2 = await servicioConsecutivas.data.codi_camp_2
          this.codi_camp_3 = await servicioConsecutivas.data.codi_camp_3
          this.codi_camp_4 = await servicioConsecutivas.data.codi_camp_4
          this.handleWindowResize()
          this.sourceGlobal.localdata = await servicioConsecutivas.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_cons_ases_nuev_grid_glob.updatebounddata('cells')
          this.sourceDetalle.localdata = await servicioConsecutivas.data.data_deta
          this.sourceDetalle.datatype = 'json'
          this.$refs.repo_come_cons_ases_nuev_grid_deta.updatebounddata('cells')
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
    async repo_come_cons_ases_nuev_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_cons_ases_nuev_grid_glob.getdatainformation()
      const dataRowsGlob = dataInfoGlob.rowscount
      const dataInfoDeta = this.$refs.repo_come_cons_ases_nuev_grid_deta.getdatainformation()
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
          const pedidos = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_cons_ases_nuev/cons_ases_nuev_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.codi_camp_repo,
              data_glob: this.$refs.repo_come_cons_ases_nuev_grid_glob.exportdata('json', null, true, null, true),
              data_deta: this.$refs.repo_come_cons_ases_nuev_grid_deta.exportdata('json', null, true, null, true),
            },
          })
          const datoHtml = await pedidos.data.html
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
