// LODASH
window._ = require('lodash');

// AXIOS
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// VUEJS
import { createApp } from 'vue'
import App from '@app/App'

window.app = createApp(App);
window.vm = app.mount('#app');