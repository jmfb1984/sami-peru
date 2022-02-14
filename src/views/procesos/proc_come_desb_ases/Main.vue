<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="proc_come_desb_ases_gene()"
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
        block
        class="mb-1"
        @click="proc_come_desb_ases_desb()"
      >
        <feather-icon
          icon="UserCheckIcon"
          class="mr-50"
        />
        <span class="">
          Desbloquear
        </span>
      </b-button>
      <b-button
        variant="danger"
        block
        @click="proc_come_desb_ases_limp()"
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
        @click="proc_come_desb_ases_gene()"
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
        class="ml-1"
        @click="proc_come_desb_ases_desb()"
      >
        <feather-icon
          icon="UserCheckIcon"
          class="mr-50"
        />
        <span class="">
          Desbloquear
        </span>
      </b-button>
      <b-button
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="proc_come_desb_ases_exce()"
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
        @click="proc_come_desb_ases_limp()"
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
            ref="proc_come_desb_ases_grid_glob"
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
            :selectionmode="'checkbox'"
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
  BRow,
  BCol,
  BButton,
  BCard,
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
        { name: 'nume_docu', type: 'string' },
        { name: 'nomb_terc', type: 'string' },
        { name: 'apel_terc', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'tele_terc', type: 'string' },
        { name: 'celu_terc', type: 'string' },
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
    this.proc_come_desb_ases_visi()
  },
  created() {
    this.handleWindowResize()
  },
  methods: {
    handleWindowResize() {
      let numeDocuGlob = ''
      let nombTercGlob = ''
      let apelTercGlob = ''
      let codiZonaGlob = ''
      let codiSectGlob = ''
      let teleTercGlob = ''
      let celuTercGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          numeDocuGlob = '20'
          nombTercGlob = '30'
          apelTercGlob = '30'
          codiZonaGlob = '20'
          codiSectGlob = '20'
          teleTercGlob = '20'
          celuTercGlob = '20'
          break
        case 'sm':
          numeDocuGlob = '20'
          nombTercGlob = '30'
          apelTercGlob = '30'
          codiZonaGlob = '20'
          codiSectGlob = '20'
          teleTercGlob = '20'
          celuTercGlob = '20'
          break
        case 'md':
          numeDocuGlob = '20'
          nombTercGlob = '30'
          apelTercGlob = '30'
          codiZonaGlob = '20'
          codiSectGlob = '20'
          teleTercGlob = '20'
          celuTercGlob = '20'
          break
        default:
          numeDocuGlob = '8'
          nombTercGlob = '30'
          apelTercGlob = '30'
          codiZonaGlob = '8'
          codiSectGlob = '8'
          teleTercGlob = '8'
          celuTercGlob = '8'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Nro Docu.',
          dataField: 'nume_docu',
          width: `${numeDocuGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Nombre(s)',
          dataField: 'nomb_terc',
          width: `${nombTercGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Apellido(s)',
          dataField: 'apel_terc',
          width: `${apelTercGlob}%`,
          cellsalign: 'left',
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
          text: 'Telefono',
          dataField: 'tele_terc',
          width: `${teleTercGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Celular',
          dataField: 'celu_terc',
          width: `${celuTercGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
      ]
      if (typeof this.$refs.proc_come_desb_ases_grid_glob !== 'undefined') {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.proc_come_desb_ases_grid_glob.columns = this.columnsGlobal
        this.$refs.proc_come_desb_ases_grid_glob.height = this.height
      }
    },
    proc_come_desb_ases_limp() {
      this.$refs.proc_come_desb_ases_grid_glob.clear()
      this.$refs.proc_come_desb_ases_grid_glob.clearselection()
    },
    async proc_come_desb_ases_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'proc_come_desb_ases',
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
    async proc_come_desb_ases_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.proc_come_desb_ases_limp()
      try {
        const userData = JSON.parse(localStorage.getItem('userData'))
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_desb_ases/desb_ases_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_zona: JSON.parse(userData.zonaUsuario),
            codi_area: JSON.parse(userData.areaUsuario),
          },
        })
        this.sourceGlobal.localdata = await servicio.data.data_glob
        this.sourceGlobal.datatype = 'json'
        this.$refs.proc_come_desb_ases_grid_glob.updatebounddata('cells')
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
    async proc_come_desb_ases_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.proc_come_desb_ases_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/proc_come_desb_ases/desb_ases_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.proc_come_desb_ases_grid_glob.exportdata(
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
    async proc_come_desb_ases_desb() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const rowindexes = this.$refs.proc_come_desb_ases_grid_glob.getselectedrowindexes()
      if (rowindexes.length === 0) {
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
              text: 'Debe de seleccionar asesora para desbloquear.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        let dataNumeIden = ''
        let i = 0
        let dataRecord = null
        let numeIden = ''
        for (i = 0; i < rowindexes.length; i += 1) {
          dataRecord = this.$refs.proc_come_desb_ases_grid_glob.getrowdata(
            rowindexes[i],
          )
          numeIden = dataRecord.nume_docu
          dataNumeIden = `${dataNumeIden}'${numeIden}',`
        }
        dataNumeIden = dataNumeIden.slice(0, -1)
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_desb_ases/desb_ases_apro`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden: dataNumeIden,
            },
          })
          let data = await servicio.data.data_glob
          data = data.toLowerCase()
          data = data.charAt(0).toUpperCase() + data.slice(1)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'CheckCircleIcon',
                variant: 'success',
                text: data,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          setTimeout(() => {
            this.$vs.loading.close()
            this.proc_come_desb_ases_gene()
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
    proc_come_desb_ases_cerr() {
      document.body.style.overflow = 'visible'
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
    },
  },
}
</script>
