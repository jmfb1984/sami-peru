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
            @click="$refs.refCampana.open = false"
          >
            Campaña no existe.
          </span>
        </v-select>
      </b-col>
      <b-col
        class="d-block d-lg-none"
      />
      <b-col
        xl="2"
        lg="2"
        md="3"
        sm="12"
        xs="12"
        class="mb-1 mb-lg-0"
      >
        <span class="d-flex mt-50">Zona</span>
      </b-col>
      <b-col
        xl="4"
        lg="4"
        md="6"
        sm="12"
        xs="12"
        class="mb-0"
      >
        <v-select
          ref="refZona"
          v-model="seleccionZona"
          :options="arrayZona"
          :multiple="multipleZona"
          class="dropdown-150"
          @input="setZona"
        >
          <span
            slot="no-options"
            @click="$refs.refZona.open = false"
          >
            Zona no existe.
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
    arrayZona: {
      type: Array,
      default: null,
      required: true,
    },
    multipleZona: {
      type: Boolean,
      default: false,
    },
    indexCampana: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      seleccionCampana: this.arrayCampana[this.indexCampana],
      seleccionZona: [],
    }
  },
  created() {
    if (this.multipleZona === false) {
      this.seleccionZona.push(this.arrayZona[0])
    }
  },
  methods: {
    setCampana() {
      this.$emit('campana', this.seleccionCampana)
    },
    setZona() {
      this.$emit('zona', this.seleccionZona)
    },
  },
}
</script>
