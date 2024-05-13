import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router';

import './styles/index.scss'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(router).use(pinia).mount('#app')

// production mock server
// if (process.env.NODE_ENV === 'development') {
//   import('./mock/mockServer').then(({ setupProdMockServer }) => {
//     setupProdMockServer()
//   })
// }
