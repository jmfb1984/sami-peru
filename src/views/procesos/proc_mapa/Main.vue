<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        class="mb-1"
        block
        @click="proc_mapa_gene()"
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
        @click="proc_mapa_limp()"
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
        @click="proc_mapa_gene()"
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
        class="ml-1"
        @click="proc_mapa_limp()"
      >
        <feather-icon
          icon="FileIcon"
          class="mr-50"
        />
        Limpiar
      </b-button>
    </div>
    <b-row>
      <b-col cols="12">
        <b-card>
          <b-row>
            <b-col
              md="1"
              xs="12"
              class="mb-1 mb-md-0"
            >
              <span class="d-flex mt-50">Zona</span>
            </b-col>
            <b-col
              md="3"
              xs="12"
              class="mb-1 mb-md-0"
            >
              <b-form-select
                v-model="seleccionZona"
                :options="dataZona"
                @input="proc_mapa_inic()"
              />
            </b-col>
            <b-col
              md="1"
              xs="12"
              class="mb-1 mb-md-0"
            >
              <span class="d-flex mt-50">Sector</span>
            </b-col>
            <b-col
              md="3"
              xs="12"
              class="mb-1 mb-md-0"
            >
              <b-form-select
                ref="refSector"
                v-model="seleccionSector"
                :options="dataSector"
              />
            </b-col>
            <b-col
              md="1"
              xs="12"
              class="mb-1 mb-md-0"
            >
              <span class="d-flex mt-50">Estado</span>
            </b-col>
            <b-col
              md="3"
              xs="12"
              class="mb-1 mb-md-0"
            >
              <b-form-select
                ref="refEstado"
                v-model="seleccionEstado"
                :options="dataEstado"
              />
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <b-row>
            <b-col cols="12">
              <b-card no-body>
                <div id="mapa" />
                <div
                  id="geocoder"
                  class="geocoder"
                />
              </b-card>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>
<script>

import {
  BRow,
  BCol,
  BCard,
  BButton,
  BFormSelect,
} from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import axios from '@axios'
import store from '@/store'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BFormSelect,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      dataZona: [],
      seleccionZona: [],
      dataSector: [
        { value: null, text: 'Seleccionar', disabled: true },
      ],
      seleccionSector: null,
      dataEstado: [],
      seleccionEstado: [],
      publicPath: process.env.BASE_URL,
      center: [0, 0], // starting position [lng, lat]
      style: '',
      zoom: 0,
      map: {},
      marker: {},
      geocoder: {},
      estadoMapa: true,
    }
  },
  beforeCreate() {
  },
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  mounted() {
    this.proc_mapa_visi()
    setTimeout(() => {
      this.proc_mapa_inic()
    }, 1000)
  },
  created() {
    const itemZona = JSON.parse(this.userData.zona)
    itemZona.forEach(element => this.dataZona.push(element.codi_zona))
    this.seleccionZona = itemZona[0].codi_zona
    const itemEstado = [
      { nomb_esta: 'Consecutivas' },
      { nomb_esta: 'Incorporacion' },
      { nomb_esta: 'Peg21' },
      { nomb_esta: 'Peg42' },
      { nomb_esta: 'Peg63' },
      { nomb_esta: 'Posible reincorporacion' },
      { nomb_esta: 'Posible reingreso' },
      { nomb_esta: 'Reincorporacion' },
      { nomb_esta: 'Reingreso' },
      { nomb_esta: 'Ret. Peg63' },
      { nomb_esta: 'Ret. Peg42' },
      { nomb_esta: 'Ret. Peg21' },
      { nomb_esta: 'Sin pedido' },
    ]
    itemEstado.forEach(element => this.dataEstado.push(element.nomb_esta))
    this.seleccionEstado = itemEstado[0].nomb_esta
  },
  methods: {
    createMap() {
      document.getElementById('mapa').innerHTML = ''
      this.map = new mapboxgl.Map({
        accessToken: 'pk.eyJ1IjoiZHVwcmVlYXp6b3J0aSIsImEiOiJjazFxZ2p1a3QwMTZ1M2hxZ3BuN2l4OTZrIn0.Loh1w0sgnR3g-O-3oXWZMA',
        container: 'mapa',
        style: this.style,
        center: this.center,
        zoom: this.zoom,
      })
      if (this.estadoMapa) {
        this.geocoder = new MapboxGeocoder({
          accessToken: 'pk.eyJ1IjoiZHVwcmVlYXp6b3J0aSIsImEiOiJjazFxZ2p1a3QwMTZ1M2hxZ3BuN2l4OTZrIn0.Loh1w0sgnR3g-O-3oXWZMA',
          mapboxgl,
          countries: 'pe',
          reverseGeocode: true,
          placeholder: 'Buscar',
        })
        document.getElementById('geocoder').innerHTML = ''
        document.getElementById('geocoder').appendChild(this.geocoder.onAdd(this.map))
        this.map.addControl(new mapboxgl.FullscreenControl())
      }
    },
    async proc_mapa_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'proc_mapa',
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
    async proc_mapa_inic() {
      this.estadoMapa = true
      this.dataSector = [
        { value: null, text: 'Seleccionar', disabled: true },
      ]
      this.seleccionSector = null
      if (this.seleccionZona == null || this.seleccionZona.length === 0) {
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'Campo zona es obligatorio.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        this.$vs.loading({
          color: $themeColors.primary,
        })
        try {
          this.mapa = {}
          this.geocoder = {}
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_mapa/mapa_inic`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_zona: this.seleccionZona,
            },
          })
          const dataMapa = await servicio.data.data_glob
          const dato = await servicio.data.data_sect
          this.style = dataMapa.nomb_mapa
          this.center = [dataMapa.coor_long, dataMapa.coor_lati]
          this.zoom = 11.5
          dato.forEach(element => this.dataSector.push(element.codi_sect))
          this.createMap()
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
        } catch (error) {
          this.estadoMapa = false
          this.style = 'mapbox://styles/mapbox/streets-v11'
          this.center = [-76.04544304892492, -9.161596196221359] // starting position [lng, lat]
          this.zoom = 3.9
          this.createMap()
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
    async proc_mapa_gene() {
      if (this.estadoMapa === false) {
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'Zona no tiene mapa configurado',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else if (this.seleccionZona == null || this.seleccionZona.length === 0) {
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'Campo zona es obligatorio.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else if (this.seleccionEstado == null || this.seleccionEstado.length === 0) {
        this.$toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: 'Campo estado es obligatorio.',
          },
        }, {
          position: 'bottom-right',
          timeout: 8000,
        })
      } else {
        this.$vs.loading({
          color: $themeColors.primary,
        })
        try {
          this.createMap()
          let campActu = 0
          let codiSect = ''
          if (this.seleccionSector !== null) {
            codiSect = this.seleccionSector
          }
          const itemMainCampana = JSON.parse(localStorage.getItem('mainCampana'))
          if (itemMainCampana.camp_actu.length > 0) {
            campActu = itemMainCampana.camp_actu[0].codi_camp
          }
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_mapa/mapa_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              camp_actu: campActu,
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_zona: this.seleccionZona,
              codi_sect: codiSect,
              codi_esta: this.seleccionEstado,
            },
          })
          const dato = await servicio.data.data_glob
          dato.forEach(e => {
            const html = `<h5 class="text-uppercase mapboxgl-titulo">${e.nomb_terc} ${e.apel_terc}</h5>
                      <span class="mapboxgl-titulo">Sector: </span> <span class="font-weight-light">${e.codi_sect}</span><br>
                      <span class="mapboxgl-titulo">Documento de identidad: </span> <span class="font-weight-light" id="nume_iden">${e.nume_iden}</span>
                        <span class="oculto" id="cons_terc">${e.cons_terc}</span>
                        <span class="oculto" id="codi_zona">${e.codi_zona}</span>
                        <span class="oculto" id="cx">${e.coor_long}</span>
                        <span class="oculto" id="cy">${e.coor_lati}</span>
                        <br>
                      <span class="mapboxgl-titulo">Distrito: </span> <span class="font-weight-light">${e.nomb_barr}</span><br>
                      <span class="mapboxgl-titulo">Dirección: </span> <span class="font-weight-light" id="dire_terc">${e.dire_terc}</span><br>
                      <span class="mapboxgl-titulo">Telefono: </span> <span class="font-weight-light">${e.tele_ter1} ${e.tele_ter2}</span><br>
                      <span class="mapboxgl-titulo">Status: </span> <span class="font-weight-light">${e.tipo_clie}</span><br>
                      <span class="mapboxgl-titulo">Saldo: </span> <span class="font-weight-light">${e.sald_docu}</span><br>
                      <span class="mapboxgl-titulo">Camp. Ingr: </span> <span class="font-weight-light">${e.camp_ingr}</span><br>
                      <span class="mapboxgl-titulo">Ulti. Camp: </span> <span class="font-weight-light">${e.ulti_camp}</span><br>
                      <span class="mapboxgl-titulo">Cumpleaños: </span> <span class="font-weight-light">${e.fech_naci}</span><br>
                      <span class="mapboxgl-titulo">Estado visita: </span> <span class="font-weight-light">${e.esta_visi}</span><br>
                      <div class="text-center">
                        <button class="btn btn-relief-success my-1 btn-sm" id="btnPopUp${e.cons_terc}">
                          <span class="align-middle">Programar visita</span>
                        </button>
                      </div>
                      `
            const popup = new mapboxgl.Popup({ offset: [20, 0], closeButton: false, closeOnClick: true }).setHTML(html)
            popup.on('open', () => {
              const elem = document.getElementById(`btnPopUp${e.cons_terc}`)
              if (typeof elem !== 'undefined' && elem !== null) {
                const elemNumeIden = document.getElementById('nume_iden')
                const elemConsTerc = document.getElementById('cons_terc')
                const elemCodiZona = document.getElementById('codi_zona')
                const elemDireTerc = document.getElementById('dire_terc')
                const elemCy = document.getElementById('cy')
                const elemCx = document.getElementById('cx')
                if (typeof elemNumeIden !== 'undefined' && elemNumeIden !== null && typeof elemConsTerc !== 'undefined' && elemConsTerc !== null && typeof elemCodiZona !== 'undefined' && elemCodiZona !== null && typeof elemDireTerc !== 'undefined' && elemDireTerc !== null && typeof elemCy !== 'undefined' && elemCy !== null && typeof elemCx !== 'undefined' && elemCx !== null) {
                  elem.addEventListener('click', () => {
                    const numeIden = elemNumeIden.innerHTML
                    const consTerc = elemConsTerc.innerHTML
                    const codiZona = elemCodiZona.innerHTML
                    const direTerc = elemDireTerc.innerHTML
                    const cx = elemCx.innerHTML
                    const cy = elemCy.innerHTML
                    this.proc_mapa_cita(consTerc, numeIden, codiZona, direTerc, cx, cy)
                    popup.remove()
                  })
                }
              }
            })
            const el = document.createElement('div')
            el.id = 'marker'
            this.marker = new mapboxgl.Marker(el)
              .setLngLat([e.coor_long, e.coor_lati])
              .setPopup(popup)
              .addTo(this.map)
          })
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
        } catch (error) {
          // console.log(error)
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
    proc_mapa_limp() {
      const itemZona = JSON.parse(this.userData.zona)
      this.seleccionZona = itemZona[0].codi_zona
      this.seleccionEstado = 'Consecutivas'
      this.$nextTick(() => {
        this.proc_mapa_inic()
      })
    },
    async proc_mapa_cita(consTerc, numeIden, codiZona, direTerc, cx, cy) {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_mapa/mapa_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            cons_terc: consTerc,
            nume_iden: numeIden,
            codi_zona: codiZona,
            dire_terc: direTerc,
            desc_orig: this.userData.tipoUsuario,
            dire_refe: '',
            cy,
            cx,
          },
        })
        let mensaje = ''
        mensaje = await servicio.data.message
        mensaje = mensaje.toLowerCase()
        mensaje = mensaje.charAt(0).toUpperCase() + mensaje.slice(1)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'CheckCircleIcon',
              variant: 'success',
              text: mensaje,
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
        setTimeout(() => {
          this.$vs.loading.close()
          this.proc_mapa_gene()
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
    },
  },
}

</script>
<style lang='scss'>
.geocoder {
position: absolute;
z-index: 1;
width: 50%;
left: 0%;
margin-left: 1%;
top: 10px;
}
.mapboxgl-ctrl-geocoder {
min-width: 100%;
}
  .oculto {
    display:none;
  }
  .mapboxgl-ctrl.mapboxgl-ctrl-attrib {
    display:none;
  }
  #mapa {
    height: 600px;
    width: 100%;
    margin: 0 auto;
  }
  #marker {
    background-image: url('~@/assets/images/icons/chart.png');
    background-size: cover;
    width: 20px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
  }
  .mapboxgl-popup {
    max-width: 500px;
  }
  .mapboxgl-titulo {
    font-weight: 700;
  }
</style>
