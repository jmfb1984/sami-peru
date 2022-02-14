<template>
  <div />
</template>

<script>
import DatabaseService from '@/Database.service'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import 'animate.css'

export default {
  components: {},
  data() {
    return {
      version: '',
      database: null,
      suscripcionInsertEntrada: undefined,
      suscripcionDeleteEntrada: undefined,
      suscripcionMensajeUsuario: undefined,
      suscripcionMensajeTodo: undefined,
      suscripcionPrueba: undefined,
      suscripcionVersion: undefined,
      userData: JSON.parse(localStorage.getItem('userData')),
      permisoNotificacionUsuario: null,
      mensajeActualizacion: null,
    }
  },
  async created() {
    const database = new DatabaseService()
    this.database = database.getInstance()
  },
  async mounted() {
    await this.handleNotificacionUsuario()
    await this.handleUsuario()
    await this.handleVersion()
  },
  destroyed() {
    this.unsubscribe()
  },
  methods: {
    async handleNotificacionUsuario() {
      const { data: usuaProg } = await this.database
        .from('usua_prog')
        .select('codi_usua')
        .eq('codi_usua', this.userData.codigoUsuario)
        .eq('codi_prog', 'noti_usua_acce')
        .eq('acti_esta', 'ACT')
        .eq('codi_pais', 'PER')
      if (Object.keys(usuaProg).length > 0) {
        this.permisoNotificacionUsuario = '1'
      } else {
        this.permisoNotificacionUsuario = null
      }
    },
    async handleUsuario() {
      const itemArea = JSON.parse(this.userData.areaUsuario)
      if (itemArea.length === 0) {
        this.suscripcionInsertEntrada = this.database
          .from('usua_entr')
          .on('INSERT', message => {
            if (message.new) {
              const nombUsua = message.new.nomb_usua
              const codiUsua = message.new.codi_usua
              const codiZona = message.new.codi_zona
              const codiArea = message.new.codi_area
              const tipoUsua = message.new.tipo_usua
              const codiPais = message.new.codi_pais
              if (
                this.userData.codigoUsuario !== codiUsua
                && this.permisoNotificacionUsuario === '1'
                && codiPais === 'PER'
              ) {
                let mensaje = ''
                if (tipoUsua === 'REG') {
                  mensaje = `El usuario ${nombUsua} de la región ${codiArea} ingreso a SAMI`
                } else if (tipoUsua === 'ZON' && codiZona !== '') {
                  mensaje = `El usuario ${nombUsua} de la zona ${codiZona} ingreso a SAMI`
                } else {
                  mensaje = `El usuario ${nombUsua} ingreso a SAMI`
                }
                this.$toast(
                  {
                    component: ToastificationContent,
                    props: {
                      title: 'Notificación',
                      icon: 'LogInIcon',
                      variant: 'success',
                      text: mensaje,
                    },
                  },
                  {
                    position: 'bottom-right',
                    timeout: 2000,
                  },
                )
              }
            }
          }).subscribe()
        this.suscripcionDeleteEntrada = this.database
          .from('usua_sali')
          .on('INSERT', message => {
            if (message.new) {
              const nombUsua = message.new.nomb_usua
              const codiUsua = message.new.codi_usua
              const codiZona = message.new.codi_zona
              const codiArea = message.new.codi_area
              const tipoUsua = message.new.tipo_usua
              const codiPais = message.new.codi_pais
              if (
                this.userData.codigoUsuario !== codiUsua
                && this.permisoNotificacionUsuario === '1'
                && codiPais === 'PER'
              ) {
                let mensaje = ''
                if (tipoUsua === 'REG') {
                  mensaje = `El usuario ${nombUsua} de la región ${codiArea} salio de SAMI`
                } else if (tipoUsua === 'ZON' && codiZona !== '') {
                  mensaje = `El usuario ${nombUsua} de la zona ${codiZona} salio de SAMI`
                } else {
                  mensaje = `El usuario ${nombUsua} salio de SAMI`
                }
                this.$toast(
                  {
                    component: ToastificationContent,
                    props: {
                      title: 'Notificación',
                      icon: 'LogOutIcon',
                      variant: 'danger',
                      text: mensaje,
                    },
                  },
                  {
                    position: 'bottom-right',
                    timeout: 2000,
                  },
                )
              } else if (
                codiUsua === this.userData.codigoUsuario
                && codiPais === 'PER'
              ) {
                this.$router.push({ name: 'login' })
              }
            }
          }).subscribe()
      } else {
        const codiArea = itemArea[0].codi_area
        this.suscripcionInsertEntrada = this.database
          .from(`usua_entr:codi_area=eq.${codiArea}`)
          .on('INSERT', message => {
            if (message.new) {
              const nombUsua = message.new.nomb_usua
              const codiUsua = message.new.codi_usua
              const codiZona = message.new.codi_zona
              const tipoUsua = message.new.tipo_usua
              const codiPais = message.new.codi_pais
              if (
                this.userData.codigoUsuario !== codiUsua
                && this.permisoNotificacionUsuario === '1'
                && codiPais === 'PER'
              ) {
                let mensaje = ''
                if (tipoUsua === 'ZON' && codiZona !== '') {
                  mensaje = `El usuario ${nombUsua} de la zona ${codiZona} ingreso a SAMI`
                } else {
                  mensaje = `El usuario ${nombUsua} ingreso a SAMI`
                }
                this.$toast(
                  {
                    component: ToastificationContent,
                    props: {
                      title: 'Notificación',
                      icon: 'LogInIcon',
                      variant: 'success',
                      text: mensaje,
                    },
                  },
                  {
                    position: 'bottom-right',
                    timeout: 2000,
                  },
                )
              }
            }
          }).subscribe()
        this.suscripcionDeleteEntrada = this.database
          .from(`usua_sali:codi_area=eq.${codiArea}`)
          .on('INSERT', message => {
            if (message.new) {
              const nombUsua = message.new.nomb_usua
              const codiUsua = message.new.codi_usua
              const codiZona = message.new.codi_zona
              const tipoUsua = message.new.tipo_usua
              const codiPais = message.new.codi_pais
              if (
                this.userData.codigoUsuario !== codiUsua
                && this.permisoNotificacionUsuario === '1'
                && codiPais === 'PER'
              ) {
                let mensaje = ''
                if (tipoUsua === 'ZON' && codiZona !== '') {
                  mensaje = `El usuario ${nombUsua} de la zona ${codiZona} salio de SAMI`
                } else {
                  mensaje = `El usuario ${nombUsua} salio de SAMI`
                }
                this.$toast(
                  {
                    component: ToastificationContent,
                    props: {
                      title: 'Notificación',
                      icon: 'LogOutIcon',
                      variant: 'danger',
                      text: mensaje,
                    },
                  },
                  {
                    position: 'bottom-right',
                    timeout: 2000,
                  },
                )
              } else if (
                codiUsua === this.userData.codigoUsuario
                && codiPais === 'PER'
              ) {
                this.$router.push({ name: 'login' })
              }
            }
          })
          .subscribe()
      }

      this.suscripcionAcceso = this.database
        .from(`usua_prog:codi_usua=eq.${this.userData.codigoUsuario}`)
        .on('UPDATE', this.handleNotificacionUsuario)
        .on('INSERT', this.handleNotificacionUsuario)
        .subscribe()

      this.suscripcionMensajeUsuario = this.database
        .from(`usua_mens:usua_fina=eq.${this.userData.codigoUsuario}`)
        .on('INSERT', message => {
          if (message.new) {
            const usuario = message.new.nomb_usua
            const mensaje = message.new.usua_mens
            const codiPais = message.new.codi_pais
            if (codiPais === 'PER') {
              this.$swal({
                title: `Mensaje de ${usuario}`,
                text: mensaje,
                confirmButtonText: '<span class="text-black">Aceptar</span>',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                showClass: {
                  popup: 'animate__animated animate__fadeInDown',
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp',
                },
                buttonsStyling: false,
              })
            }
          }
        })
        .subscribe()

      this.suscripcionMensajeTodo = this.database
        .from('usua_mens:usua_fina=eq.todo')
        .on('INSERT', message => {
          if (message.new) {
            const usuario = message.new.nomb_usua
            const mensaje = message.new.usua_mens
            const codiPais = message.new.codi_pais
            if (codiPais === 'PER') {
              this.$swal({
                title: `Mensaje de ${usuario}`,
                text: mensaje,
                confirmButtonText: '<span class="text-black">Aceptar</span>',
                customClass: {
                  confirmButton: 'btn btn-primary',
                },
                showClass: {
                  popup: 'animate__animated animate__fadeInDown',
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp',
                },
                buttonsStyling: false,
              })
            }
          }
        })
        .subscribe()
    },
    async handleVersion() {
      if (localStorage.getItem('versionSami') === null) {
        this.mensajeVersion()
      } else {
        const { data } = await this.database
          .from('vers_sami')
          .select('numero, mensaje')
          .eq('pais', 'PER')
        if (data.length > 0) {
          this.version = data[0].numero
          this.mensajeActualizacion = data[0].mensaje
          const numeVers = localStorage.getItem('versionSami')
          if (numeVers !== this.version) {
            setTimeout(() => {
              this.mensajeVersion()
            }, 5000)
          }
        }
        this.suscripcionVersion = this.database
          .from('vers_sami')
          .on('UPDATE', message => {
            if (message.new) {
              this.version = message.new.numero
              const codiPais = message.new.pais
              if (codiPais === 'PER' && this.version !== localStorage.getItem('versionSami')) {
                this.mensajeVersion()
              }
            }
          })
          .subscribe()
      }
    },
    mensajeVersion() {
      let mensajeTexto = ''
      if (this.mensajeActualizacion !== null) {
        mensajeTexto = `SAMI tiene una nueva actualización, ${this.mensajeActualizacion}`
      } else {
        mensajeTexto = 'SAMI tiene una nueva actualización !!'
      }
      this.$swal({
        title: 'Actualización SAMI',
        text: mensajeTexto,
        icon: 'warning',
        confirmButtonText: 'Si, actualizar SAMI!',
        customClass: {
          confirmButton: 'btn btn-success',
        },
        showClass: {
          popup: 'animate__animated animate__bounceIn',
        },
        buttonsStyling: false,
      }).then(result => {
        if (result.isConfirmed) {
          localStorage.setItem('versionSami', this.version)
          // window.location.reload(true)
          // eslint-disable-next-line no-self-assign
          window.location.href = window.location.href
        }
      })
    },
    unsubscribe() {
      this.database.removeSubscription(this.suscripcionInsertEntrada)
      this.database.removeSubscription(this.suscripcionDeleteEntrada)
      this.database.removeSubscription(this.suscripcionMensajeUsuario)
      this.database.removeSubscription(this.suscripcionMensajeTodo)
      this.database.removeSubscription(this.suscripcionVersion)
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-sweetalert.scss';
</style>
