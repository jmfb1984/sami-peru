<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_sald_cart_gene()"
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
        @click="repo_come_sald_cart_limp()"
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
        @click="repo_come_sald_cart_gene()"
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
        @click="repo_come_sald_cart_exce()"
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
        @click="repo_come_sald_cart_limp()"
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
          <b-row>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Objetivo 21 días</span>
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="6"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <b-form-spinbutton
                v-model="objetivo21di"
                wrap
                min="88"
                max="100"
                placeholder="--"
              />
            </b-col>
            <b-col
              class="d-block d-lg-none"
            />
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Objetivo 31 dias</span>
            </b-col>
            <b-col
              xl="4"
              lg="4"
              md="6"
              sm="12"
              xs="12"
              class="mb-0"
            >
              <b-form-spinbutton
                v-model="objetivo31di"
                wrap
                min="92"
                max="100"
                placeholder="--"
              />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_sald_cart_grid_glob"
            :width="'100%'"
            :height="300"
            :columns="columnsGlobal"
            :source="dataAdapterGlobal"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="true"
            :sortmode="'many'"
            :filterable="true"
            :altrows="false"
            :enablebrowserselection="true"
            :showemptyrow="false"
            :columnsreorder="true"
            :enablehover="false"
            :groupable="false"
            :autoshowfiltericon="true"
            :enableanimations="true"
            :localization="localization"
            :showaggregates="true"
            :showstatusbar="true"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
            :scrollmode="'logical'"
          />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_sald_cart_grid_deta"
            :width="'100%'"
            :height="450"
            :columns="columnsDetalle"
            :source="dataAdapterDetalle"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="true"
            :sortmode="'many'"
            :filterable="true"
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
            :editable="true"
            :editmode="'click'"
            :scrollmode="'logical'"
            @cellbeginedit="repo_come_sald_cart_grid_deta_inic_edit($event)"
            @cellendedit="repo_come_sald_cart_grid_deta_edit($event)"
          />
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import {
  BRow, BCol, BButton, BCard, BFormSpinbutton,
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import selectCampanaZona from '@/views/components/FiltroCampanaZona.vue'
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

let sumaValoDocuGlob = 0
let sumaSald21diGlob = 0
let sumaSald31diGlob = 0
let sumaSaldActuGlob = 0
let sumaSimu21diGlob = 0
let saldo21DiasDetalle = 0

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BCard,
    BFormSpinbutton,
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
      objetivo21di: 88,
      objetivo31di: 92,
    }
  },
  beforeCreate() {
    this.sourceGlobal = {
      localdata: [],
      datafields: [
        { name: 'codi_sect', type: 'string' },
        { name: 'valo_docu', type: 'number' },
        { name: 'obje_21di', type: 'number' },
        { name: 'obje_31di', type: 'number' },
        { name: 'sald_21di', type: 'number' },
        { name: 'porc_21di', type: 'number' },
        { name: 'sald_31di', type: 'number' },
        { name: 'porc_31di', type: 'number' },
        { name: 'sald_actu', type: 'number' },
        { name: 'porc_actu', type: 'number' },
        { name: 'falt_cobr_21di', type: 'number' },
        { name: 'porc_simu_21di', type: 'number' },
        { name: 'simu_21di', type: 'number' },
        { name: 'falt_cobr_31di', type: 'number' },
        { name: 'porc_simu_31di', type: 'number' },
        { name: 'simu_31di', type: 'number' },
      ],
      datatype: 'array',
    }

    this.sourceDetalle = {
      localdata: [],
      datafields: [
        { name: 'codi_terc', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'nomb_terc', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'nomb_terc', type: 'string' },
        { name: 'tele_terc', type: 'string' },
        { name: 'nume_docu', type: 'number' },
        { name: 'valo_docu', type: 'number' },
        { name: 'sald_21di', type: 'number' },
        { name: 'sald_31di', type: 'number' },
        { name: 'sald_actu', type: 'number' },
        { name: 'simu_21di', type: 'number' },
        { name: 'simu_31di', type: 'number' },
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
    this.repo_come_sald_cart_visi()
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
      let codiSectGlob = ''
      let valoDocuGlob = ''
      let obje21diGlob = ''
      let obje31diGlob = ''
      let sald21diGlob = ''
      let porc21diGlob = ''
      let sald31diGlob = ''
      let porc31diGlob = ''
      let saldActuGlob = ''
      let porcActuGlob = ''
      let simu21diGlob = ''
      let porcSimu21diGlob = ''
      let faltCobr21diGlob = ''
      let faltCobr31diGlob = ''
      let codiSectDeta = ''
      let codiTercDeta = ''
      let numeIdenDeta = ''
      let nombTercDeta = ''
      let teleTercDeta = ''
      let numeDocuDeta = ''
      let valoDocuDeta = ''
      let sald21diDeta = ''
      let sald31diDeta = ''
      let saldActuDeta = ''
      let simu21diDeta = ''
      let pinned = true
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiSectGlob = '20'
          valoDocuGlob = '20'
          obje21diGlob = '25'
          obje31diGlob = '25'
          sald21diGlob = '25'
          porc21diGlob = '25'
          sald31diGlob = '25'
          porc31diGlob = '25'
          saldActuGlob = '25'
          porcActuGlob = '25'
          simu21diGlob = '25'
          porcSimu21diGlob = '25'
          faltCobr21diGlob = '25'
          faltCobr31diGlob = '25'

          codiSectDeta = '20'
          codiTercDeta = '20'
          numeIdenDeta = '20'
          nombTercDeta = '70'
          teleTercDeta = '20'
          numeDocuDeta = '25'
          valoDocuDeta = '25'
          sald21diDeta = '25'
          sald31diDeta = '25'
          saldActuDeta = '25'
          simu21diDeta = '25'
          pinned = false

          break
        case 'sm':
          codiSectGlob = '20'
          valoDocuGlob = '20'
          obje21diGlob = '25'
          obje31diGlob = '25'
          sald21diGlob = '25'
          porc21diGlob = '25'
          sald31diGlob = '25'
          porc31diGlob = '25'
          saldActuGlob = '25'
          porcActuGlob = '25'
          simu21diGlob = '25'
          porcSimu21diGlob = '25'
          faltCobr21diGlob = '25'
          faltCobr31diGlob = '25'

          codiSectDeta = '20'
          codiTercDeta = '20'
          numeIdenDeta = '20'
          nombTercDeta = '70'
          teleTercDeta = '20'
          numeDocuDeta = '25'
          valoDocuDeta = '25'
          sald21diDeta = '25'
          sald31diDeta = '25'
          saldActuDeta = '25'
          simu21diDeta = '25'
          pinned = false
          break
        case 'md':
          codiSectGlob = '15'
          valoDocuGlob = '15'
          obje21diGlob = '20'
          obje31diGlob = '20'
          sald21diGlob = '20'
          porc21diGlob = '20'
          sald31diGlob = '20'
          porc31diGlob = '20'
          saldActuGlob = '20'
          porcActuGlob = '20'
          simu21diGlob = '20'
          porcSimu21diGlob = '20'
          faltCobr21diGlob = '20'
          faltCobr31diGlob = '20'

          codiSectDeta = '15'
          codiTercDeta = '15'
          numeIdenDeta = '15'
          nombTercDeta = '50'
          teleTercDeta = '15'
          numeDocuDeta = '20'
          valoDocuDeta = '20'
          sald21diDeta = '20'
          sald31diDeta = '20'
          saldActuDeta = '20'
          simu21diDeta = '20'
          pinned = false
          break
        default:
          codiSectGlob = '10'
          valoDocuGlob = '10'
          obje21diGlob = '15'
          obje31diGlob = '15'
          sald21diGlob = '15'
          porc21diGlob = '15'
          sald31diGlob = '15'
          porc31diGlob = '15'
          saldActuGlob = '15'
          porcActuGlob = '15'
          simu21diGlob = '15'
          porcSimu21diGlob = '15'
          faltCobr21diGlob = '15'
          faltCobr31diGlob = '15'

          codiSectDeta = '10'
          codiTercDeta = '10'
          numeIdenDeta = '10'
          nombTercDeta = '30'
          teleTercDeta = '10'
          numeDocuDeta = '15'
          valoDocuDeta = '15'
          sald21diDeta = '15'
          sald31diDeta = '15'
          saldActuDeta = '15'
          simu21diDeta = '15'
          pinned = true
          break
      }
      this.columnsGlobal = [
        {
          text: 'Sector',
          datafield: 'codi_sect',
          width: `${codiSectGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned: true,
        },
        {
          text: 'Valor',
          datafield: 'valo_docu',
          width: `${valoDocuGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'C2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedvalue, currentvalue) {
                // eslint-disable-next-line
                aggregatedvalue += currentvalue
                return aggregatedvalue
              },
            },
          ],
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Obj. Max. Saldo 21d',
          datafield: 'obje_21di',
          width: `${obje21diGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'C2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedvalue, currentvalue) {
                // eslint-disable-next-line
                aggregatedvalue += currentvalue
                return aggregatedvalue
              },
            },
          ],
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Obj. Max. Saldo 31d',
          datafield: 'obje_31di',
          width: `${obje31diGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'C2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedvalue, currentvalue) {
                // eslint-disable-next-line
                aggregatedvalue += currentvalue
                return aggregatedvalue
              },
            },
          ],
          cellclassname: 'text-black bg-primary',
        },
        {
          text: 'Saldo 21 Días',
          datafield: 'sald_21di',
          width: `${sald21diGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'C2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedvalue, currentvalue) {
                // eslint-disable-next-line
                aggregatedvalue += currentvalue
                return aggregatedvalue
              },
            },
          ],
          cellclassname: 'text-white bg-danger',
        },
        {
          text: '% 21 Días',
          datafield: 'porc_21di',
          width: `${porc21diGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaValoDocuGlob = 0
                  sumaSald21diGlob = 0
                }
                sumaValoDocuGlob += record.valo_docu
                sumaSald21diGlob += record.sald_21di

                let sumaGlob = 0

                if (
                  parseFloat(sumaValoDocuGlob) !== 0
                  && parseFloat(sumaSald21diGlob) !== 0
                ) {
                  sumaGlob = 100
                    - 100
                      * (parseFloat(sumaSald21diGlob)
                        / parseFloat(sumaValoDocuGlob))
                }
                sumaGlob = parseFloat(sumaGlob).toFixed(2)
                return sumaGlob
              },
            },
          ],
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Saldo 31 Días',
          datafield: 'sald_31di',
          width: `${sald31diGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'C2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedvalue, currentvalue) {
                // eslint-disable-next-line
                aggregatedvalue += currentvalue
                return aggregatedvalue
              },
            },
          ],
          cellclassname: 'text-white bg-danger',
        },
        {
          text: '% 31 Días',
          datafield: 'porc_31di',
          width: `${porc31diGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaValoDocuGlob = 0
                  sumaSald31diGlob = 0
                }
                sumaValoDocuGlob += record.valo_docu
                sumaSald31diGlob += record.sald_31di

                let sumaGlob = 0

                if (
                  parseFloat(sumaValoDocuGlob) !== 0
                  && parseFloat(sumaSald31diGlob) !== 0
                ) {
                  sumaGlob = 100
                    - 100
                      * (parseFloat(sumaSald31diGlob)
                        / parseFloat(sumaValoDocuGlob))
                }
                sumaGlob = parseFloat(sumaGlob).toFixed(2)
                return sumaGlob
              },
            },
          ],
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Saldo Actual',
          datafield: 'sald_actu',
          width: `${saldActuGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'c2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedvalue, currentvalue) {
                // eslint-disable-next-line
                aggregatedvalue += currentvalue
                return aggregatedvalue
              },
            },
          ],
          cellclassname: 'text-white bg-danger',
        },
        {
          text: '% Actual',
          datafield: 'porc_actu',
          width: `${porcActuGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'P2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaValoDocuGlob = 0
                  sumaSaldActuGlob = 0
                }
                sumaValoDocuGlob += record.valo_docu
                sumaSaldActuGlob += record.sald_actu

                let sumaGlob = 0

                if (
                  parseFloat(sumaValoDocuGlob) !== 0
                  && parseFloat(sumaSaldActuGlob) !== 0
                ) {
                  sumaGlob = 100
                    - 100
                      * (parseFloat(sumaSaldActuGlob)
                        / parseFloat(sumaValoDocuGlob))
                }
                sumaGlob = parseFloat(sumaGlob).toFixed(2)
                return sumaGlob
              },
            },
          ],
          cellclassname: 'text-white bg-danger',
        },
        {
          text: 'Simulador',
          datafield: 'simu_21di',
          width: `${simu21diGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'C2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedvalue, currentvalue) {
                // eslint-disable-next-line
                aggregatedvalue += currentvalue
                return aggregatedvalue
              },
            },
          ],
          cellclassname: 'text-white bg-success',
        },
        {
          text: '% Simulador',
          datafield: 'porc_simu_21di',
          width: `${porcSimu21diGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'p2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function(aggregatedValue, currentValue, column, record) {
                if (record.uid === 0) {
                  sumaValoDocuGlob = 0
                  sumaSimu21diGlob = 0
                }
                sumaValoDocuGlob += record.valo_docu
                sumaSimu21diGlob += record.simu_21di

                let sumaGlob = 0

                if (
                  parseFloat(sumaValoDocuGlob) !== 0
                  && parseFloat(sumaSimu21diGlob) !== 0
                ) {
                  sumaGlob = 100
                    - 100
                      * (parseFloat(sumaSimu21diGlob)
                        / parseFloat(sumaValoDocuGlob))
                }
                sumaGlob = parseFloat(sumaGlob).toFixed(2)
                return sumaGlob
              },
            },
          ],
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Falta Cobrar 21d',
          datafield: 'falt_cobr_21di',
          width: `${faltCobr21diGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'C2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedvalue, currentvalue) {
                // eslint-disable-next-line
                aggregatedvalue += currentvalue
                return aggregatedvalue
              },
            },
          ],
          cellclassname: 'text-white bg-success',
        },
        {
          text: 'Falta Cobrar 31d',
          datafield: 'falt_cobr_31di',
          width: `${faltCobr31diGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'C2',
          aggregates: [
            {
              // eslint-disable-next-line
              'T': function (aggregatedvalue, currentvalue) {
                // eslint-disable-next-line
                aggregatedvalue += currentvalue
                return aggregatedvalue
              },
            },
          ],
          cellclassname: 'text-white bg-success',
        },
      ]

      this.columnsDetalle = [
        {
          text: 'Sector',
          datafield: 'codi_sect',
          width: `${codiSectDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          pinned,
        },
        {
          text: 'Código',
          datafield: 'codi_terc',
          width: `${codiTercDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'DNI - RUC',
          datafield: 'nume_iden',
          width: `${numeIdenDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Nombre(s) y Apellido(s)',
          datafield: 'nomb_terc',
          width: `${nombTercDeta}%`,
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
        {
          text: 'Teléfono',
          datafield: 'tele_terc',
          width: `${teleTercDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Documento',
          datafield: 'nume_docu',
          width: `${numeDocuDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Valor',
          datafield: 'valo_docu',
          width: `${valoDocuDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'C2',
        },
        {
          text: 'Saldo 21di',
          datafield: 'sald_21di',
          width: `${sald21diDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'C2',
        },
        {
          text: 'Saldo 31di',
          datafield: 'sald_31di',
          width: `${sald31diDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'C2',
        },
        {
          text: 'Saldo Actual',
          datafield: 'sald_actu',
          width: `${saldActuDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'C2',
        },
        {
          text: 'Simulador',
          datafield: 'simu_21di',
          width: `${simu21diDeta}%`,
          align: 'center',
          cellsalign: 'center',
          editable: true,
          cellsformat: 'C2',
          validation(cell, value) {
            if (value === '0') {
              return true
            }
            if (value === '') {
              return {
                result: false,
                message: 'Simulador debe de ser mayor o igual a cero.',
              }
            }
            const simu21di = parseFloat(value)
            const sald21di = parseFloat(saldo21DiasDetalle)
            if (simu21di < 0) {
              return {
                result: false,
                message: 'Simulador debe de ser mayor o igual a cero.',
              }
            }
            if (simu21di > sald21di) {
              return {
                result: false,
                message: `Valor mayor a ${sald21di}`,
              }
            }
            return true
          },
          cellclassname: 'text-white bg-success',
        },
      ]
      if (typeof this.$refs.repo_come_sald_cart_grid_glob !== 'undefined') {
        this.$refs.repo_come_sald_cart_grid_glob.columns = this.columnsGlobal
        this.$refs.repo_come_sald_cart_grid_deta.columns = this.columnsDetalle
      }
    },
    repo_come_sald_cart_limp() {
      this.$refs.repo_come_sald_cart_grid_glob.clear()
      this.$refs.repo_come_sald_cart_grid_glob.clearselection()
      this.$refs.repo_come_sald_cart_grid_deta.clear()
      this.$refs.repo_come_sald_cart_grid_deta.clearselection()
    },
    async repo_come_sald_cart_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_simu_cobr',
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
    async repo_come_sald_cart_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_sald_cart_limp()
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
      } else if (this.seleccionZona == null || this.seleccionZona.length === 0) {
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
            url: `${store.state.app.webService}/sami_v1/repo_come_simu_cobr/simu_cobr_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.seleccionCampana,
              codi_zona: this.seleccionZona,
              obje_21di: this.objetivo21di,
              obje_31di: this.objetivo31di,
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_sald_cart_grid_glob.updatebounddata('cells')

          this.sourceDetalle.localdata = await servicio.data.data_deta
          this.sourceDetalle.datatype = 'json'
          this.$refs.repo_come_sald_cart_grid_deta.updatebounddata('cells')
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
    async repo_come_sald_cart_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_sald_cart_grid_glob.getdatainformation()
      const dataRowsGlob = dataInfoGlob.rowscount

      const dataInfoDeta = this.$refs.repo_come_sald_cart_grid_deta.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/repo_come_simu_cobr/simu_cobr_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_sald_cart_grid_glob.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_deta: this.$refs.repo_come_sald_cart_grid_deta.exportdata(
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
    repo_come_sald_cart_grid_deta_inic_edit(event) {
      const { args } = event
      saldo21DiasDetalle = this.$refs.repo_come_sald_cart_grid_deta.getcellvaluebyid(
        args.rowindex,
        'sald_21di',
      )
    },
    repo_come_sald_cart_grid_deta_edit(event) {
      const { args } = event
      const columnDataField = args.datafield
      const rowIndex = args.rowindex
      const cellValue = parseFloat(args.value).toFixed(2)
      const oldValue = parseFloat(args.oldvalue).toFixed(2)

      const codiSect = this.$refs.repo_come_sald_cart_grid_deta.getcellvaluebyid(
        rowIndex,
        'codi_sect',
      )
      let rowIndexGlobal = 0
      const cobrJson = this.$refs.repo_come_sald_cart_grid_glob.exportdata(
        'json',
      )
      // eslint-disable-next-line
      for (const key in JSON.parse(cobrJson)) {
        if (JSON.parse(cobrJson)[key].Sector.trim() === codiSect) {
          rowIndexGlobal = key
        }
      }
      let newValue = oldValue - cellValue
      newValue = parseFloat(newValue).toFixed(2)
      if (columnDataField === 'simu_21di') {
        let simu21di = this.$refs.repo_come_sald_cart_grid_glob.getcellvaluebyid(
          rowIndexGlobal,
          'simu_21di',
        )
        let valoDocu = this.$refs.repo_come_sald_cart_grid_glob.getcellvaluebyid(
          rowIndexGlobal,
          'valo_docu',
        )
        let obje21di = this.$refs.repo_come_sald_cart_grid_glob.getcellvaluebyid(
          rowIndexGlobal,
          'obje_21di',
        )
        let obje31di = this.$refs.repo_come_sald_cart_grid_glob.getcellvaluebyid(
          rowIndexGlobal,
          'obje_31di',
        )
        simu21di = parseFloat(simu21di).toFixed(2)
        simu21di -= newValue
        valoDocu = parseFloat(valoDocu).toFixed(2)
        let porcSimu21di = '0.00'
        if (valoDocu !== 0) {
          porcSimu21di = 100 - 100 * (parseFloat(simu21di) / parseFloat(valoDocu))
          porcSimu21di = parseFloat(porcSimu21di).toFixed(2)
        }
        obje21di = parseFloat(obje21di).toFixed(2)
        let faltCobr21di = obje21di - simu21di
        faltCobr21di = parseFloat(faltCobr21di).toFixed(2)
        if (faltCobr21di >= 0) {
          faltCobr21di = '0.00'
        }
        this.$refs.repo_come_sald_cart_grid_glob.setcellvalue(
          rowIndexGlobal,
          'falt_cobr_21di',
          faltCobr21di,
        )
        this.$refs.repo_come_sald_cart_grid_glob.setcellvalue(
          rowIndexGlobal,
          'porc_simu_21di',
          porcSimu21di,
        )
        this.$refs.repo_come_sald_cart_grid_glob.setcellvalue(
          rowIndexGlobal,
          'simu_21di',
          simu21di,
        )
        obje31di = parseFloat(obje31di).toFixed(2)
        let faltCobr31di = obje31di - simu21di
        faltCobr31di = parseFloat(faltCobr31di).toFixed(2)
        if (faltCobr31di >= 0) {
          faltCobr31di = '0.00'
        }
        this.$refs.repo_come_sald_cart_grid_glob.setcellvalue(
          rowIndexGlobal,
          'falt_cobr_31di',
          faltCobr31di,
        )
      }
    },
  },
}
</script>
<style lang="scss"></style>
