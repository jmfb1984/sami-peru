<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_refe_gene()"
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
        @click="repo_come_refe_limp()"
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
        @click="repo_come_refe_gene()"
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
        @click="repo_come_refe_exce()"
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
        @click="repo_come_refe_limp()"
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
            ref="repo_come_refe_grid_glob"
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
        { name: 'codi_camp', type: 'number' },
        { name: 'codi_cort', type: 'number' },
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'nume_iden_padr', type: 'string' },
        { name: 'nomb_terc_padr', type: 'string' },
        { name: 'codi_zona_hijo', type: 'string' },
        { name: 'codi_sect_hijo', type: 'string' },
        { name: 'nume_iden_hijo', type: 'string' },
        { name: 'nomb_terc_hijo', type: 'string' },
        { name: 'opci_pre1', type: 'number' },
        { name: 'opci_pre2', type: 'number' },
        { name: 'opci_pre3', type: 'number' },
        { name: 'opci_pre4', type: 'number' },
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
    this.repo_come_refe_visi()
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
    setCampana(value) {
      this.seleccionCampana = value
    },
    setZona(value) {
      this.seleccionZona = value
    },
    handleWindowResize() {
      let codiCampGlob = ''
      let codiCortGlob = ''
      let codiAreaGlob = ''
      let codiZonaHijoGlob = ''
      let codiSectHijoGlob = ''
      let numeIdenHijoGlob = ''
      let nombTercHijoGlob = ''
      let codiZonaGlob = ''
      let codiSectGlob = ''
      let numeIdenPadrGlob = ''
      let nombTercPadrGlob = ''
      let opciPre1Glob = ''
      let opciPre2Glob = ''
      let opciPre3Glob = ''
      let opciPre4Glob = ''

      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiCampGlob = '20'
          codiCortGlob = '20'
          codiAreaGlob = '20'
          codiZonaHijoGlob = '25'
          codiSectHijoGlob = '25'
          numeIdenHijoGlob = '25'
          nombTercHijoGlob = '70'
          codiZonaGlob = '25'
          codiSectGlob = '25'
          numeIdenPadrGlob = '25'
          nombTercPadrGlob = '70'
          opciPre1Glob = '20'
          opciPre2Glob = '20'
          opciPre3Glob = '20'
          opciPre4Glob = '20'
          break
        case 'sm':
          codiCampGlob = '20'
          codiCortGlob = '20'
          codiAreaGlob = '20'
          codiZonaHijoGlob = '25'
          codiSectHijoGlob = '25'
          numeIdenHijoGlob = '25'
          nombTercHijoGlob = '70'
          codiZonaGlob = '25'
          codiSectGlob = '25'
          numeIdenPadrGlob = '25'
          nombTercPadrGlob = '70'
          opciPre1Glob = '20'
          opciPre2Glob = '20'
          opciPre3Glob = '20'
          opciPre4Glob = '20'
          break
        case 'md':
          codiCampGlob = '10'
          codiCortGlob = '10'
          codiAreaGlob = '10'
          codiZonaHijoGlob = '20'
          codiSectHijoGlob = '20'
          numeIdenHijoGlob = '20'
          nombTercHijoGlob = '50'
          codiZonaGlob = '20'
          codiSectGlob = '20'
          numeIdenPadrGlob = '20'
          nombTercPadrGlob = '50'
          opciPre1Glob = '15'
          opciPre2Glob = '15'
          opciPre3Glob = '15'
          opciPre4Glob = '15'
          break
        default:
          codiCampGlob = '5'
          codiCortGlob = '4'
          codiAreaGlob = '4'
          codiZonaHijoGlob = '10'
          codiSectHijoGlob = '10'
          numeIdenHijoGlob = '10'
          nombTercHijoGlob = '30'
          codiZonaGlob = '10'
          codiSectGlob = '10'
          numeIdenPadrGlob = '10'
          nombTercPadrGlob = '30'
          opciPre1Glob = '8'
          opciPre2Glob = '8'
          opciPre3Glob = '8'
          opciPre4Glob = '8'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Campaña',
          dataField: 'codi_camp',
          width: `${codiCampGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
        },
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
          text: 'Zona Referido',
          dataField: 'codi_zona_hijo',
          width: `${codiZonaHijoGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Sector Referido',
          dataField: 'codi_sect_hijo',
          width: `${codiSectHijoGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'DNI - RUC Referido',
          dataField: 'nume_iden_hijo',
          width: `${numeIdenHijoGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Nombre(s) y Apellido(s) Referido',
          dataField: 'nomb_terc_hijo',
          width: `${nombTercHijoGlob}%`,
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
        {
          text: 'Zona Referente',
          dataField: 'codi_zona',
          width: `${codiZonaGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
        },
        {
          text: 'Sector Referente',
          dataField: 'codi_sect',
          width: `${codiSectGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
          filtertype: 'checkedlist',
        },
        {
          text: 'DNI - RUC Referente',
          dataField: 'nume_iden_padr',
          width: `${numeIdenPadrGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Nombre(s) y Apellido(s) Referente',
          dataField: 'nomb_terc_padr',
          width: `${nombTercPadrGlob}%`,
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
        {
          text: '1er Pedido',
          dataField: 'opci_pre1',
          width: `${opciPre1Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: '2do Pedido',
          dataField: 'opci_pre2',
          width: `${opciPre2Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: '3er Pedido',
          dataField: 'opci_pre3',
          width: `${opciPre3Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: '4to Pedido',
          dataField: 'opci_pre4',
          width: `${opciPre4Glob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
      ]

      if (typeof this.$refs.repo_come_refe_grid_glob !== 'undefined') {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.repo_come_refe_grid_glob.height = this.height
        this.$refs.repo_come_refe_grid_glob.columns = this.columnsGlobal
      }
    },
    repo_come_refe_limp() {
      this.$refs.repo_come_refe_grid_glob.clear()
      this.$refs.repo_come_refe_grid_glob.clearselection()
    },
    async repo_come_refe_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_refe',
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
    async repo_come_refe_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_refe_limp()
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
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_refe/refe_gene`,
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
          this.$refs.repo_come_refe_grid_glob.updatebounddata('cells')
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
    async repo_come_refe_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_refe_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/repo_come_refe/refe_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_refe_grid_glob.exportdata(
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
