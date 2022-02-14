<template>
  <b-card>
    <b-row>
      <b-col
        xl="2"
        lg="2"
        md="3"
        sm="12"
        xs="12"
        class="mb-1 mb-lg-0"
      >
        <span class="d-flex mt-50">Campaña</span>
      </b-col>
      <b-col
        xl="4"
        lg="4"
        md="6"
        sm="12"
        xs="12"
        class="mb-1 mb-lg-0"
      >
        <v-select
          ref="refCampana"
          v-model="seleccionCampana"
          :options="arrayCampana"
          class="dropdown-150"
          @input="setCampana"
        >
          <span
            slot="no-options"
            @click="$refs.refCampana.open=false"
          >
            Campaña no existe.
          </span>
        </v-select>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BRow, BCol,
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    vSelect,
  },
  props: {
    arrayCampana: {
      type: Array,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      seleccionCampana: this.arrayCampana[0],
    }
  },
  methods: {
    setCampana() {
      this.$emit('campana', this.seleccionCampana)
    },
  },
}
</script>
