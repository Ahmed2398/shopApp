<template>
  <section id="contact">
    <div class="container ">
    <div class="row">
        <div class="col-lg-12 p-3">
            <h2 class=" head-add">Add New Product</h2>
        </div>
        <form @submit.prevent="handleSubmit" class="row g-3">
  <div class="col-md-6">
    <label  class="form-label">Product Name</label>
    <input type="text" class="form-control" v-model="name">
  </div>
  <div class="col-md-6">
    <label  class="form-label">Product Title</label>
    <input type="text" class="form-control" v-model="title">
  </div>
  <div class="col-md-6">
    <label  class="form-label">Shop Name</label>
    <input type="text" class="form-control" v-model="shopName">
  </div>
  <!-- <div class="col-md-6">
    
    <label class="form-label">Select case</label>
      <select class="form-select"  >
      
        <option v-for="item in arr" :key="item.arr" >{{ item }}</option>
        
       
      </select>
  </div> -->
  <div class="col-md-6">
    <label class="form-label">Select categories</label>
    <select class="form-select form-control" v-model="selectedCat">
    <option value="" disabled selected>Categories</option>
    <option v-for="item in arrCategories" :key="item.arrCategories">{{item}}</option>
</select>
  </div>
  <div class="col-md-6">
    <label class="form-label">Select Color</label>
      <select  class=" form-select form-control" v-model="selectedColor">
    <option value="" disabled selected>Colors</option>
    <option v-for="item in arrColors" :key="item.arrColors">{{item}}</option>
</select>
  </div>
  <div class="col-md-6">
    <label class="form-label">Select Case</label>
      <select  class="form-select form-control" v-model="selectedCase">
    <option value="" disabled selected>Case</option>
    <option v-for="item in arrCase" :key="item.arrCase" >{{ item }}</option>
</select>
  </div>
  <div class="col-md-6">
    <label class="form-label">Product Price</label>
    <input type="number" class="form-control"  v-model="price">
    
  </div>
  <div class="col-md-6">
    <label class="form-label">Product Old Price</label>
    <input type="number" class="form-control"  v-model="oldPrice">
    
  </div>

  <div class="col-md-6">
    <label  class="form-label"> Product Details</label>
    <input type="text" class="form-control" v-model="details">
  </div>
  <div class="col-md-6">
    <label class="form-label">Cover Iamge<span>Please select (png or jpg)</span></label>
    <input class="form-control"  type="file" @change="handleChange">
    <div class="error">{{ fileError }}</div>
  </div>
  <div class="col-12">
    <button class="btn btn-secondary btn-create" v-if="!isPending">Create</button>
    <button  class="btn btn-secondary" v-else disabled>Saving...</button>

  </div>
</form>
      
    </div>
  </div>
  </section>
 
</template>


<script>
import { ref } from 'vue'
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import {useRouter} from 'vue-router'
export default {
 
  setup() {
  
    // const arr = ref(["a","b","c"]);
    // the way to push array

    // 1-array for case
    const arrCase = ref([]);
    arrCase.value.push("New");
    arrCase.value.push("Used");
    // console.log(arr.value)

    // 2- array for categories
    const arrCategories = ref([]);
    arrCategories.value.push("Smart Phones");
    arrCategories.value.push("Head Phones");
    arrCategories.value.push("Speakers");
    arrCategories.value.push("Accessories");

    // 3- array for Colors
    const arrColors = ref([]);
    arrColors.value.push("Red");
    arrColors.value.push("Blue");
    arrColors.value.push("Gold");
    arrColors.value.push("Black");



    
    
      
        const { filePath, url, uploadImage } = useStorage()
        const { error, addDoc } = useCollection('electronics')
        const { user } = getUser()
      const router = useRouter()
        
    // 2- my inputs 
        const name = ref('')
        const title = ref('')
        const details = ref('')
        const shopName = ref('')
        const oldPrice = ref(null)
        const price = ref('')
        const selectedCat = ref('')
        const selectedColor = ref('')
        const selectedCase = ref('')
        const file = ref(null)
        const fileError = ref(null)
        const isPending = ref(false)

    // 3- Form Action 
        const handleSubmit = async () => {
            if (file.value) {
                // start make btn pending
                isPending.value = true

                await uploadImage(file.value)
              const res = await addDoc({
                    name: name.value,
                    title: title.value,
                    details: details.value,
                    shopName: shopName.value,
                    oldPrice: oldPrice.value,
                    price: price.value,
                    selectedCat: selectedCat.value,
                    selectedColor: selectedColor.value,
                    selectedCase: selectedCase.value,
                    userId: user.value.uid,
                    userName: user.value.displayName,
                    coverUrl: url.value,
                    filePath: filePath.value,
                createdAt: timestamp(),
               
                })
                isPending.value = false
                if (!error.value) {
                    router.push({name:'ProductDetails', params:{ id:res.id}})
                        console.log(ok)
                }
            }
        }

        // allowed  file Types
        const types = ['image/png', 'image/jpeg']

    const handleChange = (e) => {
      let selected = e.target.files[0]
      console.log(selected)

      if (selected && types.includes(selected.type)) {
        file.value = selected
        fileError.value = null
      } else {
        file.value = null
        fileError.value = 'Please select an image file (png or jpg)'
      }
    }
    
    
        // 3- return values
        return {name, title, details, price, oldPrice, name, shopName, selectedCat, selectedColor , selectedCase, arrCase, arrCategories, arrColors  ,handleSubmit,  handleChange, isPending ,   }
  },

}
</script>

<style scoped>
  @import "@/assets/style/main.scss";

  .btn-create{
    background-color: #FF6000;
    padding: 10px 20px;
    border: 0;
    font-size: 22px;
    font-weight: 700;
  }
  .btn-create:hover{
    background-color: #FFA800 !important;
    transition: 3s;
    transform: scale(1.1);
  }
.head-add{
  text-align: center;
  color: #FF6000;
  font-size: 50px;
  font-weight: 800;
  text-transform: capitalize;
}

  label {
    font-size: 16px;
    font-weight: 600;
    display: block;
    margin-top: 30px;
    text-transform: capitalize;
    color: #999;
  }
  
  .form-control{
    font-size:16px;
  }
  .form-control:focus{
    color: #212529;
    background-color: #fff;
    border-color: #FFA800;
    outline: 0;
    box-shadow: none !important;
  }
  
  button {
    margin-top: 20px;
  }

  section{
    margin-top:  0px !important;
  }
  #contact{
    margin-bottom: 0px !important;
  }
</style>

