<template>
<div id="example">
  <carousel-3d  :controls-visible="true"
      :clickable="false"
      :key="electronics.length"
      :listData="electronics"
      :height="500">
    <slide :index="i" :key="i" v-for="(electronic, i) in this.electronics" >
      <figure>
        <img :src="electronic.coverUrl">
        <figcaption>
        <router-link :to="{name: 'ProductDetails', params: { id: electronic.id }}">
              {{ electronic.title }}
            </router-link>

        </figcaption>
      </figure>
    </slide>
  </carousel-3d>
</div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  data() {
    return {
      electronics: [],
    };
  },
  components: {
    Carousel3d,
    Slide,
  },
  mounted() {
   
  },
  methods: {
    
  },
};
</script>


<style>
.carousel-3d-container figure {
  margin:0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
</style>