<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="repo_come_gemm_gene()"
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
        @click="repo_come_gemm_limp()"
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
        @click="repo_come_gemm_gene()"
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
        @click="repo_come_gemm_exce()"
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
        @click="repo_come_gemm_limp()"
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
          <JqxGrid
            ref="repo_come_gemm_grid"
            :width="'100%'"
            :height="height"
            :columns="columns"
            :source="dataAdapter"
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
      codi_camp_1: 0,
      codi_camp_2: 0,
      codi_camp_3: 0,
      codi_camp_4: 0,
      codi_camp_5: 0,
      codi_camp_6: 0,
      // eslint-disable-next-line
      dataAdapter: new jqx.dataAdapter(this.source),
    }
  },
  beforeCreate() {
    if (window.innerHeight - 200 < 400) {
      this.height = '400px'
    } else {
      this.height = `${window.innerHeight - 200}px`
    }
    this.source = {
      localdata: [],
      datafields: [
        { name: 'codi_area', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'nume_iden', type: 'string' },
        { name: 'nomb_terc', type: 'string' },
        { name: 'codi_camp_1', type: 'string' },
        { name: 'codi_camp_2', type: 'string' },
        { name: 'codi_camp_3', type: 'string' },
        { name: 'codi_camp_4', type: 'string' },
        { name: 'codi_camp_5', type: 'string' },
        { name: 'codi_camp_6', type: 'string' },
        { name: 'tota_camp', type: 'string' },
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
    this.repo_come_gemm_visi()
  },
  created() {
    this.handleWindowResize()
    const userData = JSON.parse(localStorage.getItem('userData'))
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    const itemZona = JSON.parse(userData.zona)
    itemCampana = itemCampana.camp.slice(0, 19)
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
    async repo_come_gemm_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'repo_come_gemm',
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
    handleWindowResize() {
      let codiArea = ''
      let codiZona = ''
      let numeIden = ''
      let nombTerc = ''
      let camp1 = ''
      let camp2 = ''
      let camp3 = ''
      let camp4 = ''
      let camp5 = ''
      let camp6 = ''
      let totaCamp = ''

      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiArea = '20'
          codiZona = '20'
          numeIden = '20'
          nombTerc = '50'
          camp1 = '20'
          camp2 = '20'
          camp3 = '20'
          camp4 = '20'
          camp5 = '20'
          camp6 = '20'
          totaCamp = '20'
          break
        case 'sm':
          codiArea = '20'
          codiZona = '20'
          numeIden = '20'
          nombTerc = '50'
          camp1 = '20'
          camp2 = '20'
          camp3 = '20'
          camp4 = '20'
          camp5 = '20'
          camp6 = '20'
          totaCamp = '20'
          break
        case 'md':
          codiArea = '8'
          codiZona = '8'
          numeIden = '11'
          nombTerc = '40'
          camp1 = '11'
          camp2 = '11'
          camp3 = '11'
          camp4 = '11'
          camp5 = '11'
          camp6 = '11'
          totaCamp = '11'
          break
        default:
          codiArea = '8'
          codiZona = '8'
          numeIden = '11'
          nombTerc = '40'
          camp1 = '11'
          camp2 = '11'
          camp3 = '11'
          camp4 = '11'
          camp5 = '11'
          camp6 = '11'
          totaCamp = '11'
          break
      }
      this.columns = [
        {
          text: 'Area',
          dataField: 'codi_area',
          width: `${codiArea}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: `${codiZona}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'DNI - RUC',
          dataField: 'nume_iden',
          width: `${numeIden}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Nombre(s) y Apellido(s)',
          dataField: 'nomb_terc',
          width: `${nombTerc}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: this.codi_camp_1,
          dataField: 'codi_camp_1',
          width: `${camp1}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_gemm_pedi_tota_clas,
        },
        {
          text: this.codi_camp_2,
          dataField: 'codi_camp_2',
          width: `${camp2}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_gemm_pedi_tota_clas,
        },
        {
          text: this.codi_camp_3,
          dataField: 'codi_camp_3',
          width: `${camp3}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_gemm_pedi_tota_clas,
        },
        {
          text: this.codi_camp_4,
          dataField: 'codi_camp_4',
          width: `${camp4}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_gemm_pedi_tota_clas,
        },
        {
          text: this.codi_camp_5,
          dataField: 'codi_camp_5',
          width: `${camp5}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_gemm_pedi_tota_clas,
        },
        {
          text: this.codi_camp_6,
          dataField: 'codi_camp_6',
          width: `${camp6}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_gemm_pedi_tota_clas,
        },
        {
          text: 'Total',
          dataField: 'tota_camp',
          width: `${totaCamp}%`,
          cellsalign: 'center',
          align: 'center',
          cellclassname: this.repo_come_gemm_pedi_tota_clas,
        },
      ]
      if (
        typeof this.$refs.repo_come_gemm_grid !== 'undefined'
      ) {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.repo_come_gemm_grid.height = this.height
        this.$refs.repo_come_gemm_grid.columns = this.columns
      }
    },
    repo_come_gemm_limp() {
      this.codi_camp_1 = '0'
      this.codi_camp_2 = '0'
      this.codi_camp_3 = '0'
      this.codi_camp_4 = '0'
      this.codi_camp_5 = '0'
      this.codi_camp_6 = '0'
      this.handleWindowResize()
      // this.repo_come_gemm_inic()
    },
    async repo_come_gemm_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.repo_come_gemm_limp()
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
          this.codigoZona = this.seleccionZona
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/repo_come_gemm/gemm_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.seleccionCampana,
              codi_zona: this.seleccionZona,
            },
          })
          this.codi_camp_1 = await servicio.data.codi_camp_1
          this.codi_camp_2 = await servicio.data.codi_camp_2
          this.codi_camp_3 = await servicio.data.codi_camp_3
          this.codi_camp_4 = await servicio.data.codi_camp_4
          this.codi_camp_5 = await servicio.data.codi_camp_5
          this.codi_camp_6 = await servicio.data.codi_camp_6
          this.handleWindowResize()
          this.source.localdata = await servicio.data.data_pedi_tota
          this.source.datatype = 'json'
          this.$refs.repo_come_gemm_grid.updatebounddata(
            'cells',
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
      }
    },
    async repo_come_gemm_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      if (this.codigoZona === '') {
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
              text: 'Para exportar a excel debe de generar el reporte',
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
            url: `${store.state.app.webService}/sami_v1/repo_come_gemm/gemm_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_zona: this.codigoZona,
              lima_prov: this.limaProvincia,
              naci_adva: this.nacionalAdvance,
              nive_zona: this.nivelZona,
              data: this.$refs.repo_come_gemm_grid.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
              data_esta: this.$refs.repo_come_gemm_grid.getstate(),
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
