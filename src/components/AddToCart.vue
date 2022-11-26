<template>
<section id="contact">
    <div class="contanier">
      <div class="row">
        <div class="col-lg-12">
<button class="btn orange-button" type="button"  v-if="!showForm" @click="showForm =  true">
Check Out Now </button>
    
        
    <form class="row g-3" v-if="showForm" @submit.prevent="handleSubmit" >
       
  <div class="col-md-12">
    <h2>Create New Order</h2>
  </div>
  <div class="col-md-12">
    <div class="btn-wrapper mb-3">
          <h2>Add To Cart 📦</h2>
          <br>
			<button class="btn btn-red" @click.prevent="decrement"><i class="fa-solid fa-minus"></i></button>
            <h3>{{ cart }}  </h3>
           
			<button class="btn btn-green" @click.prevent="increment(electronic)"><i class="fa-solid fa-plus"></i></button>
		</div>
        <div class="mb-3">
    <span class="new-price default mb-3"><span class="label">Added To Cart 🛒: </span> 
        {{electronic.cart}} Items</span><br>
        <span class="new-price default mb-3"><span class="label">Check Total Price 💰: </span> 
        {{electronic.cart * electronic.price}} $</span>
  </div>
  </div>
       <div class="col-lg-6 col-sm-12">  
        <fieldset>
               
        <input class="form-control mb-3" type="text" placeholder="Name" required v-model="name">
        </fieldset>
    </div>
       <div class="col-lg-6 col-sm-12"> 
        <fieldset>         
        <input class="form-control mb-3" type="phone" placeholder="phone" required v-model="phone">
      </fieldset>
        </div>
       <div class=" col-lg-6 col-sm-12">
      <fieldset>
         <input class="form-control mb-3" type="text" placeholder="Your location" required v-model="location">
        </fieldset>
       </div>
       <div class="col-lg-6 col-sm-12">
      <fieldset>
         <input class="form-control mb-3" type="number" placeholder="Add Number of items" required v-model="itemsQ">
        </fieldset>
       </div>
       <div class=" col-lg-6 col-sm-12">
      <fieldset>
         <textarea class="form-control mb-3" type="text" placeholder="Your Message" v-model="message"></textarea>
        </fieldset>
       </div>
       <div class="col-lg-12 col-sm-12">
        <button class="btn orange-button" > Create </button>
       </div>
      
     </form>
      </div>
     
    </div>
  </div>
</section>
    </template>
    
    <script>
    import { ref } from 'vue'
import useDocument from '@/composables/useDocument'
import { timestamp } from '@/firebase/config'

    
export default {
 
    props: ['electronic'],
      
      setup(props) {
        const name = ref('')
        const phone = ref('')
        const message = ref('')
          const location = ref('')
          const cart = ref(0)
          const isPending = ref(false)
       const itemsQ = ref('')
        const showForm = ref(false)
        const { updateDoc } = useDocument('electronics', props.electronic.id)


        const decrement = async () => {
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
		const increment = async () => {
			isPending.value = true
			 cart.value += 1;
			 const res = await updateDoc({
        createdAt: timestamp(),
				 cart: cart.value ,
			 })
			
			 isPending.value = false
      if (!error.value) {
        // router.push({name:'ProductDetails', params:{ id:res.id}})
        console.log('ok')
      }
		}

        
        const handleSubmit = async () => {
          const newOrder = {
            name: name.value,
            location: location.value,
              meesage: message.value,
              phone: phone.value,
              itemsQ: itemsQ.value,
            id: Math.floor(Math.random() * 1000000)
          }
          const res = await updateDoc({
            carts: [...props.electronic.carts, newOrder]
          })
            name.value = ''
            location.value = ''
            message.value = ''
            phone.value = ''
            itemsQ.value = ''
            isPending.value = false
                if (!error.value) {
                    router.push({name:'home'})
                        console.log(ok)
                }
        }


        
        return { name, phone, message, location,itemsQ, increment, decrement, cart, showForm, handleSubmit }
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
.btn-wrapper h2{
  font-size: 21px;
}
	.btn {
		height: auto;
		border: none;
		border-radius: 5px;
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
    width: 25% !important;
	}

	.btn-red:hover {
		background: rgba(139, 0, 0, 0.9) !important;
        color: #fff !important;
	}

	.btn-green {
		background: green;
    width: 25% !important;
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
textarea{
  width: 100%;
    height: 46px;
    text-align: left;
    padding: 0px 15px;
    background-color: #282b2f;
    border: 1px solid #404245;
    margin-bottom: 30px;
    font-weight: 500;
    color: #afafaf;
}
    </style>