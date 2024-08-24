import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap';

import './assets/css/style.css'

import { createApp } from 'vue';
import App from './App.vue';  
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);  
app.use(router);
app.use(createPinia());
app.mount('#app');
