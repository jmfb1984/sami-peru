<template>
  <b-img
    :src="appLogoImage"
    alt="logo"
  />
</template>

<script>
/* eslint-disable global-require */
import {
  BImg,
} from 'bootstrap-vue'

export default {
  components: {
    BImg,
  },
  data() {
    return {
      appLogoImage: require('@/assets/images/logo/logo.png'),
    }
  },
}
</script>
