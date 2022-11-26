<template>
<div :class="{icon:true, fav: electronic.isFav}"   @click="handelUpdate(electronic)">
        			<span class="wish-icon">Add To Fav <i class="fa-solid fa-heart"></i></span>
        	</div>  
</template>
      
      <script>
      import { ref } from 'vue'
  import useDocument from '@/composables/useDocument'
  import { timestamp } from '@/firebase/config'
  
      
  export default {
   
      props: ['electronic'],
        
        setup(props) {
          const isPending = ref(false)      
          const { updateDoc } = useDocument('electronics', props.electronic.id)
  
  
          const isFav = ref (false)
      const handelUpdate = (electronic) => {
        updateDoc({
          createdAt: timestamp(),
          isFav: !electronic.isFav,
      })
      isPending.value = false
      if (!error.value) {
        // router.push({name:'ProductDetails', params:{ id:res.id}})
        console.log('ok')
      }
      }
  
  
          
          return { isFav, handelUpdate }
        }
      }
      </script>
      
      <style scoped>
      .product-details{
          padding: 60px 0 !important;
      }
    h1,
    h2 {
      font-size: 30px;
      font-weight: 600;
      margin: auto 0;
    }
      h3{
          font-size: 50px;
      }
  
    ul {
      list-style-type: none;
      padding: 0;
    }
  
    li {
      display: inline-block;
      margin: 0;
    }
  
    a {
      color: #42b983;
    }
  
    .btn-wrapper {
      display: flex;
      justify-content:space-around;
      width: 100%;
    }
  
    .btn {
      
      height: auto;
      border: none;
      border-radius: 5px;
      margin: 0 15px;
      color: white;
      font-size: 22px;
          font-weight: 600;
          padding: 0 20px;
    }
  
    .btn:hover {
      cursor: pointer;
          transition: 1s;
          transform: scale(1.1);
    }
  
    .btn-red {
      background: darkred;
    }
  
    .btn-red:hover {
      background: rgba(139, 0, 0, 0.9) !important;
          color: #fff !important;
    }
  
    .btn-green {
      background: green;
    }
  
    .btn-green:hover {
      background: rgba(0, 128, 0, 0.9) !important;
          color: #fff !important;
    }
      .btn-create{
          color: #fff;
          background-color: #FF6000;
          border:none;
          padding: 20px 26px;
      }
      .btn-create:hover{
          transform: scale(1.1) !important;
          color: #fff !important;
          background-color: #FF6000 !important;
      }
      .btn-create-order{
          color: #fff;
          background-color: #FF6000;
          border:none;
          padding: 1rem;
      }
      .btn-create-order:hover{
          transform: scale(1.1) !important;
          color: #fff !important;
          background-color: #FF6000 !important;
      }
  .add-song {
          text-align: center;
          margin-top: 40px;
        }
        form {
          max-width: 100%;
          text-align: left;
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
      </style>