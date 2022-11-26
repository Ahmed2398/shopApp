<template>
  <!-- ***** Main Banner Area Start ***** -->
  <div class="main-banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center">
          <div class="header-text">
            <h6>Liberty NFT Market</h6>
            <h2>Create, Sell &amp; Collect Top NFT’s.</h2>
            <p>Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMo's free css templates.</p>
            <div class="buttons">
              <div class="border-button">
                <a href="explore.html">Explore Top NFTs</a>
              </div>
              <div class="main-button">
                <a href="https://youtube.com/templatemo" target="_blank">Watch Our Videos</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
    

<carousel-3d>
    <slide :index="0">
      <img src="@/assets/images/banner-01.png" alt="">

    </slide>
    <slide :index="1">
      <img src="@/assets/images/banner-02.png" alt="">

    </slide>
  </carousel-3d>
          <div class="owl-banner owl-carousel">
            <div class="item">
              <img src="@/assets/images/banner-01.png" alt="">
            </div>
            <div class="item">
              <img src="@/assets/images/banner-02.png" alt="">

            </div>
          </div>

          
        </div>
      </div>
    </div>
  </div>
  <!-- ***** Main Banner Area End ***** -->
</template>

<script>
import { Carousel3d, Slide } from 'vue3-carousel-3d';

export default {
    components: {
     Carousel3d,
     Slide
  },
}
</script>

<style>

</style>