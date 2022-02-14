<template>
  <!-- Under maintenance-->
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
          Servicio en mantenimiento!
        </h2>

        <p class="mb-3">
          Disculpe las molestias, pero estamos realizando un mantenimiento en este momento.
        </p>

        <b-button
          variant="primary"
          class="mb-2 btn-sm-block"
          to="/pages/login"
        >
          <feather-icon
            icon="LogInIcon"
            class="mr-50 text-black"
          />
          <span class="text-black">Regresar Login</span>
        </b-button>

        <!-- img -->
        <b-img
          fluid
          :src="imgUrl"
          alt="Sami Mantenimiento"
        />
      </div>
    </div>
  </div>
<!-- / Under maintenance-->
</template>

<script>
/* eslint-disable global-require */
import {
  BLink, BButton, BImg,
} from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'

export default {
  components: {
    BLink,
    BButton,
    BImg,
    VuexyLogo,
  },
  data() {
    return {
      downImg: require('@/assets/images/pages/under-maintenance.svg'),
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require('@/assets/images/pages/under-maintenance-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
