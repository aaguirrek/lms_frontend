import './index.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store.js'

import { Button, setConfig, frappeRequest, resourcesPlugin } from 'frappe-ui'

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)

app.use(router)
app.use(resourcesPlugin)

// Install the store instance as a plugin
app.use(store)
app.component('Button', Button)
app.mount('#app')
