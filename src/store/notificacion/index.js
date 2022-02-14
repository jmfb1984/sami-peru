export default {
  namespaced: true,
  state: {
    dataNotificacion: [],
  },
  mutations: {
    UPDATE_NOTIFICACION(state, val) {
      state.dataNotificacion = []
      state.dataNotificacion = val
    },
    CLEAR_NOTIFICACION(state) {
      state.dataNotificacion = []
    },
  },
  actions: {},
}
