import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
  headers: {
    'Content-Type': 'text/plain',
  },
})

Vue.prototype.$http = axiosIns

export default axiosIns
