<template>
  <b-nav-item-dropdown
    ref="notificationDropdown"
    class="dropdown-notification mr-25"
    menu-class="dropdown-menu-media"
    right
  >
    <template #button-content>
      <feather-icon
        :badge="notifications.length"
        badge-classes="bg-danger"
        class="text-body"
        icon="BellIcon"
        size="21"
      />
    </template>

    <!-- Header -->
    <li class="dropdown-menu-header">
      <div class="dropdown-header d-flex">
        <h4 class="notification-title mb-0 mr-auto">
          Notificacion(es)
        </h4>
        <b-badge
          pill
          :variant="claseSkin"
        >
          {{ notifications.length }} Nuevas
        </b-badge>
      </div>
    </li>

    <!-- Notifications -->
    <vue-perfect-scrollbar
      :settings="perfectScrollbarSettings"
      class="scrollable-container media-list scroll-area"
      tagname="li"
    >
      <h5
        v-if="notifications.length === 0"
        :class="claseMensaje"
      >
        No tiene notificaciones.
      </h5>
      <!-- Account Notification -->
      <b-link
        v-for="notification in notifications"
        :key="notification.subtitle"
        @click="verNotificacion(notification.to)"
      >
        <b-media>
          <template #aside>
            <b-avatar
              size="32"
              :src="notification.avatar"
              :text="notification.avatar"
              :variant="notification.type"
            />
          </template>
          <p class="media-heading">
            <span class="font-weight-bolder">
              {{ notification.title }}
            </span>
          </p>
          <small class="notification-text">{{ notification.subtitle }}</small>
        </b-media>
      </b-link>
    </vue-perfect-scrollbar>
  </b-nav-item-dropdown>
</template>

<script>
import {
  BNavItemDropdown, BBadge, BMedia, BLink, BAvatar,
} from 'bootstrap-vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import Ripple from 'vue-ripple-directive'
import axios from 'axios'

export default {
  components: {
    BNavItemDropdown,
    BBadge,
    BMedia,
    BLink,
    BAvatar,
    VuePerfectScrollbar,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      perfectScrollbarSettings: {
        maxScrollbarLength: 60,
        wheelPropagation: false,
      },
      userData: JSON.parse(localStorage.getItem('userData')),
      interval: null,
    }
  },
  computed: {
    claseSkin() {
      if (this.$store.state.appConfig.layout.skin === 'dark') {
        return 'light-primary'
      }
      return 'light-danger'
    },
    claseMensaje() {
      if (this.$store.state.appConfig.layout.skin === 'dark') {
        return 'p-2 text-primary'
      }
      return 'p-2 text-danger'
    },
    notifications() {
      return this.$store.state.notificacion.dataNotificacion
    },
  },
  created() {
    if (this.userData.tipoUsuario === 'REG' || this.userData.tipoUsuario === 'ZON') {
      this.mainNotificacion()
      this.interval = setInterval(this.mainNotificacion, 120000)
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    mainNotificacion() {
      axios({
        method: 'post',
        url: `${this.$store.state.app.webService}/sami_v1/dato/sami_noti`,
        timeout: `${1000 * this.$store.state.app.timeout}`,
        data: {
          codi_usua: this.$session.get('codigoUsuario'),
          codi_acce: this.userData.codigoAcceso,
          codi_zona: JSON.parse(this.userData.zona),
          tipo_usua: this.userData.tipoUsuario,
        },
        headers: { 'Content-Type': 'text/plain' },
      }).then(response => {
        this.$store.commit('notificacion/UPDATE_NOTIFICACION', response.data.notifications)
      })
    },
    verNotificacion(to) {
      // this.$refs.notificationDropdown.visible = false
      this.$router.push({ name: to }).catch(() => {})
    },
  },
}
</script>

<style>

</style>
