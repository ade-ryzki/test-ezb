import { createApp } from 'vue'
import App from './App.vue'

import MenuButton from './components/UI/MenuButton'
const app =createApp(App)

app.component('menu-button',MenuButton)

app.mount('#app')
