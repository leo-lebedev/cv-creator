import './assets/main.css'


import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import {Collapse} from 'vue-collapsed'
import print from 'vue3-print-nb'


const app = createApp(App)


app.component('Collapse', Collapse)
app.use(createPinia())
app.use(router)
app.use(print)
app.mount('#app')
