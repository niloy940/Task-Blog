import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import authModule from './modules/auth'
import postsModule from './modules/posts'

import { registerModules } from "./register-modules"

registerModules({
	auth: authModule,
	posts: postsModule
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
