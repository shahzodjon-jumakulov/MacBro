import { createApp } from 'vue'

import router from './router.js'
import App from './App.vue'

import BaseButton from './UI/BaseButton.vue'

const app = createApp(App)

app
    .component('BaseButton', BaseButton)

app.use(router)

app.mount('#app')

