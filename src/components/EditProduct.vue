<template>
    <div class="contanier">
      <div class="row">
        <div class="col-lg-12">
    <div class="add-song">
        <button v-if="!showForm" @click="showForm = true">edit Songs</button>
        <form v-if="showForm" @submit.prevent="handleSubmit">
          <h4>Add a New Song</h4>
          <input type="text" placeholder="Song title" required v-model="name">
          <button >Edit</button>
        </form>
      </div>
        </div>
      </div>
    </div>
    </template>
    
    <script>
    import { ref } from 'vue'
    import useDocument from '../composables/useDocument'
    
    export default {
      props: ['electronic'],
      setup(props) {
        const name = ref('')
        const showForm = ref(false)
        const { updateDoc } = useDocument('electronics', props.electronic.id)
    
        const handleSubmit = async () => {
          const newSong = {
            name: name.value,
          }
          const res = await updateDoc({
            electronics: [...props.electronic.name]
          })
          name.value = ''
          artist.value = ''
        }
    
        return { name,  showForm, handleSubmit }
      }
    }
    </script>
    
    <style scoped>
      .add-song {
        text-align: center;
        margin-top: 40px;
      }
      form {
        max-width: 100%;
        text-align: left;
      }
    </style>