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
        <span class="d-flex mt-50">Región</span>
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
          ref="refRegion"
          v-model="seleccionRegion"
          :options="arrayRegion"
          :multiple="multipleRegion"
          class="dropdown-150"
          @input="setRegion"
        >
          <span
            slot="no-options"
            @click="$refs.refRegion.open=false"
          >
            Región no existe.
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
    arrayRegion: {
      type: Array,
      default: null,
      required: true,
    },
    multipleRegion: {
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
      seleccionRegion: [],
    }
  },
  created() {
    if (this.multipleRegion === false) {
      this.seleccionRegion.push(this.arrayRegion[0])
    }
  },
  methods: {
    setCampana() {
      this.$emit('campana', this.seleccionCampana)
    },
    setRegion() {
      this.$emit('region', this.seleccionRegion)
    },
  },
}
</script>
