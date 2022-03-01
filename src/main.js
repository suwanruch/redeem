import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueMobileDetection from "vue-mobile-detection";

loadFonts()

createApp(App)
  .use(vuetify)
  .use(VueMobileDetection)
  .mount('#app')
