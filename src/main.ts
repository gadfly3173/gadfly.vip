import { createSSRApp } from 'vue'
import App from './app.vue'
import { createRouter } from './router'

// eslint-disable-next-line import/prefer-default-export
export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  app.use(router)
  return { app, router }
}
