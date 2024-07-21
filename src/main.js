import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTyper from 'vue3-typer';
import VWave from 'v-wave'

const app = createApp(App)

app.use(router)
app.use(VWave)

app.component('VueTyper', VueTyper);

app.mount('#app')
