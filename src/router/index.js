import { createRouter, createWebHistory } from 'vue-router'
import Prods from '../components/products.vue';
import Add from '../components/addProd.vue' ;
import edit from '../components/editProd.vue' ;
const routes = [
    {    
      path: '/all',
      component: Prods 
    },
    {    
      path: '/add',
      component: Add
    },
    {    
      path: '/edit/:id',
      component: edit 
    }


  ]; 
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
