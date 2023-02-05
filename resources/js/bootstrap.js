// LODASH
window._ = require('lodash');

// AXIOS
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;
window.csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

// ROUTES
window.route = require('@js/modules/routes')

// VUEJS
import { createApp } from 'vue'
import App from '@app/App'
import store from '@app/vuex'
import router from '@app/router'


window.app = createApp(App);
app.use(store)
app.use(router)

window.vm = app.mount('#app');