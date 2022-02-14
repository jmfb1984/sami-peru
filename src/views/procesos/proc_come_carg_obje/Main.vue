<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="proc_come_carg_obje_gene()"
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
        variant="secondary"
        block
        class="mb-1"
        @click="proc_come_carg_obje_arch()"
      >
        <feather-icon
          icon="UploadIcon"
          class="mr-50"
        />
        <span class="">
          Archivo
        </span>
      </b-button>
      <b-button
        variant="danger"
        block
        @click="proc_come_carg_obje_limp()"
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
        @click="proc_come_carg_obje_gene()"
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
        @click="proc_come_carg_obje_exce()"
      >
        <feather-icon
          icon="DownloadIcon"
          class="mr-50"
        />
        Excel
      </b-button>
      <b-button
        variant="secondary"
        class="ml-1"
        @click="proc_come_carg_obje_arch()"
      >
        <feather-icon
          icon="UploadIcon"
          class="mr-50"
        />
        <span class="">
          Archivo
        </span>
      </b-button>
      <b-button
        variant="danger"
        class="ml-1"
        @click="proc_come_carg_obje_limp()"
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
            ref="proc_come_carg_obje_grid_glob"
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
    <vs-popup
      title="Cargar Objetivo"
      :active.sync="popupActive"
      :background-color-popup="clasePopUp"
      @close="proc_come_carg_obje_cerr()"
    >
      <b-row>
        <b-col>
          <b-card class="mb-0">
            <b-row>
              <b-col>
                <div class="w-full text-center">
                  <h5>
                    Archivo txt delimintado por coma(,) con el siguiente formato:
                  </h5>
                  <small>
                    Campaña, Zona, Cargo, Nro Pedido Ingreso, Nro Pedido Retención, % Actividad, Observación
                  </small>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <div class="w-full text-center mt-1">
                  <input
                    ref="uploadInput"
                    type="file"
                    class="hidden"
                    accept=".txt"
                    @change="handleFileUpload()"
                  >
                  <b-button
                    variant="primary"
                    class="ml-1"
                    @click="$refs.uploadInput.click()"
                  >
                    <feather-icon
                      icon="UploadIcon"
                      class="mr-50 text-black"
                    />
                    <span class="text-black">
                      Subir Archivo
                    </span>
                  </b-button>
                </div>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </vs-popup>
  </section>
</template>
<script>
import {
  BRow, BCol, BButton, BCard,
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
    JqxGrid,
    selectCampana,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      dataCampana: [],
      seleccionCampana: [],
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      file: null,
      popupActive: false,
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
        { name: 'codi_camp', type: 'string' },
        { name: 'codi_cort', type: 'string' },
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'nomb_carg', type: 'string' },
        { name: 'desc_nive', type: 'string' },
        { name: 'cant_ingr', type: 'number' },
        { name: 'cant_rete', type: 'number' },
        { name: 'nume_acti', type: 'number' },
        { name: 'cant_tota', type: 'number' },
        { name: 'obse_obje', type: 'string' },
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
    this.proc_come_carg_obje_visi()
  },
  created() {
    this.handleWindowResize()
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    itemCampana = itemCampana.camp_sigu.slice(1, 7)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))
    this.seleccionCampana = itemCampana[0].codi_camp
  },
  methods: {
    setCampana(value) {
      this.seleccionCampana = value
    },
    handleWindowResize() {
      let codiCortGlob = ''
      let codiAreaGlob = ''
      let codiZonaGlob = ''
      let nombCargGlob = ''
      let descNiveGlob = ''
      let cantIngrGlob = ''
      let cantReteGlob = ''
      let numeActiGlob = ''
      let cantTotaGlob = ''
      let obseObjeGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiCortGlob = '20'
          codiAreaGlob = '20'
          codiZonaGlob = '20'
          nombCargGlob = '20'
          descNiveGlob = '50'
          cantIngrGlob = '20'
          cantReteGlob = '20'
          numeActiGlob = '20'
          cantTotaGlob = '20'
          obseObjeGlob = '20'
          break
        case 'sm':
          codiCortGlob = '20'
          codiAreaGlob = '20'
          codiZonaGlob = '20'
          nombCargGlob = '20'
          descNiveGlob = '50'
          cantIngrGlob = '20'
          cantReteGlob = '20'
          numeActiGlob = '20'
          cantTotaGlob = '20'
          obseObjeGlob = '20'
          break
        case 'md':
          codiCortGlob = '15'
          codiAreaGlob = '15'
          codiZonaGlob = '15'
          nombCargGlob = '15'
          descNiveGlob = '40'
          cantIngrGlob = '15'
          cantReteGlob = '15'
          numeActiGlob = '15'
          cantTotaGlob = '15'
          obseObjeGlob = '30'
          break
        default:
          codiCortGlob = '5'
          codiAreaGlob = '5'
          codiZonaGlob = '10'
          nombCargGlob = '10'
          descNiveGlob = '15'
          cantIngrGlob = '10'
          cantReteGlob = '10'
          numeActiGlob = '10'
          cantTotaGlob = '10'
          obseObjeGlob = '15'
          break
      }
      this.columnsGlobal = [
        {
          text: 'codi_camp',
          dataField: 'codi_camp',
          hidden: true,
        },
        {
          text: 'Corte',
          dataField: 'codi_cort',
          width: `${codiCortGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Región',
          dataField: 'codi_area',
          width: `${codiAreaGlob}%`,
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
          text: 'Cargo',
          dataField: 'nomb_carg',
          width: `${nombCargGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Nivel',
          dataField: 'desc_nive',
          width: `${descNiveGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Ingresos',
          dataField: 'cant_ingr',
          width: `${cantIngrGlob}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'N',
        },
        {
          text: 'Retención',
          dataField: 'cant_rete',
          width: `${cantReteGlob}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'N',
        },
        {
          text: 'Actividad',
          dataField: 'nume_acti',
          width: `${numeActiGlob}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'P2',
        },
        {
          text: 'Pedidos Totales',
          dataField: 'cant_tota',
          width: `${cantTotaGlob}%`,
          cellsalign: 'center',
          align: 'center',
          cellsformat: 'N',
        },
        {
          text: 'Observación',
          dataField: 'obse_obje',
          width: `${obseObjeGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
      ]
      if (
        typeof this.$refs.proc_come_carg_obje_grid_glob !== 'undefined'
      ) {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.proc_come_carg_obje_grid_glob.height = this.height
        this.$refs.proc_come_carg_obje_grid_glob.columns = this.columnsGlobal
      }
    },
    async handleFileUpload() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      // eslint-disable-next-line
      this.file = this.$refs.uploadInput.files[0]
      const data = new FormData()
      data.append('fileToUpload', this.file)
      data.append('codi_usua', this.$session.get('codigoUsuario'))
      data.append('codi_acce', this.userData.codigoAcceso)
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_carg_obje/carg_obje_arch`,
          timeout: `${1000 * store.state.app.timeout}`,
          data,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        this.file = null
        this.$refs.uploadInput.value = null
        document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
        this.popupActive = false
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'CheckCircleIcon',
              variant: 'success',
              text: 'Registro de objetivos satisfactorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
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
    proc_come_carg_obje_arch() {
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
      this.popupActive = true
    },
    proc_come_carg_obje_limp() {
      this.$refs.proc_come_carg_obje_grid_glob.clear()
      this.$refs.proc_come_carg_obje_grid_glob.clearselection()
      this.file = null
    },
    async proc_come_carg_obje_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'proc_come_carg_obje',
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
    async proc_come_carg_obje_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.proc_come_carg_obje_limp()
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
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_carg_obje/carg_obje_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.seleccionCampana,
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.proc_come_carg_obje_grid_glob.updatebounddata('cells')
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
    async proc_come_carg_obje_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.proc_come_carg_obje_grid_glob.getdatainformation()
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
            url: `${store.state.app.webService}/sami_v1/proc_come_carg_obje/carg_obje_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.proc_come_carg_obje_grid_glob.exportdata(
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
    proc_come_carg_obje_cerr() {
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
    },
  },
}
</script>
<style lang="scss"></style>
