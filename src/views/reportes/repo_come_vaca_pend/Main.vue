<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="danger"
        block
        @click="repo_come_vaca_pend_limp()"
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
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="repo_come_vaca_pend_exce()"
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
        @click="repo_come_vaca_pend_limp()"
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
          <JqxGrid
            ref="repo_come_vaca_pend_grid_glob"
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
            :showcolumnlines="true"
            :showcolumnheaderlines="true"
            :editable="false"
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
    JqxGrid,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
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
    if (window.innerHeight - 200 < 400) {
      this.height = '400px'
    } else {
      this.height = `${window.innerHeight - 200}px`
    }
    this.sourceGlobal = {
      localdata: [],
      datafields: [
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'nomb_vend', type: 'string' },
        { name: 'fech_ingr', type: 'string' },
        { name: 'diaa_pend', type: 'number' },
        { name: 'nume_prio', type: 'number' },
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
    this.repo_come_vaca_pend_visi()
    setTimeout(() => {
      this.repo_come_vaca_pend_gene()
    }, 500)
  },
  created() {
    this.handleWindowResize()
  },
  methods: {
    handleWindowResize() {
      let codiAreaGlob = ''
      let codiZonaGlob = ''
      let numeIdenGlob = ''
      let nombVendGlob = ''
      let fechIngrGlob = ''
      let diaaPendGlob = ''
      let numePrioGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiAreaGlob = '20'
          codiZonaGlob = '20'
          numeIdenGlob = '20'
          nombVendGlob = '50'
          fechIngrGlob = '20'
          diaaPendGlob = '20'
          numePrioGlob = '20'
          break
        case 'sm':
          codiAreaGlob = '15'
          codiZonaGlob = '15'
          numeIdenGlob = '15'
          nombVendGlob = '45'
          fechIngrGlob = '15'
          diaaPendGlob = '15'
          numePrioGlob = '15'
          break
        case 'md':
          codiAreaGlob = '10'
          codiZonaGlob = '10'
          numeIdenGlob = '10'
          nombVendGlob = '40'
          fechIngrGlob = '10'
          diaaPendGlob = '10'
          numePrioGlob = '10'
          break
        default:
          codiAreaGlob = '10'
          codiZonaGlob = '10'
          numeIdenGlob = '10'
          nombVendGlob = '40'
          fechIngrGlob = '10'
          diaaPendGlob = '10'
          numePrioGlob = '10'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Area',
          dataField: 'codi_area',
          width: `${codiAreaGlob}%`,
          cellsalign: 'center',
          align: 'center',
          filtertype: 'checkedlist',
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: `${codiZonaGlob}%`,
          cellsalign: 'center',
          align: 'center',
          filtertype: 'checkedlist',
        },
        {
          text: 'DNI - RUC',
          dataField: 'nume_iden',
          width: `${numeIdenGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Gerente zonal',
          dataField: 'nomb_vend',
          width: `${nombVendGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Fecha ingreso',
          dataField: 'fech_ingr',
          width: `${fechIngrGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Pendiente',
          dataField: 'diaa_pend',
          width: `${diaaPendGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Prioridad',
          dataField: 'nume_prio',
          width: `${numePrioGlob}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_vaca_pend_esta_clas,
        },
      ]
      if (
        typeof this.$refs.repo_come_vaca_pend_grid_glob !== 'undefined'
      ) {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.repo_come_vaca_pend_grid_glob.height = this.height
        this.$refs.repo_come_vaca_pend_grid_glob.columns = this.columnsGlobal
      }
    },
    repo_come_vaca_pend_limp() {
      // this.$refs.repo_come_vaca_pend_grid_glob.clear()
      this.$refs.repo_come_vaca_pend_grid_glob.clearselection()
      this.$refs.repo_come_vaca_pend_grid_glob.clearfilters()
    },
    async repo_come_vaca_pend_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_vaca_pend',
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
    async repo_come_vaca_pend_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_vaca_pend_limp(0)
      if (this.annoVaca === null || this.annoVaca === '') {
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
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_vaca_pend/vaca_pend_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_area: JSON.parse(this.userData.areaUsuario),
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.repo_come_vaca_pend_grid_glob.updatebounddata('cells')
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
    repo_come_vaca_pend_esta_clas(row) {
      const dataRecord = this.$refs.repo_come_vaca_pend_grid_glob.getrowdata(row)
      // eslint-disable-next-line radix
      const numePrio = parseInt(dataRecord.nume_prio)
      // eslint-disable-next-line radix
      const diaaPend = parseInt(dataRecord.diaa_pend)
      let color = 'text-white bg-success'
      if (numePrio === 0 && diaaPend === 0) {
        color = 'text-white bg-success'
      } else if ((numePrio >= 0 && numePrio <= 30) && diaaPend > 0) {
        color = 'text-white bg-danger'
      } else if ((numePrio >= 31 && numePrio <= 90) && diaaPend > 0) {
        color = 'text-white bg-warning'
      }
      return color
    },
    async repo_come_vaca_pend_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.repo_come_vaca_pend_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/repo_come_vaca_pend/vaca_pend_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.repo_come_vaca_pend_grid_glob.exportdata(
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
