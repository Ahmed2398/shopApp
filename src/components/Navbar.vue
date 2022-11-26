<template>


<!-- ***** Preloader Start ***** -->

  <!-- ***** Preloader End ***** -->

  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <!-- ***** Logo Start ***** -->
                    <router-link :to="{name: 'home'}" class="logo" > 
                      <img src="../assets/images/logo.png" alt="">
                    </router-link>

                    <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** -->
                    <ul class="nav">
                       
                        <li>
                            <router-link :to="{name: 'home'}" >Home</router-link>
                           </li>
                           <!--HOME-END-->
                           <!--SHOP-->
                           <li>
                            <router-link :to="{name: 'about'}" >About</router-link>
                              
                           </li>
                           <!--SHOP-END-->
                           <!--product-meu start-->
                           <li>
                            <router-link :to="{name: 'allproducts'}" >Products</router-link>
                           </li>
                           <!--product-meu end-->

                           <!--Categories start-->
                           <li>
                            <router-link :to="{name: ''}" >Categories</router-link>
                           </li>
                           <!--Categories end-->

                           <!--Contact  start-->
                           <li>
                            <router-link :to="{name: 'contactus'}" >Contact-US</router-link>
                           </li>
                           <!--Contact-end end-->
                           <div v-if="user">
                       
                           <li> <h4 class="text-dark name-user mx-2" >Welcome ❤ {{user.displayName}} 👋 |</h4></li>
                           <li> <router-link class="btn btn-link btn-link-product mx-2 " :to="{name: 'CreateProduct'}">
                              Add Product ➕ |</router-link></li>
                           <li>  <button class="btn btn-link btn-link-product mx-2 " @click="handelClick">Logout 🔐</button> </li>
                              <li ></li>
                        <div v-if="electronic">
                         <span>{{electronic.count}}</span>
                        </div>
            </div>
                              </ul>   
                    
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    <!-- ***** Menu End ***** -->
                </nav>
            </div>
        </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->

  






</template>

<script>
import carousel from 'vue-owl-carousel'
import useDocument from '@/composables/useDocument'
import getDocument from '@/composables/getDocument'
import useLogout from '@/composables/useLogout'
import getUser from '@/composables/getUser'
import { ref , computed} from 'vue'
import { useRouter } from 'vue-router'

export default {
   props: ['id'],
   components: {
    
  },
setup(props){
    const { error, logout, isPending} = useLogout()
    const {  document: electronic } = getDocument('electronics', props.id)
    const {user} = getUser()
   const { deleteDoc, updateDoc } = useDocument('electronics', props.id)

    const router = useRouter()
 // ownership to giv it permitions to delete or update
 const ownership = computed(() => {
        return electronic.value && user.value && user.value.uid == electronic.value.userId
      })


    const handelClick = (async () => {
        await logout () 
        if(!error.value)
     console.log('user logged out')
     router.push({name: 'home'})
    })
    return {error, logout, isPending, user , handelClick, ownership, electronic}
}
}
</script>


<style >
/* @import '../assets/css/owl.css';
@import '../assets/css/swiper-bundle.min.css'; */



</style>