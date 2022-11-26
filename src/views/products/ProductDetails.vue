<template>

 <!-- ***** Header Area End ***** -->

  <div class="page-heading normal-space">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h6>Liberty NFT Market</h6>
          <h2>View Item Details</h2>
          <span>Home > <a href="#">Item Details</a></span>
          <div class="buttons">
            <div class="main-button">
              <a href="explore.html">Explore Our Items</a>
            </div>
            <div class="border-button">
              <a href="create.html">Create Your NFT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="item-details-page">
    <div v-if="electronic" >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <div class="line-dec"></div>
            <h2>View Details <em>For Item</em> Here.</h2>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="left-image">
            <img :src="electronic.coverUrl" alt="" style="border-radius: 20px;">
          </div>
        </div>
        <div class="col-lg-5 align-self-center">
          <h4>{{electronic.name}}</h4>
          <span class="author">
            <img :src="electronic.coverUrl" alt="" style="max-width: 50px; border-radius: 50%;">
            <h6>Shop Name:<br>{{electronic.shopName}}</h6>
          </span>
          <p>{{electronic.details }}</p>
          <div class="row">
             <div class="col-lg-4 col-md-6 col-sm-12">
              <span class="bid">
                Old Price<br><strong>{{electronic.oldPrice}} $</strong>
              </span>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <span class="bid">
                New Price<br><strong>{{electronic.price}} $</strong><br>
              </span>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <span class="owner">
                Owner<br><strong>{{electronic.userName}}</strong><br>
              </span>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <span class="bid">
                Categorey<br><strong>{{electronic.selectedCat}}</strong><br>
              </span>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <span class="bid">
                Color<br><strong>{{electronic.selectedColor}}</strong><br>
              </span>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <span class="bid">
                case<br><strong>{{electronic.selectedCase}}</strong><br>
              </span>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12">
              <!-- Start ownership (EDIT, DELETE, STOCK)  -->
      
 <div v-if="ownership" >
      
      <div   class="btn-wrapper">
        <span class="bid">Add To Stock 📦</span>
        <button class="btn btn-red" @click.prevent="decrement"><i class="fa-solid fa-minus"></i></button>
              <h3>{{ stock }}</h3>
             
        <button class="btn btn-green" @click.prevent="increment(electronic)"><i class="fa-solid fa-plus"></i></button>
       
      </div>
    <div >
      <span class="bid"><span class="label">Added To Stock: </span> 
          {{electronic.stock}} Items</span>
          <strong> {{electronic.stock}} Items</strong>
    </div>
          <button class="btn btn-primary btn-delete mx-3" v-if="ownership" @click="handleDelete">Delete Product<i class="fa-solid fa-trash"></i></button>
          <router-link class="btn btn-secondary"  v-if="ownership" :to="{name: 'EditProduct', params: { id: electronic.id }}">Edit<i class="fa-solid fa-pen-to-square"></i></router-link>
        </div>
         <!-- END ownership (EDIT, DELETE, STOCK)  -->
            </div>
          </div>
         
        </div>
        <div class="col-lg-12">
          <div class="current-bid">
            <div class="row">
              <div class="col-lg-6">
                <div class="mini-heading">
                  <AddToCart :electronic="electronic" type="button" />

                </div>
              </div>
            
           </div>
           </div>
           </div>
           </div>
           </div>
           </div>
</div>









</template>

<script>
import useStorage from '@/composables/useStorage'
import useDocument from '@/composables/useDocument'
import getDocument from '@/composables/getDocument'
import getUser from '@/composables/getUser'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { timestamp } from '@/firebase/config'

import Fav from '@/components/Fav.vue'
import AddToCart from '@/components/AddToCart.vue'


export default {
 components:{AddToCart, Fav},
 props: ['id',],

 setup(props) {
     const { error, document: electronic } = getDocument('electronics', props.id )
     const {user} = getUser()
     const { deleteDoc, updateDoc } = useDocument('electronics', props.id)
     const { deleteImage } = useStorage()
     const router = useRouter()

     // ownership to giv it permitions to delete or update
     const ownership = computed(() => {
       return electronic.value && user.value && user.value.uid == electronic.value.userId
     })
       // Delete Function
     const handleDelete = async () => {
     await deleteDoc()
     await deleteImage(electronic.value.filePath)
     router.push({ name: 'home' })
     }
//////////////////////////////

     // Add to Fav
     const isFav = ref (false)
     const handelUpdate = (electronic) => {
       updateDoc({
         createdAt: timestamp(),
         isFav: !electronic.isFav,
         userId: user.value.uid,
         userName: user.value.displayName,
     })
     isPending.value = false
     if (!error.value) {
       // router.push({name:'ProductDetails', params:{ id:res.id}})
       console.log('ok')
     }
     }


     
     
//////////////////////////////
// stock Add 
 const stock = ref(0)
   const isPending = ref(false)
   const decrement = async () => {
     isPending.value = true
     if (stock.value) {
       stock.value -= 1;
         }
       const res = await updateDoc({
       createdAt: timestamp(),
       stock: stock.value
     })
       isPending.value = false
     if (!error.value) {
       // router.push({name:'ProductDetails', params:{ id:res.id}})
       console.log('ok')
     }
   }
   const increment = async () => {
     isPending.value = true
      stock.value += 1;
      const res = await updateDoc({
       createdAt: timestamp(),
        stock: stock.value ,
      })
     
      isPending.value = false
     if (!error.value) {
       // router.push({name:'ProductDetails', params:{ id:res.id}})
       console.log('ok')
     }
   //         updateDoc({
   //     createdAt: timestamp(),
   //     count: count.value
   //   })
   }



   // cart Add 
     const cart = ref(30)

   const decrementCart = async () => {
     isPending.value = true
     if (cart.value) {
       cart.value -= 1;
         }
       const res = await updateDoc({
       createdAt: timestamp(),
       cart: cart.value
     })
       isPending.value = false
     if (!error.value) {
       // router.push({name:'ProductDetails', params:{ id:res.id}})
       console.log('ok')
     }
   }
   const incrementCart = async () => {
     isPending.value = true
      cart.value += 1;
      const res = await updateDoc({
       createdAt: timestamp(),
        cart: cart.value ,
        userId: user.value.uid,
         userName: user.value.displayName,
      })
     
      isPending.value = false
     if (!error.value) {
       // router.push({name:'ProductDetails', params:{ id:res.id}})
       console.log('ok')
     }
   //         updateDoc({
   //     createdAt: timestamp(),
   //     count: count.value
   //   })
   }
 
 

   // Total price
     const totalPrice = ref(0)

     const total = async (electronic) => {
       isPending.value = true
       totalPrice =  ( electronic.count * electronic.price )
       const res = await updateDoc({
       createdAt: timestamp(),
       totalPrice: totalPrice.value ,
        userId: user.value.uid,
       userName: user.value.displayName,
      })

      isPending.value = false
     if (!error.value) {
       // router.push({name:'ProductDetails', params:{ id:res.id}})
       console.log('ok')
     }

     }
    
   
     return { error, electronic, ownership, handleDelete, handelUpdate, isFav, increment, decrement, stock , incrementCart, decrementCart, cart  }

  
 },

 
}



 

 
 
   

</script>

<style scoped>
.product-details{
 padding: 60px 0;
}
.red{
 color: red;
}
.favstyle{
 padding: 15px;
 border: 0;
}
.icon {
 color: #bbbbbb;
 cursor: pointer;
 font-size: 30px;
 margin: 20px 0;
}
.icon.fav{
 color: red;
 font-size: 30px;
 margin: 20px 0;
}
.fa-heart{
 font-size: 30px;
 margin: 20px 0;
}
.wish-icon .fa-heart {
   border: none;

   padding: 10px;
}

.label{
 color: #999;
   font-size: 22px;
   font-weight: 500;
   margin-right: 10px;
}
.fav{
 font-weight: 600;
 font-size: 22px;
 margin-right: 10px;
}
.default{
 color: #FF6000;
 font-weight: 600;
 font-size: 22px;
}
.old-price{
 text-decoration: line-through;
 color: #999 !important;
}
.product-description{
 color: #999;
 font-size: 16px;
 font-weight: 400;
}
.btn {
 color: #fff;
 text-transform: uppercase;
   font-weight: bold;
   background: none;
   border: none;
   padding: 8px 13px;
   margin-top: 15px;
   line-height: 16px;
   border-radius: 20px;
   background-color: #FF6000;
   border-radius: 10px;
   font-size: 20px;
}
 .btn:hover,   .btn:focus {
 color: #fff;
 background: #FFA800 ;
 box-shadow: none;
 transition: 3s;
 transform: scale(1.1);
}
 .btn i {
 font-size: 24px;
 font-weight: bold;
 margin-left: 5px;
}
.btn-delete{
 background-color:red;
 /* margin:0 20px !important; */
}
.btn-delete:hover,  .btn-delete:focus {
 color: #fff;
 background: rgb(199, 23, 23) !important;
 box-shadow: none;
}
.cart{
 color:#999;
 font-size: 22px;
}
.btn-wrapper {
   display: flex;
   justify-content: flex-start;
   width: 100%;
 }
 .btn-red {
   background: darkred !important;
   border-radius: 0;
   margin: 0 20px;
 }

 .btn-red:hover {
   background: rgba(139, 0, 0, 0.9) !important;
 }

 .btn-green {
   background: green !important;
   border-radius: 0;
   margin: 0 20px;

 }

 .btn-green:hover {
   background: rgba(0, 128, 0, 0.9) !important;
 }
</style>