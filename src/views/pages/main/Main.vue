<template>
  <section id="main">
    <main-venta v-if="progMain === 'main_vent'" />
    <main-pais v-if="progMain === 'main_pais'" />
  </section>
</template>
<script>
import mainVenta from './MainVenta.vue'
import mainPais from './MainPais.vue'

export default {
  components: {
    mainVenta,
    mainPais,
  },
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
    }
  },
  computed: {
    progMain() {
      if (this.userData.programaMain) {
        return this.userData.programaMain
      }
      return 'main_vent'
    },
  },
  methods: {
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
