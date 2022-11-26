import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth } from './firebase/config'

import Carousel3d from 'vue3-carousel-3d';
import "vue3-carousel-3d/dist/index.css";


//global style
// import './assets/style/main.scss'
import './assets/style/common.css';


// bootstrap config 

    import "./assets/css/templatemo-liberty-market.css";
    import "./assets/css/owl.css";
    import "./assets/css/animate.css";
   
    import "bootstrap/dist/css/bootstrap.css"




let app 

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(router).mount('#app')

    }   
})
// import "bootstrap/dist/js/bootstrap";
import"./vendor/jquery/jquery.min.js";

// import "./assets/js/isotope.min.js";
import "./assets/js/owl-carousel.js";

// import "./assets/js/popup.js";
// import "./assets/js/custom.js";
let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;

window.$ = window.jQuery = require('jquery');
Vue.use({
    install: function(Vue, options){
        Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
        }
    });