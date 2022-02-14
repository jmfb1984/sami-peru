import axios from 'axios'
import store from '@/store'

export default {
  async validarAccesos() {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const mainSami = localStorage.getItem('mainSami')
    let codigoAcceso = -1
    if (!userData) {
      /* Login */
      codigoAcceso = 1
    } else if (mainSami) {
      /* Error Sami */
      codigoAcceso = 2
    } else {
      try {
        const dato = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/usua_acce`,
          data: {
            codi_usua: userData.codigoUsuario,
            codi_acce: userData.codigoAcceso,
          },
          headers: {
            'Content-Type': 'text/plain',
          },
        })
        const mensaje = await dato.data.mensaje
        if (mensaje === 0) {
          /* Error Acceso */
          codigoAcceso = 3
        } else {
          codigoAcceso = 0
          localStorage.setItem('mainSami', 1)
        }
      } catch (e) {
        codigoAcceso = -1
      }
    }
    return codigoAcceso
  },
}
