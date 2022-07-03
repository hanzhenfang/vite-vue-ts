import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './router/index';

import App from './App.vue';
import './assets/tailwindcss.css'

let app = createApp(App);
app.use(createPinia());
app.use(router);
console.log('app',app,router)

app.mount('#app')

