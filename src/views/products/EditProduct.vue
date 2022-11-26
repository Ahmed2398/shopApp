<template>
  <section id="contact">
    <div class="container ">
    <div class="row">
      <div class="col-lg-12 p-3">
        <h2 class=" head-add">Edit Product</h2>
      </div>
      <form @submit.prevent="handleUpdate" class="row g-3">
        <div class="col-md-6">
          <label class="form-label">Product Name</label>
          <input   type="text" class="form-control" v-model="name" >
        </div>
        <div class="col-md-6">
          <label class="form-label">Shop Name</label>
          <input type="text" class="form-control" v-model="shopName">
        </div>
        <div class="col-md-6">
          <label class="form-label">Product Title</label>
          <input type="text" class="form-control" v-model="title" >
        </div>
        <div class="col-md-6">
          <label class="form-label">Select categories</label>
          <select class="form-select form-control" v-model="selectedCat">
            <option value="" disabled selected>Categories</option>
            <option v-for="item in arrCategories" :key="item.arrCategories">{{ item }}</option>
          </select>
        </div>
        <div class="col-md-6">
          <label class="form-label">Select Color</label>
          <select class=" form-select form-control" v-model="selectedColor">
            <option value="" disabled selected>Colors</option>
            <option v-for="item in arrColors" :key="item.arrColors">{{ item }}</option>
          </select>
        </div>
        <div class="col-md-6">
          <label class="form-label">Select Case</label>
          <select class="form-select form-control" v-model="selectedCase">
            <option value="" disabled selected>Case</option>
            <option v-for="item in arrCase" :key="item.arrCase">{{ item }}</option>
          </select>
        </div>
        <div class="col-md-6">
          <label class="form-label">Product Price</label>
          <input type="number" class="form-control" v-model="price">

        </div>
        <div class="col-md-6">
          <label class="form-label">Product Old Price</label>
          <input type="number" class="form-control" v-model="oldPrice">

        </div>

        <div class="col-md-6">
          <label class="form-label"> Product Details</label>
          <input type="text" class="form-control" v-model="details">
        </div>


        <div class="col-12">
          <button class="btn btn-secondary btn-create" v-if="!isPending">Edit</button>
          <button class="btn btn-secondary" v-else disabled>Saving...</button>

        </div>
      </form>

    </div>
  </div>
  </section>
 
</template>

<script>
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'

import useDocument from '@/composables/useDocument'
import getDocoument from '@/composables/getDocument'
import getUser from '@/composables/getUser'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { timestamp } from '@/firebase/config'

export default {
  name: "EditProduct",
  props: ['id'],
  setup(props) {
    // const {  updateDocs } = useCollection('electronics', props.id)

    const { user } = getUser()
    const { error, document: electronic } = getDocoument('electronics', props.id)
    const { deleteDoc, updateDoc } = useDocument('electronics', props.id)
    const router = useRouter()

    const ownership = computed(() => {
      return electronic.value && user.value && user.value.uid == electronic.value.userId
    })
    const { filePath, url, uploadImage } = useStorage()

    const name = ref('')
    const title = ref('')
    const details = ref('')
    const shopName = ref('')
    const oldPrice = ref(null)
    const price = ref('')
    const isPending = ref(false)
    const selectedCat = ref('')
    const selectedColor = ref('')
    const selectedCase = ref('')
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



    const handleUpdate = async () => {
      // start make btn pending
      isPending.value = true

      const res = await updateDoc({
        name: name.value,
        title: title.value,
        details: details.value,
        shopName: shopName.value,
        oldPrice: oldPrice.value,
        price: price.value,
        selectedCat: selectedCat.value,
        selectedColor: selectedColor.value,
        selectedCase: selectedCase.value,
        createdAt: timestamp(),
        userId: user.value.uid,
        userName: user.value.displayName,
      })
       

      isPending.value = false
      if (!error.value) {
        // router.push({name:'ProductDetails', params:{ id:res.id}})
        console.log('ok')
      }


    }

    ///////////// ALLOWED FILE TYPES ////////////////////////////
    const types = ['image/png', 'image/jpeg']

    //////////// IMAGE FILE CHANGE //////////////////////////////

    return { name, price, oldPrice, price, title, shopName, details, selectedCat, selectedColor, selectedCase, arrCase, arrCategories, arrColors, handleUpdate, isPending, error, electronic, user, ownership }
  }


}


</script>

<style>
section{
  margin-top:0px !important;
}
</style>