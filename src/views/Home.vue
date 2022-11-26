<template>
  <Banner/>
 <!-- ***** Main Banner Area End ***** -->
  
 <div class="categories-collections">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="categories">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-heading">
                  <div class="line-dec"></div>
                  <h2>Browse Through Our <em>Categories</em> Here.</h2>
                </div>
              </div>
              
              <div class="col-lg-2 col-sm-6">
                <div class="item">
                  <div class="icon">
                    <img src="@/assets/images/icon-01.png" alt="">
                  </div>
                  <h4>Blockchain</h4>
                  <div class="icon-button">
                    <a href="#"><i class="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6">
                <div class="item">
                  <div class="icon">
                    <img src="@/assets/images/icon-02.png" alt="">
                  </div>
                  <h4>Digital Art</h4>
                  <div class="icon-button">
                    <a href="#"><i class="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6">
                <div class="item">
                  <div class="icon">
                    <img src="@/assets/images/icon-03.png" alt="">
                  </div>
                  <h4>Music Art</h4>
                  <div class="icon-button">
                    <a href="#"><i class="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6">
                <div class="item">
                  <div class="icon">
                    <img src="@/assets/images/icon-04.png" alt="">
                  </div>
                  <h4>Virtual World</h4>
                  <div class="icon-button">
                    <a href="#"><i class="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6">
                <div class="item">
                  <div class="icon">
                    <img src="@/assets/images/icon-05.png" alt="">
                  </div>
                  <h4>Valuable</h4>
                  <div class="icon-button">
                    <a href="#"><i class="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6">
                <div class="item">
                  <div class="icon">
                    <img src="@/assets/images/icon-06.png" alt="">
                  </div>
                  <h4>Triple NFT</h4>
                  <div class="icon-button">
                    <a href="#"><i class="fa fa-angle-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="collections">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-heading">
                  <div class="line-dec"></div>
                  <h2>Explore Some Hot <em>Collections</em> In Market.</h2>
                </div>
              </div>

              <div class="col-lg-12">
                <div v-if="documents">
     <ListView :electronics="documents" />
   </div>
              </div>




            
            </div> 
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="create-nft">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="section-heading">
            <div class="line-dec"></div>
            <h2>Create Your Products &amp; Put It On The Market.</h2>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="main-button">
          <router-link :to="{name: 'CreateProduct'}">Create Your Product</router-link>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item first-item">
            <div class="number">
              <h6>1</h6>
            </div>
            <div class="icon">
              <img src="@/assets/images/icon-02.png" alt="">
            </div>
            <h4>Set Up Your Account</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et unde, voluptatum eaque soluta, facilis nesciunt doloremque aliquid officiis deserunt blanditiis porro voluptate odit aperiam asperiores explicabo animi cumque nemo?</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item second-item">
            <div class="number">
              <h6>2</h6>
            </div>
            <div class="icon">
              <img src="@/assets/images/icon-04.png" alt="">
            </div>
            <h4>Add Your prodect</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, reprehenderit? Itaque nisi dolore quasi natus, aspernatur optio. Veritatis modi quos incidunt facere quae repellat temporibus quia mollitia. Enim, autem corporis.. You can edit or modify any product   you add.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item">
            <div class="icon">
              <img src="@/assets/images/icon-06.png" alt="">
            </div>
            <h4>Sell Your Product &amp; Make Profit</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis nesciunt tempora quos consequatur ab mollitia sit nobis quam odio fuga recusandae exercitationem, dolore suscipit aut facilis neque dignissimos consectetur quasi?</p>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import Banner from '@/components/Banner.vue'
import { Carousel3d, Slide } from 'vue3-carousel-3d';

import ListView from '@/components/ListView.vue';
import getCollection from '@/composables/getCollections';

  // optional style for arrows & dots
  export default {
  name: 'home',
  components: { ListView,  Carousel3d, Slide ,Banner },
  setup() {
    const { error, documents } = getCollection('electronics')

    return {error, documents}
    }
  };
</script>

<style>

</style>