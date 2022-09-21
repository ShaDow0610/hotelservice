import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/js/main'
import './assets/css/style.css'
import './assets/css/aos.css'
import BaseLayout from './components/BaseLayout.vue'
// import vue2Editor from "vue2-editor";

// vue.use(vue2Editor)


const app = createApp(App)
app.component('bases',BaseLayout)
app.use(store).use(router).mount('#app')

// createApp(App).use(store).use(router).mount('#app')

