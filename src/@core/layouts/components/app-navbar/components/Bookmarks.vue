<template>
  <b-navbar-nav class="nav">
    <b-nav-item
      v-for="(bookmark, index) in bookmarks"
      :id="`bookmark-${index}`"
      :key="index"
      :to="bookmark.route"
    >
      <feather-icon
        :icon="bookmark.icon"
        size="21"
      />
      <b-tooltip
        triggers="hover"
        :target="`bookmark-${index}`"
        :title="bookmark.title"
        :delay="{ show: 1000, hide: 50 }"
      />
    </b-nav-item>
    <b-nav-item-dropdown
      link-classes="bookmark-star"
      lazy
      @hidden="resetsearchQuery"
    >
      <feather-icon
        slot="button-content"
        icon="StarIcon"
        size="21"
        class="text-primary"
      />

      <!-- Dropdown Content -->
      <li style="min-width:400px">
        <div class="p-1">
          <b-form-input
            id="boomark-search-input"
            v-model="searchQuery"
            placeholder="Buscar Módulo ..."
            autofocus
          />
        </div>
        <vue-perfect-scrollbar
          :settings="perfectScrollbarSettings"
          class="search-list search-list-bookmark scroll-area"
          :class="{'show': filteredData.pages && filteredData.pages.length }"
          tagname="ul"
        >

          <b-dropdown-item
            v-for="(suggestion, index) in filteredData.pages || bookmarks"
            :key="index"
            class="suggestion-group-suggestion cursor-pointer"
            link-class="d-flex align-items-center"
            :to="suggestion.route"
            @mouseenter="currentSelected = index"
          >
            <feather-icon
              :icon="suggestion.icon"
              class="mr-75"
              size="18"
            />
            <span class="align-middle">{{ suggestion.title }}</span>
            <feather-icon
              icon="StarIcon"
              class="ml-auto"
              size="16"
              :class="{'text-primary': suggestion.isBookmarked}"
              @click.stop.prevent="toggleBookmarked(suggestion)"
            />

          </b-dropdown-item>
          <b-dropdown-item
            v-show="!(filteredData.pages && filteredData.pages.length) && searchQuery"
            disabled
          >
            Módulo no encontrado.
          </b-dropdown-item></vue-perfect-scrollbar>
      </li>
    </b-nav-item-dropdown>

  </b-navbar-nav>
</template>

<script>
import {
  BNavbarNav, BNavItem, BTooltip, BNavItemDropdown, BFormInput, BDropdownItem,
} from 'bootstrap-vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import useAutoSuggest from '@core/components/app-auto-suggest/useAutoSuggest'
import { ref, watch } from '@vue/composition-api'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { useToast } from 'vue-toastification/composition'

export default {
  components: {
    BNavbarNav,
    BNavItem,
    BTooltip,
    BNavItemDropdown,
    BFormInput,
    VuePerfectScrollbar,
    BDropdownItem,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  setup() {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const searchAndBookmarkDataPages = ref(JSON.parse(userData.modulosUsuario).pages)
    const bookmarks = ref(JSON.parse(userData.modulosUsuario).pages.data.filter(page => page.isBookmarked))
    const currentSelected = ref(-1)
    const toast = useToast()
    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
    }

    const {
      searchQuery,
      resetsearchQuery,
      filteredData,
    } = useAutoSuggest({ data: { pages: searchAndBookmarkDataPages.value }, searchLimit: 6 })

    watch(filteredData, val => {
      currentSelected.value = val.pages && !val.pages.length ? -1 : 0
    })

    const suggestionSelected = () => {
      const suggestion = filteredData.value.pages[currentSelected.value]
      router.push(suggestion.route).catch(() => {})
      resetsearchQuery()
    }

    const toggleBookmarked = async item => {
      const itemModduloUsuario = JSON.parse(userData.modulosUsuario)
      const indexModuloUsuario = itemModduloUsuario.pages.data.findIndex(i => i.route.name === item.route.name)

      // Find Index of item/page in bookmarks' array
      const pageIndexInBookmarks = bookmarks.value.findIndex(i => i.route === item.route)
      let estado = ''
      let mensaje = ''
      // If index is > -1 => Item is bookmarked => Remove item from bookmarks array using index
      // Else => Item is not bookmarked => Add item to bookmarks' array
      if (pageIndexInBookmarks > -1) {
        estado = 'D'
        mensaje = 'Se actualizó como no favorito el modulo.'
        itemModduloUsuario.pages.data[indexModuloUsuario].isBookmarked = false
        bookmarks.value[pageIndexInBookmarks].isBookmarked = false
        bookmarks.value.splice(pageIndexInBookmarks, 1)
      } else {
        estado = 'I'
        mensaje = 'Se actualizó como favorito el módulo.'
        itemModduloUsuario.pages.data[indexModuloUsuario].isBookmarked = true
        bookmarks.value.push(item)
        bookmarks.value[bookmarks.value.length - 1].isBookmarked = true
      }
      userData.modulosUsuario = JSON.stringify(itemModduloUsuario)
      localStorage.setItem('userData', JSON.stringify(userData))
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/usua_favo`,
          data: {
            codi_usua: userData.codigoUsuario,
            codi_acce: userData.codigoAcceso,
            codi_prog: item.route.name,
            esta_prog: estado,
          },
          headers: {
            'Content-Type': 'text/plain',
          },
        })
        toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'CheckSquareIcon',
            variant: 'success',
            text: mensaje,
          },
        }, {
          position: 'bottom-right',
        })
      } catch (error) {
        if (pageIndexInBookmarks > -1) {
          itemModduloUsuario.pages.data[indexModuloUsuario].isBookmarked = true
          bookmarks.value.push(item)
          bookmarks.value[bookmarks.value.length - 1].isBookmarked = true
        } else {
          itemModduloUsuario.pages.data[indexModuloUsuario].isBookmarked = false
          bookmarks.value[pageIndexInBookmarks].isBookmarked = false
          bookmarks.value.splice(pageIndexInBookmarks, 1)
        }
        userData.modulosUsuario = JSON.stringify(itemModduloUsuario)
        localStorage.setItem('userData', JSON.stringify(userData))
        toast({
          component: ToastificationContent,
          props: {
            title: 'Notificación',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
            text: error,
          },
        }, {
          position: 'bottom-right',
        })
      }
    }
    return {
      bookmarks,
      perfectScrollbarSettings,
      currentSelected,
      suggestionSelected,
      toggleBookmarked,

      // AutoSuggest
      searchQuery,
      resetsearchQuery,
      filteredData,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';

ul
{
  list-style: none;
  padding: 0;
  margin: 0;
}
p {
  margin: 0;
}

.nav-bookmar-content-overlay {
    position: fixed;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-transition: all 0.7s;
    transition: all 0.7s;
    z-index: -1;

    &:not(.show) {
      pointer-events: none;
    }

    &.show {
      cursor: pointer;
      z-index: 10;
      opacity: 1;
    }
}
</style>
