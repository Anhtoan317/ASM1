import { createApp } from 'vue'
import './style.css'
import router from './router/router.js'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import App from './App.vue'

const app = createApp(App);
app.use(router);
app.mount('#app');
