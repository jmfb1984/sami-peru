<template>
  <section id="mainSorteoAniversario">
    <b-card>
      <div class="d-flex justify-content-between align-items-center">
        <div class="truncate">
          <span :class="claseSpan">Opciones</span>
          <h4 class="mb-25 mt-50 font-weight-bolder">
            <b-link
              :class="claseLink"
            >
              Sorteo Aniversario
            </b-link>
          </h4>
        </div>
        <b-avatar
          variant="light-primary"
          size="45"
        >
          <feather-icon
            size="21"
            icon="PackageIcon"
          />
        </b-avatar>
      </div>
      <div class="mt-50">
        <b-progress
          value="100"
          max="100"
          height="6px"
          variant="primary"
        />
      </div>
    </b-card>
  </section>
</template>
<script>
import {
  BCard,
  BAvatar,
  BProgress,
  BLink,
} from 'bootstrap-vue'
// import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
// import axios from '@axios'
import store from '@/store'

export default {
  components: {
    BCard,
    BAvatar,
    BProgress,
    BLink,
  },
  props: {
    consTerc: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
    }
  },
  computed: {
    claseSpan() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'text-white'
      }
      return ''
    },
    claseCargando() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'text-center text-primary my-2'
      }
      return 'text-center my-2'
    },
    claseModal() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'modal-primary'
      }
      return ''
    },
    claseLink() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return 'text-secondary'
      }
      return 'text-dark'
    },
  },
  methods: {
  },
}
</script>
