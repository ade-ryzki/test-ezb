import { createApp } from 'vue'
import App from './App.vue'

import MenuButton from './components/UI/MenuButton'
import TitlePage from './components/UI/TitlePage.vue'
import ThTable from './components/UI/ThTable'
import TdTable from './components/UI/TdTable'

const app =createApp(App)

app.component('menu-button',MenuButton)
app.component('title-page', TitlePage)
app.component('th-table', ThTable)
app.component('td-table',TdTable)

app.mount('#app')
