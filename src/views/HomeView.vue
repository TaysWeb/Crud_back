<template>
  <div class="home">
 
    <Prods  msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import  Prods from '@/components/products.vue'

export default {
  name: 'HomeView',
  components: {
   Prods
  }
}
</script>
