<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="proc_come_fech_proy_gene()"
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
        @click="proc_come_fech_proy_limp()"
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
        @click="proc_come_fech_proy_gene()"
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
        @click="proc_come_fech_proy_exce()"
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
        @click="proc_come_fech_proy_limp()"
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
          :multiple-region="true"
          @campana="setCampana"
          @region="setRegion"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="proc_come_fech_proy_grid_glob"
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
            :editable="true"
            :scrollmode="'logical'"
            @cellendedit="proc_come_fech_proy_grid_glob_edit($event)"
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
import selectCampanaRegion from '@/views/components/FiltroCampanaRegion.vue'
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

const date = new Date()
let dia = date.getDate()
let mes = date.getMonth() + 1
const ano = date.getFullYear()

if (dia > 0 && dia < 10) {
  dia = `0${dia}`
}
if (mes > 0 && mes < 10) {
  mes = `0${mes}`
}
const fechActu = `${mes}/${dia}/${ano}`

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
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_cort', type: 'string' },
        { name: 'nomb_vend', type: 'string' },
        { name: 'fech_repr', type: 'string' },
        { name: 'fech_proy', type: 'string' },
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
    this.proc_come_fech_proy_visi()
  },
  created() {
    this.handleWindowResize()
    const userData = JSON.parse(localStorage.getItem('userData'))
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    const itemRegion = JSON.parse(userData.area)
    itemCampana = itemCampana.camp.slice(0, 6)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))
    itemRegion.forEach(element => this.dataRegion.push(element.codi_area))
    this.seleccionCampana = itemCampana[0].codi_camp
  },
  methods: {
    setCampana(value) {
      this.seleccionCampana = value
    },
    setRegion(value) {
      this.seleccionRegion = value
    },
    handleWindowResize() {
      let codiCortGlob = ''
      let codiZonaGlob = ''
      let nombVendGlob = ''
      let fechProyGlob = ''
      let fechReprGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiCortGlob = '20'
          codiZonaGlob = '20'
          nombVendGlob = '70'
          fechProyGlob = '25'
          fechReprGlob = '25'
          break
        case 'sm':
          codiCortGlob = '20'
          codiZonaGlob = '20'
          nombVendGlob = '70'
          fechProyGlob = '25'
          fechReprGlob = '25'
          break
        case 'md':
          codiCortGlob = '15'
          codiZonaGlob = '15'
          nombVendGlob = '70'
          fechProyGlob = '20'
          fechReprGlob = '20'
          break
        default:
          codiCortGlob = '8'
          codiZonaGlob = '7'
          nombVendGlob = '55'
          fechProyGlob = '15'
          fechReprGlob = '15'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Fila',
          dataField: 'codi_camp',
          hidden: true,
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
          text: 'Zona',
          dataField: 'codi_zona',
          width: `${codiZonaGlob}%`,
          align: 'center',
          cellsalign: 'center',
          editable: false,
        },
        {
          text: 'Gerente Zonal',
          dataField: 'nomb_vend',
          width: `${nombVendGlob}%`,
          align: 'center',
          cellsalign: 'left',
          editable: false,
        },
        {
          text: 'Proyección',
          dataField: 'fech_proy',
          width: `${fechProyGlob}%`,
          align: 'center',
          cellsalign: 'center',
          columntype: 'datetimeinput',
          cellsformat: 'MM/dd/yyyy',
          initeditor(row, cellvalue, editor) {
            editor.jqxDateTimeInput({
              formatString: 'MM/dd/yyyy',
              min: fechActu,
            })
          },
        },
        {
          text: 'Reproyección',
          dataField: 'fech_repr',
          width: `${fechReprGlob}%`,
          align: 'center',
          cellsalign: 'center',
          columntype: 'datetimeinput',
          cellsformat: 'MM/dd/yyyy',
          initeditor(row, cellvalue, editor) {
            editor.jqxDateTimeInput({
              formatString: 'MM/dd/yyyy',
              min: fechActu,
            })
          },
        },
      ]

      if (typeof this.$refs.proc_come_fech_proy_grid_glob !== 'undefined') {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.proc_come_fech_proy_grid_glob.height = this.height
        this.$refs.proc_come_fech_proy_grid_glob.columns = this.columnsGlobal
      }
    },
    proc_come_fech_proy_grid_glob_edit(event) {
      const { args } = event
      const columnDataField = args.datafield
      const rowIndex = args.rowindex
      const dataFech = args.value
      if (dataFech !== '') {
        const data = new Date(dataFech)
        let month = `${data.getMonth() + 1}`
        let day = `${data.getDate()}`
        const year = data.getFullYear()
        if (month.length < 2) month = `0${month}`
        if (day.length < 2) day = `0${day}`
        const fecha = `${month}/${day}/${year}`
        this.proc_come_fech_proy_fech(rowIndex, fecha, columnDataField)
      }
    },
    async proc_come_fech_proy_fech(rowIndex, dataFech, dataColu) {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const codiCamp = this.$refs.proc_come_fech_proy_grid_glob.getcellvaluebyid(
        rowIndex,
        'codi_camp',
      )
      const codiZona = this.$refs.proc_come_fech_proy_grid_glob.getcellvaluebyid(
        rowIndex,
        'codi_zona',
      )
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_fech_proy/fech_proy_fech`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_camp: codiCamp,
            codi_zona: codiZona,
            data_fech: dataFech,
            data_colu: dataColu,
          },
        })
        this.$refs.proc_come_fech_proy_grid_glob.clearselection()
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'CheckCircleIcon',
              variant: 'success',
              text: 'Registro Satisfactorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )

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
    },
    proc_come_fech_proy_limp() {
      this.$refs.proc_come_fech_proy_grid_glob.clear()
      this.$refs.proc_come_fech_proy_grid_glob.clearselection()
    },
    async proc_come_fech_proy_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'proc_come_fech_proy',
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
    async proc_come_fech_proy_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfo = this.$refs.proc_come_fech_proy_grid_glob.getdatainformation()
      const dataRows = dataInfo.rowscount
      if (dataRows === 0) {
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
              text: 'No tiene información para exportar detalle zona pedido',
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
            url: `${store.state.app.webService}/sami_v1/proc_come_fech_proy/fech_proy_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.proc_come_fech_proy_grid_glob.exportdata(
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
    async proc_come_fech_proy_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.proc_come_fech_proy_limp()
      if (this.seleccionCampana === null || this.seleccionRegion === 0) {
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
      } else if (
        this.seleccionRegion === null
          || this.seleccionRegion.length === 0
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
              text: 'Campo región es obligatorio.',
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
            url: `${store.state.app.webService}/sami_v1/proc_come_fech_proy/fech_proy_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_area: this.seleccionRegion,
              codi_camp: this.seleccionCampana,
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.proc_come_fech_proy_grid_glob.updatebounddata('cells')
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
  },
}
</script>
<style lang="scss"></style>
