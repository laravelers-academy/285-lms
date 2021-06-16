// LODASH
window._ = require('lodash');

// AXIOS
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;

// ROUTES
window.route = require('@js/modules/routes')

// VUEJS
import { createApp } from 'vue'
import App from '@app/App'
import store from '@app/vuex'


window.app = createApp(App);
app.use(store)

window.vm = app.mount('#app');