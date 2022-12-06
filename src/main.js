import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth } from './firebase/config'

import "vue3-carousel-3d/dist/index.css";


//global style



// bootstrap config 

    import "./assets/css/templatemo-liberty-market.css";
   
    import "bootstrap/dist/css/bootstrap.css"




let app 

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(router).mount('#app')

    }   
})
