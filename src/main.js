import { createApp } from 'vue'
import App from './App.vue'

import MenuButton from './components/UI/MenuButton'
import TitlePage from './components/UI/TitlePage.vue'
import ThTable from './components/UI/ThTable'
import TdTable from './components/UI/TdTable'
import BlueButton from './components/UI/BlueButton.vue'
import RedButton from './components/UI/RedButton.vue'
import ConfirmDialog from './components/UI/ConfirmDialog'

const app =createApp(App)

app.config.unwrapInjectedRef = true

app.component('menu-button',MenuButton)
app.component('title-page', TitlePage)
app.component('th-table', ThTable)
app.component('td-table',TdTable)
app.component('blue-button',BlueButton)
app.component('red-button', RedButton)
app.component('confirm-dialog',ConfirmDialog)
app.mount('#app')
