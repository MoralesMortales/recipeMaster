import { createApp } from 'vue'
import router from './router/router'

import './style.css'
import './assets/main.css'

import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'

const app = createApp(App)

app.use(Quasar, {
  plugins: {}, // import Quasar plugins here
})

app.use(router)

app.mount('#app')
