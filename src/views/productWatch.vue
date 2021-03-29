<template>
  <div class="container">
      <div class="my-3 row py-5  border">
            <img class="col-lg-6" :src="product.image"/>
            <div class="col-lg-6 d-flex flex-column justify-content-center">
                <h1>{{ product.name }}</h1>
                <h2>${{ product.price}}</h2>
                <p>{{ product.desc}}</p>

            <div>
                <button @click="addToCart({product, quantity})" class="btn btn-info">Add to Cart</button>
            </div>
            </div>

        </div>
      
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {

    data(){
        return {
            quantity: 1
        }
    },
    
    methods: {
        ...mapActions(['addToCart'])
    },
    computed: {
        product(){
            return this.$store.state.products.find(pro => pro._id == this.$route.params.id)
        }
    }
}
</script>

<style>

</style>