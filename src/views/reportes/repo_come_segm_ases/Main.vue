<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_segm_ases_gene()"
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
        @click="repo_come_segm_ases_limp()"
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
        @click="repo_come_segm_ases_gene()"
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
        @click="repo_come_segm_ases_exce()"
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
        @click="repo_come_segm_ases_limp()"
      >
        <feather-icon
          icon="FileIcon"
          class="mr-50"
        />
        Limpiar
      </b-button>
    </div>
    <b-card>
      <b-row>
        <b-col>
          <b-row>
            <b-col
              md="2"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Año</span>
            </b-col>
            <b-col
              md="2"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <v-select
                ref="refAnno"
                v-model="seleccionAnno"
                :options="dataAnno"
                class="dropdown-150"
              >
                <span
                  slot="no-options"
                  @click="$refs.refAnno.open = false"
                >
                  Año no existe.
                </span>
              </v-select>
            </b-col>
            <b-col
              md="2"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Periodo</span>
            </b-col>
            <b-col
              md="2"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <v-select
                ref="refPeriodo"
                v-model="seleccionPeriodo"
                :options="dataPeriodo"
                class="dropdown-150"
              >
                <span
                  slot="no-options"
                  @click="$refs.refPeriodo.open = false"
                >
                  Periodo no existe.
                </span>
              </v-select>
            </b-col>
            <b-col
              md="2"
              sm="12"
              xs="12"
              class="mb-1 mb-lg-0"
            >
              <span class="d-flex mt-50">Zona</span>
            </b-col>
            <b-col
              md="2"
              sm="12"
              xs="12"
              class="mb-0"
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
          </b-row>
        </b-col>
      </b-row>
    </b-card>

    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_segm_ases_grid_glob"
            :width="'100%'"
            :height="height"
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
    // eslint-disable-next-line vue/no-unused-components
    vSelect,
    // eslint-disable-next-line vue/no-unused-components
    JqxGrid,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      dataAnno: [],
      seleccionAnno: [],
      dataPeriodo: [],
      seleccionPeriodo: [],
      dataZona: [],
      seleccionZona: [],
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
    }
  },
  beforeCreate() {
    if (window.innerHeight - 200 < 400) {
      this.height = '400px'
    } else {
      this.height = `${window.innerHeight - 200}px`
    }
    this.sourceGlobal = {
      localdata: [],
      datafields: [
        { name: 'codi_cort', type: 'string' },
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'nomb_clie', type: 'string' },
        { name: 'camp_1', type: 'number' },
        { name: 'tota_publ_1', type: 'number' },
        { name: 'tota_punt_1', type: 'number' },
        { name: 'tota_perd_1', type: 'number' },
        { name: 'sald_punt_1', type: 'number' },
        { name: 'sald_docu_1', type: 'number' },
        { name: 'esta_cart_1', type: 'string' },
        { name: 'camp_2', type: 'number' },
        { name: 'tota_publ_2', type: 'number' },
        { name: 'tota_punt_2', type: 'number' },
        { name: 'tota_perd_2', type: 'number' },
        { name: 'sald_punt_2', type: 'number' },
        { name: 'sald_docu_2', type: 'number' },
        { name: 'esta_cart_2', type: 'string' },
        { name: 'camp_3', type: 'number' },
        { name: 'tota_publ_3', type: 'number' },
        { name: 'tota_punt_3', type: 'number' },
        { name: 'tota_perd_3', type: 'number' },
        { name: 'sald_punt_3', type: 'number' },
        { name: 'sald_docu_3', type: 'number' },
        { name: 'esta_cart_3', type: 'string' },
        { name: 'camp_4', type: 'number' },
        { name: 'tota_publ_4', type: 'number' },
        { name: 'tota_punt_4', type: 'number' },
        { name: 'tota_perd_4', type: 'number' },
        { name: 'sald_punt_4', type: 'number' },
        { name: 'sald_docu_4', type: 'number' },
        { name: 'esta_cart_4', type: 'string' },
        { name: 'camp_5', type: 'number' },
        { name: 'tota_publ_5', type: 'number' },
        { name: 'tota_punt_5', type: 'number' },
        { name: 'tota_perd_5', type: 'number' },
        { name: 'sald_punt_5', type: 'number' },
        { name: 'sald_docu_5', type: 'number' },
        { name: 'esta_cart_5', type: 'string' },
        { name: 'camp_6', type: 'number' },
        { name: 'tota_publ_6', type: 'number' },
        { name: 'tota_punt_6', type: 'number' },
        { name: 'tota_perd_6', type: 'number' },
        { name: 'sald_punt_6', type: 'number' },
        { name: 'sald_docu_6', type: 'number' },
        { name: 'esta_cart_6', type: 'string' },
        { name: 'camp_7', type: 'number' },
        { name: 'tota_publ_7', type: 'number' },
        { name: 'tota_punt_7', type: 'number' },
        { name: 'tota_perd_7', type: 'number' },
        { name: 'sald_punt_7', type: 'number' },
        { name: 'sald_docu_7', type: 'number' },
        { name: 'esta_cart_7', type: 'string' },
        { name: 'camp_8', type: 'number' },
        { name: 'tota_publ_8', type: 'number' },
        { name: 'tota_punt_8', type: 'number' },
        { name: 'tota_perd_8', type: 'number' },
        { name: 'sald_punt_8', type: 'number' },
        { name: 'sald_docu_8', type: 'number' },
        { name: 'esta_cart_8', type: 'string' },
        { name: 'camp_9', type: 'number' },
        { name: 'tota_publ_9', type: 'number' },
        { name: 'tota_punt_9', type: 'number' },
        { name: 'tota_perd_9', type: 'number' },
        { name: 'sald_punt_9', type: 'number' },
        { name: 'sald_docu_9', type: 'number' },
        { name: 'esta_cart_9', type: 'string' },
        { name: 'tota_punt', type: 'number' },
        { name: 'tota_perd', type: 'number' },
        { name: 'sald_punt', type: 'number' },
        { name: 'vent_cata', type: 'number' },
        { name: 'desc_segm', type: 'string' },
        { name: 'crec_azzo', type: 'string' },
        { name: 'clie_gema', type: 'string' },
        { name: 'nive_gema', type: 'string' },
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
    this.repo_come_segm_ases_visi()
    setTimeout(() => {
      this.$swal({
        title: 'Notificación !',
        text:
          'Recuerde que los puntos efectivos pueden variar por devoluciones o pagos fuera de fecha',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'btn btn-success',
        },
        buttonsStyling: false,
      })
    }, 500)
  },
  created() {
    this.handleWindowResize()
    const userData = JSON.parse(localStorage.getItem('userData'))
    const itemZona = JSON.parse(userData.zona)
    itemZona.forEach(element => this.dataZona.push(element.codi_zona))
    this.seleccionZona = itemZona[0].codi_zona
    const fecha = new Date()
    const anno = fecha.getFullYear()
    this.dataAnno.push(anno)
    this.dataAnno.push(anno - 1)
    this.dataAnno.push(anno - 2)
    this.seleccionAnno = anno
    this.dataPeriodo.push('I')
    this.dataPeriodo.push('II')
    this.seleccionPeriodo = 'I'
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
      let codiCam1Glob = ''
      let totaPun1Glob = ''
      let totaPer1Glob = ''
      let totaEfecFin1Glob = ''
      let totaSal1Glob = ''
      let totaCob1Glob = ''
      let codiCam2Glob = ''
      let totaPun2Glob = ''
      let totaPer2Glob = ''
      let totaEfecFin2Glob = ''
      let totaSal2Glob = ''
      let totaCob2Glob = ''
      let codiCam3Glob = ''
      let totaPun3Glob = ''
      let totaPer3Glob = ''
      let totaEfecFin3Glob = ''
      let totaSal3Glob = ''
      let totaCob3Glob = ''
      let codiCam4Glob = ''
      let totaPun4Glob = ''
      let totaPer4Glob = ''
      let totaEfecFin4Glob = ''
      let totaSal4Glob = ''
      let totaCob4Glob = ''
      let codiCam5Glob = ''
      let totaPun5Glob = ''
      let totaPer5Glob = ''
      let totaEfecFin5Glob = ''
      let totaSal5Glob = ''
      let totaCob5Glob = ''
      let codiCam6Glob = ''
      let totaPun6Glob = ''
      let totaPer6Glob = ''
      let totaEfecFin6Glob = ''
      let totaSal6Glob = ''
      let totaCob6Glob = ''
      let codiCam7Glob = ''
      let totaPun7Glob = ''
      let totaPer7Glob = ''
      let totaEfecFin7Glob = ''
      let totaSal7Glob = ''
      let totaCob7Glob = ''
      let codiCam8Glob = ''
      let totaPun8Glob = ''
      let totaPer8Glob = ''
      let totaEfecFin8Glob = ''
      let totaSal8Glob = ''
      let totaCob8Glob = ''
      let codiCam9Glob = ''
      let totaPun9Glob = ''
      let totaPer9Glob = ''
      let totaEfecFin9Glob = ''
      let totaSal9Glob = ''
      let totaCob9Glob = ''
      let totaPuntGlob = ''
      let totaPerdGlob = ''
      let saldPuntGlob = ''
      let ventCataGlob = ''
      let segmActuGlob = ''
      let clieGemaGlob = ''
      let niveGemaGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiCortGlob = '20'
          codiAreaGlob = '20'
          codiZonaGlob = '20'
          codiSectGlob = '20'
          numeIdenGlob = '20'
          nombTercGlob = '40'
          codiCam1Glob = '20'
          totaPun1Glob = '20'
          totaPer1Glob = '20'
          totaEfecFin1Glob = '20'
          totaSal1Glob = '20'
          totaCob1Glob = '20'
          codiCam2Glob = '20'
          totaPun2Glob = '20'
          totaPer2Glob = '20'
          totaEfecFin2Glob = '20'
          totaSal2Glob = '20'
          totaCob2Glob = '20'
          codiCam3Glob = '20'
          totaPun3Glob = '20'
          totaPer3Glob = '20'
          totaEfecFin3Glob = '20'
          totaSal3Glob = '20'
          totaCob3Glob = '20'
          codiCam4Glob = '20'
          totaPun4Glob = '20'
          totaPer4Glob = '20'
          totaEfecFin4Glob = '20'
          totaSal4Glob = '20'
          totaCob4Glob = '20'
          codiCam5Glob = '20'
          totaPun5Glob = '20'
          totaPer5Glob = '20'
          totaEfecFin5Glob = '20'
          totaSal5Glob = '20'
          totaCob5Glob = '20'
          codiCam6Glob = '20'
          totaPun6Glob = '20'
          totaPer6Glob = '20'
          totaEfecFin6Glob = '20'
          totaSal6Glob = '20'
          totaCob6Glob = '20'
          codiCam7Glob = '20'
          totaPun7Glob = '20'
          totaPer7Glob = '20'
          totaEfecFin7Glob = '20'
          totaSal7Glob = '20'
          totaCob7Glob = '20'
          codiCam8Glob = '20'
          totaPun8Glob = '20'
          totaPer8Glob = '20'
          totaEfecFin8Glob = '20'
          totaSal8Glob = '20'
          totaCob8Glob = '20'
          codiCam9Glob = '20'
          totaPun9Glob = '20'
          totaPer9Glob = '20'
          totaEfecFin9Glob = '20'
          totaSal9Glob = '20'
          totaCob9Glob = '20'
          totaPuntGlob = '20'
          totaPerdGlob = '20'
          saldPuntGlob = '20'
          ventCataGlob = '20'
          segmActuGlob = '20'
          clieGemaGlob = '20'
          niveGemaGlob = '20'
          break
        case 'sm':
          codiCortGlob = '20'
          codiAreaGlob = '20'
          codiZonaGlob = '20'
          codiSectGlob = '20'
          numeIdenGlob = '20'
          nombTercGlob = '40'
          codiCam1Glob = '20'
          totaPun1Glob = '20'
          totaPer1Glob = '20'
          totaEfecFin1Glob = '20'
          totaSal1Glob = '20'
          totaCob1Glob = '20'
          codiCam2Glob = '20'
          totaPun2Glob = '20'
          totaPer2Glob = '20'
          totaEfecFin2Glob = '20'
          totaSal2Glob = '20'
          totaCob2Glob = '20'
          codiCam3Glob = '20'
          totaPun3Glob = '20'
          totaPer3Glob = '20'
          totaEfecFin3Glob = '20'
          totaSal3Glob = '20'
          totaCob3Glob = '20'
          codiCam4Glob = '20'
          totaPun4Glob = '20'
          totaPer4Glob = '20'
          totaEfecFin4Glob = '20'
          totaSal4Glob = '20'
          totaCob4Glob = '20'
          codiCam5Glob = '20'
          totaPun5Glob = '20'
          totaPer5Glob = '20'
          totaEfecFin5Glob = '20'
          totaSal5Glob = '20'
          totaCob5Glob = '20'
          codiCam6Glob = '20'
          totaPun6Glob = '20'
          totaPer6Glob = '20'
          totaEfecFin6Glob = '20'
          totaSal6Glob = '20'
          totaCob6Glob = '20'
          codiCam7Glob = '20'
          totaPun7Glob = '20'
          totaPer7Glob = '20'
          totaEfecFin7Glob = '20'
          totaSal7Glob = '20'
          totaCob7Glob = '20'
          codiCam8Glob = '20'
          totaPun8Glob = '20'
          totaPer8Glob = '20'
          totaEfecFin8Glob = '20'
          totaSal8Glob = '20'
          totaCob8Glob = '20'
          codiCam9Glob = '20'
          totaPun9Glob = '20'
          totaPer9Glob = '20'
          totaEfecFin9Glob = '20'
          totaSal9Glob = '20'
          totaCob9Glob = '20'
          totaPuntGlob = '20'
          totaPerdGlob = '20'
          saldPuntGlob = '20'
          ventCataGlob = '20'
          segmActuGlob = '20'
          clieGemaGlob = '20'
          niveGemaGlob = '20'
          break
        case 'md':
          codiCortGlob = '10'
          codiAreaGlob = '10'
          codiZonaGlob = '10'
          codiSectGlob = '10'
          numeIdenGlob = '10'
          nombTercGlob = '40'
          codiCam1Glob = '10'
          totaPun1Glob = '10'
          totaPer1Glob = '10'
          totaEfecFin1Glob = '10'
          totaSal1Glob = '10'
          totaCob1Glob = '10'
          codiCam2Glob = '10'
          totaPun2Glob = '10'
          totaPer2Glob = '10'
          totaEfecFin2Glob = '10'
          totaSal2Glob = '10'
          totaCob2Glob = '10'
          codiCam3Glob = '10'
          totaPun3Glob = '10'
          totaPer3Glob = '10'
          totaEfecFin3Glob = '10'
          totaSal3Glob = '10'
          totaCob3Glob = '10'
          codiCam4Glob = '10'
          totaPun4Glob = '10'
          totaPer4Glob = '10'
          totaEfecFin4Glob = '10'
          totaSal4Glob = '10'
          totaCob4Glob = '10'
          codiCam5Glob = '10'
          totaPun5Glob = '10'
          totaPer5Glob = '10'
          totaEfecFin5Glob = '10'
          totaSal5Glob = '10'
          totaCob5Glob = '10'
          codiCam6Glob = '10'
          totaPun6Glob = '10'
          totaPer6Glob = '10'
          totaEfecFin6Glob = '10'
          totaSal6Glob = '10'
          totaCob6Glob = '10'
          codiCam7Glob = '10'
          totaPun7Glob = '10'
          totaPer7Glob = '10'
          totaEfecFin7Glob = '10'
          totaSal7Glob = '10'
          totaCob7Glob = '10'
          codiCam8Glob = '10'
          totaPun8Glob = '10'
          totaPer8Glob = '10'
          totaEfecFin8Glob = '10'
          totaSal8Glob = '10'
          totaCob8Glob = '10'
          codiCam9Glob = '10'
          totaPun9Glob = '10'
          totaPer9Glob = '10'
          totaEfecFin9Glob = '10'
          totaSal9Glob = '10'
          totaCob9Glob = '10'
          totaPuntGlob = '10'
          totaPerdGlob = '10'
          saldPuntGlob = '10'
          ventCataGlob = '10'
          segmActuGlob = '10'
          clieGemaGlob = '10'
          niveGemaGlob = '10'
          break
        default:
          codiCortGlob = '9'
          codiAreaGlob = '9'
          codiZonaGlob = '9'
          codiSectGlob = '9'
          numeIdenGlob = '10'
          nombTercGlob = '40'
          codiCam1Glob = '10'
          totaPun1Glob = '10'
          totaPer1Glob = '10'
          totaEfecFin1Glob = '10'
          totaSal1Glob = '10'
          totaCob1Glob = '10'
          codiCam2Glob = '10'
          totaPun2Glob = '10'
          totaPer2Glob = '10'
          totaEfecFin2Glob = '10'
          totaSal2Glob = '10'
          totaCob2Glob = '10'
          codiCam3Glob = '10'
          totaPun3Glob = '10'
          totaPer3Glob = '10'
          totaEfecFin3Glob = '10'
          totaSal3Glob = '10'
          totaCob3Glob = '10'
          codiCam4Glob = '10'
          totaPun4Glob = '10'
          totaPer4Glob = '10'
          totaEfecFin4Glob = '10'
          totaSal4Glob = '10'
          totaCob4Glob = '10'
          codiCam5Glob = '10'
          totaPun5Glob = '10'
          totaPer5Glob = '10'
          totaEfecFin5Glob = '10'
          totaSal5Glob = '10'
          totaCob5Glob = '10'
          codiCam6Glob = '10'
          totaPun6Glob = '10'
          totaPer6Glob = '10'
          totaEfecFin6Glob = '10'
          totaSal6Glob = '10'
          totaCob6Glob = '10'
          codiCam7Glob = '10'
          totaPun7Glob = '10'
          totaPer7Glob = '10'
          totaEfecFin7Glob = '10'
          totaSal7Glob = '10'
          totaCob7Glob = '10'
          codiCam8Glob = '10'
          totaPun8Glob = '10'
          totaPer8Glob = '10'
          totaEfecFin8Glob = '10'
          totaSal8Glob = '10'
          totaCob8Glob = '10'
          codiCam9Glob = '10'
          totaPun9Glob = '10'
          totaPer9Glob = '10'
          totaEfecFin9Glob = '10'
          totaSal9Glob = '10'
          totaCob9Glob = '10'
          totaPuntGlob = '10'
          totaPerdGlob = '10'
          saldPuntGlob = '10'
          ventCataGlob = '10'
          segmActuGlob = '10'
          clieGemaGlob = '10'
          niveGemaGlob = '10'
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
        },
        {
          text: 'Sector',
          dataField: 'codi_sect',
          width: `${codiSectGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'DNI - RUC',
          dataField: 'nume_iden',
          width: `${numeIdenGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Nombre(s) y Apellido(s)',
          dataField: 'nomb_clie',
          width: `${nombTercGlob}%`,
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
        {
          text: 'Campaña 1',
          dataField: 'camp_1',
          width: `${codiCam1Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. 1',
          dataField: 'tota_punt_1',
          width: `${totaPun1Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos perd. 1',
          dataField: 'tota_perd_1',
          width: `${totaPer1Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. fina. 1',
          dataField: 'sald_punt_1',
          width: `${totaEfecFin1Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Saldo 1',
          dataField: 'sald_docu_1',
          width: `${totaSal1Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Cobranza 1',
          dataField: 'esta_cart_1',
          width: `${totaCob1Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Campaña 2',
          dataField: 'camp_2',
          width: `${codiCam2Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. 2',
          dataField: 'tota_punt_2',
          width: `${totaPun2Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos perd. 2',
          dataField: 'tota_perd_2',
          width: `${totaPer2Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. fina. 2',
          dataField: 'sald_punt_2',
          width: `${totaEfecFin2Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Saldo 2',
          dataField: 'sald_docu_2',
          width: `${totaSal2Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Cobranza 2',
          dataField: 'esta_cart_2',
          width: `${totaCob2Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Campaña 3',
          dataField: 'camp_3',
          width: `${codiCam3Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. 3',
          dataField: 'tota_punt_3',
          width: `${totaPun3Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos perd. 3',
          dataField: 'tota_perd_3',
          width: `${totaPer3Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. fina. 3',
          dataField: 'sald_punt_3',
          width: `${totaEfecFin3Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Saldo 3',
          dataField: 'sald_docu_3',
          width: `${totaSal3Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Cobranza 3',
          dataField: 'esta_cart_3',
          width: `${totaCob3Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Campaña 4',
          dataField: 'camp_4',
          width: `${codiCam4Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. 4',
          dataField: 'tota_punt_4',
          width: `${totaPun4Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos perd. 4',
          dataField: 'tota_perd_4',
          width: `${totaPer4Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. fina. 4',
          dataField: 'sald_punt_4',
          width: `${totaEfecFin4Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Saldo 4',
          dataField: 'sald_docu_4',
          width: `${totaSal4Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Cobranza 4',
          dataField: 'esta_cart_4',
          width: `${totaCob4Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Campaña 5',
          dataField: 'camp_5',
          width: `${codiCam5Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. 5',
          dataField: 'tota_punt_5',
          width: `${totaPun5Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos perd. 5',
          dataField: 'tota_perd_5',
          width: `${totaPer5Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. fina. 5',
          dataField: 'sald_punt_5',
          width: `${totaEfecFin5Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Saldo 5',
          dataField: 'sald_docu_5',
          width: `${totaSal5Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Cobranza 5',
          dataField: 'esta_cart_5',
          width: `${totaCob5Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Campaña 6',
          dataField: 'camp_6',
          width: `${codiCam6Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. 6',
          dataField: 'tota_punt_6',
          width: `${totaPun6Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos perd. 6',
          dataField: 'tota_perd_6',
          width: `${totaPer6Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. fina. 6',
          dataField: 'sald_punt_6',
          width: `${totaEfecFin6Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Saldo 6',
          dataField: 'sald_docu_6',
          width: `${totaSal6Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Cobranza 6',
          dataField: 'esta_cart_6',
          width: `${totaCob6Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Campaña 7',
          dataField: 'camp_7',
          width: `${codiCam7Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. 7',
          dataField: 'tota_punt_7',
          width: `${totaPun7Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos perd. 7',
          dataField: 'tota_perd_7',
          width: `${totaPer7Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. fina. 7',
          dataField: 'sald_punt_7',
          width: `${totaEfecFin7Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Saldo 7',
          dataField: 'sald_docu_7',
          width: `${totaSal7Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Cobranza 7',
          dataField: 'esta_cart_7',
          width: `${totaCob7Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Campaña 8',
          dataField: 'camp_8',
          width: `${codiCam8Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. 8',
          dataField: 'tota_punt_8',
          width: `${totaPun8Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos perd. 8',
          dataField: 'tota_perd_8',
          width: `${totaPer8Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. fina. 8',
          dataField: 'sald_punt_8',
          width: `${totaEfecFin8Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Saldo 8',
          dataField: 'sald_docu_8',
          width: `${totaSal8Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Cobranza 8',
          dataField: 'esta_cart_8',
          width: `${totaCob8Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Campaña 9',
          dataField: 'camp_9',
          width: `${codiCam9Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. 9',
          dataField: 'tota_punt_9',
          width: `${totaPun9Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos perd. 9',
          dataField: 'tota_perd_9',
          width: `${totaPer9Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. fina. 9',
          dataField: 'sald_punt_9',
          width: `${totaEfecFin9Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Saldo 9',
          dataField: 'sald_docu_9',
          width: `${totaSal9Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Cobranza 9',
          dataField: 'esta_cart_9',
          width: `${totaCob9Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Ptos efect. acumulados',
          dataField: 'tota_punt',
          width: `${totaPuntGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
        },
        {
          text: 'Ptos efect. perd. acumulados',
          dataField: 'tota_perd',
          width: `${totaPerdGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
        },
        {
          text: 'Ptos efect. fina. acumulados',
          dataField: 'sald_punt',
          width: `${saldPuntGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
        },
        {
          text: 'Vta prom. cat.',
          dataField: 'vent_cata',
          width: `${ventCataGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          cellsformat: 'N',
        },
        {
          text: 'Creciendo con azzorti',
          dataField: 'desc_segm',
          width: `${segmActuGlob}%`,
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
        {
          text: 'Gemma',
          dataField: 'clie_gema',
          width: `${clieGemaGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Nivel gemma',
          dataField: 'nive_gema',
          width: `${niveGemaGlob}%`,
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
      ]

      if (typeof this.$refs.repo_come_segm_ases_grid_glob !== 'undefined') {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.repo_come_segm_ases_grid_glob.height = this.height
        this.$refs.repo_come_segm_ases_grid_glob.columns = this.columnsGlobal
      }
    },
    repo_come_segm_ases_limp() {
      this.$refs.repo_come_segm_ases_grid_glob.clear()
      this.$refs.repo_come_segm_ases_grid_glob.clearselection()
    },
    async repo_come_segm_ases_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_segm_ases',
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
    async repo_come_segm_ases_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_segm_ases_limp()
      if (this.seleccionAnno === null || this.seleccionAnno.length === 0) {
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
              text: 'Campo año es obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else if (
        this.seleccionPeriodo === null
        || this.seleccionPeriodo.length === 0
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
              text: 'Campo periodo es obligatorio.',
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
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_segm_ases/segm_ases_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_anno: this.seleccionAnno,
              codi_peri: this.seleccionPeriodo,
              codi_zona: this.seleccionZona,
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_segm_ases_grid_glob.updatebounddata('cells')
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
    async repo_come_segm_ases_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_segm_ases_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/repo_come_segm_ases/segm_ases_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_segm_ases_grid_glob.exportdata(
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
