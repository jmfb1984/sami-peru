<template>
  <b-card>
    <div class="d-flex justify-content-between align-items-center">
      <div class="truncate">
        <span>{{ titulo }}</span>
        <h4 class="mb-25 mt-50 font-weight-bolder">
          {{ valor }} {{ simbolo }}
        </h4>
      </div>
      <b-avatar
        :variant="`light-${color}`"
        size="45"
      >
        <feather-icon
          size="21"
          :icon="icono"
        />
      </b-avatar>
    </div>
    <div class="mt-50 mb-50">
      <b-progress
        value="100"
        max="100"
        height="6px"
        :variant="color"
      />
    </div>
    <div
      v-for="data in detalle"
      :key="data.id"
      class="d-flex justify-content-between"
    >
      <div class="flex flex-col">
        <span class="mb-0 text-grey">
          {{ data.descripcion }}
          {{ data.valor }}
        </span>
      </div>
    </div>
  </b-card>
</template>

<script>
import {
  BCard, BAvatar, BProgress,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BAvatar,
    BProgress,
  },
  props: {
    titulo: {
      type: String,
      default: '',
    },
    valor: {
      type: String,
      default: '',
    },
    simbolo: {
      type: String,
      default: '',
    },
    icono: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    porcentaje: {
      type: Number,
      default: 0,
    },
    detalle: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
