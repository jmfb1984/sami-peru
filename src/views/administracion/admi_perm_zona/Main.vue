<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="admi_perm_zona_gene()"
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
        @click="admi_perm_zona_apro()"
      >
        <feather-icon
          icon="UserCheckIcon"
          class="mr-50"
        />
        <span class="">
          Aprobar
        </span>
      </b-button>
      <b-button
        variant="danger"
        block
        @click="admi_perm_zona_limp()"
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
        @click="admi_perm_zona_gene()"
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
        @click="admi_perm_zona_apro()"
      >
        <feather-icon
          icon="UserCheckIcon"
          class="mr-50"
        />
        <span class="">
          Aprobar
        </span>
      </b-button>
      <b-button
        variant="danger"
        class="ml-1"
        @click="admi_perm_zona_limp()"
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
            ref="admi_perm_zona_grid_glob"
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
  beforeCreate() {
    if (window.innerHeight - 200 < 400) {
      this.height = '400px'
    } else {
      this.height = `${window.innerHeight - 200}px`
    }
    this.sourceGlobal = {
      localdata: [],
      datafields: [
        { name: 'cons_fila', type: 'string' },
        { name: 'codi_prog', type: 'string' },
        { name: 'nomb_prog', type: 'string' },
        { name: 'ruta_prog', type: 'string' },
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
    this.admi_perm_zona_gene()
  },
  created() {
    this.handleWindowResize()
  },
  methods: {
    handleWindowResize() {
      let consFilaGlob = ''
      let codiProgGlob = ''
      let nombProgGlob = ''
      let rutaProgGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          consFilaGlob = '10'
          codiProgGlob = '30'
          nombProgGlob = '30'
          rutaProgGlob = '30'
          break
        case 'sm':
          consFilaGlob = '10'
          codiProgGlob = '30'
          nombProgGlob = '30'
          rutaProgGlob = '30'
          break
        case 'md':
          consFilaGlob = '10'
          codiProgGlob = '30'
          nombProgGlob = '30'
          rutaProgGlob = '30'
          break
        default:
          consFilaGlob = '10'
          codiProgGlob = '30'
          nombProgGlob = '30'
          rutaProgGlob = '30'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Fila',
          dataField: 'cons_fila',
          width: `${consFilaGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Código',
          dataField: 'codi_prog',
          width: `${codiProgGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Programa',
          dataField: 'nomb_prog',
          width: `${nombProgGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Ruta',
          dataField: 'ruta_prog',
          width: `${rutaProgGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
      ]
      if (typeof this.$refs.admi_perm_zona_grid_glob !== 'undefined') {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.admi_perm_zona_grid_glob.columns = this.columnsGlobal
        this.$refs.admi_perm_zona_grid_glob.height = this.height
      }
    },
    admi_perm_zona_limp() {
      this.$refs.admi_perm_zona_grid_glob.clear()
      this.$refs.admi_perm_zona_grid_glob.clearselection()
    },
    async admi_perm_zona_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.admi_perm_zona_limp()
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/admi_perm_zona/perm_zona_gene`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        this.sourceGlobal.localdata = await servicio.data.data_glob
        this.sourceGlobal.datatype = 'json'
        this.$refs.admi_perm_zona_grid_glob.updatebounddata('cells')
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
    async admi_perm_zona_apro() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const rowindexes = this.$refs.admi_perm_zona_grid_glob.getselectedrowindexes()
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
              text: 'No a seleccionado ningun programa',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        let dataCodiProg = ''
        let i = 0
        let dataRecord = null
        let codiProg = ''
        for (i = 0; i < rowindexes.length; i += 1) {
          dataRecord = this.$refs.admi_perm_zona_grid_glob.getrowdata(
            rowindexes[i],
          )
          codiProg = dataRecord.codi_prog
          dataCodiProg = `${dataCodiProg}'${codiProg}',`
        }
        dataCodiProg = dataCodiProg.slice(0, -1)
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/admi_perm_zona/perm_zona_regi`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_prog: dataCodiProg,
            },
          })
          let data = await servicio.data.data
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
            this.$refs.admi_perm_zona_grid_glob.clearselection()
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
