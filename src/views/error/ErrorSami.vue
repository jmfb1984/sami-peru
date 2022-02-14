<template>
  <div class="misc-wrapper">
    <b-link class="brand-logo">
      <vuexy-logo />
      <h2 class="brand-text text-primary ml-1">
        Sami
      </h2>
    </b-link>

    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          Acceso incorrecto!!
        </h2>
        <p class="mb-2">
          Sami ya se encuentra abierto en otra pestaña del navegador, se recomienda utilizar el sistema en una sola pestaña o en un unico navegador.
        </p>
        <b-button
          variant="primary"
          class="mb-1 btn-sm-block"
          to="/pages/login"
        >
          <feather-icon
            icon="LogInIcon"
            class="mr-50 text-black"
          />
          <span class="text-black">Regresar Login</span>
        </b-button>
        <b-img
          fluid
          :src="imgUrl"
          alt="Código Acceso"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { BLink, BImg, BButton } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'

export default {
  components: {
    BLink, BImg, BButton, VuexyLogo,
  },
  data() {
    return {
      downImg: require('@/assets/images/pages/not-authorized.svg'),
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require('@/assets/images/pages/not-authorized-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
  },
  methods: {
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
