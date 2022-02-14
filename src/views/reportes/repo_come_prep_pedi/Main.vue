<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_prep_pedi_gene()"
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
        class="mb-1"
        block
        @click="repo_come_prep_pedi_limp_filt()"
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
        @click="repo_come_prep_pedi_limp()"
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
        @click="repo_come_prep_pedi_gene()"
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
        @click="repo_come_prep_pedi_exce()"
      >
        <feather-icon
          icon="DownloadIcon"
          class="mr-50"
        />
        Excel
      </b-button>
      <b-button
        variant="success"
        class="ml-1"
        @click="repo_come_prep_pedi_limp_filt()"
      >
        <feather-icon
          icon="FilterIcon"
          class="mr-50"
        />
        Limpiar Filtro
      </b-button>
      <b-button
        variant="danger"
        class="ml-1"
        @click="repo_come_prep_pedi_limp()"
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
          :multiple-zona="true"
          @campana="setCampana"
          @zona="setZona"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_prep_pedi_grid_glob"
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
            :selectionmode="'singlerow'"
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
            @rowselect="repo_come_prep_pedi_grid_glob_sele($event)"
            @filter="repo_come_prep_pedi_grid_glob_filt($event)"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_prep_pedi_grid_deta"
            :width="'100%'"
            :height="350"
            :columns="columnsDetalle"
            :source="dataAdapterDetalle"
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
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      // eslint-disable-next-line
      dataAdapterDetalle: new jqx.dataAdapter(this.sourceDetalle),
    }
  },
  beforeCreate() {
    this.sourceGlobal = {
      localdata: [],
      datafields: [
        { name: 'codi_cort', type: 'number' },
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'nomb_terc', type: 'string' },
        { name: 'cant_prep', type: 'number' },
        { name: 'cant_pedi', type: 'number' },
        { name: 'porc_prep', type: 'number' },
      ],
      datatype: 'array',
    }
    this.sourceDetalle = {
      localdata: [],
      datafields: [
        { name: 'codi_cort', type: 'number' },
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'nomb_terc', type: 'string' },
        { name: 'codi_prod', type: 'string' },
        { name: 'nomb_prod', type: 'string' },
        { name: 'cant_prod', type: 'number' },
        { name: 'esta_prep', type: 'string' },
        { name: 'nume_pagi', type: 'string' },
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
    this.repo_come_prep_pedi_visi()
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
  },
  methods: {
    setCampana(value) {
      this.seleccionCampana = value
    },
    setZona(value) {
      this.seleccionZona = value
    },
    handleWindowResize() {
      let codiCortGlob = ''
      let codiAreaGlob = ''
      let codiZonaGlob = ''
      let codiSectGlob = ''
      let numeIdenGlob = ''
      let nombTercGlob = ''
      let cantPrepGlob = ''
      let cantPediGlob = ''
      let porcPrepGlob = ''
      let codiCortDeta = ''
      let codiAreaDeta = ''
      let codiZonaDeta = ''
      let codiSectDeta = ''
      let numeIdenDeta = ''
      let nombTercDeta = ''
      let codiProdDeta = ''
      let nombProdDeta = ''
      let cantProdDeta = ''
      let numePagiDeta = ''
      let estaPrepDeta = ''

      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiCortGlob = '15'
          codiAreaGlob = '15'
          codiZonaGlob = '15'
          codiSectGlob = '15'
          numeIdenGlob = '20'
          nombTercGlob = '80'
          cantPrepGlob = '20'
          cantPediGlob = '20'
          porcPrepGlob = '20'
          codiCortDeta = '15'
          codiAreaDeta = '15'
          codiZonaDeta = '15'
          codiSectDeta = '15'
          numeIdenDeta = '20'
          nombTercDeta = '50'
          codiProdDeta = '20'
          nombProdDeta = '50'
          cantProdDeta = '20'
          numePagiDeta = '15'
          estaPrepDeta = '20'
          break
        case 'sm':
          codiCortGlob = '15'
          codiAreaGlob = '15'
          codiZonaGlob = '15'
          codiSectGlob = '15'
          numeIdenGlob = '20'
          nombTercGlob = '80'
          cantPrepGlob = '20'
          cantPediGlob = '20'
          porcPrepGlob = '20'
          codiCortDeta = '15'
          codiAreaDeta = '15'
          codiZonaDeta = '15'
          codiSectDeta = '15'
          numeIdenDeta = '20'
          nombTercDeta = '50'
          codiProdDeta = '20'
          nombProdDeta = '50'
          cantProdDeta = '20'
          numePagiDeta = '15'
          estaPrepDeta = '20'
          break
        case 'md':
          codiCortGlob = '10'
          codiAreaGlob = '10'
          codiZonaGlob = '10'
          codiSectGlob = '10'
          numeIdenGlob = '15'
          nombTercGlob = '60'
          cantPrepGlob = '15'
          cantPediGlob = '15'
          porcPrepGlob = '15'
          codiCortDeta = '10'
          codiAreaDeta = '10'
          codiZonaDeta = '10'
          codiSectDeta = '10'
          numeIdenDeta = '15'
          nombTercDeta = '30'
          codiProdDeta = '15'
          nombProdDeta = '30'
          cantProdDeta = '15'
          numePagiDeta = '10'
          estaPrepDeta = '15'
          break
        default:
          codiCortGlob = '5'
          codiAreaGlob = '5'
          codiZonaGlob = '5'
          codiSectGlob = '5'
          numeIdenGlob = '10'
          nombTercGlob = '40'
          cantPrepGlob = '10'
          cantPediGlob = '10'
          porcPrepGlob = '10'
          codiCortDeta = '5'
          codiAreaDeta = '5'
          codiZonaDeta = '5'
          codiSectDeta = '5'
          numeIdenDeta = '10'
          nombTercDeta = '20'
          codiProdDeta = '8'
          nombProdDeta = '20'
          cantProdDeta = '7'
          numePagiDeta = '5'
          estaPrepDeta = '10'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Corte',
          dataField: 'codi_cort',
          width: `${codiCortGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
        },
        {
          text: 'Región',
          dataField: 'codi_area',
          width: `${codiAreaGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: `${codiZonaGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
        },
        {
          text: 'Sector',
          dataField: 'codi_sect',
          width: `${codiSectGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
        },
        {
          text: 'DNI - RUC',
          dataField: 'nume_iden',
          width: `${numeIdenGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
        },
        {
          text: 'Nombre(s) y Apellido(s)',
          dataField: 'nomb_terc',
          width: `${nombTercGlob}%`,
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
        {
          text: 'Prepedido',
          dataField: 'cant_prep',
          width: `${cantPrepGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Pedido',
          dataField: 'cant_pedi',
          width: `${cantPediGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: '% Cumplimiento',
          dataField: 'porc_prep',
          width: `${porcPrepGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
        },
      ]
      this.columnsDetalle = [
        {
          text: 'Corte',
          dataField: 'codi_cort',
          width: `${codiCortDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
        },
        {
          text: 'Región',
          dataField: 'codi_area',
          width: `${codiAreaDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: `${codiZonaDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
        },
        {
          text: 'Sector',
          dataField: 'codi_sect',
          width: `${codiSectDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
        },
        {
          text: 'DNI - RUC',
          dataField: 'nume_iden',
          width: `${numeIdenDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
        },
        {
          text: 'Nombre(s) y Apellido(s)',
          dataField: 'nomb_terc',
          width: `${nombTercDeta}%`,
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
        {
          text: 'Código',
          dataField: 'codi_prod',
          width: `${codiProdDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Descripción',
          dataField: 'nomb_prod',
          width: `${nombProdDeta}%`,
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
        {
          text: 'Cantidad',
          dataField: 'cant_prod',
          width: `${cantProdDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
        },
        {
          text: 'Página',
          dataField: 'nume_pagi',
          width: `${numePagiDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Estado',
          dataField: 'esta_prep',
          width: `${estaPrepDeta}%`,
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
      ]

      if (typeof this.$refs.repo_come_prep_pedi_grid_glob !== 'undefined') {
        this.$refs.repo_come_prep_pedi_grid_glob.columns = this.columnsGlobal
        this.$refs.repo_come_prep_pedi_grid_deta.columns = this.columnsDetalle
      }
    },
    repo_come_prep_pedi_limp() {
      this.$refs.repo_come_prep_pedi_grid_glob.clear()
      this.$refs.repo_come_prep_pedi_grid_glob.clearselection()
      this.$refs.repo_come_prep_pedi_grid_deta.clear()
      this.$refs.repo_come_prep_pedi_grid_deta.clearselection()
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('codi_cort')
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('codi_area')
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('codi_zona')
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('codi_sect')
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('nume_iden')
    },
    repo_come_prep_pedi_grid_glob_sele(event) {
      const row = event.args.rowindex
      const dataRecord = this.$refs.repo_come_prep_pedi_grid_glob.getrowdata(row)
      const numeIden = dataRecord.nume_iden

      this.$refs.repo_come_prep_pedi_grid_deta.beginupdate()
      this.$refs.repo_come_prep_pedi_grid_deta.clearfilters()
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('codi_zona')
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('codi_sect')
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('codi_cort')
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('codi_area')
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('nume_iden')
      // eslint-disable-next-line
      let filtGrouNumeIden = new jqx.filter()
      const filtNumeIden = filtGrouNumeIden.createfilter(
        'stringfilter',
        numeIden,
        'EQUAL',
      )

      filtGrouNumeIden.addfilter('1', filtNumeIden)
      this.$refs.repo_come_prep_pedi_grid_deta.addfilter(
        'nume_iden',
        filtGrouNumeIden,
      )
      this.$refs.repo_come_prep_pedi_grid_deta.applyfilters()
      this.$refs.repo_come_prep_pedi_grid_deta.endupdate()
    },
    repo_come_prep_pedi_grid_glob_filt() {
      const dataInfo = this.$refs.repo_come_prep_pedi_grid_glob.getdatainformation()
      const dataRows = dataInfo.rowscount
      if (dataRows > 0) {
        this.$refs.repo_come_prep_pedi_grid_glob.clearselection()
        const repoComePrepPediGlobCodi = []
        const repoComePrepPediGlobJson = JSON.parse(
          this.$refs.repo_come_prep_pedi_grid_glob.exportdata('json'),
        )
        let dataCodi = ''
        let i = 0
        for (i = 0; i < repoComePrepPediGlobJson.length; i += 1) {
          dataCodi = repoComePrepPediGlobJson[i]['DNI - RUC']
          if (repoComePrepPediGlobCodi.indexOf(dataCodi) === -1) {
            repoComePrepPediGlobCodi.push(dataCodi)
          }
        }

        this.$refs.repo_come_prep_pedi_grid_deta.removefilter('nume_iden')
        // eslint-disable-next-line
        let filtGrouNume = new $.jqx.filter()
        let o = 0
        let numeIden = ''
        let filtNumeIden = ''
        for (o = 0; o < repoComePrepPediGlobCodi.length; o += 1) {
          numeIden = repoComePrepPediGlobCodi[o]
          filtNumeIden = filtGrouNume.createfilter(
            'stringfilter',
            numeIden,
            'EQUAL',
          )
          filtGrouNume.addfilter('1', filtNumeIden)
        }
        this.$refs.repo_come_prep_pedi_grid_deta.beginupdate()
        this.$refs.repo_come_prep_pedi_grid_deta.clearfilters()
        this.$refs.repo_come_prep_pedi_grid_deta.addfilter(
          'nume_iden',
          filtGrouNume,
          true,
        )
        this.$refs.repo_come_prep_pedi_grid_deta.applyfilters()
        this.$refs.repo_come_prep_pedi_grid_deta.endupdate()
      }
    },
    repo_come_prep_pedi_limp_filt() {
      this.$refs.repo_come_prep_pedi_grid_deta.beginupdate()
      this.$refs.repo_come_prep_pedi_grid_glob.clearselection()
      this.$refs.repo_come_prep_pedi_grid_glob.clearfilters()
      this.$refs.repo_come_prep_pedi_grid_deta.clearselection()
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('codi_cort')
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('codi_area')
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('codi_zona')
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('codi_sect')
      this.$refs.repo_come_prep_pedi_grid_deta.removefilter('nume_iden')
      this.$refs.repo_come_prep_pedi_grid_deta.endupdate()
    },
    async repo_come_prep_pedi_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_prep_pedi',
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
    async repo_come_prep_pedi_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_prep_pedi_limp()
      if (this.seleccionCampana == null || this.seleccionCampana.length === 0) {
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
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_prep_pedi/prep_pedi_gene`,
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
          this.$refs.repo_come_prep_pedi_grid_glob.updatebounddata('cells')

          this.sourceDetalle.localdata = await servicio.data.data_deta
          this.sourceDetalle.datatype = 'json'
          this.$refs.repo_come_prep_pedi_grid_deta.updatebounddata('cells')

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
    async repo_come_prep_pedi_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_prep_pedi_grid_glob.getdatainformation()
      const dataRowsGlob = dataInfoGlob.rowscount
      const dataInfoDeta = this.$refs.repo_come_prep_pedi_grid_deta.getdatainformation()
      const dataRowsDeta = dataInfoDeta.rowscount
      if (dataRowsGlob === 0 || dataRowsDeta === 0) {
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
            url: `${store.state.app.webService}/sami_v1/repo_come_prep_pedi/prep_pedi_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_prep_pedi_grid_glob.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_deta: this.$refs.repo_come_prep_pedi_grid_deta.exportdata(
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
