import { createApp } from 'vue'
import App from './App.vue'
import UrForm from '@unrest/vue-form'
import '@unrest/tailwind/dist.css'

import PlaygroundForm from '@/components/PlaygroundForm'
import './styles/base.scss'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(UrForm.plugin)
app.component('PlaygroundForm', PlaygroundForm)
app.mount('#app')
