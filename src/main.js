import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import './styles/index.scss'
import 'element-plus/lib/theme-chalk/index.css'
import $ from 'jquery'
import ElementLocale from 'element-plus/lib/locale'
import i18n from './lang'
ElementLocale.i18n((key, value) => i18n.global.t(key, value))
window.jQuery = $
window.$ = $

const app = createApp(App)
app.use(store)
app.use(router)
app.use($)
app.use(i18n)
app.use(ElementPlus)
app.mount('#app')
