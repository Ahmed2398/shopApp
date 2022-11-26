	<template>
	 <carousel-3d :autoplay="true" :autoplay-timeout="1000" :disable3d="true" :width="352" :height="600" :space="400" :clickable="false" :controls-visible="true" >

    <slide v-for="(electronic, i) in electronics" :index="i" :key="electronic.id">
        <router-link :to="{name: 'ProductDetails', params: { id: electronic.id }}">
      <figure class="collection">
     
            <div class="item">
                <!-- <img :src="electronic.coverUrl"> -->
                <img :src="electronic.coverUrl" alt="" style="border-radius: 20px;">
                    <div class="down-content">
                      <h4>{{electronic.name}}</h4>
                      <span class="collection">Price In Collection:<br><strong><strike>{{electronic.oldPrice}}</strike>$/{{electronic.price}}$</strong></span>
                      <span class="category">Category:<br>
                        <strong>{{electronic.selectedCat}}</strong></span>
                      <div class="main-button">
                        <router-link  :to="{name: 'ProductDetails', params: { id: electronic.id }}">
					Product Details</router-link>   
                    <!-- <router-link class="p-cut" :to="{name: 'ProductDetails', params: { id: electronic.id }}">
					<p class="text-dark">{{ electronic.details.substring(0,60)+"......"  }}</p>
				</router-link>                      -->
                      </div>
                    </div>

				</div>
                </figure>
        </router-link>
                </slide>
                </carousel-3d>

	
</template>
	
<script>
import { Carousel3d, Slide } from 'vue3-carousel-3d';

import Navbar from './Navbar.vue'
import Fav from './Fav.vue'

export default {


	components: { Navbar, Fav, Carousel3d, Slide },
	props: ['electronics'],
	// computed: {
	// 	shortText() {
	// 		return this.text.substr(0, 5)
	// 	},

	// }
}
	</script>
	
	<style>
        @import "@/assets/css/templatemo-liberty-market.css";

        .categories .item {
  background-color: red;
  text-align: center;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #404245;
  position: relative;
}

.categories .item .icon {
  width: 62px;
  height: 62px;
  display: inline-block;
  text-align: center;
  line-height: 62px;
  background-color: #fff;
  border-radius: 50%;
}

.categories .item .icon img {
  max-width: 31px;
}

.categories .item h4 {
  margin-top: 15px;
  font-size: 20px;
}

.categories .item .icon-button a {
  display: inline-block;
  width: 46px;
  height: 46px;
  line-height: 46px;
  background-color: #fff;
  color: #7453fc;
  border-radius: 50%;
  font-size: 18px;
  position: absolute;
  left: 50%;
  bottom: -23px;
  transform: translateX(-23px);
  transition: all .3s;
  opacity: 0;
  visibility: hidden;
}

.categories .item .icon-button a:hover {
  background-color: #7453fc;
  color: #fff;
}

.categories .item:hover .icon-button a {
  visibility: visible;
  opacity: 1;
}

.collections {
  margin-top: 140px;
}

.collections .item img {
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.collections .item .down-content {
  background-color: #282b2f;
  border: 1px solid #404245;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 30px;
}

.collections .item .down-content h4 {
  font-size: 20px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.collections .item {
  padding-bottom: 60px;
}

.collections .item span {
  color: #fff;
  display: inline-block;
  width: 48%;
  font-size: 15px;
}

.collections .item span strong {
  font-size: 20px;
}

.collections .item span.category {
  text-align: right;
}

.collections .item .main-button a {
  width: 100%;
  text-align: center;
}

.collections .item .main-button {
  margin-top: 20px;
  margin-bottom: -60px;
}

.collections .item .main-button a:hover {
  background-color: #fff;
  border: 1px solid #fff;
  color: #7453fc;
}


</style>