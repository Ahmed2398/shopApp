<template>

<Navbar />
<router-view/>

 <Footers />

</template>
<script>
import Navbar from '../src/components/Navbar.vue'
import Footers from '../src/components/Footers.vue'

export default {
  components:{ Navbar, Footers }
}
</script>
<style lang="scss">
// @import url('../src/assets/style/common.css');


    // import "./assets/css/owl.css";
    // import "./assets/css/animate.css";

</style>
