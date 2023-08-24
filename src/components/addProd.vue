<template>
    <div>
      <h2>This is to Add Products</h2>
      <form @submit.prevent="addProd">
        <label for=""> Product Name :
            <input type="text"  v-model="product.product_name">
        </label>
        <br>

        <label for=""> Product Category:
            <input type="text" v-model="product.product_category">
        </label>
        <br>

        <label for="">  Product Image:
            <input type="text"  v-model="product.product_image">
        </label>
        <br>

        <label for="">  Product Price:
            <input type="text"  v-model="product.product_price">
        </label>
        <br>
       <button type="submit"> Add Product</button>
      </form>
    </div>
  </template>
  <script>


  export default {
    name: 'add',
    data() {
    return {
       product :{} 
    } 
  },
  methods : {
      addProd() {
      console.log(this.product);
        try {
            fetch("https://sixth-zp4e.onrender.com/products", {
             method : "POST",
             headers: {
                    'Content-type' : 'application/json'
             },
                body: JSON.stringify(this.product)
          }).then(response => response.json()).then(data => {
            this.product = data ;
            console.log(this.product) ;
          })
        }catch(error) {
            console.log(this.error) ;
        }
      }
  }, 
  created() {
      this.addProd();
  }
  }
  </script>
  <style >
    
  </style>