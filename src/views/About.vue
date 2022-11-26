<template>
  <header>
    <div class="home">
   
          
 </div>
    <div class="bg">
      <h1>Home & Furnitures</h1>
      <h6>ABOUT OUR COMPANY</h6>
    </div>
  </header>
  <section class="about-details p-60">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <span>HOME FURNITURE & DECOR</span>
          <h3>
            We pride ourselves in our guaranteed selection of affordable
            high-quality home furnishings
          </h3>
          <div
            class="divider"
            style="border-color: #d4af37; border-width: 2px"
          ></div>
        </div>
        <div class="col-lg-6 m-auto">
          <p class="lead text-muted">
            Infinite Furniture carries a wide selection of bedroom, living room,
            and dining room furniture, in our beautifully decorated showrooms.
            We carry some of the most recognized names in furniture in all of
            USA!
          </p>
          <p class="lead text-muted">
            Our family buyers continue to always search for the best buys and
            values in the furniture market. We shop during four international
            shows each year. Making certain to always find products coming from
            around the world. Today’s fine furniture is built in The United
            States, Thailand, South America, Canada, and China.
          </p>
          <router-link :to="{ name: 'home' }" class="btn"
            >Visit Shop</router-link
          >
        </div>
        <div class="col-lg-6">
          <img src="../assets/pic-1.jpg" w-75 />
        </div>
      </div>
    </div>
  </section>
  <div class="divider"></div>
  <section class="about p-60">
    <div class="contanier">
      <div class="row">
        <div class="col-lg-12">
          <h3 class="text-start">Make your home feel like new</h3>
        </div>
        <div class="col-lg-6">
          <p class="lead text-muted text-start">
            Our mission is to serve by manifesting a shift in the retail
            paradigm—one in which beauty, experience, and magic are composed
            onto a platform of cause-related products that guide creative
            expression, cele- brate individuality, and cultivate the
            actualization of home as the sacred .
          </p>
        </div>
        <div class="col-lg-6">
          <p class="lead text-muted text-start">
            Infinite Furniture is a portal into collective
            creativity—integrating the elements of healing, education, theater,
            art, and interconnecti- vity to create the experience of a
            three-dimensional living magazine and interactive museum.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="boxes">
    <div class="contanier">
      <div class="row g-0">
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class=" white-box ">
                <img src="../assets/icon-about-1i.png">
                <h3>Custom Design</h3>
                <p>The details matter. To bring your look together or create a style all your own, schedule a call with one of our designers.</p>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class=" white-box ">
                <img src="../assets/icon-about-2i.png">
                <h3>Delivery and Set- Up</h3>
                <p>Our knowledgeable experts will assure that your new products arrive safely and are set up properly.</p>
            </div>
        </div>
         <div class="col-lg-4 col-md-6 col-sm-12">
            <div class=" white-box ">
                <img src="../assets/icon-about-3i.png">
                <h3>Free Shipping</h3>
                <p>Free shipping applies to all Standard Shipped items delivered within the 48 contiguous United States.</p>
            </div>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>
import ListView from '@/components/ListView.vue';
import getCollection from '@/composables/getCollections';

  export default {
  name: 'about',
  components: { ListView },
  setup() {
    const { error, documents } = getCollection('electronics')

    return {error, documents}
    }
  };
</script>

<style scoped lang="scss">
  @import "@/assets/style/main.scss";

  .bg {
    background-image: url("../assets/page-title-bg.jpg");
    background-position: center center;
    width: 100%;
    background-repeat: no-repeat;
    padding: 120px 0px 220px 0px;
  }
  .bg h1,
  h6 {
    margin-left: 3rem;
    text-align: left;
    color: $primaryColor;
    font-weight: 600;
  }
  .about-details {
    padding: 60px 0;
  }
  .about-details span {
    color: $secondColor;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 2px;
  }
  .about-details h3 {
    color: $primaryColor;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 0px;
    text-transform: none;
  }

  .about-details img {
    max-width: 100%;
  }
  .about-details p {
    text-align: left;
  }
  .about-details .btn {
    background-color: $secondColor;
    color: $naturalColor;
    font-size: 13px;
    letter-spacing: 2px;
    color: #ffffff;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
  }
  .about-details .btn:hover {
    background-color: $primaryColor;
    color: $naturalColor;
  }
  // end
  .about h3 {
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 0px;
    text-transform: none;
    color: $primaryColor;
  }
  .about h2 {
    color: $secondColor;
  }
  .list-group {
    list-style: none;
  }
 .white-box{
    text-align: left;
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 50px 50px 30px 30px;
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border-color: #e6e6e6;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-left: 15px;
  }
  .white-box img{
    max-width: 100;
    height: auto;
    padding: 15px 0;
  }
  .white-box h3{
    font-size: 22px;
    font-weight: 500;
    text-transform: none;
        padding: 15px 0;
  }
  .white-box p{
    line-height: 1.7;
  }
</style>
