import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import SummerTabs from '@/components/base/tab.vue'
import SummerTabPane from '@/components/base/tab-pane.vue'
import SummerCard from '@/components/base/card.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app
  .component('summer-card', SummerCard)
  .component('summer-tabs', SummerTabs)
  .component('summer-tab-pane', SummerTabPane)
  .mount('#app')
