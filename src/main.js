import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import AppLink from '@/components/AppLink.vue'

const app = createApp(App)

app.component("AppLink", AppLink)

app.use(router)

app.mount('#app')

