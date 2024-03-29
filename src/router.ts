import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
} from 'vue-router'

// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
// @ts-ignore
const pages = import.meta.glob('./pages/*.vue')

const routes = Object.keys(pages).map(path => {
  const name = path.match(/\.\/pages(.*)\.vue$/)![1].toLowerCase()
  return {
    path: name === '/home' ? '/' : name,
    component: pages[path], // () => import('./pages/*.vue')
  }
})

// eslint-disable-next-line import/prefer-default-export
export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    // @ts-ignore
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  })
}
