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
          @campana="setCampana"
          @zona="setZona"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="repo_come_sald_cart_grid_glob"
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
        { name: 'nomb_ases', type: 'string' },
        { name: 'codi_camp', type: 'number' },
        { name: 'valo_docu', type: 'number' },
        { name: 'sald_docu', type: 'number' },
        { name: 'nume_docu', type: 'number' },
        { name: 'sald_docu_pago', type: 'number' },
        { name: 'tele_ases', type: 'string' },
        { name: 'sald_docu_01', type: 'number' },
        { name: 'fech_venc_01', type: 'string' },
        { name: 'sald_docu_02', type: 'number' },
        { name: 'fech_venc_02', type: 'string' },
        { name: 'sald_docu_03', type: 'number' },
        { name: 'fech_venc_03', type: 'string' },
        { name: 'sald_docu_04', type: 'number' },
        { name: 'fech_venc_04', type: 'string' },
        { name: 'sald_docu_01_ocul', type: 'number' },
        { name: 'fech_venc_01_ocul', type: 'string' },
        { name: 'sald_docu_02_ocul', type: 'number' },
        { name: 'fech_venc_02_ocul', type: 'string' },
        { name: 'sald_docu_03_ocul', type: 'number' },
        { name: 'fech_venc_03_ocul', type: 'string' },
        { name: 'sald_docu_04_ocul', type: 'number' },
        { name: 'fech_venc_04_ocul', type: 'string' },
        { name: 'sald_docu_ocul', type: 'number' },
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
      this.columnsGlobal = [
        {
          text: 'Corte',
          dataField: 'codi_cort',
          width: '60',
          align: 'center',
          cellsalign: 'center',
          hidden: true,
        },
        {
          text: 'Región',
          dataField: 'codi_area',
          width: '70',
          align: 'center',
          cellsalign: 'center',
          hidden: true,
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: '60',
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Sector',
          dataField: 'codi_sect',
          width: '60',
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'DNI - RUC',
          dataField: 'nume_iden',
          width: '100',
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Asesora',
          dataField: 'nomb_ases',
          width: '250',
          align: 'center',
        },
        {
          text: 'Teléfono',
          dataField: 'tele_ases',
          width: '150',
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Campaña',
          dataField: 'codi_camp',
          width: '100',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
        },
        {
          text: 'Documento',
          dataField: 'nume_docu',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'N',
        },
        {
          text: 'Valor Fact.',
          dataField: 'valo_docu',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
        },
        {
          text: 'Cuota 1',
          dataField: 'sald_docu_01',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          cellclassname: this.repo_come_sald_cart_clas,
        },
        {
          text: 'Fecha Venc.',
          dataField: 'fech_venc_01',
          width: '110',
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Cuota 2',
          dataField: 'sald_docu_02',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          cellclassname: this.repo_come_sald_cart_clas,
        },
        {
          text: 'Fecha Venc.',
          dataField: 'fech_venc_02',
          width: '110',
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Cuota 3',
          dataField: 'sald_docu_03',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          cellclassname: this.repo_come_sald_cart_clas,
        },
        {
          text: 'Fecha Venc.',
          dataField: 'fech_venc_03',
          width: '110',
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Cuota 4',
          dataField: 'sald_docu_04',
          width: '110',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
          cellclassname: this.repo_come_sald_cart_clas,
        },
        {
          text: 'Fecha Venc.',
          dataField: 'fech_venc_04',
          width: '110',
          align: 'center',
          cellsalign: 'center',
        },
        {
          text: 'Saldo a pagar',
          dataField: 'sald_docu_pago',
          width: '120',
          align: 'center',
          cellsalign: 'center',
          cellsformat: 'D2',
        },
        {
          text: 'fech venc 01',
          dataField: 'fech_venc_01_ocul',
          hidden: true,
        },
        {
          text: 'sald docu 01',
          dataField: 'sald_docu_01_ocul',
          hidden: true,
        },
        {
          text: 'fech venc 02',
          dataField: 'fech_venc_02_ocul',
          hidden: true,
        },
        {
          text: 'sald docu 02',
          dataField: 'sald_docu_02_ocul',
          hidden: true,
        },
        {
          text: 'fech venc 03',
          dataField: 'fech_venc_03_ocul',
          hidden: true,
        },
        {
          text: 'sald docu 03',
          dataField: 'sald_docu_03_ocul',
          hidden: true,
        },
        {
          text: 'fech venc 04',
          dataField: 'fech_venc_04_ocul',
          hidden: true,
        },
        {
          text: 'sald docu 04',
          dataField: 'sald_docu_04_ocul',
          hidden: true,
        },
      ]
      if (typeof this.$refs.repo_come_sald_cart_grid_glob !== 'undefined') {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.repo_come_sald_cart_grid_glob.height = this.height
        this.$refs.repo_come_sald_cart_grid_glob.columns = this.columnsGlobal
      }
    },
    repo_come_sald_cart_limp() {
      this.$refs.repo_come_sald_cart_grid_glob.clear()
      this.$refs.repo_come_sald_cart_grid_glob.clearselection()
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
            codi_prog: 'repo_come_sald_cart',
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
        const itemMainCampana = JSON.parse(localStorage.getItem('mainCampana'))
        let campActu = 0
        if (itemMainCampana.camp_actu.length > 0) {
          campActu = itemMainCampana.camp_actu[0].codi_camp
        }
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_sald_cart/sald_cart_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              camp_actu: campActu,
              codi_camp: this.seleccionCampana,
              codi_zona: this.seleccionZona,
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_sald_cart_grid_glob.updatebounddata('cells')
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
            url: `${store.state.app.webService}/sami_v1/repo_come_sald_cart/sald_cart_exce`,
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
    repo_come_sald_cart_clas(row, columnfield, value) {
      const dataRecord = this.$refs.repo_come_sald_cart_grid_glob.getrowdata(row)
      const codiCamp = dataRecord.codi_camp
      if (codiCamp !== '') {
        if (value === '0.00' || value === '0') {
          return 'text-white bg-success'
        } if (value === '') {
          return ''
        }
        return 'text-white bg-danger'
      }
      return ''
    },
  },
}
</script>
