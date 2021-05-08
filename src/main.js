import 'virtual:windi.css'

import { createApp, reactive, watchEffect } from 'vue'
import Layout from './layout.vue'

import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages' // routes created automagically by vite-plugin-pages

const app = createApp(Layout)

// Providers
app.provide('log', console.log.bind(console)) // expose log to the templates. usage: const log = inject('log')

// Store is provided to the whole app.
// Usage: const $store = inject('$store')
import store from './store.js'
app.provide('$store', store)

// Router
const router = createRouter({
    history: createWebHistory(),

    routes: [
        /* additional routes can be configured here */
        ...routes,
        /* or here. The order matters - see vue-router docs */
    ],
})
app.use(router)

app.mount('#app')
