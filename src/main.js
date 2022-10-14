import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import components from '@/components/UI';
import router from './router'
import store from './store'
import cookies from "vue-cookies"

const app = createApp(App)

components.forEach(component =>{
    app.component(component.name, component)
})
app.use(router)
app.use(store)
app.use(cookies)
app.mount('#app')
