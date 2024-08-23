import { createApp } from 'vue';
import App from './App.vue';  // Importation unique de 'App.vue'
import router from './router';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App);  // 'app' est utilisé pour créer l'instance de l'application
app.use(router);
app.use(createPinia());
app.mount('#app');
