<template>
	<div class="hello">
        
		<div class="btn-wrapper">
			<div v-for="electronic in electronics" :key="electronic.id">
				<h3>{{ count }}</h3>
			<h3>{{electronic.name}}</h3>
			</div>
				<button class="btn btn-red" @click.prevent="decrement"><i class="fa-solid fa-minus"></i></button>
          

			<button class="btn btn-green" @click.prevent="increment(electronic)"><i class="fa-solid fa-plus"></i></button>
			</div>
			
		</div>
		
</template>

<script>
import useDocument from '@/composables/useDocument'
import getDocument from '@/composables/getDocument'

import { ref } from 'vue';
import getUser from '@/composables/getUser'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { timestamp } from '@/firebase/config'
import { projectFirestore } from "@/firebase/config";


export default {

    name: 'Counter',
	props: ['electronics'],
    // data() {
    //     return {
    //         msg: 'Add To Cart 🛒',
           
    //     }
    // },
		// methods: {
			
		//     decrement() {
		//         if (this.cart) {
		//             this.cart -= 1;
		//         }
		//         updateDoc({
		//     createdAt: timestamp(),
		//     count: count.value
		//   })

		//     },
		//     increment() {
		//         this.cart += 1;
		//     }
		// },
	setup(props) {
		const { user } = getUser()
        const {error, document: electronic } = getDocument('electronics', props.id)

        const { updateDoc } = useDocument('electronics', props.id)
   
        const ownership = computed(() => {
            return electronic.value && user.value && user.value.uid == electronic.value.userId
        })

		const count = ref(0)
		const isPending = ref(false)

		const decrement = async () => {
			isPending.value = true
			if (count.value) {
				count.value -= 1;
				
           }
		   const res = await updateDoc({
        createdAt: timestamp(),
        count: count.value
      })
	  isPending.value = false
      if (!error.value) {
        // router.push({name:'ProductDetails', params:{ id:res.id}})
        console.log('ok')
      }
		}
		const increment = async () => {
			isPending.value = true
			 count.value += 1;
			 const res = await updateDoc({
        createdAt: timestamp(),
				//  count: count.value
				 count: count.value ,
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

		const submitCount = async () => {
			isPending.value = true
			const res = await updateDoc({
				count: count.value,
				createdAt: timestamp(),
			})
			isPending.value = false
      if (!error.value) {
        // router.push({name:'ProductDetails', params:{ id:res.id}})
        console.log('ok')
      }
			
		}
	

        return{error,ownership, user,  electronic, decrement, increment, count, submitCount}
    }
    }


  


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
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
		justify-content: flex-start;
		width: 100%;
	}

	.btn {
		width: 100px;
		height: auto;
		border: 1px solid black;
		border-radius: 5px;
		margin: 0 15px;
		color: white;
		font-size: 40px;
        font-weight: 800;
	}

	.btn:hover {
		cursor: pointer;
	}

	.btn-red {
		background: darkred;
	}

	.btn-red:hover {
		background: rgba(139, 0, 0, 0.9) !important;
	}

	.btn-green {
		background: green;
	}

	.btn-green:hover {
		background: rgba(0, 128, 0, 0.9) !important;
	}
</style>